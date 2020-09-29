using System;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class WorkDaysCalculator
	{
		private double TeamsRequired { get; set; }
		private double TonsRemovedPerHrPerTeam { get; set; }
		private double TonsPerSqFt { get; set; }

		public WorkDaysCalculator()
        {

        }

		public WorkDaysCalculator(double teamsRequired, double tonsRemovedPerHrPerTeam, double tonsPerSqFt)
		{
			TeamsRequired = teamsRequired;
			TonsRemovedPerHrPerTeam = tonsRemovedPerHrPerTeam;
			TonsPerSqFt = tonsPerSqFt;
		}

		public double CalculateWorkDays(double SqFtToBeSourceReduced)

		{
			return ((SqFtToBeSourceReduced * TonsPerSqFt) / (8 * TonsRemovedPerHrPerTeam * TeamsRequired));
		}
	}
}
