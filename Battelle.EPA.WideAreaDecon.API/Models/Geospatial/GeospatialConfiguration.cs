using Battelle.EPA.WideAreaDecon.API.Models.Common;

namespace Battelle.EPA.WideAreaDecon.API.Models.Geospatial
{
    public class GeospatialConfiguration
    {
        /// <summary>
        /// List of file types that can be uploaded to the server
        /// </summary>
        public FileInformation[] AllowedFileTypes { get; set; }
        /// <summary>
        /// List of file types that can be used by the server
        /// </summary>
        public string[] SupportedPlumeFileTypes { get; set; }
        public string SaveDirectory { get; set; }
    }
}
