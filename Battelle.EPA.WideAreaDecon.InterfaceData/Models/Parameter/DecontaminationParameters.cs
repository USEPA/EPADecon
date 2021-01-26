using System.Collections.Generic;
using System.Linq;
using System;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

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
        public double roomVolume;
        public Dictionary<SurfaceType, double> roomBreakdown;
        public double fumigationAgentVolume;
        public double agentVolume;

        public DecontaminationParameters(ParameterFilter[] dcParameters, ParameterFilter[] effParameters)
        {
            //efficacyValues;
            //applicationMethods;
            //initialSporeLoading;
            desiredSporeThreshold = dcParameters.First(p => p.Name == "Eff").Parameters.First(n => n.MetaData.Name == "Post-decon Spore Threshold").CreateDistribution().Draw();
            foreach (ApplicationMethod method in Enum.GetValues(typeof(ApplicationMethod)))
            {
                treatmentDaysPerAm[method] = dcParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Decon + Drying Days").CreateDistribution().Draw();
            }
            personnelReqPerTeam[PersonnelLevel.OSC] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw();
            personnelReqPerTeam[PersonnelLevel.PL1] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw();
            personnelReqPerTeam[PersonnelLevel.PL2] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw();
            personnelReqPerTeam[PersonnelLevel.PL3] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw();
            personnelReqPerTeam[PersonnelLevel.PL4] = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw();
            personnelOverhead = dcParameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            numEntriesPerTeamPerDay = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Number of Entries per Team per Day").CreateDistribution().Draw();
            hoursPerEntryPerTeam = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            hoursPerExitPerTeam = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            respiratorsPerPerson = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Respirators per Person").CreateDistribution().Draw();
            numTeams = dcParameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();
            ppeRequired[PpeLevel.A] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (A)").CreateDistribution().Draw();
            ppeRequired[PpeLevel.B] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (B)").CreateDistribution().Draw();
            ppeRequired[PpeLevel.C] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (C)").CreateDistribution().Draw();
            ppeRequired[PpeLevel.D] = dcParameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (D)").CreateDistribution().Draw();
            //roomVolume;
            //roomBreakdown;
            fumigationAgentVolume = dcParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Volume of Agent Applied for Fogging/Fumigation").CreateDistribution().Draw();
            agentVolume = dcParameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Volume of Agent Applied").CreateDistribution().Draw();
        }
    }
}
