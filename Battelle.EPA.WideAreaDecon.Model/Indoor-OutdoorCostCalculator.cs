using System;
using System.Runtime.Remoting.Messaging;

namespace Battelle.EPA.WideAreaDecon.Model
{
    public class CharacterizationSamplingCalculator
    {
        private double NumTeams { get; set; }
        private double TeamsRequired { get; set; }
        private double PersonnelRequiredPerTeam { get; set; }
        private double EntriesPerTeam { get; set; }
        private double RespiratorsPerPerson { get; set; }
        private double SqFtPerWipe { get; set; }
        private double SqFtPerHEPASock { get; set; }
        private double WipesPerHr { get; set; }
        private double HEPASocksPerHr { get; set; }
        private double PersonnelOSC { get; set; }
        private double HoursPerEntry { get; set; }
        private double Labs { get; set; }
        private double LabUptime { get; set; }
        private double ThroughputSample { get; set; }
        private double SqFtSampled { get; set; }
        private double PersonnelOverhead { get; set; }
        private double HEPARentalCostPerDay { get; set; }
        private double CostPerRespirator { get; set; }
        private double CostPerWipeAnalysis { get; set; }
        private double CostPerHEPA_Analysis { get; set; }

        public CharacterizationSamplingCalculator(double numTeams, double teamsRequired, double personelRequiredPerTeam, double entriesPerTeam, 
            double respiratorsPerPerson, double sqFtPerWipe, double sqFtPerHEPASock, double wipesPerHr, double hepaSocksPerHr,
            double personnelOSC, double hoursPerEntry, double labs, double labUptime, double throughputSample, double sqFtSampled, 
            double personnelOverhead, double HepaRentalCostPerDay, double costPerRespirator, double costPerWipeAnalysis, double costPerHEPA_Analysis)
        {
            NumTeams = numTeams;
            TeamsRequired = teamsRequired;
            PersonnelRequiredPerTeam = personelRequiredPerTeam;
            EntriesPerTeam = entriesPerTeam;
            RespiratorsPerPerson = respiratorsPerPerson;
            SqFtPerWipe = sqFtPerWipe;
            SqFtPerHEPASock = sqFtPerHEPASock;
            WipesPerHr = wipesPerHr;
            HEPASocksPerHr = hepaSocksPerHr;
            PersonnelOSC = personnelOSC;
            HoursPerEntry = hoursPerEntry;
            Labs = labs;
            LabUptime = labUptime;
            ThroughputSample = throughputSample;
            SqFtSampled = sqFtSampled;
            PersonnelOverhead = personnelOverhead;
            HEPARentalCostPerDay = HepaRentalCostPerDay;
            CostPerRespirator = costPerRespirator;
            CostPerWipeAnalysis = costPerWipeAnalysis;
            CostPerHEPA_Analysis = costPerHEPA_Analysis;

        }

        public double CalculateCharactizationSamplingCost(double SqFtToBeWiped, double SqFtToBeHEPA, double CostPerwipe, double CostPerVacuum double RoundTripDays, double PPEperTeam, double PersonnelHourlyRate, double HoursEnteringPerTeam, double HoursExitingPerTeam, double CostsPerIndvPPE)
        {
            double CostSupplies = ((SqFtToBeWiped / SqFtPerWipe) * CostPerwipe) + ((SqFtToBeHEPA / SqFtPerHEPASock) * CostPerVacuum) + (((SqFtToBeHEPA / SqFtPerHEPASock) / (HEPASocksPerHr * NumTeams * 8)) * HEPARentalCostPerDay);
            double WorkDays = (Math.abs(((SqFtToBeWiped / SqFtPerWipe) / (WipesPerHr * NumTeams)) / 8) + Math.Abs(((SqFtToBeHEPA / SqFtPerHEPASock) / (HEPASocksPerHr * NumTeams)) / 8));
            double CostLabor = ((WorkDays + PersonnelOverhead + RoundTripDays) * 8) * NumTeams * PersonnelRequiredPerTeam * PersonnelHourlyRate;
            double CostLaborE = ((WorkDays * EntriesPerTeam * NumTeams * HoursEnteringPerTeam) + (WorkDays * EntriesPerTeam * NumTeams * HoursExitingPerTeam)) * PersonnelRequiredPerTeam * PersonnelHourlyRate;
            double CostEntranceExit = CostLaborE + (PersonnelOSC * NumTeams * RespiratorsPerPerson * CostPerRespirator) + (WorkDays * EntriesPerTeam * NumTeams * PersonnelRequiredPerTeam * CostsPerIndvPPE);
            double CostAnalysisQuant = ((SqFtToBeWiped / SqFtPerWipe) * CostPerWipeAnalysis) + ((SqFtToBeHEPA / SqFtPerHEPASock) * CostPerHEPA_Analysis);
            return CostSupplies + CostLabor + CostEntranceExit + CostAnalysisQuant;
        }
    }

    public class SourceReductionCalculator
    {
        private double TeamsRequired { get; set };
        private double TonsRemovedPerHrPerTeam { get; set }
        private double NumEntriesPerTeamPerDay { get; set }
        private double PersonnelPerTeam { get; set }
        private double HoursPerEntryPerTeam { get; set }
        private double RespiratorsPerPerson { get; set }
        private double PersonnelOverhead { get; set }
        private double TonsPerSqFt { get; set }
        private double PersonnelRoundTripDays { get; set; }
        private double SqFtToBeSourceReduced { get; set; }
        private double HoursPerExitPerTeam { get; set; }
        private double CostPerRespirator { get; set; }
        private double Cost_PPE { get; set; }

