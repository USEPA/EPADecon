﻿using System;
namespace Battelle.EPA.WideAreaDecon.Model.SourceReduction
{
	public class EntExitLaborCostCalculator
	{
		private double TeamsRequired { get; set; }
		private double[] PersonnelPerTeam { get; set; }
		private double NumEntriesPerTeamPerDay { get; set; }
		private double TonsPerSqFt { get; set; }
		private double HoursPerEntryPerTeam { get; set; }
		private double HoursPerExitPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }

		public EntExitLaborCostCalculator()
        {

        }

		public EntExitLaborCostCalculator(double teamsRequired, double[] personnelPerTeam, double numEntriesPerTeamPerDay, double tonsPerSqFt, double hoursPerEntryPerTeam, double hoursPerExitPerTeam, double[] personnelHourlyRate)
		{
			TeamsRequired = teamsRequired;
			PersonnelPerTeam = personnelPerTeam;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			TonsPerSqFt = tonsPerSqFt;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;
		}

		public double CalculateEntExitLaborCost(double SqFtToBeSourceReduced)
		{
			WorkDaysCalculator workDaysCalculator = new WorkDaysCalculator();
			double WorkDays = workDaysCalculator.CalculateWorkDays(SqFtToBeSourceReduced);

			double PersonnelHoursCost = 0;
			for (int i = 0; i < PersonnelPerTeam.Length; i++)
			{
				PersonnelHoursCost += (PersonnelPerTeam[i] * PersonnelHourlyRate[i]);
			}

			return ((WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerEntryPerTeam) + (WorkDays * NumEntriesPerTeamPerDay * TeamsRequired * HoursPerExitPerTeam)) * (PersonnelHoursCost);
		}
	}
}
