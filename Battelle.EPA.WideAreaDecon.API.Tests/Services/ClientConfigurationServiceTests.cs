using System.Collections.Generic;
using System.IO;
using System.Reflection;
using FluentAssertions;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Moq;
using NUnit.Framework;
using UnitTests.Mocks;
using WebServer.Models.ClientConfiguration;
using WebServer.Services;

namespace UnitTests.Services
{
    [TestFixture]
    public class ClientConfigurationServiceTests
    {
        private IConfiguration TestConfiguration { get; set; }

        [SetUp]
        public void SetUp()
        {
            TestConfiguration = new ConfigurationBuilder()
                .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location))
                .AddJsonFile($"Services\\{nameof(ClientConfigurationServiceTests)}.json")
                .Build();
        }

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