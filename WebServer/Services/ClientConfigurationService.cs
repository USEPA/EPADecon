using System;
using WebServer.Interfaces;
using WebServer.Models.ClientConfiguration;

namespace WebServer.Services
{
    /// <summary>
    /// Provides the client HTTP from a config object
    /// </summary>
    public class ClientConfigurationService : IClientConfigurationService
    {
        private readonly ClientConfiguration _config;

        /// <summary>
        /// Constructs provider with singleton client configuration object
        /// </summary>
        /// <param name="config"></param>
        public ClientConfigurationService(ClientConfiguration config)
        {
            _config = config ?? 
                throw new ArgumentNullException(nameof(config));
        }

        /// <summary>
        /// Obtains the configuration
        /// </summary>
        /// <returns></returns>
        public ClientConfiguration GetConfiguration()
        {
            return _config;
        }
    }
}