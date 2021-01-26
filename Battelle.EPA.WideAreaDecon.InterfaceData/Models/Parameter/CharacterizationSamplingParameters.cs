using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class CharacterizationSamplingParameters
    {
        public double surfaceAreaWiped;
        public double surfaceAreaHepad;
        public double surfaceAreaPerWipe;
        public double surfaceAreaPerHepa;
        public double wipesPerHrPerTeam;
        public double hepaSocksPerHrPerTeam;
        public double numTeams;
        public double samplePackageTime;
        public double wipeAnalysisTime;
        public double hepaAnalysisTime;
        public double numLabs;
        public List<double> fractionOfWipeToEachLab;
        public List<double> fractionOfHepaToEachLab;
        public List<double> labUptimesHours;
        public List<double> labDistanceFromSite;
        public double resultTransmissionToIC;
        public Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        public double personnelOverheadDays;
        public double personnelRoundtripDays;
        public double entriesPerTeam;
        public double hoursEntering;
        public double hoursExiting;
        public double respiratorsPerPerson;
        public Dictionary<PpeLevel, double> ppeRequired;

        public CharacterizationSamplingParameters(ParameterFilter[] parameters)
        {
            surfaceAreaPerWipe = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
        }
    }
}
