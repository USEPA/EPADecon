using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Battelle.EPA.WideAreaDecon.Model.Services;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Tests
{
    public class CalculatorCreatorTest
    {
        private CalculatorCreator Calculator { get; set; }

        public CharacterizationSamplingParameters CS_Parameters { get; set; }
        public SourceReductionParameters SR_Parameters { get; set; }
        public DecontaminationParameters DC_Parameters { get; set; }
        public OtherParameters OT_Parameters { get; set; }
        public IncidentCommandParameters IC_Parameters { get; set; }
        public CostParameters Cost_Parameters { get; set; }

        [SetUp]
        public void Setup()
        {
            // Characterization sampling parameters
            var fractionSampledWipe = 0.2;
            var fractionSampledHepa = 0.5;
            var surfaceAreaPerWipe = 5.0;
            var surfaceAreaPerHepa = 10.0;
            var wipesPerHrPerTeam = 10.0;
            var hepaSocksPerHrPerTeam = 4.0;
            var numTeamsCS = 3.0;
            var samplePackageTime = 20.0;
            var wipeAnalysisTime = 10.0;
            var hepaAnalysisTime = 11.0;
            var numLabs = 3;
            var fractionOfWipeToEachLab = new List<double> { 0.2, 0.2, 0.2 };
            var fractionOfHepaToEachLab = new List<double> { 0.6, 0.6, 0.6 };
            var labUptimesHours = new List<double> { 10.0, 10.0, 10.0 };
            var labDistanceFromSite = new List<double> { 100.0, 100.0, 100.0 };
            var resultTransmissionToIC = 15.0;
            var personnelReqPerTeamCS = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 1.0,
                [PersonnelLevel.PL1] = 3.0,
                [PersonnelLevel.PL2] = 0.0,
                [PersonnelLevel.PL3] = 2.0,
                [PersonnelLevel.PL4] = 1.0
            };
            var personnelOverheadDaysCS = 2.0;
            var entriesPerTeamCS = 4.0;
            var hoursEnteringCS = 2.0;
            var hoursExitingCS = 2.0;
            var respiratorsPerPersonCS = 1.0;
            var ppeRequiredCS = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 4.0,
                [PpeLevel.B] = 3.0,
                [PpeLevel.C] = 0.0,
                [PpeLevel.D] = 0.0
            };

            // Source reduction parameters
            var surfaceAreaToBeSourceReduced = 100.0;
            var massPerSurfaceArea = 100.0;
            var massRemovedPerHourPerTeam = 50.0;
            var numEntriesPerDaySR = 4.0;
            var respiratorsPerPersonSR = 1.0;
            var hoursEnteringSR = 10.0;
            var hoursExitingSR = 10.0;
            var numTeamsSR = 2.0;
            var personnelReqPerTeamSR = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 2.0,
                [PersonnelLevel.PL1] = 1.0,
                [PersonnelLevel.PL2] = 1.0,
                [PersonnelLevel.PL3] = 1.0,
                [PersonnelLevel.PL4] = 1.0
            };
            var personnelOverheadDaysSR = 2.0;
            var ppeRequiredSR = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 3.0,
                [PpeLevel.B] = 3.0,
                [PpeLevel.C] = 0.0,
                [PpeLevel.D] = 0.0
            };

            // Decontamination parameters
            var efficacyValues = new Dictionary<SurfaceType, double>();
            var applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>();
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>();
            var agentVolume = new Dictionary<SurfaceType, double>();
            var contaminationArea = new Dictionary<SurfaceType, ContaminationInformation>();
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                efficacyValues.Add(surface, 50.0);
                applicationMethods.Add(surface, ApplicationMethod.Fogging);

                initialSporeLoading.Add(surface, 200.0);

                ContaminationInformation info = new ContaminationInformation(100.0, 30.0);
                contaminationArea.Add(surface, info);
                agentVolume.Add(surface, 10.0);
            }
            var desiredSporeThreshold = 0.0;
            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                treatmentDaysPerAm[method] = 2.0;
            }
            var personnelReqPerTeamDC = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 2.0,
                [PersonnelLevel.PL1] = 2.0,
                [PersonnelLevel.PL2] = 0.0,
                [PersonnelLevel.PL3] = 0.0,
                [PersonnelLevel.PL4] = 3.0
            };
            var personnelOverheadDC = 2.0;
            var numEntriesPerTeamPerDayDC = 4.0;
            var hoursPerEntryPerTeamDC = 1.0;
            var hoursPerExitPerTeamDC = 3.0;
            var respiratorsPerPersonDC = 1.0;
            var numTeamsDC = 3.0;
            var ppeRequiredDC = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 4.0,
                [PpeLevel.B] = 3.0,
                [PpeLevel.C] = 0.0,
                [PpeLevel.D] = 0.0
            };
            var fumigationAgentVolume = 20.0;

            // Other parameters
            var personnelPerRentalCar = 3.0;
            var roundtripDays = 2.0;
            var totalAvailablePersonnel = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 10.0,
                [PersonnelLevel.PL1] = 10.0,
                [PersonnelLevel.PL2] = 3.0,
                [PersonnelLevel.PL3] = 5.0,
                [PersonnelLevel.PL4] = 5.0
            };

            // Cost parameters
            var hourlyRate = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 28.0,
                [PersonnelLevel.PL1] = 15.0,
                [PersonnelLevel.PL2] = 20.0,
                [PersonnelLevel.PL3] = 22.0,
                [PersonnelLevel.PL4] = 24.0
            };
            var icRentalCostPerDay = 21.0;
            var icSuppliesCostPerDay = 20.0;
            var wipeCost = 3.0;
            var hepaCost = 40.0;
            var respiratorCost = 215.0;
            var ppeCost = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 150.0,
                [PpeLevel.B] = 200.0,
                [PpeLevel.C] = 250.0,
                [PpeLevel.D] = 300.0
            };
            var wipeAnalysisCost = 10.0;
            var hepaAnalysisCost = 15.0;
            var vacuumRentalCostPerDay = 50.0;
            var costPerMassOfMaterialRemoved = 10.0;
            var deconAgentCostPerVolume = 3.0;
            var deconMaterialsCost = 20.0;
            var rentalCarCostPerDay = 215.0;
            var roundtripTicketCostPerPerson = 200.0;
            var perDiem = 100.0;

            // Incident command parameters
            var personnelReqPerTeamIC = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 3.0,
                [PersonnelLevel.PL1] = 3.0,
                [PersonnelLevel.PL2] = 0.0,
                [PersonnelLevel.PL3] = 0.0,
                [PersonnelLevel.PL4] = 0.0
            };
            var personnelOverheadDaysIC = 4.0;

            CS_Parameters = new CharacterizationSamplingParameters(
                fractionSampledWipe,
                fractionSampledHepa,
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                numTeamsCS,
                samplePackageTime,
                wipeAnalysisTime,
                hepaAnalysisTime,
                numLabs,
                fractionOfWipeToEachLab,
                fractionOfHepaToEachLab,
                labUptimesHours,
                labDistanceFromSite,
                resultTransmissionToIC,
                personnelReqPerTeamCS,
                personnelOverheadDaysCS,
                entriesPerTeamCS,
                hoursEnteringCS,
                hoursExitingCS,
                respiratorsPerPersonCS,
                ppeRequiredCS
            );

            SR_Parameters = new SourceReductionParameters(
                surfaceAreaToBeSourceReduced,
                massPerSurfaceArea,
                massRemovedPerHourPerTeam,
                numEntriesPerDaySR,
                respiratorsPerPersonSR,
                hoursEnteringSR,
                hoursExitingSR,
                numTeamsSR,
                personnelReqPerTeamSR,
                personnelOverheadDaysSR,
                ppeRequiredSR
            );

            DC_Parameters = new DecontaminationParameters(
                efficacyValues,
                applicationMethods,
                initialSporeLoading,
                desiredSporeThreshold,
                treatmentDaysPerAm,
                personnelReqPerTeamDC,
                personnelOverheadDC,
                numEntriesPerTeamPerDayDC,
                hoursPerEntryPerTeamDC,
                hoursPerExitPerTeamDC,
                respiratorsPerPersonDC,
                numTeamsDC,
                ppeRequiredDC,
                contaminationArea,
                fumigationAgentVolume,
                agentVolume);

            OT_Parameters = new OtherParameters(
                personnelPerRentalCar,
                roundtripDays,
                totalAvailablePersonnel);

            Cost_Parameters = new CostParameters(
                hourlyRate,
                icRentalCostPerDay,
                icSuppliesCostPerDay,
                wipeCost,
                hepaCost,
                respiratorCost,
                ppeCost,
                wipeAnalysisCost,
                hepaAnalysisCost,
                vacuumRentalCostPerDay,
                costPerMassOfMaterialRemoved,
                deconAgentCostPerVolume,
                deconMaterialsCost,
                rentalCarCostPerDay,
                roundtripTicketCostPerPerson,
                perDiem);

            IC_Parameters = new IncidentCommandParameters(
                personnelReqPerTeamIC,
                personnelOverheadDaysIC);

            var csCalculatorFactory = new ParameterArrayCharacterizationSamplingCalculatorFactory(CS_Parameters, Cost_Parameters);
            var srCalculatorFactory = new ParameterArraySourceReductionCalculatorFactory(SR_Parameters, Cost_Parameters);
            var dcCalculatorFactory = new ParameterArrayDecontaminationCalculatorFactory(DC_Parameters, Cost_Parameters);
            var icCalculatorFactory = new ParameterArrayIncidentCommandCalculatorFactory(CS_Parameters, SR_Parameters, DC_Parameters, OT_Parameters, IC_Parameters, Cost_Parameters, csCalculatorFactory, srCalculatorFactory, dcCalculatorFactory);
            var otCalculatorFactory = new ParameterArrayOtherCalculatorFactory(OT_Parameters, Cost_Parameters);

            Calculator = new CalculatorCreator(csCalculatorFactory, srCalculatorFactory, dcCalculatorFactory, otCalculatorFactory, icCalculatorFactory);
        }

        [Test]
        public void GetCalculators()
        {
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();
            var info = new ContaminationInformation(100.0, 20.0);
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, info);
            }

            var results = Calculator.GetCalculators(
                CS_Parameters, 
                SR_Parameters, 
                DC_Parameters, 
                OT_Parameters, 
                Cost_Parameters, 
                IC_Parameters, 
                areaContaminated);
        }
    }
}
