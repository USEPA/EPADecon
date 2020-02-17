using WebServer.Models.ClientConfiguration;

namespace WebServer.Interfaces
{
    public interface IClientConfigurationProvider
    {
        ClientConfiguration GetConfiguration();
    }
}