using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CalculatorCreator
    {
        private readonly ICharacterizationSamplingCalculatorFactory _characterizationSamplingFactory;
        private readonly ISourceReductionCalculatorFactory _sourceReductionFactory;
        private readonly IDecontaminationCalculatorFactory _decontaminationFactory;
        private readonly IVerificationSamplingCalculatorFactory _verificationSamplingFactory;
        private readonly IClearanceSamplingCalculatorFactory _clearanceSamplingFactory;
        private readonly IWasteSamplingCalculatorFactory _wasteSamplingFactory;
        private readonly IIncidentCommandCalculatorFactory _incidentCommandFactory;

        public CalculatorCreator(
            ICharacterizationSamplingCalculatorFactory characterizationSamplingCalculatorFactory,
            ISourceReductionCalculatorFactory sourceReductionCalculatorFactory,
            IDecontaminationCalculatorFactory decontaminationCalculatorFactory,
            IVerificationSamplingCalculatorFactory verificationSamplingCalculatorFactory,
            IClearanceSamplingCalculatorFactory clearanceSamplingCalculatorFactory,
            IWasteSamplingCalculatorFactory wasteSamplingCalculatorFactory,
            IIncidentCommandCalculatorFactory incidentCommandCalculatorFactory)
        {
            _characterizationSamplingFactory = characterizationSamplingCalculatorFactory;
            _sourceReductionFactory = sourceReductionCalculatorFactory;
            _decontaminationFactory = decontaminationCalculatorFactory;
            _verificationSamplingFactory = verificationSamplingCalculatorFactory;
            _clearanceSamplingFactory = clearanceSamplingCalculatorFactory;
            _wasteSamplingFactory = wasteSamplingCalculatorFactory;
            _incidentCommandFactory = incidentCommandCalculatorFactory;
        }

        public CalculatorCreator(
            ICharacterizationSamplingCalculatorFactory characterizationSamplingCalculatorFactory,
            ISourceReductionCalculatorFactory sourceReductionCalculatorFactory,
            IDecontaminationCalculatorFactory decontaminationCalculatorFactory,
            IVerificationSamplingCalculatorFactory verificationSamplingCalculatorFactory,
            IClearanceSamplingCalculatorFactory clearanceSamplingCalculatorFactory,
            IWasteSamplingCalculatorFactory wasteSamplingCalculatorFactory)
        {
            _characterizationSamplingFactory = characterizationSamplingCalculatorFactory;
            _sourceReductionFactory = sourceReductionCalculatorFactory;
            _decontaminationFactory = decontaminationCalculatorFactory;
            _verificationSamplingFactory = verificationSamplingCalculatorFactory;
            _clearanceSamplingFactory = clearanceSamplingCalculatorFactory;
            _wasteSamplingFactory = wasteSamplingCalculatorFactory;
        }

        public ScenarioCalculators GetScenarioCalculators() =>
            new ScenarioCalculators
            {
                CharacterizationSamplingCostCalculator = _characterizationSamplingFactory.GetCalculator(),
                SourceReductionCostCalculator = _sourceReductionFactory.GetCalculator(),
                DecontaminationCostCalculator = _decontaminationFactory.GetCalculator(),
                VerificationSamplingCostCalculator = _verificationSamplingFactory.GetCalculator(),
                ClearanceSamplingCostCalculator = _clearanceSamplingFactory.GetCalculator(),
                WasteSamplingCostCalculator = _wasteSamplingFactory.GetCalculator()
            };

        public EventCalculators GetEventCalculators() =>
            new EventCalculators
            {
                 CharacterizationSamplingCostCalculator = _characterizationSamplingFactory.GetCalculator(),
                 SourceReductionCostCalculator = _sourceReductionFactory.GetCalculator(),
                 DecontaminationCostCalculator = _decontaminationFactory.GetCalculator(),
                 VerificationSamplingCostCalculator = _verificationSamplingFactory.GetCalculator(),
                 ClearanceSamplingCostCalculator = _clearanceSamplingFactory.GetCalculator(),
                 WasteSamplingCostCalculator = _wasteSamplingFactory.GetCalculator(),
                IncidentCommandCostCalculator = _incidentCommandFactory.GetCalculator()
            };
    }
}
