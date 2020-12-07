using Battelle.EPA.WideAreaDecon.Model.Decontamination;
using Battelle.EPA.WideAreaDecon.Model.Parameter;
using System;
using System.Collections.Generic;
using System.Text;
using Battelle.EPA.WideAreaDecon.Model.Enumeration;
namespace Battelle.EPA.WideAreaDecon.Model.Services
{
    /// <summary>
    /// Takes parameter information and generates constructed calculator
    /// 
    /// Contains information on how to take dictionary and obtain correct parameters
    /// </summary>
    class ParameterArrayDecontaminationCalculatorFactory : IDecontaminationCalculatorFactory
    {
        private readonly Dictionary<string, IParameter> _parameters;
        private SuppliesCostCalculator Calculator_supplies { get; set; }
        private LaborCostCalculator Calculator_labor { get; set; }
        private WorkDaysCalculator Calculator_workDays { get; set; }
        private EntranceExitCostCalculator Calculator_entEx { get; set; }
        private EntExitLaborCostCalculator Calculator_entExLabor { get; set; }
        private EfficacyCalculator Calculator_efficacy { get; set; }

        public ParameterArrayDecontaminationCalculatorFactory(Dictionary<string, IParameter> parameters)
        {
            _parameters = parameters;
        }
        public DecontaminationCostCalculator GetCalculator()
        {
            //values temp until index of _parameters dictionary is set
            var efficacyValues = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 0.2}
            };
            var surfaceTypes = new Dictionary<SurfaceType, string>()
            {
                { SurfaceType.IndoorInterior, "Indoor Interior"}
            };
            var applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>()
            {
                { SurfaceType.IndoorInterior, ApplicationMethod.FoamSpray}
            };
            var initialSporeLoading = new Dictionary<SurfaceType, double>()
            {
                { SurfaceType.IndoorInterior, 1.1}
            };
            var desiredSporeThreshold = 1.0;
            var treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>()
            {
                { ApplicationMethod.FoamSpray, 3.0}
            };
            var personnelReqPerTeam = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 0.3 },
                { PersonnelLevel.PL1, 0.0 },
                { PersonnelLevel.PL2, 0.0 },
                { PersonnelLevel.PL3, 5.0 },
                { PersonnelLevel.PL4, 2.0 }
            };
            var personnelHourlyRate = new Dictionary<PersonnelLevel, double>()
            {
                { PersonnelLevel.OSC, 150.0 },
                { PersonnelLevel.PL1, 90.0 },
                { PersonnelLevel.PL2, 110.0 },
                { PersonnelLevel.PL3, 130.0 },
                { PersonnelLevel.PL4, 190.0 }
            };
            var personnelOverhead = 2.0;
            var numEntriesPerTeamPerDay = 2.0;
            var hoursPerEntryPerTeam = 1.5;
            var hoursPerExitPerTeam = 1.5;
            var respiratorsPerPerson = 1.0;
            var costPerRespirator = 238.0;
            var costPerPpe = new Dictionary<PpeLevel, double>()
            {
                { PpeLevel.A, 3322.0 },
                { PpeLevel.B, 3023.8 },
                { PpeLevel.C, 1897.68 },
                { PpeLevel.D, 260.09 }
            };
            Calculator_efficacy = new EfficacyCalculator(
                efficacyValues
            );

            Calculator_workDays = new WorkDaysCalculator(
                surfaceTypes,
                applicationMethods,
                initialSporeLoading,
                desiredSporeThreshold,
                treatmentDaysPerAm,
                Calculator_efficacy
            );

            Calculator_labor = new LaborCostCalculator(
                personnelReqPerTeam,
                personnelHourlyRate,
                personnelOverhead,
                Calculator_workDays
            );

            Calculator_entExLabor = new EntExitLaborCostCalculator(
                personnelReqPerTeam,
                numEntriesPerTeamPerDay,
                hoursPerEntryPerTeam,
                hoursPerExitPerTeam,
                personnelHourlyRate,
                Calculator_workDays
            );

            Calculator_entEx = new EntranceExitCostCalculator(
                personnelReqPerTeam,
                numEntriesPerTeamPerDay,
                respiratorsPerPerson,
                costPerRespirator,
                costPerPpe,
                Calculator_entExLabor,
                Calculator_workDays
            );

            return new DecontaminationCostCalculator;
        }
    }
}