        public SourceReductionCalculator(double teamsRequired, double tonsRemovedPerHrPerTeam, double numEntriesPerTeamPerDay, double personnelPerTeam, 
            double hoursPerEntryPerTeam, double respiratorsPerPerson, double personnelOverhead, double tonsPerSqFt, double personnelRoundTripDays, 
            double sqFtToBeSourceReduced, double ppe_PerLevelPerTeam, double hoursPerExitPerTeam, double costPerRespirator, 
            double cost_PPE)
        {
            TeamsRequired = teamsRequired;
            TonsRemovedPerHrPerTeam = tonsRemovedPerHrPerTeam;
            NumEntriesPerTeamPerDay = numEntriesPerTeamPerDay;
            PersonnelPerTeam = personnelPerTeam;
            HoursPerEntryPerTeam = hoursPerEntryPerTeam;
            RespiratorsPerPerson = respiratorsPerPerson;
            PersonnelOverhead = personnelOverhead;
            TonsPerSqFt = tonsPerSqFt;
            PersonnelRoundTripDays = personnelRoundTripDays;
            SqFtToBeSourceReduced = sqFtToBeSourceReduced;
            HoursPerExitPerTeam = hoursPerExitPerTeam;
            CostPerRespirator = costPerRespirator;
            Cost_PPE = cost_PPE;

        }

        public double CalculateSourceReductionCost(double PersonnelHourlyRate, double NumTeams, double PPE_PerLevelPerTeam)
        {
            double TotalPersonnel;
            double Workdays = ((SqFtToBeSourceReduced * TonsPerSqFt) / (8 * TonsRemovedPerHrPerTeam * TeamsRequired))
            double CostLabor = (((Workdays + PersonnelOverhead + PersonnelRoundTripDays) * 8 * TeamsRequired * PersonnelPerTeam * PersonnelHourlyRate) + (SqFtToBeSourceReduced * TonsPerSqFt * CostPerTonRemoved));
            double CostLaborEntEx = ((Workdays * NumEntriesPerTeamPerDay * NumTeams * HoursPerEntryPerTeam) + (Workdays * NumEntriesPerTeamPerDay * NumTeams * HoursPerExitPerTeam)) * (PersonnelPerTeam * PersonnelHourlyRate);
            double CostEntEx = CostLaborEntEx + ((TotalPersonnel * RespiratorsPerPerson) * CostPerRespirator) + ();
            return CostLabor + CostEntEx;
        }


    }

    public class DecontaminationCalculator
    {
        private double DeconDryingDays { get; set; }
        private double PersonnelRequired { get; set; }
        private double RespiratorsPerPerson { get; set; }
        private double NumTeams { get; set; }
        private double EntriesPerTeamPerDay { get; set; }
        private double HoursPerEntryPerTeam { get; set; }
        private double SolidWaste { get; set; }
        private double LiquidWaste { get; set; }
        private double PostDeconSporeThreshold { get; set; }
        private double RoomVolume { get; set; }
        private double RoomSqFt { get; set; }
        private double FoggingAgentVolume { get; set; }
        private double AgentVolume { get; set; }
        private double PersonnelOverheadDays { get; set; }
        private double PreDeconSporeLoading { get; set; }

        public DecontaminationCalculator(double deconDryingDays, double personnelRequired, double respiratorsPerPerson, double numTeams, double entriesPerTeamPerDay, double hoursPerEntryPerTeam,
            double solidWaste, double liquidWaste, double postDeconSporeThreshold, double roomVolume, double roomSqFt, double foggingAgentVolume, double agentVolume, double personnelOverheadDays,
            double preDeconSporeLoading)
        {
            DeconDryingDays = deconDryingDays;
            PersonnelRequired = personnelRequired;
            RespiratorsPerPerson = respiratorsPerPerson;
            NumTeams = numTeams;
            EntriesPerTeamPerDay = entriesPerTeamPerDay;
            HoursPerEntryPerTeam = hoursPerEntryPerTeam;
            SolidWaste = solidWaste;
            LiquidWaste = liquidWaste;
            PostDeconSporeThreshold = postDeconSporeThreshold;
            RoomVolume = roomVolume;
            RoomSqFt = roomSqFt;
            FoggingAgentVolume = foggingAgentVolume;
            AgentVolume = agentVolume;
            PersonnelOverheadDays = personnelOverheadDays;
            PreDeconSporeLoading = preDeconSporeLoading;
        }

        public double CalculateDecontaminationCost(double PersonnelRoundtripDays, double RoomPercentBreakdown, double PPE_QuantPerPPE_LevelPerTeam)
        {

        }
    }   

    public class IncedentCommandCalculator
    {
        private double PersonnelRequired { get; set; }
        private double PersonnelOverheadDays { get; set; }

        public IncedentCommandCalculator(double personnelRequired, double personnelOverheadDays)
        {
            PersonnelRequired = personnelRequired;
            PersonnelOverheadDays = personnelOverheadDays;
        }

        public double CalculateIncedentCommand(double )
    }
}
