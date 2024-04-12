using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Parameter
{
    public class ScenarioParameterManager
    {
        private readonly ICalculatorManager _calculatorManager;
        private readonly ParameterFilter[] _characterizationSamplingParameters;
        private readonly ParameterFilter[] _sourceReductionParameters;
        private readonly ParameterFilter[] _decontaminationParameters;
        private readonly ParameterFilter[] _verificationSamplingParameters;
        private readonly ParameterFilter[] _clearanceSamplingParameters;
        private readonly ParameterFilter[] _wasteSamplingParameters;
        private readonly IParameter[] _efficacyParameters;
        private readonly ParameterFilter[] _costParameters;
        private readonly IParameter[] _treatmentMethodParameters;

        public ScenarioParameterManager(
            ICalculatorManager calculatorManager,
            ParameterList scenarioParameters)
        {
            _calculatorManager = calculatorManager;

            _characterizationSamplingParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.CharacterizationSampling).Filters;
            _sourceReductionParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.SourceReduction).Filters;
            _decontaminationParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.Decontamination).Filters;
            _verificationSamplingParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.VerificationSampling).Filters;
            _clearanceSamplingParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.ClearanceSampling).Filters;
            _wasteSamplingParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.WasteSampling).Filters;
            _efficacyParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.Efficacy).Parameters;
            _costParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.Cost).Filters;
            _treatmentMethodParameters = scenarioParameters.Filters.First(f => f.Name == ParameterNames.DeconMethodBySurface).Parameters;
        }

        public ScenarioParameters RedrawParameters(Dictionary<SurfaceType, ContaminationInformation> scenarioDefinitionDetails,
            DecontaminationElement element) =>
            new()
            {
                CharacterizationSamplingParameters = SetCharacterizationSamplingParameters(),
                SourceReductionParameters = SetSourceReductionParameters(),
                DecontaminationParameters = SetDecontaminationParameters(scenarioDefinitionDetails, element),
                VerificationSamplingParameters = SetVerificationSamplingParameters(),
                ClearanceSamplingParameters = SetClearanceSamplingParameters(),
                WasteSamplingParameters = SetWasteSamplingParameters(),
                CostParameters = SetCostParameters()
            };

        public ScenarioCalculators SetDrawnParameters(ScenarioParameters parameters)
        {
            var calculatorCreator = _calculatorManager.CreateScenarioCalculatorFactories(parameters);
            return calculatorCreator.GetScenarioCalculators();
        }

        private CharacterizationSamplingParameters SetCharacterizationSamplingParameters()
        {
            var logisticParams = _characterizationSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelParams = _characterizationSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var safetyParams = _characterizationSamplingParameters.First(p => p.Name == ParameterNames.Safety.Name).Parameters;
            var suppliesParams = _characterizationSamplingParameters.First(p => p.Name == ParameterNames.Supplies.Name).Parameters;

            var labUptimesHours = new List<double>();
            var sampleShippingTime = new List<double>();
            var labThroughput = new List<double>();

            var surfaceAreaPerWipe = suppliesParams.GetSurfaceAreaPerWipe();
            var surfaceAreaPerHepa = suppliesParams.GetSurfaceAreaPerVacuumSample();
            var wipesPerHrPerTeam = suppliesParams.GetWipesPerHourPerTeam();
            var hepaSocksPerHrPerTeam = suppliesParams.GetVacuumSamplesPerHourPerTeam();

            var numTeams = personnelParams.GetNumTeams();
            var personnelReqPerTeam = personnelParams.GetPersonnel();

            var fractionSurfaceSampled = logisticParams.GetFractionSurfaceSampled();
            var fractionSampledWipe = fractionSurfaceSampled * 0.5;
            var fractionSampledHepa = fractionSurfaceSampled * 0.5;
            var samplePackageTime = logisticParams.GetSamplePackagingTime();
            var numLabs = (int)logisticParams.GetNumLabs();
            for (var i = 0; i < numLabs; i++)
            {
                labUptimesHours.Add(logisticParams.GetLabUptimeHours());
                sampleShippingTime.Add(logisticParams.GetSampleShippingTime());
                labThroughput.Add(logisticParams.GetLabThroughput());
            }

            var resultTransmissionToIC = logisticParams.GetIcResultTransmissionTime();
            var personnelOverheadDays = logisticParams.GetOverheadDays();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var entryPrepTime = logisticParams.GetEntryPrepTime();
            var deconLineTime = logisticParams.GetDeconLineTime();
            var postEntryRest = logisticParams.GetPostEntryRest();
            var entryDuration = logisticParams.GetPpeEntryDurations();

            var respiratorsPerPerson = safetyParams.GetNumRespirators();
            var ppeRequired = safetyParams.GetPpe();

            return new(
                fractionSampledWipe,
                fractionSampledHepa,
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                numTeams,
                samplePackageTime,
                numLabs,
                labUptimesHours,
                sampleShippingTime,
                labThroughput,
                resultTransmissionToIC,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                postEntryRest,
                respiratorsPerPerson,
                ppeRequired);
        }

        private SourceReductionParameters SetSourceReductionParameters()
        {
            var logisticParams = _sourceReductionParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelParams = _sourceReductionParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var safetyParams = _sourceReductionParameters.First(p => p.Name == ParameterNames.Safety.Name).Parameters;

            var massToBeSourceReduced = logisticParams.GetFractionMassToBeSourceReduced();
            var massPerSurfaceArea = logisticParams.GetMassPerSurfaceArea();
            var massRemovedPerHourPerTeam = logisticParams.GetMassWasteRemoved();
            var entryPrepTime = logisticParams.GetEntryPrepTime();
            var postEntryRest = logisticParams.GetPostEntryRest();
            var deconLineTime = logisticParams.GetDeconLineTime();
            var personnelOverheadDays = logisticParams.GetOverheadDays();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var entryDuration = logisticParams.GetPpeEntryDurations();

            var respiratorsPerPerson = safetyParams.GetNumRespirators();
            var ppeRequired = safetyParams.GetPpe();

            var numTeams = personnelParams.GetNumTeams();
            var personnelReqPerTeam = personnelParams.GetPersonnel();

            return new(
                massToBeSourceReduced,
                massPerSurfaceArea,
                massRemovedPerHourPerTeam,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                postEntryRest,
                respiratorsPerPerson,
                numTeams,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays,
                ppeRequired);
        }

        private DecontaminationParameters SetDecontaminationParameters(Dictionary<SurfaceType, ContaminationInformation> scenarioDefinitionDetails, DecontaminationElement element)
        {
            var logisticParams = _decontaminationParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelParams = _decontaminationParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var safetyParams = _decontaminationParameters.First(p => p.Name == ParameterNames.Safety.Name).Parameters;
            var suppliesParams = _decontaminationParameters.First(p => p.Name == ParameterNames.Supplies.Name).Parameters;

            var surfaces = SurfaceTypeHelper.GetSurfaceTypesForElement(element);
            var applicationMethods = SetTreatmentMethods(surfaces);
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>();
            var agentVolume = new Dictionary<SurfaceType, double>();

            foreach (var surface in surfaces)
            {
                initialSporeLoading.Add(surface, scenarioDefinitionDetails[surface].Loading);
                agentVolume.Add(surface, suppliesParams.GetAgentVolume());
            }
            var fumigationAgentVolume = suppliesParams.GetFumitgationAgentVolume();


            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                treatmentDaysPerAm.Add(method, logisticParams.GetDeconDryingVentingDays());
            }

            var entryDuration = logisticParams.GetPpeEntryDurations();
            var entryPrepTime = logisticParams.GetEntryPrepTime();
            var deconLineTime = logisticParams.GetDeconLineTime();
            var postEntryRest = logisticParams.GetPostEntryRest();
            var personnelOverhead = logisticParams.GetOverheadDays();
            var roundtripDays = logisticParams.GetRoundtripDays();

            var numTeams = personnelParams.GetNumTeams();
            var personnelReqPerTeam = personnelParams.GetPersonnel();

            var respiratorsPerPerson = safetyParams.GetNumRespirators();
            var ppeRequired = safetyParams.GetPpe();

            return new(
                _efficacyParameters,
                applicationMethods,
                initialSporeLoading,
                treatmentDaysPerAm,
                personnelReqPerTeam,
                personnelOverhead,
                roundtripDays,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                postEntryRest,
                respiratorsPerPerson,
                numTeams,
                ppeRequired,
                scenarioDefinitionDetails,
                fumigationAgentVolume,
                agentVolume);
        }

        private VerificationSamplingParameters SetVerificationSamplingParameters()
        {
            var logisticParams = _verificationSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelParams = _verificationSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var safetyParams = _verificationSamplingParameters.First(p => p.Name == ParameterNames.Safety.Name).Parameters;
            var suppliesParams = _verificationSamplingParameters.First(p => p.Name == ParameterNames.Supplies.Name).Parameters;

            var labUptimesHours = new List<double>();
            var sampleShippingTime = new List<double>();
            var labThroughput = new List<double>();

            var fractionSurfaceSampled = logisticParams.GetFractionSurfaceSampled();
            var fractionSampledWipe = fractionSurfaceSampled * 0.5;
            var fractionSampledHepa = fractionSurfaceSampled * 0.5;
            var samplePackageTime = logisticParams.GetSamplePackagingTime();
            var numLabs = (int)logisticParams.GetNumLabs();
            for (var i = 0; i < numLabs; i++)
            {
                labUptimesHours.Add(logisticParams.GetLabUptimeHours());
                sampleShippingTime.Add(logisticParams.GetSampleShippingTime());
                labThroughput.Add(logisticParams.GetLabThroughput());
            }

            var resultTransmissionToIC = logisticParams.GetIcResultTransmissionTime();
            var personnelOverheadDays = logisticParams.GetOverheadDays();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var entryPrepTime = logisticParams.GetEntryPrepTime();
            var deconLineTime = logisticParams.GetDeconLineTime();
            var postEntryRest = logisticParams.GetPostEntryRest();
            var entryDuration = logisticParams.GetPpeEntryDurations();
            var samplingFrequency = logisticParams.GetSamplingFrequency();

            var surfaceAreaPerWipe = suppliesParams.GetSurfaceAreaPerWipe();
            var surfaceAreaPerHepa = suppliesParams.GetSurfaceAreaPerVacuumSample();
            var wipesPerHrPerTeam = suppliesParams.GetWipesPerHourPerTeam();
            var hepaSocksPerHrPerTeam = suppliesParams.GetVacuumSamplesPerHourPerTeam();

            var numTeams = personnelParams.GetNumTeams();
            var personnelReqPerTeam = personnelParams.GetPersonnel();

            var respiratorsPerPerson = safetyParams.GetNumRespirators();
            var ppeRequired = safetyParams.GetPpe();

            return new(
                fractionSampledWipe,
                fractionSampledHepa,
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                numTeams,
                samplePackageTime,
                numLabs,
                labUptimesHours,
                sampleShippingTime,
                labThroughput,
                resultTransmissionToIC,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                postEntryRest,
                respiratorsPerPerson,
                ppeRequired,
                samplingFrequency);
        }

        private ClearanceSamplingParameters SetClearanceSamplingParameters()
        {
            var logisticParams = _clearanceSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelParams = _clearanceSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var safetyParams = _clearanceSamplingParameters.First(p => p.Name == ParameterNames.Safety.Name).Parameters;
            var suppliesParams = _clearanceSamplingParameters.First(p => p.Name == ParameterNames.Supplies.Name).Parameters;

            var labUptimesHours = new List<double>();
            var sampleShippingTime = new List<double>();
            var labThroughput = new List<double>();

            var fractionSurfaceSampled = logisticParams.GetFractionSurfaceSampled();
            var fractionSampledWipe = fractionSurfaceSampled * 0.5;
            var fractionSampledHepa = fractionSurfaceSampled * 0.5;
            var samplePackageTime = logisticParams.GetSamplePackagingTime();
            var numLabs = (int)logisticParams.GetNumLabs();
            for (int i = 0; i < numLabs; i++)
            {
                labUptimesHours.Add(logisticParams.GetLabUptimeHours());
                sampleShippingTime.Add(logisticParams.GetSampleShippingTime());
                labThroughput.Add(logisticParams.GetLabThroughput());
            }

            var resultTransmissionToIC = logisticParams.GetIcResultTransmissionTime();
            var personnelOverheadDays = logisticParams.GetOverheadDays();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var entryPrepTime = logisticParams.GetEntryPrepTime();
            var deconLineTime = logisticParams.GetDeconLineTime();
            var postEntryRest = logisticParams.GetPostEntryRest();
            var entryDuration = logisticParams.GetPpeEntryDurations();
            var samplingFrequency = logisticParams.GetSamplingFrequency();

            var surfaceAreaPerWipe = suppliesParams.GetSurfaceAreaPerWipe();
            var surfaceAreaPerHepa = suppliesParams.GetSurfaceAreaPerVacuumSample();
            var wipesPerHrPerTeam = suppliesParams.GetWipesPerHourPerTeam();
            var hepaSocksPerHrPerTeam = suppliesParams.GetVacuumSamplesPerHourPerTeam();

            var numTeams = personnelParams.GetNumTeams();
            var personnelReqPerTeam = personnelParams.GetPersonnel();

            var respiratorsPerPerson = safetyParams.GetNumRespirators();
            var ppeRequired = safetyParams.GetPpe();

            return new(
                fractionSampledWipe,
                fractionSampledHepa,
                surfaceAreaPerWipe,
                surfaceAreaPerHepa,
                wipesPerHrPerTeam,
                hepaSocksPerHrPerTeam,
                numTeams,
                samplePackageTime,
                numLabs,
                labUptimesHours,
                sampleShippingTime,
                labThroughput,
                resultTransmissionToIC,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                postEntryRest,
                respiratorsPerPerson,
                ppeRequired,
                samplingFrequency);
        }

        private WasteSamplingParameters SetWasteSamplingParameters()
        {
            var logisticParams = _wasteSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelParams = _wasteSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var safetyParams = _wasteSamplingParameters.First(p => p.Name == ParameterNames.Safety.Name).Parameters;
            var suppliesParams = _wasteSamplingParameters.First(p => p.Name == ParameterNames.Supplies.Name).Parameters;

            var labUptimesHours = new List<double>();
            var sampleShippingTime = new List<double>();
            var labThroughput = new List<double>();

            var fractionSampled = logisticParams.GetFractionWasteSampled();
            var entryDuration = logisticParams.GetPpeEntryDurations();
            var entryPrepTime = logisticParams.GetEntryPrepTime();
            var deconLineTime = logisticParams.GetDeconLineTime();
            var postEntryRest = logisticParams.GetPostEntryRest();
            var samplePackageTime = logisticParams.GetSamplePackagingTime();
            var numLabs = (int)logisticParams.GetNumLabs();
            for (var i = 0; i < numLabs; i++)
            {
                labUptimesHours.Add(logisticParams.GetLabUptimeHours());
                sampleShippingTime.Add(logisticParams.GetSampleShippingTime());
                labThroughput.Add(logisticParams.GetLabThroughput());
            }

            var resultTransmissionToIC = logisticParams.GetIcResultTransmissionTime();
            var solidWastePerSurfaceArea = logisticParams.GetSolidWastePerSurfaceArea();
            var liquidWastePerSurfaceArea = logisticParams.GetLiquidWasteProducedPerSurfaceArea();
            var personnelOverheadDays = logisticParams.GetOverheadDays();
            var roundtripDays = logisticParams.GetRoundtripDays();

            var massPerWasteSample = suppliesParams.GetMassPerWasteSample();
            var volumePerWasteSample = suppliesParams.GetVolumePerWasteSample();
            var wasteSamplesPerHrPerTeam = suppliesParams.GetWasteSamplesPerHourPerTeam();

            var numTeams = personnelParams.GetNumTeams();
            var personnelReqPerTeam = personnelParams.GetPersonnel();

            var respiratorsPerPerson = safetyParams.GetNumRespirators();
            var ppeRequired = safetyParams.GetPpe();

            return new(
                fractionSampled,
                massPerWasteSample,
                volumePerWasteSample,
                wasteSamplesPerHrPerTeam,
                solidWastePerSurfaceArea,
                liquidWastePerSurfaceArea,
                numTeams,
                respiratorsPerPerson,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                postEntryRest,
                ppeRequired,
                samplePackageTime,
                numLabs,
                labUptimesHours,
                sampleShippingTime,
                labThroughput,
                resultTransmissionToIC,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays);
        }

        private CostParameters SetCostParameters()
        {
            var logisticParams = _costParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelParams = _costParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var safetyParams = _costParameters.First(p => p.Name == ParameterNames.Safety.Name).Parameters;
            var suppliesParams = _costParameters.First(p => p.Name == ParameterNames.Supplies.Name).Parameters;

            var hourlyRate = personnelParams.GetHourlyRates();

            var respiratorCost = safetyParams.GetRespiratorCost();
            var ppeCost = safetyParams.GetPpeCosts();

            var wipeCost = suppliesParams.GetWipeCost();
            var hepaCost = suppliesParams.GetVacuumSampleCost();
            var wasteSampleCost = suppliesParams.GetWasteSampleCost();
            var wipeAnalysisCost = suppliesParams.GetWipeSampleAnalysisCost();
            var hepaAnalysisCost = suppliesParams.GetVacuumSampleAnalysisCost();
            var solidWasteSampleAnalysisCost = suppliesParams.GetSolidWasteSampleAnalysisCost();
            var liquidWasteSampleAnalysisCost = suppliesParams.GetLiquidWasteSampleAnalysisCost();
            var vacuumRentalCostPerDay = suppliesParams.GetVacuumRentalCost();
            var costPerMassOfMaterialRemoved = suppliesParams.GetRemovedMaterialCost();
            var deconAgentCostPerVolume = suppliesParams.GetDeconAgentCost();
            var deconMaterialsCost = suppliesParams.GetDeconMaterialsCost();

            var rentalCarCostPerDay = logisticParams.GetRentalCarCostPerDay();
            var roundtripTicketCostPerPerson = logisticParams.GetRoundtripTicketCostPerPerson();
            var perDiem = logisticParams.GetPerDiemCost();
            var entryPrepCost = logisticParams.GetEntryPrepCost();
            var deconLineCost = logisticParams.GetDeconLineCost();

            return new(
                hourlyRate,
                wipeCost,
                hepaCost,
                wasteSampleCost,
                respiratorCost,
                ppeCost,
                wipeAnalysisCost,
                hepaAnalysisCost,
                solidWasteSampleAnalysisCost,
                liquidWasteSampleAnalysisCost,
                vacuumRentalCostPerDay,
                costPerMassOfMaterialRemoved,
                deconAgentCostPerVolume,
                deconMaterialsCost,
                rentalCarCostPerDay,
                roundtripTicketCostPerPerson,
                perDiem,
                entryPrepCost,
                deconLineCost);
        }

        private Dictionary<SurfaceType, ApplicationMethod> SetTreatmentMethods(SurfaceType[] surfaces)
        {
            var treatmentMethods = new Dictionary<SurfaceType, ApplicationMethod>();

            foreach (var surface in surfaces)
            {
                var deconData = _treatmentMethodParameters.First(p => p.MetaData.Name == "Decontamination Method by Surface") as EnumeratedParameter<SurfaceType>
                    ?? throw new NullReferenceException("Decontamination Method by Surface parameter is null");
                treatmentMethods.Add(surface, deconData.Values[surface].GetTextValue().ParseEnum<ApplicationMethod>());
            }

            return treatmentMethods;
        }
    }
}
