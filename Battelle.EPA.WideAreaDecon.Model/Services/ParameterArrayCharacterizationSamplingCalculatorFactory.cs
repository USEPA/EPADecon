using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// 
    /// Contains information on how to take dictionary and obtain correct parameters
    /// </summary>
    class ParameterArrayCharacterizationSamplingCalculatorFactory : ICharacterizationSamplingCalculatorFactory
    {
        private readonly ParameterList _parameters;
        private LaborCostCalculator Calculator_labor { get; set; }
        private SuppliesCostCalculator Calculator_supplies { get; set; }
        private EntrancesExitsCostCalculator Calculator_entEx { get; set; }
        private AnalysisQuantityCostCalculator Calculator_analysis { get; set; }
        private PhaseLagCalculator Calculator_phaseLag { get; set; }

        public ParameterArrayCharacterizationSamplingCalculatorFactory(ParameterList parameters)
        {
            _parameters = parameters;
        }
        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            //values temp until index of _parameters dictionary is set
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepa = 9.2903;
            var wipesPerHrPerTeam = 6.0;
            var hepaSocksPerHrPerTeam = 6.0;
            var costPerWipe = 19.0;
            var costPerVacuum = 29.0;
            var hepaRentalCostPerDay = 15.0;
            var costPerWipeAnalysis = 520.0;
            var costPerHepaAnalysis = 290.0;
            var samplePackageTime = 1.63;
            var wipeAnalysisTime = 0.79;
            var hepaAnalysisTime = 1.0;
            var fractionOfWipeToEachLab = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 0.2 },
                { Labs.Lab2, 0.6 },
                { Labs.Lab3, 0.2 }
            };
            var fractionOfHepaToEachLab = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 0.5 },
                { Labs.Lab2, 0.3 },
                { Labs.Lab3, 0.2 }
            };
            var labUptimesHours = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 8.0 },
                { Labs.Lab2, 9.0 },
                { Labs.Lab3, 10.0 }
            };
            var labDistanceFromSite = new Dictionary<Labs, double>()
            {
                { Labs.Lab1, 48.0 },
                { Labs.Lab2, 20.0 },
                { Labs.Lab3, 90.0 }
            };
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.0 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 2.0 },
                { PersonnelLevel.PL4, 2.0 }
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var personnelOverhead = 0.5;
            var entriesPerTeam = 4.0;
            var hoursEntering = 1.0;
            var hoursExiting = 1.0;
            var costPerPpe = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 3322.0 },
                { PpeLevel.B, 3023.8 },
                { PpeLevel.C, 1897.68 },
                { PpeLevel.D, 260.09 }
            };
            var numberEntriesPerPerson = 4.0;
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;

            Calculator_supplies = new SuppliesCostCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                costPerWipe,
                costPerVacuum,
                hepaRentalCostPerDay
            );
            Calculator_phaseLag = new PhaseLagCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                labUptimesHours,
                samplePackageTime,
                wipeAnalysisTime,
                hepaAnalysisTime,
                fractionOfWipeToEachLab,
                fractionOfHepaToEachLab,
                labDistanceFromSite
            );

            Calculator_labor = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelOverhead,
                entriesPerTeam,
                hoursEntering,
                hoursExiting,
                personnelHourlyRate,
                Calculator_supplies,
                Calculator_phaseLag
            );
            Calculator_analysis = new AnalysisQuantityCostCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                costPerWipeAnalysis,
                costPerHepaAnalysis
            );
            Calculator_entEx = new EntrancesExitsCostCalculator(
                personnelReqPerTeam,
                numberEntriesPerPerson,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                Calculator_labor,
                Calculator_supplies
            );
            return new CharacterizationSamplingCostCalculator();
        }
    }
}
