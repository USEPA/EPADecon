using System;
using System.Linq;
using namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction;

namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class WorkDaysCalculator : IWorkDaysCalculator
	{
		private double TeamsRequired { get; set; }
		private double MassRemovedPerHrPerTeam { get; set; }
		private double MassPerSA { get; set; }

		public WorkDaysCalculator(double teamsRequired, double massRemovedPerHrPerTeam, double massPerSA)
		{
			TeamsRequired = teamsRequired;
			MassRemovedPerHrPerTeam = MassRemovedPerHrPerTeam;
			MassPerSA = massPerSA;
		}

		public double CalculateWorkDays(double SAToBeSourceReduced)
        {
			return ((SAToBeSourceReduced * MassPerSA) / (8 * MassRemovedPerHrPerTeam * TeamsRequired));
		}
	}
}
