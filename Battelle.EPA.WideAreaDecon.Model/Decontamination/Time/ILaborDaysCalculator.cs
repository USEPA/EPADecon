using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Scenario;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination.Time
{
    public interface ILaborDaysCalculator
    {
        public DecontaminationTreatmentInformation CalculateLaborDays();
    }
}
