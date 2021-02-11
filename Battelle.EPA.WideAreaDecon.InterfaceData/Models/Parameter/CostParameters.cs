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

        public CostParameters(
            Dictionary<PersonnelLevel, double> _hourlyRate,
            double _icRentalCostPerDay,
            double _icSuppliesCostPerDay,
            double _wipeCost,
            double _hepaCost,
            double _respiratorCost,
            Dictionary<PpeLevel, double> _ppeCost,
            double _wipeAnalysisCost,
            double _hepaAnalysisCost,
            double _vacuumRentalCostPerDay,
            double _costPerMassOfMaterialRemoved,
            double _deconAgentCostPerVolume,
            double _deconMaterialsCost,
            double _rentalCarCostPerDay,
            double _roundtripTicketCostPerPerson,
            double _perDiem)
        {
            hourlyRate = _hourlyRate;
            icRentalCostPerDay = _icRentalCostPerDay;
            icSuppliesCostPerDay = _icSuppliesCostPerDay;
            wipeCost = _wipeCost;
            hepaCost = _hepaCost;
            respiratorCost = _respiratorCost;
            ppeCost = _ppeCost;
            wipeAnalysisCost = _wipeAnalysisCost;
            hepaAnalysisCost = _hepaAnalysisCost;
            vacuumRentalCostPerDay = _vacuumRentalCostPerDay;
            costPerMassOfMaterialRemoved = _costPerMassOfMaterialRemoved;
            deconAgentCostPerVolume = _deconAgentCostPerVolume;
            deconMaterialsCost = _deconMaterialsCost;
            rentalCarCostPerDay = _rentalCarCostPerDay;
            roundtripTicketCostPerPerson = _roundtripTicketCostPerPerson;
            perDiem = _perDiem;
        }

        public CostParameters(ParameterFilter[] parameters)
        {
            hourlyRate = new Dictionary<PersonnelLevel, double> {
                [PersonnelLevel.OSC] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "OSC Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-1 Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-2 Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-3 Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-4 Hourly Wage").CreateDistribution().Draw()
            };

            icRentalCostPerDay = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Rental per Day (IC)").CreateDistribution().Draw();
            icSuppliesCostPerDay = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Supplies Cost (IC)").CreateDistribution().Draw();
            wipeCost = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Wipes").CreateDistribution().Draw();
            hepaCost = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "HEPA Sock").CreateDistribution().Draw();
            respiratorCost = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Respirator").CreateDistribution().Draw();

            ppeCost = new Dictionary<PpeLevel, double> {
                [PpeLevel.A] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level A Cost").CreateDistribution().Draw(),
                [PpeLevel.B] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level B Cost").CreateDistribution().Draw(),
                [PpeLevel.C] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level C Cost").CreateDistribution().Draw(),
                [PpeLevel.D] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level D Cost").CreateDistribution().Draw()
            };
            
            wipeAnalysisCost = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Cost Per Wipe Sample Analyzed").CreateDistribution().Draw();
            hepaAnalysisCost = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Cost of HEPA Sample Analyzed").CreateDistribution().Draw();
            vacuumRentalCostPerDay = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "HEPA Vacuum Rental per Day").CreateDistribution().Draw();
            costPerMassOfMaterialRemoved = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Material Removal Per Surface Area").CreateDistribution().Draw();
            deconAgentCostPerVolume = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost of Decon Agent").CreateDistribution().Draw();
            deconMaterialsCost = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Decon Material Cost Per Surface Area").CreateDistribution().Draw();
            rentalCarCostPerDay = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Rental Car Cost Per Day").CreateDistribution().Draw();
            roundtripTicketCostPerPerson = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Ticket Cost Per Person").CreateDistribution().Draw();
            perDiem = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Per Diem").CreateDistribution().Draw();
        }
    }
}
