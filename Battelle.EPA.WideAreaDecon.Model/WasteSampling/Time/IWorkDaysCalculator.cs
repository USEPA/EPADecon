using System;

namespace Battelle.EPA.WideAreaDecon.Model.WasteSampling
{
    public interface IWorkDaysCalculator
    {
        public double CalculateWorkDays(double laborDays, double numberTeams);
    }
}
