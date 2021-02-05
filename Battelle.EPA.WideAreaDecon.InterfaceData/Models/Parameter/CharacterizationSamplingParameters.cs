using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class CharacterizationSamplingParameters
    {
        public double fractionSampledWipe;
        public double fractionSampledHepa;
        public double surfaceAreaPerWipe;
        public double surfaceAreaPerHepa;
        public double wipesPerHrPerTeam;
        public double hepaSocksPerHrPerTeam;
        public double numTeams;
        public double samplePackageTime;
        public double wipeAnalysisTime;
        public double hepaAnalysisTime;
        public int numLabs;
        public List<double> fractionOfWipeToEachLab;
        public List<double> fractionOfHepaToEachLab;
        public List<double> labUptimesHours;
        public List<double> labDistanceFromSite;
        public double resultTransmissionToIC;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public double entriesPerTeam;
        public double hoursEntering;
        public double hoursExiting;
        public double respiratorsPerPerson;
        public Dictionary<PpeLevel, double> ppeRequired;

        public CharacterizationSamplingParameters(
            ParameterFilter[] parameters,
            Dictionary<SurfaceType, ContaminationInformation> scenarioDefinitionDetails)
        {
            fractionOfWipeToEachLab = new List<double>();
            fractionOfHepaToEachLab = new List<double>();
            labUptimesHours = new List<double>();
            labDistanceFromSite = new List<double>();

            fractionSampledWipe = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Fraction of Surface Sampled").CreateDistribution().Draw();
            fractionSampledWipe = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Fraction of Surface Sampled").CreateDistribution().Draw();
            surfaceAreaPerWipe = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Surface Area per Wipe").CreateDistribution().Draw();
            surfaceAreaPerHepa = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Surface Area per HEPA Sock").CreateDistribution().Draw();
            wipesPerHrPerTeam = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Wipes per Hour per Team").CreateDistribution().Draw();
            hepaSocksPerHrPerTeam = parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "HEPA Socks per Hour per Team").CreateDistribution().Draw();
            numTeams = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Teams Required").CreateDistribution().Draw();
            samplePackageTime = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Packaging Time per Sample").CreateDistribution().Draw();
            wipeAnalysisTime = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Analysis Time per Wipe Sample").CreateDistribution().Draw();
            hepaAnalysisTime = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Analysis Time per HEPA Sample").CreateDistribution().Draw();
            numLabs = (int)parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Number of Labs").CreateDistribution().Draw();
            for (int i = 0; i < numLabs; i++)
            {
                fractionOfWipeToEachLab.Add(parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Fraction of Wipe Samples to Each Lab").CreateDistribution().Draw());
                fractionOfHepaToEachLab.Add(parameters.First(p => p.Name == "Supplies").Parameters.First(n => n.MetaData.Name == "Fraction of HEPA Samples to Each Lab").CreateDistribution().Draw());
                labUptimesHours.Add(parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Uptime Hours per Day").CreateDistribution().Draw());
                labDistanceFromSite.Add(parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Lab Distance from Site").CreateDistribution().Draw());
            }
            resultTransmissionToIC = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Time of Result Transmission to IC").CreateDistribution().Draw();

            personnelReqPerTeam = new Dictionary<PersonnelLevel, double> {
                [PersonnelLevel.OSC] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (OSC)").CreateDistribution().Draw(),
                [PersonnelLevel.PL1] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-1)").CreateDistribution().Draw(),
                [PersonnelLevel.PL2] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-2)").CreateDistribution().Draw(),
                [PersonnelLevel.PL3] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-3)").CreateDistribution().Draw(),
                [PersonnelLevel.PL4] = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Personnel Required (PL-4)").CreateDistribution().Draw()
            };
            personnelOverheadDays = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
            entriesPerTeam = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Number of Entries per Team per Day").CreateDistribution().Draw();
            hoursEntering = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            hoursExiting = parameters.First(p => p.Name == "Personnel").Parameters.First(n => n.MetaData.Name == "Hours per Entry, per Team").CreateDistribution().Draw();
            respiratorsPerPerson = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "Number of Respirators per Person").CreateDistribution().Draw();

            ppeRequired = new Dictionary<PpeLevel, double> {
                [PpeLevel.A] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (A)").CreateDistribution().Draw(),
                [PpeLevel.B] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (B)").CreateDistribution().Draw(),
                [PpeLevel.C] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (C)").CreateDistribution().Draw(),
                [PpeLevel.D] = parameters.First(p => p.Name == "Safety").Parameters.First(n => n.MetaData.Name == "PPE Required (D)").CreateDistribution().Draw()
            };
        }
    }
}
