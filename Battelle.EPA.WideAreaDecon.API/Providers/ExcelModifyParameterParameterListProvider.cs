﻿using System;
using System.Collections.Generic;
using System.IO;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Providers
{
    public class ExcelModifyParameterParameterListProvider : IParameterListProvider
    {
        public string FileName { get; set; }

        public string[] GenericSheetNames { get; set; }

        public ParameterList GetParameterList()
        {
            if (string.IsNullOrEmpty(FileName))
                throw new ApplicationException($"No file name provided for {nameof(ExcelDefineScenarioParameterListProvider)}");
            if (!File.Exists(FileName))
                throw new ApplicationException($"Could not find {nameof(ExcelDefineScenarioParameterListProvider)} filename: {FileName}");

            // Parse version in
            int version = int.Parse("1");

            // Parse Filters

            var filters = new List<ParameterFilter>();

            foreach (var genericSheetName in GenericSheetNames)
            {
                // get the sheet
                filters.AddRange(ParameterFilter.ParseExcelSheet());
            }

            var filters1 = ParameterFilter.ParseExcelSheet();
            var filters2 = ParameterFilter.ParseExcelSheet();
            var filters3 = ParameterFilter.ParseExcelSheet();

            filters.AddRange(filters1);
            filters.AddRange(filters2);
            filters.AddRange(filters3);


            return new ParameterList() { Version = version, Filters = filters.ToArray() };
        }
    }
}