using System.Collections.Generic;
using System.Linq;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class SourceReductionParameters
    {
        public double surfaceAreaToBeSourceReduced;
        public double massPerSurfaceArea;
        public double massRemovedPerHourPerTeam;
        public double numEntriesPerDay;
        public double respiratorsPerPerson;
        public double hoursEntering;
        public double hoursExiting;
        public double numTeams;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public Dictionary<PpeLevel, double> ppeRequired;

        public SourceReductionParameters(
            double _surfaceAreaToBeSourceReduced,
            double _massPerSurfaceArea,
            double _massRemovedPerHourPerTeam,
            double _numEntriesPerDay,
            double _respiratorsPerPerson,
            double _hoursEntering,
            double _hoursExiting,
            double _numTeams,
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _personnelOverheadDays,
            Dictionary<PpeLevel, double> _ppeRequired)
        {
            surfaceAreaToBeSourceReduced = _surfaceAreaToBeSourceReduced;
            massPerSurfaceArea = _massPerSurfaceArea;
            massRemovedPerHourPerTeam = _massRemovedPerHourPerTeam;
            numEntriesPerDay = _numEntriesPerDay;
            respiratorsPerPerson = _respiratorsPerPerson;
            hoursEntering = _hoursEntering;
            hoursExiting = _hoursExiting;
            numTeams = _numTeams;
            personnelReqPerTeam = _personnelReqPerTeam;
            personnelOverheadDays = _personnelOverheadDays;
            ppeRequired = _ppeRequired;
        }

        public SourceReductionParameters(ParameterFilter[] parameters, Dictionary<SurfaceType, ContaminationInformation> areaContaminated)
        {
            var contaminationArea = new Dictionary<SurfaceType, double>();
            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                contaminationArea.Add(surface, areaContaminated[surface].AreaContaminated);
            }
            // TODO: SEPARATE THESE PARAMETERS
            surfaceAreaToBeSourceReduced = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Fraction Surface Area to be Source Reduced").CreateDistribution().Draw() * contaminationArea.Values.Sum();
            massPerSurfaceArea = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Mass of Waste per Surface Area").CreateDistribution().Draw();
            massRemovedPerHourPerTeam = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Mass of Waste Removed Per Hour Per Team").CreateDistribution().Draw();
            numEntriesPerDay = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Entries per Team per Day").CreateDistribution().Draw();
            respiratorsPerPerson = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Respirators per Person").CreateDistribution().Draw();
            hoursEntering = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            hoursExiting = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            numTeams = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Number of teams required").CreateDistribution().Draw();

            personnelReqPerTeam = new Dictionary<PersonnelLevel, double> {
                [PersonnelLevel.OSC] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };

            personnelOverheadDays = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();

            ppeRequired = new Dictionary<PpeLevel, double> {
                [PpeLevel.A] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (D)").CreateDistribution().Draw()
            };
        }
    }
}
