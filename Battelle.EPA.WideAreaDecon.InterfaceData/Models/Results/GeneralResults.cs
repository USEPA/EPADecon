using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results
{
    public class GeneralResults
    {
        public double TotalCost { get; set; }
        public double AreaContaminated { get; set; }
        public int DecontaminationTreatments { get; set; }
        public double SolidWasteProduced { get; set; }
        public double AqueousWasteProduced { get; set; }

        public static GeneralResults SumResults(List<GeneralResults> generalResults)
        {
            GeneralResults summedGeneralResults = new GeneralResults()
            {
                TotalCost = generalResults.Sum(segmentElement => segmentElement.TotalCost),
                AreaContaminated = generalResults.Sum(segmentElement => segmentElement.AreaContaminated),
                DecontaminationTreatments = generalResults.Sum(segmentElement => segmentElement.DecontaminationTreatments),
                SolidWasteProduced = generalResults.Sum(segmentElement => segmentElement.SolidWasteProduced),
                AqueousWasteProduced = generalResults.Sum(segmentElement => segmentElement.AqueousWasteProduced)
            };

            return summedGeneralResults;
        }
    }
}
