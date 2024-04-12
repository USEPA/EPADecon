using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using NPOI.SS.UserModel;
using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class ParameterMetaData
    {
        [ExcelProperty(0)] public DecontaminationElement[] ValidElements { get; set; }
        [ExcelProperty(1)] public string Category { get; set; }
        [ExcelProperty(2)] public string Name { get; set; }
        [ExcelProperty(3)] public string Description { get; set; }
        [ExcelProperty(4)] public string Units { get; set; }
        [ExcelProperty(12)] public double LowerLimit { get; set; }
        [ExcelProperty(13)] public double UpperLimit { get; set; }
        [ExcelProperty(14)] public double Step { get; set; }


        public static ParameterMetaData FromExcel(IRow row)
        {

            var name = typeof(ParameterMetaData).GetCellValue(nameof(Name), row) ??
                    throw new ApplicationException("Parameter must have a name");

            if (name == "Decontamination Treatment Method by Surface")
            {
                return new ParameterMetaData()
                {
                    ValidElements = typeof(ParameterMetaData).GetCellValue(nameof(ValidElements), row)
                            ?.Split(';')
                            .Select(Enum.Parse<DecontaminationElement>).ToArray() ??
                        throw new ApplicationException("Error determining Valid Elements"),
                    Category = typeof(ParameterMetaData).GetCellValue(nameof(Category), row),
                    Name = name,
                    Description = typeof(ParameterMetaData).GetCellValue(nameof(Description), row),
                    Units = null,
                    LowerLimit = -1.0,
                    UpperLimit = -1.0,
                    Step = -1.0
                };
            }
            else if (name == ParameterNames.Logistic.SamplingFrequency)
            {
                return new ParameterMetaData()
                {
                    ValidElements = typeof(ParameterMetaData).GetCellValue(nameof(ValidElements), row)
                        ?.Split(';')
                        .Select(Enum.Parse<DecontaminationElement>).ToArray() ??
                    throw new ApplicationException("Error determining Valid Elements"),
                    Category = typeof(ParameterMetaData).GetCellValue(nameof(Category), row),
                    Name = name,
                    Description = typeof(ParameterMetaData).GetCellValue(nameof(Description), row),
                    Units = null,
                    LowerLimit = -1.0,
                    UpperLimit = -1.0,
                    Step = -1.0
                };
            }

            // PPE Fractions have to be built differently since the actual category value
            // doesn't correspond to an enum. So this switch statement resets the category value
            // based on the parameter name to make sure the EnumeratedFraction has an enum value
            // to parse
            string category = typeof(ParameterMetaData).GetCellValue(nameof(Category), row);
            switch (name)
            {
                case "Fraction PPE Required (A)":
                    category = "A";
                    break;
                case "Fraction PPE Required (B)":
                    category = "B";
                    break;
                case "Fraction PPE Required (C)":
                    category = "C";
                    break;
                case "Fraction PPE Required (D)":
                    category = "D";
                    break;
            }

            return new ParameterMetaData()
            {
                ValidElements = typeof(ParameterMetaData).GetCellValue(nameof(ValidElements), row)
                        ?.Split(';')
                        .Select(Enum.Parse<DecontaminationElement>).ToArray() ??
                    throw new ApplicationException("Error determining Valid Elements"),
                Category = category,
                Name = name,
                Description = typeof(ParameterMetaData).GetCellValue(nameof(Description), row),
                Units = typeof(ParameterMetaData).GetCellValue(nameof(Units), row),
                LowerLimit = double.Parse(typeof(ParameterMetaData).GetCellValue(nameof(LowerLimit), row)
                    ?? throw new ApplicationException("Unable to parse name for maximum")),
                UpperLimit = double.Parse(typeof(ParameterMetaData).GetCellValue(nameof(UpperLimit), row)
                    ?? throw new ApplicationException("Unable to parse name for maximum")),
                Step = double.Parse(typeof(ParameterMetaData).GetCellValue(nameof(Step), row)
                    ?? throw new ApplicationException("Unable to parse name for maximum"))
            };
        }
    }
}