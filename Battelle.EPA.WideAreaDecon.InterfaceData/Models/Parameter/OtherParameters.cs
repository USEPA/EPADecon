using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class OtherParameters
    {
        public double personnelPerRentalCar;
        public double roundtripDays;
        public Dictionary<PersonnelLevel, double> totalAvailablePersonnel;

        public OtherParameters(ParameterFilter[] parameters)
        {
            personnelPerRentalCar = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Number of Personnel Per Rental Car").CreateDistribution().Draw();
            roundtripDays = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            totalAvailablePersonnel[PersonnelLevel.OSC] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Total Available Personnel (OSC)").CreateDistribution().Draw();
            totalAvailablePersonnel[PersonnelLevel.PL1] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Total Available Personnel (PL-1)").CreateDistribution().Draw();
            totalAvailablePersonnel[PersonnelLevel.PL2] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Total Available Personnel (PL-2)").CreateDistribution().Draw();
            totalAvailablePersonnel[PersonnelLevel.PL3] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Total Available Personnel (PL-3)").CreateDistribution().Draw();
            totalAvailablePersonnel[PersonnelLevel.PL4] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Total Available Personnel (PL-4)").CreateDistribution().Draw();
        }
    }
}
