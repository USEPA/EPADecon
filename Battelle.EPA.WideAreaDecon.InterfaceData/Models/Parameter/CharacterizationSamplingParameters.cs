using System.Collections.Generic;
using System.Linq;
using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter
{
    public class CharacterizationSamplingParameters
    {
        private readonly double surfaceAreaWiped;
        private readonly double surfaceAreaHepad;
        private readonly double surfaceAreaPerWipe;
        private readonly double surfaceAreaPerHepa;
        private readonly double wipesPerHrPerTeam;
        private readonly double hepaSocksPerHrPerTeam;
        private readonly double numTeams;
        private readonly double samplePackageTime;
        private readonly double wipeAnalysisTime;
        private readonly double hepaAnalysisTime;
        private readonly double numLabs;
        private readonly double[] fractionOfWipeToEachLab;
        private readonly double[] fractionOfHepaToEachLab;
        private readonly double[] labUptimesHours;
        private readonly double[] labDistanceFromSite;
        private readonly double resultTransmissionToIC;
        private readonly Dictionary<PersonnelLevel, double> personnelReqPerTeam;
        private readonly double personnelOverheadDays;
        private readonly double personnelRoundtripDays;
        private readonly double entriesPerTeam;
        private readonly double hoursEntering;
        private readonly double hoursExiting;
        private readonly double respiratorsPerPerson;
        private readonly Dictionary<PpeLevel, double> ppeRequired;

        public CharacterizationSamplingParameters(ParameterFilter[] parameters)
        {
            surfaceAreaPerWipe = parameters.First(p => p.Name == "Logistic").Parameters.First(n => n.MetaData.Name == "Personnel Overhead Days").CreateDistribution().Draw();
        }
    }
}
