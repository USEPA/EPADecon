using System;
using System.Linq;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class WorkDaysCalculator
	{
		private double TeamsRequired { get; set; }
		private double TonsRemovedPerHrPerTeam { get; set; }
		private double TonsPerSqMt { get; set; }

		public WorkDaysCalculator()
        {

        }

		public WorkDaysCalculator(double teamsRequired, double tonsRemovedPerHrPerTeam, double tonsPerSqMt)
		{
			TeamsRequired = teamsRequired;
			TonsRemovedPerHrPerTeam = tonsRemovedPerHrPerTeam;
			TonsPerSqMt = tonsPerSqMt;
		}

		public double CalculateWorkDays(double SqMtToBeSourceReduced)
        {
			return ((SqMtToBeSourceReduced * TonsPerSqMt) / (8 * TonsRemovedPerHrPerTeam * TeamsRequired));
		}
	}
}
