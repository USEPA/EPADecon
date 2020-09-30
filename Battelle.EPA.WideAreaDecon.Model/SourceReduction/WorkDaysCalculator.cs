using System;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class WorkDaysCalculator
	{
		private double TeamsRequired { get; set; }
		private double TonsRemovedPerHrPerTeam { get; set; }
		private double TonsPerSqFt { get; set; }
		public readonly double WorkDays;

		public WorkDaysCalculator()
        {

        }

		public WorkDaysCalculator(double teamsRequired, double tonsRemovedPerHrPerTeam, double tonsPerSqFt, double SqFtToBeSourceReduced)
		{
			TeamsRequired = teamsRequired;
			TonsRemovedPerHrPerTeam = tonsRemovedPerHrPerTeam;
			TonsPerSqFt = tonsPerSqFt;

			WorkDays = ((SqFtToBeSourceReduced * TonsPerSqFt) / (8 * TonsRemovedPerHrPerTeam * TeamsRequired));
		}
	}
}
