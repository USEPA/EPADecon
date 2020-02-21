using WebServer.Models.ClientConfiguration;

namespace WebServer.Interfaces
{
    /// <summary>
    /// Provides a client configuration object
    /// </summary>
    public interface IClientConfigurationProvider
    {
        /// <summary>
        /// Gets the client configuration
        /// </summary>
        /// <returns></returns>
        ClientConfiguration GetConfiguration();
    }
}