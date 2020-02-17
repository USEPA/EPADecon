using System;
using WebServer.Interfaces;
using WebServer.Models.ClientConfiguration;

namespace WebServer.Services
{
    public class ClientConfigurationProvider : IClientConfigurationProvider
    {
        private readonly ClientConfiguration _config;

        public ClientConfigurationProvider(ClientConfiguration config)
        {
            _config = config ?? 
                throw new ArgumentNullException(nameof(config));
        }

        public ClientConfiguration GetConfiguration()
        {
            return _config;
        }
    }
}