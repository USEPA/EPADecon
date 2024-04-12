using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter
{
    /// <summary>
    /// Parameters that exist in all decon elements
    /// </summary>
    public interface IBaseParameters
    {
        public Dictionary<PersonnelLevel, double> PersonnelReqPerTeam { get; set; }
        public double RoundtripDays { get; set; }
        public double PersonnelOverheadDays { get; set; }
    }
}
