using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;

namespace Battelle.EPA.WideAreaDecon.Model.Parameter
{
    public class ScenarioParameterManager
    {
        private readonly ParameterFilter[] _characterizationSamplingParameters;
        private readonly ParameterFilter[] _sourceReductionParameters;
        private readonly ParameterFilter[] _decontaminationParameters;
        private readonly ParameterFilter[] _wasteSamplingParameters;
        private readonly IParameter[] _efficacyParameters;
        private readonly ParameterFilter[] _incidentCommandParameters;
        private readonly ParameterFilter[] _costParameters;
        private readonly IParameter[] _treatmentMethodParameters;

        public ScenarioParameterManager(
            ParameterFilter[] csParameters,
            ParameterFilter[] srParameters,
            ParameterFilter[] dcParameters,
            ParameterFilter[] wsParameters,
            IParameter[] effParameters,
            ParameterFilter[] icParameters,
            ParameterFilter[] costParameters,
            IParameter[] treatmentParameters)
        {
            _characterizationSamplingParameters = csParameters;
            _sourceReductionParameters = srParameters;
            _decontaminationParameters = dcParameters;
            _wasteSamplingParameters = wsParameters;
            _efficacyParameters = effParameters;
            _incidentCommandParameters = icParameters;
            _costParameters = costParameters;
            _treatmentMethodParameters = treatmentParameters;
        }

        public CalculatorManager RedrawParameters(Dictionary<SurfaceType, ContaminationInformation> scenarioDefinitionDetails,
            DecontaminationPhase phase)
        {
            return new CalculatorManager()
            {
                _characterizationSamplingParameters = SetCharacterizationSamplingParameters(),
                _sourceReductionParameters = SetSourceReductionParameters(),
                _decontaminationParameters = SetDecontaminationParameters(scenarioDefinitionDetails, phase),
                _wasteSamplingParameters = SetWasteSamplingParameters(),
                _incidentCommandParameters = SetIncidentCommandParameters(),
                _costParameters = SetCostParameters()
            };
        }

        public ResultsCalculator SetDrawnParameters(CalculatorManager calculatorManager)
        {
            var calculatorCreator = calculatorManager.CreateCalculatorFactories();

            return new ResultsCalculator()
            {
                _characterizationSamplingCostCalculator = calculatorCreator._characterizationSamplingFactory.GetCalculator(),
                _sourceReductionCostCalculator = calculatorCreator._sourceReductionFactory.GetCalculator(),
                _decontaminationCostCalculator = calculatorCreator._decontaminationFactory.GetCalculator(),
                _wasteSamplingCostCalculator = calculatorCreator._wasteSamplingFactory.GetCalculator(),
                _incidentCommandCostCalculator = calculatorCreator._incidentCommandFactory.GetCalculator()
            };
        }

