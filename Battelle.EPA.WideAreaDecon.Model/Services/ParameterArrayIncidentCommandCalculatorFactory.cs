using Battelle.EPA.WideAreaDecon.Model.IncidentCommand;
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
    class ParameterArrayIncidentCommandCalculatorFactory : IIncidentCommandCalculatorFactory
    {
        private readonly ParameterList _parameters;
        private LaborCostCalculator Calculator_labor { get; set; }
        private SuppliesCostCalculator Calculator_supplies { get; set; }

        private CharacterizationSampling.LaborCostCalculator Calculator_laborCs { get; set; }

        private CharacterizationSampling.PhaseLagCalculator Calculator_phaseLag { get; set; }

        private CharacterizationSampling.SuppliesCostCalculator Calculator_suppliesCs { get; set; }

        private SourceReduction.LaborCostCalculator Calculator_laborSr { get; set; }

        private SourceReduction.WorkDaysCalculator Calculator_workDaysSr { get; set; }

        private Decontamination.LaborCostCalculator Calculator_laborDc { get; set; }

        private Decontamination.EfficacyCalculator Calculator_efficacy { get; set; }

        private Decontamination.WorkDaysCalculator Calculator_workDaysDc { get; set; }

        public ParameterArrayIncidentCommandCalculatorFactory(ParameterList parameters)
        {
            _parameters = parameters;
        }

        public IncidentCommandCostCalculator GetCalculator()
        {
            var personnelOverheadDays = 8.0;
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 1.0 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 2.0 },
                { PersonnelLevel.PL3, 2.0 },
                { PersonnelLevel.PL4, 4.0 }
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var equipmentRentalCostPerDay = 235.42;
            var suppliesCostPerDay = 1007.082;
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepa = 9.2903;
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
            var personnelReqPerTeamCS = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.3 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 2.0 },
                { PersonnelLevel.PL4, 2.0 }
            };
            var personnelOverheadCS = 0.5;
            var numberEntriesPerTeamPerDayCS = 4.0;
            var hoursPerEntryPerTeamCS = 1.0;
            var hoursPerExitPerTeamCS = 1.0;
            var personnelOverheadSR = 0.0;
            var wasteMassPerSurfaceArea = 7.4;
            var personnelPerTeamSR = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.333 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 3.0 },
                { PersonnelLevel.PL4, 0.67 }
            };
            var personnelReqPerTeamDC = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.3 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 0.0 },
                { PersonnelLevel.PL3, 5.0 },
                { PersonnelLevel.PL4, 2.0 }
            };
            var personnelOverheadDC = 2.0;
            var wipesPerHourPerTeam = 6.0;
            var hepaSocksPerHourPerTeam = 6.0;
            var costPerWipe = 19.0;
            var costPerVacuum = 29.0;
            var hepaRentalCostPerDay = 15.0;
            var massRemovedPerHrPerTeam = 453.592;
            var surfaceTypes = new Dictionary<SurfaceType, string>()
            {
                { SurfaceType.IndoorInterior, "Indoor Interior"}
            };
            var applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>()
            {
                { SurfaceType.IndoorInterior, ApplicationMethod.FoamSpray}
            };
            var initialSporeLoading = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 1.1}
            };
            var desiredSporeThreshold = 1.0;
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>()
            {
                { ApplicationMethod.FoamSpray, 3.0}
            };
            var efficacyValues = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 0.2}
            };

            Calculator_phaseLag = new CharacterizationSampling.PhaseLagCalculator(
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

            Calculator_suppliesCs = new CharacterizationSampling.SuppliesCostCalculator(
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                wipesPerHourPerTeam,
                hepaSocksPerHourPerTeam,
                costPerWipe,
                costPerVacuum,
                hepaRentalCostPerDay
            );

            Calculator_laborCs = new CharacterizationSampling.LaborCostCalculator(
                personnelReqPerTeamCS,
                personnelOverheadCS,
                numberEntriesPerTeamPerDayCS,
                hoursPerEntryPerTeamCS,
                hoursPerExitPerTeamCS,
                personnelHourlyRate,
                Calculator_suppliesCs,
                Calculator_phaseLag
            );

            Calculator_workDaysSr = new SourceReduction.WorkDaysCalculator(
                massRemovedPerHrPerTeam,
                wasteMassPerSurfaceArea);

            Calculator_laborSr = new SourceReduction.LaborCostCalculator(
                personnelOverheadSR,
                personnelPerTeamSR,
                personnelHourlyRate,
                wasteMassPerSurfaceArea,
                Calculator_workDaysSr
            );

            Calculator_efficacy = new Decontamination.EfficacyCalculator(
                efficacyValues
            );

            Calculator_workDaysDc = new Decontamination.WorkDaysCalculator(
                surfaceTypes,
                applicationMethods,
                initialSporeLoading,
                desiredSporeThreshold,
                treatmentDaysPerAm,
                Calculator_efficacy
            );

            Calculator_laborDc = new Decontamination.LaborCostCalculator(
                personnelReqPerTeamDC,
                personnelHourlyRate,
                personnelOverheadDC,
                Calculator_workDaysDc
            );

            Calculator_labor = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelOverheadDays,
                personnelHourlyRate,
                Calculator_laborCs,
                Calculator_phaseLag,
                Calculator_laborSr,
                Calculator_laborDc
            );

            Calculator_supplies = new SuppliesCostCalculator(
                equipmentRentalCostPerDay, 
                suppliesCostPerDay,
                Calculator_labor
            );

            return new IncidentCommandCostCalculator();
        }
    }
}
