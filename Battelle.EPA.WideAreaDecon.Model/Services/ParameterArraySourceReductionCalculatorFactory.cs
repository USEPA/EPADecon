using Battelle.EPA.WideAreaDecon.Model.SourceReduction;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
using Battelle.EPA.WideAreaDecon.API.Models.Parameter;

namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// 
    /// Contains information on how to take dictionary and obtain correct parameters
    /// </summary>
    class ParameterArraySourceReductionCalculatorFactory : ISourceReductionCalculatorFactory
    {
        private readonly ParameterList _parameters;
        private LaborCostCalculator Calculator_labor { get; set; }
        private WorkDaysCalculator Calculator_workDays { get; set; }
        private EntranceExitCostCalculator Calculator_entEx { get; set; }
        private EntExitLaborCostCalculator Calculator_entExLabor { get; set; }

        public ParameterArraySourceReductionCalculatorFactory(ParameterList parameters)
        {
            _parameters = parameters;
        }
        public SourceReductionCostCalculator GetCalculator()
        {
            //values temp until index of _parameters dictionary is set
            var massRemovedPerHrPerTeam = 453.592;
            var massPerSa = 7.4;
            var personnelPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.333 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 1.0 },
                { PersonnelLevel.PL3, 3.0 },
                { PersonnelLevel.PL4, 0.67 }
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var personnelOverhead = 0.0;
            var numEntriesPerTeamPerDay = 3.0;
            var hoursPerEntryPerTeam = 2.0;
            var hoursPerExitPerTeam = 2.0;
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            var costPerPpe = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 3322.0 },
                { PpeLevel.B, 3023.8 },
                { PpeLevel.C, 1897.68 },
                { PpeLevel.D, 260.09 }
            };

            Calculator_workDays = new WorkDaysCalculator(
                massRemovedPerHrPerTeam,
                massPerSa
            );

            Calculator_labor = new LaborCostCalculator(
                personnelOverhead,
                personnelPerTeam,
                personnelHourlyRate,
                massPerSa,
                Calculator_workDays
            );

            Calculator_entExLabor = new EntExitLaborCostCalculator(
                personnelPerTeam,
                personnelHourlyRate,
                numEntriesPerTeamPerDay,
                hoursPerEntryPerTeam,
                hoursPerExitPerTeam,
                Calculator_workDays
            );

            Calculator_entEx = new EntranceExitCostCalculator(
                personnelPerTeam,
                numEntriesPerTeamPerDay,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                Calculator_entExLabor,
                Calculator_workDays
            );
            
            return new SourceReductionCostCalculator();
        }
    }
}
