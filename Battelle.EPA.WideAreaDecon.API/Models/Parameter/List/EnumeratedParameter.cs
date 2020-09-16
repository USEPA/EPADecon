using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.API.Interfaces.Parameter;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter.List
{
    public class EnumeratedParameter<T> : IParameter where T: Enum
    {
        public ParameterType Type => ParameterType.EnumeratedFraction;
        public ParameterMetaData MetaData { get; set; }

        public Dictionary<T, IParameter> Values;
    }
}