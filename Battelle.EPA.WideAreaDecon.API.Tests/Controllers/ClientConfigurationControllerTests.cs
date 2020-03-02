using Moq;
using NUnit.Framework;
using UnitTests.Mocks;
using WebServer.Controllers;
using WebServer.Interfaces;
using WebServer.Models.ClientConfiguration;

namespace UnitTests.Controllers
{
    [TestFixture]
    public class ClientConfigurationControllerTests
    {
        private ClientConfiguration TestClientConfiguration { get; set; }
        private IClientConfigurationService TestClientConfigurationProvider { get; set; }

            [SetUp]
        public void SetUp()
        {
            TestClientConfiguration = ClientConfigurationMocker.GetDefaultConfiguration();
            var mock = new Mock<IClientConfigurationService>();
            mock
                .Setup(p => p.GetConfiguration())
                .Returns(TestClientConfiguration);

            TestClientConfigurationProvider = mock.Object;
        }

        [Test]
        public void ControllerProvidesCorrectConfiguration()
        {
            // Setup
            var testController = new ClientConfigurationController(
                TestClientConfigurationProvider);
            

            // SUT
            var retrievedConfiguration = testController.Get();

            // Assert
            Assert.AreEqual(
                TestClientConfiguration, 
                retrievedConfiguration);
        }
    }
}