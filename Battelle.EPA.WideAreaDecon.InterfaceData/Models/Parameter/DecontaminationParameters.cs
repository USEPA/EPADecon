using System.Collections.Generic;
using System.Linq;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class DecontaminationParameters
    {
        public Dictionary<SurfaceType, double> efficacyValues;
        public Dictionary<SurfaceType, ApplicationMethod> applicationMethods;
        public Dictionary<SurfaceType, double> initialSporeLoading;
        public double desiredSporeThreshold;
        public Dictionary<ApplicationMethod, double> treatmentDaysPerAm;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverhead;
        public double numEntriesPerTeamPerDay;
        public double hoursPerEntryPerTeam;
        public double hoursPerExitPerTeam;
        public double respiratorsPerPerson;
        public double numTeams;
        public Dictionary<PpeLevel, double> ppeRequired;
        public Dictionary<SurfaceType, ContaminationInformation> areaContaminated;
        public double fumigationAgentVolume;
        public Dictionary<SurfaceType, double> agentVolume;

        public DecontaminationParameters(
            Dictionary<SurfaceType, double> _efficacyValues,
            Dictionary<SurfaceType, ApplicationMethod> _applicationMethods,
            Dictionary<SurfaceType, double> _initialSporeLoading,
            double _desiredSporeThreshold,
            Dictionary<ApplicationMethod, double> _treatmentDaysPerAm,
            Dictionary<PersonnelLevel, double> _personnelReqPerTeam,
            double _personnelOverhead,
            double _numEntriesPerTeamPerDay,
            double _hoursPerEntryPerTeam,
            double _hoursPerExitPerTeam,
            double _respiratorsPerPerson,
            double _numTeams,
            Dictionary<PpeLevel, double> _ppeRequired,
            Dictionary<SurfaceType, ContaminationInformation> _areaContaminated,
            double _fumigationAgentVolume,
            Dictionary<SurfaceType, double> _agentVolume)
        {
            efficacyValues = _efficacyValues;
            applicationMethods = _applicationMethods;
            initialSporeLoading = _initialSporeLoading;
            treatmentDaysPerAm = _treatmentDaysPerAm;
            agentVolume = _agentVolume;
            desiredSporeThreshold = _desiredSporeThreshold;
            personnelReqPerTeam = _personnelReqPerTeam;
            personnelOverhead = _personnelOverhead;
            numEntriesPerTeamPerDay = _numEntriesPerTeamPerDay;
            hoursPerEntryPerTeam = _hoursPerEntryPerTeam;
            hoursPerExitPerTeam = _hoursPerExitPerTeam;
            respiratorsPerPerson = _respiratorsPerPerson;
            numTeams = _numTeams;
            ppeRequired = _ppeRequired;
            areaContaminated = _areaContaminated;
            fumigationAgentVolume = _fumigationAgentVolume;
        }

        public DecontaminationParameters(
            ParameterFilter[] dcParameters,
            IParameter[] effParameters,
            Dictionary<SurfaceType, ContaminationInformation> scenarioDefinitionDetails)
        {
            efficacyValues = new Dictionary<SurfaceType, double>();
            applicationMethods = new Dictionary<SurfaceType, ApplicationMethod>();
            initialSporeLoading = new Dictionary<SurfaceType, double>();
            treatmentDaysPerAm = new Dictionary<ApplicationMethod, double>();
            areaContaminated = new Dictionary<SurfaceType, ContaminationInformation>();
            agentVolume = new Dictionary<SurfaceType, double>();

            foreach (SurfaceType surface in Enum.GetValues(typeof(SurfaceType)))
            {
                // THESE WILL BOTH NEED TO BE FIXED
                efficacyValues.Add(surface, effParameters.First(p => p.MetaData.Name == "Aerosol Efficacy").CreateDistribution().Draw());
                applicationMethods.Add(surface, ApplicationMethod.Fogging);

                initialSporeLoading.Add(surface, scenarioDefinitionDetails[surface].Loading);
                agentVolume.Add(surface, dcParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Volume of Agent Applied").CreateDistribution().Draw());
            }
            desiredSporeThreshold = dcParameters.First(p => p.Name == "Eff").Parameters.First(n => n.MetaData.Name == "Post-decon Spore Threshold").CreateDistribution().Draw();
            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                treatmentDaysPerAm.Add(method, dcParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Decon + Drying Days").CreateDistribution().Draw());
            }

            personnelReqPerTeam = new Dictionary<PersonnelLevel, double> {
                [PersonnelLevel.OSC] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };

            personnelOverhead = dcParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            numEntriesPerTeamPerDay = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Number of Entries per Team per Day").CreateDistribution().Draw();
            hoursPerEntryPerTeam = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            hoursPerExitPerTeam = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            respiratorsPerPerson = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Respirators per Person").CreateDistribution().Draw();
            numTeams = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();

            ppeRequired = new Dictionary<PpeLevel, double> {
                [PpeLevel.A] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (D)").CreateDistribution().Draw()
            };
            
            areaContaminated = scenarioDefinitionDetails;
            fumigationAgentVolume = dcParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Volume of Agent Applied for Fogging/Fumigation").CreateDistribution().Draw();
        }
    }
}
