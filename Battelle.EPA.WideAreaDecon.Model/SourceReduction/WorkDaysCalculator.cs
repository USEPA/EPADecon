using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class WorkDaysCalculator
	{
		private double TeamsRequired { get; set; }
		private double TonsRemovedPerHrPerTeam { get; set; }
		private double TonsPerSqMt { get; set; }
		public readonly double WorkDays;

		public WorkDaysCalculator()
        {

        }

		public WorkDaysCalculator(double teamsRequired, double tonsRemovedPerHrPerTeam, double tonsPerSqMt, double SqMtToBeSourceReduced)
		{
			TeamsRequired = teamsRequired;
			TonsRemovedPerHrPerTeam = tonsRemovedPerHrPerTeam;
			TonsPerSqMt = tonsPerSqMt;

			WorkDays = ((SqMtToBeSourceReduced * TonsPerSqMt) / (8 * TonsRemovedPerHrPerTeam * TeamsRequired));
		}

		public void CalculateWorkDays()
        {
			WorkDays = ((SqMtToBeSourceReduced * TonsPerSqMt) / (8 * TonsRemovedPerHrPerTeam * TeamsRequired));
		}
	}
}
