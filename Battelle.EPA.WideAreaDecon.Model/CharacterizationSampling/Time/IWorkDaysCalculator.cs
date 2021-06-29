using System;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(double laborDays, double numberTeams);
    }
}
