using System.Buffers.Text;
using System.Runtime.Serialization;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Utility.Attributes;
using Battelle.EPA.WideAreaDecon.API.Utility.Extensions;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter
{
    public class EfficacyParameterMetaData : ParameterMetaData
    {

        [ExcelProperty(0)] public ApplicationMethod Method { get; set; }
        [ExcelProperty(1)] public SurfaceType Type { get; set; }

        public static EfficacyParameterMetaData FromExcel(IRow row)
        {
            var baseData = ParameterMetaData.FromExcel(row);
            return new EfficacyParameterMetaData()
            {
                Category = baseData.Category,
                Description = baseData.Description,
                Max = baseData.Max,
                Min = baseData.Min,
                Notes =  baseData.Notes,
                Step = baseData.Step,
                Units =  baseData.Units,
                ValidPhases = baseData.ValidPhases,
                Method = typeof(EfficacyParameterMetaData).GetCellValue(nameof(Method), row)?.ParseEnum<ApplicationMethod>()
                    ?? throw new SerializationException("Unknown application method encountered!"),
                Type = typeof(EfficacyParameterMetaData).GetCellValue(nameof(Type), row)?.ParseEnum<SurfaceType>()
                    ?? throw new SerializationException("Unknown surface type encountered!")
            };
        }
    }
}