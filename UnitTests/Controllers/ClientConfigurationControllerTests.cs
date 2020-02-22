using System.ComponentModel;
using System.Drawing;
using NUnit.Framework;
using WebServer.Controllers;
using WebServer.Models.ClientConfiguration;
using WebServer.Services;

namespace UnitTests.Controllers
{
    [TestFixture]
    public class ClientConfigurationControllerTests
    {
        private ClientConfiguration TestClientConfiguration { get; set; }
        private ClientConfigurationController TestController { get; set; }

            [SetUp]
        public void SetUp()
        {
            TestClientConfiguration = new ClientConfiguration()
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

        [Test]
        public void ControllerProvidesCorrectConfiguration()
        {
            // Setup
            TestController = new ClientConfigurationController(
                new ClientConfigurationProvider(
                    TestClientConfiguration));

            // SUT
            var retrievedConfiguration = TestController.Get();

            // Assert
            Assert.AreEqual(
                TestClientConfiguration, 
                retrievedConfiguration);
        }
    }
}