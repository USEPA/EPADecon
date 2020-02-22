using System.Drawing;
using Moq;
using NUnit.Framework;
using UnitTests.Mocks;
using WebServer.Controllers;
using WebServer.Interfaces;
using WebServer.Models.ClientConfiguration;
using WebServer.Services;

namespace UnitTests.Services
{
    [TestFixture]
    public class ClientConfigurationServiceTests
    {
        private ClientConfiguration TestClientConfiguration { get; set; }

        [SetUp]
        public void SetUp()
        {
            TestClientConfiguration = ClientConfigurationMocker.GetDefaultConfiguration();
        }

        [Test]
        public void ServiceProvidesCorrectConfiguration()
        {
            // Setup
            var testProvider = new ClientConfigurationService(TestClientConfiguration);


            // SUT
            var retrievedConfiguration = testProvider.GetConfiguration();

            // Assert
            Assert.AreEqual(
                TestClientConfiguration,
                retrievedConfiguration);
        }
    }
}