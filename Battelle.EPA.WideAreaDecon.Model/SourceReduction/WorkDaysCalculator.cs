using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class WorkDaysCalculator
	{
		private double TeamsRequired { get; set; }
		private double MassRemovedPerHrPerTeam { get; set; }
		private double MassPerSA { get; set; }
		public double WorkDays { get; set; }

		public WorkDaysCalculator()
        {

        }

		public WorkDaysCalculator(double teamsRequired, double massRemovedPerHrPerTeam, double massPerSA, double workdays)
		{
			TeamsRequired = teamsRequired;
			MassRemovedPerHrPerTeam = MassRemovedPerHrPerTeam;
			MassPerSA = massPerSA;
			WorkDays = workdays;
		}

		public double CalculateWorkDays(double SAToBeSourceReduced)
        {
			return ((SAToBeSourceReduced * MassPerSA) / (8 * MassRemovedPerHrPerTeam * TeamsRequired));
		}
	}
}
