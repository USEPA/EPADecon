using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using System;
using System.Collections.Generic;
using System.Text;

namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// 
    /// Contains information on how to take dictionary and obtain correct parameters
    /// </summary>
    class ParameterArrayCharacterizationSamplingCalculatorFactory : ICharacterizationSamplingCalculatorFactory
    {
        private readonly Dictionary<string, IParameter> _parameters;
        public ParameterArrayCharacterizationSamplingCalculatorFactory(Dictionary<string, IParameter> parameters)
        {
            _parameters = parameters;
        }
        public CharacterizationSamplingCostCalculator GetCalculator()
        {
            return new CharacterizationSamplingCostCalculator();
        }
    }
}
