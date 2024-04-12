using System;
using System.Linq;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class DecontaminationResults
    {
        public double WorkDays { get; set; }
        public double OnSiteDays { get; set; }
        public double ElementCost { get; set; }
        public Dictionary<PpeLevel, int> PpeUnits { get; set; }
        public Dictionary<ApplicationMethod, double> DeconAgentVolume { get; set; }

        public static DecontaminationResults SumResults(List<DecontaminationResults> segmentResults)
        {
            // Summing all results across realizations
            return new DecontaminationResults()
            {
                WorkDays = segmentResults.Sum(segment => segment.WorkDays),
                OnSiteDays = segmentResults.Sum(segment => segment.OnSiteDays),
                ElementCost = segmentResults.Sum(segment => segment.ElementCost),
                PpeUnits = SumPPEUnits(segmentResults),
                DeconAgentVolume = SumDeconAgentVolumes(segmentResults)
            };
        }

        private static Dictionary<PpeLevel, int> SumPPEUnits(List<DecontaminationResults> segmentResults)
        {
            // Declaring and initializing the summed ppe level Dictionary
            var summedPPEUnits = new Dictionary<PpeLevel, int>();

            foreach (PpeLevel ppeLevel in Enum.GetValues(typeof(PpeLevel)))
            {
                summedPPEUnits.Add(ppeLevel, 0);
            };

            // Summing the ppe level units across realizations
            foreach (var result in segmentResults)
            {
                foreach (PpeLevel ppeLevel in Enum.GetValues(typeof(PpeLevel)))
                {
                    summedPPEUnits[ppeLevel] += result.PpeUnits[ppeLevel];
                }
            }

            return summedPPEUnits;
        }

        private static Dictionary<ApplicationMethod, double> SumDeconAgentVolumes(List<DecontaminationResults> segmentResults)
        {
            // Declaring and initializing the summed decon agent Dictionary
            var summedDeconAgentVolumes = new Dictionary<ApplicationMethod, double>();

            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                summedDeconAgentVolumes.Add(method, 0.0);
            };

            // Summing the decon agent volumes across realizations
            foreach (var result in segmentResults)
            {
                foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
                {
                    summedDeconAgentVolumes[method] += result.DeconAgentVolume[method];
                }
            }

            return summedDeconAgentVolumes;
        }
    }
}
