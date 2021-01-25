using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class CostParameters
    {
        private readonly Dictionary<PersonnelLevel, double> hourlyRate;
        private readonly double icRentalCostPerDay;
        private readonly double icSuppliesCostPerDay;
        private readonly double wipeCost;
        private readonly double hepaCost;
        private readonly double respiratorCost;
        private readonly Dictionary<PpeLevel, double> ppeCost;
        private readonly double wipeAnalysisCost;
        private readonly double hepaAnalysisCost;
        private readonly double vacuumRentalCostPerDay;
        private readonly double costPerMassOfMaterialRemoved;
        private readonly double deconAgentCostPerVolume;
        private readonly double deconMaterialsCost;
        private readonly double rentalCarCostPerDay;
        private readonly double roundtripTicketCostPerPerson;
        private readonly double perDiem;

        public CostParameters(ParameterFilter[] parameters)
        {

        }
    }
}
