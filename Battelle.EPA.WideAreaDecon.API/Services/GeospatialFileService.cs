using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Models.Geospatial;
using Battelle.EPA.WideAreaDecon.API.Services.Helpers;
using Microsoft.AspNetCore.Http;
using OSGeo.OGR;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    public class GeospatialFileService : IGeospatialFileService
    {
        private readonly string _fileDirectory;
        private readonly List<string> _allowedFileExtensions;
        private readonly List<string> _supportedPlumeFileExtensions;

        public GeospatialFileService(GeospatialConfiguration config)
        {
            _fileDirectory = Environment.ExpandEnvironmentVariables(config.SaveDirectory);
            _allowedFileExtensions = config.AllowedFileTypes
                .Select(fileInfo => fileInfo.Extension.ToLowerInvariant())
                .ToList();
            _supportedPlumeFileExtensions = config.SupportedPlumeFileTypes.ToList();
        }

        public async Task<(byte[], string)> DownloadFileAsync(Guid id)
        {
            var filenames = Directory.GetFiles(_fileDirectory, $"{id}.*");
            if (filenames.Length == 0)
            {
                return (null, null);
            }

            var filename = filenames.SingleOrDefault();
            var file = await FileHelper.DownloadFileAsync(filename);

            return (file, filename);
        }

        public async Task<Guid> SaveFileAsync(IFormFile file)
        {
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!_allowedFileExtensions.Contains(extension))
            {
                throw new ArgumentException("The uploaded file type is not supported");
            }

            var id = Guid.NewGuid();

            if (extension.Equals(".zip"))
            {
                // extract archive and determine extension
                var tempZipPath = Path.Combine(_fileDirectory, "tmp.zip");
                var tempZipDirectory = Path.Combine(_fileDirectory, "tmp");

                await FileHelper.SaveFileAsync(file, tempZipPath);
                ZipFile.ExtractToDirectory(tempZipPath, tempZipDirectory, true);

                var extractedFiles = Directory.GetFiles(tempZipDirectory);
                var matchingFile = "";
                foreach (string ext in _supportedPlumeFileExtensions)
                {
                    matchingFile = extractedFiles.Where(f => Path.GetExtension(f) == ext).FirstOrDefault();
                    if (string.IsNullOrEmpty(matchingFile))
                    {
                        continue;
                    }

                    extension = ext;
                    break;
                }

                if (string.IsNullOrEmpty(matchingFile))
                {
                    throw new InvalidOperationException("Archive did not contain required file(s) for plume");
                }

                switch (extension)
                {
                    case ".kml":
                        {
                            var destName = $"{id}{extension}";
                            var destPath = Path.Combine(_fileDirectory, destName);

                            File.Copy(matchingFile, destPath);

                            break;
                        }
                    case ".shp":
                        {
                            // convert to kml
                            var destName = $"{id}.kml";
                            var destPath = Path.Combine(_fileDirectory, destName);

                            _ = Ogr.GetDriverByName("ESRI ShapeFile");
                            using DataSource source = Ogr.Open(matchingFile, 0);
                            Layer layer = source.GetLayerByIndex(0);

                            Driver kmlDriver = Ogr.GetDriverByName("KML");
                            using DataSource kmlDatasource = kmlDriver.CreateDataSource(destPath, Array.Empty<string>());
                            kmlDatasource.CopyLayer(layer, layer.GetName(), Array.Empty<string>());

                            break;
                        }
                    default:
                        throw new ArgumentOutOfRangeException(nameof(file));
                }

                // delete temp files
                Directory.Delete(tempZipDirectory, true);
                FileHelper.DeleteFile(tempZipPath);

                return id;
            }

            var filename = $"{id}{extension}";
            var path = Path.Combine(_fileDirectory, filename);

            return (await FileHelper.SaveFileAsync(file, path))
                ? id
                : Guid.Empty;
        }
    }
}
