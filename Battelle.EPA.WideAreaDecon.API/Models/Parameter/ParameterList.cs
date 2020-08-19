using System;

namespace Battelle.EPA.WideAreaDecon.API.Models.Parameter
{
    public class ParameterList
    {
        public int Version { get; set; }
        public object[] Filters { get; set; }
    }
}