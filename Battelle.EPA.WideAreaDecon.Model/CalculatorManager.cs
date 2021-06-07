﻿using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Services;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CalculatorManager
    {
        public CharacterizationSamplingParameters _characterizationSamplingParameters { get; set; }
        public SourceReductionParameters _sourceReductionParameters { get; set; }
        public DecontaminationParameters _decontaminationParameters { get; set; }
        public IncidentCommandParameters _incidentCommandParameters { get; set; }
        public OtherParameters _otherParameters { get; set; }
        public CostParameters _costParameters { get; set; }

        public CalculatorCreator CreateCalculatorFactories()
        {
            var csCalculatorFactory = new Services.Scenario.ParameterArrayCharacterizationSamplingCalculatorFactory(
                _characterizationSamplingParameters,
                _costParameters);

            var srCalculatorFactory = new Services.Scenario.ParameterArraySourceReductionCalculatorFactory(
                _sourceReductionParameters,
                _costParameters);

            var dcCalculatorFactory = new Services.Scenario.ParameterArrayDecontaminationCalculatorFactory(
                _decontaminationParameters,
                _costParameters);

            var icCalculatorFactory = new Services.Scenario.ParameterArrayIncidentCommandCalculatorFactory(
                _characterizationSamplingParameters,
                _sourceReductionParameters,
                _decontaminationParameters,
                _incidentCommandParameters,
                _costParameters);

            return new CalculatorCreator() {
                _characterizationSamplingFactory = csCalculatorFactory,
                _sourceReductionFactory = srCalculatorFactory,
                _decontaminationFactory = dcCalculatorFactory,
                _incidentCommandFactory = icCalculatorFactory
            };
        }

        public CalculatorCreator CreateEventCalculatorFactories()
        {
            var csCalculatorFactory = new Services.Event.ParameterArrayCharacterizationSamplingCalculatorFactory(
                _otherParameters,
                _costParameters);

            var srCalculatorFactory = new Services.Event.ParameterArraySourceReductionCalculatorFactory(
                _otherParameters,
                _costParameters);

            var dcCalculatorFactory = new Services.Event.ParameterArrayDecontaminationCalculatorFactory(
                _otherParameters,
                _costParameters);

            var icCalculatorFactory = new Services.Event.ParameterArrayIncidentCommandCalculatorFactory(
                _otherParameters,
                _costParameters);

            return new CalculatorCreator()
            {
                _characterizationSamplingFactory = csCalculatorFactory,
                _sourceReductionFactory = srCalculatorFactory,
                _decontaminationFactory = dcCalculatorFactory,
                _incidentCommandFactory = icCalculatorFactory
            };
        }
    }
}
