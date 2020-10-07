using System;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.Decontamination
{
	public class EntExitLaborCostCalculator : IEntExitLaborCostCalculator
	{
		private readonly double _numTeams;
		private readonly double[] _personnelReqPerTeam;
		private readonly double _numEntriesPerTeamPerDay;
		private readonly double _hoursPerEntryPerTeam;
		private readonly double _hoursPerExitPerTeam;
		private readonly double[] _personnelHourlyRate;
		private readonly double[] _workDaysPerAppMethod;


		public EntExitLaborCostCalculator(
			double numTeams, 
			double[] personnelReqPerTeam, 
			double numEntriesPerTeamPerDay, 
			double hoursPerEntryPerTeam, 
			double hoursPerExitPerTeam, 
			double[] personnelHourlyRate, 
			double[] workDaysPerAppMethod)
		{
			_numTeams = numTeams;
			_personnelReqPerTeam = personnelReqPerTeam;
			_numEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
			_hoursPerEntryPerTeam = hoursPerEntryPerTeam;
			_hoursPerExitPerTeam = hoursPerExitPerTeam;
			_personnelHourlyRate = personnelHourlyRate;
			_workDaysPerAppMethod = workDaysPerAppMethod;
		}

		public double CalculateEntExitLaborCost()
		{
			var personnelHoursCost = _personnelReqPerTeam.Zip(_personnelHourlyRate, (x, y) => x * y).Sum();

			double totalWorkDays = _workDaysPerAppMethod.Sum();

			return ((totalWorkDays * _numEntriesPerTeamPerDay * _numTeams * _hoursPerEntryPerTeam) + (totalWorkDays * _numEntriesPerTeamPerDay * _numTeams * _hoursPerExitPerTeam)) * (personnelHoursCost);
		}
	}
}
