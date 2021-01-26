using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class CostParameters
    {
        public Dictionary<PersonnelLevel, double> hourlyRate;
        public double icRentalCostPerDay;
        public double icSuppliesCostPerDay;
        public double wipeCost;
        public double hepaCost;
        public double respiratorCost;
        public Dictionary<PpeLevel, double> ppeCost;
        public double wipeAnalysisCost;
        public double hepaAnalysisCost;
        public double vacuumRentalCostPerDay;
        public double costPerMassOfMaterialRemoved;
        public double deconAgentCostPerVolume;
        public double deconMaterialsCost;
        public double rentalCarCostPerDay;
        public double roundtripTicketCostPerPerson;
        public double perDiem;

        public CostParameters(ParameterFilter[] parameters)
        {

        }
    }
}
