using System;
using System.Drawing;
using Battelle.EPA.WideAreaDecon.API.Utility.Json;
using Newtonsoft.Json;
using NUnit.Framework;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Utility.Json
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
            var testColor = (Color) (new ColorConverter().ConvertFromString(testColorValue)
                ?? throw new ApplicationException("Should not be here"));

            // SUT
            var convertedColorString = JsonConvert.SerializeObject(testColor, new NewtonsoftJsonColorConverter());

            // Assert
            Assert.True(convertedColorString.Equals($"\"{testColorValue}\"",
                StringComparison.CurrentCultureIgnoreCase));
        }
    }
}