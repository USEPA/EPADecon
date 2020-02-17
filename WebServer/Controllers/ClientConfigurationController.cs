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

        public ClientConfigurationController(IClientConfigurationProvider configProvider)
        {
            _configProvider = configProvider;
        }

        [HttpGet]
        [ProducesResponseType(typeof(ClientConfiguration), 200)]
        public ClientConfiguration Get()
        {
            return _configProvider.GetConfiguration();
        }
    }
}