using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebServer.Interfaces;
using WebServer.Models.ClientConfiguration;

namespace WebServer.Controllers
{
    /// <summary>
    /// Controller which provides configuration information to the client.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ClientConfigurationController : ControllerBase
    {
        private readonly IClientConfigurationProvider _configProvider;

        /// <summary>
        /// Default constructor, requires a non-null provider
        /// </summary>
        /// <param name="configProvider"></param>
        public ClientConfigurationController(IClientConfigurationProvider configProvider)
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
    }
}