using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class WorkDaysCalculator : IWorkDaysCalculator
	{
		private readonly double TeamsRequired;
		private readonly double MassRemovedPerHrPerTeam;
		private readonly double MassPerSA;

		public WorkDaysCalculator(
			double teamsRequired, 
			double massRemovedPerHrPerTeam, 
			double massPerSA)
		{
			TeamsRequired = teamsRequired;
			MassRemovedPerHrPerTeam = massRemovedPerHrPerTeam;
			MassPerSA = massPerSA;
		}

		public double CalculateWorkDays(double SAToBeSourceReduced)
        {
			return ((SAToBeSourceReduced * MassPerSA) / (8 * MassRemovedPerHrPerTeam * TeamsRequired));
		}
	}
}