        private CharacterizationSamplingParameters SetCharacterizationSamplingParameters()
        {
            var labUptimesHours = new List<double>();
            var labDistanceFromSite = new List<double>();
            var labThroughput = new List<double>();

            var fractionSurfaceSampled = _characterizationSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Fraction of Surface Sampled").CreateDistribution().Draw();
            var fractionSampledWipe =  fractionSurfaceSampled * 0.5;
            var fractionSampledHepa = fractionSurfaceSampled * 0.5;
            var surfaceAreaPerWipe = _characterizationSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Surface Area per Wipe").CreateDistribution().Draw();
            var surfaceAreaPerHepa = _characterizationSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Surface Area per HEPA Sock").CreateDistribution().Draw();
            var wipesPerHrPerTeam = _characterizationSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Wipes per Hour per Team").CreateDistribution().Draw();
            var hepaSocksPerHrPerTeam = _characterizationSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "HEPA Socks per Hour per Team").CreateDistribution().Draw();
            var numTeams = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();
            var samplePackageTime = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Packaging Time per Sample").CreateDistribution().Draw();
            var numLabs = (int)_characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Number of Labs").CreateDistribution().Draw();
            for (int i = 0; i < numLabs; i++)
            {
                labUptimesHours.Add(_characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Uptime Hours per Day").CreateDistribution().Draw());
                labDistanceFromSite.Add(_characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Distance from Site").CreateDistribution().Draw());
                labThroughput.Add(_characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Throughput Samples per Day").CreateDistribution().Draw());
            }
            var resultTransmissionToIC = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Time of Result Transmission to IC").CreateDistribution().Draw();

            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            var personnelOverheadDays = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            var roundtripDays = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            var entryPrepTime = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Prep Time per Team per Entry").CreateDistribution().Draw();
            var deconLineTime = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Decon Line Time per Team per Exit").CreateDistribution().Draw();
            var respiratorsPerPerson = _characterizationSamplingParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Respirators per Person").CreateDistribution().Draw();

            var ppeRequired = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = _characterizationSamplingParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = _characterizationSamplingParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = _characterizationSamplingParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = _characterizationSamplingParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (D)").CreateDistribution().Draw()
            };

            var entryDuration = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (D)").CreateDistribution().Draw()
            };

            return new CharacterizationSamplingParameters(
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
                labDistanceFromSite,
                labThroughput,
                resultTransmissionToIC,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                respiratorsPerPerson,
                ppeRequired);
        }

        private SourceReductionParameters SetSourceReductionParameters()
        {
            var surfaceAreaToBeSourceReduced = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Fraction Surface Area to be Source Reduced").CreateDistribution().Draw();
            var massPerSurfaceArea = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Mass of Waste per Surface Area").CreateDistribution().Draw();
            var massRemovedPerHourPerTeam = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Mass of Waste Removed per Hour per Team").CreateDistribution().Draw();
            var respiratorsPerPerson = _sourceReductionParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Respirators per Person").CreateDistribution().Draw();

            var entryPrepTime = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Prep Time per Team per Entry").CreateDistribution().Draw();
            var deconLineTime = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Decon Line Time per Team per Exit").CreateDistribution().Draw();
            var numTeams = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();

            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };

            var personnelOverheadDays = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            var roundtripDays = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            var ppeRequired = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = _sourceReductionParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = _sourceReductionParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = _sourceReductionParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = _sourceReductionParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (D)").CreateDistribution().Draw()
            };

