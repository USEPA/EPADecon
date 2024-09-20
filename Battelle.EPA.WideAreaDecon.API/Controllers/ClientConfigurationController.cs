using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Models.ClientConfiguration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Controllers
{
    /// <summary>
    /// Controller which provides configuration information to the client.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ClientConfigurationController : ControllerBase
    {
        private readonly IClientConfigurationService _configProvider;

        /// <summary>
        /// Default constructor, requires a non-null provider
        /// </summary>
        /// <param name="configProvider"></param>
        public ClientConfigurationController(IClientConfigurationService configProvider)
        {
            _configProvider = configProvider ??
                throw new ArgumentNullException(nameof(configProvider));
        }

        /// <summary>
        /// Retrieves the client configuration from the backend server
        /// </summary>
        /// <returns>The application configuration for the frontend</returns>
        [HttpGet]
        [ProducesResponseType(typeof(ClientConfiguration), 200)]
        public ClientConfiguration Get()
        {
            return _configProvider.GetConfiguration();
        }

        [HttpGet, Route("report")]
        public async Task<ActionResult<string>> GetReport()
        {
            try
            {
                var path = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Report.pdf");
                var file = await System.IO.File.ReadAllBytesAsync(path);
                return Convert.ToBase64String(file);
            }
            catch (FileNotFoundException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Unable to retrieve the report");
            }
        }
    }
}