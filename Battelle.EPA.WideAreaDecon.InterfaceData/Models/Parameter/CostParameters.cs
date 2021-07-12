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
        public double wasteSampleCost;
        public double respiratorCost;
        public Dictionary<PpeLevel, double> ppeCost;
        public double wipeAnalysisCost;
        public double hepaAnalysisCost;
        public double wasteSampleAnalysisCost;
        public double vacuumRentalCostPerDay;
        public double costPerMassOfMaterialRemoved;
        public double deconAgentCostPerVolume;
        public double deconMaterialsCost;
        public double rentalCarCostPerDay;
        public double roundtripTicketCostPerPerson;
        public double perDiem;
        public double entryPrepCost;
        public double deconLineCost;

        //Scenario parameters constructor
        public CostParameters(
            Dictionary<PersonnelLevel, double> _hourlyRate,
            double _icRentalCostPerDay,
            double _icSuppliesCostPerDay,
            double _wipeCost,
            double _hepaCost,
            double _wasteSampleCost,
            double _respiratorCost,
            Dictionary<PpeLevel, double> _ppeCost,
            double _wipeAnalysisCost,
            double _hepaAnalysisCost,
            double _wasteSampleAnalysisCost,
            double _vacuumRentalCostPerDay,
            double _costPerMassOfMaterialRemoved,
            double _deconAgentCostPerVolume,
            double _deconMaterialsCost,
            double _rentalCarCostPerDay,
            double _roundtripTicketCostPerPerson,
            double _perDiem,
            double _entryPrepCost,
            double _deconLineCost)
        {
            hourlyRate = _hourlyRate;
            icRentalCostPerDay = _icRentalCostPerDay;
            icSuppliesCostPerDay = _icSuppliesCostPerDay;
            wipeCost = _wipeCost;
            hepaCost = _hepaCost;
            wasteSampleCost = _wasteSampleCost;
            respiratorCost = _respiratorCost;
            ppeCost = _ppeCost;
            wipeAnalysisCost = _wipeAnalysisCost;
            hepaAnalysisCost = _hepaAnalysisCost;
            wasteSampleAnalysisCost = _wasteSampleAnalysisCost;
            vacuumRentalCostPerDay = _vacuumRentalCostPerDay;
            costPerMassOfMaterialRemoved = _costPerMassOfMaterialRemoved;
            deconAgentCostPerVolume = _deconAgentCostPerVolume;
            deconMaterialsCost = _deconMaterialsCost;
            rentalCarCostPerDay = _rentalCarCostPerDay;
            roundtripTicketCostPerPerson = _roundtripTicketCostPerPerson;
            perDiem = _perDiem;
            entryPrepCost = _entryPrepCost;
            deconLineCost = _deconLineCost;
        }

        //Event parameters constructor
        public CostParameters(
            double _rentalCarCostPerDay,
            double _roundtripTicketCostPerPerson,
            double _perDiem)
        {
            rentalCarCostPerDay = _rentalCarCostPerDay;
            roundtripTicketCostPerPerson = _roundtripTicketCostPerPerson;
            perDiem = _perDiem;
        }
    }
}
