using System.Drawing;
using WebServer.Models.ClientConfiguration;

namespace UnitTests.Mocks
{
    public static class ClientConfigurationMocker
    {
        public static ClientConfiguration GetDefaultConfiguration()
        {
            return new ClientConfiguration()
            {
                VuetifySettings = new VuetifyTheme()
                {
                    DarkModeEnabled = true,
                    DisableThemes = true,
                    ColorSchemes = new VuetifyColorSchemeMap()
                    {
                        DarkScheme = new VuetifyColorScheme()
                        {
                            Accent = Color.Red,
                            Anchor = Color.Red,
                            Error = Color.Red,
                            Info = Color.Red,
                            Primary = Color.Red,
                            Secondary = Color.Red,
                            Success = Color.Red,
                            Warning = Color.Red,
                        }
                    }
                }
            };
        }
    }
}