            var entryDuration = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (D)").CreateDistribution().Draw()
            };

            return new SourceReductionParameters(
                surfaceAreaToBeSourceReduced,
                massPerSurfaceArea,
                massRemovedPerHourPerTeam,
                entryDuration,
                entryPrepTime,
                deconLineTime,
                respiratorsPerPerson,
                numTeams,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays,
                ppeRequired);
        }

        private DecontaminationParameters SetDecontaminationParameters(Dictionary<SurfaceType, ContaminationInformation> scenarioDefinitionDetails, DecontaminationPhase phase)
        {
            var surfaces = SurfaceTypeHelper.GetSurfaceTypesForPhase(phase);
            var applicationMethods = SetTreatmentMethods(surfaces);
            var initialSporeLoading = new Dictionary<SurfaceType, double>();
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>();
            var agentVolume = new Dictionary<SurfaceType, double>();

            foreach (SurfaceType surface in surfaces)
            {
                initialSporeLoading.Add(surface, scenarioDefinitionDetails[surface].Loading);
                agentVolume.Add(surface, _decontaminationParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Volume of Agent Applied").CreateDistribution().Draw());
            }
            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                treatmentDaysPerAm.Add(method, _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Decon + Drying Days").CreateDistribution().Draw());
            }

            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };

            var personnelOverhead = _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            var roundtripDays = _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            var respiratorsPerPerson = _decontaminationParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Respirators per Person").CreateDistribution().Draw();
            var numTeams = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();

            var ppeRequired = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = _decontaminationParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = _decontaminationParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = _decontaminationParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = _decontaminationParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Fraction PPE Required (D)").CreateDistribution().Draw()
            };

            var entryDuration = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Entry Duration Based on PPE Level (D)").CreateDistribution().Draw()
            };

            var fumigationAgentVolume = _decontaminationParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Volume of Agent Applied for Fogging/Fumigation").CreateDistribution().Draw();

            return new DecontaminationParameters(
                _efficacyParameters,
                applicationMethods,
                initialSporeLoading,
                treatmentDaysPerAm,
                personnelReqPerTeam,
                personnelOverhead,
                roundtripDays,
                entryDuration,
                respiratorsPerPerson,
                numTeams,
                ppeRequired,
                scenarioDefinitionDetails,
                fumigationAgentVolume,
                agentVolume);
        }

        private WasteSamplingParameters SetWasteSamplingParameters()
        {
            var labUptimesHours = new List<double>();
            var labDistanceFromSite = new List<double>();
            var labThroughput = new List<double>();

            double fractionSampled = _wasteSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Fraction of Waste Sampled").CreateDistribution().Draw();
            double massPerWasteSample = _wasteSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Mass per Waste Sample").CreateDistribution().Draw();
            double volumePerWasteSample = _wasteSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Volume per Waste Sample").CreateDistribution().Draw();
            double wasteSamplesPerHrPerTeam = _wasteSamplingParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Waste Samples per Hour per Team").CreateDistribution().Draw();
            double solidWastePerSurfaceArea = _wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Solid Waste Produced per Surface Area").CreateDistribution().Draw();
            double liquidWastePerSurfaceArea = _wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Liquid Waste Produced per Surface Area").CreateDistribution().Draw();
            var numTeams = _wasteSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();
            var samplePackageTime = _wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Packaging Time per Sample").CreateDistribution().Draw();
            var numLabs = (int)_wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Number of Labs").CreateDistribution().Draw();
            for (int i = 0; i < numLabs; i++)
            {
                labUptimesHours.Add(_wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Uptime Hours per Day").CreateDistribution().Draw());
                labDistanceFromSite.Add(_wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Distance from Site").CreateDistribution().Draw());
                labThroughput.Add(_wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Throughput Samples per Day").CreateDistribution().Draw());
            }
            var resultTransmissionToIC = _wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Time of Result Transmission to IC").CreateDistribution().Draw();

            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _wasteSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _wasteSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _wasteSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _wasteSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _wasteSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            var personnelOverheadDays = _wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            var roundtripDays = _wasteSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();

            return new WasteSamplingParameters(
                fractionSampled,
                massPerWasteSample,
                volumePerWasteSample,
                wasteSamplesPerHrPerTeam,
                solidWastePerSurfaceArea,
                liquidWastePerSurfaceArea,
                numTeams,
                samplePackageTime,
                numLabs,
                labUptimesHours,
                labDistanceFromSite,
                labThroughput,
                resultTransmissionToIC,
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays);
        }

        private IncidentCommandParameters SetIncidentCommandParameters()
        {
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _incidentCommandParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _incidentCommandParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _incidentCommandParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _incidentCommandParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _incidentCommandParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            var personnelOverheadDays = _incidentCommandParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            var roundtripDays = _incidentCommandParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();

            return new IncidentCommandParameters(
                personnelReqPerTeam,
                personnelOverheadDays,
                roundtripDays);
        }

        private CostParameters SetCostParameters()
        {
            var hourlyRate = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _costParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "OSC Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _costParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-1 Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _costParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-2 Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _costParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-3 Hourly Wage").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _costParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "PL-4 Hourly Wage").CreateDistribution().Draw()
            };

            var icRentalCostPerDay = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Rentals per Day (IC)").CreateDistribution().Draw();
            var icSuppliesCostPerDay = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Supplies Cost per Day (IC)").CreateDistribution().Draw();
            var wipeCost = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost per One Wipe").CreateDistribution().Draw();
            var hepaCost = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost per One HEPA Sock").CreateDistribution().Draw();
            var wasteSampleCost = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost per One Waste Sample").CreateDistribution().Draw();
            var respiratorCost = _costParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Respirator").CreateDistribution().Draw();

            var ppeCost = new Dictionary<PpeLevel, double>
            {
                [PpeLevel.A] = _costParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level A Cost").CreateDistribution().Draw(),
                [PpeLevel.B] = _costParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level B Cost").CreateDistribution().Draw(),
                [PpeLevel.C] = _costParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level C Cost").CreateDistribution().Draw(),
                [PpeLevel.D] = _costParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Level D Cost").CreateDistribution().Draw()
            };

            var wipeAnalysisCost = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost per Wipe Sample Analyzed").CreateDistribution().Draw();
            var hepaAnalysisCost = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost per HEPA Sample Analyzed").CreateDistribution().Draw();
            var wasteSampleAnalysisCost = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost per Waste Sample Analyzed").CreateDistribution().Draw();
            var vacuumRentalCostPerDay = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "HEPA Vacuum Rental per Day").CreateDistribution().Draw();
            var costPerMassOfMaterialRemoved = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Material Removal per Mass").CreateDistribution().Draw();
            var deconAgentCostPerVolume = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Cost of Decon Agent").CreateDistribution().Draw();
            var deconMaterialsCost = _costParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Decon Material Cost per Surface Area").CreateDistribution().Draw();
            var rentalCarCostPerDay = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Rental Car Cost per Day").CreateDistribution().Draw();
            var roundtripTicketCostPerPerson = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Ticket Cost per Person").CreateDistribution().Draw();
            var perDiem = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Per Diem").CreateDistribution().Draw();
            var entryPrepCost = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Cost for Prep per Entry").CreateDistribution().Draw();
            var deconLineCost = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Cost for Decon Line per Exit").CreateDistribution().Draw();

            return new CostParameters(
                hourlyRate,
                icRentalCostPerDay,
                icSuppliesCostPerDay,
                wipeCost,
                hepaCost,
                wasteSampleCost,
                respiratorCost,
                ppeCost,
                wipeAnalysisCost,
                hepaAnalysisCost,
                wasteSampleAnalysisCost,
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

        //private Dictionary<SurfaceType, ApplicationMethod> SetTreatmentMethods(SurfaceType[] surfaces)
        //{
        //    Random random = new Random();

        //    var treatmentMethods = new Dictionary<SurfaceType, ApplicationMethod>();
        //    List<ApplicationMethod> applicationMethods = Enum.GetValues(typeof(ApplicationMethod)).Cast<ApplicationMethod>().ToList();

        //    while (treatmentMethods.Count < surfaces.Length)
        //    {
        //        var methodIndex = random.Next(0, applicationMethods.Count);

        //        foreach (SurfaceType surface in surfaces)
        //        {
        //            if (!treatmentMethods.ContainsKey(surface))
        //            {
        //                List<ApplicationMethod> applicableSurfaces = ApplicableApplicationMethodHelper.GetApplicationMethodsForSurface(surface);

        //                if (applicableSurfaces.Contains(applicationMethods[methodIndex]))
        //                {
        //                    treatmentMethods.Add(surface, applicationMethods[methodIndex]);
        //                }
        //            }
        //        }
        //    }

        //    return treatmentMethods;
        //}

        private Dictionary<SurfaceType, ApplicationMethod> SetTreatmentMethods(SurfaceType[] surfaces)
        {
            var treatmentMethods = new Dictionary<SurfaceType, ApplicationMethod>();

            foreach (SurfaceType surface in surfaces)
            {
                string surfaceName = surface.ToString();

                var deconData = _treatmentMethodParameters.First(p => p.MetaData.Name == "Decontamination Method by Surface") as EnumeratedParameter<SurfaceType>;

                treatmentMethods.Add(surface, deconData.Values[surface].GetTextValue().ParseEnum<ApplicationMethod>());
            }
            
            return treatmentMethods;
        }
    }
}
