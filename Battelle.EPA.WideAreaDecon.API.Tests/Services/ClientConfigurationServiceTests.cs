using System.IO;
using System.Reflection;
using Battelle.EPA.WideAreaDecon.API.Models.ClientConfiguration;
using Battelle.EPA.WideAreaDecon.API.Services;
using FluentAssertions;
using Microsoft.Extensions.Configuration;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Services
{
    [TestFixture]
    public class ClientConfigurationServiceTests
    {
        [SetUp]
        public void SetUp()
        {
            TestConfiguration = new ConfigurationBuilder()
                .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location))
                .AddJsonFile($"Services\\{nameof(ClientConfigurationServiceTests)}.json")
                .Build();
        }

        private IConfiguration TestConfiguration { get; set; }

        [Test]
        public void ServiceProvidesCorrectConfiguration()
        {
            // Setup
            var testProvider = new ClientConfigurationService(TestConfiguration);

            // SUT
            var retrievedConfiguration = testProvider.GetConfiguration();

            // Assert
            retrievedConfiguration
                .Should()
                .BeEquivalentTo(
                    TestConfiguration
                        .GetSection(nameof(ClientConfiguration))
                        .Get<ClientConfiguration>());
        }
    }
}