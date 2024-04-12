using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.Model.Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.Model.IncidentCommand.Time
{
    public class OnsiteDaysCalculator : IOnsiteDaysCalculator
    {
        private readonly double _overheadDays;

        public OnsiteDaysCalculator(double overheadDays)
        {
            _overheadDays = overheadDays;
        }

        public double CalculateOnSiteDays(List<Assignment> assignments)
        {
            assignments ??= new List<Assignment>();
            var allElementCategories = ((ElementCategory[])Enum.GetValues(typeof(ElementCategory))).ToList();
            var teams = allElementCategories.Select(elementCategory => new Team { WorkType = elementCategory }).ToList();

            var onsiteDays = 0.0;
            while (teams.Any(t => t.CurrentAssignment != null) || assignments.Count > 0)
            {
                foreach (var team in teams)
                {
                    var assignmentForTeamIndex = assignments.FindIndex(assingment => assingment.ElementCategory == team.WorkType);
                    if (team.CurrentAssignment == null && assignmentForTeamIndex != -1)
                    {
                        // assign team to task
                        team.CurrentAssignment = assignments.ElementAt(assignmentForTeamIndex);
                        assignments.RemoveAt(assignmentForTeamIndex);
                    }
                }

                var shortestTaskCompletionTime = teams.Where(t => t.CurrentAssignment != null)
                    .Min(t => t.CurrentAssignment.DaysToCompletion.Equals(0)
                        ? t.CurrentAssignment.LagPrecedingSubsequentAssignments
                        : t.CurrentAssignment.DaysToCompletion);

                onsiteDays += shortestTaskCompletionTime;

                foreach (var team in teams)
                {
                    if (team.CurrentAssignment is null)
                    {
                        continue;
                    }

                    if (team.CurrentAssignment.DaysToCompletion.Equals(0))
                    {
                        team.CurrentAssignment.LagPrecedingSubsequentAssignments -= shortestTaskCompletionTime;
                    }
                    else
                    {
                        team.CurrentAssignment.DaysToCompletion -= shortestTaskCompletionTime;
                    }

                    if (team.CurrentAssignment.DaysToCompletion <= 0 && team.CurrentAssignment.LagPrecedingSubsequentAssignments <= 0)
                    {
                        if (team.CurrentAssignment.SubsequentAssignments != null && team.CurrentAssignment.SubsequentAssignments.Any())
                        {
                            assignments.AddRange(team.CurrentAssignment.SubsequentAssignments);
                        }

                        team.CurrentAssignment = null;
                    }
                }
            }

            return onsiteDays + _overheadDays;
        }
    }
}
