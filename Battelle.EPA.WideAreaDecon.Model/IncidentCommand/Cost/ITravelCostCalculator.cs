using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Cost
{
    public interface ITravelCostCalculator
    {
        public double CalculateTravelCost(double roundtripDays, Dictionary<PersonnelLevel, double> personnelPerTeam, double onsiteDays);
    }
}
