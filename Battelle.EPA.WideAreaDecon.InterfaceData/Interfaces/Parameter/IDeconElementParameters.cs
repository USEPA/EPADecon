using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter
{
    /// <summary>
    /// Common parameters for all decon elements (except IC)
    /// </summary>
    public interface IDeconElementParameters : IBaseParameters
    {
        public double NumTeams { get; set; }
        public Dictionary<PpeLevel, double> EntryDuration { get; set; }
        public double EntryPrepTime { get; set; }
        public double DeconLineTime { get; set; }
        public double PostEntryRest { get; set; }
        public double RespiratorsPerPerson { get; set; }
        public Dictionary<PpeLevel, double> PpeRequired { get; set; }
        public double OnsiteDays { get; set; }
    }
}
