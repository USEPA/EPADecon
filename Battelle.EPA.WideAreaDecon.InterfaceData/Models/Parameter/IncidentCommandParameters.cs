using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class IncidentCommandParameters
    {
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;

        public IncidentCommandParameters(ParameterFilter[] parameters)
        {
            personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            personnelOverheadDays = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
        }
    }
}
