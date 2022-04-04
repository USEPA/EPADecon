import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';

const mockResults: IJobResultRealization[] = [
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 112.92725859856444,
            onSiteDays: 316.51293217514683,
            elementCost: 7274568,
          },
          sourceReductionResults: {
            workDays: 3.8026379786681357,
            onSiteDays: 3.8026379786681357,
            elementCost: 133783,
          },
          decontaminationResults: {
            workDays: 4.580535885314582,
            onSiteDays: 4.580535885314582,
            elementCost: 137997,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.6777561387809504,
            onSiteDays: 6.594203447033332,
            elementCost: 24102,
          },
          incidentCommandResults: {
            onSiteDays: 331.4903094861629,
            elementCost: 1433954,
          },
          generalResults: {
            totalCost: 9004404,
            areaContaminated: 1123.4372796804614,
            decontaminationRounds: 1,
            solidWasteProduced: 5923.501067550493,
            aqueousWasteProduced: 3626.1619670724563,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 112.57364040227283,
            onSiteDays: 599.5394132474835,
            elementCost: 15848514,
          },
          sourceReductionResults: {
            workDays: 10.865930661801995,
            onSiteDays: 10.865930661801995,
            elementCost: 266865,
          },
          decontaminationResults: {
            workDays: 4.870484162557517,
            onSiteDays: 4.870484162557517,
            elementCost: 410316,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.625850787256893,
            onSiteDays: 12.266683786526565,
            elementCost: 116701,
          },
          incidentCommandResults: {
            onSiteDays: 627.5425118583695,
            elementCost: 2693114,
          },
          generalResults: {
            totalCost: 19335510,
            areaContaminated: 4595.879780510978,
            decontaminationRounds: 1,
            solidWasteProduced: 20185.93510886309,
            aqueousWasteProduced: 3154.1235317389037,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 122.56195030625985,
            onSiteDays: 448.8994389853809,
            elementCost: 16714666,
          },
          sourceReductionResults: {
            workDays: 8.847621801878745,
            onSiteDays: 8.847621801878745,
            elementCost: 382195,
          },
          decontaminationResults: {
            workDays: 4.942231776644995,
            onSiteDays: 4.942231776644995,
            elementCost: 402931,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 8.726914004258017,
            onSiteDays: 32.142428272099124,
            elementCost: 341484,
          },
          incidentCommandResults: {
            onSiteDays: 494.8317208360038,
            elementCost: 2095188,
          },
          generalResults: {
            totalCost: 19936464,
            areaContaminated: 4595.879780510978,
            decontaminationRounds: 1,
            solidWasteProduced: 7889.405697724252,
            aqueousWasteProduced: 5027.730794387967,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 688.6150630123917,
          onSiteDays: 5207.373980231014,
          elementCost: 98493083,
        },
        sourceReductionResults: {
          workDays: 37.19723428387198,
          onSiteDays: 37.19723428387198,
          elementCost: 799448,
        },
        decontaminationResults: {
          workDays: 4.2998293054522545,
          onSiteDays: 4.2998293054522545,
          elementCost: 446932,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.24416531191135,
          onSiteDays: 19.501526219123768,
          elementCost: 263331,
        },
        incidentCommandResults: {
          onSiteDays: 5268.372570039462,
          elementCost: 22933401,
        },
        generalResults: {
          totalCost: 122936195,
          areaContaminated: 13690.140841922292,
          decontaminationRounds: 1,
          solidWasteProduced: 20109.331847145233,
          aqueousWasteProduced: 77286.2059209604,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 451.66053388517497,
          onSiteDays: 3732.012323966047,
          elementCost: 65137679,
        },
        sourceReductionResults: {
          workDays: 68.55047055790888,
          onSiteDays: 68.55047055790888,
          elementCost: 1729255,
        },
        decontaminationResults: {
          workDays: 3.7724872209998983,
          onSiteDays: 3.7724872209998983,
          elementCost: 312762,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 15.597191822696177,
          onSiteDays: 35.57154728470614,
          elementCost: 409756,
        },
        incidentCommandResults: {
          onSiteDays: 3839.906829029662,
          elementCost: 13220525,
        },
        generalResults: {
          totalCost: 80809977,
          areaContaminated: 11209.153334098297,
          decontaminationRounds: 1,
          solidWasteProduced: 12951.352859990831,
          aqueousWasteProduced: 7019.336483039594,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 41828458.582860336,
        sourceReductionTravelCost: 524075.967496203,
        decontaminationTravelCost: 84014.31961261635,
        wasteSamplingTravelCost: 64931.72540902086,
        incidentCommandTravelCost: 2527776.1221344275,
        totalTravelCost: 45029256.7175126,
      },
      totalEventCost: 297051806.7175126,
      totalEventDuration: 10562.14394124966,
      totalContaminationArea: 35214.49101672301,
      totalSolidWasteProduced: 67059.5265812739,
      totalAqueousWasteProduced: 96113.55869719932,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 50.24366260661154,
            onSiteDays: 314.8731252726428,
            elementCost: 6368595,
          },
          sourceReductionResults: {
            workDays: 3.1654404328053856,
            onSiteDays: 3.1654404328053856,
            elementCost: 127930,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 43748,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 318.0385657054482,
            elementCost: 1495645,
          },
          generalResults: {
            totalCost: 8035918,
            areaContaminated: 1914.028825820448,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 132.61693874265842,
            onSiteDays: 941.9021830404783,
            elementCost: 20539936,
          },
          sourceReductionResults: {
            workDays: 3.1130361576529206,
            onSiteDays: 3.1130361576529206,
            elementCost: 72806,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 239531,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 945.0152191981313,
            elementCost: 3463917,
          },
          generalResults: {
            totalCost: 24316190,
            areaContaminated: 7830.117923810923,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 1080.6746014381015,
            onSiteDays: 2023.4691666370243,
            elementCost: 62096279,
          },
          sourceReductionResults: {
            workDays: 36.48368557886288,
            onSiteDays: 36.48368557886288,
            elementCost: 1597442,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 328832,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 2059.952852215887,
            elementCost: 9611571,
          },
          generalResults: {
            totalCost: 73634124,
            areaContaminated: 7830.117923810923,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 582.7044777972349,
          onSiteDays: 2200.510333606995,
          elementCost: 123731738,
        },
        sourceReductionResults: {
          workDays: 26.910736947626255,
          onSiteDays: 26.910736947626255,
          elementCost: 432366,
        },
        decontaminationResults: {
          workDays: 3.03739820514745,
          onSiteDays: 3.03739820514745,
          elementCost: 183766,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 14.517058007056134,
          onSiteDays: 50.2510937807819,
          elementCost: 470552,
        },
        incidentCommandResults: {
          onSiteDays: 2280.709562540551,
          elementCost: 9382326,
        },
        generalResults: {
          totalCost: 134200748,
          areaContaminated: 13815.64494544073,
          decontaminationRounds: 1,
          solidWasteProduced: 10485.681854486973,
          aqueousWasteProduced: 39910.798931505546,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1422.7576885751832,
          onSiteDays: 5750.555438073038,
          elementCost: 118519169,
        },
        sourceReductionResults: {
          workDays: 278.5616121451874,
          onSiteDays: 278.5616121451874,
          elementCost: 3531760,
        },
        decontaminationResults: {
          workDays: 3.022658500360013,
          onSiteDays: 3.022658500360013,
          elementCost: 891745,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.895928457666704,
          onSiteDays: 72.77314741320042,
          elementCost: 495858,
        },
        incidentCommandResults: {
          onSiteDays: 6104.912856131787,
          elementCost: 22360024,
        },
        generalResults: {
          totalCost: 145798556,
          areaContaminated: 19880.628026045953,
          decontaminationRounds: 1,
          solidWasteProduced: 150716.25281096235,
          aqueousWasteProduced: 45492.00291004407,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 51990314.3643889,
        sourceReductionTravelCost: 2108549.6830730205,
        decontaminationTravelCost: 84091.87831437058,
        wasteSamplingTravelCost: 127325.98847005809,
        incidentCommandTravelCost: 7326095.518594788,
        totalTravelCost: 61636377.43284113,
      },
      totalEventCost: 447621913.4328411,
      totalEventDuration: 11708.629055791804,
      totalContaminationArea: 51270.537644928976,
      totalSolidWasteProduced: 161201.9346654493,
      totalAqueousWasteProduced: 85402.80184154962,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 53.49640425931223,
            onSiteDays: 260.20738694335125,
            elementCost: 9972857,
          },
          sourceReductionResults: {
            workDays: 0.8973110936817419,
            onSiteDays: 0.8973110936817419,
            elementCost: 38976,
          },
          decontaminationResults: {
            workDays: 4.497773676993738,
            onSiteDays: 4.497773676993738,
            elementCost: 107447,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7989709537364492,
            onSiteDays: 6.89311243989052,
            elementCost: 24315,
          },
          incidentCommandResults: {
            onSiteDays: 272.49558415391726,
            elementCost: 1195018,
          },
          generalResults: {
            totalCost: 11338613,
            areaContaminated: 1196.8717308880814,
            decontaminationRounds: 1,
            solidWasteProduced: 7520.052123866725,
            aqueousWasteProduced: 1148.6267040894643,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 1119.9792971314064,
            onSiteDays: 1388.9660298811311,
            elementCost: 60031713,
          },
          sourceReductionResults: {
            workDays: 24.566061814238047,
            onSiteDays: 24.566061814238047,
            elementCost: 334513,
          },
          decontaminationResults: {
            workDays: 3.901614706707563,
            onSiteDays: 3.901614706707563,
            elementCost: 184925,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.249520403790556,
            onSiteDays: 9.541513683174223,
            elementCost: 99924,
          },
          incidentCommandResults: {
            onSiteDays: 1426.9752200852508,
            elementCost: 4312668,
          },
          generalResults: {
            totalCost: 64963743,
            areaContaminated: 4896.2934445421515,
            decontaminationRounds: 1,
            solidWasteProduced: 25915.745835200505,
            aqueousWasteProduced: 35073.65948136317,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 182.42245727092345,
            onSiteDays: 918.9900141690649,
            elementCost: 44132812,
          },
          sourceReductionResults: {
            workDays: 16.941198397824298,
            onSiteDays: 16.941198397824298,
            elementCost: 464016,
          },
          decontaminationResults: {
            workDays: 4.677601059358008,
            onSiteDays: 4.677601059358008,
            elementCost: 189910,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.6781381808131244,
            onSiteDays: 8.327329153854626,
            elementCost: 61296,
          },
          incidentCommandResults: {
            onSiteDays: 948.9361427801019,
            elementCost: 2937499,
          },
          generalResults: {
            totalCost: 47785533,
            areaContaminated: 4896.2934445421515,
            decontaminationRounds: 1,
            solidWasteProduced: 18594.558820114962,
            aqueousWasteProduced: 5389.46690052389,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 524.1102633845932,
          onSiteDays: 3756.204876862602,
          elementCost: 69678035,
        },
        sourceReductionResults: {
          workDays: 53.545185324159874,
          onSiteDays: 53.545185324159874,
          elementCost: 1532638,
        },
        decontaminationResults: {
          workDays: 3.5281737028919564,
          onSiteDays: 3.5281737028919564,
          elementCost: 432346,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 34.39895620004004,
          onSiteDays: 64.66412466392221,
          elementCost: 898059,
        },
        incidentCommandResults: {
          onSiteDays: 3877.942360553576,
          elementCost: 13914324,
        },
        generalResults: {
          totalCost: 86455402,
          areaContaminated: 16965.225266051762,
          decontaminationRounds: 1,
          solidWasteProduced: 90670.54439486258,
          aqueousWasteProduced: 107879.49946402923,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 684.8355388163288,
          onSiteDays: 1630.3236065829888,
          elementCost: 52991044,
        },
        sourceReductionResults: {
          workDays: 0.6946953187738321,
          onSiteDays: 0.6946953187738321,
          elementCost: 22850,
        },
        decontaminationResults: {
          workDays: 4.907319881466059,
          onSiteDays: 4.907319881466059,
          elementCost: 332373,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.871781841395182,
          onSiteDays: 7.926638820166939,
          elementCost: 30969,
        },
        incidentCommandResults: {
          onSiteDays: 1643.8522606033957,
          elementCost: 7079231,
        },
        generalResults: {
          totalCost: 60456467,
          areaContaminated: 10817.928846612214,
          decontaminationRounds: 1,
          solidWasteProduced: 38375.182253246145,
          aqueousWasteProduced: 32675.85823371069,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 17009308.626237076,
        sourceReductionTravelCost: 582179.4802173643,
        decontaminationTravelCost: 184840.66109555852,
        wasteSamplingTravelCost: 75465.394722725,
        incidentCommandTravelCost: 2513329.193883433,
        totalTravelCost: 20365123.35615616,
      },
      totalEventCost: 291364881.3561562,
      totalEventDuration: 8170.201568176241,
      totalContaminationArea: 38772.612732636364,
      totalSolidWasteProduced: 181076.0834272909,
      totalAqueousWasteProduced: 182167.11078371643,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 13.537103519806934,
            onSiteDays: 174.57529926188568,
            elementCost: 4248041,
          },
          sourceReductionResults: {
            workDays: 8.274173603538205,
            onSiteDays: 8.274173603538205,
            elementCost: 204005,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 13772,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 182.84947286542388,
            elementCost: 832181,
          },
          generalResults: {
            totalCost: 5297999,
            areaContaminated: 1195.3079541953955,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 174.19204999394287,
            onSiteDays: 715.2300541147891,
            elementCost: 18101829,
          },
          sourceReductionResults: {
            workDays: 83.1633493255666,
            onSiteDays: 83.1633493255666,
            elementCost: 1445574,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 160362,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 798.3934034403558,
            elementCost: 2574013,
          },
          generalResults: {
            totalCost: 22281778,
            areaContaminated: 4889.896176253891,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 27.65146061010533,
            onSiteDays: 325.1123513909933,
            elementCost: 12574749,
          },
          sourceReductionResults: {
            workDays: 11.294515923127783,
            onSiteDays: 11.294515923127783,
            elementCost: 344955,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 19407,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 336.4068673141211,
            elementCost: 1091355,
          },
          generalResults: {
            totalCost: 14030466,
            areaContaminated: 4889.896176253891,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 369.32140822212557,
          onSiteDays: 1852.473263663964,
          elementCost: 42348983,
        },
        sourceReductionResults: {
          workDays: 5.4215038840696606,
          onSiteDays: 5.4215038840696606,
          elementCost: 81784,
        },
        decontaminationResults: {
          workDays: 3.594498902232037,
          onSiteDays: 3.594498902232037,
          elementCost: 482898,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.2671515681987,
          onSiteDays: 19.939545938771396,
          elementCost: 297402,
        },
        incidentCommandResults: {
          onSiteDays: 1881.428812389037,
          elementCost: 6922148,
        },
        generalResults: {
          totalCost: 50133215,
          areaContaminated: 14809.357944133078,
          decontaminationRounds: 1,
          solidWasteProduced: 94602.22542729304,
          aqueousWasteProduced: 24207.942676417333,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 717.0534350977844,
          onSiteDays: 5556.172176681062,
          elementCost: 83733682,
        },
        sourceReductionResults: {
          workDays: 1.950501181290131,
          onSiteDays: 1.950501181290131,
          elementCost: 67443,
        },
        decontaminationResults: {
          workDays: 4.233557836905485,
          onSiteDays: 4.233557836905485,
          elementCost: 627825,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.9337709181504377,
          onSiteDays: 8.890672490894781,
          elementCost: 76850,
        },
        incidentCommandResults: {
          onSiteDays: 5571.246908190153,
          elementCost: 17357659,
        },
        generalResults: {
          totalCost: 101863459,
          areaContaminated: 14327.774406240924,
          decontaminationRounds: 1,
          solidWasteProduced: 24451.160320248284,
          aqueousWasteProduced: 58425.091032980425,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 51104778.0495943,
        sourceReductionTravelCost: 494031.95391219744,
        decontaminationTravelCost: 60827.34803687877,
        wasteSamplingTravelCost: 29795.42947908488,
        incidentCommandTravelCost: 5634502.2943622125,
        totalTravelCost: 57323935.07538467,
      },
      totalEventCost: 250930852.07538468,
      totalEventDuration: 8770.32546419909,
      totalContaminationArea: 40112.232657077184,
      totalSolidWasteProduced: 119053.38574754132,
      totalAqueousWasteProduced: 82633.03370939776,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 51.88728762125036,
            onSiteDays: 354.46372184092894,
            elementCost: 6389497,
          },
          sourceReductionResults: {
            workDays: 11.554964712846463,
            onSiteDays: 11.554964712846463,
            elementCost: 153306,
          },
          decontaminationResults: {
            workDays: 3.4545484842859553,
            onSiteDays: 3.4545484842859553,
            elementCost: 296972,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.08296001760100809,
            onSiteDays: 5.085872644206778,
            elementCost: 3007,
          },
          incidentCommandResults: {
            onSiteDays: 374.5591076822682,
            elementCost: 1752130,
          },
          generalResults: {
            totalCost: 8594912,
            areaContaminated: 1178.4622026122022,
            decontaminationRounds: 1,
            solidWasteProduced: 3293.2559914445465,
            aqueousWasteProduced: 7090.8712323284535,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 216.14500838630195,
            onSiteDays: 949.9358116492074,
            elementCost: 15758947,
          },
          sourceReductionResults: {
            workDays: 0.22791564215369672,
            onSiteDays: 0.22791564215369672,
            elementCost: 3467,
          },
          decontaminationResults: {
            workDays: 3.437088593011044,
            onSiteDays: 3.437088593011044,
            elementCost: 312601,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.978986094256499,
            onSiteDays: 6.703307895593715,
            elementCost: 40503,
          },
          incidentCommandResults: {
            onSiteDays: 960.3041237799658,
            elementCost: 4426934,
          },
          generalResults: {
            totalCost: 20542452,
            areaContaminated: 4820.9817379590095,
            decontaminationRounds: 1,
            solidWasteProduced: 5554.968007970512,
            aqueousWasteProduced: 36239.95687494886,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 67.1363488171489,
            onSiteDays: 1064.4007643060174,
            elementCost: 21760085,
          },
          sourceReductionResults: {
            workDays: 24.50397199523307,
            onSiteDays: 24.50397199523307,
            elementCost: 1099819,
          },
          decontaminationResults: {
            workDays: 4.985973464787466,
            onSiteDays: 4.985973464787466,
            elementCost: 415633,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 16.190734557665877,
            onSiteDays: 28.337311093047504,
            elementCost: 368663,
          },
          incidentCommandResults: {
            onSiteDays: 1122.2280208590855,
            elementCost: 4248016,
          },
          generalResults: {
            totalCost: 27892216,
            areaContaminated: 4820.9817379590095,
            decontaminationRounds: 1,
            solidWasteProduced: 35826.832482759855,
            aqueousWasteProduced: 27329.703234006276,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 231.68517318853304,
          onSiteDays: 1206.4883678624142,
          elementCost: 43710136,
        },
        sourceReductionResults: {
          workDays: 9.465863400485736,
          onSiteDays: 9.465863400485736,
          elementCost: 208263,
        },
        decontaminationResults: {
          workDays: 3.248706122918219,
          onSiteDays: 3.248706122918219,
          elementCost: 864699,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.0673610648920295,
          onSiteDays: 13.718023705520315,
          elementCost: 161414,
        },
        incidentCommandResults: {
          onSiteDays: 1232.9209610913385,
          elementCost: 4828820,
        },
        generalResults: {
          totalCost: 49773332,
          areaContaminated: 18022.672682540182,
          decontaminationRounds: 1,
          solidWasteProduced: 105931.3795775961,
          aqueousWasteProduced: 111246.25158139922,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 740.8462389301264,
          onSiteDays: 1952.117572409698,
          elementCost: 44235052,
        },
        sourceReductionResults: {
          workDays: 80.51462538952197,
          onSiteDays: 80.51462538952197,
          elementCost: 1999087,
        },
        decontaminationResults: {
          workDays: 4.9736222810981845,
          onSiteDays: 4.9736222810981845,
          elementCost: 434996,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 24.026747429771802,
          onSiteDays: 98.7321533520025,
          elementCost: 775561,
        },
        incidentCommandResults: {
          onSiteDays: 2136.3379734323207,
          elementCost: 7095236,
        },
        generalResults: {
          totalCost: 54539932,
          areaContaminated: 10649.107979623692,
          decontaminationRounds: 1,
          solidWasteProduced: 47494.19124324914,
          aqueousWasteProduced: 39653.480905047065,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 34654197.415078156,
        sourceReductionTravelCost: 407036.81509803655,
        decontaminationTravelCost: 138642.2923873758,
        wasteSamplingTravelCost: 110844.61607989433,
        incidentCommandTravelCost: 2341102.771489653,
        totalTravelCost: 37651823.910133116,
      },
      totalEventCost: 198994667.91013312,
      totalEventDuration: 5826.350186844978,
      totalContaminationArea: 39492.206340694094,
      totalSolidWasteProduced: 198100.62730302016,
      totalAqueousWasteProduced: 221560.26382772988,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 25.8431053999685,
            onSiteDays: 84.42291481816046,
            elementCost: 2051724,
          },
          sourceReductionResults: {
            workDays: 0.5456050337633886,
            onSiteDays: 0.5456050337633886,
            elementCost: 16245,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 48464,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 84.96851985192386,
            elementCost: 304994,
          },
          generalResults: {
            totalCost: 2421427,
            areaContaminated: 1286.0716111418353,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 223.1899181657642,
            onSiteDays: 786.310998632933,
            elementCost: 17764554,
          },
          sourceReductionResults: {
            workDays: 1.4629445001831167,
            onSiteDays: 1.4629445001831167,
            elementCost: 58286,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 219777,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 787.7739431331161,
            elementCost: 2458738,
          },
          generalResults: {
            totalCost: 20501355,
            areaContaminated: 5261.202045580234,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 36.302736144570176,
            onSiteDays: 613.8812943811597,
            elementCost: 13324114,
          },
          sourceReductionResults: {
            workDays: 3.5247286938655593,
            onSiteDays: 3.5247286938655593,
            elementCost: 116399,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 67268,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 617.4060230750252,
            elementCost: 2331403,
          },
          generalResults: {
            totalCost: 15839184,
            areaContaminated: 5261.202045580234,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 558.5315693739627,
          onSiteDays: 2314.8494893550246,
          elementCost: 87289251,
        },
        sourceReductionResults: {
          workDays: 51.16481844674015,
          onSiteDays: 51.16481844674015,
          elementCost: 2507942,
        },
        decontaminationResults: {
          workDays: 4.432015711309392,
          onSiteDays: 4.432015711309392,
          elementCost: 307523,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.450720820519339,
          onSiteDays: 10.204527155497932,
          elementCost: 85779,
        },
        incidentCommandResults: {
          onSiteDays: 2380.6508506685723,
          elementCost: 7705994,
        },
        generalResults: {
          totalCost: 97896489,
          areaContaminated: 19486.57420451906,
          decontaminationRounds: 1,
          solidWasteProduced: 106227.92565703348,
          aqueousWasteProduced: 118746.95036608186,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1669.000091803819,
          onSiteDays: 5092.470840950904,
          elementCost: 136679256,
        },
        sourceReductionResults: {
          workDays: 132.25091626886393,
          onSiteDays: 132.25091626886393,
          elementCost: 3587208,
        },
        decontaminationResults: {
          workDays: 4.957078462922265,
          onSiteDays: 4.957078462922265,
          elementCost: 587338,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 27.181477827221077,
          onSiteDays: 52.48483564145124,
          elementCost: 777402,
        },
        incidentCommandResults: {
          onSiteDays: 5282.163671324141,
          elementCost: 16977154,
        },
        generalResults: {
          totalCost: 158608358,
          areaContaminated: 19466.072800991496,
          decontaminationRounds: 1,
          solidWasteProduced: 18981.72123439461,
          aqueousWasteProduced: 95534.96988755617,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 18207799.688852172,
        sourceReductionTravelCost: 621096.7245841399,
        decontaminationTravelCost: 76473.53616701542,
        wasteSamplingTravelCost: 41894.13958710569,
        incidentCommandTravelCost: 2918246.7400730993,
        totalTravelCost: 21865510.82926353,
      },
      totalEventCost: 317132323.8292635,
      totalEventDuration: 9152.963008052779,
      totalContaminationArea: 50761.12270781286,
      totalSolidWasteProduced: 125209.6468914281,
      totalAqueousWasteProduced: 214281.92025363803,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 13.545066247711432,
            onSiteDays: 54.79149808717517,
            elementCost: 2752298,
          },
          sourceReductionResults: {
            workDays: 0.35529756627272724,
            onSiteDays: 0.35529756627272724,
            elementCost: 25707,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 65626,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 55.146795653447896,
            elementCost: 234004,
          },
          generalResults: {
            totalCost: 3077635,
            areaContaminated: 1873.0423841766315,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 147.75743150768577,
            onSiteDays: 1024.082978249435,
            elementCost: 24197974,
          },
          sourceReductionResults: {
            workDays: 0.46868501552966735,
            onSiteDays: 0.46868501552966735,
            elementCost: 15882,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 103866,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1024.5516632649646,
            elementCost: 3797314,
          },
          generalResults: {
            totalCost: 28115036,
            areaContaminated: 7662.44611708622,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 189.4605230192554,
            onSiteDays: 792.7470987398513,
            elementCost: 30574218,
          },
          sourceReductionResults: {
            workDays: 44.22925980137609,
            onSiteDays: 44.22925980137609,
            elementCost: 1173793,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 272502,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 836.9763585412273,
            elementCost: 3230333,
          },
          generalResults: {
            totalCost: 35250846,
            areaContaminated: 7662.44611708622,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 527.2851145708953,
          onSiteDays: 2666.9389965045275,
          elementCost: 98007646,
        },
        sourceReductionResults: {
          workDays: 32.950643805762425,
          onSiteDays: 32.950643805762425,
          elementCost: 1349453,
        },
        decontaminationResults: {
          workDays: 4.502822919632965,
          onSiteDays: 4.502822919632965,
          elementCost: 426410,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.146224686253014,
          onSiteDays: 56.19627764929727,
          elementCost: 475641,
        },
        incidentCommandResults: {
          onSiteDays: 2760.58874087922,
          elementCost: 10584079,
        },
        generalResults: {
          totalCost: 110843229,
          areaContaminated: 14285.819668855012,
          decontaminationRounds: 1,
          solidWasteProduced: 8583.833698510984,
          aqueousWasteProduced: 61129.00718420159,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 556.0138866600539,
          onSiteDays: 4655.117818352761,
          elementCost: 82862336,
        },
        sourceReductionResults: {
          workDays: 32.19875966218309,
          onSiteDays: 32.19875966218309,
          elementCost: 731053,
        },
        decontaminationResults: {
          workDays: 4.782721069590822,
          onSiteDays: 4.782721069590822,
          elementCost: 524318,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.861563188726854,
          onSiteDays: 7.583839043054722,
          elementCost: 39001,
        },
        incidentCommandResults: {
          onSiteDays: 4699.683138127589,
          elementCost: 17196130,
        },
        generalResults: {
          totalCost: 101352838,
          areaContaminated: 10497.007855704593,
          decontaminationRounds: 1,
          solidWasteProduced: 42808.351259007686,
          aqueousWasteProduced: 44075.999244827966,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 37496698.58503335,
        sourceReductionTravelCost: 638109.5121665393,
        decontaminationTravelCost: 61268.75205991602,
        wasteSamplingTravelCost: 61647.217967116856,
        incidentCommandTravelCost: 4642357.724906854,
        totalTravelCost: 42900081.79213377,
      },
      totalEventCost: 321539665.79213375,
      totalEventDuration: 9376.94669646645,
      totalContaminationArea: 41980.76214290867,
      totalSolidWasteProduced: 51392.18495751867,
      totalAqueousWasteProduced: 105205.00642902956,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 88.02430339096452,
            onSiteDays: 180.28581694317916,
            elementCost: 3796009,
          },
          sourceReductionResults: {
            workDays: 4.9915351610002965,
            onSiteDays: 4.9915351610002965,
            elementCost: 75823,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 35920,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 185.27735210417944,
            elementCost: 894363,
          },
          generalResults: {
            totalCost: 4802115,
            areaContaminated: 1151.8107256473697,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 22.638969859006934,
            onSiteDays: 88.57319864818307,
            elementCost: 4158173,
          },
          sourceReductionResults: {
            workDays: 3.6450871010692545,
            onSiteDays: 3.6450871010692545,
            elementCost: 94027,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 85941,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 92.21828574925232,
            elementCost: 407508,
          },
          generalResults: {
            totalCost: 4745649,
            areaContaminated: 4711.9529685574225,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 352.32427532684767,
            onSiteDays: 1008.7624083335323,
            elementCost: 24583273,
          },
          sourceReductionResults: {
            workDays: 25.118212096892023,
            onSiteDays: 25.118212096892023,
            elementCost: 441559,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 55448,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1033.8806204304244,
            elementCost: 3454157,
          },
          generalResults: {
            totalCost: 28534437,
            areaContaminated: 4711.9529685574225,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1104.581836840943,
          onSiteDays: 4713.837572498699,
          elementCost: 95435101,
        },
        sourceReductionResults: {
          workDays: 58.397826845661676,
          onSiteDays: 58.397826845661676,
          elementCost: 3003818,
        },
        decontaminationResults: {
          workDays: 4.414639061180558,
          onSiteDays: 4.414639061180558,
          elementCost: 269663,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 16.701924597710747,
          onSiteDays: 32.62236116533944,
          elementCost: 408378,
        },
        incidentCommandResults: {
          onSiteDays: 4809.27239957088,
          elementCost: 18204973,
        },
        generalResults: {
          totalCost: 117321933,
          areaContaminated: 11358.082455433458,
          decontaminationRounds: 1,
          solidWasteProduced: 56276.274164834555,
          aqueousWasteProduced: 46646.99318389303,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 494.0986120217294,
          onSiteDays: 1968.4298084593815,
          elementCost: 76634130,
        },
        sourceReductionResults: {
          workDays: 212.6019553496979,
          onSiteDays: 212.6019553496979,
          elementCost: 3603929,
        },
        decontaminationResults: {
          workDays: 3.2936779172843504,
          onSiteDays: 3.2936779172843504,
          elementCost: 890401,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.372536475074982,
          onSiteDays: 20.364413034572507,
          elementCost: 135567,
        },
        incidentCommandResults: {
          onSiteDays: 2204.689854760936,
          elementCost: 10322403,
        },
        generalResults: {
          totalCost: 91586430,
          areaContaminated: 16765.22401715245,
          decontaminationRounds: 1,
          solidWasteProduced: 59766.67244785091,
          aqueousWasteProduced: 47678.8392113794,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 24509749.336712934,
        sourceReductionTravelCost: 1588857.5753507046,
        decontaminationTravelCost: 59473.103741325875,
        wasteSamplingTravelCost: 41583.27747543321,
        incidentCommandTravelCost: 3991507.048417612,
        totalTravelCost: 30191170.34169801,
      },
      totalEventCost: 277181734.341698,
      totalEventDuration: 8325.338512615672,
      totalContaminationArea: 38699.02313534812,
      totalSolidWasteProduced: 116042.94661268547,
      totalAqueousWasteProduced: 94325.83239527243,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 29.06333458387516,
            onSiteDays: 171.36807724499684,
            elementCost: 3931823,
          },
          sourceReductionResults: {
            workDays: 1.1220046637005343,
            onSiteDays: 1.1220046637005343,
            elementCost: 36589,
          },
          decontaminationResults: {
            workDays: 3.2420211411644755,
            onSiteDays: 3.2420211411644755,
            elementCost: 146498,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.4860558587555903,
            onSiteDays: 10.015351766737068,
            elementCost: 39719,
          },
          incidentCommandResults: {
            onSiteDays: 185.74745481659892,
            elementCost: 599566,
          },
          generalResults: {
            totalCost: 4754195,
            areaContaminated: 1172.3217629905375,
            decontaminationRounds: 1,
            solidWasteProduced: 10507.265704146299,
            aqueousWasteProduced: 333.8200399154621,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 102.97954143958871,
            onSiteDays: 627.0570281846509,
            elementCost: 13837001,
          },
          sourceReductionResults: {
            workDays: 3.306216952675543,
            onSiteDays: 3.306216952675543,
            elementCost: 143742,
          },
          decontaminationResults: {
            workDays: 3.5817945358766696,
            onSiteDays: 3.5817945358766696,
            elementCost: 269062,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.102073604684808,
            onSiteDays: 8.742275982018752,
            elementCost: 42959,
          },
          incidentCommandResults: {
            onSiteDays: 642.6873156552219,
            elementCost: 2412993,
          },
          generalResults: {
            totalCost: 16705757,
            areaContaminated: 4795.861757688563,
            decontaminationRounds: 1,
            solidWasteProduced: 18905.54710361346,
            aqueousWasteProduced: 18729.78399478621,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 81.2922830674485,
            onSiteDays: 984.5192914306419,
            elementCost: 30349531,
          },
          sourceReductionResults: {
            workDays: 8.191475498964369,
            onSiteDays: 8.191475498964369,
            elementCost: 237074,
          },
          decontaminationResults: {
            workDays: 3.957991413529495,
            onSiteDays: 3.957991413529495,
            elementCost: 369877,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 8.305721268375073,
            onSiteDays: 21.887916443091598,
            elementCost: 278897,
          },
          incidentCommandResults: {
            onSiteDays: 1018.5566747862274,
            elementCost: 3581548,
          },
          generalResults: {
            totalCost: 34816927,
            areaContaminated: 4795.861757688563,
            decontaminationRounds: 1,
            solidWasteProduced: 24350.719149071676,
            aqueousWasteProduced: 26174.97658274983,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 814.3391117377689,
          onSiteDays: 3023.5143460676363,
          elementCost: 99962950,
        },
        sourceReductionResults: {
          workDays: 0.3022801707773751,
          onSiteDays: 0.3022801707773751,
          elementCost: 10927,
        },
        decontaminationResults: {
          workDays: 3.436984382205872,
          onSiteDays: 3.436984382205872,
          elementCost: 832266,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.4638807349887235,
          onSiteDays: 9.727619037206107,
          elementCost: 60175,
        },
        incidentCommandResults: {
          onSiteDays: 3036.981229657826,
          elementCost: 10593056,
        },
        generalResults: {
          totalCost: 111459374,
          areaContaminated: 16273.605103202535,
          decontaminationRounds: 1,
          solidWasteProduced: 15817.833434687822,
          aqueousWasteProduced: 756.4030493735314,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1269.9958230694006,
          onSiteDays: 2421.417874804273,
          elementCost: 123297195,
        },
        sourceReductionResults: {
          workDays: 52.01793318783345,
          onSiteDays: 52.01793318783345,
          elementCost: 923488,
        },
        decontaminationResults: {
          workDays: 3.6097150977257906,
          onSiteDays: 3.6097150977257906,
          elementCost: 951824,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.9381599160969278,
          onSiteDays: 9.594110695655704,
          elementCost: 60989,
        },
        incidentCommandResults: {
          onSiteDays: 2486.639633785488,
          elementCost: 9635122,
        },
        generalResults: {
          totalCost: 134868618,
          areaContaminated: 19863.646751030457,
          decontaminationRounds: 1,
          solidWasteProduced: 22217.859644960077,
          aqueousWasteProduced: 67641.53281754594,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 22805622.600079887,
        sourceReductionTravelCost: 124831.33525712337,
        decontaminationTravelCost: 213833.1503723946,
        wasteSamplingTravelCost: 54764.82083705359,
        incidentCommandTravelCost: 2347405.702589146,
        totalTravelCost: 25546457.609135605,
      },
      totalEventCost: 328151328.6091356,
      totalEventDuration: 7370.612308701362,
      totalContaminationArea: 46901.29713260065,
      totalSolidWasteProduced: 91799.22503647933,
      totalAqueousWasteProduced: 113636.51648437098,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 29.609580641170968,
            onSiteDays: 221.93776073198106,
            elementCost: 6053336,
          },
          sourceReductionResults: {
            workDays: 4.363767849758341,
            onSiteDays: 4.363767849758341,
            elementCost: 114334,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 46341,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 226.3015285817394,
            elementCost: 1045982,
          },
          generalResults: {
            totalCost: 7259993,
            areaContaminated: 1200.2260191828775,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 102.80844505154047,
            onSiteDays: 465.2048506247787,
            elementCost: 24896884,
          },
          sourceReductionResults: {
            workDays: 2.210921846109837,
            onSiteDays: 2.210921846109837,
            elementCost: 53496,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 198508,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 467.41577247088856,
            elementCost: 1641257,
          },
          generalResults: {
            totalCost: 26790145,
            areaContaminated: 4910.015533020862,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 111.07281765424389,
            onSiteDays: 396.72024824860466,
            elementCost: 17682576,
          },
          sourceReductionResults: {
            workDays: 27.04816763578724,
            onSiteDays: 27.04816763578724,
            elementCost: 1001924,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 131298,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 423.7684158843919,
            elementCost: 1928403,
          },
          generalResults: {
            totalCost: 20744201,
            areaContaminated: 4910.015533020862,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1250.4000032842966,
          onSiteDays: 1804.7954702613806,
          elementCost: 45213917,
        },
        sourceReductionResults: {
          workDays: 63.2476197353389,
          onSiteDays: 63.2476197353389,
          elementCost: 1910781,
        },
        decontaminationResults: {
          workDays: 3.269102893366735,
          onSiteDays: 3.269102893366735,
          elementCost: 749808,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.8647048046918826,
          onSiteDays: 10.754665506904908,
          elementCost: 94610,
        },
        incidentCommandResults: {
          onSiteDays: 1882.0668583969914,
          elementCost: 6564220,
        },
        generalResults: {
          totalCost: 54533336,
          areaContaminated: 17655.894730159987,
          decontaminationRounds: 1,
          solidWasteProduced: 68367.75533457957,
          aqueousWasteProduced: 14247.899377833503,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1468.4812644439123,
          onSiteDays: 8620.955093391345,
          elementCost: 187141908,
        },
        sourceReductionResults: {
          workDays: 63.005332513221504,
          onSiteDays: 63.005332513221504,
          elementCost: 1855716,
        },
        decontaminationResults: {
          workDays: 3.9233766493674778,
          onSiteDays: 3.9233766493674778,
          elementCost: 1081323,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 27.37061548194755,
          onSiteDays: 44.134023459367185,
          elementCost: 697668,
        },
        incidentCommandResults: {
          onSiteDays: 8732.0178260133,
          elementCost: 34252710,
        },
        generalResults: {
          totalCost: 225029325,
          areaContaminated: 19710.550517000513,
          decontaminationRounds: 1,
          solidWasteProduced: 111773.94413871477,
          aqueousWasteProduced: 49895.35459865054,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 62622156.2487059,
        sourceReductionTravelCost: 525091.1902205771,
        decontaminationTravelCost: 49646.71888952654,
        wasteSamplingTravelCost: 41149.73929875464,
        incidentCommandTravelCost: 4664980.867735447,
        totalTravelCost: 67903024.76485021,
      },
      totalEventCost: 402260024.7648502,
      totalEventDuration: 11731.570401347311,
      totalContaminationArea: 48386.7023323851,
      totalSolidWasteProduced: 180141.69947329434,
      totalAqueousWasteProduced: 64143.25397648405,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 32.73136542728943,
            onSiteDays: 175.06500197361427,
            elementCost: 5144242,
          },
          sourceReductionResults: {
            workDays: 4.179508670162509,
            onSiteDays: 4.179508670162509,
            elementCost: 174413,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 7993,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 179.24451064377678,
            elementCost: 646746,
          },
          generalResults: {
            totalCost: 5973394,
            areaContaminated: 1256.1790747276523,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 419.87939802026625,
            onSiteDays: 1033.8112846474162,
            elementCost: 42058154,
          },
          sourceReductionResults: {
            workDays: 35.99573097244881,
            onSiteDays: 35.99573097244881,
            elementCost: 562224,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 146969,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1069.807015619865,
            elementCost: 4189414,
          },
          generalResults: {
            totalCost: 46956761,
            areaContaminated: 5138.914396613123,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 80.27028132534247,
            onSiteDays: 447.2581336200284,
            elementCost: 11848968,
          },
          sourceReductionResults: {
            workDays: 4.505289611205793,
            onSiteDays: 4.505289611205793,
            elementCost: 238004,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 113509,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 451.7634232312342,
            elementCost: 1969022,
          },
          generalResults: {
            totalCost: 14169503,
            areaContaminated: 5138.914396613123,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 3310.735673848553,
          onSiteDays: 6774.72314949416,
          elementCost: 199722695,
        },
        sourceReductionResults: {
          workDays: 11.717147076821103,
          onSiteDays: 11.717147076821103,
          elementCost: 553226,
        },
        decontaminationResults: {
          workDays: 3.360039454968655,
          onSiteDays: 3.360039454968655,
          elementCost: 350516,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.1144769437252542,
          onSiteDays: 5.901862094112605,
          elementCost: 34950,
        },
        incidentCommandResults: {
          onSiteDays: 6795.702198120061,
          elementCost: 29719584,
        },
        generalResults: {
          totalCost: 230380971,
          areaContaminated: 10092.06455203054,
          decontaminationRounds: 1,
          solidWasteProduced: 14889.876075332537,
          aqueousWasteProduced: 52251.39963238474,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 216.08608742909377,
          onSiteDays: 984.878595090813,
          elementCost: 39749335,
        },
        sourceReductionResults: {
          workDays: 75.82279427949996,
          onSiteDays: 75.82279427949996,
          elementCost: 2032792,
        },
        decontaminationResults: {
          workDays: 3.7538204674501485,
          onSiteDays: 3.7538204674501485,
          elementCost: 409165,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 6.560001744817904,
          onSiteDays: 26.20304083995339,
          elementCost: 290002,
        },
        incidentCommandResults: {
          onSiteDays: 1090.6582506777165,
          elementCost: 4578843,
        },
        generalResults: {
          totalCost: 47060137,
          areaContaminated: 13059.303827091757,
          decontaminationRounds: 1,
          solidWasteProduced: 53714.94908265048,
          aqueousWasteProduced: 27990.94427588136,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 60774042.825037025,
        sourceReductionTravelCost: 919249.2353188064,
        decontaminationTravelCost: 74862.81126525355,
        wasteSamplingTravelCost: 28097.463366940734,
        incidentCommandTravelCost: 4705306.028857863,
        totalTravelCost: 66501558.36384589,
      },
      totalEventCost: 411042324.3638459,
      totalEventDuration: 9587.175398292653,
      totalContaminationArea: 34685.3762470762,
      totalSolidWasteProduced: 68604.82515798301,
      totalAqueousWasteProduced: 80242.3439082661,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 110.28630487864702,
            onSiteDays: 290.86199012844673,
            elementCost: 9949669,
          },
          sourceReductionResults: {
            workDays: 2.3910320533214673,
            onSiteDays: 2.3910320533214673,
            elementCost: 98950,
          },
          decontaminationResults: {
            workDays: 3.9881443458116017,
            onSiteDays: 3.9881443458116017,
            elementCost: 155159,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.4511058806650272,
            onSiteDays: 6.593238333239723,
            elementCost: 47437,
          },
          incidentCommandResults: {
            onSiteDays: 303.83440486081946,
            elementCost: 1129126,
          },
          generalResults: {
            totalCost: 11380341,
            areaContaminated: 1328.3838150662225,
            decontaminationRounds: 1,
            solidWasteProduced: 10762.344388627569,
            aqueousWasteProduced: 3095.616123301966,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 297.7721275102686,
            onSiteDays: 489.7401956299641,
            elementCost: 27576590,
          },
          sourceReductionResults: {
            workDays: 26.178560126963887,
            onSiteDays: 26.178560126963887,
            elementCost: 1244392,
          },
          decontaminationResults: {
            workDays: 3.5591514363324155,
            onSiteDays: 3.5591514363324155,
            elementCost: 174631,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 9.80541673735331,
            onSiteDays: 23.924741766303217,
            elementCost: 286078,
          },
          incidentCommandResults: {
            onSiteDays: 543.4026489595636,
            elementCost: 2097467,
          },
          generalResults: {
            totalCost: 31379158,
            areaContaminated: 5434.29742527091,
            decontaminationRounds: 1,
            solidWasteProduced: 25931.866221311593,
            aqueousWasteProduced: 39806.20228728814,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 204.6568128669894,
            onSiteDays: 626.1320517964795,
            elementCost: 34687626,
          },
          sourceReductionResults: {
            workDays: 17.271325365713803,
            onSiteDays: 17.271325365713803,
            elementCost: 913001,
          },
          decontaminationResults: {
            workDays: 3.0857412032982663,
            onSiteDays: 3.0857412032982663,
            elementCost: 242876,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.1810261057316824,
            onSiteDays: 9.831407079352218,
            elementCost: 49048,
          },
          incidentCommandResults: {
            onSiteDays: 656.3205254448437,
            elementCost: 2463238,
          },
          generalResults: {
            totalCost: 38355789,
            areaContaminated: 5434.29742527091,
            decontaminationRounds: 1,
            solidWasteProduced: 34181.25490939543,
            aqueousWasteProduced: 16290.440292378418,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1051.0741799919467,
          onSiteDays: 3996.0782815258194,
          elementCost: 101505898,
        },
        sourceReductionResults: {
          workDays: 45.93594156980928,
          onSiteDays: 45.93594156980928,
          elementCost: 1744321,
        },
        decontaminationResults: {
          workDays: 3.106054433646159,
          onSiteDays: 3.106054433646159,
          elementCost: 720967,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.7235436473831313,
          onSiteDays: 6.8357096560724,
          elementCost: 25957,
        },
        incidentCommandResults: {
          onSiteDays: 4051.955987185347,
          elementCost: 13926244,
        },
        generalResults: {
          totalCost: 117923387,
          areaContaminated: 14156.352147496389,
          decontaminationRounds: 1,
          solidWasteProduced: 2866.0726989740588,
          aqueousWasteProduced: 51449.402624990944,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1861.130136270854,
          onSiteDays: 3693.678660976414,
          elementCost: 125461998,
        },
        sourceReductionResults: {
          workDays: 47.32062135697889,
          onSiteDays: 47.32062135697889,
          elementCost: 811616,
        },
        decontaminationResults: {
          workDays: 3.1688058595566093,
          onSiteDays: 3.1688058595566093,
          elementCost: 261473,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.241643526202635,
          onSiteDays: 23.040398493354964,
          elementCost: 168926,
        },
        incidentCommandResults: {
          onSiteDays: 3767.2084866863042,
          elementCost: 15816252,
        },
        generalResults: {
          totalCost: 142520265,
          areaContaminated: 10693.08753807167,
          decontaminationRounds: 1,
          solidWasteProduced: 72319.75219387544,
          aqueousWasteProduced: 63130.498614707685,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 17616742.08487684,
        sourceReductionTravelCost: 844346.8854804789,
        decontaminationTravelCost: 225624.5160191493,
        wasteSamplingTravelCost: 62846.375723797944,
        incidentCommandTravelCost: 3788730.106091727,
        totalTravelCost: 22538289.968191992,
      },
      totalEventCost: 364097229.968192,
      totalEventDuration: 9322.722053136878,
      totalContaminationArea: 37046.4183511761,
      totalSolidWasteProduced: 146061.29041218408,
      totalAqueousWasteProduced: 173772.15994266717,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 197.053223417525,
            onSiteDays: 570.3685033972022,
            elementCost: 16561189,
          },
          sourceReductionResults: {
            workDays: 7.409794191235063,
            onSiteDays: 7.409794191235063,
            elementCost: 236864,
          },
          decontaminationResults: {
            workDays: 4.055278310332279,
            onSiteDays: 4.055278310332279,
            elementCost: 164603,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7717181442784563,
            onSiteDays: 6.690153226181825,
            elementCost: 31843,
          },
          incidentCommandResults: {
            onSiteDays: 588.5237291249513,
            elementCost: 2079451,
          },
          generalResults: {
            totalCost: 19073950,
            areaContaminated: 1420.881463053104,
            decontaminationRounds: 1,
            solidWasteProduced: 4902.6024224574485,
            aqueousWasteProduced: 1853.5758263090768,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 56.79324840393758,
            onSiteDays: 513.8992642516412,
            elementCost: 8483532,
          },
          sourceReductionResults: {
            workDays: 4.354761925884471,
            onSiteDays: 4.354761925884471,
            elementCost: 265109,
          },
          decontaminationResults: {
            workDays: 3.952346210124052,
            onSiteDays: 3.952346210124052,
            elementCost: 306772,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 4.882463646513893,
            onSiteDays: 18.09537117470908,
            elementCost: 198057,
          },
          incidentCommandResults: {
            onSiteDays: 540.3017435623586,
            elementCost: 1712949,
          },
          generalResults: {
            totalCost: 10966419,
            areaContaminated: 5812.696894308152,
            decontaminationRounds: 1,
            solidWasteProduced: 50909.192048574165,
            aqueousWasteProduced: 34839.2406803846,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 338.1175700462204,
            onSiteDays: 1193.1002918557142,
            elementCost: 23673559,
          },
          sourceReductionResults: {
            workDays: 26.63957568673675,
            onSiteDays: 26.63957568673675,
            elementCost: 721257,
          },
          decontaminationResults: {
            workDays: 3.788055129067054,
            onSiteDays: 3.788055129067054,
            elementCost: 236961,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 6.502366677909165,
            onSiteDays: 17.72842376306889,
            elementCost: 193182,
          },
          incidentCommandResults: {
            onSiteDays: 1241.256346434587,
            elementCost: 4773303,
          },
          generalResults: {
            totalCost: 29598262,
            areaContaminated: 5812.696894308152,
            decontaminationRounds: 1,
            solidWasteProduced: 20277.489874880226,
            aqueousWasteProduced: 17456.93760074775,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1143.4733000451188,
          onSiteDays: 5273.588238044448,
          elementCost: 102433675,
        },
        sourceReductionResults: {
          workDays: 73.32067536009308,
          onSiteDays: 73.32067536009308,
          elementCost: 776553,
        },
        decontaminationResults: {
          workDays: 3.89546581844228,
          onSiteDays: 3.89546581844228,
          elementCost: 283057,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 27.341679259372373,
          onSiteDays: 50.72650269177852,
          elementCost: 664837,
        },
        incidentCommandResults: {
          onSiteDays: 5401.530881914762,
          elementCost: 17817268,
        },
        generalResults: {
          totalCost: 121975390,
          areaContaminated: 12161.282629743517,
          decontaminationRounds: 1,
          solidWasteProduced: 55213.23727138271,
          aqueousWasteProduced: 72486.6893945259,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 787.9061046102095,
          onSiteDays: 3087.5155284206685,
          elementCost: 57552703,
        },
        sourceReductionResults: {
          workDays: 179.48940442850306,
          onSiteDays: 179.48940442850306,
          elementCost: 2814876,
        },
        decontaminationResults: {
          workDays: 3.661052417163982,
          onSiteDays: 3.661052417163982,
          elementCost: 576405,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 15.722826900264709,
          onSiteDays: 35.02128427183341,
          elementCost: 398426,
        },
        incidentCommandResults: {
          onSiteDays: 3305.6872695381685,
          elementCost: 11773760,
        },
        generalResults: {
          totalCost: 73116170,
          areaContaminated: 12390.156762160917,
          decontaminationRounds: 1,
          solidWasteProduced: 9118.093869320102,
          aqueousWasteProduced: 21555.023652019037,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 17895041.52758814,
        sourceReductionTravelCost: 2000796.304054506,
        decontaminationTravelCost: 154622.50415169317,
        wasteSamplingTravelCost: 116272.77455581292,
        incidentCommandTravelCost: 5161461.432730841,
        totalTravelCost: 25328194.543080997,
      },
      totalEventCost: 280058385.543081,
      totalEventDuration: 11077.299970574828,
      totalContaminationArea: 37597.71464357384,
      totalSolidWasteProduced: 140420.61548661464,
      totalAqueousWasteProduced: 148191.4671539864,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 28.68995346999208,
            onSiteDays: 97.29490380204658,
            elementCost: 3395791,
          },
          sourceReductionResults: {
            workDays: 0.6717601033198397,
            onSiteDays: 0.6717601033198397,
            elementCost: 19195,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 48201,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 97.96666390536642,
            elementCost: 397950,
          },
          generalResults: {
            totalCost: 3861137,
            areaContaminated: 1251.8712741418835,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 206.9912241986446,
            onSiteDays: 491.23240491740097,
            elementCost: 15465293,
          },
          sourceReductionResults: {
            workDays: 11.074276198749681,
            onSiteDays: 11.074276198749681,
            elementCost: 371917,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 181875,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 502.3066811161506,
            elementCost: 1793570,
          },
          generalResults: {
            totalCost: 17812655,
            areaContaminated: 5121.291576034979,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 57.120892937918526,
            onSiteDays: 190.03841147099456,
            elementCost: 4100808,
          },
          sourceReductionResults: {
            workDays: 17.033317514528576,
            onSiteDays: 17.033317514528576,
            elementCost: 465344,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 176043,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 207.07172898552312,
            elementCost: 1004905,
          },
          generalResults: {
            totalCost: 5747100,
            areaContaminated: 5121.291576034979,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 880.4919566862997,
          onSiteDays: 2283.5766045219852,
          elementCost: 88883298,
        },
        sourceReductionResults: {
          workDays: 2.4909783210574146,
          onSiteDays: 2.4909783210574146,
          elementCost: 67178,
        },
        decontaminationResults: {
          workDays: 3.324083113187012,
          onSiteDays: 3.324083113187012,
          elementCost: 455786,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 14.182858443495592,
          onSiteDays: 49.09278095979307,
          elementCost: 511054,
        },
        incidentCommandResults: {
          onSiteDays: 2338.4844469160225,
          elementCost: 7452777,
        },
        generalResults: {
          totalCost: 97370093,
          areaContaminated: 14230.966950820519,
          decontaminationRounds: 1,
          solidWasteProduced: 21504.819007335722,
          aqueousWasteProduced: 11422.30611494212,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1492.9056532583165,
          onSiteDays: 5413.962750364586,
          elementCost: 133926496,
        },
        sourceReductionResults: {
          workDays: 44.12644258855137,
          onSiteDays: 44.12644258855137,
          elementCost: 1024034,
        },
        decontaminationResults: {
          workDays: 4.998858426231625,
          onSiteDays: 4.998858426231625,
          elementCost: 531024,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 22.022386010467798,
          onSiteDays: 67.67081892484265,
          elementCost: 739805,
        },
        incidentCommandResults: {
          onSiteDays: 5530.758870304212,
          elementCost: 22853842,
        },
        generalResults: {
          totalCost: 159075201,
          areaContaminated: 13599.267697756404,
          decontaminationRounds: 1,
          solidWasteProduced: 63537.66145485263,
          aqueousWasteProduced: 97799.41268390745,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 20610498.456198283,
        sourceReductionTravelCost: 185061.8052999101,
        decontaminationTravelCost: 44379.96095271324,
        wasteSamplingTravelCost: 99565.72794587747,
        incidentCommandTravelCost: 2638678.3820696734,
        totalTravelCost: 23578184.33246646,
      },
      totalEventCost: 307444370.3324665,
      totalEventDuration: 8676.588391227275,
      totalContaminationArea: 39324.68907478877,
      totalSolidWasteProduced: 85042.48046218835,
      totalAqueousWasteProduced: 109221.71879884956,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 162.49179985821132,
            onSiteDays: 507.3914559585522,
            elementCost: 15031873,
          },
          sourceReductionResults: {
            workDays: 5.652323908640703,
            onSiteDays: 5.652323908640703,
            elementCost: 100545,
          },
          decontaminationResults: {
            workDays: 3.1436373801305044,
            onSiteDays: 3.1436373801305044,
            elementCost: 251044,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.3557720106421722,
            onSiteDays: 6.037247521094739,
            elementCost: 14330,
          },
          incidentCommandResults: {
            onSiteDays: 522.2246647684182,
            elementCost: 2316187,
          },
          generalResults: {
            totalCost: 17713979,
            areaContaminated: 1845.4548415647914,
            decontaminationRounds: 1,
            solidWasteProduced: 5854.676755206419,
            aqueousWasteProduced: 13475.946313655477,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 187.62650882855382,
            onSiteDays: 2167.599228744046,
            elementCost: 40245220,
          },
          sourceReductionResults: {
            workDays: 5.644962785117151,
            onSiteDays: 5.644962785117151,
            elementCost: 149823,
          },
          decontaminationResults: {
            workDays: 3.5971617932890454,
            onSiteDays: 3.5971617932890454,
            elementCost: 131256,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.0754666386264256,
            onSiteDays: 12.661070133133178,
            elementCost: 112905,
          },
          incidentCommandResults: {
            onSiteDays: 2189.5024234555854,
            elementCost: 7135225,
          },
          generalResults: {
            totalCost: 47774429,
            areaContaminated: 7549.5879882195995,
            decontaminationRounds: 1,
            solidWasteProduced: 2960.6481742180695,
            aqueousWasteProduced: 25628.81145976716,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 390.7151318886801,
            onSiteDays: 2409.898435120831,
            elementCost: 51253239,
          },
          sourceReductionResults: {
            workDays: 24.23377670961859,
            onSiteDays: 24.23377670961859,
            elementCost: 779620,
          },
          decontaminationResults: {
            workDays: 3.0994982598581116,
            onSiteDays: 3.0994982598581116,
            elementCost: 357600,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.549458868684641,
            onSiteDays: 15.899978398296131,
            elementCost: 235580,
          },
          incidentCommandResults: {
            onSiteDays: 2453.131688488604,
            elementCost: 11421867,
          },
          generalResults: {
            totalCost: 64047906,
            areaContaminated: 7549.5879882195995,
            decontaminationRounds: 1,
            solidWasteProduced: 45245.62395008599,
            aqueousWasteProduced: 18602.799043580493,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 2421.979534000258,
          onSiteDays: 5910.452357053745,
          elementCost: 183163085,
        },
        sourceReductionResults: {
          workDays: 16.008950345377176,
          onSiteDays: 16.008950345377176,
          elementCost: 791917,
        },
        decontaminationResults: {
          workDays: 4.206009505597411,
          onSiteDays: 4.206009505597411,
          elementCost: 504241,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.880655282676763,
          onSiteDays: 14.259993762904237,
          elementCost: 214205,
        },
        incidentCommandResults: {
          onSiteDays: 5944.927310667624,
          elementCost: 18539073,
        },
        generalResults: {
          totalCost: 203212521,
          areaContaminated: 17253.429507197212,
          decontaminationRounds: 1,
          solidWasteProduced: 128432.12221139381,
          aqueousWasteProduced: 51485.757640629585,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 835.7449144253037,
          onSiteDays: 7806.685345662279,
          elementCost: 124309670,
        },
        sourceReductionResults: {
          workDays: 102.21317922550843,
          onSiteDays: 102.21317922550843,
          elementCost: 1603690,
        },
        decontaminationResults: {
          workDays: 4.406117354847052,
          onSiteDays: 4.406117354847052,
          elementCost: 773713,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 26.554849235907863,
          onSiteDays: 84.65874494066404,
          elementCost: 883290,
        },
        incidentCommandResults: {
          onSiteDays: 7997.963387183299,
          elementCost: 32709020,
        },
        generalResults: {
          totalCost: 160279383,
          areaContaminated: 14329.917546797615,
          decontaminationRounds: 1,
          solidWasteProduced: 111098.11074193545,
          aqueousWasteProduced: 36516.30439099464,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 98617965.59350526,
        sourceReductionTravelCost: 385570.793223669,
        decontaminationTravelCost: 115110.79291372842,
        wasteSamplingTravelCost: 117128.19517484217,
        incidentCommandTravelCost: 6330330.339705048,
        totalTravelCost: 105566105.71452256,
      },
      totalEventCost: 598594323.7145226,
      totalEventDuration: 19107.74947456353,
      totalContaminationArea: 48527.97787199882,
      totalSolidWasteProduced: 293591.18183283973,
      totalAqueousWasteProduced: 145709.61884862737,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 37.96843332242862,
            onSiteDays: 203.24858656904286,
            elementCost: 5627907,
          },
          sourceReductionResults: {
            workDays: 1.5753129580669274,
            onSiteDays: 1.5753129580669274,
            elementCost: 73823,
          },
          decontaminationResults: {
            workDays: 3.234176211113617,
            onSiteDays: 3.234176211113617,
            elementCost: 252237,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.251831254729789,
            onSiteDays: 10.641778586981452,
            elementCost: 85890,
          },
          incidentCommandResults: {
            onSiteDays: 218.69985432520483,
            elementCost: 759670,
          },
          generalResults: {
            totalCost: 6799527,
            areaContaminated: 1189.1260514624416,
            decontaminationRounds: 1,
            solidWasteProduced: 5323.838740448112,
            aqueousWasteProduced: 8560.322150046559,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 1374.029170415102,
            onSiteDays: 1896.2760994265477,
            elementCost: 61614798,
          },
          sourceReductionResults: {
            workDays: 12.958628986874615,
            onSiteDays: 12.958628986874615,
            elementCost: 447726,
          },
          decontaminationResults: {
            workDays: 3.013087226080961,
            onSiteDays: 3.013087226080961,
            elementCost: 286111,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.3636119391920043,
            onSiteDays: 10.38263431506068,
            elementCost: 72648,
          },
          incidentCommandResults: {
            onSiteDays: 1922.6304499545638,
            elementCost: 8381910,
          },
          generalResults: {
            totalCost: 70803193,
            areaContaminated: 4864.606574164533,
            decontaminationRounds: 1,
            solidWasteProduced: 28054.476134072236,
            aqueousWasteProduced: 32016.02196546354,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 343.5537785402147,
            onSiteDays: 1121.9635202379272,
            elementCost: 38593039,
          },
          sourceReductionResults: {
            workDays: 7.139810681972273,
            onSiteDays: 7.139810681972273,
            elementCost: 218605,
          },
          decontaminationResults: {
            workDays: 3.9125023747124947,
            onSiteDays: 3.9125023747124947,
            elementCost: 389582,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.981895671945629,
            onSiteDays: 13.689803340726165,
            elementCost: 139022,
          },
          incidentCommandResults: {
            onSiteDays: 1146.7056366353381,
            elementCost: 4907816,
          },
          generalResults: {
            totalCost: 44248064,
            areaContaminated: 4864.606574164533,
            decontaminationRounds: 1,
            solidWasteProduced: 27239.044259003746,
            aqueousWasteProduced: 1302.6589955855532,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 566.7784308970481,
          onSiteDays: 4325.432742234909,
          elementCost: 144345582,
        },
        sourceReductionResults: {
          workDays: 63.17539159452597,
          onSiteDays: 63.17539159452597,
          elementCost: 1353243,
        },
        decontaminationResults: {
          workDays: 3.191235068298698,
          onSiteDays: 3.191235068298698,
          elementCost: 509591,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.110826181079427,
          onSiteDays: 10.667252667224577,
          elementCost: 108263,
        },
        incidentCommandResults: {
          onSiteDays: 4402.466621564958,
          elementCost: 17117778,
        },
        generalResults: {
          totalCost: 163434457,
          areaContaminated: 18649.298739305068,
          decontaminationRounds: 1,
          solidWasteProduced: 9055.486599676464,
          aqueousWasteProduced: 72380.60999974783,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 303.8354934306733,
          onSiteDays: 1857.5798262147227,
          elementCost: 68459393,
        },
        sourceReductionResults: {
          workDays: 84.01425997027042,
          onSiteDays: 84.01425997027042,
          elementCost: 1388202,
        },
        decontaminationResults: {
          workDays: 3.608719888750631,
          onSiteDays: 3.608719888750631,
          elementCost: 342342,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 14.870180344553782,
          onSiteDays: 47.0115190241744,
          elementCost: 486932,
        },
        incidentCommandResults: {
          onSiteDays: 1992.2143250979182,
          elementCost: 8431146,
        },
        generalResults: {
          totalCost: 79108015,
          areaContaminated: 10323.681931547624,
          decontaminationRounds: 1,
          solidWasteProduced: 89962.70958607932,
          aqueousWasteProduced: 67342.81427205398,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 37826769.88382815,
        sourceReductionTravelCost: 1159158.241074426,
        decontaminationTravelCost: 169974.91382259454,
        wasteSamplingTravelCost: 77596.80033983382,
        incidentCommandTravelCost: 4946079.490925371,
        totalTravelCost: 44179579.32999037,
      },
      totalEventCost: 408572835.3299904,
      totalEventDuration: 9682.716887577983,
      totalContaminationArea: 39891.319870644205,
      totalSolidWasteProduced: 159635.55531927987,
      totalAqueousWasteProduced: 181602.42738289747,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 88.51100028102152,
            onSiteDays: 228.87339875270118,
            elementCost: 6196844,
          },
          sourceReductionResults: {
            workDays: 19.63449702829942,
            onSiteDays: 19.63449702829942,
            elementCost: 404575,
          },
          decontaminationResults: {
            workDays: 3.4422496935451052,
            onSiteDays: 3.4422496935451052,
            elementCost: 188938,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.2564564187069813,
            onSiteDays: 9.266387854184536,
            elementCost: 39999,
          },
          incidentCommandResults: {
            onSiteDays: 261.21653332873024,
            elementCost: 1282008,
          },
          generalResults: {
            totalCost: 8112364,
            areaContaminated: 1965.2878764260274,
            decontaminationRounds: 1,
            solidWasteProduced: 18222.970325515493,
            aqueousWasteProduced: 7484.828040841589,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 249.02461267271997,
            onSiteDays: 935.492765210613,
            elementCost: 47439036,
          },
          sourceReductionResults: {
            workDays: 17.71107486436544,
            onSiteDays: 17.71107486436544,
            elementCost: 554729,
          },
          decontaminationResults: {
            workDays: 3.3757723584714747,
            onSiteDays: 3.3757723584714747,
            elementCost: 141174,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 4.127270826220804,
            onSiteDays: 19.078280076389824,
            elementCost: 148685,
          },
          incidentCommandResults: {
            onSiteDays: 975.6578925098397,
            elementCost: 4615589,
          },
          generalResults: {
            totalCost: 52899213,
            areaContaminated: 8039.814039924658,
            decontaminationRounds: 1,
            solidWasteProduced: 4017.843385784445,
            aqueousWasteProduced: 28079.72754926749,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 1949.6531393536177,
            onSiteDays: 3820.2302188529206,
            elementCost: 118123150,
          },
          sourceReductionResults: {
            workDays: 15.82403920040029,
            onSiteDays: 15.82403920040029,
            elementCost: 585200,
          },
          decontaminationResults: {
            workDays: 3.3008650392994436,
            onSiteDays: 3.3008650392994436,
            elementCost: 314197,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.3989874275604384,
            onSiteDays: 6.659687624641543,
            elementCost: 17358,
          },
          incidentCommandResults: {
            onSiteDays: 3846.014810717262,
            elementCost: 13180556,
          },
          generalResults: {
            totalCost: 132220461,
            areaContaminated: 8039.814039924658,
            decontaminationRounds: 1,
            solidWasteProduced: 56978.49960304764,
            aqueousWasteProduced: 20549.513421507167,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 4339.524509225235,
          onSiteDays: 6674.2828977143745,
          elementCost: 174689123,
        },
        sourceReductionResults: {
          workDays: 84.62127818042626,
          onSiteDays: 84.62127818042626,
          elementCost: 1905958,
        },
        decontaminationResults: {
          workDays: 3.6228567479697187,
          onSiteDays: 3.6228567479697187,
          elementCost: 196669,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 7.834896786634822,
          onSiteDays: 27.22974027610069,
          elementCost: 300549,
        },
        incidentCommandResults: {
          onSiteDays: 6789.75677291887,
          elementCost: 28874612,
        },
        generalResults: {
          totalCost: 205966911,
          areaContaminated: 19057.28818128288,
          decontaminationRounds: 1,
          solidWasteProduced: 22614.562268879276,
          aqueousWasteProduced: 32532.84431549992,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 460.25526018199747,
          onSiteDays: 1478.9135298892152,
          elementCost: 94537116,
        },
        sourceReductionResults: {
          workDays: 54.15000531765002,
          onSiteDays: 54.15000531765002,
          elementCost: 1196058,
        },
        decontaminationResults: {
          workDays: 4.618662328370535,
          onSiteDays: 4.618662328370535,
          elementCost: 479889,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.683677576310373,
          onSiteDays: 11.05141501923907,
          elementCost: 117011,
        },
        incidentCommandResults: {
          onSiteDays: 1548.733612554475,
          elementCost: 5921974,
        },
        generalResults: {
          totalCost: 102252048,
          areaContaminated: 17277.659730521293,
          decontaminationRounds: 1,
          solidWasteProduced: 121909.13853899673,
          aqueousWasteProduced: 58242.4976258902,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 34142978.48488128,
        sourceReductionTravelCost: 1186163.9615750634,
        decontaminationTravelCost: 203294.64966773207,
        wasteSamplingTravelCost: 64069.3578952372,
        incidentCommandTravelCost: 7125985.397151359,
        totalTravelCost: 42722491.851170674,
      },
      totalEventCost: 544173488.8511707,
      totalEventDuration: 13421.379622029177,
      totalContaminationArea: 54379.86386807951,
      totalSolidWasteProduced: 223743.0141222236,
      totalAqueousWasteProduced: 146889.41095300636,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 21.81910518578628,
            onSiteDays: 67.54525478041114,
            elementCost: 2520327,
          },
          sourceReductionResults: {
            workDays: 1.2445942489787232,
            onSiteDays: 1.2445942489787232,
            elementCost: 47510,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 29024,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 68.78984902938987,
            elementCost: 230648,
          },
          generalResults: {
            totalCost: 2827509,
            areaContaminated: 1137.0280930799756,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 211.16594882053425,
            onSiteDays: 829.798767741075,
            elementCost: 22468089,
          },
          sourceReductionResults: {
            workDays: 2.7381281794172354,
            onSiteDays: 2.7381281794172354,
            elementCost: 85678,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 31898,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 832.5368959204923,
            elementCost: 3262678,
          },
          generalResults: {
            totalCost: 25848343,
            areaContaminated: 4651.478562599902,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 37.6588889286015,
            onSiteDays: 273.32922413612744,
            elementCost: 5528281,
          },
          sourceReductionResults: {
            workDays: 50.151376975485334,
            onSiteDays: 50.151376975485334,
            elementCost: 1111818,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 146122,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 323.48060111161277,
            elementCost: 1172845,
          },
          generalResults: {
            totalCost: 7959066,
            areaContaminated: 4651.478562599902,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 867.3878725859604,
          onSiteDays: 4670.835721202521,
          elementCost: 155787786,
        },
        sourceReductionResults: {
          workDays: 4.301870396608415,
          onSiteDays: 4.301870396608415,
          elementCost: 172407,
        },
        decontaminationResults: {
          workDays: 3.0464533679295456,
          onSiteDays: 3.0464533679295456,
          elementCost: 856374,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.8002025018747536,
          onSiteDays: 7.503274244080117,
          elementCost: 46681,
        },
        incidentCommandResults: {
          onSiteDays: 4685.687319211139,
          elementCost: 17397212,
        },
        generalResults: {
          totalCost: 174260460,
          areaContaminated: 18973.187298740537,
          decontaminationRounds: 1,
          solidWasteProduced: 57057.183923137825,
          aqueousWasteProduced: 39442.49139762615,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 380.37300539272746,
          onSiteDays: 4961.542550370832,
          elementCost: 79021605,
        },
        sourceReductionResults: {
          workDays: 7.705098710215269,
          onSiteDays: 7.705098710215269,
          elementCost: 243519,
        },
        decontaminationResults: {
          workDays: 4.092283664525553,
          onSiteDays: 4.092283664525553,
          elementCost: 232845,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.12216477618192,
          onSiteDays: 22.88714315105596,
          elementCost: 291284,
        },
        incidentCommandResults: {
          onSiteDays: 4996.22707589663,
          elementCost: 15898738,
        },
        generalResults: {
          totalCost: 95687991,
          areaContaminated: 18095.004545386262,
          decontaminationRounds: 1,
          solidWasteProduced: 9413.452725010231,
          aqueousWasteProduced: 28797.465883421908,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 26298393.32344894,
        sourceReductionTravelCost: 99766.41161069064,
        decontaminationTravelCost: 94059.8901221403,
        wasteSamplingTravelCost: 31936.202043136745,
        incidentCommandTravelCost: 6935556.844001771,
        totalTravelCost: 33459712.67122668,
      },
      totalEventCost: 340043081.6712267,
      totalEventDuration: 10906.721741169264,
      totalContaminationArea: 47508.17706240658,
      totalSolidWasteProduced: 66470.63664814805,
      totalAqueousWasteProduced: 68239.95728104806,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 70.54953975243271,
            onSiteDays: 229.80833352414837,
            elementCost: 8261238,
          },
          sourceReductionResults: {
            workDays: 8.973800495432707,
            onSiteDays: 8.973800495432707,
            elementCost: 375835,
          },
          decontaminationResults: {
            workDays: 3.6811816586836197,
            onSiteDays: 3.6811816586836197,
            elementCost: 111138,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.0058521962615126,
            onSiteDays: 6.8392372403095525,
            elementCost: 24951,
          },
          incidentCommandResults: {
            onSiteDays: 249.30255291857424,
            elementCost: 799288,
          },
          generalResults: {
            totalCost: 9572450,
            areaContaminated: 1440.6230099737998,
            decontaminationRounds: 1,
            solidWasteProduced: 11250.256642166845,
            aqueousWasteProduced: 865.0645535423719,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 163.62743773651025,
            onSiteDays: 2043.0397828963673,
            elementCost: 33210242,
          },
          sourceReductionResults: {
            workDays: 28.00140626720235,
            onSiteDays: 28.00140626720235,
            elementCost: 406684,
          },
          decontaminationResults: {
            workDays: 4.035263053382575,
            onSiteDays: 4.035263053382575,
            elementCost: 424364,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.101096837840123,
            onSiteDays: 19.316180506618203,
            elementCost: 197655,
          },
          incidentCommandResults: {
            onSiteDays: 2094.3926327235704,
            elementCost: 7656459,
          },
          generalResults: {
            totalCost: 41895404,
            areaContaminated: 5893.457768074637,
            decontaminationRounds: 1,
            solidWasteProduced: 38600.97446939526,
            aqueousWasteProduced: 35170.917345807495,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 348.3545833408476,
            onSiteDays: 1425.0667929609647,
            elementCost: 41277305,
          },
          sourceReductionResults: {
            workDays: 10.681110825608092,
            onSiteDays: 10.681110825608092,
            elementCost: 399341,
          },
          decontaminationResults: {
            workDays: 3.8624935543310115,
            onSiteDays: 3.8624935543310115,
            elementCost: 270944,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.1333668553839287,
            onSiteDays: 6.45288093827061,
            elementCost: 29871,
          },
          incidentCommandResults: {
            onSiteDays: 1446.0632782791745,
            elementCost: 5058866,
          },
          generalResults: {
            totalCost: 47036327,
            areaContaminated: 5893.457768074637,
            decontaminationRounds: 1,
            solidWasteProduced: 53054.45522721997,
            aqueousWasteProduced: 22384.972539305913,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1725.8325297546753,
          onSiteDays: 4371.169852319758,
          elementCost: 135936619,
        },
        sourceReductionResults: {
          workDays: 80.81005706216476,
          onSiteDays: 80.81005706216476,
          elementCost: 2564152,
        },
        decontaminationResults: {
          workDays: 3.1109196194705833,
          onSiteDays: 3.1109196194705833,
          elementCost: 683845,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 18.690366836574977,
          onSiteDays: 62.46482069480642,
          elementCost: 688717,
        },
        incidentCommandResults: {
          onSiteDays: 4517.5556496962,
          elementCost: 14233615,
        },
        generalResults: {
          totalCost: 154106948,
          areaContaminated: 18149.25334140408,
          decontaminationRounds: 1,
          solidWasteProduced: 160452.65918429298,
          aqueousWasteProduced: 86894.45387866914,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 2034.3049327219783,
          onSiteDays: 3879.076066216666,
          elementCost: 120812804,
        },
        sourceReductionResults: {
          workDays: 9.82402345906355,
          onSiteDays: 9.82402345906355,
          elementCost: 499606,
        },
        decontaminationResults: {
          workDays: 4.658926637763839,
          onSiteDays: 4.658926637763839,
          elementCost: 454727,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 6.193907241771747,
          onSiteDays: 20.832104799120067,
          elementCost: 238859,
        },
        incidentCommandResults: {
          onSiteDays: 3914.391121112613,
          elementCost: 15637816,
        },
        generalResults: {
          totalCost: 137643812,
          areaContaminated: 18330.847789255087,
          decontaminationRounds: 1,
          solidWasteProduced: 61819.92474437708,
          aqueousWasteProduced: 36995.307277984284,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 39964554.17609357,
        sourceReductionTravelCost: 395102.7586322876,
        decontaminationTravelCost: 111246.86023887998,
        wasteSamplingTravelCost: 83217.78985212829,
        incidentCommandTravelCost: 3773492.003664029,
        totalTravelCost: 44327613.5884809,
      },
      totalEventCost: 434582554.5884809,
      totalEventDuration: 12221.70523473013,
      totalContaminationArea: 49707.639676782244,
      totalSolidWasteProduced: 325178.2702674522,
      totalAqueousWasteProduced: 182310.7155953092,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 8.904414775627615,
            onSiteDays: 44.091784361087946,
            elementCost: 1256454,
          },
          sourceReductionResults: {
            workDays: 3.317594144705744,
            onSiteDays: 3.317594144705744,
            elementCost: 145196,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 26555,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 47.40937850579369,
            elementCost: 222569,
          },
          generalResults: {
            totalCost: 1650774,
            areaContaminated: 1163.6713390051925,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 445.64462068111436,
            onSiteDays: 750.3744608823092,
            elementCost: 20492764,
          },
          sourceReductionResults: {
            workDays: 1.911951334635595,
            onSiteDays: 1.911951334635595,
            elementCost: 30778,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 174266,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 752.2864122169448,
            elementCost: 3630207,
          },
          generalResults: {
            totalCost: 24328015,
            areaContaminated: 4760.473659566696,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 94.57529429213449,
            onSiteDays: 264.6800913732458,
            elementCost: 7427042,
          },
          sourceReductionResults: {
            workDays: 1.3885116491259606,
            onSiteDays: 1.3885116491259606,
            elementCost: 31899,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 176226,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 266.06860302237175,
            elementCost: 909087,
          },
          generalResults: {
            totalCost: 8544254,
            areaContaminated: 4760.473659566696,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 408.3825603075887,
          onSiteDays: 2139.2190414745082,
          elementCost: 84135349,
        },
        sourceReductionResults: {
          workDays: 39.621183904253456,
          onSiteDays: 39.621183904253456,
          elementCost: 1230140,
        },
        decontaminationResults: {
          workDays: 4.30374144234316,
          onSiteDays: 4.30374144234316,
          elementCost: 634388,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.178229001941854,
          onSiteDays: 7.8603434516542094,
          elementCost: 51798,
        },
        incidentCommandResults: {
          onSiteDays: 2191.004310272759,
          elementCost: 10177399,
        },
        generalResults: {
          totalCost: 96229074,
          areaContaminated: 12881.112653501588,
          decontaminationRounds: 1,
          solidWasteProduced: 44129.78776861787,
          aqueousWasteProduced: 17276.636540246778,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1469.3536474603175,
          onSiteDays: 3607.921640237585,
          elementCost: 80753194,
        },
        sourceReductionResults: {
          workDays: 6.905782910156371,
          onSiteDays: 6.905782910156371,
          elementCost: 333279,
        },
        decontaminationResults: {
          workDays: 4.556497357216779,
          onSiteDays: 4.556497357216779,
          elementCost: 332436,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.114264053469383,
          onSiteDays: 19.48123278149822,
          elementCost: 207258,
        },
        incidentCommandResults: {
          onSiteDays: 3638.8651532864565,
          elementCost: 12568406,
        },
        generalResults: {
          totalCost: 94194573,
          areaContaminated: 10415.160146805563,
          decontaminationRounds: 1,
          solidWasteProduced: 40086.36076060061,
          aqueousWasteProduced: 42321.50411674187,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 4631535.614518854,
        sourceReductionTravelCost: 200992.39937762733,
        decontaminationTravelCost: 85325.09255530704,
        wasteSamplingTravelCost: 18393.585139365277,
        incidentCommandTravelCost: 2644024.8716278654,
        totalTravelCost: 7580271.563219018,
      },
      totalEventCost: 232526961.563219,
      totalEventDuration: 6895.633857304326,
      totalContaminationArea: 33980.89145844574,
      totalSolidWasteProduced: 84216.14852921848,
      totalAqueousWasteProduced: 59598.140656988646,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 141.4043572483389,
            onSiteDays: 311.4878666766333,
            elementCost: 12478883,
          },
          sourceReductionResults: {
            workDays: 2.605295038512442,
            onSiteDays: 2.605295038512442,
            elementCost: 104359,
          },
          decontaminationResults: {
            workDays: 4.072950934309734,
            onSiteDays: 4.072950934309734,
            elementCost: 325309,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.2308088920856062,
            onSiteDays: 7.065754681460111,
            elementCost: 39057,
          },
          incidentCommandResults: {
            onSiteDays: 325.23186733091563,
            elementCost: 1403296,
          },
          generalResults: {
            totalCost: 14350904,
            areaContaminated: 1131.5404620137626,
            decontaminationRounds: 1,
            solidWasteProduced: 3284.412177769083,
            aqueousWasteProduced: 4775.200013507869,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 182.00946418008718,
            onSiteDays: 958.7550460042166,
            elementCost: 36091490,
          },
          sourceReductionResults: {
            workDays: 20.768509263887506,
            onSiteDays: 20.768509263887506,
            elementCost: 706563,
          },
          decontaminationResults: {
            workDays: 3.648110176587503,
            onSiteDays: 3.648110176587503,
            elementCost: 280620,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.3511895670167227,
            onSiteDays: 14.051805800926841,
            elementCost: 95961,
          },
          incidentCommandResults: {
            onSiteDays: 997.2234712456184,
            elementCost: 4637837,
          },
          generalResults: {
            totalCost: 41812471,
            areaContaminated: 4629.029162783574,
            decontaminationRounds: 1,
            solidWasteProduced: 30682.105327925794,
            aqueousWasteProduced: 21109.61069518928,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 361.50681912780607,
            onSiteDays: 757.2735808499647,
            elementCost: 31597921,
          },
          sourceReductionResults: {
            workDays: 6.812916343020064,
            onSiteDays: 6.812916343020064,
            elementCost: 152029,
          },
          decontaminationResults: {
            workDays: 4.209599201849103,
            onSiteDays: 4.209599201849103,
            elementCost: 240341,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 6.11755588613844,
            onSiteDays: 22.676392580739975,
            elementCost: 251738,
          },
          incidentCommandResults: {
            onSiteDays: 790.9724889755738,
            elementCost: 3217124,
          },
          generalResults: {
            totalCost: 35459153,
            areaContaminated: 4629.029162783574,
            decontaminationRounds: 1,
            solidWasteProduced: 38574.62022425578,
            aqueousWasteProduced: 31223.568633438947,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 895.4763067362944,
          onSiteDays: 2006.0138873089745,
          elementCost: 63541485,
        },
        sourceReductionResults: {
          workDays: 17.107832512285167,
          onSiteDays: 17.107832512285167,
          elementCost: 418871,
        },
        decontaminationResults: {
          workDays: 4.799629596015352,
          onSiteDays: 4.799629596015352,
          elementCost: 521257,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 14.590340989662188,
          onSiteDays: 34.976093334315806,
          elementCost: 585135,
        },
        incidentCommandResults: {
          onSiteDays: 2062.897442751591,
          elementCost: 9741093,
        },
        generalResults: {
          totalCost: 74807841,
          areaContaminated: 11341.127057406382,
          decontaminationRounds: 1,
          solidWasteProduced: 55384.372218079836,
          aqueousWasteProduced: 13033.867374845575,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1239.8293456576337,
          onSiteDays: 4514.303948698791,
          elementCost: 119050751,
        },
        sourceReductionResults: {
          workDays: 38.56219732810662,
          onSiteDays: 38.56219732810662,
          elementCost: 1271101,
        },
        decontaminationResults: {
          workDays: 4.586085547596702,
          onSiteDays: 4.586085547596702,
          elementCost: 624091,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 16.00938672200378,
          onSiteDays: 63.334437678971796,
          elementCost: 561948,
        },
        incidentCommandResults: {
          onSiteDays: 4620.786669253466,
          elementCost: 14777598,
        },
        generalResults: {
          totalCost: 136285489,
          areaContaminated: 12446.218147668409,
          decontaminationRounds: 1,
          solidWasteProduced: 110419.1807981434,
          aqueousWasteProduced: 31816.754080521274,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 22311191.99985406,
        sourceReductionTravelCost: 70338.26189031432,
        decontaminationTravelCost: 204991.20756474815,
        wasteSamplingTravelCost: 92021.0049354634,
        incidentCommandTravelCost: 2511543.7840828244,
        totalTravelCost: 25190086.25832741,
      },
      totalEventCost: 327905944.2583274,
      totalEventDuration: 8797.111939557166,
      totalContaminationArea: 34176.9439926557,
      totalSolidWasteProduced: 238344.6907461739,
      totalAqueousWasteProduced: 101959.00079750294,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 32.66800146260741,
            onSiteDays: 317.25046649467185,
            elementCost: 7563508,
          },
          sourceReductionResults: {
            workDays: 0.9656160694047421,
            onSiteDays: 0.9656160694047421,
            elementCost: 28248,
          },
          decontaminationResults: {
            workDays: 4.985878920644959,
            onSiteDays: 4.985878920644959,
            elementCost: 403349,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7833510472386752,
            onSiteDays: 8.567623021896798,
            elementCost: 28568,
          },
          incidentCommandResults: {
            onSiteDays: 331.76958450661834,
            elementCost: 1481862,
          },
          generalResults: {
            totalCost: 9505535,
            areaContaminated: 1190.6868700132027,
            decontaminationRounds: 1,
            solidWasteProduced: 8518.772982096083,
            aqueousWasteProduced: 4665.174241530695,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 316.91641468567923,
            onSiteDays: 865.122034169181,
            elementCost: 31657376,
          },
          sourceReductionResults: {
            workDays: 7.5323800814811674,
            onSiteDays: 7.5323800814811674,
            elementCost: 205758,
          },
          decontaminationResults: {
            workDays: 4.679531079176704,
            onSiteDays: 4.679531079176704,
            elementCost: 409064,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.583948831334865,
            onSiteDays: 11.325020017511505,
            elementCost: 142906,
          },
          incidentCommandResults: {
            onSiteDays: 888.6589653473504,
            elementCost: 4065996,
          },
          generalResults: {
            totalCost: 36481100,
            areaContaminated: 4870.991740963102,
            decontaminationRounds: 1,
            solidWasteProduced: 2697.4929357578385,
            aqueousWasteProduced: 12185.616628092861,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 217.59385703319992,
            onSiteDays: 560.1100314487403,
            elementCost: 24765176,
          },
          sourceReductionResults: {
            workDays: 2.139918137804064,
            onSiteDays: 2.139918137804064,
            elementCost: 82551,
          },
          decontaminationResults: {
            workDays: 3.4952299158310587,
            onSiteDays: 3.4952299158310587,
            elementCost: 363506,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.040448334781137,
            onSiteDays: 13.549449948242149,
            elementCost: 183041,
          },
          incidentCommandResults: {
            onSiteDays: 579.2946294506175,
            elementCost: 2480005,
          },
          generalResults: {
            totalCost: 27874279,
            areaContaminated: 4870.991740963102,
            decontaminationRounds: 1,
            solidWasteProduced: 7185.817845893968,
            aqueousWasteProduced: 18499.149142521466,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 520.1190035822165,
          onSiteDays: 2419.6530295427306,
          elementCost: 82711930,
        },
        sourceReductionResults: {
          workDays: 146.70012451196084,
          onSiteDays: 146.70012451196084,
          elementCost: 2867515,
        },
        decontaminationResults: {
          workDays: 3.7017406003320916,
          onSiteDays: 3.7017406003320916,
          elementCost: 541883,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 36.189993076633,
          onSiteDays: 85.6426652381341,
          elementCost: 875146,
        },
        incidentCommandResults: {
          onSiteDays: 2655.6975598931576,
          elementCost: 8641467,
        },
        generalResults: {
          totalCost: 95637941,
          areaContaminated: 12770.246547360497,
          decontaminationRounds: 1,
          solidWasteProduced: 22727.58374423976,
          aqueousWasteProduced: 2595.515694815116,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 426.6989744773439,
          onSiteDays: 1856.112979994074,
          elementCost: 84162970,
        },
        sourceReductionResults: {
          workDays: 11.966552363083508,
          onSiteDays: 11.966552363083508,
          elementCost: 254371,
        },
        decontaminationResults: {
          workDays: 4.412981132374373,
          onSiteDays: 4.412981132374373,
          elementCost: 171082,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 31.34227711387024,
          onSiteDays: 67.25501656763662,
          elementCost: 869361,
        },
        incidentCommandResults: {
          onSiteDays: 1939.7475300571687,
          elementCost: 7777170,
        },
        generalResults: {
          totalCost: 93234954,
          areaContaminated: 17116.160133167992,
          decontaminationRounds: 1,
          solidWasteProduced: 111779.7269935039,
          aqueousWasteProduced: 123590.08442326316,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 32889518.191042945,
        sourceReductionTravelCost: 284230.6937059333,
        decontaminationTravelCost: 77509.63477659025,
        wasteSamplingTravelCost: 134533.67560003363,
        incidentCommandTravelCost: 1932482.4690714062,
        totalTravelCost: 35318274.66419691,
      },
      totalEventCost: 298052083.6641969,
      totalEventDuration: 6395.168269254913,
      totalContaminationArea: 40819.077032467896,
      totalSolidWasteProduced: 152909.39450149154,
      totalAqueousWasteProduced: 161535.54013022332,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 58.39440918564512,
            onSiteDays: 181.22385616507182,
            elementCost: 4780129,
          },
          sourceReductionResults: {
            workDays: 3.118681924673489,
            onSiteDays: 3.118681924673489,
            elementCost: 135167,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 47952,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 184.34253808974532,
            elementCost: 773306,
          },
          generalResults: {
            totalCost: 5736554,
            areaContaminated: 1480.1520004252855,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 115.10535354474348,
            onSiteDays: 1234.8323847154647,
            elementCost: 14044671,
          },
          sourceReductionResults: {
            workDays: 84.8935454809369,
            onSiteDays: 84.8935454809369,
            elementCost: 1547409,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 51554,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1319.7259301964016,
            elementCost: 5757639,
          },
          generalResults: {
            totalCost: 21401273,
            areaContaminated: 6055.167274467077,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 441.24208392673313,
            onSiteDays: 1565.5813945288257,
            elementCost: 31374160,
          },
          sourceReductionResults: {
            workDays: 3.6951008571002237,
            onSiteDays: 3.6951008571002237,
            elementCost: 68371,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 236769,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1569.276495385926,
            elementCost: 5690782,
          },
          generalResults: {
            totalCost: 37370082,
            areaContaminated: 6055.167274467077,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1450.0668522819574,
          onSiteDays: 7919.983246508327,
          elementCost: 180379688,
        },
        sourceReductionResults: {
          workDays: 2.061849474503632,
          onSiteDays: 2.061849474503632,
          elementCost: 77405,
        },
        decontaminationResults: {
          workDays: 3.6079173550493824,
          onSiteDays: 3.6079173550493824,
          elementCost: 411619,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.408794883481225,
          onSiteDays: 44.44745224469878,
          elementCost: 451774,
        },
        incidentCommandResults: {
          onSiteDays: 7970.10046558258,
          elementCost: 36336986,
        },
        generalResults: {
          totalCost: 217657472,
          areaContaminated: 18243.585903719904,
          decontaminationRounds: 1,
          solidWasteProduced: 43587.49502513997,
          aqueousWasteProduced: 114118.12342209856,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 4768.635786434205,
          onSiteDays: 9176.245925943109,
          elementCost: 124855309,
        },
        sourceReductionResults: {
          workDays: 49.6480498581039,
          onSiteDays: 49.6480498581039,
          elementCost: 2309829,
        },
        decontaminationResults: {
          workDays: 3.3489064933613193,
          onSiteDays: 3.3489064933613193,
          elementCost: 626698,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.07441700297999,
          onSiteDays: 32.88364504419382,
          elementCost: 291678,
        },
        incidentCommandResults: {
          onSiteDays: 9262.126527338769,
          elementCost: 30797198,
        },
        generalResults: {
          totalCost: 158880712,
          areaContaminated: 16680.51003417224,
          decontaminationRounds: 1,
          solidWasteProduced: 127481.87902184566,
          aqueousWasteProduced: 83080.10189786638,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 100933710.80084059,
        sourceReductionTravelCost: 342979.09342410846,
        decontaminationTravelCost: 55095.71528938928,
        wasteSamplingTravelCost: 44632.14818874697,
        incidentCommandTravelCost: 5891104.470774451,
        totalTravelCost: 107267522.22851728,
      },
      totalEventCost: 548313615.2285173,
      totalEventDuration: 20305.57195659342,
      totalContaminationArea: 48514.58248725158,
      totalSolidWasteProduced: 171069.37404698564,
      totalAqueousWasteProduced: 197198.22531996493,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 165.47336868020017,
            onSiteDays: 306.93667991040525,
            elementCost: 10855502,
          },
          sourceReductionResults: {
            workDays: 1.1456346920150469,
            onSiteDays: 1.1456346920150469,
            elementCost: 41335,
          },
          decontaminationResults: {
            workDays: 4.61335929800136,
            onSiteDays: 4.61335929800136,
            elementCost: 289285,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.337519062109428,
            onSiteDays: 5.903707902440659,
            elementCost: 13590,
          },
          incidentCommandResults: {
            onSiteDays: 318.5993818028623,
            elementCost: 1455217,
          },
          generalResults: {
            totalCost: 12654929,
            areaContaminated: 1231.8064553321265,
            decontaminationRounds: 1,
            solidWasteProduced: 1635.0766064265617,
            aqueousWasteProduced: 1125.7217723568779,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 196.6171400073266,
            onSiteDays: 1048.58167436998,
            elementCost: 26455603,
          },
          sourceReductionResults: {
            workDays: 0.07138909188352813,
            onSiteDays: 0.07138909188352813,
            elementCost: 5432,
          },
          decontaminationResults: {
            workDays: 4.674338466877662,
            onSiteDays: 4.674338466877662,
            elementCost: 269483,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.694848458598091,
            onSiteDays: 14.79591272344209,
            elementCost: 219073,
          },
          incidentCommandResults: {
            onSiteDays: 1068.1233146521834,
            elementCost: 3449679,
          },
          generalResults: {
            totalCost: 30399270,
            areaContaminated: 5039.208226358698,
            decontaminationRounds: 1,
            solidWasteProduced: 38699.42205781687,
            aqueousWasteProduced: 400.2608556565077,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 350.6348642550197,
            onSiteDays: 900.1668523353569,
            elementCost: 21330737,
          },
          sourceReductionResults: {
            workDays: 16.889993950443646,
            onSiteDays: 16.889993950443646,
            elementCost: 336811,
          },
          decontaminationResults: {
            workDays: 4.206046381780423,
            onSiteDays: 4.206046381780423,
            elementCost: 395737,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 6.246621066901127,
            onSiteDays: 18.549953878399105,
            elementCost: 168246,
          },
          incidentCommandResults: {
            onSiteDays: 939.8128465459802,
            elementCost: 3420251,
          },
          generalResults: {
            totalCost: 25651782,
            areaContaminated: 5039.208226358698,
            decontaminationRounds: 1,
            solidWasteProduced: 18034.633714228865,
            aqueousWasteProduced: 29474.96820826557,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 776.8137111342177,
          onSiteDays: 2202.5703034347216,
          elementCost: 85539824,
        },
        sourceReductionResults: {
          workDays: 0.3853207661544582,
          onSiteDays: 0.3853207661544582,
          elementCost: 11229,
        },
        decontaminationResults: {
          workDays: 3.9498131319297975,
          onSiteDays: 3.9498131319297975,
          elementCost: 320813,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.697416746710617,
          onSiteDays: 79.74594638712564,
          elementCost: 567147,
        },
        incidentCommandResults: {
          onSiteDays: 2286.6513837199313,
          elementCost: 8685725,
        },
        generalResults: {
          totalCost: 95124738,
          areaContaminated: 11985.398871355084,
          decontaminationRounds: 1,
          solidWasteProduced: 38933.08071153301,
          aqueousWasteProduced: 23345.80946377505,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 2351.645069340042,
          onSiteDays: 6287.0848316978645,
          elementCost: 183636873,
        },
        sourceReductionResults: {
          workDays: 64.04841604611158,
          onSiteDays: 64.04841604611158,
          elementCost: 1105963,
        },
        decontaminationResults: {
          workDays: 4.318400102043152,
          onSiteDays: 4.318400102043152,
          elementCost: 1013348,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.383593687273867,
          onSiteDays: 39.27871580532023,
          elementCost: 315044,
        },
        incidentCommandResults: {
          onSiteDays: 6394.730363651341,
          elementCost: 28819575,
        },
        generalResults: {
          totalCost: 214890803,
          areaContaminated: 18552.729949194745,
          decontaminationRounds: 1,
          solidWasteProduced: 146218.23530244015,
          aqueousWasteProduced: 6392.61356281216,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 78158613.31402223,
        sourceReductionTravelCost: 758581.3685705267,
        decontaminationTravelCost: 218958.5792286681,
        wasteSamplingTravelCost: 149721.11335523162,
        incidentCommandTravelCost: 5353701.565944525,
        totalTravelCost: 84639575.94112118,
      },
      totalEventCost: 463361097.94112116,
      totalEventDuration: 11007.917290372297,
      totalContaminationArea: 41848.35172859936,
      totalSolidWasteProduced: 243520.44839244545,
      totalAqueousWasteProduced: 60739.373862866174,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 162.15925529429586,
            onSiteDays: 387.5970710391659,
            elementCost: 10731198,
          },
          sourceReductionResults: {
            workDays: 4.846006519873166,
            onSiteDays: 4.846006519873166,
            elementCost: 106774,
          },
          decontaminationResults: {
            workDays: 3.921772611076425,
            onSiteDays: 3.921772611076425,
            elementCost: 134867,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.3791235444930687,
            onSiteDays: 5.9728877905840605,
            elementCost: 9003,
          },
          incidentCommandResults: {
            onSiteDays: 402.3377379606996,
            elementCost: 1874752,
          },
          generalResults: {
            totalCost: 12856594,
            areaContaminated: 1174.0622704260632,
            decontaminationRounds: 1,
            solidWasteProduced: 3329.56486592098,
            aqueousWasteProduced: 4706.305479311099,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 294.5347133895429,
            onSiteDays: 968.9567602840727,
            elementCost: 39102407,
          },
          sourceReductionResults: {
            workDays: 3.3970405466354827,
            onSiteDays: 3.3970405466354827,
            elementCost: 117769,
          },
          decontaminationResults: {
            workDays: 3.155256062316535,
            onSiteDays: 3.155256062316535,
            elementCost: 318992,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 6.957038457507033,
            onSiteDays: 25.963383810301004,
            elementCost: 179982,
          },
          incidentCommandResults: {
            onSiteDays: 1001.4724407033258,
            elementCost: 3082967,
          },
          generalResults: {
            totalCost: 42802117,
            areaContaminated: 4802.982015379349,
            decontaminationRounds: 1,
            solidWasteProduced: 9518.819569055937,
            aqueousWasteProduced: 18293.21420097276,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 214.24874730640627,
            onSiteDays: 640.5997948857512,
            elementCost: 17335471,
          },
          sourceReductionResults: {
            workDays: 37.11744652033043,
            onSiteDays: 37.11744652033043,
            elementCost: 845401,
          },
          decontaminationResults: {
            workDays: 3.8188675029247223,
            onSiteDays: 3.8188675029247223,
            elementCost: 151646,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.9837392917712268,
            onSiteDays: 7.884312476693031,
            elementCost: 34959,
          },
          incidentCommandResults: {
            onSiteDays: 689.4204213856993,
            elementCost: 3038545,
          },
          generalResults: {
            totalCost: 21406022,
            areaContaminated: 4802.982015379349,
            decontaminationRounds: 1,
            solidWasteProduced: 36122.85869526372,
            aqueousWasteProduced: 14596.60092182931,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 336.0573216085553,
          onSiteDays: 1370.1766140545883,
          elementCost: 40976560,
        },
        sourceReductionResults: {
          workDays: 11.24546108068586,
          onSiteDays: 11.24546108068586,
          elementCost: 496104,
        },
        decontaminationResults: {
          workDays: 3.0324544082471294,
          onSiteDays: 3.0324544082471294,
          elementCost: 424423,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.749618996025205,
          onSiteDays: 36.77582490500326,
          elementCost: 266120,
        },
        incidentCommandResults: {
          onSiteDays: 1421.2303544485244,
          elementCost: 5251884,
        },
        generalResults: {
          totalCost: 47415091,
          areaContaminated: 17134.435169197255,
          decontaminationRounds: 1,
          solidWasteProduced: 66607.24592053438,
          aqueousWasteProduced: 51149.712889228285,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 477.450070906106,
          onSiteDays: 3325.6083544312414,
          elementCost: 76675542,
        },
        sourceReductionResults: {
          workDays: 26.326454392623766,
          onSiteDays: 26.326454392623766,
          elementCost: 734867,
        },
        decontaminationResults: {
          workDays: 4.037889975830422,
          onSiteDays: 4.037889975830422,
          elementCost: 656267,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 39.34159777743296,
          onSiteDays: 65.70342439135203,
          elementCost: 941720,
        },
        incidentCommandResults: {
          onSiteDays: 3421.6761231910477,
          elementCost: 15924666,
        },
        generalResults: {
          totalCost: 94933062,
          areaContaminated: 14413.782164763677,
          decontaminationRounds: 1,
          solidWasteProduced: 59125.85393889586,
          aqueousWasteProduced: 28014.067895469205,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 18933833.984217703,
        sourceReductionTravelCost: 379608.4741981544,
        decontaminationTravelCost: 163345.7426969929,
        wasteSamplingTravelCost: 121570.32122014526,
        incidentCommandTravelCost: 3777578.7645633556,
        totalTravelCost: 23375937.28689635,
      },
      totalEventCost: 242788823.28689635,
      totalEventDuration: 6936.137077689296,
      totalContaminationArea: 42328.24363514569,
      totalSolidWasteProduced: 174704.34298967087,
      totalAqueousWasteProduced: 116759.90138681067,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 10.853856993818786,
            onSiteDays: 58.513519903950304,
            elementCost: 1105080,
          },
          sourceReductionResults: {
            workDays: 1.2108088299501092,
            onSiteDays: 1.2108088299501092,
            elementCost: 25333,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 28278,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 59.724328733900414,
            elementCost: 193645,
          },
          generalResults: {
            totalCost: 1352336,
            areaContaminated: 1137.2332703401528,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 118.25954780113538,
            onSiteDays: 335.2790544190117,
            elementCost: 20304814,
          },
          sourceReductionResults: {
            workDays: 7.192432830144869,
            onSiteDays: 7.192432830144869,
            elementCost: 138177,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 34190,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 342.47148724915655,
            elementCost: 1100404,
          },
          generalResults: {
            totalCost: 21577585,
            areaContaminated: 4652.317924118806,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 157.56788360304557,
            onSiteDays: 581.104859887691,
            elementCost: 14463461,
          },
          sourceReductionResults: {
            workDays: 4.864281127241111,
            onSiteDays: 4.864281127241111,
            elementCost: 157296,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 42895,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 585.9691410149321,
            elementCost: 1919861,
          },
          generalResults: {
            totalCost: 16583513,
            areaContaminated: 4652.317924118806,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 897.2543961136698,
          onSiteDays: 3970.5601440426826,
          elementCost: 163224389,
        },
        sourceReductionResults: {
          workDays: 36.11924640332527,
          onSiteDays: 36.11924640332527,
          elementCost: 1120721,
        },
        decontaminationResults: {
          workDays: 3.8983982980480416,
          onSiteDays: 3.8983982980480416,
          elementCost: 443630,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 28.377271792995,
          onSiteDays: 69.69081856854844,
          elementCost: 1089250,
        },
        incidentCommandResults: {
          onSiteDays: 4080.268607312604,
          elementCost: 15481947,
        },
        generalResults: {
          totalCost: 181359937,
          areaContaminated: 18272.62507478535,
          decontaminationRounds: 1,
          solidWasteProduced: 7221.379536828062,
          aqueousWasteProduced: 52362.27646913231,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 374.1158073842752,
          onSiteDays: 1782.5998680031912,
          elementCost: 67479201,
        },
        sourceReductionResults: {
          workDays: 25.86178230809793,
          onSiteDays: 25.86178230809793,
          elementCost: 606497,
        },
        decontaminationResults: {
          workDays: 3.0067661185764627,
          onSiteDays: 3.0067661185764627,
          elementCost: 861428,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 13.479289098357173,
          onSiteDays: 38.24445290939681,
          elementCost: 342663,
        },
        incidentCommandResults: {
          onSiteDays: 1849.7128693392624,
          elementCost: 6201792,
        },
        generalResults: {
          totalCost: 75491581,
          areaContaminated: 18940.23470552267,
          decontaminationRounds: 1,
          solidWasteProduced: 107211.3388436952,
          aqueousWasteProduced: 74584.70577579261,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 39688686.5442934,
        sourceReductionTravelCost: 565315.9803972858,
        decontaminationTravelCost: 33397.51681875785,
        wasteSamplingTravelCost: 93295.94034617113,
        incidentCommandTravelCost: 3772683.214740005,
        totalTravelCost: 44153379.196595624,
      },
      totalEventCost: 340518331.1965956,
      totalEventDuration: 6918.146433649856,
      totalContaminationArea: 47654.72889888578,
      totalSolidWasteProduced: 114432.71838052325,
      totalAqueousWasteProduced: 126946.98224492492,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 6.383601689318792,
            onSiteDays: 34.427716066061,
            elementCost: 1936508,
          },
          sourceReductionResults: {
            workDays: 2.561581213273905,
            onSiteDays: 2.561581213273905,
            elementCost: 79845,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 35483,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 36.989297279334906,
            elementCost: 143775,
          },
          generalResults: {
            totalCost: 2195611,
            areaContaminated: 1230.6805459595487,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 245.47010061040066,
            onSiteDays: 1364.565863419779,
            elementCost: 19610864,
          },
          sourceReductionResults: {
            workDays: 2.937688148852012,
            onSiteDays: 2.937688148852012,
            elementCost: 170307,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 31749,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1367.5035515686309,
            elementCost: 6019585,
          },
          generalResults: {
            totalCost: 25832505,
            areaContaminated: 5034.602233470881,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 48.333203743843185,
            onSiteDays: 617.117858831871,
            elementCost: 12609342,
          },
          sourceReductionResults: {
            workDays: 22.447984103945373,
            onSiteDays: 22.447984103945373,
            elementCost: 432417,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 19114,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 639.5658429358164,
            elementCost: 2836393,
          },
          generalResults: {
            totalCost: 15897266,
            areaContaminated: 5034.602233470881,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 664.8893211139351,
          onSiteDays: 3914.305503816403,
          elementCost: 132924378,
        },
        sourceReductionResults: {
          workDays: 22.852152316768017,
          onSiteDays: 22.852152316768017,
          elementCost: 889325,
        },
        decontaminationResults: {
          workDays: 3.7033133322147918,
          onSiteDays: 3.7033133322147918,
          elementCost: 536249,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 15.534296921103575,
          onSiteDays: 66.45134661362252,
          elementCost: 562994,
        },
        incidentCommandResults: {
          onSiteDays: 4007.3123160790083,
          elementCost: 16151220,
        },
        generalResults: {
          totalCost: 151064166,
          areaContaminated: 16142.740139305297,
          decontaminationRounds: 1,
          solidWasteProduced: 65296.90713837657,
          aqueousWasteProduced: 68997.20383911218,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 638.628593435775,
          onSiteDays: 2564.286320955306,
          elementCost: 48392017,
        },
        sourceReductionResults: {
          workDays: 10.280494014567715,
          onSiteDays: 10.280494014567715,
          elementCost: 168613,
        },
        decontaminationResults: {
          workDays: 3.2846890534937123,
          onSiteDays: 3.2846890534937123,
          elementCost: 346605,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 18.88331351444032,
          onSiteDays: 103.60546419602782,
          elementCost: 723887,
        },
        incidentCommandResults: {
          onSiteDays: 2681.4569682193955,
          elementCost: 9924469,
        },
        generalResults: {
          totalCost: 59555591,
          areaContaminated: 11981.702295684878,
          decontaminationRounds: 1,
          solidWasteProduced: 82400.93251516671,
          aqueousWasteProduced: 88295.4432982625,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 34914135.39147199,
        sourceReductionTravelCost: 146611.1422236998,
        decontaminationTravelCost: 64130.842267531596,
        wasteSamplingTravelCost: 128595.9807103987,
        incidentCommandTravelCost: 3179703.670542197,
        totalTravelCost: 38433177.027215816,
      },
      totalEventCost: 292978316.02721584,
      totalEventDuration: 8732.827976082186,
      totalContaminationArea: 39424.32744789148,
      totalSolidWasteProduced: 147697.83965354328,
      totalAqueousWasteProduced: 157292.64713737468,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 41.056669767168074,
            onSiteDays: 221.91766022621565,
            elementCost: 5569143,
          },
          sourceReductionResults: {
            workDays: 3.3300525212961274,
            onSiteDays: 3.3300525212961274,
            elementCost: 80776,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 52152,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 225.24771274751177,
            elementCost: 886547,
          },
          generalResults: {
            totalCost: 6588618,
            areaContaminated: 1260.2712977842605,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 478.1653054033993,
            onSiteDays: 1422.6042694443413,
            elementCost: 39649372,
          },
          sourceReductionResults: {
            workDays: 3.8705626690567545,
            onSiteDays: 3.8705626690567545,
            elementCost: 159733,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 80611,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1426.474832113398,
            elementCost: 5433747,
          },
          generalResults: {
            totalCost: 45323463,
            areaContaminated: 5155.655309117429,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 142.40701577282167,
            onSiteDays: 648.1614366408969,
            elementCost: 14888535,
          },
          sourceReductionResults: {
            workDays: 7.557630547821011,
            onSiteDays: 7.557630547821011,
            elementCost: 192813,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 192196,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 655.7190671887179,
            elementCost: 2301148,
          },
          generalResults: {
            totalCost: 17574692,
            areaContaminated: 5155.655309117429,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 865.466777175104,
          onSiteDays: 4612.165092305979,
          elementCost: 140969741,
        },
        sourceReductionResults: {
          workDays: 89.23849343031776,
          onSiteDays: 89.23849343031776,
          elementCost: 1103722,
        },
        decontaminationResults: {
          workDays: 3.6146327388972583,
          onSiteDays: 3.6146327388972583,
          elementCost: 319532,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.212186793979669,
          onSiteDays: 24.123060570247347,
          elementCost: 311839,
        },
        incidentCommandResults: {
          onSiteDays: 4729.1412790454415,
          elementCost: 19409151,
        },
        generalResults: {
          totalCost: 162113985,
          areaContaminated: 17306.884032978418,
          decontaminationRounds: 1,
          solidWasteProduced: 102791.74957314246,
          aqueousWasteProduced: 30886.40049166208,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 933.0406269576144,
          onSiteDays: 2504.6745548934387,
          elementCost: 132628851,
        },
        sourceReductionResults: {
          workDays: 26.12214082199766,
          onSiteDays: 26.12214082199766,
          elementCost: 361913,
        },
        decontaminationResults: {
          workDays: 4.956961060864144,
          onSiteDays: 4.956961060864144,
          elementCost: 864838,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 17.593382483653453,
          onSiteDays: 67.90589726362727,
          elementCost: 606722,
        },
        incidentCommandResults: {
          onSiteDays: 2603.6595540399276,
          elementCost: 8048153,
        },
        generalResults: {
          totalCost: 142510477,
          areaContaminated: 18330.69253324761,
          decontaminationRounds: 1,
          solidWasteProduced: 93182.13061450567,
          aqueousWasteProduced: 63073.35813011131,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 28779121.57919424,
        sourceReductionTravelCost: 391522.40350274154,
        decontaminationTravelCost: 49954.67981049683,
        wasteSamplingTravelCost: 60468.28643120722,
        incidentCommandTravelCost: 3552598.625326601,
        totalTravelCost: 32833665.574265286,
      },
      totalEventCost: 406944900.5742653,
      totalEventDuration: 9640.242445134998,
      totalContaminationArea: 47209.15848224515,
      totalSolidWasteProduced: 195973.88018764812,
      totalAqueousWasteProduced: 93959.75862177339,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 111.1894558102082,
            onSiteDays: 361.2419084149047,
            elementCost: 7332770,
          },
          sourceReductionResults: {
            workDays: 1.723723257493317,
            onSiteDays: 1.723723257493317,
            elementCost: 81759,
          },
          decontaminationResults: {
            workDays: 4.424006999336185,
            onSiteDays: 4.424006999336185,
            elementCost: 168791,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.7881533323755419,
            onSiteDays: 7.809084563703647,
            elementCost: 55878,
          },
          incidentCommandResults: {
            onSiteDays: 375.19872323543785,
            elementCost: 1197792,
          },
          generalResults: {
            totalCost: 8836990,
            areaContaminated: 1306.3821389051732,
            decontaminationRounds: 1,
            solidWasteProduced: 7829.011697544251,
            aqueousWasteProduced: 9320.94583119425,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 424.54174719186767,
            onSiteDays: 1103.1027491772948,
            elementCost: 43621108,
          },
          sourceReductionResults: {
            workDays: 4.938065008785088,
            onSiteDays: 4.938065008785088,
            elementCost: 191061,
          },
          decontaminationResults: {
            workDays: 4.4809145479185775,
            onSiteDays: 4.4809145479185775,
            elementCost: 368580,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.7833945048443813,
            onSiteDays: 13.692172897673066,
            elementCost: 103021,
          },
          incidentCommandResults: {
            onSiteDays: 1126.2139016316714,
            elementCost: 3507501,
          },
          generalResults: {
            totalCost: 47791271,
            areaContaminated: 5344.290568248436,
            decontaminationRounds: 1,
            solidWasteProduced: 7069.802824152727,
            aqueousWasteProduced: 7088.249419416503,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 774.1179742168364,
            onSiteDays: 2087.5712577269305,
            elementCost: 34587365,
          },
          sourceReductionResults: {
            workDays: 3.858466764690356,
            onSiteDays: 3.858466764690356,
            elementCost: 101520,
          },
          decontaminationResults: {
            workDays: 3.567971395460882,
            onSiteDays: 3.567971395460882,
            elementCost: 299006,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.2637052447644229,
            onSiteDays: 5.470838551558342,
            elementCost: 7416,
          },
          incidentCommandResults: {
            onSiteDays: 2100.4685344386403,
            elementCost: 8608688,
          },
          generalResults: {
            totalCost: 43603995,
            areaContaminated: 5344.290568248436,
            decontaminationRounds: 1,
            solidWasteProduced: 12810.326134385326,
            aqueousWasteProduced: 11653.931627251426,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1397.6297922838025,
          onSiteDays: 2517.639873114845,
          elementCost: 74809903,
        },
        sourceReductionResults: {
          workDays: 22.033479796689114,
          onSiteDays: 22.033479796689114,
          elementCost: 671082,
        },
        decontaminationResults: {
          workDays: 3.8456855120243705,
          onSiteDays: 3.8456855120243705,
          elementCost: 555736,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 24.74001829190114,
          onSiteDays: 72.33820392618597,
          elementCost: 673238,
        },
        incidentCommandResults: {
          onSiteDays: 2615.857242349745,
          elementCost: 10607904,
        },
        generalResults: {
          totalCost: 87317863,
          areaContaminated: 14791.863084489449,
          decontaminationRounds: 1,
          solidWasteProduced: 20056.302383896083,
          aqueousWasteProduced: 79977.62100081444,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 793.2590184386934,
          onSiteDays: 3301.656900910596,
          elementCost: 100414798,
        },
        sourceReductionResults: {
          workDays: 177.03983751131426,
          onSiteDays: 177.03983751131426,
          elementCost: 3276615,
        },
        decontaminationResults: {
          workDays: 4.433010133316976,
          onSiteDays: 4.433010133316976,
          elementCost: 898463,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 31.51953398316746,
          onSiteDays: 74.37761009635335,
          elementCost: 1041729,
        },
        incidentCommandResults: {
          onSiteDays: 3557.5073586515805,
          elementCost: 17088626,
        },
        generalResults: {
          totalCost: 122720231,
          areaContaminated: 17390.67124746653,
          decontaminationRounds: 1,
          solidWasteProduced: 7214.31032248699,
          aqueousWasteProduced: 21909.2064597951,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 83705123.44287357,
        sourceReductionTravelCost: 318218.84733319446,
        decontaminationTravelCost: 226843.33072679964,
        wasteSamplingTravelCost: 171148.16881722925,
        incidentCommandTravelCost: 3504963.4088631123,
        totalTravelCost: 87926297.1986139,
      },
      totalEventCost: 398196647.1986139,
      totalEventDuration: 9775.245760307076,
      totalContaminationArea: 44177.49760735802,
      totalSolidWasteProduced: 54979.75336246538,
      totalAqueousWasteProduced: 129949.95433847173,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 45.65757508193078,
            onSiteDays: 131.34463071780576,
            elementCost: 9558785,
          },
          sourceReductionResults: {
            workDays: 5.650549397828918,
            onSiteDays: 5.650549397828918,
            elementCost: 326272,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 48086,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 136.99518011563467,
            elementCost: 468514,
          },
          generalResults: {
            totalCost: 10401657,
            areaContaminated: 1646.6117708183006,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 76.28725081046846,
            onSiteDays: 479.3752042653866,
            elementCost: 10571921,
          },
          sourceReductionResults: {
            workDays: 54.092005018011776,
            onSiteDays: 54.092005018011776,
            elementCost: 985497,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 131164,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 533.4672092833985,
            elementCost: 2607780,
          },
          generalResults: {
            totalCost: 14296362,
            areaContaminated: 6736.139062438502,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 201.47091583492045,
            onSiteDays: 1340.4189902316812,
            elementCost: 32578969,
          },
          sourceReductionResults: {
            workDays: 22.31173684530294,
            onSiteDays: 22.31173684530294,
            elementCost: 972547,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 42002,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1362.730727076984,
            elementCost: 6118651,
          },
          generalResults: {
            totalCost: 39712169,
            areaContaminated: 6736.139062438502,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 809.3179323363893,
          onSiteDays: 2666.7935970653007,
          elementCost: 64939629,
        },
        sourceReductionResults: {
          workDays: 43.50422894101305,
          onSiteDays: 43.50422894101305,
          elementCost: 1830065,
        },
        decontaminationResults: {
          workDays: 3.443344710497964,
          onSiteDays: 3.443344710497964,
          elementCost: 329307,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.050656281456408,
          onSiteDays: 9.331215424291884,
          elementCost: 80599,
        },
        incidentCommandResults: {
          onSiteDays: 2723.0723861411034,
          elementCost: 13275956,
        },
        generalResults: {
          totalCost: 80455556,
          areaContaminated: 10314.060456658262,
          decontaminationRounds: 1,
          solidWasteProduced: 69049.70551658951,
          aqueousWasteProduced: 25137.17095412471,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 482.72964075543155,
          onSiteDays: 2616.6519982577206,
          elementCost: 89636729,
        },
        sourceReductionResults: {
          workDays: 35.83534842745661,
          onSiteDays: 35.83534842745661,
          elementCost: 1016715,
        },
        decontaminationResults: {
          workDays: 4.905272135023324,
          onSiteDays: 4.905272135023324,
          elementCost: 446070,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 23.9444913034981,
          onSiteDays: 47.66547102481109,
          elementCost: 846199,
        },
        incidentCommandResults: {
          onSiteDays: 2705.0580898450116,
          elementCost: 9696415,
        },
        generalResults: {
          totalCost: 101642128,
          areaContaminated: 19450.515563534776,
          decontaminationRounds: 1,
          solidWasteProduced: 118142.86812580872,
          aqueousWasteProduced: 84179.8197361604,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 9693034.17248643,
        sourceReductionTravelCost: 158089.6087584542,
        decontaminationTravelCost: 33069.65306073267,
        wasteSamplingTravelCost: 38819.452776630555,
        incidentCommandTravelCost: 2356213.3633315284,
        totalTravelCost: 12279226.250413777,
      },
      totalEventCost: 258787098.25041378,
      totalEventDuration: 7461.323592462132,
      totalContaminationArea: 44883.465915888344,
      totalSolidWasteProduced: 187192.57364239823,
      totalAqueousWasteProduced: 109316.9906902851,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 31.318393384446438,
            onSiteDays: 124.1431859543136,
            elementCost: 5409434,
          },
          sourceReductionResults: {
            workDays: 6.264365958077724,
            onSiteDays: 6.264365958077724,
            elementCost: 239403,
          },
          decontaminationResults: {
            workDays: 4.21606247574465,
            onSiteDays: 4.21606247574465,
            elementCost: 339228,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.0767480193883366,
            onSiteDays: 5.3150212029836545,
            elementCost: 3265,
          },
          incidentCommandResults: {
            onSiteDays: 139.9386355911196,
            elementCost: 520066,
          },
          generalResults: {
            totalCost: 6511396,
            areaContaminated: 1140.900846387468,
            decontaminationRounds: 1,
            solidWasteProduced: 7228.215819001955,
            aqueousWasteProduced: 7853.1916347999295,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 496.69197218786377,
            onSiteDays: 1914.4612141666976,
            elementCost: 39927557,
          },
          sourceReductionResults: {
            workDays: 1.3032714538347288,
            onSiteDays: 1.3032714538347288,
            elementCost: 18556,
          },
          decontaminationResults: {
            workDays: 3.2182696308517524,
            onSiteDays: 3.2182696308517524,
            elementCost: 323561,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.5480435301443018,
            onSiteDays: 9.156147307654091,
            elementCost: 56773,
          },
          incidentCommandResults: {
            onSiteDays: 1928.1389025590381,
            elementCost: 8838466,
          },
          generalResults: {
            totalCost: 49164913,
            areaContaminated: 4667.321644312369,
            decontaminationRounds: 1,
            solidWasteProduced: 29388.984713803453,
            aqueousWasteProduced: 1259.7762937736923,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 745.0244774547971,
            onSiteDays: 1390.0402141771347,
            elementCost: 53724410,
          },
          sourceReductionResults: {
            workDays: 28.663817978979274,
            onSiteDays: 28.663817978979274,
            elementCost: 753926,
          },
          decontaminationResults: {
            workDays: 3.1037398809808634,
            onSiteDays: 3.1037398809808634,
            elementCost: 235828,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.150736418631906,
            onSiteDays: 13.212521762512573,
            elementCost: 139286,
          },
          incidentCommandResults: {
            onSiteDays: 1435.0202937996073,
            elementCost: 4587379,
          },
          generalResults: {
            totalCost: 59440829,
            areaContaminated: 4667.321644312369,
            decontaminationRounds: 1,
            solidWasteProduced: 42051.579918587086,
            aqueousWasteProduced: 4206.877098364694,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 438.1223542553423,
          onSiteDays: 957.5269613599497,
          elementCost: 55902746,
        },
        sourceReductionResults: {
          workDays: 41.86138373687585,
          onSiteDays: 41.86138373687585,
          elementCost: 2149534,
        },
        decontaminationResults: {
          workDays: 4.641112131448722,
          onSiteDays: 4.641112131448722,
          elementCost: 635415,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.1212058958395017,
          onSiteDays: 6.6139523768116035,
          elementCost: 33274,
        },
        incidentCommandResults: {
          onSiteDays: 1010.6434096050859,
          elementCost: 3156868,
        },
        generalResults: {
          totalCost: 61877837,
          areaContaminated: 15451.232049486422,
          decontaminationRounds: 1,
          solidWasteProduced: 117309.50873460202,
          aqueousWasteProduced: 59943.029371647346,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 556.6681603554919,
          onSiteDays: 7702.260511321547,
          elementCost: 153523571,
        },
        sourceReductionResults: {
          workDays: 8.637740884274686,
          onSiteDays: 8.637740884274686,
          elementCost: 226514,
        },
        decontaminationResults: {
          workDays: 4.822277806657897,
          onSiteDays: 4.822277806657897,
          elementCost: 622493,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.949034904846099,
          onSiteDays: 22.95408766892606,
          elementCost: 221054,
        },
        incidentCommandResults: {
          onSiteDays: 7738.674617681406,
          elementCost: 33435056,
        },
        generalResults: {
          totalCost: 188028688,
          areaContaminated: 18063.17030235054,
          decontaminationRounds: 1,
          solidWasteProduced: 46542.02352444401,
          aqueousWasteProduced: 80490.6641667602,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 38513565.70398652,
        sourceReductionTravelCost: 144373.53804038063,
        decontaminationTravelCost: 92483.49227151739,
        wasteSamplingTravelCost: 38718.836257369694,
        incidentCommandTravelCost: 5158723.808493122,
        totalTravelCost: 43947865.379048906,
      },
      totalEventCost: 408971528.3790489,
      totalEventDuration: 12252.415859236256,
      totalContaminationArea: 43989.94648684916,
      totalSolidWasteProduced: 242520.3127104385,
      totalAqueousWasteProduced: 153753.53856534587,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 23.093122755633914,
            onSiteDays: 97.14664028999314,
            elementCost: 4018963,
          },
          sourceReductionResults: {
            workDays: 6.6485010649495315,
            onSiteDays: 6.6485010649495315,
            elementCost: 154943,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 27008,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 103.79514135494267,
            elementCost: 470198,
          },
          generalResults: {
            totalCost: 4671112,
            areaContaminated: 1220.2592107485098,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 383.23045381747806,
            onSiteDays: 574.1505678093298,
            elementCost: 18382293,
          },
          sourceReductionResults: {
            workDays: 38.39327401054966,
            onSiteDays: 38.39327401054966,
            elementCost: 629511,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 157808,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 612.5438418198795,
            elementCost: 2489292,
          },
          generalResults: {
            totalCost: 21658904,
            areaContaminated: 4991.969498516632,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 59.26749212658484,
            onSiteDays: 520.1400871860203,
            elementCost: 10586239,
          },
          sourceReductionResults: {
            workDays: 23.791049780095005,
            onSiteDays: 23.791049780095005,
            elementCost: 451352,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 217999,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 543.9311369661153,
            elementCost: 2219742,
          },
          generalResults: {
            totalCost: 13475332,
            areaContaminated: 4991.969498516632,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 332.0049376614603,
          onSiteDays: 3101.509612146855,
          elementCost: 89425810,
        },
        sourceReductionResults: {
          workDays: 12.673893077902967,
          onSiteDays: 12.673893077902967,
          elementCost: 291576,
        },
        decontaminationResults: {
          workDays: 4.778703463677946,
          onSiteDays: 4.778703463677946,
          elementCost: 246314,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.959621107973773,
          onSiteDays: 10.44054619475937,
          elementCost: 72720,
        },
        incidentCommandResults: {
          onSiteDays: 3129.4027548831955,
          elementCost: 11302983,
        },
        generalResults: {
          totalCost: 101339403,
          areaContaminated: 10379.66413432259,
          decontaminationRounds: 1,
          solidWasteProduced: 13128.255033860281,
          aqueousWasteProduced: 2444.143550196816,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1160.1916795194663,
          onSiteDays: 3735.4095224318803,
          elementCost: 144917031,
        },
        sourceReductionResults: {
          workDays: 33.5795658993805,
          onSiteDays: 33.5795658993805,
          elementCost: 711929,
        },
        decontaminationResults: {
          workDays: 3.137307081403515,
          onSiteDays: 3.137307081403515,
          elementCost: 732396,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 8.55302012800769,
          onSiteDays: 33.58609877146474,
          elementCost: 292281,
        },
        incidentCommandResults: {
          onSiteDays: 3805.712494184129,
          elementCost: 17426922,
        },
        generalResults: {
          totalCost: 164080559,
          areaContaminated: 15075.500231432623,
          decontaminationRounds: 1,
          solidWasteProduced: 47795.768961979236,
          aqueousWasteProduced: 90150.84905890388,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 19505555.838946257,
        sourceReductionTravelCost: 150393.31311316774,
        decontaminationTravelCost: 45241.633223003526,
        wasteSamplingTravelCost: 33567.10231754824,
        incidentCommandTravelCost: 2949789.284840816,
        totalTravelCost: 22684547.172440793,
      },
      totalEventCost: 327909857.17244077,
      totalEventDuration: 8195.385369208261,
      totalContaminationArea: 36659.362573536986,
      totalSolidWasteProduced: 60924.02399583952,
      totalAqueousWasteProduced: 92594.99260910071,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 162.41734656194015,
            onSiteDays: 318.8900085385982,
            elementCost: 17857483,
          },
          sourceReductionResults: {
            workDays: 5.956006556035091,
            onSiteDays: 5.956006556035091,
            elementCost: 164391,
          },
          decontaminationResults: {
            workDays: 3.4211656731602655,
            onSiteDays: 3.4211656731602655,
            elementCost: 165792,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.16488770851947973,
            onSiteDays: 3.971459073857191,
            elementCost: 6574,
          },
          incidentCommandResults: {
            onSiteDays: 332.23863984165075,
            elementCost: 1459074,
          },
          generalResults: {
            totalCost: 19653314,
            areaContaminated: 1425.3100046384598,
            decontaminationRounds: 1,
            solidWasteProduced: 8606.388916650261,
            aqueousWasteProduced: 6568.62413581044,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 851.1523844420034,
            onSiteDays: 2081.223962234087,
            elementCost: 42588653,
          },
          sourceReductionResults: {
            workDays: 12.077392428675662,
            onSiteDays: 12.077392428675662,
            elementCost: 234378,
          },
          decontaminationResults: {
            workDays: 4.841177168730921,
            onSiteDays: 4.841177168730921,
            elementCost: 193946,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.4121827152059008,
            onSiteDays: 12.856376017853826,
            elementCost: 79669,
          },
          incidentCommandResults: {
            onSiteDays: 2110.9989078493477,
            elementCost: 7829777,
          },
          generalResults: {
            totalCost: 50926423,
            areaContaminated: 5830.813655339153,
            decontaminationRounds: 1,
            solidWasteProduced: 44986.446613648,
            aqueousWasteProduced: 33142.161099438454,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 248.73806019411353,
            onSiteDays: 1415.614155375038,
            elementCost: 47364296,
          },
          sourceReductionResults: {
            workDays: 10.937345807266787,
            onSiteDays: 10.937345807266787,
            elementCost: 310783,
          },
          decontaminationResults: {
            workDays: 3.173579923383328,
            onSiteDays: 3.173579923383328,
            elementCost: 403072,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 11.43124732590095,
            onSiteDays: 22.550629394976383,
            elementCost: 280024,
          },
          incidentCommandResults: {
            onSiteDays: 1452.2757105006647,
            elementCost: 6070096,
          },
          generalResults: {
            totalCost: 54428271,
            areaContaminated: 5830.813655339153,
            decontaminationRounds: 1,
            solidWasteProduced: 45241.97489283272,
            aqueousWasteProduced: 32054.60289506291,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1739.9462617691838,
          onSiteDays: 4898.7705242609445,
          elementCost: 135327883,
        },
        sourceReductionResults: {
          workDays: 55.80841173365672,
          onSiteDays: 55.80841173365672,
          elementCost: 2052071,
        },
        decontaminationResults: {
          workDays: 4.622408559923621,
          onSiteDays: 4.622408559923621,
          elementCost: 315021,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 19.03459001002822,
          onSiteDays: 49.06126536574879,
          elementCost: 501810,
        },
        incidentCommandResults: {
          onSiteDays: 5008.2626099202735,
          elementCost: 21993972,
        },
        generalResults: {
          totalCost: 160190757,
          areaContaminated: 11854.965044617413,
          decontaminationRounds: 1,
          solidWasteProduced: 15605.20232747158,
          aqueousWasteProduced: 88949.9962317343,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 4269.133076628498,
          onSiteDays: 8337.452773563095,
          elementCost: 269775916,
        },
        sourceReductionResults: {
          workDays: 48.9623311310413,
          onSiteDays: 48.9623311310413,
          elementCost: 825837,
        },
        decontaminationResults: {
          workDays: 3.051923872915079,
          onSiteDays: 3.051923872915079,
          elementCost: 441855,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 47.17318767953744,
          onSiteDays: 81.75502066781412,
          elementCost: 1143640,
        },
        incidentCommandResults: {
          onSiteDays: 8471.222049234864,
          elementCost: 28432502,
        },
        generalResults: {
          totalCost: 300619750,
          areaContaminated: 16983.188874664804,
          decontaminationRounds: 1,
          solidWasteProduced: 36942.42433228381,
          aqueousWasteProduced: 8473.609115158464,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 88331236.26990835,
        sourceReductionTravelCost: 662078.6460477399,
        decontaminationTravelCost: 96812.12933291838,
        wasteSamplingTravelCost: 161555.6573907307,
        incidentCommandTravelCost: 10209392.31401941,
        totalTravelCost: 99461075.01669915,
      },
      totalEventCost: 685279590.0166992,
      totalEventDuration: 17374.997917346802,
      totalContaminationArea: 41925.09123459898,
      totalSolidWasteProduced: 151382.43708288638,
      totalAqueousWasteProduced: 169188.99347720455,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 13.430570639321147,
            onSiteDays: 138.26875433582956,
            elementCost: 3205827,
          },
          sourceReductionResults: {
            workDays: 1.5640868903507705,
            onSiteDays: 1.5640868903507705,
            elementCost: 34079,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 36546,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 139.83284122618034,
            elementCost: 576339,
          },
          generalResults: {
            totalCost: 3852791,
            areaContaminated: 1119.3817022000608,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 35.08406905323915,
            onSiteDays: 121.94486850920578,
            elementCost: 5239907,
          },
          sourceReductionResults: {
            workDays: 10.570057352510549,
            onSiteDays: 10.570057352510549,
            elementCost: 246048,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 88262,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 132.51492586171634,
            elementCost: 615098,
          },
          generalResults: {
            totalCost: 6189315,
            areaContaminated: 4579.288781727522,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 56.12320207259147,
            onSiteDays: 427.46967553495733,
            elementCost: 6282210,
          },
          sourceReductionResults: {
            workDays: 3.0465162038650195,
            onSiteDays: 3.0465162038650195,
            elementCost: 58789,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 139815,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 430.51619173882233,
            elementCost: 2045124,
          },
          generalResults: {
            totalCost: 8525938,
            areaContaminated: 4579.288781727522,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1718.5408970177427,
          onSiteDays: 10746.291782430399,
          elementCost: 192788418,
        },
        sourceReductionResults: {
          workDays: 8.799714918213018,
          onSiteDays: 8.799714918213018,
          elementCost: 218555,
        },
        decontaminationResults: {
          workDays: 3.5025825175695546,
          onSiteDays: 3.5025825175695546,
          elementCost: 569236,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.387075613137446,
          onSiteDays: 34.61922446032417,
          elementCost: 496926,
        },
        incidentCommandResults: {
          onSiteDays: 10793.213304326506,
          elementCost: 38358850,
        },
        generalResults: {
          totalCost: 232431985,
          areaContaminated: 19666.34945936183,
          decontaminationRounds: 1,
          solidWasteProduced: 105661.40832892104,
          aqueousWasteProduced: 46886.15949617456,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1662.0246165440187,
          onSiteDays: 3808.2258675258627,
          elementCost: 81090613,
        },
        sourceReductionResults: {
          workDays: 10.1949151927393,
          onSiteDays: 10.1949151927393,
          elementCost: 298687,
        },
        decontaminationResults: {
          workDays: 4.711414346869899,
          onSiteDays: 4.711414346869899,
          elementCost: 304741,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 21.508805613994337,
          onSiteDays: 38.97612401977628,
          elementCost: 640477,
        },
        incidentCommandResults: {
          onSiteDays: 3862.108321085248,
          elementCost: 15578112,
        },
        generalResults: {
          totalCost: 97912630,
          areaContaminated: 13248.378005735212,
          decontaminationRounds: 1,
          solidWasteProduced: 86677.18724927887,
          aqueousWasteProduced: 47109.02396145295,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 57720212.74564284,
        sourceReductionTravelCost: 57872.01040032487,
        decontaminationTravelCost: 55426.699477288756,
        wasteSamplingTravelCost: 67271.88292563298,
        incidentCommandTravelCost: 6961825.774052367,
        totalTravelCost: 64862609.11249845,
      },
      totalEventCost: 413775268.11249846,
      totalEventDuration: 15358.185584238474,
      totalContaminationArea: 43192.686730752146,
      totalSolidWasteProduced: 192338.5955781999,
      totalAqueousWasteProduced: 93995.18345762751,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 23.69753601391383,
            onSiteDays: 172.8628540627991,
            elementCost: 3349250,
          },
          sourceReductionResults: {
            workDays: 1.0705700766928299,
            onSiteDays: 1.0705700766928299,
            elementCost: 23968,
          },
          decontaminationResults: {
            workDays: 3.2701272587920833,
            onSiteDays: 3.2701272587920833,
            elementCost: 199842,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.08010736539694154,
            onSiteDays: 5.409631963668033,
            elementCost: 2956,
          },
          incidentCommandResults: {
            onSiteDays: 182.61318336195205,
            elementCost: 772765,
          },
          generalResults: {
            totalCost: 4348781,
            areaContaminated: 1439.9994507785227,
            decontaminationRounds: 1,
            solidWasteProduced: 5659.265877405851,
            aqueousWasteProduced: 9.513602762637408,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 294.1581426503713,
            onSiteDays: 722.7553672938839,
            elementCost: 37153478,
          },
          sourceReductionResults: {
            workDays: 1.270330412504012,
            onSiteDays: 1.270330412504012,
            elementCost: 30693,
          },
          decontaminationResults: {
            workDays: 4.850738689734307,
            onSiteDays: 4.850738689734307,
            elementCost: 426819,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 4.679400849880477,
            onSiteDays: 24.736524850832204,
            elementCost: 172233,
          },
          incidentCommandResults: {
            onSiteDays: 753.6129612469543,
            elementCost: 3650014,
          },
          generalResults: {
            totalCost: 41433237,
            areaContaminated: 5890.906844093955,
            decontaminationRounds: 1,
            solidWasteProduced: 20782.973080902357,
            aqueousWasteProduced: 26599.38039394723,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 258.950286160355,
            onSiteDays: 2084.205227786078,
            elementCost: 42098781,
          },
          sourceReductionResults: {
            workDays: 3.2843696308810424,
            onSiteDays: 3.2843696308810424,
            elementCost: 158530,
          },
          decontaminationResults: {
            workDays: 3.7408103199537868,
            onSiteDays: 3.7408103199537868,
            elementCost: 451476,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.5803605519010604,
            onSiteDays: 6.708066158362223,
            elementCost: 42010,
          },
          incidentCommandResults: {
            onSiteDays: 2097.938473895275,
            elementCost: 10212069,
          },
          generalResults: {
            totalCost: 52962866,
            areaContaminated: 5890.906844093955,
            decontaminationRounds: 1,
            solidWasteProduced: 4101.9014991753975,
            aqueousWasteProduced: 37301.052435103236,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 315.7049028893183,
          onSiteDays: 821.1997174502641,
          elementCost: 56201752,
        },
        sourceReductionResults: {
          workDays: 60.136281139830345,
          onSiteDays: 60.136281139830345,
          elementCost: 2585383,
        },
        decontaminationResults: {
          workDays: 4.112377668524249,
          onSiteDays: 4.112377668524249,
          elementCost: 316924,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 17.361171095709317,
          onSiteDays: 62.350509942361235,
          elementCost: 706828,
        },
        incidentCommandResults: {
          onSiteDays: 947.7988862009798,
          elementCost: 3505476,
        },
        generalResults: {
          totalCost: 63316363,
          areaContaminated: 16080.400854367854,
          decontaminationRounds: 1,
          solidWasteProduced: 5939.490978338736,
          aqueousWasteProduced: 62182.53838266641,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1562.7110335138022,
          onSiteDays: 3820.9731631358454,
          elementCost: 106338750,
        },
        sourceReductionResults: {
          workDays: 141.7809967550958,
          onSiteDays: 141.7809967550958,
          elementCost: 2285331,
        },
        decontaminationResults: {
          workDays: 4.916737398113296,
          onSiteDays: 4.916737398113296,
          elementCost: 684378,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 18.786861947060377,
          onSiteDays: 56.99483707346121,
          elementCost: 678293,
        },
        incidentCommandResults: {
          onSiteDays: 4024.6657343625156,
          elementCost: 17484287,
        },
        generalResults: {
          totalCost: 127471039,
          areaContaminated: 17501.45040259754,
          decontaminationRounds: 1,
          solidWasteProduced: 89265.73168608308,
          aqueousWasteProduced: 2683.340308895809,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 27972652.964920793,
        sourceReductionTravelCost: 732852.1489081751,
        decontaminationTravelCost: 189424.6439152127,
        wasteSamplingTravelCost: 98284.90283829204,
        incidentCommandTravelCost: 2168768.4679709123,
        totalTravelCost: 31161983.128553387,
      },
      totalEventCost: 320694269.1285534,
      totalEventDuration: 8006.629239067677,
      totalContaminationArea: 46803.66439593183,
      totalSolidWasteProduced: 125749.36312190542,
      totalAqueousWasteProduced: 128775.82512337533,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 30.93506908496537,
            onSiteDays: 166.36903367877116,
            elementCost: 3702708,
          },
          sourceReductionResults: {
            workDays: 1.1934573627626577,
            onSiteDays: 1.1934573627626577,
            elementCost: 29228,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 30910,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 167.5624910415338,
            elementCost: 787025,
          },
          generalResults: {
            totalCost: 4549871,
            areaContaminated: 1243.076855587713,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 126.51431474404869,
            onSiteDays: 760.9733578261512,
            elementCost: 9314247,
          },
          sourceReductionResults: {
            workDays: 0.9612449366200368,
            onSiteDays: 0.9612449366200368,
            elementCost: 19170,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 159458,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 761.9346027627712,
            elementCost: 3495885,
          },
          generalResults: {
            totalCost: 12988760,
            areaContaminated: 5085.314409222463,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 40.24650412583219,
            onSiteDays: 296.7930221940517,
            elementCost: 7655893,
          },
          sourceReductionResults: {
            workDays: 16.794133605003303,
            onSiteDays: 16.794133605003303,
            elementCost: 209527,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 138492,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 313.587155799055,
            elementCost: 1205264,
          },
          generalResults: {
            totalCost: 9209176,
            areaContaminated: 5085.314409222463,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 315.4995670918479,
          onSiteDays: 1410.1047255460949,
          elementCost: 67106009,
        },
        sourceReductionResults: {
          workDays: 43.56194072196253,
          onSiteDays: 43.56194072196253,
          elementCost: 1117158,
        },
        decontaminationResults: {
          workDays: 4.501051243278443,
          onSiteDays: 4.501051243278443,
          elementCost: 955165,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 8.307633008143279,
          onSiteDays: 33.80214928798337,
          elementCost: 233510,
        },
        incidentCommandResults: {
          onSiteDays: 1491.9698667993193,
          elementCost: 7305216,
        },
        generalResults: {
          totalCost: 76717058,
          areaContaminated: 18114.8703322082,
          decontaminationRounds: 1,
          solidWasteProduced: 8067.77995978836,
          aqueousWasteProduced: 57922.565750957314,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 626.7945720657378,
          onSiteDays: 1473.4516946895558,
          elementCost: 86253565,
        },
        sourceReductionResults: {
          workDays: 100.16692717669196,
          onSiteDays: 100.16692717669196,
          elementCost: 2972750,
        },
        decontaminationResults: {
          workDays: 3.8136796091715057,
          onSiteDays: 3.8136796091715057,
          elementCost: 555892,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 29.368431717197478,
          onSiteDays: 104.27198659093902,
          elementCost: 1295529,
        },
        incidentCommandResults: {
          onSiteDays: 1681.7042880663582,
          elementCost: 5458595,
        },
        generalResults: {
          totalCost: 96536331,
          areaContaminated: 16683.397913599634,
          decontaminationRounds: 1,
          solidWasteProduced: 102510.27518935986,
          aqueousWasteProduced: 35042.90776219651,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 28034874.037202686,
        sourceReductionTravelCost: 375626.0632491559,
        decontaminationTravelCost: 82142.56830441604,
        wasteSamplingTravelCost: 90390.44459363648,
        incidentCommandTravelCost: 1110527.8495427712,
        totalTravelCost: 29693560.962892666,
      },
      totalEventCost: 229694756.96289265,
      totalEventDuration: 4416.7584044690375,
      totalContaminationArea: 46211.97391984047,
      totalSolidWasteProduced: 110578.05514914822,
      totalAqueousWasteProduced: 92965.47351315382,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 62.22293848150042,
            onSiteDays: 289.17861219611973,
            elementCost: 6166739,
          },
          sourceReductionResults: {
            workDays: 0.6110326825460402,
            onSiteDays: 0.6110326825460402,
            elementCost: 16269,
          },
          decontaminationResults: {
            workDays: 4.071404595177482,
            onSiteDays: 4.071404595177482,
            elementCost: 291587,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.3855177880596162,
            onSiteDays: 5.485785948417536,
            elementCost: 10495,
          },
          incidentCommandResults: {
            onSiteDays: 299.34683542226077,
            elementCost: 905767,
          },
          generalResults: {
            totalCost: 7390857,
            areaContaminated: 1238.6364951342384,
            decontaminationRounds: 1,
            solidWasteProduced: 9753.030808963882,
            aqueousWasteProduced: 2207.596363265379,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 132.36083649699054,
            onSiteDays: 1643.003907742293,
            elementCost: 31471182,
          },
          sourceReductionResults: {
            workDays: 46.73740034696399,
            onSiteDays: 46.73740034696399,
            elementCost: 1437859,
          },
          decontaminationResults: {
            workDays: 4.775029946531875,
            onSiteDays: 4.775029946531875,
            elementCost: 248132,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.6032611627184548,
            onSiteDays: 7.780184005552775,
            elementCost: 41272,
          },
          incidentCommandResults: {
            onSiteDays: 1702.2965220413419,
            elementCost: 7675919,
          },
          generalResults: {
            totalCost: 40874364,
            areaContaminated: 5067.14929827643,
            decontaminationRounds: 1,
            solidWasteProduced: 13907.669990664564,
            aqueousWasteProduced: 38705.94361768294,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 213.66339321629914,
            onSiteDays: 2114.347808400911,
            elementCost: 37380367,
          },
          sourceReductionResults: {
            workDays: 29.911271871572644,
            onSiteDays: 29.911271871572644,
            elementCost: 625168,
          },
          decontaminationResults: {
            workDays: 4.967570872038503,
            onSiteDays: 4.967570872038503,
            elementCost: 287868,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.2512247179647233,
            onSiteDays: 9.693739397082537,
            elementCost: 99047,
          },
          incidentCommandResults: {
            onSiteDays: 2158.920390541605,
            elementCost: 9535096,
          },
          generalResults: {
            totalCost: 47927546,
            areaContaminated: 5067.14929827643,
            decontaminationRounds: 1,
            solidWasteProduced: 23816.35959728393,
            aqueousWasteProduced: 149.6818704514401,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 420.05236396543046,
          onSiteDays: 1417.3895074652014,
          elementCost: 69845416,
        },
        sourceReductionResults: {
          workDays: 84.4450279917613,
          onSiteDays: 84.4450279917613,
          elementCost: 3600957,
        },
        decontaminationResults: {
          workDays: 4.803369917395377,
          onSiteDays: 4.803369917395377,
          elementCost: 351169,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.479113543049463,
          onSiteDays: 20.35740084951677,
          elementCost: 332934,
        },
        incidentCommandResults: {
          onSiteDays: 1526.9953062238749,
          elementCost: 4704050,
        },
        generalResults: {
          totalCost: 78834526,
          areaContaminated: 13325.11461184479,
          decontaminationRounds: 1,
          solidWasteProduced: 36961.654319167814,
          aqueousWasteProduced: 31657.33011039974,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 2558.0801187139386,
          onSiteDays: 4756.515062582055,
          elementCost: 160540348,
        },
        sourceReductionResults: {
          workDays: 22.93530198137077,
          onSiteDays: 22.93530198137077,
          elementCost: 464932,
        },
        decontaminationResults: {
          workDays: 3.660189104420177,
          onSiteDays: 3.660189104420177,
          elementCost: 460059,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 15.561287289967012,
          onSiteDays: 31.396272163381383,
          elementCost: 524729,
        },
        incidentCommandResults: {
          onSiteDays: 4814.506825831228,
          elementCost: 15546674,
        },
        generalResults: {
          totalCost: 177536742,
          areaContaminated: 17529.133874531195,
          decontaminationRounds: 1,
          solidWasteProduced: 63802.56562928579,
          aqueousWasteProduced: 102364.68091046729,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 21774975.13464716,
        sourceReductionTravelCost: 431013.9598512222,
        decontaminationTravelCost: 191171.98818862994,
        wasteSamplingTravelCost: 63481.735050295225,
        incidentCommandTravelCost: 3066329.7001400148,
        totalTravelCost: 25526972.51787732,
      },
      totalEventCost: 378091007.51787734,
      totalEventDuration: 10502.065880060309,
      totalContaminationArea: 42227.183578063086,
      totalSolidWasteProduced: 148241.280345366,
      totalAqueousWasteProduced: 175085.2328722668,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 26.215120004025238,
            onSiteDays: 71.29484923705948,
            elementCost: 1164817,
          },
          sourceReductionResults: {
            workDays: 5.862966287273454,
            onSiteDays: 5.862966287273454,
            elementCost: 189055,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 64060,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 77.15781552433293,
            elementCost: 333852,
          },
          generalResults: {
            totalCost: 1751784,
            areaContaminated: 1627.0736541006395,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 22.556951887394682,
            onSiteDays: 210.34137946530734,
            elementCost: 7701628,
          },
          sourceReductionResults: {
            workDays: 21.285716961038446,
            onSiteDays: 21.285716961038446,
            elementCost: 418827,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 198503,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 231.6270964263458,
            elementCost: 835215,
          },
          generalResults: {
            totalCost: 9154173,
            areaContaminated: 6656.210403138982,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 74.19316176348806,
            onSiteDays: 234.94435070724919,
            elementCost: 6023520,
          },
          sourceReductionResults: {
            workDays: 3.183297092458587,
            onSiteDays: 3.183297092458587,
            elementCost: 175460,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 264143,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 238.12764779970777,
            elementCost: 796463,
          },
          generalResults: {
            totalCost: 7259586,
            areaContaminated: 6656.210403138982,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 618.5114057805276,
          onSiteDays: 3176.518214546936,
          elementCost: 102901587,
        },
        sourceReductionResults: {
          workDays: 11.246157022867546,
          onSiteDays: 11.246157022867546,
          elementCost: 408685,
        },
        decontaminationResults: {
          workDays: 3.838347070114302,
          onSiteDays: 3.838347070114302,
          elementCost: 294598,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.080922839597388,
          onSiteDays: 11.514390099877353,
          elementCost: 134361,
        },
        incidentCommandResults: {
          onSiteDays: 3203.117108739795,
          elementCost: 10222012,
        },
        generalResults: {
          totalCost: 113961243,
          areaContaminated: 13519.249691981648,
          decontaminationRounds: 1,
          solidWasteProduced: 77761.3708465445,
          aqueousWasteProduced: 3256.2400396694334,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 501.35966700309706,
          onSiteDays: 1097.2568660454722,
          elementCost: 40926862,
        },
        sourceReductionResults: {
          workDays: 52.959326227068416,
          onSiteDays: 52.959326227068416,
          elementCost: 1087056,
        },
        decontaminationResults: {
          workDays: 3.3702034154837492,
          onSiteDays: 3.3702034154837492,
          elementCost: 157276,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 17.390794375671145,
          onSiteDays: 46.41589536112713,
          elementCost: 552437,
        },
        incidentCommandResults: {
          onSiteDays: 1200.0022910491516,
          elementCost: 5161998,
        },
        generalResults: {
          totalCost: 47885629,
          areaContaminated: 10959.437938161589,
          decontaminationRounds: 1,
          solidWasteProduced: 34361.63541741588,
          aqueousWasteProduced: 16143.29781960735,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 21868382.215208344,
        sourceReductionTravelCost: 382566.90421945375,
        decontaminationTravelCost: 78840.23412361622,
        wasteSamplingTravelCost: 42454.95014260677,
        incidentCommandTravelCost: 2311784.57502084,
        totalTravelCost: 24684028.87871486,
      },
      totalEventCost: 204696443.87871486,
      totalEventDuration: 4950.031959539334,
      totalContaminationArea: 39418.18209052184,
      totalSolidWasteProduced: 112123.00626396037,
      totalAqueousWasteProduced: 19399.537859276785,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 56.50374442828462,
            onSiteDays: 361.6216748339011,
            elementCost: 9308974,
          },
          sourceReductionResults: {
            workDays: 1.6210690959917602,
            onSiteDays: 1.6210690959917602,
            elementCost: 53985,
          },
          decontaminationResults: {
            workDays: 4.110897490547713,
            onSiteDays: 4.110897490547713,
            elementCost: 193476,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.2387920057133053,
            onSiteDays: 7.662241042802447,
            elementCost: 50993,
          },
          incidentCommandResults: {
            onSiteDays: 375.01588246324303,
            elementCost: 1436758,
          },
          generalResults: {
            totalCost: 11044186,
            areaContaminated: 1224.514915760871,
            decontaminationRounds: 1,
            solidWasteProduced: 8671.151912903964,
            aqueousWasteProduced: 4559.548285398437,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 416.8841012601888,
            onSiteDays: 970.8804407225545,
            elementCost: 26421048,
          },
          sourceReductionResults: {
            workDays: 27.323255348955794,
            onSiteDays: 27.323255348955794,
            elementCost: 395736,
          },
          decontaminationResults: {
            workDays: 4.687078404167453,
            onSiteDays: 4.687078404167453,
            elementCost: 185484,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.6224481672463249,
            onSiteDays: 6.235711448825458,
            elementCost: 15045,
          },
          incidentCommandResults: {
            onSiteDays: 1009.1264859245031,
            elementCost: 3848668,
          },
          generalResults: {
            totalCost: 30865981,
            areaContaminated: 5009.379200839925,
            decontaminationRounds: 1,
            solidWasteProduced: 10081.245383982368,
            aqueousWasteProduced: 32713.600877784957,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 68.63080514966498,
            onSiteDays: 1000.3754078842328,
            elementCost: 15491189,
          },
          sourceReductionResults: {
            workDays: 2.3292333621868333,
            onSiteDays: 2.3292333621868333,
            elementCost: 58231,
          },
          decontaminationResults: {
            workDays: 4.93129181254918,
            onSiteDays: 4.93129181254918,
            elementCost: 441544,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.8562965376042492,
            onSiteDays: 5.752694329598841,
            elementCost: 29582,
          },
          incidentCommandResults: {
            onSiteDays: 1013.3886273885677,
            elementCost: 4527259,
          },
          generalResults: {
            totalCost: 20547805,
            areaContaminated: 5009.379200839925,
            decontaminationRounds: 1,
            solidWasteProduced: 34534.43565341938,
            aqueousWasteProduced: 18220.77877010806,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 212.67093945386114,
          onSiteDays: 1332.997745955547,
          elementCost: 53842746,
        },
        sourceReductionResults: {
          workDays: 78.5575019875406,
          onSiteDays: 78.5575019875406,
          elementCost: 1647771,
        },
        decontaminationResults: {
          workDays: 3.770893953454423,
          onSiteDays: 3.770893953454423,
          elementCost: 234982,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.8982953602826202,
          onSiteDays: 6.643588629558176,
          elementCost: 28226,
        },
        incidentCommandResults: {
          onSiteDays: 1421.9697305261002,
          elementCost: 5755520,
        },
        generalResults: {
          totalCost: 61509245,
          areaContaminated: 16653.16500157424,
          decontaminationRounds: 1,
          solidWasteProduced: 120878.63865798111,
          aqueousWasteProduced: 35070.78088180019,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 844.7784299038963,
          onSiteDays: 4095.1317144772247,
          elementCost: 87348150,
        },
        sourceReductionResults: {
          workDays: 23.63645450883701,
          onSiteDays: 23.63645450883701,
          elementCost: 848149,
        },
        decontaminationResults: {
          workDays: 3.774242918187343,
          onSiteDays: 3.774242918187343,
          elementCost: 477613,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.790166604004685,
          onSiteDays: 9.458117045114815,
          elementCost: 67423,
        },
        incidentCommandResults: {
          onSiteDays: 4132.000528949364,
          elementCost: 16860574,
        },
        generalResults: {
          totalCost: 105601909,
          areaContaminated: 14531.460014523742,
          decontaminationRounds: 1,
          solidWasteProduced: 57382.91808928813,
          aqueousWasteProduced: 59652.83088174207,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 21546828.7072835,
        sourceReductionTravelCost: 826207.1455138379,
        decontaminationTravelCost: 253936.18470120968,
        wasteSamplingTravelCost: 29086.913363333326,
        incidentCommandTravelCost: 3774362.1044869022,
        totalTravelCost: 26430421.05534878,
      },
      totalEventCost: 255999547.05534878,
      totalEventDuration: 7951.501255251778,
      totalContaminationArea: 42427.8983335387,
      totalSolidWasteProduced: 231548.38969757495,
      totalAqueousWasteProduced: 150217.5396968337,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 71.43495058973066,
            onSiteDays: 348.77331874470906,
            elementCost: 6892200,
          },
          sourceReductionResults: {
            workDays: 0.9190181818108618,
            onSiteDays: 0.9190181818108618,
            elementCost: 27948,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 14503,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 349.69233692651994,
            elementCost: 1150929,
          },
          generalResults: {
            totalCost: 8085580,
            areaContaminated: 1545.78639519671,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 18.142197650244118,
            onSiteDays: 287.84435287551526,
            elementCost: 5411352,
          },
          sourceReductionResults: {
            workDays: 5.983787243939948,
            onSiteDays: 5.983787243939948,
            elementCost: 147058,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 241135,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 293.8281401194552,
            elementCost: 1332835,
          },
          generalResults: {
            totalCost: 7132380,
            areaContaminated: 6323.671616713815,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 518.5329229570136,
            onSiteDays: 949.4196575026933,
            elementCost: 39520960,
          },
          sourceReductionResults: {
            workDays: 147.83506221820483,
            onSiteDays: 147.83506221820483,
            elementCost: 1709463,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 17296,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1097.2547197208983,
            elementCost: 3487312,
          },
          generalResults: {
            totalCost: 44735031,
            areaContaminated: 6323.671616713815,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 3537.6385910903527,
          onSiteDays: 5664.717262347839,
          elementCost: 134540129,
        },
        sourceReductionResults: {
          workDays: 11.215912111272274,
          onSiteDays: 11.215912111272274,
          elementCost: 332208,
        },
        decontaminationResults: {
          workDays: 4.647579049143842,
          onSiteDays: 4.647579049143842,
          elementCost: 655830,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.813540359625079,
          onSiteDays: 27.34636379096036,
          elementCost: 262154,
        },
        incidentCommandResults: {
          onSiteDays: 5707.927117299216,
          elementCost: 23844753,
        },
        generalResults: {
          totalCost: 159635074,
          areaContaminated: 11329.5135650154,
          decontaminationRounds: 1,
          solidWasteProduced: 64685.12042158231,
          aqueousWasteProduced: 24797.818073976683,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 715.7216027073734,
          onSiteDays: 2117.305375339657,
          elementCost: 73224453,
        },
        sourceReductionResults: {
          workDays: 27.790088360847463,
          onSiteDays: 27.790088360847463,
          elementCost: 676799,
        },
        decontaminationResults: {
          workDays: 3.933853737761698,
          onSiteDays: 3.933853737761698,
          elementCost: 594212,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 21.9599558956407,
          onSiteDays: 69.20622844528583,
          elementCost: 654718,
        },
        incidentCommandResults: {
          onSiteDays: 2218.2355458835523,
          elementCost: 10272231,
        },
        generalResults: {
          totalCost: 85422413,
          areaContaminated: 10886.738022241685,
          decontaminationRounds: 1,
          solidWasteProduced: 78675.64396139183,
          aqueousWasteProduced: 37357.24628602153,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 68854856.78319189,
        sourceReductionTravelCost: 430981.0227277334,
        decontaminationTravelCost: 75385.74207282726,
        wasteSamplingTravelCost: 77697.50604087155,
        incidentCommandTravelCost: 2939410.139589891,
        totalTravelCost: 72378331.1936232,
      },
      totalEventCost: 377388809.1936232,
      totalEventDuration: 9666.937859949641,
      totalContaminationArea: 36409.381215881425,
      totalSolidWasteProduced: 143360.76438297413,
      totalAqueousWasteProduced: 62155.064359998214,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 18.2395237874726,
            onSiteDays: 102.64684813695499,
            elementCost: 2193449,
          },
          sourceReductionResults: {
            workDays: 1.6787641233778219,
            onSiteDays: 1.6787641233778219,
            elementCost: 94285,
          },
          decontaminationResults: {
            workDays: 3.318631015326509,
            onSiteDays: 3.318631015326509,
            elementCost: 149213,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.972338998460384,
            onSiteDays: 14.595779933129567,
            elementCost: 94567,
          },
          incidentCommandResults: {
            onSiteDays: 122.24002320878887,
            elementCost: 452985,
          },
          generalResults: {
            totalCost: 2984499,
            areaContaminated: 1581.1748149508046,
            decontaminationRounds: 1,
            solidWasteProduced: 1171.3173275848148,
            aqueousWasteProduced: 4019.5047098629816,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 114.85227718283369,
            onSiteDays: 895.5570934203688,
            elementCost: 20663129,
          },
          sourceReductionResults: {
            workDays: 8.677848330162957,
            onSiteDays: 8.677848330162957,
            elementCost: 275197,
          },
          decontaminationResults: {
            workDays: 4.861969594811548,
            onSiteDays: 4.861969594811548,
            elementCost: 621146,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.914816009579766,
            onSiteDays: 27.445466251726447,
            elementCost: 219087,
          },
          incidentCommandResults: {
            onSiteDays: 936.5423775970697,
            elementCost: 4168855,
          },
          generalResults: {
            totalCost: 25947414,
            areaContaminated: 6468.442424798747,
            decontaminationRounds: 1,
            solidWasteProduced: 17693.07322415567,
            aqueousWasteProduced: 43255.339201878385,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 332.4146882511522,
            onSiteDays: 1407.7035048768366,
            elementCost: 46331411,
          },
          sourceReductionResults: {
            workDays: 5.697204739907011,
            onSiteDays: 5.697204739907011,
            elementCost: 210428,
          },
          decontaminationResults: {
            workDays: 4.681131461095328,
            onSiteDays: 4.681131461095328,
            elementCost: 462770,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.468042811839072,
            onSiteDays: 16.194976900958167,
            elementCost: 230929,
          },
          incidentCommandResults: {
            onSiteDays: 1434.276817978797,
            elementCost: 4820308,
          },
          generalResults: {
            totalCost: 52055846,
            areaContaminated: 6468.442424798747,
            decontaminationRounds: 1,
            solidWasteProduced: 19400.27418165249,
            aqueousWasteProduced: 16738.757055672868,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 206.52595516306022,
          onSiteDays: 1609.0324315977073,
          elementCost: 50145331,
        },
        sourceReductionResults: {
          workDays: 129.59831491228533,
          onSiteDays: 129.59831491228533,
          elementCost: 1911887,
        },
        decontaminationResults: {
          workDays: 3.1104173064488956,
          onSiteDays: 3.1104173064488956,
          elementCost: 194821,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.7660249678185,
          onSiteDays: 44.109728515289085,
          elementCost: 462998,
        },
        incidentCommandResults: {
          onSiteDays: 1785.8508923317306,
          elementCost: 6737736,
        },
        generalResults: {
          totalCost: 59452773,
          areaContaminated: 10235.949235557568,
          decontaminationRounds: 1,
          solidWasteProduced: 64638.181132025406,
          aqueousWasteProduced: 33580.7405700988,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 2166.58871299155,
          onSiteDays: 5970.8169950871425,
          elementCost: 123713658,
        },
        sourceReductionResults: {
          workDays: 50.7088847557108,
          onSiteDays: 50.7088847557108,
          elementCost: 1833208,
        },
        decontaminationResults: {
          workDays: 3.8140557829323356,
          onSiteDays: 3.8140557829323356,
          elementCost: 407840,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.386361268836952,
          onSiteDays: 30.138929378847074,
          elementCost: 486478,
        },
        incidentCommandResults: {
          onSiteDays: 6055.478865004632,
          elementCost: 25863928,
        },
        generalResults: {
          totalCost: 152305112,
          areaContaminated: 14904.058294291599,
          decontaminationRounds: 1,
          solidWasteProduced: 14652.706225654829,
          aqueousWasteProduced: 26866.351194626877,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 76215859.29363163,
        sourceReductionTravelCost: 263688.605087293,
        decontaminationTravelCost: 64798.788285312985,
        wasteSamplingTravelCost: 88228.49050445267,
        incidentCommandTravelCost: 4203867.630745194,
        totalTravelCost: 80836442.80825388,
      },
      totalEventCost: 373582086.8082539,
      totalEventDuration: 10334.38897612102,
      totalContaminationArea: 39658.06719439747,
      totalSolidWasteProduced: 117555.5520910732,
      totalAqueousWasteProduced: 124460.69273213993,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 18.42826489299369,
            onSiteDays: 80.06040826256155,
            elementCost: 1058179,
          },
          sourceReductionResults: {
            workDays: 10.411132604064433,
            onSiteDays: 10.411132604064433,
            elementCost: 171832,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 20527,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 90.47154086662599,
            elementCost: 350036,
          },
          generalResults: {
            totalCost: 1600574,
            areaContaminated: 1105.3760931641289,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 19.320854011058753,
            onSiteDays: 173.3771460524505,
            elementCost: 4243017,
          },
          sourceReductionResults: {
            workDays: 8.269468495899462,
            onSiteDays: 8.269468495899462,
            elementCost: 111374,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 112879,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 181.64661454835,
            elementCost: 787196,
          },
          generalResults: {
            totalCost: 5254466,
            areaContaminated: 4521.993108398709,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 220.11913618907604,
            onSiteDays: 1369.8898135315712,
            elementCost: 30318824,
          },
          sourceReductionResults: {
            workDays: 16.903343835669034,
            onSiteDays: 16.903343835669034,
            elementCost: 372096,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 157406,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1386.7931573672404,
            elementCost: 5920519,
          },
          generalResults: {
            totalCost: 36768845,
            areaContaminated: 4521.993108398709,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 794.2356905198742,
          onSiteDays: 3290.514242980991,
          elementCost: 148584701,
        },
        sourceReductionResults: {
          workDays: 14.77820274569086,
          onSiteDays: 14.77820274569086,
          elementCost: 235805,
        },
        decontaminationResults: {
          workDays: 3.52433435444821,
          onSiteDays: 3.52433435444821,
          elementCost: 898853,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.7774733315176534,
          onSiteDays: 15.091332772032459,
          elementCost: 136230,
        },
        incidentCommandResults: {
          onSiteDays: 3323.9081128531625,
          elementCost: 13054655,
        },
        generalResults: {
          totalCost: 162910244,
          areaContaminated: 15668.08337244859,
          decontaminationRounds: 1,
          solidWasteProduced: 101655.66185620081,
          aqueousWasteProduced: 75496.80340872548,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 520.0194114834685,
          onSiteDays: 2568.5902740693045,
          elementCost: 89705337,
        },
        sourceReductionResults: {
          workDays: 55.01171731081204,
          onSiteDays: 55.01171731081204,
          elementCost: 2316862,
        },
        decontaminationResults: {
          workDays: 4.5437579759265665,
          onSiteDays: 4.5437579759265665,
          elementCost: 741870,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.9006241799341643,
          onSiteDays: 7.8970297089327985,
          elementCost: 55279,
        },
        incidentCommandResults: {
          onSiteDays: 2636.0427790649755,
          elementCost: 9534317,
        },
        generalResults: {
          totalCost: 102353665,
          areaContaminated: 13013.501854007292,
          decontaminationRounds: 1,
          solidWasteProduced: 47730.280750645565,
          aqueousWasteProduced: 70737.33539688129,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 12028887.821859652,
        sourceReductionTravelCost: 480331.1358108728,
        decontaminationTravelCost: 66309.7711087473,
        wasteSamplingTravelCost: 21742.874339031216,
        incidentCommandTravelCost: 3672936.9161029006,
        totalTravelCost: 16270208.519221203,
      },
      totalEventCost: 325158002.5192212,
      totalEventDuration: 7618.862204700355,
      totalContaminationArea: 38830.94753641743,
      totalSolidWasteProduced: 149385.94260684637,
      totalAqueousWasteProduced: 146234.13880560675,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 12.95410796074087,
            onSiteDays: 207.7362757589014,
            elementCost: 4083578,
          },
          sourceReductionResults: {
            workDays: 6.359850500024692,
            onSiteDays: 6.359850500024692,
            elementCost: 289683,
          },
          decontaminationResults: {
            workDays: 4.733709577409018,
            onSiteDays: 4.733709577409018,
            elementCost: 272009,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.20003240979022865,
            onSiteDays: 5.716898577934719,
            elementCost: 8694,
          },
          incidentCommandResults: {
            onSiteDays: 224.54673441426985,
            elementCost: 728581,
          },
          generalResults: {
            totalCost: 5382545,
            areaContaminated: 1347.4012884234917,
            decontaminationRounds: 1,
            solidWasteProduced: 1952.7015697353036,
            aqueousWasteProduced: 8510.430725761624,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 217.26904977500772,
            onSiteDays: 1226.04526172942,
            elementCost: 25548825,
          },
          sourceReductionResults: {
            workDays: 3.883370788202795,
            onSiteDays: 3.883370788202795,
            elementCost: 220014,
          },
          decontaminationResults: {
            workDays: 3.075449824816419,
            onSiteDays: 3.075449824816419,
            elementCost: 292070,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 12.987954286354737,
            onSiteDays: 29.749243471696552,
            elementCost: 345404,
          },
          incidentCommandResults: {
            onSiteDays: 1262.7533258141355,
            elementCost: 6002646,
          },
          generalResults: {
            totalCost: 32408959,
            areaContaminated: 5512.096179914285,
            decontaminationRounds: 1,
            solidWasteProduced: 41591.91181647582,
            aqueousWasteProduced: 37848.03791663568,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 509.7090722295564,
            onSiteDays: 873.249970623263,
            elementCost: 31571482,
          },
          sourceReductionResults: {
            workDays: 29.46576767582178,
            onSiteDays: 29.46576767582178,
            elementCost: 397254,
          },
          decontaminationResults: {
            workDays: 4.019308725609283,
            onSiteDays: 4.019308725609283,
            elementCost: 421645,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.1044218491364943,
            onSiteDays: 6.789261931654037,
            elementCost: 28974,
          },
          incidentCommandResults: {
            onSiteDays: 913.5243089563481,
            elementCost: 4009073,
          },
          generalResults: {
            totalCost: 36428428,
            areaContaminated: 5512.096179914285,
            decontaminationRounds: 1,
            solidWasteProduced: 13022.282980761636,
            aqueousWasteProduced: 29370.37174866348,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 340.9688738029957,
          onSiteDays: 2218.1047459761585,
          elementCost: 60263981,
        },
        sourceReductionResults: {
          workDays: 69.82922993131062,
          onSiteDays: 69.82922993131062,
          elementCost: 2147902,
        },
        decontaminationResults: {
          workDays: 4.747659851738172,
          onSiteDays: 4.747659851738172,
          elementCost: 521268,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.8996652133032725,
          onSiteDays: 26.28451109641163,
          elementCost: 257498,
        },
        incidentCommandResults: {
          onSiteDays: 2318.966146855619,
          elementCost: 10376271,
        },
        generalResults: {
          totalCost: 73566920,
          areaContaminated: 18687.209246840146,
          decontaminationRounds: 1,
          solidWasteProduced: 138713.24931510977,
          aqueousWasteProduced: 110183.48751739382,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 906.5483975245949,
          onSiteDays: 2145.994244147195,
          elementCost: 51751920,
        },
        sourceReductionResults: {
          workDays: 39.93021002548455,
          onSiteDays: 39.93021002548455,
          elementCost: 1400112,
        },
        decontaminationResults: {
          workDays: 4.916702268625773,
          onSiteDays: 4.916702268625773,
          elementCost: 513705,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.159886266521863,
          onSiteDays: 19.600591376242487,
          elementCost: 138808,
        },
        incidentCommandResults: {
          onSiteDays: 2210.4417478175474,
          elementCost: 7059965,
        },
        generalResults: {
          totalCost: 60864510,
          areaContaminated: 10064.866812124135,
          decontaminationRounds: 1,
          solidWasteProduced: 33960.658579285315,
          aqueousWasteProduced: 23208.92115504513,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 24060752.623615548,
        sourceReductionTravelCost: 612155.055565551,
        decontaminationTravelCost: 183589.97750852114,
        wasteSamplingTravelCost: 80763.532806148,
        incidentCommandTravelCost: 3572573.732328136,
        totalTravelCost: 28509834.921823904,
      },
      totalEventCost: 237161196.92182392,
      totalEventDuration: 6930.23226385792,
      totalContaminationArea: 41123.669707216344,
      totalSolidWasteProduced: 229240.80426136786,
      totalAqueousWasteProduced: 209121.24906349974,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 80.70399264238208,
            onSiteDays: 231.591204232039,
            elementCost: 10443743,
          },
          sourceReductionResults: {
            workDays: 4.6630074578244,
            onSiteDays: 4.6630074578244,
            elementCost: 156475,
          },
          decontaminationResults: {
            workDays: 4.837210089861697,
            onSiteDays: 4.837210089861697,
            elementCost: 182669,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.34574070762185083,
            onSiteDays: 4.5122255653695404,
            elementCost: 14098,
          },
          incidentCommandResults: {
            onSiteDays: 245.6036473450946,
            elementCost: 929725,
          },
          generalResults: {
            totalCost: 11726710,
            areaContaminated: 1136.80969296401,
            decontaminationRounds: 1,
            solidWasteProduced: 2858.404558292403,
            aqueousWasteProduced: 2282.4126106590443,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 840.5035180710308,
            onSiteDays: 3648.8784281390417,
            elementCost: 47795189,
          },
          sourceReductionResults: {
            workDays: 5.174543930680404,
            onSiteDays: 5.174543930680404,
            elementCost: 193242,
          },
          decontaminationResults: {
            workDays: 4.271399713417376,
            onSiteDays: 4.271399713417376,
            elementCost: 355672,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.2598223064265364,
            onSiteDays: 8.255935321475452,
            elementCost: 54381,
          },
          incidentCommandResults: {
            onSiteDays: 3666.5803071046153,
            elementCost: 17559937,
          },
          generalResults: {
            totalCost: 65958421,
            areaContaminated: 4650.585107580043,
            decontaminationRounds: 1,
            solidWasteProduced: 31519.298639896337,
            aqueousWasteProduced: 17107.75781348891,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 244.32659450681442,
            onSiteDays: 1050.463811411054,
            elementCost: 48777713,
          },
          sourceReductionResults: {
            workDays: 24.866970213509795,
            onSiteDays: 24.866970213509795,
            elementCost: 672626,
          },
          decontaminationResults: {
            workDays: 4.895055563630317,
            onSiteDays: 4.895055563630317,
            elementCost: 176432,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.385905292110628,
            onSiteDays: 8.801188579812319,
            elementCost: 60663,
          },
          incidentCommandResults: {
            onSiteDays: 1089.0270257680065,
            elementCost: 4941999,
          },
          generalResults: {
            totalCost: 54629433,
            areaContaminated: 4650.585107580043,
            decontaminationRounds: 1,
            solidWasteProduced: 17779.848420072183,
            aqueousWasteProduced: 21166.062648587194,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 786.9162140287417,
          onSiteDays: 4437.843022087189,
          elementCost: 124202033,
        },
        sourceReductionResults: {
          workDays: 14.015263920009055,
          onSiteDays: 14.015263920009055,
          elementCost: 358637,
        },
        decontaminationResults: {
          workDays: 3.1863123043874073,
          onSiteDays: 3.1863123043874073,
          elementCost: 892783,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 22.8575727935978,
          onSiteDays: 85.6657414262497,
          elementCost: 711572,
        },
        incidentCommandResults: {
          onSiteDays: 4540.710339737835,
          elementCost: 19557583,
        },
        generalResults: {
          totalCost: 145722608,
          areaContaminated: 17581.816089242187,
          decontaminationRounds: 1,
          solidWasteProduced: 69091.80275541438,
          aqueousWasteProduced: 35546.0191398872,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 639.0191835221376,
          onSiteDays: 2139.146215466735,
          elementCost: 91519551,
        },
        sourceReductionResults: {
          workDays: 10.966687171145608,
          onSiteDays: 10.966687171145608,
          elementCost: 405101,
        },
        decontaminationResults: {
          workDays: 3.2862693351428653,
          onSiteDays: 3.2862693351428653,
          elementCost: 256691,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.774301134871846,
          onSiteDays: 47.53990088189576,
          elementCost: 517788,
        },
        incidentCommandResults: {
          onSiteDays: 2200.9390728549197,
          elementCost: 10186363,
        },
        generalResults: {
          totalCost: 102885494,
          areaContaminated: 15170.31417002384,
          decontaminationRounds: 1,
          solidWasteProduced: 55381.22066916644,
          aqueousWasteProduced: 61.015208581942254,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 30566680.909891494,
        sourceReductionTravelCost: 93890.7689312367,
        decontaminationTravelCost: 150468.81483655536,
        wasteSamplingTravelCost: 112562.51518561623,
        incidentCommandTravelCost: 5363918.541517034,
        totalTravelCost: 36287521.55036193,
      },
      totalEventCost: 417210187.55036193,
      totalEventDuration: 11742.860392810471,
      totalContaminationArea: 43190.11016739012,
      totalSolidWasteProduced: 176630.57504284175,
      totalAqueousWasteProduced: 76163.26742120429,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 78.28683863427666,
            onSiteDays: 383.1709687176814,
            elementCost: 8354374,
          },
          sourceReductionResults: {
            workDays: 4.904534173272299,
            onSiteDays: 4.904534173272299,
            elementCost: 68126,
          },
          decontaminationResults: {
            workDays: 4.287490174939737,
            onSiteDays: 4.287490174939737,
            elementCost: 158744,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.2448453457754082,
            onSiteDays: 5.411326851932767,
            elementCost: 5706,
          },
          incidentCommandResults: {
            onSiteDays: 397.7743199178262,
            elementCost: 1819273,
          },
          generalResults: {
            totalCost: 10406223,
            areaContaminated: 1363.4494151127574,
            decontaminationRounds: 1,
            solidWasteProduced: 4447.796200999095,
            aqueousWasteProduced: 9505.47792195144,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 437.3959616568076,
            onSiteDays: 1930.3944759840917,
            elementCost: 38615251,
          },
          sourceReductionResults: {
            workDays: 13.805633994001916,
            onSiteDays: 13.805633994001916,
            elementCost: 563101,
          },
          decontaminationResults: {
            workDays: 3.1734660361366034,
            onSiteDays: 3.1734660361366034,
            elementCost: 267396,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.1681137827259385,
            onSiteDays: 4.427544443041802,
            elementCost: 6197,
          },
          incidentCommandResults: {
            onSiteDays: 1951.8011204572722,
            elementCost: 6250853,
          },
          generalResults: {
            totalCost: 45702798,
            areaContaminated: 5577.747607279463,
            decontaminationRounds: 1,
            solidWasteProduced: 45721.81910138929,
            aqueousWasteProduced: 23997.024477686115,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 923.5262031678155,
            onSiteDays: 1644.9013203064287,
            elementCost: 59803054,
          },
          sourceReductionResults: {
            workDays: 2.3413133187712134,
            onSiteDays: 2.3413133187712134,
            elementCost: 52264,
          },
          decontaminationResults: {
            workDays: 4.683865155951088,
            onSiteDays: 4.683865155951088,
            elementCost: 433320,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.216916644015518,
            onSiteDays: 7.079780099985787,
            elementCost: 43873,
          },
          incidentCommandResults: {
            onSiteDays: 1659.0062788811367,
            elementCost: 5881885,
          },
          generalResults: {
            totalCost: 66214396,
            areaContaminated: 5577.747607279463,
            decontaminationRounds: 1,
            solidWasteProduced: 8633.115517545224,
            aqueousWasteProduced: 35730.82984998312,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 501.1633999921803,
          onSiteDays: 1499.4637184736496,
          elementCost: 56696534,
        },
        sourceReductionResults: {
          workDays: 4.826544316773854,
          onSiteDays: 4.826544316773854,
          elementCost: 120948,
        },
        decontaminationResults: {
          workDays: 3.561410312671543,
          onSiteDays: 3.561410312671543,
          elementCost: 368458,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.25936123746875756,
          onSiteDays: 5.575444338024083,
          elementCost: 6099,
        },
        incidentCommandResults: {
          onSiteDays: 1513.427117441119,
          elementCost: 6961826,
        },
        generalResults: {
          totalCost: 64153865,
          areaContaminated: 10198.930157394829,
          decontaminationRounds: 1,
          solidWasteProduced: 88252.80241828936,
          aqueousWasteProduced: 1526.9611905535214,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 543.6289048089183,
          onSiteDays: 2390.252699355164,
          elementCost: 54969028,
        },
        sourceReductionResults: {
          workDays: 71.5630707380989,
          onSiteDays: 71.5630707380989,
          elementCost: 2258070,
        },
        decontaminationResults: {
          workDays: 3.77842449508105,
          onSiteDays: 3.77842449508105,
          elementCost: 419162,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.2205390620610412,
          onSiteDays: 9.936142384362741,
          elementCost: 42540,
        },
        incidentCommandResults: {
          onSiteDays: 2475.530336972707,
          elementCost: 7954798,
        },
        generalResults: {
          totalCost: 65643598,
          areaContaminated: 13006.650318372946,
          decontaminationRounds: 1,
          solidWasteProduced: 7319.160853682086,
          aqueousWasteProduced: 59457.737619331085,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 70237237.87277159,
        sourceReductionTravelCost: 78720.87838599297,
        decontaminationTravelCost: 160786.83527011197,
        wasteSamplingTravelCost: 28458.491323956692,
        incidentCommandTravelCost: 2985370.096847215,
        totalTravelCost: 73490574.17459887,
      },
      totalEventCost: 325611454.1745989,
      totalEventDuration: 7997.539173670061,
      totalContaminationArea: 35724.52510543946,
      totalSolidWasteProduced: 154374.69409190505,
      totalAqueousWasteProduced: 130218.03105950527,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 179.8376620500881,
            onSiteDays: 361.19674444799466,
            elementCost: 12144417,
          },
          sourceReductionResults: {
            workDays: 5.393415142473695,
            onSiteDays: 5.393415142473695,
            elementCost: 177860,
          },
          decontaminationResults: {
            workDays: 4.10911560317248,
            onSiteDays: 4.10911560317248,
            elementCost: 215119,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.8946667092693867,
            onSiteDays: 7.048892682337822,
            elementCost: 24252,
          },
          incidentCommandResults: {
            onSiteDays: 377.74816787597865,
            elementCost: 1164713,
          },
          generalResults: {
            totalCost: 13726361,
            areaContaminated: 1149.7615308480865,
            decontaminationRounds: 1,
            solidWasteProduced: 4643.847678997901,
            aqueousWasteProduced: 6484.077118268561,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 283.7493288822332,
            onSiteDays: 1263.7480426339755,
            elementCost: 38570359,
          },
          sourceReductionResults: {
            workDays: 21.60124419253258,
            onSiteDays: 21.60124419253258,
            elementCost: 385428,
          },
          decontaminationResults: {
            workDays: 3.9059685405590496,
            onSiteDays: 3.9059685405590496,
            elementCost: 444027,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.4972235640885305,
            onSiteDays: 9.241254853966844,
            elementCost: 41193,
          },
          incidentCommandResults: {
            onSiteDays: 1298.496510221034,
            elementCost: 4663184,
          },
          generalResults: {
            totalCost: 44104191,
            areaContaminated: 4703.56989892399,
            decontaminationRounds: 1,
            solidWasteProduced: 27891.494639575198,
            aqueousWasteProduced: 19230.09221556642,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 854.9887489592028,
            onSiteDays: 3461.176439685415,
            elementCost: 61781626,
          },
          sourceReductionResults: {
            workDays: 8.503367250688438,
            onSiteDays: 8.503367250688438,
            elementCost: 115221,
          },
          decontaminationResults: {
            workDays: 3.340900801667222,
            onSiteDays: 3.340900801667222,
            elementCost: 180025,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.8179454232892659,
            onSiteDays: 7.084967791204339,
            elementCost: 20655,
          },
          incidentCommandResults: {
            onSiteDays: 3480.105675528975,
            elementCost: 10888768,
          },
          generalResults: {
            totalCost: 72986295,
            areaContaminated: 4703.56989892399,
            decontaminationRounds: 1,
            solidWasteProduced: 10232.696371466653,
            aqueousWasteProduced: 29402.808696282173,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1549.0340326860094,
          onSiteDays: 6215.277347983094,
          elementCost: 152697096,
        },
        sourceReductionResults: {
          workDays: 11.943148066408481,
          onSiteDays: 11.943148066408481,
          elementCost: 137042,
        },
        decontaminationResults: {
          workDays: 3.3885820317986846,
          onSiteDays: 3.3885820317986846,
          elementCost: 600344,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.2942409975604954,
          onSiteDays: 14.32774229324638,
          elementCost: 132607,
        },
        incidentCommandResults: {
          onSiteDays: 6244.936820374547,
          elementCost: 29472717,
        },
        generalResults: {
          totalCost: 183039806,
          areaContaminated: 14313.831456078642,
          decontaminationRounds: 1,
          solidWasteProduced: 86066.64615329039,
          aqueousWasteProduced: 91547.04462901101,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 407.88731041548465,
          onSiteDays: 1284.9166249273903,
          elementCost: 50050657,
        },
        sourceReductionResults: {
          workDays: 1.6729643635449798,
          onSiteDays: 1.6729643635449798,
          elementCost: 86226,
        },
        decontaminationResults: {
          workDays: 4.444786907975745,
          onSiteDays: 4.444786907975745,
          elementCost: 322327,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.7289580826311073,
          onSiteDays: 9.812370038695498,
          elementCost: 79953,
        },
        incidentCommandResults: {
          onSiteDays: 1300.8467462376063,
          elementCost: 5698814,
        },
        generalResults: {
          totalCost: 56237977,
          areaContaminated: 11015.212705373144,
          decontaminationRounds: 1,
          solidWasteProduced: 74944.47109242005,
          aqueousWasteProduced: 45885.984857124764,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 32144310.44580177,
        sourceReductionTravelCost: 263806.38089656335,
        decontaminationTravelCost: 189831.01274622275,
        wasteSamplingTravelCost: 45872.79114272372,
        incidentCommandTravelCost: 4751520.0931772385,
        totalTravelCost: 37395340.72376452,
      },
      totalEventCost: 407489970.72376454,
      totalEventDuration: 12702.133920238142,
      totalContaminationArea: 35885.94549014785,
      totalSolidWasteProduced: 203779.1559357502,
      totalAqueousWasteProduced: 192550.00751625295,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 38.45677960474593,
            onSiteDays: 109.70873751019238,
            elementCost: 4503727,
          },
          sourceReductionResults: {
            workDays: 3.6113675797212244,
            onSiteDays: 3.6113675797212244,
            elementCost: 71104,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 18817,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 113.3201050899136,
            elementCost: 533106,
          },
          generalResults: {
            totalCost: 5126754,
            areaContaminated: 1165.8097477708286,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 110.20751847508063,
            onSiteDays: 733.286836797025,
            elementCost: 30662637,
          },
          sourceReductionResults: {
            workDays: 4.130562364176212,
            onSiteDays: 4.130562364176212,
            elementCost: 64823,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 50195,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 737.4173991612012,
            elementCost: 3246968,
          },
          generalResults: {
            totalCost: 34024623,
            areaContaminated: 4769.221695426117,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 450.65056176259304,
            onSiteDays: 1185.4797856619014,
            elementCost: 40275151,
          },
          sourceReductionResults: {
            workDays: 2.5955826924625343,
            onSiteDays: 2.5955826924625343,
            elementCost: 121029,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 114424,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1188.075368354364,
            elementCost: 5406583,
          },
          generalResults: {
            totalCost: 45917187,
            areaContaminated: 4769.221695426117,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 3486.9277992057328,
          onSiteDays: 9466.840467266917,
          elementCost: 229666433,
        },
        sourceReductionResults: {
          workDays: 2.439021577499373,
          onSiteDays: 2.439021577499373,
          elementCost: 84456,
        },
        decontaminationResults: {
          workDays: 3.292394815080891,
          onSiteDays: 3.292394815080891,
          elementCost: 785725,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 6.651154964363656,
          onSiteDays: 17.609792117733253,
          elementCost: 256513,
        },
        incidentCommandResults: {
          onSiteDays: 9490.18167577723,
          elementCost: 41751913,
        },
        generalResults: {
          totalCost: 272545040,
          areaContaminated: 16350.6946843934,
          decontaminationRounds: 1,
          solidWasteProduced: 70642.67076558425,
          aqueousWasteProduced: 43645.785438339066,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 285.1936237274597,
          onSiteDays: 1405.0109810981917,
          elementCost: 54003586,
        },
        sourceReductionResults: {
          workDays: 28.770327694372938,
          onSiteDays: 28.770327694372938,
          elementCost: 1042643,
        },
        decontaminationResults: {
          workDays: 4.073863628104763,
          onSiteDays: 4.073863628104763,
          elementCost: 271632,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.386523583975686,
          onSiteDays: 14.155193340171293,
          elementCost: 134023,
        },
        incidentCommandResults: {
          onSiteDays: 1452.0103657608408,
          elementCost: 4770299,
        },
        generalResults: {
          totalCost: 60222183,
          areaContaminated: 13276.547329490666,
          decontaminationRounds: 1,
          solidWasteProduced: 86335.95798511874,
          aqueousWasteProduced: 23809.446417647403,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 79200373.00468907,
        sourceReductionTravelCost: 365064.5698083556,
        decontaminationTravelCost: 85685.76284747897,
        wasteSamplingTravelCost: 31252.61927636856,
        incidentCommandTravelCost: 4464319.2731382055,
        totalTravelCost: 84146695.22975948,
      },
      totalEventCost: 501982482.22975945,
      totalEventDuration: 12981.00491414355,
      totalContaminationArea: 40331.49515250712,
      totalSolidWasteProduced: 156978.628750703,
      totalAqueousWasteProduced: 67455.23185598647,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 147.71734214817445,
            onSiteDays: 420.5808203656436,
            elementCost: 8962968,
          },
          sourceReductionResults: {
            workDays: 2.063329187906904,
            onSiteDays: 2.063329187906904,
            elementCost: 27182,
          },
          decontaminationResults: {
            workDays: 3.4972164743806275,
            onSiteDays: 3.4972164743806275,
            elementCost: 120626,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7914864259684662,
            onSiteDays: 6.174714850959653,
            elementCost: 28666,
          },
          incidentCommandResults: {
            onSiteDays: 432.31608087889083,
            elementCost: 2058858,
          },
          generalResults: {
            totalCost: 11198300,
            areaContaminated: 1108.9589741711707,
            decontaminationRounds: 1,
            solidWasteProduced: 3629.4809967512406,
            aqueousWasteProduced: 409.67707161601334,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 561.800564153902,
            onSiteDays: 1034.9740453108311,
            elementCost: 31798088,
          },
          sourceReductionResults: {
            workDays: 0.48986069301473306,
            onSiteDays: 0.48986069301473306,
            elementCost: 11556,
          },
          decontaminationResults: {
            workDays: 3.2279147212924237,
            onSiteDays: 3.2279147212924237,
            elementCost: 211226,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 6.485160347797962,
            onSiteDays: 15.824026631525907,
            elementCost: 170183,
          },
          incidentCommandResults: {
            onSiteDays: 1054.515847356664,
            elementCost: 4468219,
          },
          generalResults: {
            totalCost: 36659272,
            areaContaminated: 4536.650348882062,
            decontaminationRounds: 1,
            solidWasteProduced: 4771.85226485136,
            aqueousWasteProduced: 8737.403844798784,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 164.7958058443786,
            onSiteDays: 409.25490186861566,
            elementCost: 30589560,
          },
          sourceReductionResults: {
            workDays: 3.38458089717752,
            onSiteDays: 3.38458089717752,
            elementCost: 110612,
          },
          decontaminationResults: {
            workDays: 3.394257856624727,
            onSiteDays: 3.394257856624727,
            elementCost: 198267,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.6702441049065584,
            onSiteDays: 9.138067796605927,
            elementCost: 55449,
          },
          incidentCommandResults: {
            onSiteDays: 425.1718084190238,
            elementCost: 2005721,
          },
          generalResults: {
            totalCost: 32959609,
            areaContaminated: 4536.650348882062,
            decontaminationRounds: 1,
            solidWasteProduced: 24013.945467136644,
            aqueousWasteProduced: 25047.32133023305,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 878.3694046949656,
          onSiteDays: 8783.765127916848,
          elementCost: 156415986,
        },
        sourceReductionResults: {
          workDays: 28.21780930645697,
          onSiteDays: 28.21780930645697,
          elementCost: 841529,
        },
        decontaminationResults: {
          workDays: 3.1353788259754376,
          onSiteDays: 3.1353788259754376,
          elementCost: 317631,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.5866490403810142,
          onSiteDays: 6.392540229436576,
          elementCost: 23639,
        },
        incidentCommandResults: {
          onSiteDays: 8821.510856278717,
          elementCost: 33887189,
        },
        generalResults: {
          totalCost: 191485974,
          areaContaminated: 17149.267684935887,
          decontaminationRounds: 1,
          solidWasteProduced: 100544.78539195005,
          aqueousWasteProduced: 121239.49269246063,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 386.20614304532205,
          onSiteDays: 1613.7569320417851,
          elementCost: 50942030,
        },
        sourceReductionResults: {
          workDays: 72.93639630133367,
          onSiteDays: 72.93639630133367,
          elementCost: 2429064,
        },
        decontaminationResults: {
          workDays: 3.084822411668678,
          onSiteDays: 3.084822411668678,
          elementCost: 123166,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.062386913544385,
          onSiteDays: 46.08738342289289,
          elementCost: 358533,
        },
        incidentCommandResults: {
          onSiteDays: 1735.8655341776803,
          elementCost: 5508027,
        },
        generalResults: {
          totalCost: 59360820,
          areaContaminated: 13590.139572622556,
          decontaminationRounds: 1,
          solidWasteProduced: 105211.16538116777,
          aqueousWasteProduced: 51267.76540025438,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 96876359.80822672,
        sourceReductionTravelCost: 180112.74116528046,
        decontaminationTravelCost: 120519.93337812937,
        wasteSamplingTravelCost: 84135.61527004317,
        incidentCommandTravelCost: 5756692.773669911,
        totalTravelCost: 103017820.87171009,
      },
      totalEventCost: 434681795.87171006,
      totalEventDuration: 12469.380127110977,
      totalContaminationArea: 40921.66692949374,
      totalSolidWasteProduced: 238171.22950185707,
      totalAqueousWasteProduced: 206701.66033936283,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 142.96501296158056,
            onSiteDays: 542.6131149232467,
            elementCost: 10807777,
          },
          sourceReductionResults: {
            workDays: 1.3774891560009772,
            onSiteDays: 1.3774891560009772,
            elementCost: 31786,
          },
          decontaminationResults: {
            workDays: 4.244687360069874,
            onSiteDays: 4.244687360069874,
            elementCost: 218585,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.2422933402877737,
            onSiteDays: 5.5285008684453265,
            elementCost: 10582,
          },
          incidentCommandResults: {
            onSiteDays: 553.7637923077629,
            elementCost: 1700121,
          },
          generalResults: {
            totalCost: 12768851,
            areaContaminated: 1113.2100210492529,
            decontaminationRounds: 1,
            solidWasteProduced: 8243.552386963507,
            aqueousWasteProduced: 6115.284289631909,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 1063.250394632571,
            onSiteDays: 1421.236749414519,
            elementCost: 38787686,
          },
          sourceReductionResults: {
            workDays: 6.701852961574377,
            onSiteDays: 6.701852961574377,
            elementCost: 69609,
          },
          decontaminationResults: {
            workDays: 3.8732320123522617,
            onSiteDays: 3.8732320123522617,
            elementCost: 271696,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.0083687403232673,
            onSiteDays: 6.620350943980896,
            elementCost: 26961,
          },
          incidentCommandResults: {
            onSiteDays: 1438.4321853324263,
            elementCost: 6317331,
          },
          generalResults: {
            totalCost: 45473283,
            areaContaminated: 4554.040995201489,
            decontaminationRounds: 1,
            solidWasteProduced: 24542.403029085424,
            aqueousWasteProduced: 10759.354334463318,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 134.17080211262729,
            onSiteDays: 1004.2861198923408,
            elementCost: 21466885,
          },
          sourceReductionResults: {
            workDays: 29.50912341627599,
            onSiteDays: 29.50912341627599,
            elementCost: 729905,
          },
          decontaminationResults: {
            workDays: 3.8654246523197333,
            onSiteDays: 3.8654246523197333,
            elementCost: 322977,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.8426005553992746,
            onSiteDays: 6.196823405179304,
            elementCost: 31475,
          },
          incidentCommandResults: {
            onSiteDays: 1043.8574913661157,
            elementCost: 4837982,
          },
          generalResults: {
            totalCost: 27389224,
            areaContaminated: 4554.040995201489,
            decontaminationRounds: 1,
            solidWasteProduced: 29657.498164111,
            aqueousWasteProduced: 2087.0609178058603,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 249.1264102223263,
          onSiteDays: 1441.1983945276536,
          elementCost: 75750555,
        },
        sourceReductionResults: {
          workDays: 15.001245570761697,
          onSiteDays: 15.001245570761697,
          elementCost: 876242,
        },
        decontaminationResults: {
          workDays: 4.121648126542952,
          onSiteDays: 4.121648126542952,
          elementCost: 939328,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 13.68718975936015,
          onSiteDays: 31.903448005750285,
          elementCost: 485045,
        },
        incidentCommandResults: {
          onSiteDays: 1492.2247362307087,
          elementCost: 6146009,
        },
        generalResults: {
          totalCost: 84197179,
          areaContaminated: 15980.311074755227,
          decontaminationRounds: 1,
          solidWasteProduced: 126025.1985139731,
          aqueousWasteProduced: 5113.935665383597,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1912.751466341191,
          onSiteDays: 6477.848193170314,
          elementCost: 121290613,
        },
        sourceReductionResults: {
          workDays: 165.53270184167346,
          onSiteDays: 165.53270184167346,
          elementCost: 5474043,
        },
        decontaminationResults: {
          workDays: 3.3525015298166547,
          onSiteDays: 3.3525015298166547,
          elementCost: 898073,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.288534394536744,
          onSiteDays: 15.750082239871464,
          elementCost: 148290,
        },
        incidentCommandResults: {
          onSiteDays: 6662.483478781675,
          elementCost: 21555043,
        },
        generalResults: {
          totalCost: 149366062,
          areaContaminated: 17867.513588789683,
          decontaminationRounds: 1,
          solidWasteProduced: 111733.1813107214,
          aqueousWasteProduced: 60029.10406069397,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 56680864.97706543,
        sourceReductionTravelCost: 381662.356847121,
        decontaminationTravelCost: 243908.4209630828,
        wasteSamplingTravelCost: 51054.46619701119,
        incidentCommandTravelCost: 2844140.8677031808,
        totalTravelCost: 60201631.08877583,
      },
      totalEventCost: 379396230.0887758,
      totalEventDuration: 11190.76168401869,
      totalContaminationArea: 44069.116674997145,
      totalSolidWasteProduced: 300201.8334048544,
      totalAqueousWasteProduced: 84104.73926797866,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 178.07539775397112,
            onSiteDays: 340.2707510602597,
            elementCost: 11376342,
          },
          sourceReductionResults: {
            workDays: 9.883033780796712,
            onSiteDays: 9.883033780796712,
            elementCost: 148871,
          },
          decontaminationResults: {
            workDays: 4.2612947931655905,
            onSiteDays: 4.2612947931655905,
            elementCost: 181039,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7754553130275746,
            onSiteDays: 7.459490691866766,
            elementCost: 21011,
          },
          incidentCommandResults: {
            onSiteDays: 361.8745703260888,
            elementCost: 1533314,
          },
          generalResults: {
            totalCost: 13260577,
            areaContaminated: 1221.8747671165765,
            decontaminationRounds: 1,
            solidWasteProduced: 7176.768198061834,
            aqueousWasteProduced: 727.4605922292134,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 137.14847312840428,
            onSiteDays: 864.1109179998228,
            elementCost: 22141275,
          },
          sourceReductionResults: {
            workDays: 6.437576446713008,
            onSiteDays: 6.437576446713008,
            elementCost: 219368,
          },
          decontaminationResults: {
            workDays: 3.718842435795544,
            onSiteDays: 3.718842435795544,
            elementCost: 316557,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.1374934620556643,
            onSiteDays: 7.6887368699496825,
            elementCost: 41346,
          },
          incidentCommandResults: {
            onSiteDays: 881.9560737522811,
            elementCost: 3928844,
          },
          generalResults: {
            totalCost: 26647390,
            areaContaminated: 4998.578592749633,
            decontaminationRounds: 1,
            solidWasteProduced: 33579.83434035544,
            aqueousWasteProduced: 3501.161126909207,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 284.80990888993506,
            onSiteDays: 1590.4833981547536,
            elementCost: 27481662,
          },
          sourceReductionResults: {
            workDays: 0.6424971263710668,
            onSiteDays: 0.6424971263710668,
            elementCost: 21113,
          },
          decontaminationResults: {
            workDays: 3.6881869129576224,
            onSiteDays: 3.6881869129576224,
            elementCost: 350250,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.24774810973517006,
            onSiteDays: 4.715501484980542,
            elementCost: 6410,
          },
          incidentCommandResults: {
            onSiteDays: 1599.5295836790629,
            elementCost: 6420991,
          },
          generalResults: {
            totalCost: 34280426,
            areaContaminated: 4998.578592749633,
            decontaminationRounds: 1,
            solidWasteProduced: 35741.865929777625,
            aqueousWasteProduced: 10253.995098955647,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 295.607237671948,
          onSiteDays: 1397.9223789909327,
          elementCost: 31505493,
        },
        sourceReductionResults: {
          workDays: 1.3157371416978445,
          onSiteDays: 1.3157371416978445,
          elementCost: 66714,
        },
        decontaminationResults: {
          workDays: 4.852081657352876,
          onSiteDays: 4.852081657352876,
          elementCost: 489055,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.778793551309901,
          onSiteDays: 12.579412266338124,
          elementCost: 120376,
        },
        incidentCommandResults: {
          onSiteDays: 1416.6696100563215,
          elementCost: 5234607,
        },
        generalResults: {
          totalCost: 37416245,
          areaContaminated: 18521.039867429303,
          decontaminationRounds: 1,
          solidWasteProduced: 27019.87658476243,
          aqueousWasteProduced: 87665.4730988093,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 524.1495256244295,
          onSiteDays: 2437.545677354458,
          elementCost: 79641235,
        },
        sourceReductionResults: {
          workDays: 97.39013493767385,
          onSiteDays: 97.39013493767385,
          elementCost: 2311357,
        },
        decontaminationResults: {
          workDays: 4.587812109754378,
          onSiteDays: 4.587812109754378,
          elementCost: 632631,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.1137587859306428,
          onSiteDays: 6.664731915832701,
          elementCost: 33835,
        },
        incidentCommandResults: {
          onSiteDays: 2546.188356317719,
          elementCost: 11183405,
        },
        generalResults: {
          totalCost: 93802463,
          areaContaminated: 13765.456959825238,
          decontaminationRounds: 1,
          solidWasteProduced: 86395.34293692096,
          aqueousWasteProduced: 1136.6612592257404,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 41634126.526409626,
        sourceReductionTravelCost: 217346.38778257638,
        decontaminationTravelCost: 65666.9796685354,
        wasteSamplingTravelCost: 28193.987776613652,
        incidentCommandTravelCost: 2154992.117502759,
        totalTravelCost: 44100325.999140106,
      },
      totalEventCost: 249507426.9991401,
      totalEventDuration: 6806.218194131473,
      totalContaminationArea: 43505.52877987038,
      totalSolidWasteProduced: 189913.6879898783,
      totalAqueousWasteProduced: 103284.75117612912,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 41.12736679028481,
            onSiteDays: 113.93360035195207,
            elementCost: 5200688,
          },
          sourceReductionResults: {
            workDays: 2.294885251462434,
            onSiteDays: 2.294885251462434,
            elementCost: 91673,
          },
          decontaminationResults: {
            workDays: 3.100135751557568,
            onSiteDays: 3.100135751557568,
            elementCost: 108104,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.7340810586949236,
            onSiteDays: 8.544505961388763,
            elementCost: 57480,
          },
          incidentCommandResults: {
            onSiteDays: 127.87312731636084,
            elementCost: 477587,
          },
          generalResults: {
            totalCost: 5935532,
            areaContaminated: 1426.2785728484293,
            decontaminationRounds: 1,
            solidWasteProduced: 13204.049586450148,
            aqueousWasteProduced: 2256.9833665790165,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 260.1097410263078,
            onSiteDays: 751.7530975574323,
            elementCost: 33087994,
          },
          sourceReductionResults: {
            workDays: 90.62850369526794,
            onSiteDays: 90.62850369526794,
            elementCost: 1838314,
          },
          decontaminationResults: {
            workDays: 4.06176627545193,
            onSiteDays: 4.06176627545193,
            elementCost: 190407,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.21078080376198102,
            onSiteDays: 5.625868515723525,
            elementCost: 6255,
          },
          incidentCommandResults: {
            onSiteDays: 852.0692360438755,
            elementCost: 4163498,
          },
          generalResults: {
            totalCost: 39286468,
            areaContaminated: 5834.775979834484,
            decontaminationRounds: 1,
            solidWasteProduced: 15926.651153677365,
            aqueousWasteProduced: 108.50512305720567,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 510.00140033447275,
            onSiteDays: 2746.159072866654,
            elementCost: 55135424,
          },
          sourceReductionResults: {
            workDays: 24.905181827602483,
            onSiteDays: 24.905181827602483,
            elementCost: 1248775,
          },
          decontaminationResults: {
            workDays: 3.504479469383247,
            onSiteDays: 3.504479469383247,
            elementCost: 158435,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 4.461647184982282,
            onSiteDays: 12.988595083205286,
            elementCost: 120893,
          },
          incidentCommandResults: {
            onSiteDays: 2787.557329246845,
            elementCost: 10683631,
          },
          generalResults: {
            totalCost: 67347158,
            areaContaminated: 5834.775979834484,
            decontaminationRounds: 1,
            solidWasteProduced: 12211.572748633525,
            aqueousWasteProduced: 40325.93436372281,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 357.1335887819277,
          onSiteDays: 1211.1604353921475,
          elementCost: 68641046,
        },
        sourceReductionResults: {
          workDays: 167.2323880624868,
          onSiteDays: 167.2323880624868,
          elementCost: 2647564,
        },
        decontaminationResults: {
          workDays: 3.73220332728983,
          onSiteDays: 3.73220332728983,
          elementCost: 626696,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.9562451146938301,
          onSiteDays: 7.029636871281335,
          elementCost: 40593,
        },
        incidentCommandResults: {
          onSiteDays: 1389.1546636532055,
          elementCost: 6243841,
        },
        generalResults: {
          totalCost: 78199740,
          areaContaminated: 12379.711398943258,
          decontaminationRounds: 1,
          solidWasteProduced: 87719.61345233172,
          aqueousWasteProduced: 46647.47271404983,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1913.7451490034925,
          onSiteDays: 4216.19382369101,
          elementCost: 128139487,
        },
        sourceReductionResults: {
          workDays: 73.20741807121135,
          onSiteDays: 73.20741807121135,
          elementCost: 1703382,
        },
        decontaminationResults: {
          workDays: 3.754682309635608,
          onSiteDays: 3.754682309635608,
          elementCost: 287780,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 20.20977593200425,
          onSiteDays: 43.58911355353463,
          elementCost: 650098,
        },
        incidentCommandResults: {
          onSiteDays: 4336.745037625392,
          elementCost: 18663452,
        },
        generalResults: {
          totalCost: 149444199,
          areaContaminated: 16229.954391001413,
          decontaminationRounds: 1,
          solidWasteProduced: 78732.12420231564,
          aqueousWasteProduced: 61947.13900299019,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 23770781.389186814,
        sourceReductionTravelCost: 902443.6551732598,
        decontaminationTravelCost: 96938.33054282705,
        wasteSamplingTravelCost: 60654.19293741573,
        incidentCommandTravelCost: 3300447.4835045696,
        totalTravelCost: 28131265.05134489,
      },
      totalEventCost: 368344362.0513449,
      totalEventDuration: 9493.399393885678,
      totalContaminationArea: 41705.496322462066,
      totalSolidWasteProduced: 207794.0111434084,
      totalAqueousWasteProduced: 151286.03457039903,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 31.407223297767512,
            onSiteDays: 272.05722259202577,
            elementCost: 10477732,
          },
          sourceReductionResults: {
            workDays: 11.049543848686316,
            onSiteDays: 11.049543848686316,
            elementCost: 163785,
          },
          decontaminationResults: {
            workDays: 3.241042607054357,
            onSiteDays: 3.241042607054357,
            elementCost: 163332,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.2581343284554385,
            onSiteDays: 10.501914224489848,
            elementCost: 96731,
          },
          incidentCommandResults: {
            onSiteDays: 296.84972327225626,
            elementCost: 1400671,
          },
          generalResults: {
            totalCost: 12302251,
            areaContaminated: 1324.4020062114341,
            decontaminationRounds: 1,
            solidWasteProduced: 3466.3205897708312,
            aqueousWasteProduced: 987.3015830281894,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 730.6412966813799,
            onSiteDays: 1941.319479849644,
            elementCost: 45289680,
          },
          sourceReductionResults: {
            workDays: 9.525402275473745,
            onSiteDays: 9.525402275473745,
            elementCost: 315048,
          },
          decontaminationResults: {
            workDays: 4.555847484515013,
            onSiteDays: 4.555847484515013,
            elementCost: 274019,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.640606319941328,
            onSiteDays: 17.072600253765316,
            elementCost: 92865,
          },
          incidentCommandResults: {
            onSiteDays: 1972.473329863398,
            elementCost: 6896598,
          },
          generalResults: {
            totalCost: 52868210,
            areaContaminated: 5418.008207228593,
            decontaminationRounds: 1,
            solidWasteProduced: 22551.476051133253,
            aqueousWasteProduced: 9463.264757677467,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 169.42512751185564,
            onSiteDays: 2110.8324778661354,
            elementCost: 32835211,
          },
          sourceReductionResults: {
            workDays: 13.994805554219312,
            onSiteDays: 13.994805554219312,
            elementCost: 330323,
          },
          decontaminationResults: {
            workDays: 3.259481903225994,
            onSiteDays: 3.259481903225994,
            elementCost: 350098,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.713653882439501,
            onSiteDays: 7.219315287784186,
            elementCost: 21017,
          },
          incidentCommandResults: {
            onSiteDays: 2135.3060806113654,
            elementCost: 8946382,
          },
          generalResults: {
            totalCost: 42483031,
            areaContaminated: 5418.008207228593,
            decontaminationRounds: 1,
            solidWasteProduced: 38431.4661691967,
            aqueousWasteProduced: 22545.289768713465,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 284.3862533221542,
          onSiteDays: 3423.5367762127576,
          elementCost: 57416094,
        },
        sourceReductionResults: {
          workDays: 0.7817945336154102,
          onSiteDays: 0.7817945336154102,
          elementCost: 40146,
        },
        decontaminationResults: {
          workDays: 4.184589938070762,
          onSiteDays: 4.184589938070762,
          elementCost: 446419,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.376617444242247,
          onSiteDays: 15.972158580399839,
          elementCost: 135958,
        },
        incidentCommandResults: {
          onSiteDays: 3444.475319264844,
          elementCost: 13366392,
        },
        generalResults: {
          totalCost: 71405009,
          areaContaminated: 16443.86112607174,
          decontaminationRounds: 1,
          solidWasteProduced: 128101.7293839916,
          aqueousWasteProduced: 38971.24576945538,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1838.8026221226492,
          onSiteDays: 3217.201316401176,
          elementCost: 101957252,
        },
        sourceReductionResults: {
          workDays: 93.31922733658462,
          onSiteDays: 93.31922733658462,
          elementCost: 1704345,
        },
        decontaminationResults: {
          workDays: 4.266226229087037,
          onSiteDays: 4.266226229087037,
          elementCost: 859541,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.415644435765978,
          onSiteDays: 27.87091779867886,
          elementCost: 440510,
        },
        incidentCommandResults: {
          onSiteDays: 3342.6576877655266,
          elementCost: 14195823,
        },
        generalResults: {
          totalCost: 119157471,
          areaContaminated: 14216.814647800844,
          decontaminationRounds: 1,
          solidWasteProduced: 20084.239484238737,
          aqueousWasteProduced: 108574.38613059392,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 47296729.42237317,
        sourceReductionTravelCost: 322916.85697934934,
        decontaminationTravelCost: 157369.61958739866,
        wasteSamplingTravelCost: 61678.86654155187,
        incidentCommandTravelCost: 3011827.6102607395,
        totalTravelCost: 50850522.375742204,
      },
      totalEventCost: 349066494.3757422,
      totalEventDuration: 11191.76214077739,
      totalContaminationArea: 42821.094194541205,
      totalSolidWasteProduced: 212635.2316783311,
      totalAqueousWasteProduced: 180541.48800946842,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 100.16557830848998,
            onSiteDays: 186.69053271056515,
            elementCost: 6960040,
          },
          sourceReductionResults: {
            workDays: 5.112216317990854,
            onSiteDays: 5.112216317990854,
            elementCost: 121743,
          },
          decontaminationResults: {
            workDays: 3.6638018490429505,
            onSiteDays: 3.6638018490429505,
            elementCost: 247075,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.464033173735212,
            onSiteDays: 8.970504514692365,
            elementCost: 63487,
          },
          incidentCommandResults: {
            onSiteDays: 204.4370553922913,
            elementCost: 993273,
          },
          generalResults: {
            totalCost: 8385618,
            areaContaminated: 1153.9390359681413,
            decontaminationRounds: 1,
            solidWasteProduced: 8047.568854626629,
            aqueousWasteProduced: 4250.816987467522,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 137.52723298897325,
            onSiteDays: 616.0408037337254,
            elementCost: 18564739,
          },
          sourceReductionResults: {
            workDays: 13.089198508481081,
            onSiteDays: 13.089198508481081,
            elementCost: 338671,
          },
          decontaminationResults: {
            workDays: 3.875045566092023,
            onSiteDays: 3.875045566092023,
            elementCost: 367547,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.0947738251653565,
            onSiteDays: 8.886258309127093,
            elementCost: 39864,
          },
          incidentCommandResults: {
            onSiteDays: 641.8913061174256,
            elementCost: 3141298,
          },
          generalResults: {
            totalCost: 22452119,
            areaContaminated: 4720.6596925969425,
            decontaminationRounds: 1,
            solidWasteProduced: 31586.42030062146,
            aqueousWasteProduced: 16116.73190245324,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 138.14556846939908,
            onSiteDays: 567.4790369951918,
            elementCost: 26820756,
          },
          sourceReductionResults: {
            workDays: 25.693532582155868,
            onSiteDays: 25.693532582155868,
            elementCost: 425519,
          },
          decontaminationResults: {
            workDays: 4.763172366601222,
            onSiteDays: 4.763172366601222,
            elementCost: 408635,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.6799610600168808,
            onSiteDays: 9.998239773191026,
            elementCost: 57967,
          },
          incidentCommandResults: {
            onSiteDays: 607.9339817171399,
            elementCost: 2101109,
          },
          generalResults: {
            totalCost: 29813986,
            areaContaminated: 4720.6596925969425,
            decontaminationRounds: 1,
            solidWasteProduced: 43093.26900807843,
            aqueousWasteProduced: 20247.663713292943,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 249.1239017720314,
          onSiteDays: 1344.8543154774475,
          elementCost: 42549368,
        },
        sourceReductionResults: {
          workDays: 252.30924401926762,
          onSiteDays: 252.30924401926762,
          elementCost: 5272392,
        },
        decontaminationResults: {
          workDays: 4.379639196996493,
          onSiteDays: 4.379639196996493,
          elementCost: 315509,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 6.048632524146193,
          onSiteDays: 22.55823819963758,
          elementCost: 184373,
        },
        incidentCommandResults: {
          onSiteDays: 1624.1014368933493,
          elementCost: 6860361,
        },
        generalResults: {
          totalCost: 55182003,
          areaContaminated: 19571.102121745025,
          decontaminationRounds: 1,
          solidWasteProduced: 90615.13129412374,
          aqueousWasteProduced: 72854.04810944042,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 252.74656514471425,
          onSiteDays: 1079.3199007807157,
          elementCost: 57737777,
        },
        sourceReductionResults: {
          workDays: 12.56860384334376,
          onSiteDays: 12.56860384334376,
          elementCost: 518838,
        },
        decontaminationResults: {
          workDays: 3.3800798753230086,
          onSiteDays: 3.3800798753230086,
          elementCost: 495539,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 8.918102741482853,
          onSiteDays: 29.864804619178784,
          elementCost: 375699,
        },
        incidentCommandResults: {
          onSiteDays: 1125.1333891185611,
          elementCost: 3850554,
        },
        generalResults: {
          totalCost: 62978407,
          areaContaminated: 15434.895383116036,
          decontaminationRounds: 1,
          solidWasteProduced: 47730.02652932409,
          aqueousWasteProduced: 17939.879181440334,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 18519579.79494302,
        sourceReductionTravelCost: 1069490.267555452,
        decontaminationTravelCost: 152128.06755525136,
        wasteSamplingTravelCost: 47855.45592942027,
        incidentCommandTravelCost: 1102009.0586641973,
        totalTravelCost: 20891062.644647345,
      },
      totalEventCost: 199703195.64464736,
      totalEventDuration: 4203.497169238767,
      totalContaminationArea: 45601.25592602309,
      totalSolidWasteProduced: 221072.41598677434,
      totalAqueousWasteProduced: 131409.13989409446,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 5.939699802094117,
            onSiteDays: 61.432621426682715,
            elementCost: 910800,
          },
          sourceReductionResults: {
            workDays: 0.3847960644083708,
            onSiteDays: 0.3847960644083708,
            elementCost: 19452,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 17943,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 61.817417491091085,
            elementCost: 239640,
          },
          generalResults: {
            totalCost: 1187835,
            areaContaminated: 1138.932665024211,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 18.280325794307934,
            onSiteDays: 67.9057397843836,
            elementCost: 3898694,
          },
          sourceReductionResults: {
            workDays: 2.4539443583202103,
            onSiteDays: 2.4539443583202103,
            elementCost: 78483,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 176007,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 70.35968414270381,
            elementCost: 222807,
          },
          generalResults: {
            totalCost: 4375991,
            areaContaminated: 4659.269993280865,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 269.01615887590197,
            onSiteDays: 1130.2469994874336,
            elementCost: 23560448,
          },
          sourceReductionResults: {
            workDays: 8.016384984879007,
            onSiteDays: 8.016384984879007,
            elementCost: 351916,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 105072,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1138.2633844723127,
            elementCost: 5368222,
          },
          generalResults: {
            totalCost: 29385658,
            areaContaminated: 4659.269993280865,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 524.0802075045185,
          onSiteDays: 1838.8721474673716,
          elementCost: 50815688,
        },
        sourceReductionResults: {
          workDays: 58.59221232471583,
          onSiteDays: 58.59221232471583,
          elementCost: 1217426,
        },
        decontaminationResults: {
          workDays: 4.294678197078099,
          onSiteDays: 4.294678197078099,
          elementCost: 597575,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.637108987364797,
          onSiteDays: 11.48292431909827,
          elementCost: 142614,
        },
        incidentCommandResults: {
          onSiteDays: 1913.2419623082637,
          elementCost: 6877692,
        },
        generalResults: {
          totalCost: 59650995,
          areaContaminated: 13884.63762912076,
          decontaminationRounds: 1,
          solidWasteProduced: 30344.893586232196,
          aqueousWasteProduced: 56824.33877636755,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 320.1403000474478,
          onSiteDays: 1717.368616615043,
          elementCost: 36454869,
        },
        sourceReductionResults: {
          workDays: 182.7571916352142,
          onSiteDays: 182.7571916352142,
          elementCost: 2704517,
        },
        decontaminationResults: {
          workDays: 3.761548468089092,
          onSiteDays: 3.761548468089092,
          elementCost: 677815,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.383406413550746,
          onSiteDays: 33.86368162098143,
          elementCost: 453364,
        },
        incidentCommandResults: {
          onSiteDays: 1937.7510383393278,
          elementCost: 8247359,
        },
        generalResults: {
          totalCost: 48537924,
          areaContaminated: 11347.009463073508,
          decontaminationRounds: 1,
          solidWasteProduced: 10021.948907720105,
          aqueousWasteProduced: 4726.20380756281,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 21063136.604755897,
        sourceReductionTravelCost: 360531.1060417814,
        decontaminationTravelCost: 76429.17188289398,
        wasteSamplingTravelCost: 40713.87442188716,
        incidentCommandTravelCost: 1892740.3348455613,
        totalTravelCost: 23433551.09194802,
      },
      totalEventCost: 166571954.09194803,
      totalEventDuration: 5121.433486753699,
      totalContaminationArea: 35689.119743780204,
      totalSolidWasteProduced: 40366.8424939523,
      totalAqueousWasteProduced: 61550.54258393036,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 63.46214898396531,
            onSiteDays: 246.58556369509293,
            elementCost: 6115383,
          },
          sourceReductionResults: {
            workDays: 6.222709886065038,
            onSiteDays: 6.222709886065038,
            elementCost: 130154,
          },
          decontaminationResults: {
            workDays: 4.82597533423127,
            onSiteDays: 4.82597533423127,
            elementCost: 144379,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.0366300474128327,
            onSiteDays: 6.676202871587727,
            elementCost: 27553,
          },
          incidentCommandResults: {
            onSiteDays: 264.310451786977,
            elementCost: 1145259,
          },
          generalResults: {
            totalCost: 7562728,
            areaContaminated: 1125.799149922512,
            decontaminationRounds: 1,
            solidWasteProduced: 2144.027298372253,
            aqueousWasteProduced: 4892.664038434317,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 199.5945081899134,
            onSiteDays: 599.3259710714352,
            elementCost: 13025477,
          },
          sourceReductionResults: {
            workDays: 0.3317671289514977,
            onSiteDays: 0.3317671289514977,
            elementCost: 24721,
          },
          decontaminationResults: {
            workDays: 3.2436312684425226,
            onSiteDays: 3.2436312684425226,
            elementCost: 205200,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.6229088044500308,
            onSiteDays: 8.260523528444537,
            elementCost: 71197,
          },
          incidentCommandResults: {
            onSiteDays: 611.1618929972738,
            elementCost: 2446571,
          },
          generalResults: {
            totalCost: 15773166,
            areaContaminated: 4605.54197695573,
            decontaminationRounds: 1,
            solidWasteProduced: 39055.0624696349,
            aqueousWasteProduced: 8061.4565017785635,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 129.98670872016726,
            onSiteDays: 615.3058402912043,
            elementCost: 19281631,
          },
          sourceReductionResults: {
            workDays: 13.667960919495563,
            onSiteDays: 13.667960919495563,
            elementCost: 435009,
          },
          decontaminationResults: {
            workDays: 4.325234660721671,
            onSiteDays: 4.325234660721671,
            elementCost: 279254,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.0856701735492122,
            onSiteDays: 9.365860888885155,
            elementCost: 55506,
          },
          incidentCommandResults: {
            onSiteDays: 642.6648967603068,
            elementCost: 3074751,
          },
          generalResults: {
            totalCost: 23126151,
            areaContaminated: 4605.54197695573,
            decontaminationRounds: 1,
            solidWasteProduced: 22572.908248053525,
            aqueousWasteProduced: 23547.31347231321,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 715.1008173042217,
          onSiteDays: 1757.092367998814,
          elementCost: 57126476,
        },
        sourceReductionResults: {
          workDays: 5.914577220036703,
          onSiteDays: 5.914577220036703,
          elementCost: 116168,
        },
        decontaminationResults: {
          workDays: 4.658134482721364,
          onSiteDays: 4.658134482721364,
          elementCost: 308090,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 16.29232743644407,
          onSiteDays: 59.776031197329644,
          elementCost: 380539,
        },
        incidentCommandResults: {
          onSiteDays: 1827.441110898902,
          elementCost: 8174733,
        },
        generalResults: {
          totalCost: 66106006,
          areaContaminated: 13537.898402087832,
          decontaminationRounds: 1,
          solidWasteProduced: 113382.52088972338,
          aqueousWasteProduced: 62704.574643678694,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 295.77946424853985,
          onSiteDays: 1343.99758924804,
          elementCost: 26371370,
        },
        sourceReductionResults: {
          workDays: 25.374179597875916,
          onSiteDays: 25.374179597875916,
          elementCost: 843609,
        },
        decontaminationResults: {
          workDays: 4.876315487985573,
          onSiteDays: 4.876315487985573,
          elementCost: 619405,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 17.608743357919852,
          onSiteDays: 46.66389118871332,
          elementCost: 768871,
        },
        incidentCommandResults: {
          onSiteDays: 1420.9119755226145,
          elementCost: 6462107,
        },
        generalResults: {
          totalCost: 35065362,
          areaContaminated: 10595.780012394873,
          decontaminationRounds: 1,
          solidWasteProduced: 73385.55944354179,
          aqueousWasteProduced: 21687.1962718496,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 40304659.80281509,
        sourceReductionTravelCost: 69560.42091280293,
        decontaminationTravelCost: 176323.61441820412,
        wasteSamplingTravelCost: 121330.89961003308,
        incidentCommandTravelCost: 1784177.682516209,
        totalTravelCost: 42456052.420272335,
      },
      totalEventCost: 190089465.42027235,
      totalEventDuration: 4766.490327966074,
      totalContaminationArea: 34470.56151831668,
      totalSolidWasteProduced: 250540.07834932586,
      totalAqueousWasteProduced: 120893.20492805439,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 6.75569090716584,
            onSiteDays: 28.506621885080744,
            elementCost: 996171,
          },
          sourceReductionResults: {
            workDays: 1.922760964619819,
            onSiteDays: 1.922760964619819,
            elementCost: 32864,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 9895,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 30.429382849700563,
            elementCost: 93909,
          },
          generalResults: {
            totalCost: 1132839,
            areaContaminated: 1207.681164139699,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 112.10453016689118,
            onSiteDays: 429.0720329236077,
            elementCost: 23106881,
          },
          sourceReductionResults: {
            workDays: 10.634649524843798,
            onSiteDays: 10.634649524843798,
            elementCost: 657774,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 25577,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 439.7066824484515,
            elementCost: 1607301,
          },
          generalResults: {
            totalCost: 25397533,
            areaContaminated: 4940.5138532987685,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 134.43638677844638,
            onSiteDays: 188.95824467683298,
            elementCost: 5597086,
          },
          sourceReductionResults: {
            workDays: 12.23353236506821,
            onSiteDays: 12.23353236506821,
            elementCost: 314671,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 46592,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 201.1917770419012,
            elementCost: 654443,
          },
          generalResults: {
            totalCost: 6612792,
            areaContaminated: 4940.5138532987685,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 2955.285564289802,
          onSiteDays: 5059.496918136536,
          elementCost: 202828529,
        },
        sourceReductionResults: {
          workDays: 13.701319171308086,
          onSiteDays: 13.701319171308086,
          elementCost: 520549,
        },
        decontaminationResults: {
          workDays: 4.856012541767212,
          onSiteDays: 4.856012541767212,
          elementCost: 906986,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.298124547709243,
          onSiteDays: 29.1706916212136,
          elementCost: 369989,
        },
        incidentCommandResults: {
          onSiteDays: 5107.224941470824,
          elementCost: 22074394,
        },
        generalResults: {
          totalCost: 226700447,
          areaContaminated: 19914.319722427594,
          decontaminationRounds: 1,
          solidWasteProduced: 130014.83139949314,
          aqueousWasteProduced: 145775.0496035805,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1469.9424811051272,
          onSiteDays: 6083.066914041547,
          elementCost: 161906497,
        },
        sourceReductionResults: {
          workDays: 36.16543795304638,
          onSiteDays: 36.16543795304638,
          elementCost: 1256355,
        },
        decontaminationResults: {
          workDays: 3.890530133361586,
          onSiteDays: 3.890530133361586,
          elementCost: 383737,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.8688170902501555,
          onSiteDays: 10.663169986903107,
          elementCost: 81412,
        },
        incidentCommandResults: {
          onSiteDays: 6133.786052114858,
          elementCost: 19764526,
        },
        generalResults: {
          totalCost: 183392527,
          areaContaminated: 10585.541498932687,
          decontaminationRounds: 1,
          solidWasteProduced: 25545.691766480795,
          aqueousWasteProduced: 41341.83298992866,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 58072530.96289017,
        sourceReductionTravelCost: 144512.24914135766,
        decontaminationTravelCost: 62861.821667739336,
        wasteSamplingTravelCost: 24362.375904770648,
        incidentCommandTravelCost: 3241916.0138637554,
        totalTravelCost: 61546183.42346779,
      },
      totalEventCost: 504782321.4234678,
      totalEventDuration: 11912.338835925735,
      totalContaminationArea: 41588.570092097514,
      totalSolidWasteProduced: 155560.52316597392,
      totalAqueousWasteProduced: 187116.88259350916,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 50.39946614911672,
            onSiteDays: 85.22338781700083,
            elementCost: 4048606,
          },
          sourceReductionResults: {
            workDays: 8.48892859119658,
            onSiteDays: 8.48892859119658,
            elementCost: 128534,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 29428,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 93.71231640819741,
            elementCost: 460563,
          },
          generalResults: {
            totalCost: 4667131,
            areaContaminated: 1216.6091197414669,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 53.36279831314245,
            onSiteDays: 215.58326091047132,
            elementCost: 11067795,
          },
          sourceReductionResults: {
            workDays: 16.332263851008847,
            onSiteDays: 16.332263851008847,
            elementCost: 391439,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 204586,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 231.91552476148019,
            elementCost: 1113638,
          },
          generalResults: {
            totalCost: 12777458,
            areaContaminated: 4977.037308033275,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 70.87140831350786,
            onSiteDays: 245.1706656166898,
            elementCost: 10112929,
          },
          sourceReductionResults: {
            workDays: 23.591607148262824,
            onSiteDays: 23.591607148262824,
            elementCost: 919362,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 33888,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 268.7622727649526,
            elementCost: 865570,
          },
          generalResults: {
            totalCost: 11931749,
            areaContaminated: 4977.037308033275,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 365.5035763544252,
          onSiteDays: 2754.3961538283365,
          elementCost: 56050553,
        },
        sourceReductionResults: {
          workDays: 58.553441878085806,
          onSiteDays: 58.553441878085806,
          elementCost: 2187005,
        },
        decontaminationResults: {
          workDays: 4.947774078684806,
          onSiteDays: 4.947774078684806,
          elementCost: 430914,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 41.42411331752526,
          onSiteDays: 98.98181137954694,
          elementCost: 1212761,
        },
        incidentCommandResults: {
          onSiteDays: 2916.879181164654,
          elementCost: 9478637,
        },
        generalResults: {
          totalCost: 69359870,
          areaContaminated: 15218.189513594423,
          decontaminationRounds: 1,
          solidWasteProduced: 112157.06129886492,
          aqueousWasteProduced: 50964.73369124196,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 257.37878382966994,
          onSiteDays: 571.641795031992,
          elementCost: 21793948,
        },
        sourceReductionResults: {
          workDays: 56.44401212957777,
          onSiteDays: 56.44401212957777,
          elementCost: 2254400,
        },
        decontaminationResults: {
          workDays: 4.229568446806997,
          onSiteDays: 4.229568446806997,
          elementCost: 811098,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 15.601360153552958,
          onSiteDays: 37.442482963984624,
          elementCost: 385761,
        },
        incidentCommandResults: {
          onSiteDays: 669.7578585723614,
          elementCost: 2122484,
        },
        generalResults: {
          totalCost: 27367691,
          areaContaminated: 15700.950076385694,
          decontaminationRounds: 1,
          solidWasteProduced: 52201.483685954794,
          aqueousWasteProduced: 69969.0486219752,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 30366916.36922199,
        sourceReductionTravelCost: 182467.61378052697,
        decontaminationTravelCost: 49713.510535794514,
        wasteSamplingTravelCost: 109315.24655433622,
        incidentCommandTravelCost: 1630897.3878431267,
        totalTravelCost: 32339310.12793578,
      },
      totalEventCost: 158443209.12793577,
      totalEventDuration: 4181.0271536716455,
      totalContaminationArea: 42089.82332578813,
      totalSolidWasteProduced: 164358.54498481972,
      totalAqueousWasteProduced: 120933.78231321718,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 58.831414772068186,
            onSiteDays: 222.35684345926848,
            elementCost: 7142927,
          },
          sourceReductionResults: {
            workDays: 5.226093515148219,
            onSiteDays: 5.226093515148219,
            elementCost: 149431,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 40891,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 227.5829369744167,
            elementCost: 740318,
          },
          generalResults: {
            totalCost: 8073567,
            areaContaminated: 1245.6450699587404,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 50.09599161745443,
            onSiteDays: 333.30461760343763,
            elementCost: 8398643,
          },
          sourceReductionResults: {
            workDays: 7.139179778234281,
            onSiteDays: 7.139179778234281,
            elementCost: 328299,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 122146,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 340.4437973816719,
            elementCost: 1154410,
          },
          generalResults: {
            totalCost: 10003498,
            areaContaminated: 5095.820740740301,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 55.99904723750198,
            onSiteDays: 161.31885937590317,
            elementCost: 8494915,
          },
          sourceReductionResults: {
            workDays: 30.23312805871194,
            onSiteDays: 30.23312805871194,
            elementCost: 1004941,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 116836,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 191.5519874346151,
            elementCost: 916248,
          },
          generalResults: {
            totalCost: 10532940,
            areaContaminated: 5095.820740740301,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 451.16536064491623,
          onSiteDays: 3441.564147527157,
          elementCost: 81118358,
        },
        sourceReductionResults: {
          workDays: 18.495340537480217,
          onSiteDays: 18.495340537480217,
          elementCost: 413722,
        },
        decontaminationResults: {
          workDays: 4.106290327642646,
          onSiteDays: 4.106290327642646,
          elementCost: 351784,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.227482910388067,
          onSiteDays: 35.988611327681305,
          elementCost: 423439,
        },
        incidentCommandResults: {
          onSiteDays: 3500.154389719961,
          elementCost: 10951275,
        },
        generalResults: {
          totalCost: 93258578,
          areaContaminated: 15111.360788604095,
          decontaminationRounds: 1,
          solidWasteProduced: 93050.16046203858,
          aqueousWasteProduced: 27157.067252032626,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 5379.236523802048,
          onSiteDays: 7877.830114702247,
          elementCost: 219377650,
        },
        sourceReductionResults: {
          workDays: 58.87081213614397,
          onSiteDays: 58.87081213614397,
          elementCost: 1443191,
        },
        decontaminationResults: {
          workDays: 4.449405685870304,
          onSiteDays: 4.449405685870304,
          elementCost: 579020,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 13.484065561800646,
          onSiteDays: 39.367896488708865,
          elementCost: 561729,
        },
        incidentCommandResults: {
          onSiteDays: 7980.51822901297,
          elementCost: 33920393,
        },
        generalResults: {
          totalCost: 255881983,
          areaContaminated: 18306.77509182188,
          decontaminationRounds: 1,
          solidWasteProduced: 109281.68846730523,
          aqueousWasteProduced: 137435.13062978268,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 37856944.096787535,
        sourceReductionTravelCost: 213573.62179874943,
        decontaminationTravelCost: 31035.843232474377,
        wasteSamplingTravelCost: 49318.52319977246,
        incidentCommandTravelCost: 2738898.611972945,
        totalTravelCost: 40889770.69699147,
      },
      totalEventCost: 418640336.69699144,
      totalEventDuration: 12240.251340523635,
      totalContaminationArea: 44855.422431865314,
      totalSolidWasteProduced: 202331.8489293438,
      totalAqueousWasteProduced: 164592.19788181531,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 96.15872689559117,
            onSiteDays: 291.23071994894207,
            elementCost: 8973561,
          },
          sourceReductionResults: {
            workDays: 8.494476493786161,
            onSiteDays: 8.494476493786161,
            elementCost: 115897,
          },
          decontaminationResults: {
            workDays: 4.997026996686363,
            onSiteDays: 4.997026996686363,
            elementCost: 198069,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.9149204391975848,
            onSiteDays: 7.040118336935772,
            elementCost: 37398,
          },
          incidentCommandResults: {
            onSiteDays: 311.7623417763504,
            elementCost: 1340008,
          },
          generalResults: {
            totalCost: 10664933,
            areaContaminated: 1132.12906091622,
            decontaminationRounds: 1,
            solidWasteProduced: 5310.904170187996,
            aqueousWasteProduced: 6022.23201810808,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 538.2521701789458,
            onSiteDays: 1497.6329747698114,
            elementCost: 49681582,
          },
          sourceReductionResults: {
            workDays: 10.52878337006835,
            onSiteDays: 10.52878337006835,
            elementCost: 376507,
          },
          decontaminationResults: {
            workDays: 4.294973553925514,
            onSiteDays: 4.294973553925514,
            elementCost: 266029,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.797587454451705,
            onSiteDays: 12.534786084892872,
            elementCost: 106461,
          },
          incidentCommandResults: {
            onSiteDays: 1524.9915177786982,
            elementCost: 7366598,
          },
          generalResults: {
            totalCost: 57797177,
            areaContaminated: 4631.437067384537,
            decontaminationRounds: 1,
            solidWasteProduced: 6291.323662199894,
            aqueousWasteProduced: 4989.328362084204,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 418.9899464655824,
            onSiteDays: 1068.9040634687751,
            elementCost: 23077633,
          },
          sourceReductionResults: {
            workDays: 81.8005028760819,
            onSiteDays: 81.8005028760819,
            elementCost: 1352254,
          },
          decontaminationResults: {
            workDays: 4.915945577415625,
            onSiteDays: 4.915945577415625,
            elementCost: 301394,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 8.017284511593177,
            onSiteDays: 27.5308236206288,
            elementCost: 238640,
          },
          incidentCommandResults: {
            onSiteDays: 1183.1513355429015,
            elementCost: 3803034,
          },
          generalResults: {
            totalCost: 28772955,
            areaContaminated: 4631.437067384537,
            decontaminationRounds: 1,
            solidWasteProduced: 18712.284694662965,
            aqueousWasteProduced: 4162.044693021038,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 754.8697529948153,
          onSiteDays: 2603.9381088670543,
          elementCost: 75748342,
        },
        sourceReductionResults: {
          workDays: 21.039968601284777,
          onSiteDays: 21.039968601284777,
          elementCost: 767453,
        },
        decontaminationResults: {
          workDays: 4.1235253855408,
          onSiteDays: 4.1235253855408,
          elementCost: 589735,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.465917092564932,
          onSiteDays: 29.518636478706856,
          elementCost: 215215,
        },
        incidentCommandResults: {
          onSiteDays: 2658.6202393325866,
          elementCost: 12621582,
        },
        generalResults: {
          totalCost: 89942327,
          areaContaminated: 19073.803028807466,
          decontaminationRounds: 1,
          solidWasteProduced: 50038.3661422629,
          aqueousWasteProduced: 57016.40802935062,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 424.39118362966923,
          onSiteDays: 2336.739985057319,
          elementCost: 47796442,
        },
        sourceReductionResults: {
          workDays: 1.2487786999853605,
          onSiteDays: 1.2487786999853605,
          elementCost: 43708,
        },
        decontaminationResults: {
          workDays: 3.972027419361292,
          onSiteDays: 3.972027419361292,
          elementCost: 700195,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 17.482245752279688,
          onSiteDays: 49.60357532810102,
          elementCost: 703340,
        },
        incidentCommandResults: {
          onSiteDays: 2391.564366504767,
          elementCost: 10888356,
        },
        generalResults: {
          totalCost: 60132041,
          areaContaminated: 11993.050146631289,
          decontaminationRounds: 1,
          solidWasteProduced: 42945.364820662384,
          aqueousWasteProduced: 37401.96631635543,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 12354712.181464579,
        sourceReductionTravelCost: 663348.1121872946,
        decontaminationTravelCost: 228157.4978994361,
        wasteSamplingTravelCost: 120858.77128589213,
        incidentCommandTravelCost: 4557812.307075512,
        totalTravelCost: 17924888.869912714,
      },
      totalEventCost: 265234321.8699127,
      totalEventDuration: 8070.089800935304,
      totalContaminationArea: 41461.85637112405,
      totalSolidWasteProduced: 123298.24348997613,
      totalAqueousWasteProduced: 109591.97941891936,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 6.001476313844375,
            onSiteDays: 26.65990853520621,
            elementCost: 466640,
          },
          sourceReductionResults: {
            workDays: 7.6951685957387195,
            onSiteDays: 7.6951685957387195,
            elementCost: 195806,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 7257,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 34.35507713094493,
            elementCost: 137428,
          },
          generalResults: {
            totalCost: 807131,
            areaContaminated: 1234.6663312613973,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 26.916289263931475,
            onSiteDays: 145.21422516573838,
            elementCost: 5069791,
          },
          sourceReductionResults: {
            workDays: 23.620130152193425,
            onSiteDays: 23.620130152193425,
            elementCost: 446885,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 197442,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 168.8343553179318,
            elementCost: 699912,
          },
          generalResults: {
            totalCost: 6414030,
            areaContaminated: 5050.907718796627,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 1383.321921825564,
            onSiteDays: 1892.1910467078183,
            elementCost: 42243897,
          },
          sourceReductionResults: {
            workDays: 0.828616187203485,
            onSiteDays: 0.828616187203485,
            elementCost: 19116,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 47942,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1893.0196628950218,
            elementCost: 6364125,
          },
          generalResults: {
            totalCost: 48675080,
            areaContaminated: 5050.907718796627,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 825.2999065725305,
          onSiteDays: 1681.98275750897,
          elementCost: 73244631,
        },
        sourceReductionResults: {
          workDays: 15.85524524659039,
          onSiteDays: 15.85524524659039,
          elementCost: 289487,
        },
        decontaminationResults: {
          workDays: 3.755422927149437,
          onSiteDays: 3.755422927149437,
          elementCost: 742711,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 15.575421279898968,
          onSiteDays: 34.74316565953953,
          elementCost: 499642,
        },
        incidentCommandResults: {
          onSiteDays: 1736.3365913422494,
          elementCost: 7733517,
        },
        generalResults: {
          totalCost: 82509988,
          areaContaminated: 15142.20846005301,
          decontaminationRounds: 1,
          solidWasteProduced: 63994.016416727914,
          aqueousWasteProduced: 99672.89745925699,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 3055.3909264769673,
          onSiteDays: 7746.241693511538,
          elementCost: 213273556,
        },
        sourceReductionResults: {
          workDays: 37.4455430244094,
          onSiteDays: 37.4455430244094,
          elementCost: 1185349,
        },
        decontaminationResults: {
          workDays: 4.000912503106732,
          onSiteDays: 4.000912503106732,
          elementCost: 996094,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.259130980744302,
          onSiteDays: 8.097662019566089,
          elementCost: 55245,
        },
        incidentCommandResults: {
          onSiteDays: 7795.78581105862,
          elementCost: 26885063,
        },
        generalResults: {
          totalCost: 242395307,
          areaContaminated: 19427.81373116869,
          decontaminationRounds: 1,
          solidWasteProduced: 134624.3690096603,
          aqueousWasteProduced: 72317.8888076533,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 19026682.160868037,
        sourceReductionTravelCost: 269500.39230481064,
        decontaminationTravelCost: 80109.6722452221,
        wasteSamplingTravelCost: 30679.105416658644,
        incidentCommandTravelCost: 3637617.2151594786,
        totalTravelCost: 23044588.54599421,
      },
      totalEventCost: 403846124.5459942,
      totalEventDuration: 11628.331497744768,
      totalContaminationArea: 45906.503960076356,
      totalSolidWasteProduced: 198618.3854263882,
      totalAqueousWasteProduced: 171990.7862669103,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 56.95144710242842,
            onSiteDays: 235.00352903335255,
            elementCost: 6639136,
          },
          sourceReductionResults: {
            workDays: 5.07313182849556,
            onSiteDays: 5.07313182849556,
            elementCost: 216641,
          },
          decontaminationResults: {
            workDays: 4.738221349599357,
            onSiteDays: 4.738221349599357,
            elementCost: 132064,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.25789020253402456,
            onSiteDays: 5.886226071298276,
            elementCost: 9580,
          },
          incidentCommandResults: {
            onSiteDays: 250.70110828274574,
            elementCost: 1021413,
          },
          generalResults: {
            totalCost: 8018834,
            areaContaminated: 1427.875221874154,
            decontaminationRounds: 1,
            solidWasteProduced: 2759.2251839817313,
            aqueousWasteProduced: 10103.275892853066,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 505.96463913345656,
            onSiteDays: 962.1065739038719,
            elementCost: 36892031,
          },
          sourceReductionResults: {
            workDays: 25.212559008107554,
            onSiteDays: 25.212559008107554,
            elementCost: 425817,
          },
          decontaminationResults: {
            workDays: 3.046031461573679,
            onSiteDays: 3.046031461573679,
            elementCost: 281435,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 13.61135451735751,
            onSiteDays: 48.665607253676484,
            elementCost: 343039,
          },
          incidentCommandResults: {
            onSiteDays: 1039.0307716272296,
            elementCost: 4555813,
          },
          generalResults: {
            totalCost: 42498135,
            areaContaminated: 5841.307725848812,
            decontaminationRounds: 1,
            solidWasteProduced: 22045.66730855553,
            aqueousWasteProduced: 12834.155506876526,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 464.33162177715224,
            onSiteDays: 1669.8473108029314,
            elementCost: 29034562,
          },
          sourceReductionResults: {
            workDays: 38.57921919198758,
            onSiteDays: 38.57921919198758,
            elementCost: 955152,
          },
          decontaminationResults: {
            workDays: 3.116153399952723,
            onSiteDays: 3.116153399952723,
            elementCost: 198666,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 12.075560206104212,
            onSiteDays: 33.11189967682795,
            elementCost: 362596,
          },
          incidentCommandResults: {
            onSiteDays: 1744.6545830716996,
            elementCost: 6737554,
          },
          generalResults: {
            totalCost: 37288530,
            areaContaminated: 5841.307725848812,
            decontaminationRounds: 1,
            solidWasteProduced: 20326.3387635203,
            aqueousWasteProduced: 44806.86140843326,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 302.4634551085195,
          onSiteDays: 1443.7006896145954,
          elementCost: 48004913,
        },
        sourceReductionResults: {
          workDays: 3.062624031547692,
          onSiteDays: 3.062624031547692,
          elementCost: 86502,
        },
        decontaminationResults: {
          workDays: 4.294503558262834,
          onSiteDays: 4.294503558262834,
          elementCost: 507752,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.018040460943899,
          onSiteDays: 30.77695030888271,
          elementCost: 344625,
        },
        incidentCommandResults: {
          onSiteDays: 1481.8347675132889,
          elementCost: 6454174,
        },
        generalResults: {
          totalCost: 55397966,
          areaContaminated: 11949.69447607866,
          decontaminationRounds: 1,
          solidWasteProduced: 52005.017792897466,
          aqueousWasteProduced: 73763.3441063912,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 687.8539091524658,
          onSiteDays: 4074.45187874731,
          elementCost: 111781134,
        },
        sourceReductionResults: {
          workDays: 66.17803099795606,
          onSiteDays: 66.17803099795606,
          elementCost: 1340686,
        },
        decontaminationResults: {
          workDays: 3.676842352998639,
          onSiteDays: 3.676842352998639,
          elementCost: 1011559,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.387475242692808,
          onSiteDays: 28.042386094244762,
          elementCost: 332237,
        },
        incidentCommandResults: {
          onSiteDays: 4172.349138192509,
          elementCost: 13317800,
        },
        generalResults: {
          totalCost: 127783416,
          areaContaminated: 18643.426706351736,
          decontaminationRounds: 1,
          solidWasteProduced: 22740.354953866914,
          aqueousWasteProduced: 101566.40466051742,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 31319787.838444144,
        sourceReductionTravelCost: 537702.8998217003,
        decontaminationTravelCost: 214998.11139810277,
        wasteSamplingTravelCost: 138711.16789055182,
        incidentCommandTravelCost: 4036439.7954643476,
        totalTravelCost: 36247639.81301884,
      },
      totalEventCost: 307234520.81301886,
      totalEventDuration: 8688.570368687473,
      totalContaminationArea: 43703.61185600217,
      totalSolidWasteProduced: 119876.60400282196,
      totalAqueousWasteProduced: 243074.04157507146,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 292.3318734698294,
            onSiteDays: 398.9806724503388,
            elementCost: 14775671,
          },
          sourceReductionResults: {
            workDays: 1.5881113626957934,
            onSiteDays: 1.5881113626957934,
            elementCost: 73452,
          },
          decontaminationResults: {
            workDays: 4.6970030199030885,
            onSiteDays: 4.6970030199030885,
            elementCost: 266823,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.23531420257103972,
            onSiteDays: 5.399678441565163,
            elementCost: 5815,
          },
          incidentCommandResults: {
            onSiteDays: 410.6654652745028,
            elementCost: 1551215,
          },
          generalResults: {
            totalCost: 16672976,
            areaContaminated: 1516.600564056611,
            decontaminationRounds: 1,
            solidWasteProduced: 8797.721138091454,
            aqueousWasteProduced: 3613.7779275997686,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 463.4791334100164,
            onSiteDays: 1964.7839780284178,
            elementCost: 48445789,
          },
          sourceReductionResults: {
            workDays: 25.369362030183705,
            onSiteDays: 25.369362030183705,
            elementCost: 438828,
          },
          decontaminationResults: {
            workDays: 4.1239849611008506,
            onSiteDays: 4.1239849611008506,
            elementCost: 341141,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7295434179696625,
            onSiteDays: 6.491692569747714,
            elementCost: 24296,
          },
          incidentCommandResults: {
            onSiteDays: 2000.7690175894502,
            elementCost: 8186362,
          },
          generalResults: {
            totalCost: 57436416,
            areaContaminated: 6204.275034777045,
            decontaminationRounds: 1,
            solidWasteProduced: 48495.282302882326,
            aqueousWasteProduced: 20109.7614345261,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 524.711673006649,
            onSiteDays: 1525.7668411534335,
            elementCost: 50234375,
          },
          sourceReductionResults: {
            workDays: 4.929117722033192,
            onSiteDays: 4.929117722033192,
            elementCost: 131643,
          },
          decontaminationResults: {
            workDays: 3.478871924448496,
            onSiteDays: 3.478871924448496,
            elementCost: 475348,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.4428263963373358,
            onSiteDays: 8.59991677382054,
            elementCost: 49909,
          },
          incidentCommandResults: {
            onSiteDays: 1542.7747475737356,
            elementCost: 4797543,
          },
          generalResults: {
            totalCost: 55688818,
            areaContaminated: 6204.275034777045,
            decontaminationRounds: 1,
            solidWasteProduced: 54662.70970487879,
            aqueousWasteProduced: 44258.56838877055,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 565.0974310556792,
          onSiteDays: 1917.3868021072249,
          elementCost: 103035408,
        },
        sourceReductionResults: {
          workDays: 40.37314136041148,
          onSiteDays: 40.37314136041148,
          elementCost: 865096,
        },
        decontaminationResults: {
          workDays: 4.206407883951069,
          onSiteDays: 4.206407883951069,
          elementCost: 453706,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 13.328564717989673,
          onSiteDays: 32.56047568668776,
          elementCost: 419733,
        },
        incidentCommandResults: {
          onSiteDays: 1994.526827038275,
          elementCost: 6703974,
        },
        generalResults: {
          totalCost: 111477917,
          areaContaminated: 13923.244307265439,
          decontaminationRounds: 1,
          solidWasteProduced: 74266.98730176485,
          aqueousWasteProduced: 81147.73710548079,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 238.72696333521728,
          onSiteDays: 2082.7600395210156,
          elementCost: 46484060,
        },
        sourceReductionResults: {
          workDays: 22.3445189261681,
          onSiteDays: 22.3445189261681,
          elementCost: 513430,
        },
        decontaminationResults: {
          workDays: 4.479363662069515,
          onSiteDays: 4.479363662069515,
          elementCost: 535588,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.259642974756769,
          onSiteDays: 10.226653404571135,
          elementCost: 79371,
        },
        incidentCommandResults: {
          onSiteDays: 2119.810575513824,
          elementCost: 7634305,
        },
        generalResults: {
          totalCost: 55246754,
          areaContaminated: 10035.17435466015,
          decontaminationRounds: 1,
          solidWasteProduced: 79522.68328701705,
          aqueousWasteProduced: 32912.41405225069,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 53239755.98088652,
        sourceReductionTravelCost: 259794.21738669666,
        decontaminationTravelCost: 134145.31486191455,
        wasteSamplingTravelCost: 61349.590331618485,
        incidentCommandTravelCost: 2888529.89623717,
        totalTravelCost: 56583574.99970393,
      },
      totalEventCost: 353106455.99970394,
      totalEventDuration: 8068.546632989788,
      totalContaminationArea: 37883.56929553629,
      totalSolidWasteProduced: 265745.3837346345,
      totalAqueousWasteProduced: 182042.2589086279,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 19.62090264507347,
            onSiteDays: 137.15682701646352,
            elementCost: 5013406,
          },
          sourceReductionResults: {
            workDays: 3.136954764464435,
            onSiteDays: 3.136954764464435,
            elementCost: 129719,
          },
          decontaminationResults: {
            workDays: 3.413052515688597,
            onSiteDays: 3.413052515688597,
            elementCost: 139547,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.1821107521652912,
            onSiteDays: 6.977132275704788,
            elementCost: 51577,
          },
          incidentCommandResults: {
            onSiteDays: 150.68396657232134,
            elementCost: 576491,
          },
          generalResults: {
            totalCost: 5910740,
            areaContaminated: 1571.5737634833768,
            decontaminationRounds: 1,
            solidWasteProduced: 6779.82775209997,
            aqueousWasteProduced: 6259.812399980865,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 196.27609014624022,
            onSiteDays: 631.1694933808237,
            elementCost: 44896533,
          },
          sourceReductionResults: {
            workDays: 3.2499696973571144,
            onSiteDays: 3.2499696973571144,
            elementCost: 114835,
          },
          decontaminationResults: {
            workDays: 3.7859473844957416,
            onSiteDays: 3.7859473844957416,
            elementCost: 355949,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.3652580752301733,
            onSiteDays: 6.067696552018459,
            elementCost: 16487,
          },
          incidentCommandResults: {
            onSiteDays: 644.273107014695,
            elementCost: 3128230,
          },
          generalResults: {
            totalCost: 48512034,
            areaContaminated: 6429.16539606836,
            decontaminationRounds: 1,
            solidWasteProduced: 1493.730076269554,
            aqueousWasteProduced: 9520.364773531282,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 121.50454638111533,
            onSiteDays: 407.02275614324225,
            elementCost: 19681436,
          },
          sourceReductionResults: {
            workDays: 7.546892568836808,
            onSiteDays: 7.546892568836808,
            elementCost: 181485,
          },
          decontaminationResults: {
            workDays: 3.896711857732551,
            onSiteDays: 3.896711857732551,
            elementCost: 177940,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 10.739844713058636,
            onSiteDays: 39.61149077490447,
            elementCost: 340004,
          },
          incidentCommandResults: {
            onSiteDays: 458.0778513447161,
            elementCost: 1757488,
          },
          generalResults: {
            totalCost: 22138353,
            areaContaminated: 6429.16539606836,
            decontaminationRounds: 1,
            solidWasteProduced: 58883.60678827956,
            aqueousWasteProduced: 2873.653037604283,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1581.4732514718016,
          onSiteDays: 4844.605780912812,
          elementCost: 167675235,
        },
        sourceReductionResults: {
          workDays: 162.94344613690595,
          onSiteDays: 162.94344613690595,
          elementCost: 2444473,
        },
        decontaminationResults: {
          workDays: 3.1916153599022925,
          onSiteDays: 3.1916153599022925,
          elementCost: 759844,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.131630586264068,
          onSiteDays: 26.558233362114066,
          elementCost: 386823,
        },
        incidentCommandResults: {
          onSiteDays: 5037.299075771734,
          elementCost: 22268860,
        },
        generalResults: {
          totalCost: 193535235,
          areaContaminated: 17656.850933017406,
          decontaminationRounds: 1,
          solidWasteProduced: 87343.36221301358,
          aqueousWasteProduced: 57267.8995673968,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 743.7578012389823,
          onSiteDays: 1595.7941040493265,
          elementCost: 79412912,
        },
        sourceReductionResults: {
          workDays: 33.35769578573188,
          onSiteDays: 33.35769578573188,
          elementCost: 1516453,
        },
        decontaminationResults: {
          workDays: 4.486438909891629,
          onSiteDays: 4.486438909891629,
          elementCost: 314981,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 28.712658143720574,
          onSiteDays: 69.4321988249074,
          elementCost: 782711,
        },
        incidentCommandResults: {
          onSiteDays: 1703.0704375698574,
          elementCost: 7814113,
        },
        generalResults: {
          totalCost: 89841170,
          areaContaminated: 14477.482082746881,
          decontaminationRounds: 1,
          solidWasteProduced: 131658.95237154653,
          aqueousWasteProduced: 109696.79787207893,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 23723837.204545703,
        sourceReductionTravelCost: 1468161.8307082546,
        decontaminationTravelCost: 166484.4570700602,
        wasteSamplingTravelCost: 142621.54477120822,
        incidentCommandTravelCost: 3622903.6921644416,
        totalTravelCost: 29124008.72925967,
      },
      totalEventCost: 389061540.72925967,
      totalEventDuration: 7993.404438273325,
      totalContaminationArea: 46564.23757138438,
      totalSolidWasteProduced: 286159.4792012092,
      totalAqueousWasteProduced: 185618.52765059215,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 154.82285195454006,
            onSiteDays: 377.01973768035566,
            elementCost: 8767067,
          },
          sourceReductionResults: {
            workDays: 5.669842914970185,
            onSiteDays: 5.669842914970185,
            elementCost: 181181,
          },
          decontaminationResults: {
            workDays: 4.78654784937076,
            onSiteDays: 4.78654784937076,
            elementCost: 364988,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.22226653524169818,
            onSiteDays: 5.889467775584449,
            elementCost: 9915,
          },
          incidentCommandResults: {
            onSiteDays: 393.365596220281,
            elementCost: 1499529,
          },
          generalResults: {
            totalCost: 10822680,
            areaContaminated: 1212.9414791874221,
            decontaminationRounds: 1,
            solidWasteProduced: 5389.0963365856405,
            aqueousWasteProduced: 2374.822193436175,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 879.9746972552651,
            onSiteDays: 1313.6484725071177,
            elementCost: 39946042,
          },
          sourceReductionResults: {
            workDays: 3.185445365805581,
            onSiteDays: 3.185445365805581,
            elementCost: 121856,
          },
          decontaminationResults: {
            workDays: 4.197062377165319,
            onSiteDays: 4.197062377165319,
            elementCost: 349455,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.0209138907074466,
            onSiteDays: 8.298998547415017,
            elementCost: 57212,
          },
          incidentCommandResults: {
            onSiteDays: 1329.3299787975038,
            elementCost: 6490050,
          },
          generalResults: {
            totalCost: 46964615,
            areaContaminated: 4962.033323948545,
            decontaminationRounds: 1,
            solidWasteProduced: 33134.4977744813,
            aqueousWasteProduced: 23062.17310475368,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 443.27548734114976,
            onSiteDays: 910.6836607534439,
            elementCost: 40919234,
          },
          sourceReductionResults: {
            workDays: 31.392469979738195,
            onSiteDays: 31.392469979738195,
            elementCost: 1162380,
          },
          decontaminationResults: {
            workDays: 3.434909012269906,
            onSiteDays: 3.434909012269906,
            elementCost: 366094,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7144214697418675,
            onSiteDays: 7.050982961123861,
            elementCost: 17274,
          },
          incidentCommandResults: {
            onSiteDays: 952.5620227065758,
            elementCost: 2953114,
          },
          generalResults: {
            totalCost: 45418096,
            areaContaminated: 4962.033323948545,
            decontaminationRounds: 1,
            solidWasteProduced: 12249.35672576208,
            aqueousWasteProduced: 9974.279719380713,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 169.44985307226787,
          onSiteDays: 903.4885960359009,
          elementCost: 28017714,
        },
        sourceReductionResults: {
          workDays: 9.937438426492523,
          onSiteDays: 9.937438426492523,
          elementCost: 150617,
        },
        decontaminationResults: {
          workDays: 3.379715061834947,
          onSiteDays: 3.379715061834947,
          elementCost: 628552,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 8.243942712265369,
          onSiteDays: 36.497446800106964,
          elementCost: 259034,
        },
        incidentCommandResults: {
          onSiteDays: 953.3031963243354,
          elementCost: 3789767,
        },
        generalResults: {
          totalCost: 32845684,
          areaContaminated: 13185.441271212287,
          decontaminationRounds: 1,
          solidWasteProduced: 80588.10368712926,
          aqueousWasteProduced: 93904.3103586427,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 522.5756909572112,
          onSiteDays: 2524.895113939047,
          elementCost: 46277252,
        },
        sourceReductionResults: {
          workDays: 20.529163098918417,
          onSiteDays: 20.529163098918417,
          elementCost: 737840,
        },
        decontaminationResults: {
          workDays: 3.6257331717353622,
          onSiteDays: 3.6257331717353622,
          elementCost: 237369,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.023338928775494,
          onSiteDays: 13.710647804911279,
          elementCost: 224179,
        },
        incidentCommandResults: {
          onSiteDays: 2562.760658014612,
          elementCost: 9551564,
        },
        generalResults: {
          totalCost: 57028204,
          areaContaminated: 15535.790010953457,
          decontaminationRounds: 1,
          solidWasteProduced: 110880.64576397453,
          aqueousWasteProduced: 111131.00633036203,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 9145927.889672522,
        sourceReductionTravelCost: 258279.86931942342,
        decontaminationTravelCost: 142734.3408907241,
        wasteSamplingTravelCost: 51844.978405723596,
        incidentCommandTravelCost: 1737702.366498184,
        totalTravelCost: 11336489.444786577,
      },
      totalEventCost: 204415768.44478658,
      totalEventDuration: 6191.321452063308,
      totalContaminationArea: 39858.23940925025,
      totalSolidWasteProduced: 242241.70028793282,
      totalAqueousWasteProduced: 240446.5917065753,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 17.451224466725225,
            onSiteDays: 94.43270104441432,
            elementCost: 2816106,
          },
          sourceReductionResults: {
            workDays: 3.0045050373715236,
            onSiteDays: 3.0045050373715236,
            elementCost: 135902,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 38251,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 97.43720608178585,
            elementCost: 375070,
          },
          generalResults: {
            totalCost: 3365329,
            areaContaminated: 1173.2877548411084,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 30.235006636367125,
            onSiteDays: 82.0752182762131,
            elementCost: 2038616,
          },
          sourceReductionResults: {
            workDays: 13.30004176821378,
            onSiteDays: 13.30004176821378,
            elementCost: 494972,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 48431,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 95.37526004442688,
            elementCost: 332933,
          },
          generalResults: {
            totalCost: 2914952,
            areaContaminated: 4799.813542531808,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 12.224523650104548,
            onSiteDays: 79.5337192665671,
            elementCost: 3162144,
          },
          sourceReductionResults: {
            workDays: 0.017920262866152413,
            onSiteDays: 0.017920262866152413,
            elementCost: 5925,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 160187,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 79.55163952943326,
            elementCost: 334610,
          },
          generalResults: {
            totalCost: 3662866,
            areaContaminated: 4799.813542531808,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 327.3911428943636,
          onSiteDays: 950.889366138299,
          elementCost: 28131719,
        },
        sourceReductionResults: {
          workDays: 22.069950748573824,
          onSiteDays: 22.069950748573824,
          elementCost: 613586,
        },
        decontaminationResults: {
          workDays: 4.390502806145349,
          onSiteDays: 4.390502806145349,
          elementCost: 576817,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.7322211202524325,
          onSiteDays: 12.926609477438358,
          elementCost: 108364,
        },
        incidentCommandResults: {
          onSiteDays: 990.2764291704565,
          elementCost: 4255952,
        },
        generalResults: {
          totalCost: 33686438,
          areaContaminated: 14631.863821910663,
          decontaminationRounds: 1,
          solidWasteProduced: 30573.453883518996,
          aqueousWasteProduced: 7551.760159710692,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 241.52990899218563,
          onSiteDays: 1540.1991362141462,
          elementCost: 53947125,
        },
        sourceReductionResults: {
          workDays: 25.08864697398299,
          onSiteDays: 25.08864697398299,
          elementCost: 666848,
        },
        decontaminationResults: {
          workDays: 4.474185428459706,
          onSiteDays: 4.474185428459706,
          elementCost: 263271,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 7.862807691773232,
          onSiteDays: 30.4453833447196,
          elementCost: 241363,
        },
        incidentCommandResults: {
          onSiteDays: 1600.2073519613086,
          elementCost: 6675447,
        },
        generalResults: {
          totalCost: 61794054,
          areaContaminated: 14334.503900530108,
          decontaminationRounds: 1,
          solidWasteProduced: 86441.9512459123,
          aqueousWasteProduced: 96428.3714874221,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 7032013.552741951,
        sourceReductionTravelCost: 266719.3561521904,
        decontaminationTravelCost: 47152.86051530468,
        wasteSamplingTravelCost: 45709.586939602785,
        incidentCommandTravelCost: 1190734.9530153072,
        totalTravelCost: 8582330.309364358,
      },
      totalEventCost: 114005969.30936436,
      totalEventDuration: 2862.847886787411,
      totalContaminationArea: 39739.28256234549,
      totalSolidWasteProduced: 117015.40512943131,
      totalAqueousWasteProduced: 103980.1316471328,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 122.27298330964089,
            onSiteDays: 308.582757609297,
            elementCost: 6344259,
          },
          sourceReductionResults: {
            workDays: 0.6069045613658096,
            onSiteDays: 0.6069045613658096,
            elementCost: 24488,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 43032,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 309.1896621706628,
            elementCost: 1199700,
          },
          generalResults: {
            totalCost: 7611479,
            areaContaminated: 1127.7096760117483,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 92.84435708680522,
            onSiteDays: 447.1662431275075,
            elementCost: 17042656,
          },
          sourceReductionResults: {
            workDays: 16.24071426351071,
            onSiteDays: 16.24071426351071,
            elementCost: 903639,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 57064,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 463.40695739101824,
            elementCost: 2262778,
          },
          generalResults: {
            totalCost: 20266137,
            areaContaminated: 4613.3577655026065,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 72.67365688350128,
            onSiteDays: 355.9128869812977,
            elementCost: 10868995,
          },
          sourceReductionResults: {
            workDays: 11.250448151955533,
            onSiteDays: 11.250448151955533,
            elementCost: 445981,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 55789,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 367.1633351332532,
            elementCost: 1281875,
          },
          generalResults: {
            totalCost: 12652640,
            areaContaminated: 4613.3577655026065,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1292.983262324729,
          onSiteDays: 3342.9645307905575,
          elementCost: 104275706,
        },
        sourceReductionResults: {
          workDays: 55.59774898830736,
          onSiteDays: 55.59774898830736,
          elementCost: 2582466,
        },
        decontaminationResults: {
          workDays: 4.969900636461075,
          onSiteDays: 4.969900636461075,
          elementCost: 977451,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.975303459776002,
          onSiteDays: 21.064081285693526,
          elementCost: 294086,
        },
        incidentCommandResults: {
          onSiteDays: 3424.59626170102,
          elementCost: 14962266,
        },
        generalResults: {
          totalCost: 123091975,
          areaContaminated: 19042.99577442999,
          decontaminationRounds: 1,
          solidWasteProduced: 72381.1549863125,
          aqueousWasteProduced: 12424.476941616122,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 397.55874656220993,
          onSiteDays: 2666.6019451153397,
          elementCost: 63284877,
        },
        sourceReductionResults: {
          workDays: 71.82085726160444,
          onSiteDays: 71.82085726160444,
          elementCost: 3228531,
        },
        decontaminationResults: {
          workDays: 3.7916213457453116,
          onSiteDays: 3.7916213457453116,
          elementCost: 603528,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 7.766634329985866,
          onSiteDays: 20.88967623042037,
          elementCost: 221247,
        },
        incidentCommandResults: {
          onSiteDays: 2763.1040999531097,
          elementCost: 11454373,
        },
        generalResults: {
          totalCost: 78792556,
          areaContaminated: 11158.455997824229,
          decontaminationRounds: 1,
          solidWasteProduced: 4804.675626227397,
          aqueousWasteProduced: 65636.5197194029,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 46872324.77523128,
        sourceReductionTravelCost: 193734.95199460542,
        decontaminationTravelCost: 90193.95681317529,
        wasteSamplingTravelCost: 33811.22814809569,
        incidentCommandTravelCost: 3592379.3826076007,
        totalTravelCost: 50782444.29479476,
      },
      totalEventCost: 293197231.29479474,
      totalEventDuration: 7327.460316349064,
      totalContaminationArea: 40555.87697927118,
      totalSolidWasteProduced: 77185.8306125399,
      totalAqueousWasteProduced: 78060.99666101902,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 29.5940957343224,
            onSiteDays: 210.59744321598936,
            elementCost: 5439599,
          },
          sourceReductionResults: {
            workDays: 1.6327099060652634,
            onSiteDays: 1.6327099060652634,
            elementCost: 100364,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 37353,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 212.23015312205462,
            elementCost: 874517,
          },
          generalResults: {
            totalCost: 6451833,
            areaContaminated: 1176.0113730005148,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 386.4096074809722,
            onSiteDays: 757.8863580095118,
            elementCost: 19869551,
          },
          sourceReductionResults: {
            workDays: 4.99185785457083,
            onSiteDays: 4.99185785457083,
            elementCost: 100180,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 16361,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 762.8782158640827,
            elementCost: 2581954,
          },
          generalResults: {
            totalCost: 22568046,
            areaContaminated: 4810.955616820287,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 39.79405450376943,
            onSiteDays: 168.7832120841269,
            elementCost: 4727298,
          },
          sourceReductionResults: {
            workDays: 7.54836063254429,
            onSiteDays: 7.54836063254429,
            elementCost: 127060,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 175251,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 176.3315727166712,
            elementCost: 771953,
          },
          generalResults: {
            totalCost: 5801562,
            areaContaminated: 4810.955616820287,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 302.0709136991572,
          onSiteDays: 947.7000515269531,
          elementCost: 62306162,
        },
        sourceReductionResults: {
          workDays: 3.3483454716516823,
          onSiteDays: 3.3483454716516823,
          elementCost: 181632,
        },
        decontaminationResults: {
          workDays: 3.2937664096927657,
          onSiteDays: 3.2937664096927657,
          elementCost: 401066,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 18.73814882316144,
          onSiteDays: 56.91638800821792,
          elementCost: 670622,
        },
        incidentCommandResults: {
          onSiteDays: 1011.2585514165155,
          elementCost: 4613429,
        },
        generalResults: {
          totalCost: 68172911,
          areaContaminated: 19566.2957778122,
          decontaminationRounds: 1,
          solidWasteProduced: 15975.851408964616,
          aqueousWasteProduced: 111217.04606940344,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 608.6377140382051,
          onSiteDays: 1667.3967797686378,
          elementCost: 99639769,
        },
        sourceReductionResults: {
          workDays: 199.0088360940449,
          onSiteDays: 199.0088360940449,
          elementCost: 3398136,
        },
        decontaminationResults: {
          workDays: 3.1303477394698067,
          onSiteDays: 3.1303477394698067,
          elementCost: 415745,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 13.260201206740744,
          onSiteDays: 41.699314087568055,
          elementCost: 344135,
        },
        incidentCommandResults: {
          onSiteDays: 1911.2352776897205,
          elementCost: 7819042,
        },
        generalResults: {
          totalCost: 111616827,
          areaContaminated: 13506.524449269727,
          decontaminationRounds: 1,
          solidWasteProduced: 69575.73271915343,
          aqueousWasteProduced: 86133.27248645952,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 29051490.66674284,
        sourceReductionTravelCost: 1521332.4518876867,
        decontaminationTravelCost: 83561.92303653606,
        wasteSamplingTravelCost: 80796.85530316136,
        incidentCommandTravelCost: 1520605.293470312,
        totalTravelCost: 32257787.19044053,
      },
      totalEventCost: 246868966.19044054,
      totalEventDuration: 4073.9337708090443,
      totalContaminationArea: 43870.742833723016,
      totalSolidWasteProduced: 85551.58412811805,
      totalAqueousWasteProduced: 197350.31855586296,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 8.178829018426299,
            onSiteDays: 61.592894094177225,
            elementCost: 2961482,
          },
          sourceReductionResults: {
            workDays: 2.566826961659893,
            onSiteDays: 2.566826961659893,
            elementCost: 142967,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 39079,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 64.15972105583712,
            elementCost: 272767,
          },
          generalResults: {
            totalCost: 3416295,
            areaContaminated: 1182.6723609015926,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 317.37988951292476,
            onSiteDays: 1040.431003179139,
            elementCost: 29134814,
          },
          sourceReductionResults: {
            workDays: 28.71171396390308,
            onSiteDays: 28.71171396390308,
            elementCost: 572817,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 179366,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1069.142717143042,
            elementCost: 4370729,
          },
          generalResults: {
            totalCost: 34257726,
            areaContaminated: 4838.205112779243,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 76.87094202044068,
            onSiteDays: 238.5198316095667,
            elementCost: 15537199,
          },
          sourceReductionResults: {
            workDays: 16.553336590500923,
            onSiteDays: 16.553336590500923,
            elementCost: 686028,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 149478,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 255.0731682000676,
            elementCost: 1215955,
          },
          generalResults: {
            totalCost: 17588660,
            areaContaminated: 4838.205112779243,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 582.9309227372398,
          onSiteDays: 2707.9282229624855,
          elementCost: 87061272,
        },
        sourceReductionResults: {
          workDays: 66.20995504800243,
          onSiteDays: 66.20995504800243,
          elementCost: 1039387,
        },
        decontaminationResults: {
          workDays: 3.1813348606651033,
          onSiteDays: 3.1813348606651033,
          elementCost: 556753,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.4758984684056056,
          onSiteDays: 9.212382142286124,
          elementCost: 64627,
        },
        incidentCommandResults: {
          onSiteDays: 2786.531895013439,
          elementCost: 9560531,
        },
        generalResults: {
          totalCost: 98282570,
          areaContaminated: 12526.30522300636,
          decontaminationRounds: 1,
          solidWasteProduced: 51917.53772828173,
          aqueousWasteProduced: 44785.45838954296,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 452.75500704331057,
          onSiteDays: 1445.6826886436095,
          elementCost: 70769240,
        },
        sourceReductionResults: {
          workDays: 3.774767368986902,
          onSiteDays: 3.774767368986902,
          elementCost: 171919,
        },
        decontaminationResults: {
          workDays: 4.045282938295343,
          onSiteDays: 4.045282938295343,
          elementCost: 503130,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.8139442510891441,
          onSiteDays: 9.140431056912112,
          elementCost: 63495,
        },
        incidentCommandResults: {
          onSiteDays: 1462.6431700078037,
          elementCost: 5654385,
        },
        generalResults: {
          totalCost: 77162169,
          areaContaminated: 13410.488013920287,
          decontaminationRounds: 1,
          solidWasteProduced: 90720.01745238488,
          aqueousWasteProduced: 4274.61353814685,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 27400167.084933817,
        sourceReductionTravelCost: 713714.3313321013,
        decontaminationTravelCost: 58453.92021726551,
        wasteSamplingTravelCost: 18172.350540991607,
        incidentCommandTravelCost: 2979785.3611254734,
        totalTravelCost: 31170293.04814965,
      },
      totalEventCost: 261877713.04814965,
      totalEventDuration: 5637.55067142019,
      totalContaminationArea: 36795.87582338673,
      totalSolidWasteProduced: 142637.55518066662,
      totalAqueousWasteProduced: 49060.07192768981,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 26.62648018510317,
            onSiteDays: 170.61608292028853,
            elementCost: 4061951,
          },
          sourceReductionResults: {
            workDays: 0.002964298790223436,
            onSiteDays: 0.002964298790223436,
            elementCost: 4570,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 42650,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 170.61904721907877,
            elementCost: 561504,
          },
          generalResults: {
            totalCost: 4670675,
            areaContaminated: 1137.0120546163312,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 153.87834232222752,
            onSiteDays: 914.2747122013557,
            elementCost: 29247505,
          },
          sourceReductionResults: {
            workDays: 30.02163448175682,
            onSiteDays: 30.02163448175682,
            elementCost: 569354,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 56408,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 944.2963466831125,
            elementCost: 2917294,
          },
          generalResults: {
            totalCost: 32790561,
            areaContaminated: 4651.412950703172,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 85.18672052765965,
            onSiteDays: 725.2785935880904,
            elementCost: 10764996,
          },
          sourceReductionResults: {
            workDays: 17.847395429392424,
            onSiteDays: 17.847395429392424,
            elementCost: 245202,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 121565,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 743.1259890174829,
            elementCost: 3444341,
          },
          generalResults: {
            totalCost: 14576104,
            areaContaminated: 4651.412950703172,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 876.9689487985609,
          onSiteDays: 3052.9664741820716,
          elementCost: 95833762,
        },
        sourceReductionResults: {
          workDays: 26.58404996886934,
          onSiteDays: 26.58404996886934,
          elementCost: 1056812,
        },
        decontaminationResults: {
          workDays: 4.414977810209379,
          onSiteDays: 4.414977810209379,
          elementCost: 298953,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.890636987539405,
          onSiteDays: 13.242399308546897,
          elementCost: 186927,
        },
        incidentCommandResults: {
          onSiteDays: 3097.207901269697,
          elementCost: 13312270,
        },
        generalResults: {
          totalCost: 110688724,
          areaContaminated: 14476.01450012904,
          decontaminationRounds: 1,
          solidWasteProduced: 30433.84589924395,
          aqueousWasteProduced: 16868.20285091047,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 634.2401863593493,
          onSiteDays: 2112.142931813532,
          elementCost: 61945488,
        },
        sourceReductionResults: {
          workDays: 58.31565649930019,
          onSiteDays: 58.31565649930019,
          elementCost: 1279870,
        },
        decontaminationResults: {
          workDays: 3.4153106371907773,
          onSiteDays: 3.4153106371907773,
          elementCost: 471457,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.502229622250745,
          onSiteDays: 49.478060570568694,
          elementCost: 394030,
        },
        incidentCommandResults: {
          onSiteDays: 2223.3519595205917,
          elementCost: 9308779,
        },
        generalResults: {
          totalCost: 73399624,
          areaContaminated: 12972.005911693253,
          decontaminationRounds: 1,
          solidWasteProduced: 18929.554982080605,
          aqueousWasteProduced: 6519.618645847482,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 27606670.594223935,
        sourceReductionTravelCost: 693643.6680431656,
        decontaminationTravelCost: 61127.02472576292,
        wasteSamplingTravelCost: 45317.76438859559,
        incidentCommandTravelCost: 2246453.703818244,
        totalTravelCost: 30653212.7551997,
      },
      totalEventCost: 266778900.7551997,
      totalEventDuration: 7178.601243709963,
      totalContaminationArea: 37887.858367844965,
      totalSolidWasteProduced: 49363.40088132455,
      totalAqueousWasteProduced: 23387.821496757955,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 38.100076753087095,
            onSiteDays: 266.6081929416758,
            elementCost: 3750056,
          },
          sourceReductionResults: {
            workDays: 0.9976911679610923,
            onSiteDays: 0.9976911679610923,
            elementCost: 31137,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 21238,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 267.60588410963686,
            elementCost: 1227324,
          },
          generalResults: {
            totalCost: 5029755,
            areaContaminated: 1174.029053757326,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 77.46282306528394,
            onSiteDays: 208.56383629826152,
            elementCost: 5088553,
          },
          sourceReductionResults: {
            workDays: 14.55532148299227,
            onSiteDays: 14.55532148299227,
            elementCost: 230914,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 91141,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 223.1191577812538,
            elementCost: 940516,
          },
          generalResults: {
            totalCost: 6351124,
            areaContaminated: 4802.846129007243,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 103.57669840453016,
            onSiteDays: 173.42667996516258,
            elementCost: 9491341,
          },
          sourceReductionResults: {
            workDays: 2.2398953456746717,
            onSiteDays: 2.2398953456746717,
            elementCost: 62728,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 19694,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 175.66657531083726,
            elementCost: 838805,
          },
          generalResults: {
            totalCost: 10412568,
            areaContaminated: 4802.846129007243,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1280.9754588145915,
          onSiteDays: 3266.4340138945763,
          elementCost: 115789944,
        },
        sourceReductionResults: {
          workDays: 85.24922127303626,
          onSiteDays: 85.24922127303626,
          elementCost: 1263594,
        },
        decontaminationResults: {
          workDays: 3.9131550316030985,
          onSiteDays: 3.9131550316030985,
          elementCost: 290745,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 12.277048125791369,
          onSiteDays: 40.372396245009625,
          elementCost: 383933,
        },
        incidentCommandResults: {
          onSiteDays: 3395.9687864442253,
          elementCost: 13862978,
        },
        generalResults: {
          totalCost: 131591194,
          areaContaminated: 13349.198550765683,
          decontaminationRounds: 1,
          solidWasteProduced: 35886.74664161048,
          aqueousWasteProduced: 17340.864432454706,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 670.6597686073694,
          onSiteDays: 4437.404399596488,
          elementCost: 83889558,
        },
        sourceReductionResults: {
          workDays: 11.994529739293755,
          onSiteDays: 11.994529739293755,
          elementCost: 468739,
        },
        decontaminationResults: {
          workDays: 4.453200308944378,
          onSiteDays: 4.453200308944378,
          elementCost: 421011,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.5874106630490274,
          onSiteDays: 7.367438704352654,
          elementCost: 56209,
        },
        incidentCommandResults: {
          onSiteDays: 4461.219568349079,
          elementCost: 17129402,
        },
        generalResults: {
          totalCost: 101964919,
          areaContaminated: 16352.435355168414,
          decontaminationRounds: 1,
          solidWasteProduced: 26406.506374786946,
          aqueousWasteProduced: 61237.72919075362,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 50837619.67653545,
        sourceReductionTravelCost: 700141.9487213799,
        decontaminationTravelCost: 58543.98420680918,
        wasteSamplingTravelCost: 48763.63440706859,
        incidentCommandTravelCost: 4239755.875659703,
        totalTravelCost: 55884825.11953041,
      },
      totalEventCost: 311234385.11953044,
      totalEventDuration: 8523.579971995032,
      totalContaminationArea: 40481.3552177059,
      totalSolidWasteProduced: 62293.25301639743,
      totalAqueousWasteProduced: 78578.59362320832,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 21.057845882676148,
            onSiteDays: 86.02145273642851,
            elementCost: 4254368,
          },
          sourceReductionResults: {
            workDays: 0.2925979115387948,
            onSiteDays: 0.2925979115387948,
            elementCost: 18848,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 16828,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 86.3140506479673,
            elementCost: 394866,
          },
          generalResults: {
            totalCost: 4684910,
            areaContaminated: 1412.3416470307293,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 329.8804197088467,
            onSiteDays: 944.6178695300166,
            elementCost: 23943587,
          },
          sourceReductionResults: {
            workDays: 4.5090042171488545,
            onSiteDays: 4.5090042171488545,
            elementCost: 236324,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 212781,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 949.1268737471654,
            elementCost: 3923886,
          },
          generalResults: {
            totalCost: 28316578,
            areaContaminated: 5777.761283307528,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 423.60539205026066,
            onSiteDays: 845.8012754738579,
            elementCost: 32979651,
          },
          sourceReductionResults: {
            workDays: 18.183056663082972,
            onSiteDays: 18.183056663082972,
            elementCost: 511369,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 178017,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 863.9843321369409,
            elementCost: 3151396,
          },
          generalResults: {
            totalCost: 36820433,
            areaContaminated: 5777.761283307528,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 377.42266218021746,
          onSiteDays: 1991.8339506306497,
          elementCost: 61762289,
        },
        sourceReductionResults: {
          workDays: 189.60024357339762,
          onSiteDays: 189.60024357339762,
          elementCost: 4780035,
        },
        decontaminationResults: {
          workDays: 4.21366709545573,
          onSiteDays: 4.21366709545573,
          elementCost: 525142,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.484512469833744,
          onSiteDays: 37.78434144014317,
          elementCost: 453385,
        },
        incidentCommandResults: {
          onSiteDays: 2223.432202739646,
          elementCost: 7004582,
        },
        generalResults: {
          totalCost: 74525433,
          areaContaminated: 17381.379510597646,
          decontaminationRounds: 1,
          solidWasteProduced: 67515.09020832437,
          aqueousWasteProduced: 73445.0376158497,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 298.4601139941485,
          onSiteDays: 1898.0211233781617,
          elementCost: 79295407,
        },
        sourceReductionResults: {
          workDays: 60.505699219874714,
          onSiteDays: 60.505699219874714,
          elementCost: 2233057,
        },
        decontaminationResults: {
          workDays: 3.409226439988526,
          onSiteDays: 3.409226439988526,
          elementCost: 521547,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 17.87181461355245,
          onSiteDays: 53.93436154842371,
          elementCost: 693498,
        },
        incidentCommandResults: {
          onSiteDays: 2015.8704105864488,
          elementCost: 6911011,
        },
        generalResults: {
          totalCost: 89654520,
          areaContaminated: 18907.656224261595,
          decontaminationRounds: 1,
          solidWasteProduced: 175877.50892599561,
          aqueousWasteProduced: 59483.5659021352,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 27255038.563170146,
        sourceReductionTravelCost: 210699.15554618763,
        decontaminationTravelCost: 105613.80092295709,
        wasteSamplingTravelCost: 93279.66448809279,
        incidentCommandTravelCost: 3629527.786543799,
        totalTravelCost: 31294158.97067118,
      },
      totalEventCost: 265296032.97067118,
      totalEventDuration: 6138.727869858169,
      totalContaminationArea: 49256.89994850503,
      totalSolidWasteProduced: 243392.59913432,
      totalAqueousWasteProduced: 132928.60351798488,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 63.36010881889777,
            onSiteDays: 330.919479175213,
            elementCost: 7357802,
          },
          sourceReductionResults: {
            workDays: 4.0954723696315805,
            onSiteDays: 4.0954723696315805,
            elementCost: 146097,
          },
          decontaminationResults: {
            workDays: 3.2764041810940028,
            onSiteDays: 3.2764041810940028,
            elementCost: 290521,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.0708950798300623,
            onSiteDays: 8.100831269984418,
            elementCost: 29657,
          },
          incidentCommandResults: {
            onSiteDays: 346.392186995923,
            elementCost: 1615709,
          },
          generalResults: {
            totalCost: 9439786,
            areaContaminated: 1231.0725467059824,
            decontaminationRounds: 1,
            solidWasteProduced: 6192.917334037317,
            aqueousWasteProduced: 3975.129896476477,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 288.96762577123684,
            onSiteDays: 873.2410669587878,
            elementCost: 29787899,
          },
          sourceReductionResults: {
            workDays: 0.4545407715487108,
            onSiteDays: 0.4545407715487108,
            elementCost: 22992,
          },
          decontaminationResults: {
            workDays: 4.561493929373448,
            onSiteDays: 4.561493929373448,
            elementCost: 327554,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.2516853647955166,
            onSiteDays: 11.560459838759888,
            elementCost: 73512,
          },
          incidentCommandResults: {
            onSiteDays: 889.8175614984699,
            elementCost: 3662993,
          },
          generalResults: {
            totalCost: 33874950,
            areaContaminated: 5036.20587288811,
            decontaminationRounds: 1,
            solidWasteProduced: 44420.8554977139,
            aqueousWasteProduced: 15435.367360943808,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 129.76116875112197,
            onSiteDays: 640.7193158058125,
            elementCost: 15399317,
          },
          sourceReductionResults: {
            workDays: 7.291194171419785,
            onSiteDays: 7.291194171419785,
            elementCost: 205956,
          },
          decontaminationResults: {
            workDays: 3.421203437825014,
            onSiteDays: 3.421203437825014,
            elementCost: 328956,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.6207745346655936,
            onSiteDays: 5.211032381613822,
            elementCost: 24797,
          },
          incidentCommandResults: {
            onSiteDays: 656.6427457966711,
            elementCost: 3033173,
          },
          generalResults: {
            totalCost: 18992199,
            areaContaminated: 5036.20587288811,
            decontaminationRounds: 1,
            solidWasteProduced: 16047.402247720174,
            aqueousWasteProduced: 21089.375383761115,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1083.761051124078,
          onSiteDays: 3487.789233417575,
          elementCost: 144095934,
        },
        sourceReductionResults: {
          workDays: 3.949615252438615,
          onSiteDays: 3.949615252438615,
          elementCost: 114044,
        },
        decontaminationResults: {
          workDays: 3.629564043746694,
          onSiteDays: 3.629564043746694,
          elementCost: 487120,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.8483971727962594,
          onSiteDays: 11.892729616940594,
          elementCost: 110225,
        },
        incidentCommandResults: {
          onSiteDays: 3507.2611423307003,
          elementCost: 13391187,
        },
        generalResults: {
          totalCost: 158198510,
          areaContaminated: 12434.431741115272,
          decontaminationRounds: 1,
          solidWasteProduced: 114080.33331323373,
          aqueousWasteProduced: 32544.10828241683,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 480.4451421630764,
          onSiteDays: 2060.4196290603004,
          elementCost: 80393267,
        },
        sourceReductionResults: {
          workDays: 30.06703280302908,
          onSiteDays: 30.06703280302908,
          elementCost: 815970,
        },
        decontaminationResults: {
          workDays: 4.332040713944481,
          onSiteDays: 4.332040713944481,
          elementCost: 470277,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 25.825526935452014,
          onSiteDays: 61.96926109891133,
          elementCost: 734879,
        },
        incidentCommandResults: {
          onSiteDays: 2156.7879636761854,
          elementCost: 7190880,
        },
        generalResults: {
          totalCost: 89605273,
          areaContaminated: 11170.838794543128,
          decontaminationRounds: 1,
          solidWasteProduced: 65617.55191776887,
          aqueousWasteProduced: 64655.41073905272,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 54444573.07735087,
        sourceReductionTravelCost: 286186.6386039265,
        decontaminationTravelCost: 139641.92678503165,
        wasteSamplingTravelCost: 101020.17779045812,
        incidentCommandTravelCost: 2561892.2490797886,
        totalTravelCost: 57533314.06961007,
      },
      totalEventCost: 367644032.06961006,
      totalEventDuration: 7556.90160029795,
      totalContaminationArea: 34908.754828140605,
      totalSolidWasteProduced: 246359.060310474,
      totalAqueousWasteProduced: 137699.39166265095,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 122.44288458452931,
            onSiteDays: 195.38852157831164,
            elementCost: 9148822,
          },
          sourceReductionResults: {
            workDays: 10.856205267349297,
            onSiteDays: 10.856205267349297,
            elementCost: 176024,
          },
          decontaminationResults: {
            workDays: 4.277323472145322,
            onSiteDays: 4.277323472145322,
            elementCost: 217659,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.977469064728514,
            onSiteDays: 10.647667790351903,
            elementCost: 89547,
          },
          incidentCommandResults: {
            onSiteDays: 221.16971810815818,
            elementCost: 1045170,
          },
          generalResults: {
            totalCost: 10677222,
            areaContaminated: 1137.414488225833,
            decontaminationRounds: 1,
            solidWasteProduced: 1555.9941947681948,
            aqueousWasteProduced: 4081.3936334321706,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 226.3512411963685,
            onSiteDays: 481.5365645926287,
            elementCost: 19822772,
          },
          sourceReductionResults: {
            workDays: 9.182350783994078,
            onSiteDays: 9.182350783994078,
            elementCost: 249438,
          },
          decontaminationResults: {
            workDays: 4.537044220496212,
            onSiteDays: 4.537044220496212,
            elementCost: 298852,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 13.192873291477293,
            onSiteDays: 25.14138359171914,
            elementCost: 317206,
          },
          incidentCommandResults: {
            onSiteDays: 520.3973431888381,
            elementCost: 2209318,
          },
          generalResults: {
            totalCost: 22897586,
            areaContaminated: 4653.059270014772,
            decontaminationRounds: 1,
            solidWasteProduced: 6326.9529400426745,
            aqueousWasteProduced: 23020.71589423951,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 288.52878999642513,
            onSiteDays: 1780.0049773708895,
            elementCost: 19453481,
          },
          sourceReductionResults: {
            workDays: 10.953211716318407,
            onSiteDays: 10.953211716318407,
            elementCost: 379967,
          },
          decontaminationResults: {
            workDays: 4.823635289404456,
            onSiteDays: 4.823635289404456,
            elementCost: 326115,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.4898318582182015,
            onSiteDays: 12.179373347046402,
            elementCost: 93393,
          },
          incidentCommandResults: {
            onSiteDays: 1807.9611977236586,
            elementCost: 5626978,
          },
          generalResults: {
            totalCost: 25879934,
            areaContaminated: 4653.059270014772,
            decontaminationRounds: 1,
            solidWasteProduced: 41359.29604589,
            aqueousWasteProduced: 13709.860552577247,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 379.1616993308661,
          onSiteDays: 2579.1214761093297,
          elementCost: 57739261,
        },
        sourceReductionResults: {
          workDays: 32.70563561647243,
          onSiteDays: 32.70563561647243,
          elementCost: 1510353,
        },
        decontaminationResults: {
          workDays: 3.837535745193608,
          onSiteDays: 3.837535745193608,
          elementCost: 474353,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.4303928842535525,
          onSiteDays: 13.969561650504911,
          elementCost: 110938,
        },
        incidentCommandResults: {
          onSiteDays: 2629.634209121501,
          elementCost: 8034023,
        },
        generalResults: {
          totalCost: 67868928,
          areaContaminated: 12044.450229044178,
          decontaminationRounds: 1,
          solidWasteProduced: 11702.489478808491,
          aqueousWasteProduced: 52170.18967284533,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 761.0325839752013,
          onSiteDays: 2670.804993063869,
          elementCost: 48948421,
        },
        sourceReductionResults: {
          workDays: 38.733084068123475,
          onSiteDays: 38.733084068123475,
          elementCost: 1636016,
        },
        decontaminationResults: {
          workDays: 3.4686631244767137,
          onSiteDays: 3.4686631244767137,
          elementCost: 402541,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.519132050700028,
          onSiteDays: 21.62760393216353,
          elementCost: 247498,
        },
        incidentCommandResults: {
          onSiteDays: 2734.6343441886324,
          elementCost: 12986603,
        },
        generalResults: {
          totalCost: 64221079,
          areaContaminated: 10983.497403912806,
          decontaminationRounds: 1,
          solidWasteProduced: 35165.42860426425,
          aqueousWasteProduced: 80587.62611397116,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 60151731.75640296,
        sourceReductionTravelCost: 255155.81896993204,
        decontaminationTravelCost: 154837.92319585304,
        wasteSamplingTravelCost: 55210.5947949529,
        incidentCommandTravelCost: 3363402.007959784,
        totalTravelCost: 63980338.101323485,
      },
      totalEventCost: 255525087.1013235,
      totalEventDuration: 7913.796812330789,
      totalContaminationArea: 33471.480661212365,
      totalSolidWasteProduced: 96110.16126377361,
      totalAqueousWasteProduced: 173569.78586706542,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 63.82077488868134,
            onSiteDays: 198.29556096026533,
            elementCost: 6149139,
          },
          sourceReductionResults: {
            workDays: 2.36122350088139,
            onSiteDays: 2.36122350088139,
            elementCost: 124412,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 20781,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 200.6567844611467,
            elementCost: 858971,
          },
          generalResults: {
            totalCost: 7153303,
            areaContaminated: 1132.0673819012777,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 10.589963261523874,
            onSiteDays: 49.06934787446288,
            elementCost: 4238140,
          },
          sourceReductionResults: {
            workDays: 22.618287405844242,
            onSiteDays: 22.618287405844242,
            elementCost: 499046,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 158923,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 71.68763528030712,
            elementCost: 355210,
          },
          generalResults: {
            totalCost: 5251319,
            areaContaminated: 4631.184744141591,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 87.29400755701968,
            onSiteDays: 657.0733194571987,
            elementCost: 20336200,
          },
          sourceReductionResults: {
            workDays: 57.799902042266055,
            onSiteDays: 57.799902042266055,
            elementCost: 735652,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 138015,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 714.8732214994648,
            elementCost: 2909632,
          },
          generalResults: {
            totalCost: 24119499,
            areaContaminated: 4631.184744141591,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1094.6773424155688,
          onSiteDays: 4528.834710294386,
          elementCost: 83156644,
        },
        sourceReductionResults: {
          workDays: 35.09051823357478,
          onSiteDays: 35.09051823357478,
          elementCost: 1688377,
        },
        decontaminationResults: {
          workDays: 4.249050375364965,
          onSiteDays: 4.249050375364965,
          elementCost: 853719,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.84650700234341,
          onSiteDays: 54.21391768560049,
          elementCost: 429246,
        },
        incidentCommandResults: {
          onSiteDays: 4622.388196588927,
          elementCost: 16531575,
        },
        generalResults: {
          totalCost: 102659561,
          areaContaminated: 15595.91089039946,
          decontaminationRounds: 1,
          solidWasteProduced: 88745.75755785868,
          aqueousWasteProduced: 111234.95298504672,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 413.070090093037,
          onSiteDays: 1397.6720367031457,
          elementCost: 26483045,
        },
        sourceReductionResults: {
          workDays: 5.100354855904205,
          onSiteDays: 5.100354855904205,
          elementCost: 279090,
        },
        decontaminationResults: {
          workDays: 4.200714875292199,
          onSiteDays: 4.200714875292199,
          elementCost: 302197,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.40734797552139385,
          onSiteDays: 4.887346341517426,
          elementCost: 15187,
        },
        incidentCommandResults: {
          onSiteDays: 1411.8604527758598,
          elementCost: 6290340,
        },
        generalResults: {
          totalCost: 33369859,
          areaContaminated: 13494.638011458046,
          decontaminationRounds: 1,
          solidWasteProduced: 9431.619577348045,
          aqueousWasteProduced: 83642.80325648414,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 21843113.110890683,
        sourceReductionTravelCost: 270673.61052805424,
        decontaminationTravelCost: 27714.280955759576,
        wasteSamplingTravelCost: 36537.8429951702,
        incidentCommandTravelCost: 1756509.1485784529,
        totalTravelCost: 23934547.99394812,
      },
      totalEventCost: 196488088.99394813,
      totalEventDuration: 7021.466290605706,
      totalContaminationArea: 39484.98577204197,
      totalSolidWasteProduced: 98177.37713520673,
      totalAqueousWasteProduced: 194877.75624153088,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 9.330886157241215,
            onSiteDays: 63.503796612342185,
            elementCost: 1979206,
          },
          sourceReductionResults: {
            workDays: 1.0719661063058281,
            onSiteDays: 1.0719661063058281,
            elementCost: 32732,
          },
          decontaminationResults: {
            workDays: 4.421492514531476,
            onSiteDays: 4.421492514531476,
            elementCost: 192710,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.5812857409299395,
            onSiteDays: 4.98789002523147,
            elementCost: 16304,
          },
          incidentCommandResults: {
            onSiteDays: 73.98514525841095,
            elementCost: 300223,
          },
          generalResults: {
            totalCost: 2521175,
            areaContaminated: 1344.12301584804,
            decontaminationRounds: 1,
            solidWasteProduced: 6874.779920872331,
            aqueousWasteProduced: 370.75444661770985,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 290.0234152497782,
            onSiteDays: 1083.854011322203,
            elementCost: 35683876,
          },
          sourceReductionResults: {
            workDays: 11.133615434874912,
            onSiteDays: 11.133615434874912,
            elementCost: 419902,
          },
          decontaminationResults: {
            workDays: 4.9774504927865815,
            onSiteDays: 4.9774504927865815,
            elementCost: 306212,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.370208523404648,
            onSiteDays: 12.274706563799244,
            elementCost: 86168,
          },
          incidentCommandResults: {
            onSiteDays: 1112.2397838136637,
            elementCost: 5211345,
          },
          generalResults: {
            totalCost: 41707503,
            areaContaminated: 5498.685064832891,
            decontaminationRounds: 1,
            solidWasteProduced: 31220.499868160892,
            aqueousWasteProduced: 14872.25513721244,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 414.4265481874743,
            onSiteDays: 1939.880397461995,
            elementCost: 36960513,
          },
          sourceReductionResults: {
            workDays: 7.961576518439411,
            onSiteDays: 7.961576518439411,
            elementCost: 290079,
          },
          decontaminationResults: {
            workDays: 3.4726295705122476,
            onSiteDays: 3.4726295705122476,
            elementCost: 110224,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 6.454198627029842,
            onSiteDays: 14.93180958331968,
            elementCost: 183046,
          },
          incidentCommandResults: {
            onSiteDays: 1966.2464131342663,
            elementCost: 8292090,
          },
          generalResults: {
            totalCost: 45835952,
            areaContaminated: 5498.685064832891,
            decontaminationRounds: 1,
            solidWasteProduced: 452.20624795364387,
            aqueousWasteProduced: 38751.28973678113,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1762.2207473074045,
          onSiteDays: 3541.3982511659565,
          elementCost: 122926343,
        },
        sourceReductionResults: {
          workDays: 54.43191940637494,
          onSiteDays: 54.43191940637494,
          elementCost: 1434847,
        },
        decontaminationResults: {
          workDays: 3.6682527304320254,
          onSiteDays: 3.6682527304320254,
          elementCost: 644758,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 6.818572563026496,
          onSiteDays: 17.802373829642026,
          elementCost: 286633,
        },
        incidentCommandResults: {
          onSiteDays: 3617.3007971324055,
          elementCost: 15282621,
        },
        generalResults: {
          totalCost: 140575202,
          areaContaminated: 18714.843976477823,
          decontaminationRounds: 1,
          solidWasteProduced: 38489.18991520567,
          aqueousWasteProduced: 19293.16106213332,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 760.7398018703914,
          onSiteDays: 3210.2706597068955,
          elementCost: 71839219,
        },
        sourceReductionResults: {
          workDays: 1.0330753309109626,
          onSiteDays: 1.0330753309109626,
          elementCost: 72939,
        },
        decontaminationResults: {
          workDays: 4.582287653717745,
          onSiteDays: 4.582287653717745,
          elementCost: 206129,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 7.10485190781726,
          onSiteDays: 31.009732516796195,
          elementCost: 270040,
        },
        incidentCommandResults: {
          onSiteDays: 3246.89575520832,
          elementCost: 11297480,
        },
        generalResults: {
          totalCost: 83685807,
          areaContaminated: 19778.42828377778,
          decontaminationRounds: 1,
          solidWasteProduced: 144495.7838263228,
          aqueousWasteProduced: 43667.012420064006,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 58851088.292029135,
        sourceReductionTravelCost: 222708.16576699438,
        decontaminationTravelCost: 105471.14177936524,
        wasteSamplingTravelCost: 60467.589230920785,
        incidentCommandTravelCost: 4347734.364210539,
        totalTravelCost: 63587469.553016946,
      },
      totalEventCost: 377913108.55301696,
      totalEventDuration: 10016.667894547067,
      totalContaminationArea: 50834.76540576942,
      totalSolidWasteProduced: 221532.45977851533,
      totalAqueousWasteProduced: 116954.4728028086,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 34.42230188450321,
            onSiteDays: 62.84533856547834,
            elementCost: 1802986,
          },
          sourceReductionResults: {
            workDays: 7.873862906550707,
            onSiteDays: 7.873862906550707,
            elementCost: 109993,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 16576,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 70.71920147202906,
            elementCost: 266266,
          },
          generalResults: {
            totalCost: 2195821,
            areaContaminated: 1549.927481282717,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 53.6449117285169,
            onSiteDays: 194.84775076642478,
            elementCost: 7460130,
          },
          sourceReductionResults: {
            workDays: 6.14553850609997,
            onSiteDays: 6.14553850609997,
            elementCost: 275797,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 19943,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 200.99328927252475,
            elementCost: 782444,
          },
          generalResults: {
            totalCost: 8538314,
            areaContaminated: 6340.6124234292965,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 203.73153098619602,
            onSiteDays: 1265.1307876923443,
            elementCost: 21157366,
          },
          sourceReductionResults: {
            workDays: 118.81446164351463,
            onSiteDays: 118.81446164351463,
            elementCost: 1795884,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 250430,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1383.945249335859,
            elementCost: 5847738,
          },
          generalResults: {
            totalCost: 29051418,
            areaContaminated: 6340.6124234292965,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1205.605884587037,
          onSiteDays: 3814.843866378381,
          elementCost: 194259467,
        },
        sourceReductionResults: {
          workDays: 52.34489704936217,
          onSiteDays: 52.34489704936217,
          elementCost: 1774703,
        },
        decontaminationResults: {
          workDays: 3.229903271475319,
          onSiteDays: 3.229903271475319,
          elementCost: 330959,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 36.217840505107326,
          onSiteDays: 63.672669229833446,
          elementCost: 1042023,
        },
        incidentCommandResults: {
          onSiteDays: 3934.091335929052,
          elementCost: 14919759,
        },
        generalResults: {
          totalCost: 212326911,
          areaContaminated: 16728.767621500596,
          decontaminationRounds: 1,
          solidWasteProduced: 142397.96944281334,
          aqueousWasteProduced: 8212.70834042589,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 333.1817246615721,
          onSiteDays: 3849.22027067812,
          elementCost: 51708543,
        },
        sourceReductionResults: {
          workDays: 14.25299406782294,
          onSiteDays: 14.25299406782294,
          elementCost: 558947,
        },
        decontaminationResults: {
          workDays: 4.793738720424878,
          onSiteDays: 4.793738720424878,
          elementCost: 548226,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 16.050846569795944,
          onSiteDays: 28.776981530522285,
          elementCost: 437586,
        },
        incidentCommandResults: {
          onSiteDays: 3897.04398499689,
          elementCost: 12688296,
        },
        generalResults: {
          totalCost: 65941598,
          areaContaminated: 12403.04749238354,
          decontaminationRounds: 1,
          solidWasteProduced: 20672.564059115342,
          aqueousWasteProduced: 3326.0370162837694,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 99564061.34799981,
        sourceReductionTravelCost: 865520.9382637698,
        decontaminationTravelCost: 76262.65323859864,
        wasteSamplingTravelCost: 94177.8724923432,
        incidentCommandTravelCost: 5567852.214050772,
        totalTravelCost: 106167875.0260453,
      },
      totalEventCost: 424221937.0260453,
      totalEventDuration: 9486.793061006356,
      totalContaminationArea: 43362.967442025445,
      totalSolidWasteProduced: 163070.53350192867,
      totalAqueousWasteProduced: 11538.74535670966,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 351.12369366850965,
            onSiteDays: 587.3748951242724,
            elementCost: 20454342,
          },
          sourceReductionResults: {
            workDays: 3.1608199607977694,
            onSiteDays: 3.1608199607977694,
            elementCost: 46249,
          },
          decontaminationResults: {
            workDays: 3.5436556019223424,
            onSiteDays: 3.5436556019223424,
            elementCost: 231481,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.5587442736243285,
            onSiteDays: 5.802486652396483,
            elementCost: 13089,
          },
          incidentCommandResults: {
            onSiteDays: 599.881857339389,
            elementCost: 2706114,
          },
          generalResults: {
            totalCost: 23451275,
            areaContaminated: 1114.435572790955,
            decontaminationRounds: 1,
            solidWasteProduced: 9865.983118542064,
            aqueousWasteProduced: 2748.375351214328,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 274.48335961358805,
            onSiteDays: 921.5472243041635,
            elementCost: 30700281,
          },
          sourceReductionResults: {
            workDays: 3.308391887702138,
            onSiteDays: 3.308391887702138,
            elementCost: 107520,
          },
          decontaminationResults: {
            workDays: 3.1282646633051954,
            onSiteDays: 3.1282646633051954,
            elementCost: 263879,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.002212157536354,
            onSiteDays: 19.216477120601574,
            elementCost: 162787,
          },
          incidentCommandResults: {
            onSiteDays: 947.2003579757724,
            elementCost: 3931742,
          },
          generalResults: {
            totalCost: 35166209,
            areaContaminated: 4559.054615962998,
            decontaminationRounds: 1,
            solidWasteProduced: 5987.771822202476,
            aqueousWasteProduced: 13843.187875685997,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 578.1836704315097,
            onSiteDays: 2544.6389355433594,
            elementCost: 61056869,
          },
          sourceReductionResults: {
            workDays: 21.467425210564876,
            onSiteDays: 21.467425210564876,
            elementCost: 1221228,
          },
          decontaminationResults: {
            workDays: 4.458479329351913,
            onSiteDays: 4.458479329351913,
            elementCost: 444527,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.01214845795906,
            onSiteDays: 12.534667440997111,
            elementCost: 80965,
          },
          incidentCommandResults: {
            onSiteDays: 2583.099507524273,
            elementCost: 11024921,
          },
          generalResults: {
            totalCost: 73828510,
            areaContaminated: 4559.054615962998,
            decontaminationRounds: 1,
            solidWasteProduced: 23778.381596968862,
            aqueousWasteProduced: 10750.932408463652,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 977.8697374338651,
          onSiteDays: 3921.635214990727,
          elementCost: 113284572,
        },
        sourceReductionResults: {
          workDays: 158.63741372518274,
          onSiteDays: 158.63741372518274,
          elementCost: 5501360,
        },
        decontaminationResults: {
          workDays: 3.532251771197713,
          onSiteDays: 3.532251771197713,
          elementCost: 209525,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.572998847336041,
          onSiteDays: 15.188424390606137,
          elementCost: 252997,
        },
        incidentCommandResults: {
          onSiteDays: 4098.993304877714,
          elementCost: 17075036,
        },
        generalResults: {
          totalCost: 136323490,
          areaContaminated: 13531.036356820501,
          decontaminationRounds: 1,
          solidWasteProduced: 28378.344629481664,
          aqueousWasteProduced: 42411.71443160762,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 930.0974721418694,
          onSiteDays: 3120.629460719736,
          elementCost: 104048669,
        },
        sourceReductionResults: {
          workDays: 60.05209460090555,
          onSiteDays: 60.05209460090555,
          elementCost: 2333030,
        },
        decontaminationResults: {
          workDays: 3.6934139045638528,
          onSiteDays: 3.6934139045638528,
          elementCost: 304006,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 13.337687268736763,
          onSiteDays: 37.317063787238986,
          elementCost: 337828,
        },
        incidentCommandResults: {
          onSiteDays: 3221.6920330124444,
          elementCost: 14322294,
        },
        generalResults: {
          totalCost: 121345827,
          areaContaminated: 16050.087867659819,
          decontaminationRounds: 1,
          solidWasteProduced: 23429.560944132052,
          aqueousWasteProduced: 10761.957945200815,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 59581010.978813946,
        sourceReductionTravelCost: 754225.3780134723,
        decontaminationTravelCost: 130455.6655163308,
        wasteSamplingTravelCost: 57741.05068979401,
        incidentCommandTravelCost: 2868702.357646394,
        totalTravelCost: 63392135.43067993,
      },
      totalEventCost: 453507446.4306799,
      totalEventDuration: 11450.867060729594,
      totalContaminationArea: 39813.66902919727,
      totalSolidWasteProduced: 91440.04211132713,
      totalAqueousWasteProduced: 80516.16801217242,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 129.20479152879238,
            onSiteDays: 509.3201446108334,
            elementCost: 11393575,
          },
          sourceReductionResults: {
            workDays: 2.0242829215156224,
            onSiteDays: 2.0242829215156224,
            elementCost: 104630,
          },
          decontaminationResults: {
            workDays: 4.800589745352182,
            onSiteDays: 4.800589745352182,
            elementCost: 282643,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.08476628686523667,
            onSiteDays: 5.848382982650112,
            elementCost: 3497,
          },
          incidentCommandResults: {
            onSiteDays: 521.9934002603513,
            elementCost: 1985837,
          },
          generalResults: {
            totalCost: 13770182,
            areaContaminated: 1143.236326862665,
            decontaminationRounds: 1,
            solidWasteProduced: 6990.269100937541,
            aqueousWasteProduced: 677.2316146926661,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 410.6113859846793,
            onSiteDays: 781.3707300972922,
            elementCost: 45117098,
          },
          sourceReductionResults: {
            workDays: 13.405309870811642,
            onSiteDays: 13.405309870811642,
            elementCost: 545964,
          },
          decontaminationResults: {
            workDays: 3.994013163492552,
            onSiteDays: 3.994013163492552,
            elementCost: 275732,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 9.507784933141615,
            onSiteDays: 37.286545847069476,
            elementCost: 256215,
          },
          incidentCommandResults: {
            onSiteDays: 836.0565989786658,
            elementCost: 3444963,
          },
          generalResults: {
            totalCost: 49639972,
            areaContaminated: 4676.875882619995,
            decontaminationRounds: 1,
            solidWasteProduced: 34182.62517809785,
            aqueousWasteProduced: 19939.730151951153,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 337.4075641656385,
            onSiteDays: 1029.388818213728,
            elementCost: 24342728,
          },
          sourceReductionResults: {
            workDays: 1.9512179628788133,
            onSiteDays: 1.9512179628788133,
            elementCost: 83220,
          },
          decontaminationResults: {
            workDays: 4.959980083620171,
            onSiteDays: 4.959980083620171,
            elementCost: 531787,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.2590719946803937,
            onSiteDays: 13.139392505314849,
            elementCost: 102150,
          },
          incidentCommandResults: {
            onSiteDays: 1049.4394087655419,
            elementCost: 4703630,
          },
          generalResults: {
            totalCost: 29763515,
            areaContaminated: 4676.875882619995,
            decontaminationRounds: 1,
            solidWasteProduced: 37795.41873590547,
            aqueousWasteProduced: 32902.46990113971,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 3885.9796417223806,
          onSiteDays: 8771.310446852889,
          elementCost: 158984908,
        },
        sourceReductionResults: {
          workDays: 99.60832453818992,
          onSiteDays: 99.60832453818992,
          elementCost: 1470666,
        },
        decontaminationResults: {
          workDays: 3.303090512823102,
          onSiteDays: 3.303090512823102,
          elementCost: 481045,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 13.538040178437141,
          onSiteDays: 56.17108857622021,
          elementCost: 414023,
        },
        incidentCommandResults: {
          onSiteDays: 8930.392950480124,
          elementCost: 41685641,
        },
        generalResults: {
          totalCost: 203036283,
          areaContaminated: 18310.566241459586,
          decontaminationRounds: 1,
          solidWasteProduced: 60793.15305541581,
          aqueousWasteProduced: 101040.49318900795,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 689.6851191045866,
          onSiteDays: 4916.4722072670065,
          elementCost: 112471177,
        },
        sourceReductionResults: {
          workDays: 21.463035536375124,
          onSiteDays: 21.463035536375124,
          elementCost: 767697,
        },
        decontaminationResults: {
          workDays: 3.763161252896106,
          onSiteDays: 3.763161252896106,
          elementCost: 738566,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 26.839963672012942,
          onSiteDays: 85.20955799957301,
          elementCost: 975424,
        },
        incidentCommandResults: {
          onSiteDays: 5026.9079620558505,
          elementCost: 19634456,
        },
        generalResults: {
          totalCost: 134587320,
          areaContaminated: 15063.163912947977,
          decontaminationRounds: 1,
          solidWasteProduced: 67711.96268363953,
          aqueousWasteProduced: 15231.478392819425,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 106128456.90647794,
        sourceReductionTravelCost: 307257.4049413984,
        decontaminationTravelCost: 96846.94993267993,
        wasteSamplingTravelCost: 173724.44047846593,
        incidentCommandTravelCost: 5597445.7553964155,
        totalTravelCost: 112303731.45722689,
      },
      totalEventCost: 543101003.4572269,
      totalEventDuration: 16364.790320540535,
      totalContaminationArea: 43870.71824651022,
      totalSolidWasteProduced: 207473.4287539962,
      totalAqueousWasteProduced: 169791.4032496109,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 44.980588804056495,
            onSiteDays: 236.1154621736195,
            elementCost: 5874038,
          },
          sourceReductionResults: {
            workDays: 7.563946361329625,
            onSiteDays: 7.563946361329625,
            elementCost: 174511,
          },
          decontaminationResults: {
            workDays: 3.1728167552903335,
            onSiteDays: 3.1728167552903335,
            elementCost: 215829,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.6577623895086784,
            onSiteDays: 11.387841487124872,
            elementCost: 45904,
          },
          incidentCommandResults: {
            onSiteDays: 258.24006677736435,
            elementCost: 872252,
          },
          generalResults: {
            totalCost: 7182534,
            areaContaminated: 1435.89266012564,
            decontaminationRounds: 1,
            solidWasteProduced: 7667.088595302771,
            aqueousWasteProduced: 5522.329016694334,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 612.5079093173272,
            onSiteDays: 1178.8833823361924,
            elementCost: 27999484,
          },
          sourceReductionResults: {
            workDays: 11.612890034839658,
            onSiteDays: 11.612890034839658,
            elementCost: 470751,
          },
          decontaminationResults: {
            workDays: 3.0994666964047277,
            onSiteDays: 3.0994666964047277,
            elementCost: 274604,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.9521803265208892,
            onSiteDays: 9.223378495537418,
            elementCost: 90258,
          },
          incidentCommandResults: {
            onSiteDays: 1202.8191175629743,
            elementCost: 3910124,
          },
          generalResults: {
            totalCost: 32745221,
            areaContaminated: 5874.1063368776195,
            decontaminationRounds: 1,
            solidWasteProduced: 8105.419440647913,
            aqueousWasteProduced: 14264.836777865634,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 339.8503088068428,
            onSiteDays: 1225.7335223779178,
            elementCost: 39522153,
          },
          sourceReductionResults: {
            workDays: 31.084771279621876,
            onSiteDays: 31.084771279621876,
            elementCost: 684990,
          },
          decontaminationResults: {
            workDays: 4.552489873383308,
            onSiteDays: 4.552489873383308,
            elementCost: 245499,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.510541420028356,
            onSiteDays: 20.804232470880397,
            elementCost: 214787,
          },
          incidentCommandResults: {
            onSiteDays: 1282.1750160018034,
            elementCost: 4560740,
          },
          generalResults: {
            totalCost: 45228169,
            areaContaminated: 5874.1063368776195,
            decontaminationRounds: 1,
            solidWasteProduced: 7974.045759791908,
            aqueousWasteProduced: 36815.2669272394,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 406.0037363313709,
          onSiteDays: 1127.8923313895527,
          elementCost: 32289536,
        },
        sourceReductionResults: {
          workDays: 24.437241245037363,
          onSiteDays: 24.437241245037363,
          elementCost: 924400,
        },
        decontaminationResults: {
          workDays: 3.0320432623922926,
          onSiteDays: 3.0320432623922926,
          elementCost: 736330,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.01534391533067,
          onSiteDays: 49.66775521343089,
          elementCost: 413258,
        },
        incidentCommandResults: {
          onSiteDays: 1205.0293711104132,
          elementCost: 4454527,
        },
        generalResults: {
          totalCost: 38818051,
          areaContaminated: 13228.54170883739,
          decontaminationRounds: 1,
          solidWasteProduced: 89641.19537197535,
          aqueousWasteProduced: 50595.96882080816,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 2212.7521971071137,
          onSiteDays: 4097.4705783968,
          elementCost: 193678429,
        },
        sourceReductionResults: {
          workDays: 82.4116351780446,
          onSiteDays: 82.4116351780446,
          elementCost: 1375459,
        },
        decontaminationResults: {
          workDays: 4.568734537709675,
          onSiteDays: 4.568734537709675,
          elementCost: 756507,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.6239690553043187,
          onSiteDays: 9.227356806227352,
          elementCost: 112961,
        },
        incidentCommandResults: {
          onSiteDays: 4193.6783049187825,
          elementCost: 15241588,
        },
        generalResults: {
          totalCost: 211164944,
          areaContaminated: 16858.35603776916,
          decontaminationRounds: 1,
          solidWasteProduced: 23025.04584286399,
          aqueousWasteProduced: 52185.96247943764,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 24226342.00836203,
        sourceReductionTravelCost: 645753.0426186309,
        decontaminationTravelCost: 154325.51001285293,
        wasteSamplingTravelCost: 90145.30448611683,
        incidentCommandTravelCost: 2711838.671863846,
        totalTravelCost: 27828404.53734348,
      },
      totalEventCost: 362967323.5373435,
      totalEventDuration: 8141.9418763713375,
      totalContaminationArea: 43271.003080487426,
      totalSolidWasteProduced: 136412.79501058193,
      totalAqueousWasteProduced: 159384.36402204516,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 55.13851137490309,
            onSiteDays: 355.81236075913233,
            elementCost: 7998991,
          },
          sourceReductionResults: {
            workDays: 6.323117780668124,
            onSiteDays: 6.323117780668124,
            elementCost: 267066,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 63000,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 362.13547853980043,
            elementCost: 1433983,
          },
          generalResults: {
            totalCost: 9763040,
            areaContaminated: 1714.9111344340665,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 257.68527804662347,
            onSiteDays: 1181.8166537184093,
            elementCost: 27251663,
          },
          sourceReductionResults: {
            workDays: 34.649194561601334,
            onSiteDays: 34.649194561601334,
            elementCost: 1922301,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 123128,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1216.4658482800105,
            elementCost: 5714823,
          },
          generalResults: {
            totalCost: 35011915,
            areaContaminated: 7015.545549957547,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 102.83856006903858,
            onSiteDays: 292.10103356683703,
            elementCost: 7994968,
          },
          sourceReductionResults: {
            workDays: 30.5349240672441,
            onSiteDays: 30.5349240672441,
            elementCost: 588846,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 84418,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 322.63595763408114,
            elementCost: 996439,
          },
          generalResults: {
            totalCost: 9664671,
            areaContaminated: 7015.545549957547,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1919.5279245687486,
          onSiteDays: 4880.4336981731985,
          elementCost: 225894451,
        },
        sourceReductionResults: {
          workDays: 10.915499185022881,
          onSiteDays: 10.915499185022881,
          elementCost: 479642,
        },
        decontaminationResults: {
          workDays: 3.2185663753698037,
          onSiteDays: 3.2185663753698037,
          elementCost: 522806,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.932003502584907,
          onSiteDays: 25.91563340612587,
          elementCost: 420373,
        },
        incidentCommandResults: {
          onSiteDays: 4920.483397139717,
          elementCost: 17366634,
        },
        generalResults: {
          totalCost: 244683906,
          areaContaminated: 12650.240504334271,
          decontaminationRounds: 1,
          solidWasteProduced: 22198.43701183331,
          aqueousWasteProduced: 80381.5346725966,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 965.6696265729496,
          onSiteDays: 3910.939530264297,
          elementCost: 97560346,
        },
        sourceReductionResults: {
          workDays: 35.91965706296065,
          onSiteDays: 35.91965706296065,
          elementCost: 829527,
        },
        decontaminationResults: {
          workDays: 4.936497197006013,
          onSiteDays: 4.936497197006013,
          elementCost: 632548,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 46.792710175735344,
          onSiteDays: 79.32440622106938,
          elementCost: 1142928,
        },
        incidentCommandResults: {
          onSiteDays: 4031.1200907453326,
          elementCost: 13904354,
        },
        generalResults: {
          totalCost: 114069703,
          areaContaminated: 14085.578001249178,
          decontaminationRounds: 1,
          solidWasteProduced: 128627.04750163892,
          aqueousWasteProduced: 73085.05921508952,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 73317529.05071914,
        sourceReductionTravelCost: 525992.6738411252,
        decontaminationTravelCost: 36279.91893220948,
        wasteSamplingTravelCost: 91718.63756526353,
        incidentCommandTravelCost: 6091335.238237419,
        totalTravelCost: 80062855.51929517,
      },
      totalEventCost: 493256090.51929516,
      totalEventDuration: 10852.840772338943,
      totalContaminationArea: 42481.820739932606,
      totalSolidWasteProduced: 150825.48451347224,
      totalAqueousWasteProduced: 153466.59388768612,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 60.40929204825668,
            onSiteDays: 196.1785956259544,
            elementCost: 6158600,
          },
          sourceReductionResults: {
            workDays: 20.14043483192934,
            onSiteDays: 20.14043483192934,
            elementCost: 328788,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 18488,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 216.31903045788374,
            elementCost: 857773,
          },
          generalResults: {
            totalCost: 7363649,
            areaContaminated: 1452.1768238147883,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 625.4924551439325,
            onSiteDays: 1215.2533810509385,
            elementCost: 30041440,
          },
          sourceReductionResults: {
            workDays: 89.05628347673539,
            onSiteDays: 89.05628347673539,
            elementCost: 1180330,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 249326,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1304.309664527674,
            elementCost: 4506714,
          },
          generalResults: {
            totalCost: 35977810,
            areaContaminated: 5940.723370151407,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 94.13917192962415,
            onSiteDays: 397.76546541912376,
            elementCost: 12751231,
          },
          sourceReductionResults: {
            workDays: 26.38800282254614,
            onSiteDays: 26.38800282254614,
            elementCost: 617351,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 94375,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 424.1534682416699,
            elementCost: 1385432,
          },
          generalResults: {
            totalCost: 14848389,
            areaContaminated: 5940.723370151407,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1370.4388601651913,
          onSiteDays: 4562.354964001774,
          elementCost: 87929223,
        },
        sourceReductionResults: {
          workDays: 19.291062925881697,
          onSiteDays: 19.291062925881697,
          elementCost: 936173,
        },
        decontaminationResults: {
          workDays: 3.894518517166031,
          onSiteDays: 3.894518517166031,
          elementCost: 865295,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 18.144286663311792,
          onSiteDays: 37.19015218898186,
          elementCost: 661303,
        },
        incidentCommandResults: {
          onSiteDays: 4622.730697633803,
          elementCost: 14722483,
        },
        generalResults: {
          totalCost: 105114477,
          areaContaminated: 16833.575325280795,
          decontaminationRounds: 1,
          solidWasteProduced: 79697.03663327404,
          aqueousWasteProduced: 80544.24373706369,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 385.55010729971025,
          onSiteDays: 2094.0031065893536,
          elementCost: 46667968,
        },
        sourceReductionResults: {
          workDays: 45.13841712346633,
          onSiteDays: 45.13841712346633,
          elementCost: 1260240,
        },
        decontaminationResults: {
          workDays: 4.57486336668368,
          onSiteDays: 4.57486336668368,
          elementCost: 648665,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.910064640707996,
          onSiteDays: 20.543892197337275,
          elementCost: 205776,
        },
        incidentCommandResults: {
          onSiteDays: 2164.2602792768407,
          elementCost: 6947648,
        },
        generalResults: {
          totalCost: 55730297,
          areaContaminated: 17885.04862437585,
          decontaminationRounds: 1,
          solidWasteProduced: 114830.58498418926,
          aqueousWasteProduced: 130546.22023056867,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 35394650.691494025,
        sourceReductionTravelCost: 727542.7632181222,
        decontaminationTravelCost: 51591.987074950805,
        wasteSamplingTravelCost: 46717.50243532998,
        incidentCommandTravelCost: 4315573.7641760595,
        totalTravelCost: 40536076.708398476,
      },
      totalEventCost: 259570698.70839846,
      totalEventDuration: 8731.773140137871,
      totalContaminationArea: 48052.247513774244,
      totalSolidWasteProduced: 194527.6216174633,
      totalAqueousWasteProduced: 211090.46396763236,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 76.28571011420306,
            onSiteDays: 244.7225293704792,
            elementCost: 6092204,
          },
          sourceReductionResults: {
            workDays: 6.205631399225057,
            onSiteDays: 6.205631399225057,
            elementCost: 274250,
          },
          decontaminationResults: {
            workDays: 3.2392587634360552,
            onSiteDays: 3.2392587634360552,
            elementCost: 122956,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.04756162267826821,
            onSiteDays: 4.836445122302649,
            elementCost: 1988,
          },
          incidentCommandResults: {
            onSiteDays: 259.00386465544295,
            elementCost: 1012691,
          },
          generalResults: {
            totalCost: 7504089,
            areaContaminated: 1605.0399028475767,
            decontaminationRounds: 1,
            solidWasteProduced: 1580.2585572546354,
            aqueousWasteProduced: 9545.616659357065,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 356.882851766385,
            onSiteDays: 2092.974089885457,
            elementCost: 24477393,
          },
          sourceReductionResults: {
            workDays: 1.2490500118673524,
            onSiteDays: 1.2490500118673524,
            elementCost: 55795,
          },
          decontaminationResults: {
            workDays: 4.203689097241426,
            onSiteDays: 4.203689097241426,
            elementCost: 514172,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.246378739377308,
            onSiteDays: 12.462456968971422,
            elementCost: 100033,
          },
          incidentCommandResults: {
            onSiteDays: 2110.889285963537,
            elementCost: 9519563,
          },
          generalResults: {
            totalCost: 34666956,
            areaContaminated: 6566.072329830994,
            decontaminationRounds: 1,
            solidWasteProduced: 57930.122373199214,
            aqueousWasteProduced: 17054.417774400503,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 1798.4403392167828,
            onSiteDays: 2692.8136991987476,
            elementCost: 89831220,
          },
          sourceReductionResults: {
            workDays: 35.18055793413506,
            onSiteDays: 35.18055793413506,
            elementCost: 848884,
          },
          decontaminationResults: {
            workDays: 4.07753814549128,
            onSiteDays: 4.07753814549128,
            elementCost: 290511,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.924495177254471,
            onSiteDays: 14.786687562646575,
            elementCost: 145679,
          },
          incidentCommandResults: {
            onSiteDays: 2746.8584828410203,
            elementCost: 11556651,
          },
          generalResults: {
            totalCost: 102672945,
            areaContaminated: 6566.072329830994,
            decontaminationRounds: 1,
            solidWasteProduced: 52320.822089705405,
            aqueousWasteProduced: 943.2197016718096,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1160.6711702148014,
          onSiteDays: 4066.4814424463257,
          elementCost: 103768026,
        },
        sourceReductionResults: {
          workDays: 126.25557526804326,
          onSiteDays: 126.25557526804326,
          elementCost: 1374231,
        },
        decontaminationResults: {
          workDays: 4.440123120658129,
          onSiteDays: 4.440123120658129,
          elementCost: 926108,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 25.44242909632143,
          onSiteDays: 79.586501092438,
          elementCost: 1065185,
        },
        incidentCommandResults: {
          onSiteDays: 4276.763641927466,
          elementCost: 13635825,
        },
        generalResults: {
          totalCost: 120769375,
          areaContaminated: 19998.53896209936,
          decontaminationRounds: 1,
          solidWasteProduced: 120898.67091348328,
          aqueousWasteProduced: 132819.97964931576,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 454.65066193901646,
          onSiteDays: 1796.9263261004774,
          elementCost: 83635898,
        },
        sourceReductionResults: {
          workDays: 48.448095144083226,
          onSiteDays: 48.448095144083226,
          elementCost: 1939873,
        },
        decontaminationResults: {
          workDays: 4.047253637352784,
          onSiteDays: 4.047253637352784,
          elementCost: 650456,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 7.351981559960664,
          onSiteDays: 16.996422229577,
          elementCost: 215872,
        },
        incidentCommandResults: {
          onSiteDays: 1866.4180971114904,
          elementCost: 7062644,
        },
        generalResults: {
          totalCost: 93504743,
          areaContaminated: 18866.540874397433,
          decontaminationRounds: 1,
          solidWasteProduced: 70304.94874708235,
          aqueousWasteProduced: 124355.25559613477,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 16487521.985474009,
        sourceReductionTravelCost: 301081.75529026776,
        decontaminationTravelCost: 123796.49787310645,
        wasteSamplingTravelCost: 73825.54850732275,
        incidentCommandTravelCost: 3450545.9957772386,
        totalTravelCost: 20436771.78292194,
      },
      totalEventCost: 379554879.7829219,
      totalEventDuration: 11259.933372498957,
      totalContaminationArea: 53602.26439900636,
      totalSolidWasteProduced: 303034.8226807249,
      totalAqueousWasteProduced: 284718.4893808799,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 34.20028735869886,
            onSiteDays: 235.47165181624518,
            elementCost: 11080112,
          },
          sourceReductionResults: {
            workDays: 1.3738949391674735,
            onSiteDays: 1.3738949391674735,
            elementCost: 67246,
          },
          decontaminationResults: {
            workDays: 4.790427382520965,
            onSiteDays: 4.790427382520965,
            elementCost: 318095,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.6119109918571606,
            onSiteDays: 7.145003842224891,
            elementCost: 50063,
          },
          incidentCommandResults: {
            onSiteDays: 248.78097798015853,
            elementCost: 1134976,
          },
          generalResults: {
            totalCost: 12650492,
            areaContaminated: 1210.9498636595763,
            decontaminationRounds: 1,
            solidWasteProduced: 4239.931978750644,
            aqueousWasteProduced: 4604.531594966443,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 370.3214500540624,
            onSiteDays: 1257.4549599476882,
            elementCost: 29229338,
          },
          sourceReductionResults: {
            workDays: 22.298066485603393,
            onSiteDays: 22.298066485603393,
            elementCost: 586092,
          },
          decontaminationResults: {
            workDays: 3.339765306175632,
            onSiteDays: 3.339765306175632,
            elementCost: 185338,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.865257163546118,
            onSiteDays: 6.60714640071233,
            elementCost: 39068,
          },
          incidentCommandResults: {
            onSiteDays: 1289.6999381401795,
            elementCost: 4126786,
          },
          generalResults: {
            totalCost: 34166622,
            areaContaminated: 4953.885805880087,
            decontaminationRounds: 1,
            solidWasteProduced: 31134.30396752942,
            aqueousWasteProduced: 22054.99331043793,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 107.7309507069965,
            onSiteDays: 1241.5249925722349,
            elementCost: 37442522,
          },
          sourceReductionResults: {
            workDays: 15.882643786526257,
            onSiteDays: 15.882643786526257,
            elementCost: 464405,
          },
          decontaminationResults: {
            workDays: 4.988557594825643,
            onSiteDays: 4.988557594825643,
            elementCost: 167578,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.4883695648419817,
            onSiteDays: 10.234008647832571,
            elementCost: 100340,
          },
          incidentCommandResults: {
            onSiteDays: 1272.6302026014191,
            elementCost: 5911501,
          },
          generalResults: {
            totalCost: 44086346,
            areaContaminated: 4953.885805880087,
            decontaminationRounds: 1,
            solidWasteProduced: 43212.97224843553,
            aqueousWasteProduced: 18066.09194814415,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 675.8817966979859,
          onSiteDays: 4226.629539337749,
          elementCost: 121348571,
        },
        sourceReductionResults: {
          workDays: 35.718254740738345,
          onSiteDays: 35.718254740738345,
          elementCost: 1324144,
        },
        decontaminationResults: {
          workDays: 4.134514158855778,
          onSiteDays: 4.134514158855778,
          elementCost: 537714,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 23.931755270867423,
          onSiteDays: 80.48334972216571,
          elementCost: 962826,
        },
        incidentCommandResults: {
          onSiteDays: 4346.9656579595085,
          elementCost: 17912336,
        },
        generalResults: {
          totalCost: 142085591,
          areaContaminated: 16509.195122986377,
          decontaminationRounds: 1,
          solidWasteProduced: 110612.51957733564,
          aqueousWasteProduced: 8646.939646003977,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 435.7549249580994,
          onSiteDays: 1689.8840688094233,
          elementCost: 39122961,
        },
        sourceReductionResults: {
          workDays: 45.9897221545514,
          onSiteDays: 45.9897221545514,
          elementCost: 1186810,
        },
        decontaminationResults: {
          workDays: 3.0656459443424002,
          onSiteDays: 3.0656459443424002,
          elementCost: 138511,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 7.840695564288478,
          onSiteDays: 37.24449931510501,
          elementCost: 349479,
        },
        incidentCommandResults: {
          onSiteDays: 1776.183936223422,
          elementCost: 8435308,
        },
        generalResults: {
          totalCost: 49233069,
          areaContaminated: 18115.24083519015,
          decontaminationRounds: 1,
          solidWasteProduced: 108084.88804646923,
          aqueousWasteProduced: 137925.93618060084,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 39110240.2772411,
        sourceReductionTravelCost: 534192.938703478,
        decontaminationTravelCost: 123305.84878321642,
        wasteSamplingTravelCost: 80240.042296759,
        incidentCommandTravelCost: 2879462.845384919,
        totalTravelCost: 42727441.952409476,
      },
      totalEventCost: 324949561.9524095,
      totalEventDuration: 8934.260712904688,
      totalContaminationArea: 45743.15743359628,
      totalSolidWasteProduced: 297284.6158185205,
      totalAqueousWasteProduced: 191298.49268015334,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 74.17314909930923,
            onSiteDays: 332.3417926520314,
            elementCost: 7516722,
          },
          sourceReductionResults: {
            workDays: 2.1092693323513125,
            onSiteDays: 2.1092693323513125,
            elementCost: 65757,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 54843,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 334.4510619843827,
            elementCost: 1293369,
          },
          generalResults: {
            totalCost: 8930691,
            areaContaminated: 1563.1347960478704,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 106.68345378881796,
            onSiteDays: 345.69018044417345,
            elementCost: 9127270,
          },
          sourceReductionResults: {
            workDays: 13.826073966201267,
            onSiteDays: 13.826073966201267,
            elementCost: 356958,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 45094,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 359.5162544103747,
            elementCost: 1233177,
          },
          generalResults: {
            totalCost: 10762499,
            areaContaminated: 6394.642347468561,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 50.12696097045985,
            onSiteDays: 101.37319328756041,
            elementCost: 4216239,
          },
          sourceReductionResults: {
            workDays: 46.70224410226874,
            onSiteDays: 46.70224410226874,
            elementCost: 1325963,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 214311,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 148.07543738982915,
            elementCost: 586075,
          },
          generalResults: {
            totalCost: 6342588,
            areaContaminated: 6394.642347468561,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 373.2395107128074,
          onSiteDays: 2923.349549175995,
          elementCost: 63841599,
        },
        sourceReductionResults: {
          workDays: 148.81220479975855,
          onSiteDays: 148.81220479975855,
          elementCost: 3102169,
        },
        decontaminationResults: {
          workDays: 4.434309385585205,
          onSiteDays: 4.434309385585205,
          elementCost: 506486,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 15.200416211742882,
          onSiteDays: 34.95486404681135,
          elementCost: 559649,
        },
        incidentCommandResults: {
          onSiteDays: 3111.55092740815,
          elementCost: 11120169,
        },
        generalResults: {
          totalCost: 79130072,
          areaContaminated: 10363.362869332395,
          decontaminationRounds: 1,
          solidWasteProduced: 37983.27962613593,
          aqueousWasteProduced: 25868.301926762728,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 232.06392311110386,
          onSiteDays: 1017.2052187634064,
          elementCost: 62795238,
        },
        sourceReductionResults: {
          workDays: 44.06122212931774,
          onSiteDays: 44.06122212931774,
          elementCost: 724533,
        },
        decontaminationResults: {
          workDays: 3.5727721407480475,
          onSiteDays: 3.5727721407480475,
          elementCost: 566182,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.5504937816752562,
          onSiteDays: 8.510105253820312,
          elementCost: 57878,
        },
        incidentCommandResults: {
          onSiteDays: 1073.3493182872926,
          elementCost: 4239336,
        },
        generalResults: {
          totalCost: 68383167,
          areaContaminated: 11590.596296024085,
          decontaminationRounds: 1,
          solidWasteProduced: 73485.95608571105,
          aqueousWasteProduced: 79825.21024077991,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 6432464.308863014,
        sourceReductionTravelCost: 1163920.0998434303,
        decontaminationTravelCost: 58837.82372607605,
        wasteSamplingTravelCost: 26581.06406651469,
        incidentCommandTravelCost: 1269912.992545591,
        totalTravelCost: 8951716.289044626,
      },
      totalEventCost: 182500733.28904462,
      totalEventDuration: 5026.942999480029,
      totalContaminationArea: 36306.378656341476,
      totalSolidWasteProduced: 111469.23571184698,
      totalAqueousWasteProduced: 105693.51216754263,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 25.036859919568244,
            onSiteDays: 114.74750862649587,
            elementCost: 4883142,
          },
          sourceReductionResults: {
            workDays: 12.677011884595487,
            onSiteDays: 12.677011884595487,
            elementCost: 225088,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 33364,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 127.42452051109136,
            elementCost: 520885,
          },
          generalResults: {
            totalCost: 5662479,
            areaContaminated: 1298.5639081743502,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 70.88884723438585,
            onSiteDays: 454.21123570618386,
            elementCost: 12958375,
          },
          sourceReductionResults: {
            workDays: 7.64646342089925,
            onSiteDays: 7.64646342089925,
            elementCost: 356790,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 60136,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 461.8576991270831,
            elementCost: 1481939,
          },
          generalResults: {
            totalCost: 14857240,
            areaContaminated: 5312.306897076887,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 183.0166052716553,
            onSiteDays: 834.0333152731189,
            elementCost: 29262276,
          },
          sourceReductionResults: {
            workDays: 15.749449218407698,
            onSiteDays: 15.749449218407698,
            elementCost: 488759,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 121010,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 849.7827644915266,
            elementCost: 3923094,
          },
          generalResults: {
            totalCost: 33795139,
            areaContaminated: 5312.306897076887,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 940.8454097032477,
          onSiteDays: 3746.9809363022196,
          elementCost: 159106514,
        },
        sourceReductionResults: {
          workDays: 54.2647904016616,
          onSiteDays: 54.2647904016616,
          elementCost: 1012071,
        },
        decontaminationResults: {
          workDays: 3.280148616591503,
          onSiteDays: 3.280148616591503,
          elementCost: 465103,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.735257893321215,
          onSiteDays: 17.51022979549476,
          elementCost: 174062,
        },
        incidentCommandResults: {
          onSiteDays: 3822.0361051159675,
          elementCost: 14836736,
        },
        generalResults: {
          totalCost: 175594486,
          areaContaminated: 16889.24377711705,
          decontaminationRounds: 1,
          solidWasteProduced: 88979.86069197732,
          aqueousWasteProduced: 64344.004721285666,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 774.1738011730578,
          onSiteDays: 4016.9177325384367,
          elementCost: 106425083,
        },
        sourceReductionResults: {
          workDays: 22.42581167831758,
          onSiteDays: 22.42581167831758,
          elementCost: 451009,
        },
        decontaminationResults: {
          workDays: 4.61098754396918,
          onSiteDays: 4.61098754396918,
          elementCost: 153335,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.622305132811226,
          onSiteDays: 15.51386888109101,
          elementCost: 117770,
        },
        incidentCommandResults: {
          onSiteDays: 4059.4684006418147,
          elementCost: 17513922,
        },
        generalResults: {
          totalCost: 124661119,
          areaContaminated: 15689.354387345764,
          decontaminationRounds: 1,
          solidWasteProduced: 11268.900774689235,
          aqueousWasteProduced: 75354.53744483946,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 27033922.27014787,
        sourceReductionTravelCost: 166130.92139831322,
        decontaminationTravelCost: 69924.61704675644,
        wasteSamplingTravelCost: 21092.077132699433,
        incidentCommandTravelCost: 3511355.897395375,
        totalTravelCost: 30802425.783121012,
      },
      totalEventCost: 385372888.783121,
      totalEventDuration: 9320.569489887483,
      totalContaminationArea: 44501.77586679094,
      totalSolidWasteProduced: 100248.76146666655,
      totalAqueousWasteProduced: 139698.54216612512,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 75.10997619161792,
            onSiteDays: 318.71506456815416,
            elementCost: 5912032,
          },
          sourceReductionResults: {
            workDays: 8.70241652057933,
            onSiteDays: 8.70241652057933,
            elementCost: 213718,
          },
          decontaminationResults: {
            workDays: 3.8384170664563815,
            onSiteDays: 3.8384170664563815,
            elementCost: 145322,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.6075050684383653,
            onSiteDays: 6.270428451816125,
            elementCost: 20880,
          },
          incidentCommandResults: {
            onSiteDays: 337.526326607006,
            elementCost: 1474330,
          },
          generalResults: {
            totalCost: 7766282,
            areaContaminated: 1126.6855652160775,
            decontaminationRounds: 1,
            solidWasteProduced: 4646.351519742278,
            aqueousWasteProduced: 3280.0200010645044,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 71.8244069968252,
            onSiteDays: 241.4499910560176,
            elementCost: 10001619,
          },
          sourceReductionResults: {
            workDays: 44.25308450124168,
            onSiteDays: 44.25308450124168,
            elementCost: 887492,
          },
          decontaminationResults: {
            workDays: 4.086331806398539,
            onSiteDays: 4.086331806398539,
            elementCost: 455097,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.0850821531492083,
            onSiteDays: 12.054914866778754,
            elementCost: 86872,
          },
          incidentCommandResults: {
            onSiteDays: 301.8443222304366,
            elementCost: 1238819,
          },
          generalResults: {
            totalCost: 12669899,
            areaContaminated: 4609.168221338499,
            decontaminationRounds: 1,
            solidWasteProduced: 38348.57311538771,
            aqueousWasteProduced: 34025.477959131014,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 234.06815392378525,
            onSiteDays: 1538.2766932160014,
            elementCost: 30814887,
          },
          sourceReductionResults: {
            workDays: 3.390190429808635,
            onSiteDays: 3.390190429808635,
            elementCost: 116842,
          },
          decontaminationResults: {
            workDays: 3.067472469542984,
            onSiteDays: 3.067472469542984,
            elementCost: 241026,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.5305176110482592,
            onSiteDays: 17.64978674758993,
            elementCost: 123296,
          },
          incidentCommandResults: {
            onSiteDays: 1562.384142862943,
            elementCost: 4862998,
          },
          generalResults: {
            totalCost: 36159049,
            areaContaminated: 4609.168221338499,
            decontaminationRounds: 1,
            solidWasteProduced: 32426.847796161026,
            aqueousWasteProduced: 19994.576373511165,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 608.9573260172524,
          onSiteDays: 5327.5724606317835,
          elementCost: 110591925,
        },
        sourceReductionResults: {
          workDays: 103.61545198916164,
          onSiteDays: 103.61545198916164,
          elementCost: 1757245,
        },
        decontaminationResults: {
          workDays: 4.324609384714767,
          onSiteDays: 4.324609384714767,
          elementCost: 585779,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.03675648916939,
          onSiteDays: 15.12200734991672,
          elementCost: 150781,
        },
        incidentCommandResults: {
          onSiteDays: 5450.634529355577,
          elementCost: 18670652,
        },
        generalResults: {
          totalCost: 131756382,
          areaContaminated: 12511.26620511321,
          decontaminationRounds: 1,
          solidWasteProduced: 59443.21835704411,
          aqueousWasteProduced: 53820.877842964146,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1081.2010707709753,
          onSiteDays: 2558.425635524867,
          elementCost: 81090779,
        },
        sourceReductionResults: {
          workDays: 14.27736826494198,
          onSiteDays: 14.27736826494198,
          elementCost: 261913,
        },
        decontaminationResults: {
          workDays: 3.2485061972980636,
          onSiteDays: 3.2485061972980636,
          elementCost: 954472,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 25.97684635006215,
          onSiteDays: 69.14866424693486,
          elementCost: 905752,
        },
        incidentCommandResults: {
          onSiteDays: 2645.1001742340422,
          elementCost: 11170412,
        },
        generalResults: {
          totalCost: 94383328,
          areaContaminated: 18044.08717485072,
          decontaminationRounds: 1,
          solidWasteProduced: 53712.78803947386,
          aqueousWasteProduced: 38320.91139160639,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 68057811.5757601,
        sourceReductionTravelCost: 725044.9784692099,
        decontaminationTravelCost: 161756.74593350664,
        wasteSamplingTravelCost: 89378.92200981581,
        incidentCommandTravelCost: 2902289.6868548966,
        totalTravelCost: 71936281.90902752,
      },
      totalEventCost: 354671221.9090275,
      totalEventDuration: 10297.489495290005,
      totalContaminationArea: 40900.375387857006,
      totalSolidWasteProduced: 188577.77882780897,
      totalAqueousWasteProduced: 149441.86356827721,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 161.98296053893773,
            onSiteDays: 635.9678123402269,
            elementCost: 12570427,
          },
          sourceReductionResults: {
            workDays: 0.7544145297320277,
            onSiteDays: 0.7544145297320277,
            elementCost: 15929,
          },
          decontaminationResults: {
            workDays: 3.584775427492516,
            onSiteDays: 3.584775427492516,
            elementCost: 130845,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.3731110174899122,
            onSiteDays: 9.709153574799974,
            elementCost: 48860,
          },
          incidentCommandResults: {
            onSiteDays: 650.0161558722515,
            elementCost: 2987574,
          },
          generalResults: {
            totalCost: 15753635,
            areaContaminated: 1461.294223761016,
            decontaminationRounds: 1,
            solidWasteProduced: 3884.5813404034798,
            aqueousWasteProduced: 8775.538716047455,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 379.7775289052627,
            onSiteDays: 1000.5150189649185,
            elementCost: 41746673,
          },
          sourceReductionResults: {
            workDays: 0.19647874230790102,
            onSiteDays: 0.19647874230790102,
            elementCost: 7745,
          },
          decontaminationResults: {
            workDays: 4.828210579191383,
            onSiteDays: 4.828210579191383,
            elementCost: 365012,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.09863464541779,
            onSiteDays: 15.64638130059642,
            elementCost: 141825,
          },
          incidentCommandResults: {
            onSiteDays: 1021.1860895870142,
            elementCost: 4318492,
          },
          generalResults: {
            totalCost: 46579747,
            areaContaminated: 5978.021824476883,
            decontaminationRounds: 1,
            solidWasteProduced: 2120.4061005660774,
            aqueousWasteProduced: 25346.246785534313,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 1385.7372191169934,
            onSiteDays: 2588.41743011485,
            elementCost: 59024112,
          },
          sourceReductionResults: {
            workDays: 38.88478954407684,
            onSiteDays: 38.88478954407684,
            elementCost: 956087,
          },
          decontaminationResults: {
            workDays: 4.186067567483072,
            onSiteDays: 4.186067567483072,
            elementCost: 214590,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.843106267732114,
            onSiteDays: 11.870362272222538,
            elementCost: 115482,
          },
          incidentCommandResults: {
            onSiteDays: 2643.358649498632,
            elementCost: 9930970,
          },
          generalResults: {
            totalCost: 70241241,
            areaContaminated: 5978.021824476883,
            decontaminationRounds: 1,
            solidWasteProduced: 49249.729840109634,
            aqueousWasteProduced: 22526.65715731657,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1638.0836269974989,
          onSiteDays: 5047.869927920305,
          elementCost: 109729259,
        },
        sourceReductionResults: {
          workDays: 43.6101831386089,
          onSiteDays: 43.6101831386089,
          elementCost: 1579836,
        },
        decontaminationResults: {
          workDays: 3.63927631840093,
          onSiteDays: 3.63927631840093,
          elementCost: 493466,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 9.091658358875764,
          onSiteDays: 33.75077262273559,
          elementCost: 358810,
        },
        incidentCommandResults: {
          onSiteDays: 5128.87016000005,
          elementCost: 24024847,
        },
        generalResults: {
          totalCost: 136186218,
          areaContaminated: 18809.566828145078,
          decontaminationRounds: 1,
          solidWasteProduced: 56262.31405600901,
          aqueousWasteProduced: 127024.12902566716,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 268.63907431473655,
          onSiteDays: 608.09820732917,
          elementCost: 27588165,
        },
        sourceReductionResults: {
          workDays: 18.41789453468369,
          onSiteDays: 18.41789453468369,
          elementCost: 411365,
        },
        decontaminationResults: {
          workDays: 4.376471524447313,
          onSiteDays: 4.376471524447313,
          elementCost: 319034,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.091724534186952,
          onSiteDays: 11.649706623682846,
          elementCost: 132542,
        },
        incidentCommandResults: {
          onSiteDays: 642.5422800119838,
          elementCost: 3091551,
        },
        generalResults: {
          totalCost: 31542657,
          areaContaminated: 11765.560825463312,
          decontaminationRounds: 1,
          solidWasteProduced: 49916.06110646068,
          aqueousWasteProduced: 55360.44185499096,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 22221660.851854462,
        sourceReductionTravelCost: 211753.50870316924,
        decontaminationTravelCost: 71911.3316789777,
        wasteSamplingTravelCost: 54434.921610157224,
        incidentCommandTravelCost: 3631408.000880479,
        totalTravelCost: 26191168.614727248,
      },
      totalEventCost: 326494666.61472726,
      totalEventDuration: 10085.973334969933,
      totalContaminationArea: 43992.46552632317,
      totalSolidWasteProduced: 161433.0924435489,
      totalAqueousWasteProduced: 239033.01353955647,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 27.322317176330642,
            onSiteDays: 116.11178952946231,
            elementCost: 5475697,
          },
          sourceReductionResults: {
            workDays: 3.2083285727758275,
            onSiteDays: 3.2083285727758275,
            elementCost: 69832,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 33173,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 119.32011810223814,
            elementCost: 547987,
          },
          generalResults: {
            totalCost: 6126689,
            areaContaminated: 1474.9168982242181,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 1090.1371501039928,
            onSiteDays: 1527.8322925065827,
            elementCost: 48121235,
          },
          sourceReductionResults: {
            workDays: 0.5095959385684181,
            onSiteDays: 0.5095959385684181,
            elementCost: 34347,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 104612,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 1528.3418884451512,
            elementCost: 5879166,
          },
          generalResults: {
            totalCost: 54139360,
            areaContaminated: 6033.750947280892,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 336.91147627338864,
            onSiteDays: 647.7240017697363,
            elementCost: 28041325,
          },
          sourceReductionResults: {
            workDays: 1.9829670257468894,
            onSiteDays: 1.9829670257468894,
            elementCost: 58865,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 251598,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 649.7069687954832,
            elementCost: 2707847,
          },
          generalResults: {
            totalCost: 31059635,
            areaContaminated: 6033.750947280892,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 2990.0007194372524,
          onSiteDays: 5112.175865946704,
          elementCost: 196533780,
        },
        sourceReductionResults: {
          workDays: 45.6604042698106,
          onSiteDays: 45.6604042698106,
          elementCost: 1508880,
        },
        decontaminationResults: {
          workDays: 3.739552576267056,
          onSiteDays: 3.739552576267056,
          elementCost: 487249,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.37907539737173596,
          onSiteDays: 5.719286342875125,
          elementCost: 10060,
        },
        incidentCommandResults: {
          onSiteDays: 5167.295109135657,
          elementCost: 19304602,
        },
        generalResults: {
          totalCost: 217844571,
          areaContaminated: 12550.563156267293,
          decontaminationRounds: 1,
          solidWasteProduced: 66260.6128612517,
          aqueousWasteProduced: 23944.569541163517,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 3063.62850942412,
          onSiteDays: 4431.329452476658,
          elementCost: 154955827,
        },
        sourceReductionResults: {
          workDays: 16.88987847459282,
          onSiteDays: 16.88987847459282,
          elementCost: 513349,
        },
        decontaminationResults: {
          workDays: 4.086823203853989,
          onSiteDays: 4.086823203853989,
          elementCost: 222464,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.71605896806424,
          onSiteDays: 30.91971508552868,
          elementCost: 257606,
        },
        incidentCommandResults: {
          onSiteDays: 4483.225869240633,
          elementCost: 19226446,
        },
        generalResults: {
          totalCost: 175175692,
          areaContaminated: 11061.280820191427,
          decontaminationRounds: 1,
          solidWasteProduced: 63976.67814733511,
          aqueousWasteProduced: 38562.788287921554,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 30596405.075404182,
        sourceReductionTravelCost: 97344.64173096989,
        decontaminationTravelCost: 90068.57000917353,
        wasteSamplingTravelCost: 34406.167440656114,
        incidentCommandTravelCost: 3812166.740341517,
        totalTravelCost: 34630391.1949265,
      },
      totalEventCost: 518976338.1949265,
      totalEventDuration: 11947.889953719163,
      totalContaminationArea: 37154.26276924473,
      totalSolidWasteProduced: 130237.29100858682,
      totalAqueousWasteProduced: 62507.35782908507,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 26.316137673463047,
            onSiteDays: 47.33745082766689,
            elementCost: 1569313,
          },
          sourceReductionResults: {
            workDays: 6.686052827994912,
            onSiteDays: 6.686052827994912,
            elementCost: 294125,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 43462,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 54.023503655661806,
            elementCost: 232303,
          },
          generalResults: {
            totalCost: 2139203,
            areaContaminated: 1214.2951303282307,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 202.90880777249748,
            onSiteDays: 964.309963543682,
            elementCost: 22056921,
          },
          sourceReductionResults: {
            workDays: 9.89928190001891,
            onSiteDays: 9.89928190001891,
            elementCost: 456536,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 194901,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 974.2092454437009,
            elementCost: 3269664,
          },
          generalResults: {
            totalCost: 25978022,
            areaContaminated: 4967.570987706398,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 60.83609869641891,
            onSiteDays: 535.5128825338038,
            elementCost: 12102395,
          },
          sourceReductionResults: {
            workDays: 2.1852525212538647,
            onSiteDays: 2.1852525212538647,
            elementCost: 66364,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 37034,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 537.6981350550577,
            elementCost: 2305093,
          },
          generalResults: {
            totalCost: 14510886,
            areaContaminated: 4967.570987706398,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1393.1769613537153,
          onSiteDays: 8311.075991988107,
          elementCost: 131672054,
        },
        sourceReductionResults: {
          workDays: 44.6722507423021,
          onSiteDays: 44.6722507423021,
          elementCost: 1855780,
        },
        decontaminationResults: {
          workDays: 3.957300412691501,
          onSiteDays: 3.957300412691501,
          elementCost: 868450,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.137598978078418,
          onSiteDays: 21.058327030992583,
          elementCost: 130011,
        },
        incidentCommandResults: {
          onSiteDays: 8380.763870174094,
          elementCost: 33581067,
        },
        generalResults: {
          totalCost: 168107362,
          areaContaminated: 18734.28316990246,
          decontaminationRounds: 1,
          solidWasteProduced: 130497.70647457361,
          aqueousWasteProduced: 13377.739689252954,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1149.6663941212105,
          onSiteDays: 4718.702714733664,
          elementCost: 86752952,
        },
        sourceReductionResults: {
          workDays: 207.0967948440173,
          onSiteDays: 207.0967948440173,
          elementCost: 2228043,
        },
        decontaminationResults: {
          workDays: 3.076825604326284,
          onSiteDays: 3.076825604326284,
          elementCost: 481585,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 3.138041621219291,
          onSiteDays: 12.677609946544939,
          elementCost: 134899,
        },
        incidentCommandResults: {
          onSiteDays: 4941.553945128553,
          elementCost: 20677231,
        },
        generalResults: {
          totalCost: 110274710,
          areaContaminated: 12616.806152381636,
          decontaminationRounds: 1,
          solidWasteProduced: 94748.96558863457,
          aqueousWasteProduced: 681.2909487136428,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 66814195.032753244,
        sourceReductionTravelCost: 1943677.7563739459,
        decontaminationTravelCost: 91369.24245467072,
        wasteSamplingTravelCost: 33534.9182087726,
        incidentCommandTravelCost: 6667498.168147819,
        totalTravelCost: 75550275.11793846,
      },
      totalEventCost: 396560458.11793846,
      totalEventDuration: 14888.248699457068,
      totalContaminationArea: 42500.52642802513,
      totalSolidWasteProduced: 225246.67206320819,
      totalAqueousWasteProduced: 14059.030637966596,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 59.8587411864654,
            onSiteDays: 330.01539899097156,
            elementCost: 9078684,
          },
          sourceReductionResults: {
            workDays: 6.648683692107705,
            onSiteDays: 6.648683692107705,
            elementCost: 225002,
          },
          decontaminationResults: {
            workDays: 3.1743367910791043,
            onSiteDays: 3.1743367910791043,
            elementCost: 160917,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.4519287330496635,
            onSiteDays: 5.777095868544612,
            elementCost: 20189,
          },
          incidentCommandResults: {
            onSiteDays: 345.61551534270296,
            elementCost: 1203061,
          },
          generalResults: {
            totalCost: 10687853,
            areaContaminated: 1377.4158481853729,
            decontaminationRounds: 1,
            solidWasteProduced: 8697.599011137358,
            aqueousWasteProduced: 9953.626651046037,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 144.63523530630215,
            onSiteDays: 857.4707910050797,
            elementCost: 28877755,
          },
          sourceReductionResults: {
            workDays: 53.122446840371495,
            onSiteDays: 53.122446840371495,
            elementCost: 1295331,
          },
          decontaminationResults: {
            workDays: 4.520387346744627,
            onSiteDays: 4.520387346744627,
            elementCost: 423681,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.6290366390929872,
            onSiteDays: 5.714945124440835,
            elementCost: 17893,
          },
          incidentCommandResults: {
            onSiteDays: 920.8285703166367,
            elementCost: 3124309,
          },
          generalResults: {
            totalCost: 33738969,
            areaContaminated: 5634.883015303797,
            decontaminationRounds: 1,
            solidWasteProduced: 44784.53769568704,
            aqueousWasteProduced: 38497.27383231533,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 208.5862289678048,
            onSiteDays: 1076.5808292992315,
            elementCost: 48026658,
          },
          sourceReductionResults: {
            workDays: 8.410039858611286,
            onSiteDays: 8.410039858611286,
            elementCost: 334231,
          },
          decontaminationResults: {
            workDays: 4.5249158045102185,
            onSiteDays: 4.5249158045102185,
            elementCost: 281984,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 9.155168408020744,
            onSiteDays: 23.314874576407107,
            elementCost: 329410,
          },
          incidentCommandResults: {
            onSiteDays: 1112.8306595387603,
            elementCost: 5345063,
          },
          generalResults: {
            totalCost: 54317346,
            areaContaminated: 5634.883015303797,
            decontaminationRounds: 1,
            solidWasteProduced: 5380.919694059688,
            aqueousWasteProduced: 30661.702118663532,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 168.54225145007774,
          onSiteDays: 1477.6411138519954,
          elementCost: 25945907,
        },
        sourceReductionResults: {
          workDays: 1.0120331326144427,
          onSiteDays: 1.0120331326144427,
          elementCost: 17433,
        },
        decontaminationResults: {
          workDays: 4.495936547754318,
          onSiteDays: 4.495936547754318,
          elementCost: 664849,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.634988937233206,
          onSiteDays: 15.052369716884364,
          elementCost: 157598,
        },
        incidentCommandResults: {
          onSiteDays: 1498.2014532492487,
          elementCost: 5233915,
        },
        generalResults: {
          totalCost: 32019702,
          areaContaminated: 15921.94437420041,
          decontaminationRounds: 1,
          solidWasteProduced: 54.743336615608484,
          aqueousWasteProduced: 81192.65436793792,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 336.85478026637145,
          onSiteDays: 1652.4963479206217,
          elementCost: 53372432,
        },
        sourceReductionResults: {
          workDays: 3.0199408876857103,
          onSiteDays: 3.0199408876857103,
          elementCost: 93670,
        },
        decontaminationResults: {
          workDays: 3.304601781141153,
          onSiteDays: 3.304601781141153,
          elementCost: 668039,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 1.0241433414300998,
          onSiteDays: 7.049394061795861,
          elementCost: 37840,
        },
        incidentCommandResults: {
          onSiteDays: 1665.8702846512444,
          elementCost: 5390728,
        },
        generalResults: {
          totalCost: 59562709,
          areaContaminated: 11757.970756047627,
          decontaminationRounds: 1,
          solidWasteProduced: 40436.08723432364,
          aqueousWasteProduced: 88937.39088748324,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 8304624.0029383,
        sourceReductionTravelCost: 359612.5243833806,
        decontaminationTravelCost: 135133.69608875786,
        wasteSamplingTravelCost: 42219.37183135191,
        incidentCommandTravelCost: 1883094.1763701437,
        totalTravelCost: 10724683.771611935,
      },
      totalEventCost: 201051262.77161193,
      totalEventDuration: 5543.346483098593,
      totalContaminationArea: 40327.097009041,
      totalSolidWasteProduced: 99353.88697182335,
      totalAqueousWasteProduced: 249242.6478574461,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 22.65331995843004,
            onSiteDays: 104.29878616011553,
            elementCost: 2362513,
          },
          sourceReductionResults: {
            workDays: 6.225323192433276,
            onSiteDays: 6.225323192433276,
            elementCost: 183160,
          },
          decontaminationResults: {
            workDays: 3.8596508262817864,
            onSiteDays: 3.8596508262817864,
            elementCost: 267954,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.1416266617209722,
            onSiteDays: 5.730002819163095,
            elementCost: 6440,
          },
          incidentCommandResults: {
            onSiteDays: 120.11376299799367,
            elementCost: 446228,
          },
          generalResults: {
            totalCost: 3266295,
            areaContaminated: 1176.4508028740133,
            decontaminationRounds: 1,
            solidWasteProduced: 4041.2598089280414,
            aqueousWasteProduced: 5125.872498465356,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 396.1669378780045,
            onSiteDays: 987.1732762532042,
            elementCost: 38644293,
          },
          sourceReductionResults: {
            workDays: 49.12615511137916,
            onSiteDays: 49.12615511137916,
            elementCost: 771529,
          },
          decontaminationResults: {
            workDays: 3.2655074298999986,
            onSiteDays: 3.2655074298999986,
            elementCost: 271914,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.6804314766186903,
            onSiteDays: 11.398886459490821,
            elementCost: 113316,
          },
          incidentCommandResults: {
            onSiteDays: 1050.9638252539742,
            elementCost: 4971886,
          },
          generalResults: {
            totalCost: 44772938,
            areaContaminated: 4812.753284484599,
            decontaminationRounds: 1,
            solidWasteProduced: 21814.420391653406,
            aqueousWasteProduced: 2410.350456593138,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 252.36780061434666,
            onSiteDays: 608.1895636949837,
            elementCost: 19764294,
          },
          sourceReductionResults: {
            workDays: 13.579687169020406,
            onSiteDays: 13.579687169020406,
            elementCost: 540063,
          },
          decontaminationResults: {
            workDays: 3.6381301941904542,
            onSiteDays: 3.6381301941904542,
            elementCost: 163626,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.9552077518688178,
            onSiteDays: 8.708434026060875,
            elementCost: 46250,
          },
          incidentCommandResults: {
            onSiteDays: 634.1158150842555,
            elementCost: 2758771,
          },
          generalResults: {
            totalCost: 23273004,
            areaContaminated: 4812.753284484599,
            decontaminationRounds: 1,
            solidWasteProduced: 27941.1164636989,
            aqueousWasteProduced: 2737.3718150880786,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 900.0973989621051,
          onSiteDays: 2811.135586900068,
          elementCost: 97472181,
        },
        sourceReductionResults: {
          workDays: 6.21163672192937,
          onSiteDays: 6.21163672192937,
          elementCost: 276417,
        },
        decontaminationResults: {
          workDays: 3.8135420439796386,
          onSiteDays: 3.8135420439796386,
          elementCost: 433781,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.1974200600049048,
          onSiteDays: 8.343054054082478,
          elementCost: 69217,
        },
        incidentCommandResults: {
          onSiteDays: 2829.5038197200597,
          elementCost: 13736928,
        },
        generalResults: {
          totalCost: 111988524,
          areaContaminated: 11029.91798218105,
          decontaminationRounds: 1,
          solidWasteProduced: 98353.41499845475,
          aqueousWasteProduced: 22357.28347466478,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 2721.6748226949367,
          onSiteDays: 4912.366258147989,
          elementCost: 111818899,
        },
        sourceReductionResults: {
          workDays: 89.01761579976707,
          onSiteDays: 89.01761579976707,
          elementCost: 2924908,
        },
        decontaminationResults: {
          workDays: 3.0863575497843225,
          onSiteDays: 3.0863575497843225,
          elementCost: 588253,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.73928006468875,
          onSiteDays: 25.57943888972857,
          elementCost: 283835,
        },
        incidentCommandResults: {
          onSiteDays: 5030.049670387269,
          elementCost: 23351160,
        },
        generalResults: {
          totalCost: 138967055,
          areaContaminated: 13994.217162685123,
          decontaminationRounds: 1,
          solidWasteProduced: 35209.59441643133,
          aqueousWasteProduced: 76239.05137646919,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 9714042.399014138,
        sourceReductionTravelCost: 455179.2940684711,
        decontaminationTravelCost: 108322.8637315277,
        wasteSamplingTravelCost: 59715.497367840246,
        incidentCommandTravelCost: 4838433.37222788,
        totalTravelCost: 15175693.426409855,
      },
      totalEventCost: 337443509.42640984,
      totalEventDuration: 9664.746893443553,
      totalContaminationArea: 35826.09251670938,
      totalSolidWasteProduced: 187359.80607916642,
      totalAqueousWasteProduced: 108869.92962128053,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 60.26770144932843,
            onSiteDays: 154.72278608092375,
            elementCost: 7386089,
          },
          sourceReductionResults: {
            workDays: 1.7798069734282804,
            onSiteDays: 1.7798069734282804,
            elementCost: 77057,
          },
          decontaminationResults: {
            workDays: 3.227973809053184,
            onSiteDays: 3.227973809053184,
            elementCost: 141263,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.3784336029623426,
            onSiteDays: 5.716405470741643,
            elementCost: 9626,
          },
          incidentCommandResults: {
            onSiteDays: 165.4469723341469,
            elementCost: 779730,
          },
          generalResults: {
            totalCost: 8393765,
            areaContaminated: 1168.930525860812,
            decontaminationRounds: 1,
            solidWasteProduced: 6098.180435848295,
            aqueousWasteProduced: 6283.363220453954,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 119.62859411014622,
            onSiteDays: 753.7762005212182,
            elementCost: 35181143,
          },
          sourceReductionResults: {
            workDays: 33.95743245906108,
            onSiteDays: 33.95743245906108,
            elementCost: 748109,
          },
          decontaminationResults: {
            workDays: 3.737476628911094,
            onSiteDays: 3.737476628911094,
            elementCost: 393561,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 5.192347508820317,
            onSiteDays: 15.194267502946655,
            elementCost: 178742,
          },
          incidentCommandResults: {
            onSiteDays: 806.6653771121371,
            elementCost: 3831888,
          },
          generalResults: {
            totalCost: 40333443,
            areaContaminated: 4781.98851488514,
            decontaminationRounds: 1,
            solidWasteProduced: 5026.270891186351,
            aqueousWasteProduced: 8100.582918123051,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 668.8231778562961,
            onSiteDays: 2861.29222996081,
            elementCost: 71305148,
          },
          sourceReductionResults: {
            workDays: 30.38289675699862,
            onSiteDays: 30.38289675699862,
            elementCost: 1034262,
          },
          decontaminationResults: {
            workDays: 4.770183193909513,
            onSiteDays: 4.770183193909513,
            elementCost: 239246,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.50265578136528,
            onSiteDays: 10.308084464942493,
            elementCost: 51827,
          },
          incidentCommandResults: {
            onSiteDays: 2906.7533943766603,
            elementCost: 11029942,
          },
          generalResults: {
            totalCost: 83660425,
            areaContaminated: 4781.98851488514,
            decontaminationRounds: 1,
            solidWasteProduced: 16832.290390403632,
            aqueousWasteProduced: 19843.39159165749,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 5033.13316036335,
          onSiteDays: 12084.625530168278,
          elementCost: 331888152,
        },
        sourceReductionResults: {
          workDays: 15.231413063245284,
          onSiteDays: 15.231413063245284,
          elementCost: 316223,
        },
        decontaminationResults: {
          workDays: 4.540233442918452,
          onSiteDays: 4.540233442918452,
          elementCost: 838724,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 29.242575868941415,
          onSiteDays: 69.30256319308336,
          elementCost: 790808,
        },
        incidentCommandResults: {
          onSiteDays: 12173.699739867525,
          elementCost: 49605881,
        },
        generalResults: {
          totalCost: 383439788,
          areaContaminated: 16803.428385593794,
          decontaminationRounds: 1,
          solidWasteProduced: 52111.47544623897,
          aqueousWasteProduced: 107580.16479055666,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 380.6120606738897,
          onSiteDays: 1582.2512326801686,
          elementCost: 55349402,
        },
        sourceReductionResults: {
          workDays: 0.11748308050471509,
          onSiteDays: 0.11748308050471509,
          elementCost: 6504,
        },
        decontaminationResults: {
          workDays: 3.1417630967082837,
          onSiteDays: 3.1417630967082837,
          elementCost: 296519,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.560082019800634,
          onSiteDays: 29.408070392954286,
          elementCost: 371675,
        },
        incidentCommandResults: {
          onSiteDays: 1614.918549250336,
          elementCost: 7918016,
        },
        generalResults: {
          totalCost: 63942116,
          areaContaminated: 12913.35136235986,
          decontaminationRounds: 1,
          solidWasteProduced: 4886.718360796224,
          aqueousWasteProduced: 75784.70138754167,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 59646259.7793837,
        sourceReductionTravelCost: 227203.61725759157,
        decontaminationTravelCost: 236659.6843482043,
        wasteSamplingTravelCost: 105447.52103708776,
        incidentCommandTravelCost: 6649207.823598841,
        totalTravelCost: 66864778.42562542,
      },
      totalEventCost: 646634315.4256254,
      totalEventDuration: 17667.484032940803,
      totalContaminationArea: 40449.687303584746,
      totalSolidWasteProduced: 84954.93552447346,
      totalAqueousWasteProduced: 217592.20390833286,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 11.55311484814188,
            onSiteDays: 71.06530338674506,
            elementCost: 3209621,
          },
          sourceReductionResults: {
            workDays: 1.3573347768485804,
            onSiteDays: 1.3573347768485804,
            elementCost: 45645,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 36086,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 72.42263816359363,
            elementCost: 228935,
          },
          generalResults: {
            totalCost: 3520287,
            areaContaminated: 1215.458571855137,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 62.57118312215782,
            onSiteDays: 471.4961145152694,
            elementCost: 20556265,
          },
          sourceReductionResults: {
            workDays: 2.4795596625117793,
            onSiteDays: 2.4795596625117793,
            elementCost: 63956,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 175121,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 473.97567417778123,
            elementCost: 2022984,
          },
          generalResults: {
            totalCost: 22818326,
            areaContaminated: 4972.33052122556,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 73.7031823664292,
            onSiteDays: 718.430254331656,
            elementCost: 12044231,
          },
          sourceReductionResults: {
            workDays: 2.8622701155560097,
            onSiteDays: 2.8622701155560097,
            elementCost: 182737,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 79711,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 721.292524447212,
            elementCost: 2302062,
          },
          generalResults: {
            totalCost: 14608741,
            areaContaminated: 4972.33052122556,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 202.59819855565576,
          onSiteDays: 1402.184501786665,
          elementCost: 34472096,
        },
        sourceReductionResults: {
          workDays: 0.771389158392329,
          onSiteDays: 0.771389158392329,
          elementCost: 28982,
        },
        decontaminationResults: {
          workDays: 4.784137405404853,
          onSiteDays: 4.784137405404853,
          elementCost: 256040,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 0.45083700454845527,
          onSiteDays: 7.09049393805438,
          elementCost: 16889,
        },
        incidentCommandResults: {
          onSiteDays: 1414.8305222885165,
          elementCost: 4297026,
        },
        generalResults: {
          totalCost: 39071033,
          areaContaminated: 10568.650968039561,
          decontaminationRounds: 1,
          solidWasteProduced: 35667.73487295777,
          aqueousWasteProduced: 77697.26563281707,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1753.2232096380897,
          onSiteDays: 10976.941651934896,
          elementCost: 237975182,
        },
        sourceReductionResults: {
          workDays: 17.56739263438267,
          onSiteDays: 17.56739263438267,
          elementCost: 539966,
        },
        decontaminationResults: {
          workDays: 3.0909159230280006,
          onSiteDays: 3.0909159230280006,
          elementCost: 332903,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.1223354437636517,
          onSiteDays: 8.07035918730237,
          elementCost: 69616,
        },
        incidentCommandResults: {
          onSiteDays: 11005.67031967961,
          elementCost: 43683006,
        },
        generalResults: {
          totalCost: 282600673,
          areaContaminated: 19013.17518050591,
          decontaminationRounds: 1,
          solidWasteProduced: 93674.43879537945,
          aqueousWasteProduced: 49085.44537572253,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 94472103.1604543,
        sourceReductionTravelCost: 42886.23888508483,
        decontaminationTravelCost: 83891.34515362635,
        wasteSamplingTravelCost: 13086.951656945263,
        incidentCommandTravelCost: 4052066.042878776,
        totalTravelCost: 98664033.73902875,
      },
      totalEventCost: 461283093.73902875,
      totalEventDuration: 13688.191678756713,
      totalContaminationArea: 40741.94576285173,
      totalSolidWasteProduced: 129342.17366833723,
      totalAqueousWasteProduced: 126782.7110085396,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 45.064635123536505,
            onSiteDays: 245.12708072793856,
            elementCost: 6324811,
          },
          sourceReductionResults: {
            workDays: 1.1553880909523175,
            onSiteDays: 1.1553880909523175,
            elementCost: 52238,
          },
          decontaminationResults: {
            workDays: 3.7258972974321565,
            onSiteDays: 3.7258972974321565,
            elementCost: 129664,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.401427624747012,
            onSiteDays: 10.148479330030998,
            elementCost: 47365,
          },
          incidentCommandResults: {
            onSiteDays: 260.15684544635405,
            elementCost: 1171820,
          },
          generalResults: {
            totalCost: 7725898,
            areaContaminated: 1405.2830943364886,
            decontaminationRounds: 1,
            solidWasteProduced: 4108.253392066951,
            aqueousWasteProduced: 7414.170149834549,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 593.8884977189175,
            onSiteDays: 1147.727205178609,
            elementCost: 45667222,
          },
          sourceReductionResults: {
            workDays: 16.17810278535536,
            onSiteDays: 16.17810278535536,
            elementCost: 583479,
          },
          decontaminationResults: {
            workDays: 3.793494939523166,
            onSiteDays: 3.793494939523166,
            elementCost: 115620,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.3753062955856215,
            onSiteDays: 12.657511757989145,
            elementCost: 116393,
          },
          incidentCommandResults: {
            onSiteDays: 1180.3563146614767,
            elementCost: 5665878,
          },
          generalResults: {
            totalCost: 52148592,
            areaContaminated: 5748.885385921998,
            decontaminationRounds: 1,
            solidWasteProduced: 10577.79540425124,
            aqueousWasteProduced: 24206.690984747514,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 617.4618334482992,
            onSiteDays: 1837.2125817620445,
            elementCost: 66698822,
          },
          sourceReductionResults: {
            workDays: 12.736637769677014,
            onSiteDays: 12.736637769677014,
            elementCost: 304783,
          },
          decontaminationResults: {
            workDays: 3.3133343579977135,
            onSiteDays: 3.3133343579977135,
            elementCost: 307378,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.1869506588623953,
            onSiteDays: 18.340146475562836,
            elementCost: 110390,
          },
          incidentCommandResults: {
            onSiteDays: 1871.6027003652819,
            elementCost: 8228382,
          },
          generalResults: {
            totalCost: 75649755,
            areaContaminated: 5748.885385921998,
            decontaminationRounds: 1,
            solidWasteProduced: 3777.6546847054765,
            aqueousWasteProduced: 4431.842296992602,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 560.0756781330208,
          onSiteDays: 3167.523942738324,
          elementCost: 60329495,
        },
        sourceReductionResults: {
          workDays: 127.59283015300113,
          onSiteDays: 127.59283015300113,
          elementCost: 1935559,
        },
        decontaminationResults: {
          workDays: 4.4496477137901,
          onSiteDays: 4.4496477137901,
          elementCost: 559196,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 5.696971155981559,
          onSiteDays: 16.987196972940733,
          elementCost: 211255,
        },
        incidentCommandResults: {
          onSiteDays: 3316.5536175780558,
          elementCost: 12613542,
        },
        generalResults: {
          totalCost: 75649047,
          areaContaminated: 10273.05084287027,
          decontaminationRounds: 1,
          solidWasteProduced: 76568.41947987473,
          aqueousWasteProduced: 5381.689976196535,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 453.49254850465314,
          onSiteDays: 3450.8142309608793,
          elementCost: 62340689,
        },
        sourceReductionResults: {
          workDays: 13.120268162755968,
          onSiteDays: 13.120268162755968,
          elementCost: 401917,
        },
        decontaminationResults: {
          workDays: 4.360201456900733,
          onSiteDays: 4.360201456900733,
          elementCost: 211969,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.990557740680525,
          onSiteDays: 14.772459814085128,
          elementCost: 130950,
        },
        incidentCommandResults: {
          onSiteDays: 3483.067160394621,
          elementCost: 15875242,
        },
        generalResults: {
          totalCost: 78960767,
          areaContaminated: 14339.64267552531,
          decontaminationRounds: 1,
          solidWasteProduced: 15483.08657008089,
          aqueousWasteProduced: 22378.292446967094,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 21017018.836993575,
        sourceReductionTravelCost: 722638.587381626,
        decontaminationTravelCost: 189727.57511312937,
        wasteSamplingTravelCost: 70615.3928296499,
        incidentCommandTravelCost: 4226812.728355812,
        totalTravelCost: 26226813.12067379,
      },
      totalEventCost: 316360872.1206738,
      totalEventDuration: 10111.73663844579,
      totalContaminationArea: 37515.74738457607,
      totalSolidWasteProduced: 110515.2095309793,
      totalAqueousWasteProduced: 63812.68585473829,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 145.12678697324736,
            onSiteDays: 227.4410373312432,
            elementCost: 8440911,
          },
          sourceReductionResults: {
            workDays: 4.107899202915143,
            onSiteDays: 4.107899202915143,
            elementCost: 131671,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 34337,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 231.54893653415834,
            elementCost: 760846,
          },
          generalResults: {
            totalCost: 9367765,
            areaContaminated: 1111.9969657302695,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 81.85500789337722,
            onSiteDays: 497.6161586355108,
            elementCost: 9880331,
          },
          sourceReductionResults: {
            workDays: 17.542905915118155,
            onSiteDays: 17.542905915118155,
            elementCost: 386761,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 153943,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 515.159064550629,
            elementCost: 1875547,
          },
          generalResults: {
            totalCost: 12296582,
            areaContaminated: 4549.078496169283,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 24.146278479419074,
            onSiteDays: 124.89908767216187,
            elementCost: 4019040,
          },
          sourceReductionResults: {
            workDays: 3.325874468556677,
            onSiteDays: 3.325874468556677,
            elementCost: 157805,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 26399,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 128.22496214071856,
            elementCost: 605363,
          },
          generalResults: {
            totalCost: 4808607,
            areaContaminated: 4549.078496169283,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1252.6906932503036,
          onSiteDays: 4608.343146474466,
          elementCost: 112529434,
        },
        sourceReductionResults: {
          workDays: 67.39365862421334,
          onSiteDays: 67.39365862421334,
          elementCost: 2256687,
        },
        decontaminationResults: {
          workDays: 4.399747779918776,
          onSiteDays: 4.399747779918776,
          elementCost: 557334,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 22.634171054582485,
          onSiteDays: 64.13399843066615,
          elementCost: 769890,
        },
        incidentCommandResults: {
          onSiteDays: 4744.270551309264,
          elementCost: 18308062,
        },
        generalResults: {
          totalCost: 134421407,
          areaContaminated: 14558.867051861915,
          decontaminationRounds: 1,
          solidWasteProduced: 124608.1097156162,
          aqueousWasteProduced: 71681.43682816824,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 500.32650273930324,
          onSiteDays: 4210.883430154265,
          elementCost: 62800357,
        },
        sourceReductionResults: {
          workDays: 6.405351143553137,
          onSiteDays: 6.405351143553137,
          elementCost: 219079,
        },
        decontaminationResults: {
          workDays: 4.036382023486397,
          onSiteDays: 4.036382023486397,
          elementCost: 640024,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 41.3616396238986,
          onSiteDays: 141.4422256753768,
          elementCost: 1094491,
        },
        incidentCommandResults: {
          onSiteDays: 4362.767388996681,
          elementCost: 20194244,
        },
        generalResults: {
          totalCost: 84948195,
          areaContaminated: 12649.389419675703,
          decontaminationRounds: 1,
          solidWasteProduced: 68976.9883914002,
          aqueousWasteProduced: 53331.69598093094,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 57486348.531220235,
        sourceReductionTravelCost: 170280.64280757093,
        decontaminationTravelCost: 91832.90470266562,
        wasteSamplingTravelCost: 177848.4630337511,
        incidentCommandTravelCost: 4179309.9071158026,
        totalTravelCost: 62105620.448880024,
      },
      totalEventCost: 307948176.44888,
      totalEventDuration: 9981.970903531452,
      totalContaminationArea: 37418.410429606454,
      totalSolidWasteProduced: 193585.0981070164,
      totalAqueousWasteProduced: 125013.13280909919,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 43.508063623214326,
            onSiteDays: 188.85618280657724,
            elementCost: 5090632,
          },
          sourceReductionResults: {
            workDays: 1.9037642652402968,
            onSiteDays: 1.9037642652402968,
            elementCost: 50038,
          },
          decontaminationResults: {
            workDays: 4.603190803342311,
            onSiteDays: 4.603190803342311,
            elementCost: 172576,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.7372965663961387,
            onSiteDays: 7.228062050349094,
            elementCost: 31384,
          },
          incidentCommandResults: {
            onSiteDays: 202.5911999255089,
            elementCost: 903806,
          },
          generalResults: {
            totalCost: 6248436,
            areaContaminated: 1140.6330237595305,
            decontaminationRounds: 1,
            solidWasteProduced: 8838.62483381909,
            aqueousWasteProduced: 129.88975811001896,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 197.46702200830356,
            onSiteDays: 737.3675508709114,
            elementCost: 25863170,
          },
          sourceReductionResults: {
            workDays: 22.79870107370109,
            onSiteDays: 22.79870107370109,
            elementCost: 988192,
          },
          decontaminationResults: {
            workDays: 3.9563152871458596,
            onSiteDays: 3.9563152871458596,
            elementCost: 242321,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 4.02232061477298,
            onSiteDays: 15.795223667776579,
            elementCost: 96214,
          },
          incidentCommandResults: {
            onSiteDays: 779.9177908995349,
            elementCost: 3535476,
          },
          generalResults: {
            totalCost: 30725373,
            areaContaminated: 4666.226006288988,
            decontaminationRounds: 1,
            solidWasteProduced: 5710.249426703089,
            aqueousWasteProduced: 10091.404813916597,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 162.22013133646558,
            onSiteDays: 1047.2740768396204,
            elementCost: 51314749,
          },
          sourceReductionResults: {
            workDays: 31.15894200690409,
            onSiteDays: 31.15894200690409,
            elementCost: 481421,
          },
          decontaminationResults: {
            workDays: 4.39655737611385,
            onSiteDays: 4.39655737611385,
            elementCost: 325184,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 9.730916533563093,
            onSiteDays: 22.906844887767857,
            elementCost: 281972,
          },
          incidentCommandResults: {
            onSiteDays: 1105.7364211104061,
            elementCost: 4166485,
          },
          generalResults: {
            totalCost: 56569811,
            areaContaminated: 4666.226006288988,
            decontaminationRounds: 1,
            solidWasteProduced: 21761.769999145192,
            aqueousWasteProduced: 25794.63254860451,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 353.92343968149214,
          onSiteDays: 2092.9291189773194,
          elementCost: 39386737,
        },
        sourceReductionResults: {
          workDays: 151.9306121152788,
          onSiteDays: 151.9306121152788,
          elementCost: 2982466,
        },
        decontaminationResults: {
          workDays: 4.223004097869388,
          onSiteDays: 4.223004097869388,
          elementCost: 348396,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 4.089683918078919,
          onSiteDays: 12.281659166209149,
          elementCost: 130327,
        },
        incidentCommandResults: {
          onSiteDays: 2261.3643943566763,
          elementCost: 7497592,
        },
        generalResults: {
          totalCost: 50345518,
          areaContaminated: 15883.493215284192,
          decontaminationRounds: 1,
          solidWasteProduced: 70830.5916890106,
          aqueousWasteProduced: 46707.00679824903,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 185.54171528787057,
          onSiteDays: 793.734871592557,
          elementCost: 38493697,
        },
        sourceReductionResults: {
          workDays: 32.09797433030818,
          onSiteDays: 32.09797433030818,
          elementCost: 1415557,
        },
        decontaminationResults: {
          workDays: 3.170913293531843,
          onSiteDays: 3.170913293531843,
          elementCost: 256358,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 10.264943897442626,
          onSiteDays: 22.906776784414973,
          elementCost: 450098,
        },
        incidentCommandResults: {
          onSiteDays: 851.910536000812,
          elementCost: 2644796,
        },
        generalResults: {
          totalCost: 43260506,
          areaContaminated: 10856.797885896938,
          decontaminationRounds: 1,
          solidWasteProduced: 8566.681756454936,
          aqueousWasteProduced: 5510.371056144436,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 24329872.439908534,
        sourceReductionTravelCost: 497728.76048600033,
        decontaminationTravelCost: 220615.83590328775,
        wasteSamplingTravelCost: 60753.77590139314,
        incidentCommandTravelCost: 2468659.885976801,
        totalTravelCost: 27577630.698176015,
      },
      totalEventCost: 214727274.69817603,
      totalEventDuration: 5201.520342292939,
      totalContaminationArea: 37213.37613751864,
      totalSolidWasteProduced: 115707.91770513292,
      totalAqueousWasteProduced: 88233.30497502458,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 100.60747345653132,
            onSiteDays: 283.39239040403754,
            elementCost: 6476385,
          },
          sourceReductionResults: {
            workDays: 1.4032431787344275,
            onSiteDays: 1.4032431787344275,
            elementCost: 68016,
          },
          decontaminationResults: {
            workDays: 4.579613404250614,
            onSiteDays: 4.579613404250614,
            elementCost: 255228,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 1.687531118514549,
            onSiteDays: 8.384756640374569,
            elementCost: 64112,
          },
          incidentCommandResults: {
            onSiteDays: 297.76000362739717,
            elementCost: 1327473,
          },
          generalResults: {
            totalCost: 8191214,
            areaContaminated: 1255.782172876579,
            decontaminationRounds: 1,
            solidWasteProduced: 1421.5021392692936,
            aqueousWasteProduced: 4847.722828144275,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 119.8965465013948,
            onSiteDays: 1380.4339580281655,
            elementCost: 20670021,
          },
          sourceReductionResults: {
            workDays: 1.1669142060490216,
            onSiteDays: 1.1669142060490216,
            elementCost: 36442,
          },
          decontaminationResults: {
            workDays: 4.5472965039190125,
            onSiteDays: 4.5472965039190125,
            elementCost: 419904,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.4026204617865398,
            onSiteDays: 6.099402057278641,
            elementCost: 13556,
          },
          incidentCommandResults: {
            onSiteDays: 1392.2475707954122,
            elementCost: 6643954,
          },
          generalResults: {
            totalCost: 27783877,
            areaContaminated: 5137.290707222368,
            decontaminationRounds: 1,
            solidWasteProduced: 27325.098897661894,
            aqueousWasteProduced: 2389.588247373797,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 65.15253674406645,
            onSiteDays: 532.3602846938294,
            elementCost: 14044960,
          },
          sourceReductionResults: {
            workDays: 25.277956275589926,
            onSiteDays: 25.277956275589926,
            elementCost: 644505,
          },
          decontaminationResults: {
            workDays: 3.804297595937806,
            onSiteDays: 3.804297595937806,
            elementCost: 310577,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 3.1929400655392226,
            onSiteDays: 18.833545870819712,
            elementCost: 142468,
          },
          incidentCommandResults: {
            onSiteDays: 580.2760844361768,
            elementCost: 1866935,
          },
          generalResults: {
            totalCost: 17009445,
            areaContaminated: 5137.290707222368,
            decontaminationRounds: 1,
            solidWasteProduced: 20554.793253588625,
            aqueousWasteProduced: 557.3225343968559,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 914.0617999198514,
          onSiteDays: 3324.6399194605065,
          elementCost: 83343879,
        },
        sourceReductionResults: {
          workDays: 36.410501418462594,
          onSiteDays: 36.410501418462594,
          elementCost: 1472183,
        },
        decontaminationResults: {
          workDays: 3.369693401821352,
          onSiteDays: 3.369693401821352,
          elementCost: 931070,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 11.242919311907707,
          onSiteDays: 44.65894761291765,
          elementCost: 352655,
        },
        incidentCommandResults: {
          onSiteDays: 3409.0790618937076,
          elementCost: 12132415,
        },
        generalResults: {
          totalCost: 98232202,
          areaContaminated: 18442.23914398864,
          decontaminationRounds: 1,
          solidWasteProduced: 126721.22833490316,
          aqueousWasteProduced: 32246.926164267337,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 2036.19262019774,
          onSiteDays: 4214.360493575009,
          elementCost: 125068798,
        },
        sourceReductionResults: {
          workDays: 48.30220367816065,
          onSiteDays: 48.30220367816065,
          elementCost: 939268,
        },
        decontaminationResults: {
          workDays: 3.5680117035675822,
          onSiteDays: 3.5680117035675822,
          elementCost: 558729,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 2.3231338503722143,
          onSiteDays: 8.543157514265998,
          elementCost: 72392,
        },
        incidentCommandResults: {
          onSiteDays: 4274.773866471002,
          elementCost: 16111580,
        },
        generalResults: {
          totalCost: 142750767,
          areaContaminated: 14588.664301467421,
          decontaminationRounds: 1,
          solidWasteProduced: 51520.23689475724,
          aqueousWasteProduced: 63659.504031596334,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 36616904.504776165,
        sourceReductionTravelCost: 150677.2384703322,
        decontaminationTravelCost: 198683.19322787595,
        wasteSamplingTravelCost: 70190.48259411861,
        incidentCommandTravelCost: 4988461.3772993395,
        totalTravelCost: 42024916.796367824,
      },
      totalEventCost: 335992421.7963678,
      totalEventDuration: 9954.136587223697,
      totalContaminationArea: 44561.267032777374,
      totalSolidWasteProduced: 227542.8595201802,
      totalAqueousWasteProduced: 103701.0638057786,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 14.614675217753643,
            onSiteDays: 61.233083656485164,
            elementCost: 1595366,
          },
          sourceReductionResults: {
            workDays: 2.035884624825051,
            onSiteDays: 2.035884624825051,
            elementCost: 60187,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 57531,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 63.268968281310215,
            elementCost: 249119,
          },
          generalResults: {
            totalCost: 1962203,
            areaContaminated: 1471.414203097982,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 81.09912035032512,
            onSiteDays: 293.42136077480785,
            elementCost: 12261746,
          },
          sourceReductionResults: {
            workDays: 15.089997778204612,
            onSiteDays: 15.089997778204612,
            elementCost: 437169,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 83927,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 308.5113585530125,
            elementCost: 1179430,
          },
          generalResults: {
            totalCost: 13962272,
            areaContaminated: 6019.421739946291,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 52.56265000170948,
            onSiteDays: 303.92808121202813,
            elementCost: 9658485,
          },
          sourceReductionResults: {
            workDays: 11.13867370135744,
            onSiteDays: 11.13867370135744,
            elementCost: 419992,
          },
          decontaminationResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 111099,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: { workDays: 0, onSiteDays: 0, elementCost: 0 },
          incidentCommandResults: {
            onSiteDays: 315.0667549133856,
            elementCost: 1323991,
          },
          generalResults: {
            totalCost: 11513567,
            areaContaminated: 6019.421739946291,
            decontaminationRounds: 0,
            solidWasteProduced: 0,
            aqueousWasteProduced: 0,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 1165.0196682646053,
          onSiteDays: 3324.4068007873857,
          elementCost: 185742750,
        },
        sourceReductionResults: {
          workDays: 33.929030435971,
          onSiteDays: 33.929030435971,
          elementCost: 1073546,
        },
        decontaminationResults: {
          workDays: 4.304740990815857,
          onSiteDays: 4.304740990815857,
          elementCost: 467329,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 17.48751552666508,
          onSiteDays: 74.87822739845252,
          elementCost: 675760,
        },
        incidentCommandResults: {
          onSiteDays: 3437.518799612625,
          elementCost: 16311040,
        },
        generalResults: {
          totalCost: 204270425,
          areaContaminated: 17169.76617862698,
          decontaminationRounds: 1,
          solidWasteProduced: 82599.02981404631,
          aqueousWasteProduced: 67317.80883894367,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 1017.860980821011,
          onSiteDays: 3497.4600435855673,
          elementCost: 87804026,
        },
        sourceReductionResults: {
          workDays: 117.1331507069782,
          onSiteDays: 117.1331507069782,
          elementCost: 1886459,
        },
        decontaminationResults: {
          workDays: 4.689562231229981,
          onSiteDays: 4.689562231229981,
          elementCost: 721960,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 19.33682201891408,
          onSiteDays: 39.98827167595866,
          elementCost: 568126,
        },
        incidentCommandResults: {
          onSiteDays: 3659.271028199734,
          elementCost: 13644083,
        },
        generalResults: {
          totalCost: 104624654,
          areaContaminated: 15163.667872124037,
          decontaminationRounds: 1,
          solidWasteProduced: 111864.0988719552,
          aqueousWasteProduced: 111884.22345793512,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 20116363.291756988,
        sourceReductionTravelCost: 412738.03380655503,
        decontaminationTravelCost: 49856.595748778054,
        wasteSamplingTravelCost: 79331.73879958707,
        incidentCommandTravelCost: 3431598.118809285,
        totalTravelCost: 24089887.778921194,
      },
      totalEventCost: 360423008.7789212,
      totalEventDuration: 7783.636909560068,
      totalContaminationArea: 45843.69173374158,
      totalSolidWasteProduced: 194463.12868600152,
      totalAqueousWasteProduced: 179202.0322968788,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 75.33207999916587,
            onSiteDays: 193.35598538130563,
            elementCost: 5878348,
          },
          sourceReductionResults: {
            workDays: 1.8191939822771803,
            onSiteDays: 1.8191939822771803,
            elementCost: 56540,
          },
          decontaminationResults: {
            workDays: 4.693277130297682,
            onSiteDays: 4.693277130297682,
            elementCost: 279896,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.5948287227214444,
            onSiteDays: 6.326356404772513,
            elementCost: 23046,
          },
          incidentCommandResults: {
            onSiteDays: 206.194812898653,
            elementCost: 911849,
          },
          generalResults: {
            totalCost: 7149679,
            areaContaminated: 1281.53612040009,
            decontaminationRounds: 1,
            solidWasteProduced: 8594.683867600625,
            aqueousWasteProduced: 8299.59724184514,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 197.93187110707734,
            onSiteDays: 763.536740791545,
            elementCost: 35594687,
          },
          sourceReductionResults: {
            workDays: 40.186553684755665,
            onSiteDays: 40.186553684755665,
            elementCost: 897872,
          },
          decontaminationResults: {
            workDays: 4.752502824122203,
            onSiteDays: 4.752502824122203,
            elementCost: 346327,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.10980401552040066,
            onSiteDays: 5.663652041182114,
            elementCost: 3315,
          },
          incidentCommandResults: {
            onSiteDays: 814.139449341605,
            elementCost: 2813049,
          },
          generalResults: {
            totalCost: 39655250,
            areaContaminated: 5242.647765273097,
            decontaminationRounds: 1,
            solidWasteProduced: 8371.097253634389,
            aqueousWasteProduced: 13322.405088918687,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 292.62841902681134,
            onSiteDays: 1897.0168640531033,
            elementCost: 35635020,
          },
          sourceReductionResults: {
            workDays: 66.64891340982061,
            onSiteDays: 66.64891340982061,
            elementCost: 1197417,
          },
          decontaminationResults: {
            workDays: 3.9842872421686275,
            onSiteDays: 3.9842872421686275,
            elementCost: 241850,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.62969221652346,
            onSiteDays: 9.33507871733348,
            elementCost: 89498,
          },
          incidentCommandResults: {
            onSiteDays: 1976.985143422426,
            elementCost: 7198574,
          },
          generalResults: {
            totalCost: 44362359,
            areaContaminated: 5242.647765273097,
            decontaminationRounds: 1,
            solidWasteProduced: 12086.750039418375,
            aqueousWasteProduced: 10889.021701540676,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 918.9996220455685,
          onSiteDays: 5227.24995465923,
          elementCost: 103757592,
        },
        sourceReductionResults: {
          workDays: 88.38743334755941,
          onSiteDays: 88.38743334755941,
          elementCost: 1318803,
        },
        decontaminationResults: {
          workDays: 4.178234792588799,
          onSiteDays: 4.178234792588799,
          elementCost: 568481,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 40.4146997171352,
          onSiteDays: 95.1023754743209,
          elementCost: 1143664,
        },
        incidentCommandResults: {
          onSiteDays: 5414.9179982737,
          elementCost: 25134078,
        },
        generalResults: {
          totalCost: 131922618,
          areaContaminated: 16707.23935745359,
          decontaminationRounds: 1,
          solidWasteProduced: 128097.6207626762,
          aqueousWasteProduced: 90823.17035711353,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 884.2442597462592,
          onSiteDays: 2835.8480967168107,
          elementCost: 99917445,
        },
        sourceReductionResults: {
          workDays: 6.569024944150996,
          onSiteDays: 6.569024944150996,
          elementCost: 184706,
        },
        decontaminationResults: {
          workDays: 3.069165689421158,
          onSiteDays: 3.069165689421158,
          elementCost: 302731,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 6.279206399082541,
          onSiteDays: 18.3543624679893,
          elementCost: 273511,
        },
        incidentCommandResults: {
          onSiteDays: 2863.8406498183717,
          elementCost: 9204056,
        },
        generalResults: {
          totalCost: 109882449,
          areaContaminated: 11410.104929150348,
          decontaminationRounds: 1,
          solidWasteProduced: 56706.268159060586,
          aqueousWasteProduced: 80039.67940325286,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 23115547.957063258,
        sourceReductionTravelCost: 723071.0402374971,
        decontaminationTravelCost: 117109.51550092934,
        wasteSamplingTravelCost: 78145.69426436593,
        incidentCommandTravelCost: 3417469.449351292,
        totalTravelCost: 27451343.656417344,
      },
      totalEventCost: 360423698.65641737,
      totalEventDuration: 11276.078053754756,
      totalContaminationArea: 39884.17593755022,
      totalSolidWasteProduced: 213856.4200823902,
      totalAqueousWasteProduced: 203373.8737926709,
    },
  },
  {
    scenarioResults: {
      indoorResults: {
        Residential: {
          characterizationSamplingResults: {
            workDays: 159.7261380729739,
            onSiteDays: 371.72658932311674,
            elementCost: 14786484,
          },
          sourceReductionResults: {
            workDays: 1.8969046545148132,
            onSiteDays: 1.8969046545148132,
            elementCost: 67726,
          },
          decontaminationResults: {
            workDays: 3.9277452581859533,
            onSiteDays: 3.9277452581859533,
            elementCost: 204891,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 0.07854949196685591,
            onSiteDays: 5.531843430847897,
            elementCost: 2853,
          },
          incidentCommandResults: {
            onSiteDays: 383.0830826666654,
            elementCost: 1353349,
          },
          generalResults: {
            totalCost: 16415303,
            areaContaminated: 1458.3445703958987,
            decontaminationRounds: 1,
            solidWasteProduced: 11499.055062040246,
            aqueousWasteProduced: 6453.356920577024,
          },
        },
        Commercial: {
          characterizationSamplingResults: {
            workDays: 128.7808254768275,
            onSiteDays: 637.9950463061721,
            elementCost: 27185131,
          },
          sourceReductionResults: {
            workDays: 6.188805518506913,
            onSiteDays: 6.188805518506913,
            elementCost: 324107,
          },
          decontaminationResults: {
            workDays: 4.414732681916732,
            onSiteDays: 4.414732681916732,
            elementCost: 510625,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 2.900957475345663,
            onSiteDays: 11.629734912466368,
            elementCost: 113832,
          },
          incidentCommandResults: {
            onSiteDays: 660.228319419062,
            elementCost: 3192548,
          },
          generalResults: {
            totalCost: 31326243,
            areaContaminated: 5965.955060710495,
            decontaminationRounds: 1,
            solidWasteProduced: 2762.817336921827,
            aqueousWasteProduced: 37366.45039554168,
          },
        },
        Industrial: {
          characterizationSamplingResults: {
            workDays: 253.4583071726209,
            onSiteDays: 1204.6716365475665,
            elementCost: 48303163,
          },
          sourceReductionResults: {
            workDays: 2.114736638159073,
            onSiteDays: 2.114736638159073,
            elementCost: 52452,
          },
          decontaminationResults: {
            workDays: 4.396249201008176,
            onSiteDays: 4.396249201008176,
            elementCost: 365496,
          },
          clearanceSamplingResults: {
            workDays: 0,
            onSiteDays: 0,
            elementCost: 0,
          },
          wasteSamplingResults: {
            workDays: 4.2014732771581995,
            onSiteDays: 18.933247120412705,
            elementCost: 154961,
          },
          incidentCommandResults: {
            onSiteDays: 1230.1158695071465,
            elementCost: 4770696,
          },
          generalResults: {
            totalCost: 53646768,
            areaContaminated: 5965.955060710495,
            decontaminationRounds: 1,
            solidWasteProduced: 12765.055356713132,
            aqueousWasteProduced: 15150.19257439777,
          },
        },
      },
      outdoorResults: {
        characterizationSamplingResults: {
          workDays: 528.972452127575,
          onSiteDays: 2793.138872271478,
          elementCost: 61170653,
        },
        sourceReductionResults: {
          workDays: 4.953388923049372,
          onSiteDays: 4.953388923049372,
          elementCost: 74067,
        },
        decontaminationResults: {
          workDays: 3.5314500421591686,
          onSiteDays: 3.5314500421591686,
          elementCost: 418794,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 6.314889265266353,
          onSiteDays: 14.380906879943833,
          elementCost: 185144,
        },
        incidentCommandResults: {
          onSiteDays: 2816.00461811663,
          elementCost: 9639877,
        },
        generalResults: {
          totalCost: 71488535,
          areaContaminated: 11848.157106863371,
          decontaminationRounds: 1,
          solidWasteProduced: 64938.75501431096,
          aqueousWasteProduced: 73459.74988506966,
        },
      },
      undergroundResults: {
        characterizationSamplingResults: {
          workDays: 232.57872076187846,
          onSiteDays: 1813.6413025379045,
          elementCost: 55101336,
        },
        sourceReductionResults: {
          workDays: 82.41964181342527,
          onSiteDays: 82.41964181342527,
          elementCost: 2370168,
        },
        decontaminationResults: {
          workDays: 3.966078446005955,
          onSiteDays: 3.966078446005955,
          elementCost: 760518,
        },
        clearanceSamplingResults: {
          workDays: 0,
          onSiteDays: 0,
          elementCost: 0,
        },
        wasteSamplingResults: {
          workDays: 32.811458821361605,
          onSiteDays: 70.98957808861744,
          elementCost: 1160875,
        },
        incidentCommandResults: {
          onSiteDays: 1971.016600885953,
          elementCost: 7561940,
        },
        generalResults: {
          totalCost: 66954837,
          areaContaminated: 17595.899032683184,
          decontaminationRounds: 1,
          solidWasteProduced: 106140.67373927304,
          aqueousWasteProduced: 88596.09094466305,
        },
      },
    },
    eventResults: {
      otherResults: {
        characterizationSamplingTravelCost: 78761583.91421513,
        sourceReductionTravelCost: 399794.7986478428,
        decontaminationTravelCost: 120075.44301714448,
        wasteSamplingTravelCost: 125050.38122126248,
        incidentCommandTravelCost: 3459476.6086332663,
        totalTravelCost: 82865981.14573464,
      },
      totalEventCost: 322697667.14573467,
      totalEventDuration: 7060.448490595457,
      totalContaminationArea: 42834.310831363444,
      totalSolidWasteProduced: 198106.3565092592,
      totalAqueousWasteProduced: 221025.84072024917,
    },
  },
];

export default mockResults;
