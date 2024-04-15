using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Models.Geospatial;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Controllers
{
    /// <summary>
    /// Allows for the uploading and retrievel of geospatial files
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class GeospatialFileController : ControllerBase
    {
        private readonly IGeospatialFileService _fileService;
        private readonly GeospatialConfiguration _geospatialConfig;

        public GeospatialFileController(IGeospatialFileService fileService, GeospatialConfiguration config)
        {
            _fileService = fileService;
            _geospatialConfig = config;
        }

        private string GetFileContentType(string filePath)
        {
            var extension = Path.GetExtension(filePath);
            var fileInfo = _geospatialConfig.AllowedFileTypes
                .FirstOrDefault(fileInfo => fileInfo.Extension == extension);

            return fileInfo.ContentType
                ?? throw new ArgumentException("The requested file type has no configured Content Type");
        }

        [HttpPost]
        [ProducesResponseType(typeof(ActionResult), StatusCodes.Status200OK)]
        public async Task<ActionResult<Guid>> UploadFile()
        {
            var file = Request.Form.Files.FirstOrDefault();
            if (file == null)
            {
                return BadRequest("A file is required");
            }

            try
            {
                return await _fileService.SaveFileAsync(file);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
            catch (InvalidOperationException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("{fileId:guid}")]
        [ProducesResponseType(typeof(ActionResult), StatusCodes.Status200OK)]
        public async Task<ActionResult<byte[]>> DownloadFile(Guid fileId)
        {
            if (fileId == default)
            {
                throw new ArgumentNullException("File ID must be provided");
            }

            byte[] file;
            string filename;

            try
            {
                (file, filename) = await _fileService.DownloadFileAsync(fileId);
                if (file is null || !file.Any())
                {
                    return NotFound("The requested file could not be found");
                }
            }
            catch (InvalidOperationException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "There was a problem retrieving the requested file");
            }


            return new FileContentResult(file, GetFileContentType(filename));
        }

        //[HttpGet]
        //[Route("config")]
        //[ProducesResponseType(typeof(ActionResult), StatusCodes.Status200OK)]
    }
}
