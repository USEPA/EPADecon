using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Constants;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter.List;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Utility.Extensions
{
    public static class ParameterArrayExtensions
    {
        #region Logistic
        public static double GetDeconDryingVentingDays(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.DeconDryingVentingDays);

        public static double GetDeconLineCost(this IParameter[] logisticParams) =>
           logisticParams.GetDrawnValue(ParameterNames.Logistic.DeconLineCost);

        public static double GetDeconLineTime(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.DeconLineTime);

        public static double GetEntryPrepCost(this IParameter[] logisticParams) =>
           logisticParams.GetDrawnValue(ParameterNames.Logistic.EntryPrepCost);

        public static double GetEntryPrepTime(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.EntryPrepTime);

        public static double GetFractionMassToBeSourceReduced(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.FractionMassSourceReduced);

        public static double GetFractionSurfaceSampled(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.FractionSurfaceSampled);

        public static double GetFractionWasteSampled(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.FractionWasteSampled);

        public static double GetIcResultTransmissionTime(this IParameter[] logisticParams) =>
           logisticParams.GetDrawnValue(ParameterNames.Logistic.IcResultTransmissionTime);

        public static double GetLabThroughput(this IParameter[] logisticParams) =>
           logisticParams.GetDrawnValue(ParameterNames.Logistic.LabThroughput);

        public static double GetLabUptimeHours(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.LabUptimeHours);

        public static double GetLiquidWasteProducedPerSurfaceArea(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.LiquidWasteProducedPerSurfaceArea);

        public static double GetMassPerSurfaceArea(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.MassPerSurfaceArea);

        public static double GetMassWasteRemoved(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.MassWasteRemoved);

        public static double GetNumLabs(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.NumLabs);

        public static double GetOverheadDays(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.OverheadDays);

        public static double GetPerDiemCost(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.PerDiemCost);

        public static double GetPersonnelPerRentalCar(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.PersonnelPerRentalCar);

        public static double GetPostEntryRest(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.PostEntryRest);

        public static Dictionary<PpeLevel, double> GetPpeEntryDurations(this IParameter[] logisticParams) =>
            new()
            {
                [PpeLevel.A] = logisticParams.GetDrawnValue(ParameterNames.Logistic.PPE.AEntry),
                [PpeLevel.B] = logisticParams.GetDrawnValue(ParameterNames.Logistic.PPE.BEntry),
                [PpeLevel.C] = logisticParams.GetDrawnValue(ParameterNames.Logistic.PPE.CEntry),
                [PpeLevel.D] = logisticParams.GetDrawnValue(ParameterNames.Logistic.PPE.DEntry)
            };

        public static double GetRentalCarCostPerDay(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.RentalCarCostPerDay);

        public static double GetSamplePackagingTime(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.SamplePackagingTime);

        public static double GetSampleShippingTime(this IParameter[] logisticParams) =>
           logisticParams.GetDrawnValue(ParameterNames.Logistic.SampleShippingTime);

        public static FrequencyValueType GetSamplingFrequency(this IParameter[] logisticParams) =>
           logisticParams.First(p => p.MetaData.Name == ParameterNames.Logistic.SamplingFrequency).GetFrequencyValue();

        public static double GetRoundtripDays(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.RoundtripDays);

        public static double GetRoundtripTicketCostPerPerson(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.RountripTicketCostPerPerson);

        public static double GetSolidWastePerSurfaceArea(this IParameter[] logisticParams) =>
            logisticParams.GetDrawnValue(ParameterNames.Logistic.SolidWasteProducedPerSurfaceArea);
        #endregion

        #region Personnel
        public static Dictionary<PersonnelLevel, double> GetHourlyRates(this IParameter[] personnelParams) =>
            new()
            {
                [PersonnelLevel.OSC] = personnelParams.GetDrawnValue(ParameterNames.Personnel.OscHourlyWage),
                [PersonnelLevel.PL1] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl1HourlyWage),
                [PersonnelLevel.PL2] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl2HourlyWage),
                [PersonnelLevel.PL3] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl3HourlyWage),
                [PersonnelLevel.PL4] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl4HourlyWage)
            };

        public static double GetNumTeams(this IParameter[] personnelParams) =>
            personnelParams.GetDrawnValue(ParameterNames.Personnel.TeamsRequired);

        public static Dictionary<PersonnelLevel, double> GetPersonnel(this IParameter[] personnelParams) =>
            new()
            {
                [PersonnelLevel.OSC] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Osc),
                [PersonnelLevel.PL1] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl1),
                [PersonnelLevel.PL2] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl2),
                [PersonnelLevel.PL3] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl3),
                [PersonnelLevel.PL4] = personnelParams.GetDrawnValue(ParameterNames.Personnel.Pl4)
            };
        #endregion

        #region Safety
        public static double GetNumRespirators(this IParameter[] safetyParams) =>
            safetyParams.GetDrawnValue(ParameterNames.Safety.NumRespirators);

        public static Dictionary<PpeLevel, double> GetPpe(this IParameter[] safetyParams)
        {
            var ppeDistribution = safetyParams.First(p => p.MetaData.Name == ParameterNames.Safety.PPE.Name) as EnumeratedFraction<PpeLevel>
                ?? throw new NullReferenceException("PPE Distribution parameter is null");
            return new()
            {
                [PpeLevel.A] = ppeDistribution.Values[PpeLevel.A].CreateDistribution().Draw(),
                [PpeLevel.B] = ppeDistribution.Values[PpeLevel.B].CreateDistribution().Draw(),
                [PpeLevel.C] = ppeDistribution.Values[PpeLevel.C].CreateDistribution().Draw(),
                [PpeLevel.D] = ppeDistribution.Values[PpeLevel.D].CreateDistribution().Draw()
            };
        }

        public static Dictionary<PpeLevel, double> GetPpeCosts(this IParameter[] safetyParams) =>
            new()
            {
                [PpeLevel.A] = safetyParams.GetDrawnValue(ParameterNames.Safety.PPE.ACost),
                [PpeLevel.B] = safetyParams.GetDrawnValue(ParameterNames.Safety.PPE.BCost),
                [PpeLevel.C] = safetyParams.GetDrawnValue(ParameterNames.Safety.PPE.CCost),
                [PpeLevel.D] = safetyParams.GetDrawnValue(ParameterNames.Safety.PPE.DCost),
            };

        public static double GetRespiratorCost(this IParameter[] safetyParams) =>
            safetyParams.GetDrawnValue(ParameterNames.Safety.RespiratorCost);
        #endregion

        #region Supplies
        public static double GetAgentVolume(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.AgentVolume);

        public static double GetDeconAgentCost(this IParameter[] suppliesParams) =>
           suppliesParams.GetDrawnValue(ParameterNames.Supplies.DeconAgentCost);

        public static double GetDeconMaterialsCost(this IParameter[] suppliesParams) =>
           suppliesParams.GetDrawnValue(ParameterNames.Supplies.DeconMaterialsCost);

        public static double GetFumitgationAgentVolume(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.FumigationAgentVolume);

        public static double GetIcRentalCostPerDay(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.IcRentalCostPerDay);

        public static double GetIcSuppliesCostPerDay(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.IcSupplieCostPerDay);

        public static double GetLiquidWasteSampleAnalysisCost(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.LiquidWasteSampleAnalysisCost);

        public static double GetMassPerWasteSample(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.MassPerWasteSample);

        public static double GetRemovedMaterialCost(this IParameter[] suppliesParams) =>
           suppliesParams.GetDrawnValue(ParameterNames.Supplies.RemovedMaterialCost);

        public static double GetSolidWasteSampleAnalysisCost(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.SolidWasteSampleAnalysisCost);

        public static double GetSurfaceAreaPerWipe(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.SurfaceAreaPerWipe);

        public static double GetSurfaceAreaPerVacuumSample(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.SurfaceAreaPerVacuumSample);

        public static double GetVacuumRentalCost(this IParameter[] suppliesParams) =>
           suppliesParams.GetDrawnValue(ParameterNames.Supplies.VacuumRentalCost);

        public static double GetVacuumSampleAnalysisCost(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.VacuumSampleAnalysisCost);

        public static double GetVacuumSampleCost(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.VacuumSampleCost);

        public static double GetVacuumSamplesPerHourPerTeam(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.VacuumSamplesPerHourPerTeam);

        public static double GetVolumePerWasteSample(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.VolumePerWasterSample);

        public static double GetWasteSampleCost(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.WasteSampleCost);

        public static double GetWasteSamplesPerHourPerTeam(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.WasteSamplesPerHourPerTeam);

        public static double GetWipeCost(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.WipeCost);

        public static double GetWipeSampleAnalysisCost(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.WipeSampleAnalysisCost);

        public static double GetWipesPerHourPerTeam(this IParameter[] suppliesParams) =>
            suppliesParams.GetDrawnValue(ParameterNames.Supplies.WipesPerHourPerTeam);
        #endregion


        private static double GetDrawnValue(this IParameter[] parameters, string paramName) =>
            parameters.First(p => p.MetaData.Name == paramName).CreateDistribution().Draw();
    }
}
