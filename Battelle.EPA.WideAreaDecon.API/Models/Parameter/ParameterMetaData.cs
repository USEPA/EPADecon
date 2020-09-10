using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter
{
    public class ParameterMetaData
    {
        private static int UnitsLocation => 4;
        private static int DescriptionLocation => 3;
        private static int MinLocation => 13;
        private static int MaxLocation => 14;
        private static int StepLocation => 15;
        private static int OffsetLocation => 2;

        public double? Min { get; set; }
        public double? Max { get; set; }
        public double? Step { get; set; }
        public string Units { get; set; }
        public string Description { get; set; }

        public static ParameterMetaData FromExcel(IRow information, bool isEfficacy)
        {
            if (isEfficacy)
            {
                return new ParameterMetaData()
                {
                    Units = information.GetCell(UnitsLocation + OffsetLocation).ToString(),
                    Description = information.GetCell(DescriptionLocation + OffsetLocation).ToString(),
                    Min = information.GetCell(MinLocation)?.NumericCellValue,
                    Max = information.GetCell(MaxLocation)?.NumericCellValue,
                    Step = information.GetCell(StepLocation)?.NumericCellValue,
                };
            }
            else
                return new ParameterMetaData()
                {
                    Units = information.GetCell(UnitsLocation).ToString(),
                    Description = information.GetCell(DescriptionLocation).ToString(),
                    Min = information.GetCell(MinLocation)?.NumericCellValue,
                    Max = information.GetCell(MaxLocation)?.NumericCellValue,
                    Step = information.GetCell(StepLocation)?.NumericCellValue,
                };
        }
    }
}