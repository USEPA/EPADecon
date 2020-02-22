using System;
using System.Drawing;
using Microsoft.VisualStudio.TestPlatform.ObjectModel;
using Newtonsoft.Json;
using NUnit.Framework;
using WebServer.Utility.Json;

namespace UnitTests.Utility.Json
{
    [TestFixture]
    public class NewtonsoftJsonColorConverterTests
    {
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void ConverterConvertsToHex()
        {
            // Setup
            const string testColorValue = "#eb4034";
            var testColor = (Color)(new ColorConverter().ConvertFromString(testColorValue) 
                ?? throw new ApplicationException("Should not be here"));

            // SUT
            var convertedColorString = JsonConvert.SerializeObject(testColor, new NewtonsoftJsonColorConverter());

            // Assert
            Assert.True(convertedColorString.Equals($"\"{testColorValue}\"", StringComparison.CurrentCultureIgnoreCase));
        }
}
}