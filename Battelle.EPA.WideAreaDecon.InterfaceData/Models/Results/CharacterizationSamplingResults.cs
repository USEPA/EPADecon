using System.Linq;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class CharacterizationSamplingResults
    {
        public double WorkDays { get; set; }
        public double OnSiteDays { get; set; }
        public double ElementCost { get; set; }
        public Dictionary<PpeLevel, int> PpeUnits { get; set; }
        public int VacuumSamples { get; set; }
        public int WipeSamples { get; set; }

        public static CharacterizationSamplingResults SumResults(List<CharacterizationSamplingResults> segmentResults)
        {
            return new CharacterizationSamplingResults()
            {
                WorkDays = segmentResults.Sum(segment => segment.WorkDays),
                OnSiteDays = segmentResults.Sum(segment => segment.OnSiteDays),
                ElementCost = segmentResults.Sum(segment => segment.ElementCost),
                PpeUnits = SumPPEUnits(segmentResults),
                VacuumSamples = segmentResults.Sum(segment => segment.VacuumSamples),
                WipeSamples = segmentResults.Sum(segment => segment.WipeSamples)
            };
        }

        private static Dictionary<PpeLevel, int> SumPPEUnits(List<CharacterizationSamplingResults> segmentResults)
        {
            var summedPPEUnits = new Dictionary<PpeLevel, int>() 
            {
                { PpeLevel.A, 0 },
                { PpeLevel.B, 0 },
                { PpeLevel.C, 0 },
                { PpeLevel.D, 0 },
            };

            foreach (var result in segmentResults)
            {
                summedPPEUnits[PpeLevel.A] += result.PpeUnits[PpeLevel.A];
                summedPPEUnits[PpeLevel.B] += result.PpeUnits[PpeLevel.B];
                summedPPEUnits[PpeLevel.C] += result.PpeUnits[PpeLevel.C];
                summedPPEUnits[PpeLevel.D] += result.PpeUnits[PpeLevel.D];
            }

            return summedPPEUnits;
        }
    }
}
