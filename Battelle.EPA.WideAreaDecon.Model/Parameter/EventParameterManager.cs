using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using Battelle.EPA.WideAreaDecon.Model.Interface;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Parameter
{
    public class EventParameterManager
    {
        private readonly ICalculatorManager _calculatorManager;
        private readonly ParameterFilter[] _characterizationSamplingParameters;
        private readonly ParameterFilter[] _sourceReductionParameters;
        private readonly ParameterFilter[] _decontaminationParameters;
        private readonly ParameterFilter[] _verificationSamplingParameters;
        private readonly ParameterFilter[] _clearanceSamplingParameters;
        private readonly ParameterFilter[] _wasteSamplingParameters;
        private readonly ParameterFilter[] _otherParameters;
        private readonly ParameterFilter[] _incidentCommandParameters;
        private readonly ParameterFilter[] _costParameters;
        private readonly Dictionary<ElementCategory, double> _elementOnsiteDays;

        public EventParameterManager(
            ICalculatorManager calculatorManager,
            ParameterList eventParameters,
            Dictionary<ElementCategory, double> elementOnsiteDays)
        {
            _calculatorManager = calculatorManager;
            _elementOnsiteDays = elementOnsiteDays;

            _characterizationSamplingParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.CharacterizationSampling).Filters;
            _sourceReductionParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.SourceReduction).Filters;
            _decontaminationParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.Decontamination).Filters;
            _verificationSamplingParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.VerificationSampling).Filters;
            _clearanceSamplingParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.ClearanceSampling).Filters;
            _wasteSamplingParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.WasteSampling).Filters;
            _otherParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.Other).Filters;
            _incidentCommandParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.IncidentCommand).Filters;
            _costParameters = eventParameters.Filters.First(f => f.Name == ParameterNames.Cost).Filters;
        }

        public EventParameters RedrawParameters()
        {
            return new()
            {
                CharacterizationSamplingParameters = SetCharacterizationSamplingParameters(),
                SourceReductionParameters = SetSourceReductionParameters(),
                DecontaminationParameters = SetDecontaminationParameters(),
                VerificationSamplingParameters = SetVerificationSamplingParameters(),
                ClearanceSamplingParameters = SetClearanceSamplingParameters(),
                WasteSamplingParameters = SetWasteSamplingParameters(),
                IncidentCommandParameters = SetIncidentCommandParameters(),
                OtherParameters = SetOtherParameters(),
                CostParameters = SetCostParameters()
            };
        }

        public EventCalculators SetDrawnParameters(EventParameters parameters)
        {
            var calculatorCreator = _calculatorManager.CreateEventCalculatorFactories(parameters);
            return calculatorCreator.GetEventCalculators();
        }

        private CharacterizationSamplingParameters SetCharacterizationSamplingParameters()
        {
            var personnelParams = _characterizationSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var logisticParams = _characterizationSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var numTeams = personnelParams.GetNumTeams();
            var personnel = personnelParams.GetPersonnel();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var onsiteDays = _elementOnsiteDays[ElementCategory.CharacterizationSampling];

            return new CharacterizationSamplingParameters(
                numTeams,
                personnel,
                roundtripDays,
                onsiteDays);
        }

        private SourceReductionParameters SetSourceReductionParameters()
        {
            var personnelParams = _sourceReductionParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var logisticParams = _sourceReductionParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var numTeams = personnelParams.GetNumTeams();
            var personnel = personnelParams.GetPersonnel();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var onsiteDays = _elementOnsiteDays[ElementCategory.SourceReduction];

            return new SourceReductionParameters(
                numTeams,
                personnel,
                roundtripDays,
                onsiteDays);
        }

        private DecontaminationParameters SetDecontaminationParameters()
        {
            var personnelParams = _decontaminationParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var logisticParams = _decontaminationParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var numTeams = personnelParams.GetNumTeams();
            var personnel = personnelParams.GetPersonnel();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var onsiteDays = _elementOnsiteDays[ElementCategory.Decontamination];

            return new DecontaminationParameters(
                numTeams,
                personnel,
                roundtripDays,
                onsiteDays);
        }

        private VerificationSamplingParameters SetVerificationSamplingParameters()
        {
            var personnelParams = _verificationSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var logisticParams = _verificationSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var numTeams = personnelParams.GetNumTeams();
            var personnel = personnelParams.GetPersonnel();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var onsiteDays = _elementOnsiteDays[ElementCategory.VerificationSampling];

            return new VerificationSamplingParameters(
                numTeams,
                personnel,
                roundtripDays,
                onsiteDays);
        }

        private ClearanceSamplingParameters SetClearanceSamplingParameters()
        {
            var personnelParams = _clearanceSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var logisticParams = _clearanceSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var numTeams = personnelParams.GetNumTeams();
            var personnel = personnelParams.GetPersonnel();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var onsiteDays = _elementOnsiteDays[ElementCategory.ClearanceSampling];

            return new ClearanceSamplingParameters(
                numTeams,
                personnel,
                roundtripDays,
                onsiteDays);
        }

        private WasteSamplingParameters SetWasteSamplingParameters()
        {
            var personnelParams = _wasteSamplingParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var logisticParams = _wasteSamplingParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var numTeams = personnelParams.GetNumTeams();
            var personnel = personnelParams.GetPersonnel();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var onsiteDays = _elementOnsiteDays[ElementCategory.WasteSampling];

            return new WasteSamplingParameters(
                numTeams,
                personnel,
                roundtripDays,
                onsiteDays);
        }

        private IncidentCommandParameters SetIncidentCommandParameters()
        {
            var personnelParams = _incidentCommandParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var logisticParams = _incidentCommandParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var personnel = personnelParams.GetPersonnel();
            var roundtripDays = logisticParams.GetRoundtripDays();
            var overheadDays = logisticParams.GetOverheadDays();

            return new IncidentCommandParameters(
                personnel,
                roundtripDays,
                overheadDays);
        }

        private OtherParameters SetOtherParameters()
        {
            var logisticParams = _otherParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;
            var personnelPerRentalCar = logisticParams.GetPersonnelPerRentalCar();

            return new OtherParameters(personnelPerRentalCar);
        }

        private CostParameters SetCostParameters()
        {
            var personnelParams = _costParameters.First(p => p.Name == ParameterNames.Personnel.Name).Parameters;
            var suppliesParams = _costParameters.First(p => p.Name == ParameterNames.Supplies.Name).Parameters;
            var logisticParams = _costParameters.First(p => p.Name == ParameterNames.Logistic.Name).Parameters;

            var hourlyRate = personnelParams.GetHourlyRates();
            var icRentalCostPerDay = suppliesParams.GetIcRentalCostPerDay();
            var icSuppliesCostPerDay = suppliesParams.GetIcSuppliesCostPerDay();
            var rentalCarCostPerDay = logisticParams.GetRentalCarCostPerDay();
            var roundtripTicketCostPerPerson = logisticParams.GetRoundtripTicketCostPerPerson();
            var perDiem = logisticParams.GetPerDiemCost();

            return new CostParameters(
                hourlyRate,
                icRentalCostPerDay,
                icSuppliesCostPerDay,
                rentalCarCostPerDay,
                roundtripTicketCostPerPerson,
                perDiem);
        }
    }
}
