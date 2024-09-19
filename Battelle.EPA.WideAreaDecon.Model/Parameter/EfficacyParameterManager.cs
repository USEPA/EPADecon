using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Parameter
{
    public class EfficacyParameterManager
    {
        private readonly Dictionary<SurfaceType, ApplicationMethod> treatmentMethods;
        private readonly IParameter[] efficacyParameters;

        public EfficacyParameterManager(
            Dictionary<SurfaceType, ApplicationMethod> _treatmentMethods,
            IParameter[] _efficacyParameters)
        {
            treatmentMethods = _treatmentMethods;
            efficacyParameters = _efficacyParameters;
        }

        public Dictionary<SurfaceType, double> DrawEfficacyValues()
        {
            var efficacyValues = new Dictionary<SurfaceType, double>();

            foreach (SurfaceType surface in treatmentMethods.Keys.ToList())
            {
                var method = treatmentMethods[surface];
                if (method == ApplicationMethod.None)
                {
                    continue;
                }

                var methodName = method.GetStringValue();
                var metaDataName = methodName + " Efficacy by Surface";

                try
                {
                    var efficacyData = efficacyParameters.First(p => p.MetaData.Name == metaDataName) as EnumeratedParameter<SurfaceType>
                        ?? throw new NullReferenceException($"{metaDataName} parameter is null");

                    if (efficacyData.Values.TryGetValue(surface, out var surfaceEfficacy))
                    {
                        var drawnValue = surfaceEfficacy.CreateDistribution().Draw();
                        if (drawnValue < 0)
                        {
                            efficacyValues.Add(surface, 0.0);
                        }
                        else
                        {
                            efficacyValues.Add(surface, drawnValue);
                        }
                    }
                    else
                    {
                        throw new InvalidOperationException();
                    }

                }
                catch (InvalidOperationException)
                {
                    metaDataName = methodName + " Efficacy";
                    var efficacyData = efficacyParameters.First(p => p.MetaData.Name == metaDataName) as EnumeratedParameter<ApplicationMethod>
                      ?? throw new NullReferenceException($"{metaDataName} parameter is null");
                    var drawnValue = efficacyData.Values[treatmentMethods[surface]].CreateDistribution().Draw();
                    if (drawnValue < 0)
                    {
                        efficacyValues.Add(surface, 0.0);
                    }
                    else
                    {
                        efficacyValues.Add(surface, drawnValue);
                    }
                }
            }

            return efficacyValues;
        }
    }
}
