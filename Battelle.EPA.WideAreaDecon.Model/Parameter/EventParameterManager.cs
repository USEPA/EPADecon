using System;
using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Parameter
{
    public class EventParameterManager
    {
        private readonly ParameterFilter[] _characterizationSamplingParameters;
        private readonly ParameterFilter[] _sourceReductionParameters;
        private readonly ParameterFilter[] _decontaminationParameters;
        private readonly ParameterFilter[] _otherParameters;
        private readonly ParameterFilter[] _incidentCommandParameters;
        private readonly ParameterFilter[] _costParameters;
        private readonly Dictionary<PhaseCategory, double> _phaseOnsiteDays;

        public EventParameterManager(
            ParameterFilter[] csParameters,
            ParameterFilter[] srParameters,
            ParameterFilter[] dcParameters,
            ParameterFilter[] otParameters,
            ParameterFilter[] icParameters,
            ParameterFilter[] costParameters,
            Dictionary<PhaseCategory, double> phaseOnsiteDays)
        {
            _characterizationSamplingParameters = csParameters;
            _sourceReductionParameters = srParameters;
            _decontaminationParameters = dcParameters;
            _otherParameters = otParameters;
            _incidentCommandParameters = icParameters;
            _costParameters = costParameters;
            _phaseOnsiteDays = phaseOnsiteDays;
        }

        public CalculatorManager RedrawParameters()
        {
            return new CalculatorManager()
            {
                _characterizationSamplingParameters = SetCharacterizationSamplingParameters(),
                _sourceReductionParameters = SetSourceReductionParameters(),
                _decontaminationParameters = SetDecontaminationParameters(),
                _incidentCommandParameters = SetIncidentCommandParameters(),
                _otherParameters = SetOtherParameters(),
                _costParameters = SetCostParameters()
            };
        }

        public ResultsCalculator SetDrawnParameters(CalculatorManager calculatorManager)
        {
            var calculatorCreator = calculatorManager.CreateEventCalculatorFactories();

            return new ResultsCalculator()
            {
                _characterizationSamplingCostCalculator = calculatorCreator._characterizationSamplingFactory.GetCalculator(),
                _sourceReductionCostCalculator = calculatorCreator._sourceReductionFactory.GetCalculator(),
                _decontaminationCostCalculator = calculatorCreator._decontaminationFactory.GetCalculator(),
                _incidentCommandCostCalculator = calculatorCreator._incidentCommandFactory.GetCalculator()
            };
        }

        private CharacterizationSamplingParameters SetCharacterizationSamplingParameters()
        {
            var numTeams = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _characterizationSamplingParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            var roundtripDays = _characterizationSamplingParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            var onsiteDays = _phaseOnsiteDays[PhaseCategory.CharacterizationSampling];

            return new CharacterizationSamplingParameters(
                numTeams,
                personnelReqPerTeam,
                roundtripDays,
                onsiteDays);
        }

        private SourceReductionParameters SetSourceReductionParameters()
        {
            var numTeams = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _sourceReductionParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            var roundtripDays = _sourceReductionParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            var onsiteDays = _phaseOnsiteDays[PhaseCategory.SourceReduction];
            
            return new SourceReductionParameters(
                numTeams,
                personnelReqPerTeam,
                roundtripDays,
                onsiteDays);
        }

        private DecontaminationParameters SetDecontaminationParameters()
        {
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>
            {
                [PersonnelLevel.OSC] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            var roundtripDays = _decontaminationParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            var numTeams = _decontaminationParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();
            var onsiteDays = _phaseOnsiteDays[PhaseCategory.Decontamination];

            return new DecontaminationParameters(
               personnelReqPerTeam,
                roundtripDays,
                numTeams,
                onsiteDays);
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
            var roundtripDays = _incidentCommandParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Days").CreateDistribution().Draw();
            var onsiteDays = _phaseOnsiteDays[PhaseCategory.IncidentCommand];

            return new IncidentCommandParameters(
                roundtripDays,
                personnelReqPerTeam,
                onsiteDays);
        }

        private OtherParameters SetOtherParameters()
        {
            var personnelPerRentalCar = _otherParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Number of Personnel per Rental Car").CreateDistribution().Draw();

            return new OtherParameters(personnelPerRentalCar);
        }

        private CostParameters SetCostParameters()
        {
            var rentalCarCostPerDay = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Rental Car Cost per Day").CreateDistribution().Draw();
            var roundtripTicketCostPerPerson = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Roundtrip Ticket Cost per Person").CreateDistribution().Draw();
            var perDiem = _costParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Per Diem").CreateDistribution().Draw();

            return new CostParameters(
                rentalCarCostPerDay,
                roundtripTicketCostPerPerson,
                perDiem);
        }
    }
}
