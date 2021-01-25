using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Statistics;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.Statistics;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario
{
    public class ParameterData
    {
        object DrawnValue { get; set; }
        ParameterType DistType { get; set; }
        object DistributionInfo { get; set; }

        public ParameterData(ParameterType distributionType)
        {
            DistType = distributionType;
        }

        public void SetDrawnValue(object value)
        {
            DrawnValue = value;
        }

        // Set distribution info based on the type
        public void SetDistributionData(ParameterType distributionType, double parameter1)
        {
            DistType = distributionType;
            DistributionInfo = new ConstantValueGenerator(parameter1);       
        }

        // Set distribution info with two parameters
        public void SetDistributionData(ParameterType distributionType, double parameter1, double parameter2)
        {
            DistType = distributionType;

            if (DistType == ParameterType.LogNormal)
            {
                DistributionInfo = new LogNormalValueGenerator(parameter1, parameter2);
            }
            else if (DistType == ParameterType.LogUniform)
            {
                DistributionInfo = new LogUniformValueGenerator(parameter1, parameter2);
            }
            else if (DistType == ParameterType.Uniform)
            {
                DistributionInfo = new UniformValueGenerator(parameter1, parameter2);
            }
            else if (DistType == ParameterType.UniformXDependent)
            {
                DistributionInfo = new UniformXDependentValueGenerator(parameter1, parameter2);
            }
            else if (DistType == ParameterType.Weibull)
            {
                DistributionInfo = new WeibullValueGenerator(parameter1, parameter2);
            }
        }

        // set distribution info with three parameters
        public void SetDistributionData(ParameterType distributionType, double parameter1, double parameter2, double parameter3)
        {
            DistType = distributionType;

            if (DistType == ParameterType.Pert)
            {
                DistributionInfo = new BetaPertValueGenerator(parameter1, parameter2, parameter3);
            }
        }

        // set distribution info with four parameters
        public void SetDistributionData(ParameterType distributionType, double parameter1, double parameter2, double parameter3, double parameter4)
        {
            DistType = distributionType;

            if (DistType == ParameterType.TruncatedLogNormal)
            {
                DistributionInfo = new TruncatedLogNormalValueGenerator(parameter1, parameter2, parameter3, parameter4);
            }
            else if (DistType == ParameterType.TruncatedNormal)
            {
                DistributionInfo = new TruncatedNormalValueGenerator(parameter1, parameter2, parameter3, parameter4);
            }
        }

        // set distribution info with six parameters
        public void SetDistributionData(ParameterType distributionType, double parameter1, double parameter2, double parameter3, double parameter4, double parameter5, double parameter6)
        {
            DistType = distributionType;

            if (DistType == ParameterType.BimodalTruncatedNormal)
            {
                DistributionInfo = new BimodalTruncatedNormalValueGenerator(
                    parameter1, parameter2, parameter3, parameter4, parameter5, parameter6);
            }
        }
    }
}
