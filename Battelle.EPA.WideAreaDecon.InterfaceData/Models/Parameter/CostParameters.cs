using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class CostParameters
    {
        public Dictionary<PersonnelLevel, double> HourlyRate;
        public double IcRentalCostPerDay;
        public double IcSuppliesCostPerDay;
        public double WipeCost;
        public double HepaCost;
        public double WasteSampleCost;
        public double RespiratorCost;
        public Dictionary<PpeLevel, double> PpeCost;
        public double WipeAnalysisCost;
        public double HepaAnalysisCost;
        public double SolidWasteSampleAnalysisCost;
        public double LiquidWasteSampleAnalysisCost;
        public double VacuumRentalCostPerDay;
        public double CostPerMassOfMaterialRemoved;
        public double DeconAgentCostPerVolume;
        public double DeconMaterialsCost;
        public double RentalCarCostPerDay;
        public double RoundtripTicketCostPerPerson;
        public double PerDiem;
        public double EntryPrepCost;
        public double DeconLineCost;

        //Scenario parameters constructor
        public CostParameters(
            Dictionary<PersonnelLevel, double> hourlyRate,
            double wipeCost,
            double hepaCost,
            double wasteSampleCost,
            double respiratorCost,
            Dictionary<PpeLevel, double> ppeCost,
            double wipeAnalysisCost,
            double hepaAnalysisCost,
            double solidWasteSampleAnalysisCost,
            double liquidWasteSampleAnalysisCost,
            double vacuumRentalCostPerDay,
            double costPerMassOfMaterialRemoved,
            double deconAgentCostPerVolume,
            double deconMaterialsCost,
            double rentalCarCostPerDay,
            double roundtripTicketCostPerPerson,
            double perDiem,
            double entryPrepCost,
            double deconLineCost)
        {
            HourlyRate = hourlyRate;
            WipeCost = wipeCost;
            HepaCost = hepaCost;
            WasteSampleCost = wasteSampleCost;
            RespiratorCost = respiratorCost;
            PpeCost = ppeCost;
            WipeAnalysisCost = wipeAnalysisCost;
            HepaAnalysisCost = hepaAnalysisCost;
            SolidWasteSampleAnalysisCost = solidWasteSampleAnalysisCost;
            LiquidWasteSampleAnalysisCost = liquidWasteSampleAnalysisCost;
            VacuumRentalCostPerDay = vacuumRentalCostPerDay;
            CostPerMassOfMaterialRemoved = costPerMassOfMaterialRemoved;
            DeconAgentCostPerVolume = deconAgentCostPerVolume;
            DeconMaterialsCost = deconMaterialsCost;
            RentalCarCostPerDay = rentalCarCostPerDay;
            RoundtripTicketCostPerPerson = roundtripTicketCostPerPerson;
            PerDiem = perDiem;
            EntryPrepCost = entryPrepCost;
            DeconLineCost = deconLineCost;
        }

        //Event parameters constructor
        public CostParameters(
            Dictionary<PersonnelLevel, double> hourlyRate, 
            double icRentalCostPerDay,
            double icSuppliesCostPerDay,
            double rentalCarCostPerDay,
            double roundtripTicketCostPerPerson,
            double perDiem)
        {
            RentalCarCostPerDay = rentalCarCostPerDay;
            RoundtripTicketCostPerPerson = roundtripTicketCostPerPerson;
            PerDiem = perDiem;
            HourlyRate = hourlyRate;
            IcRentalCostPerDay = icRentalCostPerDay;
            IcSuppliesCostPerDay = icSuppliesCostPerDay;
        }
    }
}
