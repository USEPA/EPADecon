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
    public class ResultsCalculatorTest
    {
        private ResultsCalculator Calculator { get; set; }
        public CalculatorManager parameters { get; set; }

        [SetUp]
        public void Setup()
        {
            // Characterization sampling parameters
            var fractionSampledWipe = 0.3;
            var fractionSampledHepa = 0.2;
            var surfaceAreaPerWipe = 4.64515;
            var surfaceAreaPerHepa = 9.2903;
            var wipesPerHrPerTeam = 6.0;
            var hepaSocksPerHrPerTeam = 6.0;
            var numTeamsCS = 4.0;
            var samplePackageTime = 1.63;
            var wipeAnalysisTime = 0.79;
            var hepaAnalysisTime = 1.0;
            var numLabs = 3;
            var fractionOfWipeToEachLab = new List<double> { 0.2, 0.6, 0.2 };
            var fractionOfHepaToEachLab = new List<double> { 0.5, 0.3, 0.2 };
            var labDistanceFromSite = new List<double> { 48.0, 20.0, 90.0 };
            var labUptimeHours = new List<double> { 12.0, 12.0, 12.0 } ;
            var resultTransmissionToIC = 24.0;
            var personnelReqPerTeamCS = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 0.3,
                [PersonnelLevel.PL1] = 0.0,
                [PersonnelLevel.PL2] = 1.0,
                [PersonnelLevel.PL3] = 2.0,
                [PersonnelLevel.PL4] = 2.0
            };
            var personnelOverheadDaysCS = 0.5;
            var entriesPerTeamCS = 4.0;
            var hoursEnteringCS = 1.0;
            var hoursExitingCS = 1.0;
            var respiratorsPerPersonCS = 1.0;
            var ppeRequiredCS = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 0.0,
                [PpeLevel.B] = 0.5,
                [PpeLevel.C] = 0.5,
                [PpeLevel.D] = 0.0
            };

            // Source reduction parameters
            var surfaceAreaToBeSourceReduced = 0.9;
            var massPerSurfaceArea = 7.4;
            var massRemovedPerHourPerTeam = 453.592;
            var numEntriesPerDaySR = 3.0;
            var respiratorsPerPersonSR = 1.0;
            var hoursEnteringSR = 2.0;
            var hoursExitingSR = 2.0;
            var numTeamsSR = 4.0;
            var personnelReqPerTeamSR = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 0.333,
                [PersonnelLevel.PL1] = 0.0,
                [PersonnelLevel.PL2] = 1.0,
                [PersonnelLevel.PL3] = 3.0,
                [PersonnelLevel.PL4] = 0.67
            };
            var personnelOverheadDaysSR = 0.0;
            var ppeRequiredSR = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 0.0,
                [PpeLevel.B] = 0.5,
                [PpeLevel.C] = 0.5,
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
                treatmentDaysPerAm[method] = 3.0;
            }
            var personnelReqPerTeamDC = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 0.3,
                [PersonnelLevel.PL1] = 0.0,
                [PersonnelLevel.PL2] = 0.0,
                [PersonnelLevel.PL3] = 5.0,
                [PersonnelLevel.PL4] = 2.0
            };
            var personnelOverheadDC = 2.0;
            var numEntriesPerTeamPerDayDC = 2.0;
            var hoursPerEntryPerTeamDC = 1.5;
            var hoursPerExitPerTeamDC = 1.5;
            var respiratorsPerPersonDC = 1.0;
            var numTeamsDC = 2.0;
            var ppeRequiredDC = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 0.0,
                [PpeLevel.B] = 0.5,
                [PpeLevel.C] = 0.5,
                [PpeLevel.D] = 0.0
            };
            var fumigationAgentVolume = 0.3342015463;

            // Other parameters
            var personnelPerRentalCar = 3.0;
            var roundtripDays = 2.0;
            var totalAvailablePersonnel = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 4.0,
                [PersonnelLevel.PL1] = 0.0,
                [PersonnelLevel.PL2] = 15.0,
                [PersonnelLevel.PL3] = 30.0,
                [PersonnelLevel.PL4] = 20.0
            };

            // Cost parameters
            var hourlyRate = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 150.0,
                [PersonnelLevel.PL1] = 90.0,
                [PersonnelLevel.PL2] = 110.0,
                [PersonnelLevel.PL3] = 130.0,
                [PersonnelLevel.PL4] = 190.0
            };
            var icRentalCostPerDay = 235.42;
            var icSuppliesCostPerDay = 1007.082;
            var wipeCost = 19.0;
            var hepaCost = 29.0;
            var respiratorCost = 238.0;
            var ppeCost = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = 391.59,
                [PpeLevel.B] = 144.83,
                [PpeLevel.C] = 66.6,
                [PpeLevel.D] = 64.32
            };
            var wipeAnalysisCost = 520.0;
            var hepaAnalysisCost = 290.0;
            var vacuumRentalCostPerDay = 15.0;
            var costPerMassOfMaterialRemoved = 0.1;
            var deconAgentCostPerVolume = 0.52306056;
            var deconMaterialsCost = 1.53612754751869;
            var rentalCarCostPerDay = 225.0;
            var roundtripTicketCostPerPerson = 350.0;
            var perDiem = 250.0;

            // Incident command parameters
            var personnelReqPerTeamIC = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = 1.0,
                [PersonnelLevel.PL1] = 0.0,
                [PersonnelLevel.PL2] = 2.0,
                [PersonnelLevel.PL3] = 2.0,
                [PersonnelLevel.PL4] = 4.0
            };
            var personnelOverheadDaysIC = 8.0;

            var CS_Parameters = new CharacterizationSamplingParameters(
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
                labUptimeHours,
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

            var SR_Parameters = new SourceReductionParameters(
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

            var DC_Parameters = new DecontaminationParameters(
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

            var OT_Parameters = new OtherParameters(
                personnelPerRentalCar,
                roundtripDays,
                totalAvailablePersonnel);

            var Cost_Parameters = new CostParameters(
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

            var IC_Parameters = new IncidentCommandParameters(
                personnelReqPerTeamIC,
                personnelOverheadDaysIC);

            parameters = new CalculatorManager(
                CS_Parameters, 
                SR_Parameters, 
                DC_Parameters, 
                IC_Parameters, 
                OT_Parameters, 
                Cost_Parameters);

            var csCalculatorFactory = new ParameterArrayCharacterizationSamplingCalculatorFactory(CS_Parameters, Cost_Parameters);
            var srCalculatorFactory = new ParameterArraySourceReductionCalculatorFactory(SR_Parameters, Cost_Parameters);
            var dcCalculatorFactory = new ParameterArrayDecontaminationCalculatorFactory(DC_Parameters, Cost_Parameters);
            var icCalculatorFactory = new ParameterArrayIncidentCommandCalculatorFactory(CS_Parameters, SR_Parameters, DC_Parameters, OT_Parameters, IC_Parameters, Cost_Parameters, csCalculatorFactory, srCalculatorFactory, dcCalculatorFactory);
            var otCalculatorFactory = new ParameterArrayOtherCalculatorFactory(OT_Parameters, Cost_Parameters);

            var calculatorCreator = new CalculatorCreator(csCalculatorFactory, srCalculatorFactory, dcCalculatorFactory, otCalculatorFactory, icCalculatorFactory);

            Calculator = calculatorCreator.GetCalculators();
        }

        [Test]
        public void CalculateCost()
        {
            var areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();
            var contaminationInfo = new ContaminationInformation(500, 20);

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                areaContaminated.Add(surface, contaminationInfo);
            }

            //var results = Calculator.CalculateResults(parameters, areaContaminated);

            //Assert.AreEqual(2.6909787627956, results.characterizationSamplingResults.workDays, 1e-6, "Incorrect work days calculated for characterization sampling");
            //Assert.AreEqual(33.8902598509935, results.characterizationSamplingResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for characterization sampling");
            //Assert.AreEqual(666877, results.characterizationSamplingResults.phaseCost, 1e-6, "Incorrect phase cost calculated for characterization sampling");
            
            //Assert.AreEqual(2.75302474470449, results.sourceReductionResults.workDays, 1e-6, "Incorrect work days calculated for source reduction");
            //Assert.AreEqual(2.75302474470449, results.sourceReductionResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for source reduction");
            //Assert.AreEqual(259638, results.sourceReductionResults.phaseCost, 1e-6, "Incorrect phase cost calculated for source reduction");
            
            //Assert.AreEqual(12.0, results.decontaminationResults.workDays, 1e-6, "Incorrect work days calculated for decontamination");
            //Assert.AreEqual(14.0, results.decontaminationResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for decontamination");
            //Assert.AreEqual(611701, results.decontaminationResults.phaseCost, 1e-6, "Incorrect phase cost calculated for decontamination");
            
            //Assert.AreEqual(58.643284595698, results.incidentCommandResults.onSiteDays, 1e-6, "Incorrect onsite days calculated for incident command");
            //Assert.AreEqual(1051034, results.incidentCommandResults.phaseCost, 1e-6, "Incorrect phase cost calculated for incident command");

            //Assert.AreEqual(49161, results.otherResults.otherCosts, 1e-6, "Incorrect cost calculated for other costs");

            //Assert.AreEqual(2638411, results.generalResults.totalCost, 1e-6, "Incorrect total cost calculated");
            //Assert.AreEqual(4, results.generalResults.decontaminationRounds, 1e-6, "Incorrect number of decontamination rounds calculated");
        }
    }
}
