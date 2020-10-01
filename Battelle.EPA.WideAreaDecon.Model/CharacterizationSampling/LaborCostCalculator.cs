﻿using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling;

namespace Battelle.EPA.WideAreaDecon.Model.CharacterizationSampling
{
	public class LaborCostCalculator
	{
		private double NumTeams { get; set; }
		private double[] PersonnelReqPerTeam { get; set; }
		private double PersonnelOverhead { get; set; }
		private double NumEntriesPerTeamPerDay { get; set; }
		private double HoursPerEntryPerTeam { get; set; }
		private double HoursPerExitPerTeam { get; set; }
		private double[] PersonnelHourlyRate { get; set; }
		public readonly double EntExitLaborCost;

		SuppliesCostCalculator suppliesCostCalculator = new SuppliesCostCalculator();

		public LaborCostCalculator()
        {

        }

		public LaborCostCalculator(double numTeams, double[] personnelReqPerTeam, double personnelOverhead, double numEntriesPerTeamPerDay, double hoursPerEntryPerTeam, double hoursPerExitPerTeam, double[] personnelHourlyRate)
		{
			NumTeams = numTeams;
			PersonnelReqPerTeam = personnelReqPerTeam;
			PersonnelOverhead = personnelOverhead;
			NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			HoursPerEntryPerTeam = hoursPerEntryPerTeam;
			HoursPerExitPerTeam = hoursPerExitPerTeam;
			PersonnelHourlyRate = personnelHourlyRate;

		}

		public double CalculateLaborCost(double PersonnelRoundTripDays)
		{
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			return ((suppliesCostCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays) * 8) * NumTeams * (PersonnelHoursCost);

		}

		//return double if Elabor cost is not longer readonly
		public void CalculateEntExitLaborCost()
        {
			var PersonnelHoursCost = PersonnelReqPerTeam.Zip(PersonnelHourlyRate, (x, y) => x * y).Sum();

			EntExitLaborCost = ((suppliesCostCalculator.WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (suppliesCostCalculator.WorkDays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (PersonnelHoursCost);
		}

		public double CalculateLaborDays(double PersonnelRoundTripDays)
        {
			return suppliesCostCalculator.WorkDays + PersonnelOverhead + PersonnelRoundTripDays;
        }
	}
}
