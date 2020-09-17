using System.IO;
using System;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Providers;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using NPOI.XSSF.UserModel;
using NUnit.Framework;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Tests.Providers
{
    [TestFixture]
    class ExcelDefineScenarioParameterListProviderTest
    {
        private static string TestFileName => @"InputFiles\DefineScenario.xlsx";
        [SetUp]
        public void SetUp()
        {

        }

        [Test]
        public void ReadFromExcel()
        {
            ExcelDefineScenarioParameterListProvider defineScenario = new ExcelDefineScenarioParameterListProvider
            {
                FileName = TestFileName
            };

            var paramList = defineScenario.GetParameterList();
            Assert.Pass();
        }
    }
}
