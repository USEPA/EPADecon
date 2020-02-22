using System.ComponentModel;
using System.Drawing;
using Moq;
using NUnit.Framework;
using WebServer.Controllers;
using WebServer.Interfaces;
using WebServer.Models.ClientConfiguration;
using WebServer.Services;

namespace UnitTests.Controllers
{
    [TestFixture]
    public class ClientConfigurationControllerTests
    {
        private ClientConfiguration TestClientConfiguration { get; set; }
        private IClientConfigurationProvider TestClientConfigurationProvider { get; set; }

        private ClientConfigurationController TestController => new ClientConfigurationController(
            TestClientConfigurationProvider);

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

            var mock = new Mock<IClientConfigurationProvider>();
            mock
                .Setup(p => p.GetConfiguration())
                .Returns(TestClientConfiguration);

            TestClientConfigurationProvider = mock.Object;
        }

        [Test]
        public void ControllerProvidesCorrectConfiguration()
        {
            // Setup
            // See @SetUp()

            // SUT
            var retrievedConfiguration = TestController.Get();

            // Assert
            Assert.AreEqual(
                TestClientConfiguration, 
                retrievedConfiguration);
        }
    }
}