using Battelle.EPA.WideAreaDecon.API.Controllers;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Models.ClientConfiguration;
using Battelle.EPA.WideAreaDecon.API.Tests.Mocks;
using Moq;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Controllers
{
    [TestFixture]
    public class ClientConfigurationControllerTests
    {
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

        private ClientConfiguration TestClientConfiguration { get; set; }
        private IClientConfigurationService TestClientConfigurationProvider { get; set; }

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