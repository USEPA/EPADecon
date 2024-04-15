using Battelle.EPA.WideAreaDecon.InterfaceData.Enumeration.Parameter;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;
using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.Model.Tests.Helpers
{
    public static class ResultsCalculatorTestAssets
    {
        public static readonly BuildingCategory BuildingCategory = BuildingCategory.Agricultural;

        public static Dictionary<BuildingCategory, ScenarioRealizationResults> IndoorResults = new Dictionary<BuildingCategory, ScenarioRealizationResults>
        {
            {
                BuildingCategory,
                new ScenarioRealizationResults
                {
                    CharacterizationSamplingResults = new CharacterizationSamplingResults
                    {
                        WorkDays = 3.57776665823,
                        OnSiteDays = 10.41000913914,
                        ElementCost = 405771,
                        PpeUnits = new Dictionary<PpeLevel, int>
                        {
                            { PpeLevel.A, 0 },
                            { PpeLevel.B, 32 },
                            { PpeLevel.C, 32 },
                            { PpeLevel.D, 0 }
                        },
                        VacuumSamples = 162,
                        WipeSamples = 327
                    },

                    SourceReductionResults = new SourceReductionResults
                    {
                        WorkDays = 2.15569585602,
                        OnSiteDays = 2.15569585602,
                        ElementCost = 87567,
                        PpeUnits = new Dictionary<PpeLevel, int>
                        {
                            { PpeLevel.A, 0 },
                            { PpeLevel.B, 18 },
                            { PpeLevel.C, 18 },
                            { PpeLevel.D, 0 }
                        }
                    },

                    DecontaminationResults = new DecontaminationResults
                    {
                        WorkDays = 12.0,
                        OnSiteDays = 14.0,
                        ElementCost = 371197,
                        PpeUnits = new Dictionary<PpeLevel, int>
                        {
                            { PpeLevel.A, 0 },
                            { PpeLevel.B, 0 },
                            { PpeLevel.C, 0 },
                            { PpeLevel.D, 0 }
                        },
                        DeconAgentVolume = new Dictionary<ApplicationMethod, double>
                        {
                            { ApplicationMethod.Fogging, 10994.745600 }
                        }
                    },

                    VerificationSamplingResults = new VerificationSamplingResults
                    {
                        WorkDays = 3.57776665823,
                        OnSiteDays = 10.41000913914,
                        ElementCost = 405771,
                        PpeUnits = new Dictionary<PpeLevel, int>
                        {
                            { PpeLevel.A, 0 },
                            { PpeLevel.B, 32 },
                            { PpeLevel.C, 32 },
                            { PpeLevel.D, 0 }
                        },
                        VacuumSamples = 162,
                        WipeSamples = 327,
                        Lag = 1,
                    },

                    ClearanceSamplingResults = new ClearanceSamplingResults
                    {
                        WorkDays = 3.57776665823,
                        OnSiteDays = 10.41000913914,
                        ElementCost = 405771,
                        PpeUnits = new Dictionary<PpeLevel, int>
                        {
                            { PpeLevel.A, 0 },
                            { PpeLevel.B, 32 },
                            { PpeLevel.C, 32 },
                            { PpeLevel.D, 0 }
                        },
                        VacuumSamples = 162,
                        WipeSamples = 327,
                        Lag = 1
                    },

                    WasteSamplingResults = new WasteSamplingResults
                    {
                        WorkDays = 36.12545289855,
                        OnSiteDays = 83.4950181159,
                        ElementCost = 2958273,
                        PpeUnits = new Dictionary<PpeLevel, int>
                        {
                            { PpeLevel.A, 0 },
                            { PpeLevel.B, 310 },
                            { PpeLevel.C, 310 },
                            { PpeLevel.D, 0 }
                        },
                        AqueousWasteSamples = 2700,
                        SolidWasteSamples = 2348
                    },

                    GeneralResults = new GeneralResults
                    {
                        TotalCost = 4634350,
                        DecontaminationTreatments = 4,
                        AqueousWasteProduced = 54000,
                        SolidWasteProduced = 21600,
                        AreaContaminated = 3000 // 500 * number of indoor surfaces
                    },
                }
            }
        };

        public static ScenarioRealizationResults OutdoorResults = new ScenarioRealizationResults
        {
            CharacterizationSamplingResults = new CharacterizationSamplingResults
            {
                WorkDays = 3.57776665823,
                OnSiteDays = 10.41000913914,
                ElementCost = 405771,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 32 },
                    { PpeLevel.C, 32 },
                    { PpeLevel.D, 0 }
                },
                VacuumSamples = 162,
                WipeSamples = 327
            },

            SourceReductionResults = new SourceReductionResults
            {
                WorkDays = 2.15569585602,
                OnSiteDays = 2.15569585602,
                ElementCost = 87567,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 18 },
                    { PpeLevel.C, 18 },
                    { PpeLevel.D, 0 }
                }
            },

            DecontaminationResults = new DecontaminationResults
            {
                WorkDays = 12.0,
                OnSiteDays = 14.0,
                ElementCost = 371197,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 0 },
                    { PpeLevel.C, 0 },
                    { PpeLevel.D, 0 }
                },
                DeconAgentVolume = new Dictionary<ApplicationMethod, double>
                {
                    { ApplicationMethod.Fogging, 10994.745600 }
                }
            },

            VerificationSamplingResults = new VerificationSamplingResults
            {
                WorkDays = 3.57776665823,
                OnSiteDays = 10.41000913914,
                ElementCost = 405771,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 32 },
                    { PpeLevel.C, 32 },
                    { PpeLevel.D, 0 }
                },
                VacuumSamples = 162,
                WipeSamples = 327
            },

            ClearanceSamplingResults = new ClearanceSamplingResults
            {
                WorkDays = 3.57776665823,
                OnSiteDays = 10.41000913914,
                ElementCost = 405771,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 32 },
                    { PpeLevel.C, 32 },
                    { PpeLevel.D, 0 }
                },
                VacuumSamples = 162,
                WipeSamples = 327
            },

            WasteSamplingResults = new WasteSamplingResults
            {
                WorkDays = 36.12545289855,
                OnSiteDays = 83.4950181159,
                ElementCost = 2958273,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 310 },
                    { PpeLevel.C, 310 },
                    { PpeLevel.D, 0 }
                },
                AqueousWasteSamples = 2700,
                SolidWasteSamples = 2348
            },

            GeneralResults = new GeneralResults
            {
                TotalCost = 4634350,
                DecontaminationTreatments = 4,
                AqueousWasteProduced = 54000,
                SolidWasteProduced = 21600,
                AreaContaminated = 3000 // 500 * number of outdoor surfaces
            },
        };

        public static ScenarioRealizationResults UndergroundResults = new ScenarioRealizationResults
        {
            CharacterizationSamplingResults = new CharacterizationSamplingResults
            {
                WorkDays = 3.57776665823,
                OnSiteDays = 10.41000913914,
                ElementCost = 405771,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 32 },
                    { PpeLevel.C, 32 },
                    { PpeLevel.D, 0 }
                },
                VacuumSamples = 162,
                WipeSamples = 327
            },

            SourceReductionResults = new SourceReductionResults
            {
                WorkDays = 2.15569585602,
                OnSiteDays = 2.15569585602,
                ElementCost = 87567,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 18 },
                    { PpeLevel.C, 18 },
                    { PpeLevel.D, 0 }
                }
            },

            DecontaminationResults = new DecontaminationResults
            {
                WorkDays = 12.0,
                OnSiteDays = 14.0,
                ElementCost = 371197,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 0 },
                    { PpeLevel.C, 0 },
                    { PpeLevel.D, 0 }
                },
                DeconAgentVolume = new Dictionary<ApplicationMethod, double>
                {
                    { ApplicationMethod.Fogging, 10994.745600 }
                }
            },

            VerificationSamplingResults = new VerificationSamplingResults
            {
                WorkDays = 3.57776665823,
                OnSiteDays = 10.41000913914,
                ElementCost = 405771,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 32 },
                    { PpeLevel.C, 32 },
                    { PpeLevel.D, 0 }
                },
                VacuumSamples = 162,
                WipeSamples = 327
            },

            ClearanceSamplingResults = new ClearanceSamplingResults
            {
                WorkDays = 3.57776665823,
                OnSiteDays = 10.41000913914,
                ElementCost = 405771,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 32 },
                    { PpeLevel.C, 32 },
                    { PpeLevel.D, 0 }
                },
                VacuumSamples = 162,
                WipeSamples = 327
            },

            WasteSamplingResults = new WasteSamplingResults
            {
                WorkDays = 36.12545289855,
                OnSiteDays = 83.4950181159,
                ElementCost = 2958273,
                PpeUnits = new Dictionary<PpeLevel, int>
                {
                    { PpeLevel.A, 0 },
                    { PpeLevel.B, 310 },
                    { PpeLevel.C, 310 },
                    { PpeLevel.D, 0 }
                },
                AqueousWasteSamples = 2700,
                SolidWasteSamples = 2348
            },

            GeneralResults = new GeneralResults
            {
                TotalCost = 4634350,
                DecontaminationTreatments = 4,
                AqueousWasteProduced = 54000,
                SolidWasteProduced = 21600,
                AreaContaminated = 3000 // 500 * number of underground surfaces
            },
        };
    }
}
