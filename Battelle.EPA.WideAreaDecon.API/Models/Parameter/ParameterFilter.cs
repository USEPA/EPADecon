using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;
using NPOI.SS.UserModel;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter
{
    public class ParameterFilter
    {
        public string Name { get; set; }
        public ParameterFilter[] Filters { get; set; }
        public IParameter[] Parameters { get; set; } // IParameter[]

        public static ParameterFilter[] ParseExcelSheet(ISheet sheet)
        {
            throw new NotImplementedException();
        }

    }
}
