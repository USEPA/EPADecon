namespace Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants
{
    public static class ParameterNames
    {

        public const string CharacterizationSampling = "Characterization Sampling";
        public const string SourceReduction = "Source Reduction";
        public const string Decontamination = "Decontamination";
        public const string ClearanceSampling = "Clearance Sampling";
        public const string VerificationSampling = "Verification Sampling";
        public const string WasteSampling = "Waste Sampling";
        public const string IncidentCommand = "Incident Command";
        public const string Other = "Other";
        public const string Cost = "Cost per Parameter";
        public const string DeconMethodBySurface = "Decontamination Treatment Methods by Surface";
        public const string Efficacy = "Efficacy";
        public const string ContaminationDefinition = "Contamination Definition";

        public static class Logistic
        {
            public const string Name = "Logistic";

            public const string OverheadDays = "Personnel Overhead Days";
            public const string RoundtripDays = "Roundtrip Days";
            public const string SamplingFrequency = "Sampling Frequency";
            public const string PersonnelPerRentalCar = "Number of Personnel per Rental Car";

            public const string FractionSurfaceSampled = "Fraction of Surface Sampled";
            public const string SamplePackagingTime = "Packaging Time per Sample";
            public const string NumLabs = "Number of Labs";
            public const string LabUptimeHours = "Lab Uptime Hours per Day";
            public const string SampleShippingTime = "Sample Shipping Time";
            public const string LabThroughput = "Lab Throughput Samples per Day";
            public const string IcResultTransmissionTime = "Time of Result Transmission to IC";
            public const string EntryPrepTime = "Prep Time per Team per Entry";
            public const string DeconLineTime = "Decon Line Time per Team per Exit";
            public const string PostEntryRest = "Post-Entry Rest Period";

            public const string FractionMassSourceReduced = "Fraction of Total Waste Mass to be Source Reduced";
            public const string MassPerSurfaceArea = "Mass of Waste per Surface Area";
            public const string MassWasteRemoved = "Mass of Waste Removed per Hour per Team";

            public const string DeconDryingVentingDays = "Decon, Drying, and Venting Days";

            public const string FractionWasteSampled = "Fraction of Waste Sampled";
            public const string SolidWasteProducedPerSurfaceArea = "Solid Waste Produced per Surface Area";
            public const string LiquidWasteProducedPerSurfaceArea = "Liquid Waste Produced per Surface Area";

            public const string RentalCarCostPerDay = "Rental Car Cost per Day";
            public const string RountripTicketCostPerPerson = "Roundtrip Ticket Cost per Person";
            public const string PerDiemCost = "Per Diem";

            public const string EntryPrepCost = "Cost for Prep per Entry";
            public const string DeconLineCost = "Cost for Decon Line per Exit";

            public static class PPE
            {
                public const string AEntry = "Entry Duration Based on PPE Level (A)";
                public const string BEntry = "Entry Duration Based on PPE Level (B)";
                public const string CEntry = "Entry Duration Based on PPE Level (C)";
                public const string DEntry = "Entry Duration Based on PPE Level (D)";
            }
        }

        public static class Personnel
        {
            public const string Name = "Personnel";

            public const string TeamsRequired = "Teams Required";
            public const string Osc = "OSC";
            public const string Pl4 = "PL-4";
            public const string Pl3 = "PL-3";
            public const string Pl2 = "PL-2";
            public const string Pl1 = "PL-1";

            public const string OscHourlyWage = "OSC Hourly Wage";
            public const string Pl4HourlyWage = "PL-4 Hourly Wage";
            public const string Pl3HourlyWage = "PL-3 Hourly Wage";
            public const string Pl2HourlyWage = "PL-2 Hourly Wage";
            public const string Pl1HourlyWage = "PL-1 Hourly Wage";
        }

        public static class Safety
        {
            public const string Name = "Safety";

            public const string NumRespirators = "Number of Respirators per Person";

            public const string RespiratorCost = "Respirator";

            public static class PPE
            {
                public const string Name = "PPE Level Distribution";

                public const string A = "Fraction PPE Required (A)";
                public const string B = "Fraction PPE Required (B)";
                public const string C = "Fraction PPE Required (C)";
                public const string D = "Fraction PPE Required (D)";

                public const string ACost = "PPE Level A Cost";
                public const string BCost = "PPE Level B Cost";
                public const string CCost = "PPE Level C Cost";
                public const string DCost = "PPE Level D Cost";

            }
        }

        public static class Supplies
        {
            public const string Name = "Supplies";

            public const string SurfaceAreaPerWipe = "Surface Area per Wipe";
            public const string SurfaceAreaPerVacuumSample = "Surface Area per Vacuum Sample";
            public const string WipesPerHourPerTeam = "Wipes per Hour per Team";
            public const string VacuumSamplesPerHourPerTeam = "Vacuum Samples per Hour per Team";

            public const string AgentVolume = "Volume of Agent Applied";
            public const string FumigationAgentVolume = "Volume of Agent Applied for Fogging/Fumigation";

            public const string MassPerWasteSample = "Mass per Waste Sample";
            public const string VolumePerWasterSample = "Volume per Waste Sample";
            public const string WasteSamplesPerHourPerTeam = "Waste Samples per Hour per Team";

            public const string WipeCost = "Cost per One Wipe";
            public const string VacuumSampleCost = "Cost per One Vacuum Sample";
            public const string WasteSampleCost = "Cost per One Waste Sample";
            public const string WipeSampleAnalysisCost = "Cost per Wipe Sample Analyzed";
            public const string VacuumSampleAnalysisCost = "Cost per Vacuum Sample Analyzed";
            public const string SolidWasteSampleAnalysisCost = "Cost per Solid Waste Sample Analyzed";
            public const string LiquidWasteSampleAnalysisCost = "Cost per Liquid Waste Sample Analyzed";
            public const string VacuumRentalCost = "Vacuum Rental per Day";
            public const string RemovedMaterialCost = "Material Removal per Mass";
            public const string DeconAgentCost = "Cost of Decon Agent";
            public const string DeconMaterialsCost = "Decon Material Cost per Surface Area";

            public const string IcRentalCostPerDay = "Rentals per Day (IC)";
            public const string IcSupplieCostPerDay = "Supplies Cost per Day (IC)";
        }
    }
}
