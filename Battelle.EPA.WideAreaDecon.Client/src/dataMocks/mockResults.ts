import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';

const mockResults: IJobResultRealization[] = [
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 16141.917158222986,
          onSiteDays: 569138.4717518653,
          phaseCost: 3059061858.137491,
        },
        sourceReductionResults: {
          workDays: 4875.149246445629,
          onSiteDays: 4875.149246445629,
          phaseCost: 1029585914.0974232,
        },
        decontaminationResults: {
          workDays: 11.771191413693874,
          onSiteDays: 12.718313727695103,
          phaseCost: 384087189.5948764,
        },
        incidentCommandResults: {
          onSiteDays: 574034.3393120386,
          phaseCost: 1412156389.7384233,
        },
        otherResults: {
          otherCosts: 146557593.93639752,
        },
        generalResults: {
          totalCost: 6031448945.504612,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 20527.915253329204,
          onSiteDays: 192765.02236438708,
          phaseCost: 7376874726.486568,
        },
        sourceReductionResults: {
          workDays: 1660.220505752507,
          onSiteDays: 1660.220505752507,
          phaseCost: 213820568.97733727,
        },
        decontaminationResults: {
          workDays: 18.921742556132784,
          onSiteDays: 21.06652286161355,
          phaseCost: 619687324.6141205,
        },
        incidentCommandResults: {
          onSiteDays: 194454.30939300123,
          phaseCost: 478756190.74525046,
        },
        otherResults: {
          otherCosts: 37207251.81979442,
        },
        generalResults: {
          totalCost: 8726346062.64307,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 89713.0757306974,
        onSiteDays: 751868.5211030453,
        phaseCost: 7027401989.88752,
      },
      sourceReductionResults: {
        workDays: 3647.341651090835,
        onSiteDays: 3647.341651090835,
        phaseCost: 305408165.4536191,
      },
      decontaminationResults: {
        workDays: 17.211815770299133,
        onSiteDays: 18.50897460303013,
        phaseCost: 788559422.612446,
      },
      incidentCommandResults: {
        onSiteDays: 755542.3717287392,
        phaseCost: 1855593107.346131,
      },
      otherResults: {
        otherCosts: 149718486.6846139,
      },
      generalResults: {
        totalCost: 10126681171.98433,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 32790.566397255505,
        onSiteDays: 853498.0580304752,
        phaseCost: 15050378443.470148,
      },
      sourceReductionResults: {
        workDays: 1494.1134485481855,
        onSiteDays: 1494.1134485481855,
        phaseCost: 269503607.99273,
      },
      decontaminationResults: {
        workDays: 20.632354453586125,
        onSiteDays: 21.805496022991253,
        phaseCost: 1949629542.5512223,
      },
      incidentCommandResults: {
        onSiteDays: 855021.9769750463,
        phaseCost: 2083235068.7876606,
      },
      otherResults: {
        otherCosts: 243802090.2581412,
      },
      generalResults: {
        totalCost: 19596548753.0599,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13762.986932894175,
          onSiteDays: 3755627.938597553,
          phaseCost: 5646446287.294773,
        },
        sourceReductionResults: {
          workDays: 5387.436140114176,
          onSiteDays: 5387.436140114176,
          phaseCost: 474900698.7589857,
        },
        decontaminationResults: {
          workDays: 25.54709619273131,
          onSiteDays: 26.4417321752854,
          phaseCost: 210612513.09016043,
        },
        incidentCommandResults: {
          onSiteDays: 3761049.816469842,
          phaseCost: 9286629692.46843,
        },
        otherResults: {
          otherCosts: 842229509.6065731,
        },
        generalResults: {
          totalCost: 16460818701.218922,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 25414.475099320687,
          onSiteDays: 174408.4195079516,
          phaseCost: 7011466945.926482,
        },
        sourceReductionResults: {
          workDays: 1012.3443634631591,
          onSiteDays: 1012.3443634631591,
          phaseCost: 131370941.62156846,
        },
        decontaminationResults: {
          workDays: 20.45087477039799,
          onSiteDays: 20.45314674043403,
          phaseCost: 720181282.095022,
        },
        incidentCommandResults: {
          onSiteDays: 175449.2170181552,
          phaseCost: 430436245.23651373,
        },
        otherResults: {
          otherCosts: 32362914.069478314,
        },
        generalResults: {
          totalCost: 8325818328.949065,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 16923.767874620004,
        onSiteDays: 595217.3855122256,
        phaseCost: 7160837890.863907,
      },
      sourceReductionResults: {
        workDays: 10462.405411035917,
        onSiteDays: 10462.405411035917,
        phaseCost: 2011343270.8015194,
      },
      decontaminationResults: {
        workDays: 18.888693774558767,
        onSiteDays: 21.40379555393099,
        phaseCost: 695185468.4505184,
      },
      incidentCommandResults: {
        onSiteDays: 605709.1947188154,
        phaseCost: 1486235303.2681599,
      },
      otherResults: {
        otherCosts: 147890907.62540695,
      },
      generalResults: {
        totalCost: 11501492841.00951,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 44681.306073893225,
        onSiteDays: 973932.8659483945,
        phaseCost: 8284460297.030462,
      },
      sourceReductionResults: {
        workDays: 666.9322704792278,
        onSiteDays: 666.9322704792278,
        phaseCost: 42392964.67682354,
      },
      decontaminationResults: {
        workDays: 19.66427016646235,
        onSiteDays: 22.29279945401773,
        phaseCost: 1111872539.7288766,
      },
      incidentCommandResults: {
        onSiteDays: 974630.0910183279,
        phaseCost: 2395503330.905257,
      },
      otherResults: {
        otherCosts: 202161759.29773262,
      },
      generalResults: {
        totalCost: 12036390891.639153,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 11276.304763691383,
          onSiteDays: 552643.7827714115,
          phaseCost: 2536755081.0059824,
        },
        sourceReductionResults: {
          workDays: 1958.7966252661101,
          onSiteDays: 1958.7966252661101,
          phaseCost: 533854019.6275643,
        },
        decontaminationResults: {
          workDays: 16.102545601805332,
          onSiteDays: 17.643416944575357,
          phaseCost: 745450897.129745,
        },
        incidentCommandResults: {
          onSiteDays: 554628.2228136221,
          phaseCost: 1346799986.5901122,
        },
        otherResults: {
          otherCosts: 142599873.75440416,
        },
        generalResults: {
          totalCost: 5305459858.107808,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 14504.820043068605,
          onSiteDays: 719194.2314673098,
          phaseCost: 3934470564.087094,
        },
        sourceReductionResults: {
          workDays: 784.7976914575779,
          onSiteDays: 784.7976914575779,
          phaseCost: 131073533.47256945,
        },
        decontaminationResults: {
          workDays: 20.985614736095446,
          onSiteDays: 22.634756608548283,
          phaseCost: 136088625.51090065,
        },
        incidentCommandResults: {
          onSiteDays: 720009.6639153758,
          phaseCost: 1741554311.0700088,
        },
        otherResults: {
          otherCosts: 243907777.77381718,
        },
        generalResults: {
          totalCost: 6187094811.91439,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 45182.151590842324,
        onSiteDays: 595850.2184880977,
        phaseCost: 11805381891.545483,
      },
      sourceReductionResults: {
        workDays: 5395.882075862224,
        onSiteDays: 5395.882075862224,
        phaseCost: 185418050.7437222,
      },
      decontaminationResults: {
        workDays: 12.848740899900147,
        onSiteDays: 15.153408015182569,
        phaseCost: 1263987046.3818433,
      },
      incidentCommandResults: {
        onSiteDays: 601269.2539719751,
        phaseCost: 1458756349.8149338,
      },
      otherResults: {
        otherCosts: 122054225.2743499,
      },
      generalResults: {
        totalCost: 14835597563.760332,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 27485.196580555785,
        onSiteDays: 223293.03373632734,
        phaseCost: 5231485880.542819,
      },
      sourceReductionResults: {
        workDays: 6221.374748961847,
        onSiteDays: 6221.374748961847,
        phaseCost: 2473549635.697039,
      },
      decontaminationResults: {
        workDays: 18.43142064507851,
        onSiteDays: 19.295233428314152,
        phaseCost: 1874391693.4169085,
      },
      incidentCommandResults: {
        onSiteDays: 229541.7037187175,
        phaseCost: 561246484.1561062,
      },
      otherResults: {
        otherCosts: 40347949.37707703,
      },
      generalResults: {
        totalCost: 10181021643.18995,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 57399.28062860494,
          onSiteDays: 432721.31904003187,
          phaseCost: 4365562775.261692,
        },
        sourceReductionResults: {
          workDays: 33856.33670478788,
          onSiteDays: 33856.33670478788,
          phaseCost: 1201383302.4301043,
        },
        decontaminationResults: {
          workDays: 18.94506524175989,
          onSiteDays: 20.412152834565415,
          phaseCost: 1038028488.9094949,
        },
        incidentCommandResults: {
          onSiteDays: 466606.0678976543,
          phaseCost: 1132640185.0135615,
        },
        otherResults: {
          otherCosts: 131562344.33035925,
        },
        generalResults: {
          totalCost: 7869177095.945212,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 21422.946520795802,
          onSiteDays: 2471121.3464182736,
          phaseCost: 2644622438.317362,
        },
        sourceReductionResults: {
          workDays: 9322.870368253793,
          onSiteDays: 9322.870368253793,
          phaseCost: 954588284.8486322,
        },
        decontaminationResults: {
          workDays: 19.766474933541957,
          onSiteDays: 20.38249524272571,
          phaseCost: 741078275.5839756,
        },
        incidentCommandResults: {
          onSiteDays: 2480472.59928177,
          phaseCost: 6052158578.610188,
        },
        otherResults: {
          otherCosts: 730254116.8289042,
        },
        generalResults: {
          totalCost: 11122701694.18906,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 16939.33856083369,
        onSiteDays: 584120.8603378704,
        phaseCost: 9075424078.02111,
      },
      sourceReductionResults: {
        workDays: 437.02426226244245,
        onSiteDays: 437.02426226244245,
        phaseCost: 24070626.58268649,
      },
      decontaminationResults: {
        workDays: 17.376630772225703,
        onSiteDays: 18.84728946370242,
        phaseCost: 1375107669.9560354,
      },
      incidentCommandResults: {
        onSiteDays: 584584.7318895966,
        phaseCost: 1430506753.3070478,
      },
      otherResults: {
        otherCosts: 112696778.35329862,
      },
      generalResults: {
        totalCost: 12017805906.22018,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 24284.801704827412,
        onSiteDays: 805696.8728880644,
        phaseCost: 8710116336.358171,
      },
      sourceReductionResults: {
        workDays: 13432.141136565355,
        onSiteDays: 13432.141136565355,
        phaseCost: 1852996765.0790277,
      },
      decontaminationResults: {
        workDays: 12.504500141251949,
        onSiteDays: 14.366962619444115,
        phaseCost: 364894474.26018804,
      },
      incidentCommandResults: {
        onSiteDays: 819151.3809872492,
        phaseCost: 2023064134.0288548,
      },
      otherResults: {
        otherCosts: 159809846.3264318,
      },
      generalResults: {
        totalCost: 13110881556.052671,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 23540.788066367168,
          onSiteDays: 390907.09402413946,
          phaseCost: 1906375258.0147786,
        },
        sourceReductionResults: {
          workDays: 4724.33676062238,
          onSiteDays: 4724.33676062238,
          phaseCost: 333895337.14174926,
        },
        decontaminationResults: {
          workDays: 18.981863244432457,
          onSiteDays: 19.327670310001743,
          phaseCost: 837776541.306188,
        },
        incidentCommandResults: {
          onSiteDays: 395658.75845507183,
          phaseCost: 979715414.6621639,
        },
        otherResults: {
          otherCosts: 91898312.64094917,
        },
        generalResults: {
          totalCost: 4149660863.765829,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 32268.605928189514,
          onSiteDays: 1102786.9375327781,
          phaseCost: 3859023713.3286543,
        },
        sourceReductionResults: {
          workDays: 962.8382357359809,
          onSiteDays: 962.8382357359809,
          phaseCost: 250919267.5347309,
        },
        decontaminationResults: {
          workDays: 13.521227592258068,
          onSiteDays: 14.251184277760606,
          phaseCost: 792081237.0558826,
        },
        incidentCommandResults: {
          onSiteDays: 1103772.0269527917,
          phaseCost: 2728112556.617655,
        },
        otherResults: {
          otherCosts: 372030334.8073932,
        },
        generalResults: {
          totalCost: 8002167109.344316,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 27779.812995236094,
        onSiteDays: 668097.6151904842,
        phaseCost: 3852840345.174975,
      },
      sourceReductionResults: {
        workDays: 7063.950055626324,
        onSiteDays: 7063.950055626324,
        phaseCost: 2723356196.6291304,
      },
      decontaminationResults: {
        workDays: 19.171604269224126,
        onSiteDays: 19.481433435455298,
        phaseCost: 372312079.40553844,
      },
      incidentCommandResults: {
        onSiteDays: 675189.046679546,
        phaseCost: 1660064100.3706822,
      },
      otherResults: {
        otherCosts: 189845478.43461052,
      },
      generalResults: {
        totalCost: 8798418200.014936,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 40451.02040270647,
        onSiteDays: 510634.2066911887,
        phaseCost: 6020893595.900778,
      },
      sourceReductionResults: {
        workDays: 25583.222055412145,
        onSiteDays: 25583.222055412145,
        phaseCost: 1083632878.8586895,
      },
      decontaminationResults: {
        workDays: 14.614354204529514,
        onSiteDays: 16.918815999505767,
        phaseCost: 2562299486.6813893,
      },
      incidentCommandResults: {
        onSiteDays: 536242.3475626004,
        phaseCost: 1306031435.450478,
      },
      otherResults: {
        otherCosts: 143572248.87925258,
      },
      generalResults: {
        totalCost: 11116429645.770588,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7516.372785417331,
          onSiteDays: 787788.3783925741,
          phaseCost: 1992732953.661839,
        },
        sourceReductionResults: {
          workDays: 6702.039955227314,
          onSiteDays: 6702.039955227314,
          phaseCost: 258921998.8125656,
        },
        decontaminationResults: {
          workDays: 19.890292323867392,
          onSiteDays: 22.48287057398885,
          phaseCost: 195496348.33404115,
        },
        incidentCommandResults: {
          onSiteDays: 794520.9012183754,
          phaseCost: 1950138139.3782673,
        },
        otherResults: {
          otherCosts: 137295698.4763682,
        },
        generalResults: {
          totalCost: 4534585138.663081,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 53236.53832664745,
          onSiteDays: 755199.2571448706,
          phaseCost: 3003460885.7298756,
        },
        sourceReductionResults: {
          workDays: 103.71906950307287,
          onSiteDays: 103.71906950307287,
          phaseCost: 10618607.725123905,
        },
        decontaminationResults: {
          workDays: 13.691696991140883,
          onSiteDays: 15.319944646749633,
          phaseCost: 733961157.4037312,
        },
        incidentCommandResults: {
          onSiteDays: 755326.2961590204,
          phaseCost: 1857625896.9729052,
        },
        otherResults: {
          otherCosts: 195933853.8394836,
        },
        generalResults: {
          totalCost: 5801600401.67112,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 25305.24351613397,
        onSiteDays: 3659826.236896927,
        phaseCost: 8753269894.9372,
      },
      sourceReductionResults: {
        workDays: 9967.888816663726,
        onSiteDays: 9967.888816663726,
        phaseCost: 663028323.6945028,
      },
      decontaminationResults: {
        workDays: 26.71775097276963,
        onSiteDays: 29.02410904830883,
        phaseCost: 1814076381.9560459,
      },
      incidentCommandResults: {
        onSiteDays: 3669831.149822639,
        phaseCost: 8991731843.374857,
      },
      otherResults: {
        otherCosts: 1105087584.2989259,
      },
      generalResults: {
        totalCost: 21327194028.26153,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 19709.62774483068,
        onSiteDays: 559577.1132038437,
        phaseCost: 7725756533.825666,
      },
      sourceReductionResults: {
        workDays: 1956.251565060885,
        onSiteDays: 1956.251565060885,
        phaseCost: 352744132.1090341,
      },
      decontaminationResults: {
        workDays: 17.357200911584588,
        onSiteDays: 18.588448217741316,
        phaseCost: 680585356.0771191,
      },
      incidentCommandResults: {
        onSiteDays: 561559.9532171224,
        phaseCost: 1372639194.6572871,
      },
      otherResults: {
        otherCosts: 125230566.86330059,
      },
      generalResults: {
        totalCost: 10256955783.532408,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 14942.307430294297,
          onSiteDays: 274998.6747126458,
          phaseCost: 2791635247.024715,
        },
        sourceReductionResults: {
          workDays: 8566.092169343343,
          onSiteDays: 8566.092169343343,
          phaseCost: 848136918.8123467,
        },
        decontaminationResults: {
          workDays: 18.416207991870166,
          onSiteDays: 18.52707034710959,
          phaseCost: 781934284.6273224,
        },
        incidentCommandResults: {
          onSiteDays: 283591.29395233624,
          phaseCost: 692444797.9498831,
        },
        otherResults: {
          otherCosts: 96349785.09886055,
        },
        generalResults: {
          totalCost: 5210501033.513128,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 46902.17904429314,
          onSiteDays: 2498702.163009246,
          phaseCost: 2535188627.5874915,
        },
        sourceReductionResults: {
          workDays: 3854.0952347463567,
          onSiteDays: 3854.0952347463567,
          phaseCost: 274959703.33268374,
        },
        decontaminationResults: {
          workDays: 24.508074984072728,
          onSiteDays: 27.505279801670763,
          phaseCost: 1134880890.6798656,
        },
        incidentCommandResults: {
          onSiteDays: 2502591.7635237942,
          phaseCost: 6095263879.91519,
        },
        otherResults: {
          otherCosts: 815567698.3742937,
        },
        generalResults: {
          totalCost: 10855860799.889524,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 34588.47550600687,
        onSiteDays: 5054522.119922648,
        phaseCost: 6450170967.590616,
      },
      sourceReductionResults: {
        workDays: 756.2950829797542,
        onSiteDays: 756.2950829797542,
        phaseCost: 128814512.19349411,
      },
      decontaminationResults: {
        workDays: 11.194535804957741,
        onSiteDays: 13.640600448856269,
        phaseCost: 160311310.54961538,
      },
      incidentCommandResults: {
        onSiteDays: 5055300.0556060765,
        phaseCost: 12265087844.035934,
      },
      otherResults: {
        otherCosts: 1092149343.1093273,
      },
      generalResults: {
        totalCost: 20096533977.47899,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 18809.530919155375,
        onSiteDays: 9468693.41111955,
        phaseCost: 8285672695.449821,
      },
      sourceReductionResults: {
        workDays: 9553.788240978965,
        onSiteDays: 9553.788240978965,
        phaseCost: 3937117294.5075145,
      },
      decontaminationResults: {
        workDays: 15.559306729482325,
        onSiteDays: 17.678157453350295,
        phaseCost: 2837902968.0223503,
      },
      incidentCommandResults: {
        onSiteDays: 9478272.877517981,
        phaseCost: 23133718438.63981,
      },
      otherResults: {
        otherCosts: 2561098534.2177835,
      },
      generalResults: {
        totalCost: 40755509930.83727,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 16984.764825000246,
          onSiteDays: 824076.612510225,
          phaseCost: 4265088906.26369,
        },
        sourceReductionResults: {
          workDays: 5005.932640871684,
          onSiteDays: 5005.932640871684,
          phaseCost: 522736868.01267105,
        },
        decontaminationResults: {
          workDays: 14.39808508297384,
          onSiteDays: 15.157475647087553,
          phaseCost: 829086460.8573514,
        },
        incidentCommandResults: {
          onSiteDays: 829105.7026267438,
          phaseCost: 2025392533.3903606,
        },
        otherResults: {
          otherCosts: 239841558.78645653,
        },
        generalResults: {
          totalCost: 7882146327.31053,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 40203.5357185055,
          onSiteDays: 1945262.6901361821,
          phaseCost: 3601750449.2610316,
        },
        sourceReductionResults: {
          workDays: 895.1672644438427,
          onSiteDays: 895.1672644438427,
          phaseCost: 124138351.39857191,
        },
        decontaminationResults: {
          workDays: 23.754808940867616,
          onSiteDays: 26.53213958151921,
          phaseCost: 922727479.5935922,
        },
        incidentCommandResults: {
          onSiteDays: 1946192.3895402076,
          phaseCost: 4712231267.494595,
        },
        otherResults: {
          otherCosts: 375983859.77146983,
        },
        generalResults: {
          totalCost: 9736831407.51926,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 26973.752751357497,
        onSiteDays: 1040160.3546370754,
        phaseCost: 11698771597.470627,
      },
      sourceReductionResults: {
        workDays: 709.8164278716719,
        onSiteDays: 709.8164278716719,
        phaseCost: 154571987.14528945,
      },
      decontaminationResults: {
        workDays: 13.6711487298997,
        onSiteDays: 15.023570789961045,
        phaseCost: 1283240143.1427355,
      },
      incidentCommandResults: {
        onSiteDays: 1040893.1946357371,
        phaseCost: 2562173750.919465,
      },
      otherResults: {
        otherCosts: 345132542.7286559,
      },
      generalResults: {
        totalCost: 16043890021.406773,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 68823.04106922721,
        onSiteDays: 573249.6787729808,
        phaseCost: 6524778210.185955,
      },
      sourceReductionResults: {
        workDays: 1738.5215517186368,
        onSiteDays: 1738.5215517186368,
        phaseCost: 491947564.33329403,
      },
      decontaminationResults: {
        workDays: 16.32830868110254,
        onSiteDays: 16.50976579205826,
        phaseCost: 564109598.7640501,
      },
      incidentCommandResults: {
        onSiteDays: 575012.7100904915,
        phaseCost: 1419439016.7567883,
      },
      otherResults: {
        otherCosts: 191997391.49205104,
      },
      generalResults: {
        totalCost: 9192271781.532139,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 27898.824140784633,
          onSiteDays: 22473221.259506546,
          phaseCost: 2483396511.54388,
        },
        sourceReductionResults: {
          workDays: 1173.725701199215,
          onSiteDays: 1173.725701199215,
          phaseCost: 181727216.6183748,
        },
        decontaminationResults: {
          workDays: 18.767831285430077,
          onSiteDays: 19.251537621079834,
          phaseCost: 1137532893.8001225,
        },
        incidentCommandResults: {
          onSiteDays: 22474422.236745365,
          phaseCost: 55113480833.305405,
        },
        otherResults: {
          otherCosts: 4554750142.934851,
        },
        generalResults: {
          totalCost: 63470887598.20264,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 26889.218143543116,
          onSiteDays: 1203533.975740642,
          phaseCost: 4977437299.613674,
        },
        sourceReductionResults: {
          workDays: 2462.865242419295,
          onSiteDays: 2462.865242419295,
          phaseCost: 223649535.30664003,
        },
        decontaminationResults: {
          workDays: 20.51946837769809,
          onSiteDays: 22.93513899038898,
          phaseCost: 232035624.9649248,
        },
        incidentCommandResults: {
          onSiteDays: 1206027.7761220518,
          phaseCost: 2979881757.9386053,
        },
        otherResults: {
          otherCosts: 251145462.98999932,
        },
        generalResults: {
          totalCost: 8664149680.813843,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 16632.27714292233,
        onSiteDays: 7909836.703766817,
        phaseCost: 6335882742.482963,
      },
      sourceReductionResults: {
        workDays: 4508.094239566747,
        onSiteDays: 4508.094239566747,
        phaseCost: 160139861.9863664,
      },
      decontaminationResults: {
        workDays: 18.06626183936984,
        onSiteDays: 18.754774257017946,
        phaseCost: 1783155276.711582,
      },
      incidentCommandResults: {
        onSiteDays: 7914371.55278064,
        phaseCost: 19210466118.888252,
      },
      otherResults: {
        otherCosts: 2095863472.759211,
      },
      generalResults: {
        totalCost: 29585507472.828377,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 90487.17435759235,
        onSiteDays: 1172678.1421833942,
        phaseCost: 7233075465.845415,
      },
      sourceReductionResults: {
        workDays: 19342.793185999653,
        onSiteDays: 19342.793185999653,
        phaseCost: 1028311216.1068363,
      },
      decontaminationResults: {
        workDays: 20.435420258072067,
        onSiteDays: 23.299353729537536,
        phaseCost: 1311258343.4868755,
      },
      incidentCommandResults: {
        onSiteDays: 1192052.2347231233,
        phaseCost: 2925219968.401292,
      },
      otherResults: {
        otherCosts: 244003752.05721295,
      },
      generalResults: {
        totalCost: 12741868745.897633,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 5712.74387062015,
          onSiteDays: 73324.27941353763,
          phaseCost: 2497186892.3348613,
        },
        sourceReductionResults: {
          workDays: 2863.2695790024695,
          onSiteDays: 2863.2695790024695,
          phaseCost: 239488174.30886865,
        },
        decontaminationResults: {
          workDays: 19.97825881395914,
          onSiteDays: 20.934749177409046,
          phaseCost: 1287351815.0765455,
        },
        incidentCommandResults: {
          onSiteDays: 76216.48374171751,
          phaseCost: 187900138.67148048,
        },
        otherResults: {
          otherCosts: 23351718.248624384,
        },
        generalResults: {
          totalCost: 4235278738.640381,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 9343.121161693049,
          onSiteDays: 57379.82257103731,
          phaseCost: 964524412.0059315,
        },
        sourceReductionResults: {
          workDays: 1827.9694229700835,
          onSiteDays: 1827.9694229700835,
          phaseCost: 438310658.6972523,
        },
        decontaminationResults: {
          workDays: 9.68974843893427,
          onSiteDays: 9.89580678145769,
          phaseCost: 473445766.1968081,
        },
        incidentCommandResults: {
          onSiteDays: 59225.68780078885,
          phaseCost: 144870274.22832584,
        },
        otherResults: {
          otherCosts: 13640442.945621273,
        },
        generalResults: {
          totalCost: 2034791554.0739388,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 31654.19826553626,
        onSiteDays: 1959206.4255452217,
        phaseCost: 6986229103.780045,
      },
      sourceReductionResults: {
        workDays: 7234.925193560402,
        onSiteDays: 7234.925193560402,
        phaseCost: 2023254894.572406,
      },
      decontaminationResults: {
        workDays: 17.885535651325608,
        onSiteDays: 18.890946118135695,
        phaseCost: 962511959.0415202,
      },
      incidentCommandResults: {
        onSiteDays: 1966468.2416849001,
        phaseCost: 4766125420.37066,
      },
      otherResults: {
        otherCosts: 514819786.46126807,
      },
      generalResults: {
        totalCost: 15252941164.2259,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 19473.87171540162,
        onSiteDays: 1215840.647378229,
        phaseCost: 2205642667.405427,
      },
      sourceReductionResults: {
        workDays: 3681.930627212762,
        onSiteDays: 3681.930627212762,
        phaseCost: 761910854.113728,
      },
      decontaminationResults: {
        workDays: 19.596429143705507,
        onSiteDays: 20.977375488024528,
        phaseCost: 2519502400.404661,
      },
      incidentCommandResults: {
        onSiteDays: 1219551.55538093,
        phaseCost: 2974945930.449325,
      },
      otherResults: {
        otherCosts: 296031807.88740057,
      },
      generalResults: {
        totalCost: 8758033660.260542,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 10284.597975860303,
          onSiteDays: 304923.5888846937,
          phaseCost: 1383449969.7154944,
        },
        sourceReductionResults: {
          workDays: 15765.219695284868,
          onSiteDays: 15765.219695284868,
          phaseCost: 953795664.5904112,
        },
        decontaminationResults: {
          workDays: 20.19810244934589,
          onSiteDays: 20.586522387710055,
          phaseCost: 419247542.02741146,
        },
        incidentCommandResults: {
          onSiteDays: 320717.3951023662,
          phaseCost: 790816904.4509401,
        },
        otherResults: {
          otherCosts: 55309875.09831681,
        },
        generalResults: {
          totalCost: 3602619955.8825736,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 26160.061364090434,
          onSiteDays: 296628.43206194165,
          phaseCost: 4784466701.562843,
        },
        sourceReductionResults: {
          workDays: 3250.929810740309,
          onSiteDays: 3250.929810740309,
          phaseCost: 505828544.0653839,
        },
        decontaminationResults: {
          workDays: 18.086455506525574,
          onSiteDays: 20.88775482934149,
          phaseCost: 390163269.1412057,
        },
        incidentCommandResults: {
          onSiteDays: 299908.2496275113,
          phaseCost: 738445375.1259809,
        },
        otherResults: {
          otherCosts: 100714094.52679265,
        },
        generalResults: {
          totalCost: 6519617984.422207,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 17096.02341146718,
        onSiteDays: 24602792.23472349,
        phaseCost: 10173422435.659369,
      },
      sourceReductionResults: {
        workDays: 3343.0290125332745,
        onSiteDays: 3343.0290125332745,
        phaseCost: 197958227.95576262,
      },
      decontaminationResults: {
        workDays: 18.657291861171203,
        onSiteDays: 19.182956847404817,
        phaseCost: 2210496658.520091,
      },
      incidentCommandResults: {
        onSiteDays: 24606162.446692873,
        phaseCost: 59935431079.752365,
      },
      otherResults: {
        otherCosts: 6935885475.597878,
      },
      generalResults: {
        totalCost: 79453193877.48547,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 22714.37480566499,
        onSiteDays: 614518.1449325803,
        phaseCost: 8334655412.230993,
      },
      sourceReductionResults: {
        workDays: 2199.1479258631794,
        onSiteDays: 2199.1479258631794,
        phaseCost: 292709802.3589786,
      },
      decontaminationResults: {
        workDays: 13.349142968968755,
        onSiteDays: 16.199587263446205,
        phaseCost: 2778157802.8921967,
      },
      incidentCommandResults: {
        onSiteDays: 616741.4924457069,
        phaseCost: 1526032149.986557,
      },
      otherResults: {
        otherCosts: 206499640.66392368,
      },
      generalResults: {
        totalCost: 13138054808.132648,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 57235.20180585416,
          onSiteDays: 295910.0481268086,
          phaseCost: 3886771691.8179116,
        },
        sourceReductionResults: {
          workDays: 1176.2379624983582,
          onSiteDays: 1176.2379624983582,
          phaseCost: 168479566.63256085,
        },
        decontaminationResults: {
          workDays: 18.662468059375527,
          onSiteDays: 19.023750729165915,
          phaseCost: 1398062630.074217,
        },
        incidentCommandResults: {
          onSiteDays: 297113.3098400361,
          phaseCost: 722993421.0168917,
        },
        otherResults: {
          otherCosts: 64354343.99805062,
        },
        generalResults: {
          totalCost: 6240661653.539632,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 3345.2040163979996,
          onSiteDays: 158365.4219621572,
          phaseCost: 1467366684.306637,
        },
        sourceReductionResults: {
          workDays: 486.59833106160926,
          onSiteDays: 486.59833106160926,
          phaseCost: 43718667.06364013,
        },
        decontaminationResults: {
          workDays: 13.342999398788205,
          onSiteDays: 13.43632430011321,
          phaseCost: 865485059.0842081,
        },
        incidentCommandResults: {
          onSiteDays: 158873.4566175189,
          phaseCost: 388226493.5403383,
        },
        otherResults: {
          otherCosts: 36062285.74845457,
        },
        generalResults: {
          totalCost: 2800859189.743278,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 79319.20206531032,
        onSiteDays: 3869235.7561347685,
        phaseCost: 8164195553.094785,
      },
      sourceReductionResults: {
        workDays: 558.2363508613776,
        onSiteDays: 558.2363508613776,
        phaseCost: 32089068.17617024,
      },
      decontaminationResults: {
        workDays: 20.532851465403297,
        onSiteDays: 21.466873792341644,
        phaseCost: 282930652.7419462,
      },
      incidentCommandResults: {
        onSiteDays: 3869823.4593594223,
        phaseCost: 9597217224.399532,
      },
      otherResults: {
        otherCosts: 1020941388.6592926,
      },
      generalResults: {
        totalCost: 19097373887.071728,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 47277.93356272161,
        onSiteDays: 2436708.3783736746,
        phaseCost: 10201457257.126663,
      },
      sourceReductionResults: {
        workDays: 3012.193663258142,
        onSiteDays: 3012.193663258142,
        phaseCost: 772639656.1277919,
      },
      decontaminationResults: {
        workDays: 14.158864556383078,
        onSiteDays: 15.841538569154576,
        phaseCost: 2006576366.8615897,
      },
      incidentCommandResults: {
        onSiteDays: 2439744.4135755016,
        phaseCost: 5966419414.885132,
      },
      otherResults: {
        otherCosts: 504316599.6971841,
      },
      generalResults: {
        totalCost: 19451409294.69836,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 61891.58599381613,
          onSiteDays: 280457.70200767316,
          phaseCost: 3896010622.810022,
        },
        sourceReductionResults: {
          workDays: 1261.3529913766668,
          onSiteDays: 1261.3529913766668,
          phaseCost: 291892736.4385668,
        },
        decontaminationResults: {
          workDays: 26.395454722083045,
          onSiteDays: 29.32345380920997,
          phaseCost: 190977984.6832876,
        },
        incidentCommandResults: {
          onSiteDays: 281756.378452859,
          phaseCost: 697109785.6374818,
        },
        otherResults: {
          otherCosts: 57461691.67125012,
        },
        generalResults: {
          totalCost: 5133452821.240608,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 24668.02342704364,
          onSiteDays: 1226936.6175873352,
          phaseCost: 2495590760.5097723,
        },
        sourceReductionResults: {
          workDays: 1294.684989900056,
          onSiteDays: 1294.684989900056,
          phaseCost: 285336483.81235754,
        },
        decontaminationResults: {
          workDays: 19.59019064218509,
          onSiteDays: 21.303240197082804,
          phaseCost: 1259292233.7224514,
        },
        incidentCommandResults: {
          onSiteDays: 1228260.6058174323,
          phaseCost: 3014970684.5300426,
        },
        otherResults: {
          otherCosts: 417112174.072794,
        },
        generalResults: {
          totalCost: 7472302336.647418,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 72362.27263045931,
        onSiteDays: 654181.6884493787,
        phaseCost: 4272958887.6540756,
      },
      sourceReductionResults: {
        workDays: 4877.920161701981,
        onSiteDays: 4877.920161701981,
        phaseCost: 730264586.0835532,
      },
      decontaminationResults: {
        workDays: 16.58931159055543,
        onSiteDays: 18.950943511200823,
        phaseCost: 1137041920.8209903,
      },
      incidentCommandResults: {
        onSiteDays: 659086.5595545919,
        phaseCost: 1634073666.0323272,
      },
      otherResults: {
        otherCosts: 202047076.20600367,
      },
      generalResults: {
        totalCost: 7976386136.796949,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 25805.93657096167,
        onSiteDays: 2012891.3634414172,
        phaseCost: 7246842672.577787,
      },
      sourceReductionResults: {
        workDays: 20148.684926886657,
        onSiteDays: 20148.684926886657,
        phaseCost: 2966422832.1399055,
      },
      decontaminationResults: {
        workDays: 18.47477530489554,
        onSiteDays: 20.88556658893022,
        phaseCost: 1312781393.6635451,
      },
      incidentCommandResults: {
        onSiteDays: 2033068.9339348928,
        phaseCost: 5004708316.938278,
      },
      otherResults: {
        otherCosts: 537458240.7419789,
      },
      generalResults: {
        totalCost: 17068213456.061497,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 24336.10263870206,
          onSiteDays: 230078.64817314496,
          phaseCost: 6621543925.964462,
        },
        sourceReductionResults: {
          workDays: 4067.6276840910455,
          onSiteDays: 4067.6276840910455,
          phaseCost: 1269653190.9758873,
        },
        decontaminationResults: {
          workDays: 14.757206557029209,
          onSiteDays: 16.948819202824687,
          phaseCost: 83161425.9662324,
        },
        incidentCommandResults: {
          onSiteDays: 234171.22467643884,
          phaseCost: 569098991.3727559,
        },
        otherResults: {
          otherCosts: 74383613.07705586,
        },
        generalResults: {
          totalCost: 8617841147.356394,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 31347.369266286612,
          onSiteDays: 411142.56209179194,
          phaseCost: 4402934938.560299,
        },
        sourceReductionResults: {
          workDays: 276.2400646866479,
          onSiteDays: 276.2400646866479,
          phaseCost: 22107945.745019957,
        },
        decontaminationResults: {
          workDays: 13.862246480738335,
          onSiteDays: 16.74508391547601,
          phaseCost: 978516269.2378832,
        },
        incidentCommandResults: {
          onSiteDays: 411443.54724039405,
          phaseCost: 1012126133.8536842,
        },
        otherResults: {
          otherCosts: 88218943.25286658,
        },
        generalResults: {
          totalCost: 6503904230.649754,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 97154.79412268169,
        onSiteDays: 7839481.179796838,
        phaseCost: 6714822940.233246,
      },
      sourceReductionResults: {
        workDays: 10670.655179467354,
        onSiteDays: 10670.655179467354,
        phaseCost: 2132798131.7200565,
      },
      decontaminationResults: {
        workDays: 23.507093763329806,
        onSiteDays: 26.274835667404073,
        phaseCost: 142264525.42955387,
      },
      incidentCommandResults: {
        onSiteDays: 7850186.109811973,
        phaseCost: 19082485531.69664,
      },
      otherResults: {
        otherCosts: 1408745489.4684308,
      },
      generalResults: {
        totalCost: 29481116618.547928,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 149333.28317227282,
        onSiteDays: 574669.0565123217,
        phaseCost: 5164694550.682345,
      },
      sourceReductionResults: {
        workDays: 4022.9154107239124,
        onSiteDays: 4022.9154107239124,
        phaseCost: 511510149.6296309,
      },
      decontaminationResults: {
        workDays: 12.158376621817792,
        onSiteDays: 14.647829083178152,
        phaseCost: 2857882039.718291,
      },
      incidentCommandResults: {
        onSiteDays: 578714.6197521287,
        phaseCost: 1435023816.8533354,
      },
      otherResults: {
        otherCosts: 131797791.22997253,
      },
      generalResults: {
        totalCost: 10100908348.113575,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 12429.85240843781,
          onSiteDays: 129021.07508869794,
          phaseCost: 1719093403.8524003,
        },
        sourceReductionResults: {
          workDays: 385.15570162485324,
          onSiteDays: 385.15570162485324,
          phaseCost: 134974220.87271208,
        },
        decontaminationResults: {
          workDays: 21.33107292659838,
          onSiteDays: 24.145547603058052,
          phaseCost: 235891440.79767534,
        },
        incidentCommandResults: {
          onSiteDays: 129438.37633792585,
          phaseCost: 313795886.24743086,
        },
        otherResults: {
          otherCosts: 31778317.815295696,
        },
        generalResults: {
          totalCost: 2435533269.5855145,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 7996.698441416669,
          onSiteDays: 165523.79867190678,
          phaseCost: 3429517758.229191,
        },
        sourceReductionResults: {
          workDays: 712.6160807223563,
          onSiteDays: 712.6160807223563,
          phaseCost: 167153364.20972604,
        },
        decontaminationResults: {
          workDays: 19.921085279183714,
          onSiteDays: 20.92821734490064,
          phaseCost: 1335309283.4783504,
        },
        incidentCommandResults: {
          onSiteDays: 166265.34296997404,
          phaseCost: 405473473.7950787,
        },
        otherResults: {
          otherCosts: 48987047.902599,
        },
        generalResults: {
          totalCost: 5386440927.614944,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 10518.62891312322,
        onSiteDays: 1470862.6499158447,
        phaseCost: 4724828065.813339,
      },
      sourceReductionResults: {
        workDays: 3201.0040620723203,
        onSiteDays: 3201.0040620723203,
        phaseCost: 685450761.881996,
      },
      decontaminationResults: {
        workDays: 21.26344871573696,
        onSiteDays: 21.84791494669577,
        phaseCost: 440540122.2029097,
      },
      incidentCommandResults: {
        onSiteDays: 1474093.5018928638,
        phaseCost: 3623463958.532964,
      },
      otherResults: {
        otherCosts: 437881323.7770061,
      },
      generalResults: {
        totalCost: 9912164232.208216,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 43808.10429562947,
        onSiteDays: 372641.9415378445,
        phaseCost: 4634356787.56496,
      },
      sourceReductionResults: {
        workDays: 2492.663931791236,
        onSiteDays: 2492.663931791236,
        phaseCost: 301157963.0907289,
      },
      decontaminationResults: {
        workDays: 18.91874246995867,
        onSiteDays: 20.697120256884286,
        phaseCost: 1454961649.4972103,
      },
      incidentCommandResults: {
        onSiteDays: 375163.30258989264,
        phaseCost: 907847957.3949387,
      },
      otherResults: {
        otherCosts: 123489142.8233773,
      },
      generalResults: {
        totalCost: 7421813500.371215,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 18326.877667091667,
          onSiteDays: 464820.7630542783,
          phaseCost: 3712048654.2255044,
        },
        sourceReductionResults: {
          workDays: 1245.8994522557007,
          onSiteDays: 1245.8994522557007,
          phaseCost: 53310360.00838567,
        },
        decontaminationResults: {
          workDays: 19.874672678037236,
          onSiteDays: 22.618348161368246,
          phaseCost: 967552888.3296975,
        },
        incidentCommandResults: {
          onSiteDays: 466097.2808546953,
          phaseCost: 1155055771.7457871,
        },
        otherResults: {
          otherCosts: 90098360.91774143,
        },
        generalResults: {
          totalCost: 5978066035.227116,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 18907.712191953888,
          onSiteDays: 1204506.3031821072,
          phaseCost: 7004521939.894987,
        },
        sourceReductionResults: {
          workDays: 1598.1994412041247,
          onSiteDays: 1598.1994412041247,
          phaseCost: 344285327.7006067,
        },
        decontaminationResults: {
          workDays: 21.533003207420236,
          onSiteDays: 21.82694272995623,
          phaseCost: 935732565.386552,
        },
        incidentCommandResults: {
          onSiteDays: 1206134.3295660412,
          phaseCost: 2922329149.331971,
        },
        otherResults: {
          otherCosts: 222611186.9436624,
        },
        generalResults: {
          totalCost: 11429480169.25778,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 28557.90979570139,
        onSiteDays: 781362.0874415304,
        phaseCost: 11314739637.28413,
      },
      sourceReductionResults: {
        workDays: 4651.503163802969,
        onSiteDays: 4651.503163802969,
        phaseCost: 813910784.1389247,
      },
      decontaminationResults: {
        workDays: 24.24496847350266,
        onSiteDays: 25.97559296409031,
        phaseCost: 1500021741.3860643,
      },
      incidentCommandResults: {
        onSiteDays: 786047.5661982975,
        phaseCost: 1908754650.4516838,
      },
      otherResults: {
        otherCosts: 186812501.33218104,
      },
      generalResults: {
        totalCost: 15724239314.592985,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 20912.14803790417,
        onSiteDays: 317809.4943472754,
        phaseCost: 2477755240.202176,
      },
      sourceReductionResults: {
        workDays: 3457.3138102106395,
        onSiteDays: 3457.3138102106395,
        phaseCost: 161003361.9487353,
      },
      decontaminationResults: {
        workDays: 17.841273660734593,
        onSiteDays: 17.94364227935291,
        phaseCost: 595045381.1895838,
      },
      incidentCommandResults: {
        onSiteDays: 321292.7517997654,
        phaseCost: 778645211.8491199,
      },
      otherResults: {
        otherCosts: 59188830.57890869,
      },
      generalResults: {
        totalCost: 4071638025.768524,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13488.746914714273,
          onSiteDays: 1072043.0492494071,
          phaseCost: 6273239793.207618,
        },
        sourceReductionResults: {
          workDays: 6203.638123027605,
          onSiteDays: 6203.638123027605,
          phaseCost: 178015297.1931659,
        },
        decontaminationResults: {
          workDays: 25.323678120347594,
          onSiteDays: 27.332311934636046,
          phaseCost: 536691496.25894815,
        },
        incidentCommandResults: {
          onSiteDays: 1078282.0196843692,
          phaseCost: 2620872411.5394006,
        },
        otherResults: {
          otherCosts: 287285856.71604115,
        },
        generalResults: {
          totalCost: 9896104854.915174,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 19770.093764659792,
          onSiteDays: 823157.4867495208,
          phaseCost: 4337511696.27241,
        },
        sourceReductionResults: {
          workDays: 2845.394466092426,
          onSiteDays: 2845.394466092426,
          phaseCost: 577272402.7504001,
        },
        decontaminationResults: {
          workDays: 14.711712508628079,
          onSiteDays: 17.69705841403852,
          phaseCost: 167716949.132159,
        },
        incidentCommandResults: {
          onSiteDays: 826028.5782740272,
          phaseCost: 2002628816.727345,
        },
        otherResults: {
          otherCosts: 149951586.64796764,
        },
        generalResults: {
          totalCost: 7235081451.530282,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 47255.849892638915,
        onSiteDays: 499847.5993136681,
        phaseCost: 2689853272.8312817,
      },
      sourceReductionResults: {
        workDays: 2331.9392871832893,
        onSiteDays: 2331.9392871832893,
        phaseCost: 439766483.7118459,
      },
      decontaminationResults: {
        workDays: 20.52795397013611,
        onSiteDays: 22.981471541100525,
        phaseCost: 304826031.4679391,
      },
      incidentCommandResults: {
        onSiteDays: 502210.5200723925,
        phaseCost: 1221479270.9056597,
      },
      otherResults: {
        otherCosts: 158869418.92445996,
      },
      generalResults: {
        totalCost: 4814794477.841187,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 31745.614641585933,
        onSiteDays: 2776069.176319923,
        phaseCost: 11770019655.208998,
      },
      sourceReductionResults: {
        workDays: 12097.10329385044,
        onSiteDays: 12097.10329385044,
        phaseCost: 1534884847.9974067,
      },
      decontaminationResults: {
        workDays: 21.21439669938162,
        onSiteDays: 22.68509386588938,
        phaseCost: 1613944871.7586968,
      },
      incidentCommandResults: {
        onSiteDays: 2788196.964707639,
        phaseCost: 6821573453.011058,
      },
      otherResults: {
        otherCosts: 503840872.1090002,
      },
      generalResults: {
        totalCost: 22244263700.08516,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13059.091418934113,
          onSiteDays: 161001.29926831785,
          phaseCost: 4920276687.793918,
        },
        sourceReductionResults: {
          workDays: 4867.246456595155,
          onSiteDays: 4867.246456595155,
          phaseCost: 1133026882.9650035,
        },
        decontaminationResults: {
          workDays: 20.44839792266684,
          onSiteDays: 21.07284812211824,
          phaseCost: 962737204.9437588,
        },
        incidentCommandResults: {
          onSiteDays: 165897.61857303514,
          phaseCost: 410184389.0606394,
        },
        otherResults: {
          otherCosts: 49968260.08605231,
        },
        generalResults: {
          totalCost: 7476193424.849371,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 13145.625148603429,
          onSiteDays: 551825.9805939851,
          phaseCost: 2862938004.9075556,
        },
        sourceReductionResults: {
          workDays: 845.2150319453548,
          onSiteDays: 845.2150319453548,
          phaseCost: 172991643.60401934,
        },
        decontaminationResults: {
          workDays: 23.442465304732895,
          onSiteDays: 26.352142211597446,
          phaseCost: 380646603.44528955,
        },
        incidentCommandResults: {
          onSiteDays: 552705.5477681421,
          phaseCost: 1352363747.91285,
        },
        otherResults: {
          otherCosts: 165840796.16808707,
        },
        generalResults: {
          totalCost: 4934780796.037802,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 24228.046510646032,
        onSiteDays: 770643.3849504143,
        phaseCost: 9016852413.193892,
      },
      sourceReductionResults: {
        workDays: 12492.659525841424,
        onSiteDays: 12492.659525841424,
        phaseCost: 1718647202.9268084,
      },
      decontaminationResults: {
        workDays: 11.272150171052699,
        onSiteDays: 11.395701438280684,
        phaseCost: 791026190.2983438,
      },
      incidentCommandResults: {
        onSiteDays: 783155.4401776941,
        phaseCost: 1896033953.40029,
      },
      otherResults: {
        otherCosts: 218279109.19696632,
      },
      generalResults: {
        totalCost: 13640838869.0163,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 62616.31733028889,
        onSiteDays: 106302875.60106118,
        phaseCost: 11644391217.347147,
      },
      sourceReductionResults: {
        workDays: 14674.037153846757,
        onSiteDays: 14674.037153846757,
        phaseCost: 3408980730.3824034,
      },
      decontaminationResults: {
        workDays: 19.015297857116746,
        onSiteDays: 20.621762116351576,
        phaseCost: 1770194573.5114665,
      },
      incidentCommandResults: {
        onSiteDays: 106317578.25997713,
        phaseCost: 263489994885.7317,
      },
      otherResults: {
        otherCosts: 29280771616.420094,
      },
      generalResults: {
        totalCost: 309594333023.3928,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 19153.43593863909,
          onSiteDays: 238192.70602578475,
          phaseCost: 3440473746.3303595,
        },
        sourceReductionResults: {
          workDays: 2357.9710817091827,
          onSiteDays: 2357.9710817091827,
          phaseCost: 228795670.1758576,
        },
        decontaminationResults: {
          workDays: 18.422171204682016,
          onSiteDays: 18.58482039570455,
          phaseCost: 699445397.3217568,
        },
        incidentCommandResults: {
          onSiteDays: 240577.26192788963,
          phaseCost: 582473793.4696229,
        },
        otherResults: {
          otherCosts: 46399475.40342701,
        },
        generalResults: {
          totalCost: 4997588082.701024,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 4213.748157500614,
          onSiteDays: 40031.86616271053,
          phaseCost: 870397024.6853154,
        },
        sourceReductionResults: {
          workDays: 3662.6818860841627,
          onSiteDays: 3662.6818860841627,
          phaseCost: 1097257732.3223727,
        },
        decontaminationResults: {
          workDays: 15.091697099407133,
          onSiteDays: 15.515720761966827,
          phaseCost: 286397249.24901277,
        },
        incidentCommandResults: {
          onSiteDays: 43718.06376955666,
          phaseCost: 107655921.96107244,
        },
        otherResults: {
          otherCosts: 10619901.945307085,
        },
        generalResults: {
          totalCost: 2372327830.1630807,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 46168.70201347866,
        onSiteDays: 254334.05219438882,
        phaseCost: 6525927120.205664,
      },
      sourceReductionResults: {
        workDays: 2540.7746661216765,
        onSiteDays: 2540.7746661216765,
        phaseCost: 143795577.81367046,
      },
      decontaminationResults: {
        workDays: 13.898415140551148,
        onSiteDays: 16.058305108234826,
        phaseCost: 1214290760.8587737,
      },
      incidentCommandResults: {
        onSiteDays: 256898.8851656187,
        phaseCost: 624634181.1547215,
      },
      otherResults: {
        otherCosts: 81857499.83355355,
      },
      generalResults: {
        totalCost: 8590505139.866383,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 123578.00884293667,
        onSiteDays: 697658.2384619936,
        phaseCost: 4787247265.432197,
      },
      sourceReductionResults: {
        workDays: 28839.226296829493,
        onSiteDays: 28839.226296829493,
        phaseCost: 1290343688.8809066,
      },
      decontaminationResults: {
        workDays: 15.057158508118512,
        onSiteDays: 17.200556092942264,
        phaseCost: 2947784016.131328,
      },
      incidentCommandResults: {
        onSiteDays: 726522.665314916,
        phaseCost: 1769849874.566381,
      },
      otherResults: {
        otherCosts: 226362082.07775223,
      },
      generalResults: {
        totalCost: 11021586927.088566,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 15721.230256874265,
          onSiteDays: 961984.2344286011,
          phaseCost: 6986688032.856897,
        },
        sourceReductionResults: {
          workDays: 3922.9709688272847,
          onSiteDays: 3922.9709688272847,
          phaseCost: 290859681.43591386,
        },
        decontaminationResults: {
          workDays: 24.857077802265312,
          onSiteDays: 26.487334885049457,
          phaseCost: 637153735.025527,
        },
        incidentCommandResults: {
          onSiteDays: 965941.6927323134,
          phaseCost: 2368909511.7888145,
        },
        otherResults: {
          otherCosts: 242358240.8923227,
        },
        generalResults: {
          totalCost: 10525969201.999475,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 5906.045378519704,
          onSiteDays: 87037.23941071621,
          phaseCost: 1727104986.8903832,
        },
        sourceReductionResults: {
          workDays: 3257.6174427273413,
          onSiteDays: 3257.6174427273413,
          phaseCost: 671446727.2300377,
        },
        decontaminationResults: {
          workDays: 17.44190670397177,
          onSiteDays: 18.614583969026476,
          phaseCost: 1167862069.4437504,
        },
        incidentCommandResults: {
          onSiteDays: 90321.47143741258,
          phaseCost: 219987173.58877864,
        },
        otherResults: {
          otherCosts: 30138105.594856787,
        },
        generalResults: {
          totalCost: 3816539062.7478065,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 57351.02205574829,
        onSiteDays: 806663.4283057131,
        phaseCost: 4123901915.755657,
      },
      sourceReductionResults: {
        workDays: 3306.7974652404037,
        onSiteDays: 3306.7974652404037,
        phaseCost: 759869663.6361475,
      },
      decontaminationResults: {
        workDays: 18.083260902223003,
        onSiteDays: 18.652580752655066,
        phaseCost: 2063151482.2743394,
      },
      incidentCommandResults: {
        onSiteDays: 809996.8783517061,
        phaseCost: 1962176634.791367,
      },
      otherResults: {
        otherCosts: 208296849.55559996,
      },
      generalResults: {
        totalCost: 9117396546.013111,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 43514.49637340627,
        onSiteDays: 1833479.7882007684,
        phaseCost: 14336997163.129736,
      },
      sourceReductionResults: {
        workDays: 5.011783468727503,
        onSiteDays: 5.011783468727503,
        phaseCost: 131538.5256045994,
      },
      decontaminationResults: {
        workDays: 19.80372922141192,
        onSiteDays: 20.04636581219881,
        phaseCost: 3201325660.0759554,
      },
      incidentCommandResults: {
        onSiteDays: 1833512.8463500494,
        phaseCost: 4511415658.60001,
      },
      otherResults: {
        otherCosts: 492851001.4520922,
      },
      generalResults: {
        totalCost: 22542721021.783398,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 15442.610005351817,
          onSiteDays: 488884.41079827177,
          phaseCost: 4144591807.990796,
        },
        sourceReductionResults: {
          workDays: 26552.011160523605,
          onSiteDays: 26552.011160523605,
          phaseCost: 950302537.0864967,
        },
        decontaminationResults: {
          workDays: 26.305472238060432,
          onSiteDays: 27.831187387889063,
          phaseCost: 1192554435.7523506,
        },
        incidentCommandResults: {
          onSiteDays: 515472.25314618327,
          phaseCost: 1251530239.7624514,
        },
        otherResults: {
          otherCosts: 94284761.60421129,
        },
        generalResults: {
          totalCost: 7633263782.196305,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 15574.840953551326,
          onSiteDays: 440856.66959137196,
          phaseCost: 3400111673.7370253,
        },
        sourceReductionResults: {
          workDays: 1496.1202672034851,
          onSiteDays: 1496.1202672034851,
          phaseCost: 116107510.41186337,
        },
        decontaminationResults: {
          workDays: 20.468262662055963,
          onSiteDays: 22.03364361311161,
          phaseCost: 948781668.9468377,
        },
        incidentCommandResults: {
          onSiteDays: 442382.82350218855,
          phaseCost: 1081280855.5521913,
        },
        otherResults: {
          otherCosts: 88304196.52942672,
        },
        generalResults: {
          totalCost: 5634585905.177343,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 27827.43851788185,
        onSiteDays: 59094928.46980055,
        phaseCost: 12765500059.209232,
      },
      sourceReductionResults: {
        workDays: 11078.585892181425,
        onSiteDays: 11078.585892181425,
        phaseCost: 1450480599.8966804,
      },
      decontaminationResults: {
        workDays: 10.455628927670332,
        onSiteDays: 10.597812238754194,
        phaseCost: 1638920054.4006705,
      },
      incidentCommandResults: {
        onSiteDays: 59106025.65350496,
        phaseCost: 143631592181.91577,
      },
      otherResults: {
        otherCosts: 19264783574.436466,
      },
      generalResults: {
        totalCost: 178751276469.85883,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 76424.01356463933,
        onSiteDays: 476749.87961442425,
        phaseCost: 3364008051.7487974,
      },
      sourceReductionResults: {
        workDays: 2236.410590688637,
        onSiteDays: 2236.410590688637,
        phaseCost: 132974385.58372314,
      },
      decontaminationResults: {
        workDays: 19.253969103157047,
        onSiteDays: 20.249137785343716,
        phaseCost: 3330162754.4303417,
      },
      incidentCommandResults: {
        onSiteDays: 479014.53934289824,
        phaseCost: 1185951806.187294,
      },
      otherResults: {
        otherCosts: 140776371.65643233,
      },
      generalResults: {
        totalCost: 8153873369.606588,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 15497.318726939742,
          onSiteDays: 1722948.002668936,
          phaseCost: 5393488110.43289,
        },
        sourceReductionResults: {
          workDays: 5804.77508776871,
          onSiteDays: 5804.77508776871,
          phaseCost: 282209514.4057452,
        },
        decontaminationResults: {
          workDays: 13.864530217336615,
          onSiteDays: 16.624061362031863,
          phaseCost: 112972305.33806787,
        },
        incidentCommandResults: {
          onSiteDays: 1728777.4018180668,
          phaseCost: 4253631124.082244,
        },
        otherResults: {
          otherCosts: 300557990.0362221,
        },
        generalResults: {
          totalCost: 10342859044.29517,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 17311.69679261962,
          onSiteDays: 323268.522030399,
          phaseCost: 5446763865.216218,
        },
        sourceReductionResults: {
          workDays: 337.91173334852914,
          onSiteDays: 337.91173334852914,
          phaseCost: 67765454.29847664,
        },
        decontaminationResults: {
          workDays: 20.071292906317694,
          onSiteDays: 20.991661068981433,
          phaseCost: 837882712.3849998,
        },
        incidentCommandResults: {
          onSiteDays: 323635.4254248165,
          phaseCost: 800686804.6663496,
        },
        otherResults: {
          otherCosts: 73031626.53359856,
        },
        generalResults: {
          totalCost: 7226130463.099643,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 60685.40157418304,
        onSiteDays: 6614322.689176316,
        phaseCost: 9639669451.863277,
      },
      sourceReductionResults: {
        workDays: 4803.1279089963655,
        onSiteDays: 4803.1279089963655,
        phaseCost: 83519745.87870874,
      },
      decontaminationResults: {
        workDays: 12.156863455929994,
        onSiteDays: 14.695996344484387,
        phaseCost: 1180268256.7764826,
      },
      incidentCommandResults: {
        onSiteDays: 6619148.513081657,
        phaseCost: 16032426076.594463,
      },
      otherResults: {
        otherCosts: 2033462123.937105,
      },
      generalResults: {
        totalCost: 28969345655.050034,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 15569.502985184397,
        onSiteDays: 475977.5703952074,
        phaseCost: 4303333707.145356,
      },
      sourceReductionResults: {
        workDays: 3176.0369690979724,
        onSiteDays: 3176.0369690979724,
        phaseCost: 391894915.05105597,
      },
      decontaminationResults: {
        workDays: 18.4301364187687,
        onSiteDays: 18.433868491191852,
        phaseCost: 1808895435.8671217,
      },
      incidentCommandResults: {
        onSiteDays: 479180.04123279656,
        phaseCost: 1174635851.7232594,
      },
      otherResults: {
        otherCosts: 159759734.1230806,
      },
      generalResults: {
        totalCost: 7838519643.909873,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7430.812700854864,
          onSiteDays: 1228573.7053257201,
          phaseCost: 1919364550.661996,
        },
        sourceReductionResults: {
          workDays: 389.4375872931652,
          onSiteDays: 389.4375872931652,
          phaseCost: 135552832.9132242,
        },
        decontaminationResults: {
          workDays: 24.71403210487078,
          onSiteDays: 25.648293348878692,
          phaseCost: 1240490357.2069514,
        },
        incidentCommandResults: {
          onSiteDays: 1228996.7912063622,
          phaseCost: 3008464542.436877,
        },
        otherResults: {
          otherCosts: 319525615.662017,
        },
        generalResults: {
          totalCost: 6623397898.881064,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 20857.879914104396,
          onSiteDays: 1061512.2595818576,
          phaseCost: 3237685504.7153435,
        },
        sourceReductionResults: {
          workDays: 290.58757298448955,
          onSiteDays: 290.58757298448955,
          phaseCost: 103349383.46863115,
        },
        decontaminationResults: {
          workDays: 16.441979729673356,
          onSiteDays: 17.53487350711014,
          phaseCost: 79266278.2413139,
        },
        incidentCommandResults: {
          onSiteDays: 1061828.3820283492,
          phaseCost: 2579911399.706196,
        },
        otherResults: {
          otherCosts: 271083591.8393061,
        },
        generalResults: {
          totalCost: 6271296157.970791,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 59078.34802732713,
        onSiteDays: 1480096.71421121,
        phaseCost: 3955458194.0829706,
      },
      sourceReductionResults: {
        workDays: 943.2528753552187,
        onSiteDays: 943.2528753552187,
        phaseCost: 253258172.53855726,
      },
      decontaminationResults: {
        workDays: 18.675114666036123,
        onSiteDays: 20.791519465342052,
        phaseCost: 1667435753.784639,
      },
      incidentCommandResults: {
        onSiteDays: 1481068.7586060306,
        phaseCost: 3633937544.8708744,
      },
      otherResults: {
        otherCosts: 277105481.39652675,
      },
      generalResults: {
        totalCost: 9787195146.673567,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 43513.108951570895,
        onSiteDays: 551951.5692859992,
        phaseCost: 5640880974.152849,
      },
      sourceReductionResults: {
        workDays: 20355.457262302618,
        onSiteDays: 20355.457262302618,
        phaseCost: 3272614345.7482605,
      },
      decontaminationResults: {
        workDays: 25.084802325136216,
        onSiteDays: 25.37997841797303,
        phaseCost: 220853705.97931454,
      },
      incidentCommandResults: {
        onSiteDays: 572340.4065267198,
        phaseCost: 1398240687.264489,
      },
      otherResults: {
        otherCosts: 159712070.04309374,
      },
      generalResults: {
        totalCost: 10692301783.188007,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13286.58001679392,
          onSiteDays: 308027.76727521536,
          phaseCost: 4175059966.187705,
        },
        sourceReductionResults: {
          workDays: 3037.217602242504,
          onSiteDays: 3037.217602242504,
          phaseCost: 305603571.78648055,
        },
        decontaminationResults: {
          workDays: 24.103289694083685,
          onSiteDays: 24.37315229195476,
          phaseCost: 529690620.72334397,
        },
        incidentCommandResults: {
          onSiteDays: 311097.35802974977,
          phaseCost: 757725664.6396984,
        },
        otherResults: {
          otherCosts: 84161157.12520365,
        },
        generalResults: {
          totalCost: 5852240980.462432,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 49323.05667363559,
          onSiteDays: 1600481.3909613946,
          phaseCost: 3168334547.1603317,
        },
        sourceReductionResults: {
          workDays: 13596.672009941927,
          onSiteDays: 13596.672009941927,
          phaseCost: 903947309.9907856,
        },
        decontaminationResults: {
          workDays: 19.78430912661932,
          onSiteDays: 22.680679615512645,
          phaseCost: 193520907.34722394,
        },
        incidentCommandResults: {
          onSiteDays: 1614108.7436509521,
          phaseCost: 3938225952.7236266,
        },
        otherResults: {
          otherCosts: 373887232.2693581,
        },
        generalResults: {
          totalCost: 8577915949.491325,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 32151.557958025507,
        onSiteDays: 328576.3350577229,
        phaseCost: 9252086330.909176,
      },
      sourceReductionResults: {
        workDays: 7762.921333241696,
        onSiteDays: 7762.921333241696,
        phaseCost: 1429935779.447075,
      },
      decontaminationResults: {
        workDays: 17.24738548305989,
        onSiteDays: 19.68460218647602,
        phaseCost: 1096908285.911018,
      },
      incidentCommandResults: {
        onSiteDays: 336366.9409931511,
        phaseCost: 823882480.7351803,
      },
      otherResults: {
        otherCosts: 97625260.40778969,
      },
      generalResults: {
        totalCost: 12700438137.410238,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 69873.01307774868,
        onSiteDays: 3643888.50042663,
        phaseCost: 11125350000.989275,
      },
      sourceReductionResults: {
        workDays: 9363.077879892515,
        onSiteDays: 9363.077879892515,
        phaseCost: 851605356.1572618,
      },
      decontaminationResults: {
        workDays: 24.533802572762085,
        onSiteDays: 25.680473322905712,
        phaseCost: 2017264680.2996626,
      },
      incidentCommandResults: {
        onSiteDays: 3653285.2587798457,
        phaseCost: 9004375722.596067,
      },
      otherResults: {
        otherCosts: 913002572.6773728,
      },
      generalResults: {
        totalCost: 23911598332.71964,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 5394.851387967397,
          onSiteDays: 99856.96920270246,
          phaseCost: 2739880963.1853285,
        },
        sourceReductionResults: {
          workDays: 629.3582821884971,
          onSiteDays: 629.3582821884971,
          phaseCost: 267825599.60675943,
        },
        decontaminationResults: {
          workDays: 20.36062407152742,
          onSiteDays: 23.271687666483153,
          phaseCost: 1120337178.366443,
        },
        incidentCommandResults: {
          onSiteDays: 100517.59917255743,
          phaseCost: 244897913.73303103,
        },
        otherResults: {
          otherCosts: 20105658.714903023,
        },
        generalResults: {
          totalCost: 4393047313.606465,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 12548.766190172762,
          onSiteDays: 2312380.484385812,
          phaseCost: 2772251064.8956294,
        },
        sourceReductionResults: {
          workDays: 3144.610955099726,
          onSiteDays: 3144.610955099726,
          phaseCost: 276558825.4996241,
        },
        decontaminationResults: {
          workDays: 19.06751208614267,
          onSiteDays: 20.93810307768595,
          phaseCost: 694606099.2427514,
        },
        incidentCommandResults: {
          onSiteDays: 2315554.033443989,
          phaseCost: 5645056125.271513,
        },
        otherResults: {
          otherCosts: 592919909.3109246,
        },
        generalResults: {
          totalCost: 9981392024.220444,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 47028.62403456616,
        onSiteDays: 1024043.8214282955,
        phaseCost: 9166622945.357166,
      },
      sourceReductionResults: {
        workDays: 2682.587738412706,
        onSiteDays: 2682.587738412706,
        phaseCost: 635237856.1418374,
      },
      decontaminationResults: {
        workDays: 14.343915121709909,
        onSiteDays: 16.60019867112865,
        phaseCost: 1476759981.3893516,
      },
      incidentCommandResults: {
        onSiteDays: 1026751.0093653792,
        phaseCost: 2534826116.0972533,
      },
      otherResults: {
        otherCosts: 321932816.8858651,
      },
      generalResults: {
        totalCost: 14135379715.871473,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 20846.19149257914,
        onSiteDays: 36005757.24317403,
        phaseCost: 8191776628.457609,
      },
      sourceReductionResults: {
        workDays: 866.9992704902658,
        onSiteDays: 866.9992704902658,
        phaseCost: 279027815.96597147,
      },
      decontaminationResults: {
        workDays: 15.50697587093035,
        onSiteDays: 16.967888494713204,
        phaseCost: 734866525.518108,
      },
      incidentCommandResults: {
        onSiteDays: 36006649.21033302,
        phaseCost: 89097574445.63141,
      },
      otherResults: {
        otherCosts: 10783073658.43564,
      },
      generalResults: {
        totalCost: 109086319074.00873,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 18081.750225929525,
          onSiteDays: 867958.451266396,
          phaseCost: 6274341318.805468,
        },
        sourceReductionResults: {
          workDays: 3980.63283171977,
          onSiteDays: 3980.63283171977,
          phaseCost: 698857839.8668752,
        },
        decontaminationResults: {
          workDays: 20.14006255267655,
          onSiteDays: 21.67893519431328,
          phaseCost: 120378301.98473184,
        },
        incidentCommandResults: {
          onSiteDays: 871968.7630333101,
          phaseCost: 2144694726.2626996,
        },
        otherResults: {
          otherCosts: 259036483.2218549,
        },
        generalResults: {
          totalCost: 9497308670.141628,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 18387.21428033192,
          onSiteDays: 148790.0874568197,
          phaseCost: 7439228912.304835,
        },
        sourceReductionResults: {
          workDays: 1345.2699538867903,
          onSiteDays: 1345.2699538867903,
          phaseCost: 38206387.23793503,
        },
        decontaminationResults: {
          workDays: 15.04529910186429,
          onSiteDays: 16.417641725721218,
          phaseCost: 760661988.2560942,
        },
        incidentCommandResults: {
          onSiteDays: 150159.7750524322,
          phaseCost: 372219685.8237779,
        },
        otherResults: {
          otherCosts: 25993351.35774959,
        },
        generalResults: {
          totalCost: 8636310324.980392,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 45157.1471164038,
        onSiteDays: 1398701.5821309604,
        phaseCost: 7073183760.861262,
      },
      sourceReductionResults: {
        workDays: 1773.584940892877,
        onSiteDays: 1773.584940892877,
        phaseCost: 135218384.49277583,
      },
      decontaminationResults: {
        workDays: 16.35055583770167,
        onSiteDays: 19.341308502327024,
        phaseCost: 2377710485.402285,
      },
      incidentCommandResults: {
        onSiteDays: 1400502.5083803555,
        phaseCost: 3444502196.0919514,
      },
      otherResults: {
        otherCosts: 372000120.0196369,
      },
      generalResults: {
        totalCost: 13402614946.86791,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 145146.58878717417,
        onSiteDays: 121281040.43945669,
        phaseCost: 5642642130.449524,
      },
      sourceReductionResults: {
        workDays: 13529.166413274144,
        onSiteDays: 13529.166413274144,
        phaseCost: 568975713.3140839,
      },
      decontaminationResults: {
        workDays: 19.007167537232668,
        onSiteDays: 20.337354272449705,
        phaseCost: 1162651144.6800523,
      },
      incidentCommandResults: {
        onSiteDays: 121294597.94322424,
        phaseCost: 298256025635.6008,
      },
      otherResults: {
        otherCosts: 22908902163.9817,
      },
      generalResults: {
        totalCost: 328539196788.0262,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 21963.431566937015,
          onSiteDays: 477306.36700152844,
          phaseCost: 6651289947.036645,
        },
        sourceReductionResults: {
          workDays: 14171.151587750937,
          onSiteDays: 14171.151587750937,
          phaseCost: 672948393.3184439,
        },
        decontaminationResults: {
          workDays: 19.045012942991455,
          onSiteDays: 21.995173068250338,
          phaseCost: 728657647.7315356,
        },
        incidentCommandResults: {
          onSiteDays: 491507.51376234763,
          phaseCost: 1193940359.0898337,
        },
        otherResults: {
          otherCosts: 146642105.8615501,
        },
        generalResults: {
          totalCost: 9393478453.038008,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 9687.177816134945,
          onSiteDays: 306982.0511605592,
          phaseCost: 2219379418.5382714,
        },
        sourceReductionResults: {
          workDays: 2546.389829364043,
          onSiteDays: 2546.389829364043,
          phaseCost: 197862853.27304065,
        },
        decontaminationResults: {
          workDays: 21.67127746778337,
          onSiteDays: 24.075920560182052,
          phaseCost: 592973963.0175265,
        },
        incidentCommandResults: {
          onSiteDays: 309560.51691048336,
          phaseCost: 748824205.8736897,
        },
        otherResults: {
          otherCosts: 62975991.24381689,
        },
        generalResults: {
          totalCost: 3822016431.9463453,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 9074.848275414864,
        onSiteDays: 650917.7279604543,
        phaseCost: 3321679532.41929,
      },
      sourceReductionResults: {
        workDays: 4455.067535416684,
        onSiteDays: 4455.067535416684,
        phaseCost: 696339761.5842556,
      },
      decontaminationResults: {
        workDays: 19.73109753819441,
        onSiteDays: 21.673431011772117,
        phaseCost: 1013421521.2445605,
      },
      incidentCommandResults: {
        onSiteDays: 655402.4689268827,
        phaseCost: 1611069023.0060484,
      },
      otherResults: {
        otherCosts: 162975960.958876,
      },
      generalResults: {
        totalCost: 6805485799.21303,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 52565.98313746125,
        onSiteDays: 3066209.259085575,
        phaseCost: 17603738027.332573,
      },
      sourceReductionResults: {
        workDays: 5771.581949263454,
        onSiteDays: 5771.581949263454,
        phaseCost: 1819658141.622798,
      },
      decontaminationResults: {
        workDays: 17.044492775817517,
        onSiteDays: 19.518590110242037,
        phaseCost: 1033185167.3571173,
      },
      incidentCommandResults: {
        onSiteDays: 3072008.359624949,
        phaseCost: 7515384833.824881,
      },
      otherResults: {
        otherCosts: 712478974.3826152,
      },
      generalResults: {
        totalCost: 28684445144.51998,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 8824.346153961063,
          onSiteDays: 151187.78947809245,
          phaseCost: 2741868118.6219354,
        },
        sourceReductionResults: {
          workDays: 20626.10949983828,
          onSiteDays: 20626.10949983828,
          phaseCost: 593908829.5455842,
        },
        decontaminationResults: {
          workDays: 9.618072637966385,
          onSiteDays: 9.640495065748807,
          phaseCost: 386122519.64761907,
        },
        incidentCommandResults: {
          onSiteDays: 171831.5394729965,
          phaseCost: 425554686.28119504,
        },
        otherResults: {
          otherCosts: 50725407.514622256,
        },
        generalResults: {
          totalCost: 4198179561.610956,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 10503.002468256691,
          onSiteDays: 428101.67346782156,
          phaseCost: 3063818180.577155,
        },
        sourceReductionResults: {
          workDays: 3485.345537439402,
          onSiteDays: 3485.345537439402,
          phaseCost: 812443675.6460848,
        },
        decontaminationResults: {
          workDays: 25.051355622953587,
          onSiteDays: 26.854121164151962,
          phaseCost: 362508440.77323127,
        },
        incidentCommandResults: {
          onSiteDays: 431621.8731264251,
          phaseCost: 1045464943.23065,
        },
        otherResults: {
          otherCosts: 105318996.98658639,
        },
        generalResults: {
          totalCost: 5389554237.213708,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 45866.286661972,
        onSiteDays: 494008.32052444376,
        phaseCost: 7714958990.73974,
      },
      sourceReductionResults: {
        workDays: 153.79539541527905,
        onSiteDays: 153.79539541527905,
        phaseCost: 61696080.18372654,
      },
      decontaminationResults: {
        workDays: 15.583310692939746,
        onSiteDays: 17.102977453056482,
        phaseCost: 361364597.5296365,
      },
      incidentCommandResults: {
        onSiteDays: 494187.21889731206,
        phaseCost: 1197449288.4477448,
      },
      otherResults: {
        otherCosts: 119236342.93579088,
      },
      generalResults: {
        totalCost: 9454705299.83664,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 46490.9578321466,
        onSiteDays: 992941.7423695931,
        phaseCost: 3208267392.5614147,
      },
      sourceReductionResults: {
        workDays: 53136.646018564476,
        onSiteDays: 53136.646018564476,
        phaseCost: 1232356954.3623848,
      },
      decontaminationResults: {
        workDays: 15.466599259867007,
        onSiteDays: 18.36614006742978,
        phaseCost: 484579782.98364776,
      },
      incidentCommandResults: {
        onSiteDays: 1046104.754528225,
        phaseCost: 2576100458.402169,
      },
      otherResults: {
        otherCosts: 328224769.5889898,
      },
      generalResults: {
        totalCost: 7829529357.898606,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 16289.998846933177,
          onSiteDays: 237131.49164584596,
          phaseCost: 3154725884.9970975,
        },
        sourceReductionResults: {
          workDays: 14958.904646328332,
          onSiteDays: 14958.904646328332,
          phaseCost: 695666892.8552091,
        },
        decontaminationResults: {
          workDays: 15.804292991711826,
          onSiteDays: 18.250747945218055,
          phaseCost: 941830457.5775002,
        },
        incidentCommandResults: {
          onSiteDays: 252116.6470401195,
          phaseCost: 613028853.5493455,
        },
        otherResults: {
          otherCosts: 49059691.66558834,
        },
        generalResults: {
          totalCost: 5454311780.644741,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 17850.655850272116,
          onSiteDays: 174453.7514166339,
          phaseCost: 5048295574.044189,
        },
        sourceReductionResults: {
          workDays: 2098.6454328590507,
          onSiteDays: 2098.6454328590507,
          phaseCost: 466879015.7212587,
        },
        decontaminationResults: {
          workDays: 14.395086409150409,
          onSiteDays: 15.609031671334296,
          phaseCost: 233890450.52945083,
        },
        incidentCommandResults: {
          onSiteDays: 176576.00588116428,
          phaseCost: 427085030.9811881,
        },
        otherResults: {
          otherCosts: 48420927.81553063,
        },
        generalResults: {
          totalCost: 6224570999.091618,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 45221.321817245785,
        onSiteDays: 3893157.5397319966,
        phaseCost: 8511803091.119839,
      },
      sourceReductionResults: {
        workDays: 3731.792905423743,
        onSiteDays: 3731.792905423743,
        phaseCost: 542890529.7229894,
      },
      decontaminationResults: {
        workDays: 11.456024259435019,
        onSiteDays: 12.652190120576925,
        phaseCost: 221316561.97092864,
      },
      incidentCommandResults: {
        onSiteDays: 3896909.984827541,
        phaseCost: 9494546761.011396,
      },
      otherResults: {
        otherCosts: 1163706249.6686957,
      },
      generalResults: {
        totalCost: 19934263193.49385,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 27415.220389069273,
        onSiteDays: 503033.38195945555,
        phaseCost: 10662859225.703583,
      },
      sourceReductionResults: {
        workDays: 5215.037923451219,
        onSiteDays: 5215.037923451219,
        phaseCost: 1377015031.5728183,
      },
      decontaminationResults: {
        workDays: 23.959145424412363,
        onSiteDays: 24.614663319805324,
        phaseCost: 1508430550.3263738,
      },
      incidentCommandResults: {
        onSiteDays: 508281.03454622655,
        phaseCost: 1256823352.8939662,
      },
      otherResults: {
        otherCosts: 153948369.39943287,
      },
      generalResults: {
        totalCost: 14959076529.896175,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 26091.44405660767,
          onSiteDays: 178855.82433936917,
          phaseCost: 3743988083.7519913,
        },
        sourceReductionResults: {
          workDays: 357.7015773673703,
          onSiteDays: 357.7015773673703,
          phaseCost: 109792335.13393182,
        },
        decontaminationResults: {
          workDays: 16.39365453095959,
          onSiteDays: 18.684854452890544,
          phaseCost: 371764494.7189876,
        },
        incidentCommandResults: {
          onSiteDays: 179240.21077118942,
          phaseCost: 443461301.6208124,
        },
        otherResults: {
          otherCosts: 57633715.34299004,
        },
        generalResults: {
          totalCost: 4726639930.568713,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 9926.675250869706,
          onSiteDays: 111490.01599516573,
          phaseCost: 2980272742.1564198,
        },
        sourceReductionResults: {
          workDays: 3297.338960200912,
          onSiteDays: 3297.338960200912,
          phaseCost: 502151457.2711097,
        },
        decontaminationResults: {
          workDays: 24.388186789208135,
          onSiteDays: 25.526156225597056,
          phaseCost: 1363977808.623763,
        },
        incidentCommandResults: {
          onSiteDays: 114820.88111159223,
          phaseCost: 279719585.48518085,
        },
        otherResults: {
          otherCosts: 38633852.44441038,
        },
        generalResults: {
          totalCost: 5164755445.980884,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 16251.88845301059,
        onSiteDays: 549602.2169759263,
        phaseCost: 4596092968.22426,
      },
      sourceReductionResults: {
        workDays: 4680.686848542499,
        onSiteDays: 4680.686848542499,
        phaseCost: 772683485.9038733,
      },
      decontaminationResults: {
        workDays: 20.787324631537153,
        onSiteDays: 23.690385560433004,
        phaseCost: 266126829.6689571,
      },
      incidentCommandResults: {
        onSiteDays: 554314.5942100292,
        phaseCost: 1345723355.9415953,
      },
      otherResults: {
        otherCosts: 144837426.3937843,
      },
      generalResults: {
        totalCost: 7125464066.13247,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 24824.241081552384,
        onSiteDays: 726604.9896552531,
        phaseCost: 5353787378.641598,
      },
      sourceReductionResults: {
        workDays: 1652.293599785961,
        onSiteDays: 1652.293599785961,
        phaseCost: 182358291.07963812,
      },
      decontaminationResults: {
        workDays: 25.492610767365576,
        onSiteDays: 26.53598794749379,
        phaseCost: 2349500310.808633,
      },
      incidentCommandResults: {
        onSiteDays: 728291.8192429866,
        phaseCost: 1792340451.7005467,
      },
      otherResults: {
        otherCosts: 129058906.06315406,
      },
      generalResults: {
        totalCost: 9807045338.29357,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 16655.414101537965,
          onSiteDays: 391384.7690344653,
          phaseCost: 6626539773.190734,
        },
        sourceReductionResults: {
          workDays: 809.2881262497485,
          onSiteDays: 809.2881262497485,
          phaseCost: 314629971.57815325,
        },
        decontaminationResults: {
          workDays: 12.384567451985685,
          onSiteDays: 15.36144517300684,
          phaseCost: 1252312365.8157957,
        },
        incidentCommandResults: {
          onSiteDays: 392217.41860588803,
          phaseCost: 972427950.4122994,
        },
        otherResults: {
          otherCosts: 131728986.14951858,
        },
        generalResults: {
          totalCost: 9297639047.146502,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 53654.33669837809,
          onSiteDays: 953879.1547197824,
          phaseCost: 5768189375.431665,
        },
        sourceReductionResults: {
          workDays: 1898.1634874574313,
          onSiteDays: 1898.1634874574313,
          phaseCost: 226365728.9201122,
        },
        decontaminationResults: {
          workDays: 11.224387582909406,
          onSiteDays: 11.672818570787278,
          phaseCost: 840740008.5584358,
        },
        incidentCommandResults: {
          onSiteDays: 955796.9910258106,
          phaseCost: 2343075214.4121027,
        },
        otherResults: {
          otherCosts: 275745075.8774065,
        },
        generalResults: {
          totalCost: 9454115403.199722,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 18339.13587929039,
        onSiteDays: 868869.2812763046,
        phaseCost: 8506782699.986982,
      },
      sourceReductionResults: {
        workDays: 13539.108601990696,
        onSiteDays: 13539.108601990696,
        phaseCost: 1223508671.8046095,
      },
      decontaminationResults: {
        workDays: 21.26522005309007,
        onSiteDays: 23.648067670792358,
        phaseCost: 860535431.3306727,
      },
      incidentCommandResults: {
        onSiteDays: 882440.0379459661,
        phaseCost: 2137003377.9826083,
      },
      otherResults: {
        otherCosts: 193163214.24853027,
      },
      generalResults: {
        totalCost: 12920993395.353403,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 12320.193745839293,
        onSiteDays: 221189.14815583342,
        phaseCost: 3520951334.024802,
      },
      sourceReductionResults: {
        workDays: 13443.640766652148,
        onSiteDays: 13443.640766652148,
        phaseCost: 2582919271.0551186,
      },
      decontaminationResults: {
        workDays: 15.27630401758391,
        onSiteDays: 16.681542100776348,
        phaseCost: 1845130227.9901366,
      },
      incidentCommandResults: {
        onSiteDays: 234657.47046458634,
        phaseCost: 571560534.0948682,
      },
      otherResults: {
        otherCosts: 61393048.83434289,
      },
      generalResults: {
        totalCost: 8581954415.999268,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 26749.9390009647,
          onSiteDays: 1921957.8148820028,
          phaseCost: 5666436501.268969,
        },
        sourceReductionResults: {
          workDays: 3270.5752819226723,
          onSiteDays: 3270.5752819226723,
          phaseCost: 259678322.8674389,
        },
        decontaminationResults: {
          workDays: 23.454728214874567,
          onSiteDays: 26.133386434086923,
          phaseCost: 714616013.4139225,
        },
        incidentCommandResults: {
          onSiteDays: 1925262.5235503595,
          phaseCost: 4754895730.540127,
        },
        otherResults: {
          otherCosts: 437958243.02233565,
        },
        generalResults: {
          totalCost: 11833584811.112793,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 11714.373564070036,
          onSiteDays: 318261.55310939386,
          phaseCost: 2223047687.572751,
        },
        sourceReductionResults: {
          workDays: 789.7198363232446,
          onSiteDays: 789.7198363232446,
          phaseCost: 65446754.255432904,
        },
        decontaminationResults: {
          workDays: 26.20966473180094,
          onSiteDays: 29.197403147396955,
          phaseCost: 549656806.832193,
        },
        incidentCommandResults: {
          onSiteDays: 319088.4703488645,
          phaseCost: 787084682.1188977,
        },
        otherResults: {
          otherCosts: 65800045.34096845,
        },
        generalResults: {
          totalCost: 3691035976.1202435,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 22658.798067032225,
        onSiteDays: 349492.8016296223,
        phaseCost: 9294274978.423359,
      },
      sourceReductionResults: {
        workDays: 26964.19096181085,
        onSiteDays: 26964.19096181085,
        phaseCost: 1476324787.0391269,
      },
      decontaminationResults: {
        workDays: 10.559154725530918,
        onSiteDays: 13.113619773907963,
        phaseCost: 1074927801.6004224,
      },
      incidentCommandResults: {
        onSiteDays: 376478.10621120705,
        phaseCost: 912992333.291568,
      },
      otherResults: {
        otherCosts: 127508571.3391161,
      },
      generalResults: {
        totalCost: 12886028471.693592,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 22826.54229709858,
        onSiteDays: 1798210.3741837565,
        phaseCost: 5662949768.549512,
      },
      sourceReductionResults: {
        workDays: 6257.644248894991,
        onSiteDays: 6257.644248894991,
        phaseCost: 995600521.1497777,
      },
      decontaminationResults: {
        workDays: 15.020310367229467,
        onSiteDays: 15.88514969891057,
        phaseCost: 1033230693.5691818,
      },
      incidentCommandResults: {
        onSiteDays: 1804491.9035823504,
        phaseCost: 4423477330.472053,
      },
      otherResults: {
        otherCosts: 593039060.5358284,
      },
      generalResults: {
        totalCost: 12708297374.276352,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 16373.129134219515,
          onSiteDays: 2085640.0397082043,
          phaseCost: 6116896159.698227,
        },
        sourceReductionResults: {
          workDays: 3985.791308566569,
          onSiteDays: 3985.791308566569,
          phaseCost: 620508967.2357321,
        },
        decontaminationResults: {
          workDays: 25.366988714636996,
          onSiteDays: 27.202488271333852,
          phaseCost: 964565152.0442876,
        },
        incidentCommandResults: {
          onSiteDays: 2089661.033505042,
          phaseCost: 5162843621.6688385,
        },
        otherResults: {
          otherCosts: 661915785.8392984,
        },
        generalResults: {
          totalCost: 13526729686.486383,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 18214.93118624814,
          onSiteDays: 331602.2353527139,
          phaseCost: 1458523994.27022,
        },
        sourceReductionResults: {
          workDays: 1828.5280198554317,
          onSiteDays: 1828.5280198554317,
          phaseCost: 186151637.9848168,
        },
        decontaminationResults: {
          workDays: 19.843517664550692,
          onSiteDays: 21.87012541547188,
          phaseCost: 1420861054.1881661,
        },
        incidentCommandResults: {
          onSiteDays: 333460.6334979848,
          phaseCost: 816191091.68851,
        },
        otherResults: {
          otherCosts: 101181050.71827072,
        },
        generalResults: {
          totalCost: 3982908828.8499837,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 27626.96782393924,
        onSiteDays: 922015.6317268106,
        phaseCost: 9189482822.936674,
      },
      sourceReductionResults: {
        workDays: 11853.972688144751,
        onSiteDays: 11853.972688144751,
        phaseCost: 1171451253.7246914,
      },
      decontaminationResults: {
        workDays: 12.480499512860668,
        onSiteDays: 14.102053391770937,
        phaseCost: 1483564859.0649254,
      },
      incidentCommandResults: {
        onSiteDays: 933891.7064683471,
        phaseCost: 2260917750.4176855,
      },
      otherResults: {
        otherCosts: 296476836.0920429,
      },
      generalResults: {
        totalCost: 14401893522.236021,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 60306.40278627406,
        onSiteDays: 1390763.1428717342,
        phaseCost: 11256660518.445955,
      },
      sourceReductionResults: {
        workDays: 10180.968867829055,
        onSiteDays: 10180.968867829055,
        phaseCost: 1356917159.4326224,
      },
      decontaminationResults: {
        workDays: 18.35025316182297,
        onSiteDays: 21.158277432936774,
        phaseCost: 630110765.4543617,
      },
      incidentCommandResults: {
        onSiteDays: 1400973.2700169962,
        phaseCost: 3469990136.473589,
      },
      otherResults: {
        otherCosts: 251101021.8423753,
      },
      generalResults: {
        totalCost: 16964779601.648903,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 15383.01520823711,
          onSiteDays: 214197.0012111439,
          phaseCost: 4348367737.830425,
        },
        sourceReductionResults: {
          workDays: 13915.803769852313,
          onSiteDays: 13915.803769852313,
          phaseCost: 727765872.2263728,
        },
        decontaminationResults: {
          workDays: 25.559288987787276,
          onSiteDays: 27.47916403191145,
          phaseCost: 651088043.5515121,
        },
        incidentCommandResults: {
          onSiteDays: 228148.28414502816,
          phaseCost: 557087450.100778,
        },
        otherResults: {
          otherCosts: 68906306.79779424,
        },
        generalResults: {
          totalCost: 6353215410.506882,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 20781.853224253908,
          onSiteDays: 209748.18636007392,
          phaseCost: 4360040686.866619,
        },
        sourceReductionResults: {
          workDays: 1619.3686178661499,
          onSiteDays: 1619.3686178661499,
          phaseCost: 230020440.06698668,
        },
        decontaminationResults: {
          workDays: 16.766808419666905,
          onSiteDays: 19.615797341246108,
          phaseCost: 1089865781.4777286,
        },
        incidentCommandResults: {
          onSiteDays: 211395.17077528132,
          phaseCost: 520199871.7916397,
        },
        otherResults: {
          otherCosts: 62414537.44142754,
        },
        generalResults: {
          totalCost: 6262541317.644402,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 43200.3352458993,
        onSiteDays: 527565.9747878608,
        phaseCost: 1592816072.7973528,
      },
      sourceReductionResults: {
        workDays: 20138.289999521934,
        onSiteDays: 20138.289999521934,
        phaseCost: 546672901.631427,
      },
      decontaminationResults: {
        workDays: 12.1806827865496,
        onSiteDays: 12.83808702017136,
        phaseCost: 434539079.7208901,
      },
      incidentCommandResults: {
        onSiteDays: 547725.1028744029,
        phaseCost: 1346331256.7580953,
      },
      otherResults: {
        otherCosts: 140524770.18077335,
      },
      generalResults: {
        totalCost: 4060884081.0885386,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 26732.951000717767,
        onSiteDays: 424816.06769671355,
        phaseCost: 11095106486.37255,
      },
      sourceReductionResults: {
        workDays: 4434.356497787761,
        onSiteDays: 4434.356497787761,
        phaseCost: 989571304.2639582,
      },
      decontaminationResults: {
        workDays: 17.593128647793346,
        onSiteDays: 18.46878747629672,
        phaseCost: 998610975.4656962,
      },
      incidentCommandResults: {
        onSiteDays: 429276.8929819776,
        phaseCost: 1055997719.0575175,
      },
      otherResults: {
        otherCosts: 106281428.63430482,
      },
      generalResults: {
        totalCost: 14245567913.794025,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 8161.5529374089565,
          onSiteDays: 116195.65914598163,
          phaseCost: 4405704550.387003,
        },
        sourceReductionResults: {
          workDays: 2057.5447457478595,
          onSiteDays: 2057.5447457478595,
          phaseCost: 533293744.1193838,
        },
        decontaminationResults: {
          workDays: 21.298104042955234,
          onSiteDays: 22.954822919088144,
          phaseCost: 372478789.2405695,
        },
        incidentCommandResults: {
          onSiteDays: 118284.15871464857,
          phaseCost: 292995019.9808626,
        },
        otherResults: {
          otherCosts: 40351792.290583864,
        },
        generalResults: {
          totalCost: 5644823896.018402,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 9615.192070467012,
          onSiteDays: 2088406.3236088632,
          phaseCost: 1771885697.4001794,
        },
        sourceReductionResults: {
          workDays: 1680.281434914601,
          onSiteDays: 1680.281434914601,
          phaseCost: 99213997.7970534,
        },
        decontaminationResults: {
          workDays: 13.671882357837605,
          onSiteDays: 14.395101574574388,
          phaseCost: 782240390.8319563,
        },
        incidentCommandResults: {
          onSiteDays: 2090109.0001453522,
          phaseCost: 5101567856.479364,
        },
        otherResults: {
          otherCosts: 387021295.8393447,
        },
        generalResults: {
          totalCost: 8141929238.3478985,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 31129.837073473813,
        onSiteDays: 864914.3438024631,
        phaseCost: 15709508709.859646,
      },
      sourceReductionResults: {
        workDays: 1354.2600310310002,
        onSiteDays: 1354.2600310310002,
        phaseCost: 211108396.97890365,
      },
      decontaminationResults: {
        workDays: 12.09865934939558,
        onSiteDays: 13.111371998933928,
        phaseCost: 763625113.706477,
      },
      incidentCommandResults: {
        onSiteDays: 866289.715205493,
        phaseCost: 2145768359.6588478,
      },
      otherResults: {
        otherCosts: 161545461.3296013,
      },
      generalResults: {
        totalCost: 18991556041.533474,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 66075.15987340485,
        onSiteDays: 673334.4358516224,
        phaseCost: 4409648102.861845,
      },
      sourceReductionResults: {
        workDays: 1342.0801629025266,
        onSiteDays: 1342.0801629025266,
        phaseCost: 281310494.5010075,
      },
      decontaminationResults: {
        workDays: 17.14745360034226,
        onSiteDays: 20.073086707404137,
        phaseCost: 532178182.58101356,
      },
      incidentCommandResults: {
        onSiteDays: 674704.5891012322,
        phaseCost: 1635060576.9426332,
      },
      otherResults: {
        otherCosts: 132503023.7880762,
      },
      generalResults: {
        totalCost: 6990700380.674576,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 11810.759638853446,
          onSiteDays: 761437.163696092,
          phaseCost: 5506989432.277838,
        },
        sourceReductionResults: {
          workDays: 720.5551283324688,
          onSiteDays: 720.5551283324688,
          phaseCost: 140283916.1760865,
        },
        decontaminationResults: {
          workDays: 16.437159746521424,
          onSiteDays: 19.000902787782465,
          phaseCost: 495704381.4594061,
        },
        incidentCommandResults: {
          onSiteDays: 762184.7197272122,
          phaseCost: 1875763043.135808,
        },
        otherResults: {
          otherCosts: 256998852.28603542,
        },
        generalResults: {
          totalCost: 8275739625.335174,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 44521.50313018838,
          onSiteDays: 554708.1163624497,
          phaseCost: 2999067420.8213925,
        },
        sourceReductionResults: {
          workDays: 1203.0437038331067,
          onSiteDays: 1203.0437038331067,
          phaseCost: 118686209.46277626,
        },
        decontaminationResults: {
          workDays: 26.273350992769316,
          onSiteDays: 26.911066294394214,
          phaseCost: 441285727.84993047,
        },
        incidentCommandResults: {
          onSiteDays: 555946.0711325773,
          phaseCost: 1361703066.3048925,
        },
        otherResults: {
          otherCosts: 180310613.68120313,
        },
        generalResults: {
          totalCost: 5101053038.120194,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 39942.55307425906,
        onSiteDays: 24857013.255062032,
        phaseCost: 9255119660.425283,
      },
      sourceReductionResults: {
        workDays: 121.98378974713218,
        onSiteDays: 121.98378974713218,
        phaseCost: 10410236.750534467,
      },
      decontaminationResults: {
        workDays: 13.962535207616757,
        onSiteDays: 16.451888653554928,
        phaseCost: 435860801.87012166,
      },
      incidentCommandResults: {
        onSiteDays: 24857159.690740433,
        phaseCost: 61369542404.957214,
      },
      otherResults: {
        otherCosts: 5848685288.625634,
      },
      generalResults: {
        totalCost: 76919618392.6288,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 91088.27238389767,
        onSiteDays: 2673024.2634787546,
        phaseCost: 7747424245.469606,
      },
      sourceReductionResults: {
        workDays: 3030.6663620179334,
        onSiteDays: 3030.6663620179334,
        phaseCost: 259443267.1820063,
      },
      decontaminationResults: {
        workDays: 19.966086128951538,
        onSiteDays: 22.294763535562616,
        phaseCost: 3449878105.2303834,
      },
      incidentCommandResults: {
        onSiteDays: 2676085.224604308,
        phaseCost: 6539587300.458527,
      },
      otherResults: {
        otherCosts: 709871390.4359047,
      },
      generalResults: {
        totalCost: 18706204308.77643,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 70551.8496125261,
          onSiteDays: 6007838.974302584,
          phaseCost: 4157728459.471878,
        },
        sourceReductionResults: {
          workDays: 2156.246456628357,
          onSiteDays: 2156.246456628357,
          phaseCost: 147749479.50540143,
        },
        decontaminationResults: {
          workDays: 29.035059198745305,
          onSiteDays: 29.177224459400684,
          phaseCost: 1419319433.2300506,
        },
        incidentCommandResults: {
          onSiteDays: 6010032.397983672,
          phaseCost: 14905605494.41746,
        },
        otherResults: {
          otherCosts: 1795617513.8608334,
        },
        generalResults: {
          totalCost: 22426020380.485622,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 7611.306082549911,
          onSiteDays: 311602.2314591831,
          phaseCost: 3415081647.301216,
        },
        sourceReductionResults: {
          workDays: 780.4912011039405,
          onSiteDays: 780.4912011039405,
          phaseCost: 61832354.76405409,
        },
        decontaminationResults: {
          workDays: 19.615938176078707,
          onSiteDays: 21.203364949022273,
          phaseCost: 808786779.8921856,
        },
        incidentCommandResults: {
          onSiteDays: 312411.9260252361,
          phaseCost: 758683594.1026227,
        },
        otherResults: {
          otherCosts: 97983708.77814142,
        },
        generalResults: {
          totalCost: 5142368084.83822,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 108023.6984435455,
        onSiteDays: 647452.405759891,
        phaseCost: 5582387818.850742,
      },
      sourceReductionResults: {
        workDays: 10329.832979412866,
        onSiteDays: 10329.832979412866,
        phaseCost: 361262832.88046294,
      },
      decontaminationResults: {
        workDays: 17.67113070321994,
        onSiteDays: 18.863416048433496,
        phaseCost: 344910861.4383812,
      },
      incidentCommandResults: {
        onSiteDays: 657809.1021553524,
        phaseCost: 1605666885.7771785,
      },
      otherResults: {
        otherCosts: 211917217.35604256,
      },
      generalResults: {
        totalCost: 8106145616.302808,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 25305.403572304338,
        onSiteDays: 5601356.6465950655,
        phaseCost: 4004401134.585452,
      },
      sourceReductionResults: {
        workDays: 5155.053823658332,
        onSiteDays: 5155.053823658332,
        phaseCost: 817805114.1268747,
      },
      decontaminationResults: {
        workDays: 14.54236365029178,
        onSiteDays: 17.092525958337944,
        phaseCost: 459656449.2579694,
      },
      incidentCommandResults: {
        onSiteDays: 5606536.792944682,
        phaseCost: 13829006132.42294,
      },
      otherResults: {
        otherCosts: 1440149463.3867428,
      },
      generalResults: {
        totalCost: 20551018293.779976,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 15790.191121452237,
          onSiteDays: 195202.42325564346,
          phaseCost: 3841793923.985278,
        },
        sourceReductionResults: {
          workDays: 1334.3339431488566,
          onSiteDays: 1334.3339431488566,
          phaseCost: 89449501.76567547,
        },
        decontaminationResults: {
          workDays: 21.066257701736472,
          onSiteDays: 21.473837343620566,
          phaseCost: 1112167297.4922683,
        },
        incidentCommandResults: {
          onSiteDays: 196566.23103613593,
          phaseCost: 481938760.01035595,
        },
        otherResults: {
          otherCosts: 60086435.854716666,
        },
        generalResults: {
          totalCost: 5585435919.1082945,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 58501.28722843321,
          onSiteDays: 436763.21662299614,
          phaseCost: 3161539599.6322803,
        },
        sourceReductionResults: {
          workDays: 5548.105420931497,
          onSiteDays: 5548.105420931497,
          phaseCost: 455311264.88376606,
        },
        decontaminationResults: {
          workDays: 11.720799639988876,
          onSiteDays: 13.726341641211494,
          phaseCost: 149735983.3778969,
        },
        incidentCommandResults: {
          onSiteDays: 442333.04838556884,
          phaseCost: 1089534252.4199915,
        },
        otherResults: {
          otherCosts: 88704341.98282112,
        },
        generalResults: {
          totalCost: 4944825442.296756,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 62449.81278735465,
        onSiteDays: 327092.6757498926,
        phaseCost: 5811958327.736973,
      },
      sourceReductionResults: {
        workDays: 10202.547235299724,
        onSiteDays: 10202.547235299724,
        phaseCost: 989096932.4894729,
      },
      decontaminationResults: {
        workDays: 26.197962555614758,
        onSiteDays: 27.32932941809514,
        phaseCost: 929030689.857646,
      },
      incidentCommandResults: {
        onSiteDays: 337330.5523146104,
        phaseCost: 833780725.5226238,
      },
      otherResults: {
        otherCosts: 98988091.90960065,
      },
      generalResults: {
        totalCost: 8662854767.516317,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 81113.51893274262,
        onSiteDays: 248668.76599956708,
        phaseCost: 4606577543.943513,
      },
      sourceReductionResults: {
        workDays: 2206.0907671304867,
        onSiteDays: 2206.0907671304867,
        phaseCost: 353876167.59083116,
      },
      decontaminationResults: {
        workDays: 18.850220210815365,
        onSiteDays: 20.304984319560457,
        phaseCost: 2154813614.0513124,
      },
      incidentCommandResults: {
        onSiteDays: 250903.16175101712,
        phaseCost: 608628810.2593629,
      },
      otherResults: {
        otherCosts: 59460721.81721345,
      },
      generalResults: {
        totalCost: 7783356857.662232,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 8237.467552304635,
          onSiteDays: 947962.8396184609,
          phaseCost: 3927264563.830862,
        },
        sourceReductionResults: {
          workDays: 2243.216115269142,
          onSiteDays: 2243.216115269142,
          phaseCost: 473155613.9051171,
        },
        decontaminationResults: {
          workDays: 24.959533144011985,
          onSiteDays: 27.940419070175945,
          phaseCost: 278039124.45927364,
        },
        incidentCommandResults: {
          onSiteDays: 950241.9961528002,
          phaseCost: 2332409003.480034,
        },
        otherResults: {
          otherCosts: 219406725.76197374,
        },
        generalResults: {
          totalCost: 7230275031.43726,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 25871.303377146287,
          onSiteDays: 804690.4985440931,
          phaseCost: 2714859485.5086145,
        },
        sourceReductionResults: {
          workDays: 205.2479002600512,
          onSiteDays: 205.2479002600512,
          phaseCost: 21763779.072344355,
        },
        decontaminationResults: {
          workDays: 20.71670212264096,
          onSiteDays: 22.763033148311784,
          phaseCost: 524159864.4537871,
        },
        incidentCommandResults: {
          onSiteDays: 804926.5094775015,
          phaseCost: 1967357825.708253,
        },
        otherResults: {
          otherCosts: 191172533.5453909,
        },
        generalResults: {
          totalCost: 5419313488.28839,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 24580.996047312685,
        onSiteDays: 704661.4136382688,
        phaseCost: 7174068925.462704,
      },
      sourceReductionResults: {
        workDays: 3880.6338068345176,
        onSiteDays: 3880.6338068345176,
        phaseCost: 275007406.18120253,
      },
      decontaminationResults: {
        workDays: 20.827303805813962,
        onSiteDays: 23.217600378957016,
        phaseCost: 1269584145.923093,
      },
      incidentCommandResults: {
        onSiteDays: 708573.2650454822,
        phaseCost: 1735154602.2686546,
      },
      otherResults: {
        otherCosts: 135050032.30479175,
      },
      generalResults: {
        totalCost: 10588865112.140446,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 49890.402722196755,
        onSiteDays: 3262718.7718737563,
        phaseCost: 4715657410.049813,
      },
      sourceReductionResults: {
        workDays: 26094.023125771233,
        onSiteDays: 26094.023125771233,
        phaseCost: 1147154957.7330136,
      },
      decontaminationResults: {
        workDays: 20.617622980293262,
        onSiteDays: 21.339880943610304,
        phaseCost: 1356865117.621545,
      },
      incidentCommandResults: {
        onSiteDays: 3288842.1348804715,
        phaseCost: 7985623303.932268,
      },
      otherResults: {
        otherCosts: 608376713.627647,
      },
      generalResults: {
        totalCost: 15813677502.964287,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7770.330812025108,
          onSiteDays: 255011.06169814963,
          phaseCost: 4292762377.5737734,
        },
        sourceReductionResults: {
          workDays: 6567.69981585617,
          onSiteDays: 6567.69981585617,
          phaseCost: 1597602363.1912234,
        },
        decontaminationResults: {
          workDays: 20.703049514839208,
          onSiteDays: 22.989372589157284,
          phaseCost: 689595762.7947726,
        },
        incidentCommandResults: {
          onSiteDays: 261609.75088659496,
          phaseCost: 648605581.9487602,
        },
        otherResults: {
          otherCosts: 51787860.56949242,
        },
        generalResults: {
          totalCost: 7280353946.078021,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 6607.429876564333,
          onSiteDays: 133630.3281725431,
          phaseCost: 2892800663.7254734,
        },
        sourceReductionResults: {
          workDays: 25095.720380115486,
          onSiteDays: 25095.720380115486,
          phaseCost: 968794028.1744952,
        },
        decontaminationResults: {
          workDays: 24.012029375418095,
          onSiteDays: 24.158545837774533,
          phaseCost: 900353828.0249996,
        },
        incidentCommandResults: {
          onSiteDays: 158758.20709849635,
          phaseCost: 385230540.14205736,
        },
        otherResults: {
          otherCosts: 46736620.171148494,
        },
        generalResults: {
          totalCost: 5193915680.238174,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 39855.319451958974,
        onSiteDays: 511602.7872973477,
        phaseCost: 3168602411.3979077,
      },
      sourceReductionResults: {
        workDays: 778.6131946191956,
        onSiteDays: 778.6131946191956,
        phaseCost: 382579178.59098,
      },
      decontaminationResults: {
        workDays: 16.65547369342658,
        onSiteDays: 19.39278981983494,
        phaseCost: 1793533264.6973135,
      },
      incidentCommandResults: {
        onSiteDays: 512408.7932817867,
        phaseCost: 1263944367.362296,
      },
      otherResults: {
        otherCosts: 120360615.72472246,
      },
      generalResults: {
        totalCost: 6729019837.77322,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 92055.63919287408,
        onSiteDays: 434584.32639093813,
        phaseCost: 6113673670.454882,
      },
      sourceReductionResults: {
        workDays: 15628.96320061407,
        onSiteDays: 15628.96320061407,
        phaseCost: 6563816456.972774,
      },
      decontaminationResults: {
        workDays: 21.385266403757328,
        onSiteDays: 21.898352204798336,
        phaseCost: 1783827531.967606,
      },
      incidentCommandResults: {
        onSiteDays: 450243.18794375705,
        phaseCost: 1091956736.3957539,
      },
      otherResults: {
        otherCosts: 85463270.13923591,
      },
      generalResults: {
        totalCost: 15638737665.93025,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7226.150899864881,
          onSiteDays: 71437.40023647573,
          phaseCost: 687869547.3800805,
        },
        sourceReductionResults: {
          workDays: 773.8486573127038,
          onSiteDays: 773.8486573127038,
          phaseCost: 154749638.63582838,
        },
        decontaminationResults: {
          workDays: 20.11134605135567,
          onSiteDays: 22.280929004838907,
          phaseCost: 190767895.47225386,
        },
        incidentCommandResults: {
          onSiteDays: 72241.52982279327,
          phaseCost: 177624138.7250507,
        },
        otherResults: {
          otherCosts: 22077828.08800579,
        },
        generalResults: {
          totalCost: 1233089048.3012192,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 12526.40128557057,
          onSiteDays: 100511.7175496287,
          phaseCost: 2125766483.3688207,
        },
        sourceReductionResults: {
          workDays: 4791.457403162851,
          onSiteDays: 4791.457403162851,
          phaseCost: 1248113962.0427513,
        },
        decontaminationResults: {
          workDays: 21.836552100450863,
          onSiteDays: 21.949729460512692,
          phaseCost: 582553206.4912966,
        },
        incidentCommandResults: {
          onSiteDays: 105333.12468225205,
          phaseCost: 257354368.18202752,
        },
        otherResults: {
          otherCosts: 34709117.94955003,
        },
        generalResults: {
          totalCost: 4248497138.0344462,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 25501.442974652164,
        onSiteDays: 670815.3931099676,
        phaseCost: 11161106818.846634,
      },
      sourceReductionResults: {
        workDays: 3065.4280997543024,
        onSiteDays: 3065.4280997543024,
        phaseCost: 786339697.1794692,
      },
      decontaminationResults: {
        workDays: 17.193380069963958,
        onSiteDays: 18.503178863670488,
        phaseCost: 1863140517.877465,
      },
      incidentCommandResults: {
        onSiteDays: 673907.3243885855,
        phaseCost: 1670267865.4429626,
      },
      otherResults: {
        otherCosts: 172663309.49259865,
      },
      generalResults: {
        totalCost: 15653518208.83913,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 38107.25694730542,
        onSiteDays: 345642.4964088313,
        phaseCost: 9645129043.747313,
      },
      sourceReductionResults: {
        workDays: 344.96668966687304,
        onSiteDays: 344.96668966687304,
        phaseCost: 43290183.557556346,
      },
      decontaminationResults: {
        workDays: 16.21247473503753,
        onSiteDays: 18.71728839532409,
        phaseCost: 522631969.11618423,
      },
      incidentCommandResults: {
        onSiteDays: 346014.1803868935,
        phaseCost: 858083964.857913,
      },
      otherResults: {
        otherCosts: 64298548.98353972,
      },
      generalResults: {
        totalCost: 11133433710.262505,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 8834.774216520495,
          onSiteDays: 280182.33957217133,
          phaseCost: 2011038144.6300368,
        },
        sourceReductionResults: {
          workDays: 502.9007712213923,
          onSiteDays: 502.9007712213923,
          phaseCost: 142606299.44090116,
        },
        decontaminationResults: {
          workDays: 25.272259997965833,
          onSiteDays: 27.576282237557763,
          phaseCost: 540384986.2381642,
        },
        incidentCommandResults: {
          onSiteDays: 280720.81662563025,
          phaseCost: 679323944.5107448,
        },
        otherResults: {
          otherCosts: 50569199.669657186,
        },
        generalResults: {
          totalCost: 3423922574.4895043,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 39925.1290951551,
          onSiteDays: 607830.0119158729,
          phaseCost: 1582956420.5621958,
        },
        sourceReductionResults: {
          workDays: 3716.6564029484884,
          onSiteDays: 3716.6564029484884,
          phaseCost: 596204858.854687,
        },
        decontaminationResults: {
          workDays: 17.30173996842972,
          onSiteDays: 18.32767228463843,
          phaseCost: 206407068.66632915,
        },
        incidentCommandResults: {
          onSiteDays: 611572.9959911061,
          phaseCost: 1503524346.3048725,
        },
        otherResults: {
          otherCosts: 205095068.83384675,
        },
        generalResults: {
          totalCost: 4094187763.221931,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 19910.8463148373,
        onSiteDays: 542618.5256292961,
        phaseCost: 6590434560.676569,
      },
      sourceReductionResults: {
        workDays: 6533.4655800427945,
        onSiteDays: 6533.4655800427945,
        phaseCost: 879891095.9539467,
      },
      decontaminationResults: {
        workDays: 7.848098646348365,
        onSiteDays: 8.419853978189606,
        phaseCost: 1457390272.585885,
      },
      incidentCommandResults: {
        onSiteDays: 549168.4110633171,
        phaseCost: 1357136615.994616,
      },
      otherResults: {
        otherCosts: 148132633.60728252,
      },
      generalResults: {
        totalCost: 10432985178.818298,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 99065.33234669469,
        onSiteDays: 12770033.599319708,
        phaseCost: 5768325907.27086,
      },
      sourceReductionResults: {
        workDays: 7442.537669777569,
        onSiteDays: 7442.537669777569,
        phaseCost: 2746806593.805018,
      },
      decontaminationResults: {
        workDays: 12.779400661536354,
        onSiteDays: 13.747776566480235,
        phaseCost: 1400913059.7462306,
      },
      incidentCommandResults: {
        onSiteDays: 12777497.884766052,
        phaseCost: 31614452976.92446,
      },
      otherResults: {
        otherCosts: 2683919992.202556,
      },
      generalResults: {
        totalCost: 44214418529.94912,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 19345.65077051529,
          onSiteDays: 161906.9982483627,
          phaseCost: 5767698330.617455,
        },
        sourceReductionResults: {
          workDays: 5752.7666401582665,
          onSiteDays: 5752.7666401582665,
          phaseCost: 1086595384.1443539,
        },
        decontaminationResults: {
          workDays: 16.14048898083635,
          onSiteDays: 17.39399466137262,
          phaseCost: 154952341.83081207,
        },
        incidentCommandResults: {
          onSiteDays: 167685.15888318233,
          phaseCost: 411533989.5258199,
        },
        otherResults: {
          otherCosts: 42442685.03623895,
        },
        generalResults: {
          totalCost: 7463222731.154679,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 10746.970769789754,
          onSiteDays: 96901.66327490615,
          phaseCost: 2654145342.8175116,
        },
        sourceReductionResults: {
          workDays: 1563.4739433823675,
          onSiteDays: 1563.4739433823675,
          phaseCost: 279809098.5956829,
        },
        decontaminationResults: {
          workDays: 14.315214009563256,
          onSiteDays: 16.399759309459423,
          phaseCost: 493471104.6180564,
        },
        incidentCommandResults: {
          onSiteDays: 98489.53697759798,
          phaseCost: 243567277.55776227,
        },
        otherResults: {
          otherCosts: 22124034.10482188,
        },
        generalResults: {
          totalCost: 3693116857.693835,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 28638.438093566165,
        onSiteDays: 176564.49935221334,
        phaseCost: 4011773280.1907015,
      },
      sourceReductionResults: {
        workDays: 4829.703483584406,
        onSiteDays: 4829.703483584406,
        phaseCost: 702797294.9777539,
      },
      decontaminationResults: {
        workDays: 19.930958372291865,
        onSiteDays: 20.164900438665622,
        phaseCost: 268545505.20882285,
      },
      incidentCommandResults: {
        onSiteDays: 181422.3677362364,
        phaseCost: 441063531.3257184,
      },
      otherResults: {
        otherCosts: 60516646.16556026,
      },
      generalResults: {
        totalCost: 5484696257.868558,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 86831.78784622787,
        onSiteDays: 1754474.2511060357,
        phaseCost: 10310004174.140696,
      },
      sourceReductionResults: {
        workDays: 1365.4864976899153,
        onSiteDays: 1365.4864976899153,
        phaseCost: 372085350.9608499,
      },
      decontaminationResults: {
        workDays: 17.14939310195609,
        onSiteDays: 18.13779643018213,
        phaseCost: 1253187110.867523,
      },
      incidentCommandResults: {
        onSiteDays: 1755865.8754001558,
        phaseCost: 4264812826.8382006,
      },
      otherResults: {
        otherCosts: 377977947.6023095,
      },
      generalResults: {
        totalCost: 16578067410.40958,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13812.829117081297,
          onSiteDays: 253448.0112058225,
          phaseCost: 5322723213.549721,
        },
        sourceReductionResults: {
          workDays: 3208.2472406603947,
          onSiteDays: 3208.2472406603947,
          phaseCost: 112853879.41438553,
        },
        decontaminationResults: {
          workDays: 24.385528263260035,
          onSiteDays: 26.34229969497358,
          phaseCost: 640074865.8196821,
        },
        incidentCommandResults: {
          onSiteDays: 256690.60074617786,
          phaseCost: 625610776.2247071,
        },
        otherResults: {
          otherCosts: 84715985.35459216,
        },
        generalResults: {
          totalCost: 6785978720.363088,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 8481.040057011378,
          onSiteDays: 319012.9890847742,
          phaseCost: 4465732582.034094,
        },
        sourceReductionResults: {
          workDays: 1413.9021844338217,
          onSiteDays: 1413.9021844338217,
          phaseCost: 279654490.6459111,
        },
        decontaminationResults: {
          workDays: 16.21710081077579,
          onSiteDays: 18.567624549280765,
          phaseCost: 470250424.4860269,
        },
        incidentCommandResults: {
          onSiteDays: 320453.4588937573,
          phaseCost: 788652541.4571433,
        },
        otherResults: {
          otherCosts: 76099473.47909705,
        },
        generalResults: {
          totalCost: 6080389512.102272,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 19121.40494885785,
        onSiteDays: 161366.01496936896,
        phaseCost: 6022695466.687883,
      },
      sourceReductionResults: {
        workDays: 49751.22823154907,
        onSiteDays: 49751.22823154907,
        phaseCost: 1151668178.1708703,
      },
      decontaminationResults: {
        workDays: 11.506538772142152,
        onSiteDays: 11.975437708193304,
        phaseCost: 1248819557.3175418,
      },
      incidentCommandResults: {
        onSiteDays: 211137.21863862622,
        phaseCost: 522126950.84646106,
      },
      otherResults: {
        otherCosts: 56236878.463536076,
      },
      generalResults: {
        totalCost: 9001547031.486292,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 22830.798416189285,
        onSiteDays: 595179.1598720716,
        phaseCost: 7006334601.16464,
      },
      sourceReductionResults: {
        workDays: 8826.322276336628,
        onSiteDays: 8826.322276336628,
        phaseCost: 1374880755.008587,
      },
      decontaminationResults: {
        workDays: 19.723024962172616,
        onSiteDays: 20.29114649800843,
        phaseCost: 1068549062.1554763,
      },
      incidentCommandResults: {
        onSiteDays: 604033.7732949062,
        phaseCost: 1485937672.91018,
      },
      otherResults: {
        otherCosts: 152048161.7006631,
      },
      generalResults: {
        totalCost: 11087750252.939547,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 27352.405604072293,
          onSiteDays: 158660.01644845778,
          phaseCost: 2881665889.8822813,
        },
        sourceReductionResults: {
          workDays: 140.06686205900598,
          onSiteDays: 140.06686205900598,
          phaseCost: 27557128.965005253,
        },
        decontaminationResults: {
          workDays: 20.290939848704948,
          onSiteDays: 22.839208831507527,
          phaseCost: 122434389.06612074,
        },
        incidentCommandResults: {
          onSiteDays: 158830.9225193483,
          phaseCost: 388593587.4869978,
        },
        otherResults: {
          otherCosts: 29906946.18771898,
        },
        generalResults: {
          totalCost: 3450157941.588124,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 13930.749376380807,
          onSiteDays: 2392484.4138152692,
          phaseCost: 5908289087.073949,
        },
        sourceReductionResults: {
          workDays: 749.3584837987304,
          onSiteDays: 749.3584837987304,
          phaseCost: 41599780.427942604,
        },
        decontaminationResults: {
          workDays: 24.758430264601117,
          onSiteDays: 27.079766027182284,
          phaseCost: 489488052.547471,
        },
        incidentCommandResults: {
          onSiteDays: 2393268.852065095,
          phaseCost: 5800308462.063017,
        },
        otherResults: {
          otherCosts: 814149608.1182657,
        },
        generalResults: {
          totalCost: 13053834990.230644,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 35967.0081131609,
        onSiteDays: 794968.1205874688,
        phaseCost: 10458505638.76854,
      },
      sourceReductionResults: {
        workDays: 32140.25415705967,
        onSiteDays: 32140.25415705967,
        phaseCost: 3889569770.1078167,
      },
      decontaminationResults: {
        workDays: 20.028807772097366,
        onSiteDays: 20.787518968290538,
        phaseCost: 2266726516.611015,
      },
      incidentCommandResults: {
        onSiteDays: 827137.1622634969,
        phaseCost: 2007765801.4607737,
      },
      otherResults: {
        otherCosts: 182769149.77738136,
      },
      generalResults: {
        totalCost: 18805336876.72553,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 27581.077373112046,
        onSiteDays: 6630876.995463883,
        phaseCost: 9208200086.149326,
      },
      sourceReductionResults: {
        workDays: 23930.160153998477,
        onSiteDays: 23930.160153998477,
        phaseCost: 763664746.5664415,
      },
      decontaminationResults: {
        workDays: 20.22958810609523,
        onSiteDays: 22.714949688109325,
        phaseCost: 3348339889.6175656,
      },
      incidentCommandResults: {
        onSiteDays: 6654837.870567569,
        phaseCost: 16456369918.413464,
      },
      otherResults: {
        otherCosts: 2165296983.1184406,
      },
      generalResults: {
        totalCost: 31941871623.865234,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 11668.669490637467,
          onSiteDays: 953179.6858781194,
          phaseCost: 5817591470.556458,
        },
        sourceReductionResults: {
          workDays: 1231.7522730781288,
          onSiteDays: 1231.7522730781288,
          phaseCost: 270331670.4426933,
        },
        decontaminationResults: {
          workDays: 21.88151955811342,
          onSiteDays: 22.106870471990405,
          phaseCost: 214800207.49339944,
        },
        incidentCommandResults: {
          onSiteDays: 954441.5450216695,
          phaseCost: 2345587104.9827003,
        },
        otherResults: {
          otherCosts: 169863753.01669675,
        },
        generalResults: {
          totalCost: 8818174206.49195,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 11740.038769924484,
          onSiteDays: 486674.9733308339,
          phaseCost: 2757997003.1511993,
        },
        sourceReductionResults: {
          workDays: 5448.361551263738,
          onSiteDays: 5448.361551263738,
          phaseCost: 244839395.78400302,
        },
        decontaminationResults: {
          workDays: 21.995544625910824,
          onSiteDays: 24.033393411439235,
          phaseCost: 288363208.89697486,
        },
        incidentCommandResults: {
          onSiteDays: 492155.36827550904,
          phaseCost: 1202581082.7851295,
        },
        otherResults: {
          otherCosts: 144718819.0345116,
        },
        generalResults: {
          totalCost: 4638499509.651819,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 122026.26261673,
        onSiteDays: 1008119.6201691739,
        phaseCost: 5606627590.744043,
      },
      sourceReductionResults: {
        workDays: 1343.3442019252327,
        onSiteDays: 1343.3442019252327,
        phaseCost: 45452880.034577236,
      },
      decontaminationResults: {
        workDays: 16.10235012837275,
        onSiteDays: 18.482492841659695,
        phaseCost: 1417912571.0916252,
      },
      incidentCommandResults: {
        onSiteDays: 1009489.4468639408,
        phaseCost: 2453712529.4259963,
      },
      otherResults: {
        otherCosts: 308520634.3948421,
      },
      generalResults: {
        totalCost: 9832226205.691084,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 75576.74566649695,
        onSiteDays: 15735199.808318067,
        phaseCost: 9092925688.92012,
      },
      sourceReductionResults: {
        workDays: 8091.189354463684,
        onSiteDays: 8091.189354463684,
        phaseCost: 954661124.3113577,
      },
      decontaminationResults: {
        workDays: 14.955716955232369,
        onSiteDays: 15.013991457413415,
        phaseCost: 179066431.34427193,
      },
      incidentCommandResults: {
        onSiteDays: 15743314.01166399,
        phaseCost: 38465329259.297226,
      },
      otherResults: {
        otherCosts: 4037562064.3843856,
      },
      generalResults: {
        totalCost: 52729544568.25736,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 10485.511220087743,
          onSiteDays: 201586.0645859006,
          phaseCost: 3620712977.6039734,
        },
        sourceReductionResults: {
          workDays: 1398.9317085870996,
          onSiteDays: 1398.9317085870996,
          phaseCost: 435442669.85868376,
        },
        decontaminationResults: {
          workDays: 24.515177340366684,
          onSiteDays: 24.90777494779503,
          phaseCost: 1026504431.403653,
        },
        incidentCommandResults: {
          onSiteDays: 203017.9040694355,
          phaseCost: 503620549.09479845,
        },
        otherResults: {
          otherCosts: 53872193.33354883,
        },
        generalResults: {
          totalCost: 5640152821.294657,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 34387.388656946176,
          onSiteDays: 593457.3246585854,
          phaseCost: 4924282695.442455,
        },
        sourceReductionResults: {
          workDays: 5061.71087606279,
          onSiteDays: 5061.71087606279,
          phaseCost: 789073927.8161116,
        },
        decontaminationResults: {
          workDays: 16.884382290040232,
          onSiteDays: 18.607855484729598,
          phaseCost: 484515427.15582496,
        },
        incidentCommandResults: {
          onSiteDays: 598545.6433901328,
          phaseCost: 1464293878.3650756,
        },
        otherResults: {
          otherCosts: 179857265.42989093,
        },
        generalResults: {
          totalCost: 7842023194.209357,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 26266.632997210465,
        onSiteDays: 1022023.1227307715,
        phaseCost: 8487088682.326241,
      },
      sourceReductionResults: {
        workDays: 3374.5910661517614,
        onSiteDays: 3374.5910661517614,
        phaseCost: 198907418.32433575,
      },
      decontaminationResults: {
        workDays: 14.703906689468749,
        onSiteDays: 15.545438412005415,
        phaseCost: 1020592360.3423895,
      },
      incidentCommandResults: {
        onSiteDays: 1025421.2592353353,
        phaseCost: 2529963305.0296335,
      },
      otherResults: {
        otherCosts: 348276950.646767,
      },
      generalResults: {
        totalCost: 12584828716.669365,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 72579.09756788725,
        onSiteDays: 903241.7942983572,
        phaseCost: 5603149677.863138,
      },
      sourceReductionResults: {
        workDays: 32301.144295278682,
        onSiteDays: 32301.144295278682,
        phaseCost: 2516741946.1728625,
      },
      decontaminationResults: {
        workDays: 15.874520114128135,
        onSiteDays: 16.55073334685311,
        phaseCost: 1577539586.632152,
      },
      incidentCommandResults: {
        onSiteDays: 935567.4893269828,
        phaseCost: 2308761741.0562115,
      },
      otherResults: {
        otherCosts: 262477803.06114772,
      },
      generalResults: {
        totalCost: 12268670754.785513,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 18762.90526284791,
          onSiteDays: 484233.322861282,
          phaseCost: 1892096649.9338083,
        },
        sourceReductionResults: {
          workDays: 2269.7561354393433,
          onSiteDays: 2269.7561354393433,
          phaseCost: 185010042.31005093,
        },
        decontaminationResults: {
          workDays: 12.753866462445322,
          onSiteDays: 14.666382441452328,
          phaseCost: 523347584.41915,
        },
        incidentCommandResults: {
          onSiteDays: 486525.7453791628,
          phaseCost: 1177440586.5606968,
        },
        otherResults: {
          otherCosts: 115054600.07924686,
        },
        generalResults: {
          totalCost: 3892949463.3029532,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 21747.38791457004,
          onSiteDays: 447283.02138614986,
          phaseCost: 6971726075.428849,
        },
        sourceReductionResults: {
          workDays: 382.03501014049925,
          onSiteDays: 382.03501014049925,
          phaseCost: 73229091.16184714,
        },
        decontaminationResults: {
          workDays: 27.609697874311752,
          onSiteDays: 28.456072328019903,
          phaseCost: 714358016.0271163,
        },
        incidentCommandResults: {
          onSiteDays: 447701.5124686184,
          phaseCost: 1102861828.3315947,
        },
        otherResults: {
          otherCosts: 134874903.7513062,
        },
        generalResults: {
          totalCost: 8997049914.700714,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 58298.884431611645,
        onSiteDays: 307809.3807399942,
        phaseCost: 7239089568.643479,
      },
      sourceReductionResults: {
        workDays: 7853.410475629069,
        onSiteDays: 7853.410475629069,
        phaseCost: 1467567100.5092301,
      },
      decontaminationResults: {
        workDays: 16.201040532486754,
        onSiteDays: 17.6457645412641,
        phaseCost: 1242009174.5727532,
      },
      incidentCommandResults: {
        onSiteDays: 315688.43698016455,
        phaseCost: 775248394.6201056,
      },
      otherResults: {
        otherCosts: 58539868.35477106,
      },
      generalResults: {
        totalCost: 10782454106.70034,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 22085.800616773908,
        onSiteDays: 485375.2103149673,
        phaseCost: 2797125276.6701107,
      },
      sourceReductionResults: {
        workDays: 1743.5636696478382,
        onSiteDays: 1743.5636696478382,
        phaseCost: 69798439.11163926,
      },
      decontaminationResults: {
        workDays: 19.360181731721426,
        onSiteDays: 21.715710663636145,
        phaseCost: 2009677504.5944839,
      },
      incidentCommandResults: {
        onSiteDays: 487148.4896952788,
        phaseCost: 1208650337.4270215,
      },
      otherResults: {
        otherCosts: 88915619.46930596,
      },
      generalResults: {
        totalCost: 6174167177.272561,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 11079.084373442387,
          onSiteDays: 396127.4274433867,
          phaseCost: 2666470055.6055117,
        },
        sourceReductionResults: {
          workDays: 14072.596484775982,
          onSiteDays: 14072.596484775982,
          phaseCost: 948250498.7983401,
        },
        decontaminationResults: {
          workDays: 29.59831630405931,
          onSiteDays: 31.947431530791206,
          phaseCost: 940375707.4356154,
        },
        incidentCommandResults: {
          onSiteDays: 410239.9713596935,
          phaseCost: 996203445.435439,
        },
        otherResults: {
          otherCosts: 73154399.80917294,
        },
        generalResults: {
          totalCost: 5624454107.084079,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 20957.763702630116,
          onSiteDays: 1010641.6984742936,
          phaseCost: 3489701136.587722,
        },
        sourceReductionResults: {
          workDays: 2667.04813321165,
          onSiteDays: 2667.04813321165,
          phaseCost: 398527380.5192522,
        },
        decontaminationResults: {
          workDays: 17.14332363082639,
          onSiteDays: 17.99905417021342,
          phaseCost: 362616594.33787024,
        },
        incidentCommandResults: {
          onSiteDays: 1013334.7456616755,
          phaseCost: 2472018783.746741,
        },
        otherResults: {
          otherCosts: 195330127.41516447,
        },
        generalResults: {
          totalCost: 6918194022.6067505,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 47701.7294377963,
        onSiteDays: 2079276.8085856114,
        phaseCost: 6721251250.464148,
      },
      sourceReductionResults: {
        workDays: 5863.324555120063,
        onSiteDays: 5863.324555120063,
        phaseCost: 255948341.5647701,
      },
      decontaminationResults: {
        workDays: 16.535482018379376,
        onSiteDays: 17.910086080411006,
        phaseCost: 534235031.28635466,
      },
      incidentCommandResults: {
        onSiteDays: 2085166.0432268118,
        phaseCost: 5120671852.183195,
      },
      otherResults: {
        otherCosts: 451574637.38984245,
      },
      generalResults: {
        totalCost: 13083681112.88831,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 47249.76255645708,
        onSiteDays: 208841.4045776251,
        phaseCost: 2701937316.6032667,
      },
      sourceReductionResults: {
        workDays: 4092.7424243469745,
        onSiteDays: 4092.7424243469745,
        phaseCost: 1088140996.389326,
      },
      decontaminationResults: {
        workDays: 16.038169384011574,
        onSiteDays: 16.385541972561168,
        phaseCost: 525263872.67319876,
      },
      incidentCommandResults: {
        onSiteDays: 212958.53254394463,
        phaseCost: 526047064.1125051,
      },
      otherResults: {
        otherCosts: 55216700.058077015,
      },
      generalResults: {
        totalCost: 4896605949.836373,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 16955.508887870823,
          onSiteDays: 897431.811561108,
          phaseCost: 3634147529.5898924,
        },
        sourceReductionResults: {
          workDays: 1277.8906530966472,
          onSiteDays: 1277.8906530966472,
          phaseCost: 85307684.94623646,
        },
        decontaminationResults: {
          workDays: 27.15108368339741,
          onSiteDays: 29.26578133210209,
          phaseCost: 394004335.36914766,
        },
        incidentCommandResults: {
          onSiteDays: 898746.9679955367,
          phaseCost: 2220821486.8955975,
        },
        otherResults: {
          otherCosts: 265181798.82228184,
        },
        generalResults: {
          totalCost: 6599462835.623157,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 12508.863457205978,
          onSiteDays: 239191.4395123978,
          phaseCost: 4849667994.847196,
        },
        sourceReductionResults: {
          workDays: 6378.763379800531,
          onSiteDays: 6378.763379800531,
          phaseCost: 1022529991.287056,
        },
        decontaminationResults: {
          workDays: 20.94244916898721,
          onSiteDays: 23.557925841202476,
          phaseCost: 734688064.4711577,
        },
        incidentCommandResults: {
          onSiteDays: 245601.76081803953,
          phaseCost: 599498967.5716965,
        },
        otherResults: {
          otherCosts: 78779703.85244912,
        },
        generalResults: {
          totalCost: 7285164722.029555,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 66155.25983219937,
        onSiteDays: 402512.5625637658,
        phaseCost: 8124722963.215334,
      },
      sourceReductionResults: {
        workDays: 11288.888622217872,
        onSiteDays: 11288.888622217872,
        phaseCost: 2049770355.618231,
      },
      decontaminationResults: {
        workDays: 17.022833743836458,
        onSiteDays: 18.563163916013007,
        phaseCost: 1320594479.4316587,
      },
      incidentCommandResults: {
        onSiteDays: 413828.01434989966,
        phaseCost: 1022001603.0990309,
      },
      otherResults: {
        otherCosts: 100262703.28008482,
      },
      generalResults: {
        totalCost: 12617352104.64434,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 72857.68890658785,
        onSiteDays: 793191.2812338842,
        phaseCost: 4034814908.880684,
      },
      sourceReductionResults: {
        workDays: 11515.247790051837,
        onSiteDays: 11515.247790051837,
        phaseCost: 511875420.63072246,
      },
      decontaminationResults: {
        workDays: 17.897058202861125,
        onSiteDays: 19.515816227420192,
        phaseCost: 970851462.404128,
      },
      incidentCommandResults: {
        onSiteDays: 804734.0448401634,
        phaseCost: 1973319308.3903046,
      },
      otherResults: {
        otherCosts: 143352252.6583705,
      },
      generalResults: {
        totalCost: 7634213352.964209,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 19739.871494201652,
          onSiteDays: 158551.877259748,
          phaseCost: 2272372282.0391636,
        },
        sourceReductionResults: {
          workDays: 3586.0458810973887,
          onSiteDays: 3586.0458810973887,
          phaseCost: 282023262.96685845,
        },
        decontaminationResults: {
          workDays: 20.99082893086384,
          onSiteDays: 22.17171817975392,
          phaseCost: 694509846.8574238,
        },
        incidentCommandResults: {
          onSiteDays: 162168.09485902512,
          phaseCost: 397631779.1877823,
        },
        otherResults: {
          otherCosts: 29294323.59899155,
        },
        generalResults: {
          totalCost: 3675831494.6502194,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 51958.168887767024,
          onSiteDays: 1348811.4889783144,
          phaseCost: 3835858897.727873,
        },
        sourceReductionResults: {
          workDays: 1838.4724349236733,
          onSiteDays: 1838.4724349236733,
          phaseCost: 292711657.71783125,
        },
        decontaminationResults: {
          workDays: 17.80537681626281,
          onSiteDays: 19.425213634368315,
          phaseCost: 571709716.1932834,
        },
        incidentCommandResults: {
          onSiteDays: 1350677.3866268725,
          phaseCost: 3270862578.722559,
        },
        otherResults: {
          otherCosts: 274628544.141046,
        },
        generalResults: {
          totalCost: 8245771394.502592,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 21110.639379513916,
        onSiteDays: 2987590.227262019,
        phaseCost: 4307305624.427271,
      },
      sourceReductionResults: {
        workDays: 303.295859524451,
        onSiteDays: 303.295859524451,
        phaseCost: 12786974.997807797,
      },
      decontaminationResults: {
        workDays: 17.040578741822525,
        onSiteDays: 17.280462522124978,
        phaseCost: 937947527.6653626,
      },
      incidentCommandResults: {
        onSiteDays: 2987918.8035840658,
        phaseCost: 7253282900.741433,
      },
      otherResults: {
        otherCosts: 671599203.0046961,
      },
      generalResults: {
        totalCost: 13182922230.83657,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 22274.28224294761,
        onSiteDays: 478472.1217466374,
        phaseCost: 7478046694.929526,
      },
      sourceReductionResults: {
        workDays: 807.9334799576428,
        onSiteDays: 807.9334799576428,
        phaseCost: 88014060.73096037,
      },
      decontaminationResults: {
        workDays: 11.874866714904751,
        onSiteDays: 14.088518549010278,
        phaseCost: 1685804783.274927,
      },
      incidentCommandResults: {
        onSiteDays: 479302.143745144,
        phaseCost: 1178716532.5113106,
      },
      otherResults: {
        otherCosts: 154564215.91213354,
      },
      generalResults: {
        totalCost: 10585146287.358858,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 22241.510200035744,
          onSiteDays: 1394347.403036759,
          phaseCost: 5148705223.868368,
        },
        sourceReductionResults: {
          workDays: 14393.214080130256,
          onSiteDays: 14393.214080130256,
          phaseCost: 935735989.4483285,
        },
        decontaminationResults: {
          workDays: 22.597655526501512,
          onSiteDays: 24.507526331932173,
          phaseCost: 280890205.1377239,
        },
        incidentCommandResults: {
          onSiteDays: 1408773.1246432213,
          phaseCost: 3424920350.674151,
        },
        otherResults: {
          otherCosts: 249719928.26211077,
        },
        generalResults: {
          totalCost: 10039971697.390682,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 7883.500928441219,
          onSiteDays: 165664.57752394755,
          phaseCost: 3927150355.811331,
        },
        sourceReductionResults: {
          workDays: 1707.6334484293452,
          onSiteDays: 1707.6334484293452,
          phaseCost: 469799807.0164233,
        },
        decontaminationResults: {
          workDays: 15.934360163736708,
          onSiteDays: 16.54294307891814,
          phaseCost: 435073243.01978225,
        },
        incidentCommandResults: {
          onSiteDays: 167396.7539154558,
          phaseCost: 410635269.40466774,
        },
        otherResults: {
          otherCosts: 52140164.49712107,
        },
        generalResults: {
          totalCost: 5294798839.749325,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 42373.96718650205,
        onSiteDays: 1720346.4170316062,
        phaseCost: 5395632462.752737,
      },
      sourceReductionResults: {
        workDays: 3074.8975499603107,
        onSiteDays: 3074.8975499603107,
        phaseCost: 552177406.5247612,
      },
      decontaminationResults: {
        workDays: 13.657614346281068,
        onSiteDays: 14.742095372346716,
        phaseCost: 569609826.5630732,
      },
      incidentCommandResults: {
        onSiteDays: 1723444.056676939,
        phaseCost: 4238409150.8316574,
      },
      otherResults: {
        otherCosts: 504524104.5981855,
      },
      generalResults: {
        totalCost: 11260352951.270414,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 33084.83951912307,
        onSiteDays: 549069.2525576166,
        phaseCost: 9553814328.303066,
      },
      sourceReductionResults: {
        workDays: 428.235770174163,
        onSiteDays: 428.235770174163,
        phaseCost: 86751145.11418165,
      },
      decontaminationResults: {
        workDays: 16.43435949749182,
        onSiteDays: 17.980349762826307,
        phaseCost: 383958813.0806309,
      },
      incidentCommandResults: {
        onSiteDays: 549523.4686775536,
        phaseCost: 1346891554.2121675,
      },
      otherResults: {
        otherCosts: 109176202.19741915,
      },
      generalResults: {
        totalCost: 11480592042.907465,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 28585.583404592315,
          onSiteDays: 195744.7376162676,
          phaseCost: 1599917741.0217252,
        },
        sourceReductionResults: {
          workDays: 3872.2347483838557,
          onSiteDays: 3872.2347483838557,
          phaseCost: 384908499.3596537,
        },
        decontaminationResults: {
          workDays: 20.94920312099839,
          onSiteDays: 23.49987575213888,
          phaseCost: 384206460.8578661,
        },
        incidentCommandResults: {
          onSiteDays: 199648.47224040361,
          phaseCost: 490577301.54328465,
        },
        otherResults: {
          otherCosts: 38130229.37926252,
        },
        generalResults: {
          totalCost: 2897740232.1617923,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 85229.59396675233,
          onSiteDays: 715302.3994359692,
          phaseCost: 3703852610.9598446,
        },
        sourceReductionResults: {
          workDays: 580.4826325661483,
          onSiteDays: 580.4826325661483,
          phaseCost: 55662614.45475916,
        },
        decontaminationResults: {
          workDays: 23.035674577354378,
          onSiteDays: 23.83309992771435,
          phaseCost: 256007063.69739905,
        },
        incidentCommandResults: {
          onSiteDays: 715914.7151684631,
          phaseCost: 1743595108.9249039,
        },
        otherResults: {
          otherCosts: 180317877.39870715,
        },
        generalResults: {
          totalCost: 5939435275.435615,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 34562.969829525224,
        onSiteDays: 2749903.9827072746,
        phaseCost: 17778275676.427464,
      },
      sourceReductionResults: {
        workDays: 26913.189091813616,
        onSiteDays: 26913.189091813616,
        phaseCost: 2115958188.5052443,
      },
      decontaminationResults: {
        workDays: 16.596694499858817,
        onSiteDays: 19.4853057003313,
        phaseCost: 456122518.8971716,
      },
      incidentCommandResults: {
        onSiteDays: 2776844.657104789,
        phaseCost: 6800345951.626373,
      },
      otherResults: {
        otherCosts: 528151217.19875103,
      },
      generalResults: {
        totalCost: 27678853552.655003,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 99645.71825479968,
        onSiteDays: 1245307.2719328997,
        phaseCost: 5880679955.828875,
      },
      sourceReductionResults: {
        workDays: 13808.838066965232,
        onSiteDays: 13808.838066965232,
        phaseCost: 4017939995.7080574,
      },
      decontaminationResults: {
        workDays: 14.683605719516894,
        onSiteDays: 14.92902818949172,
        phaseCost: 3269096426.3693967,
      },
      incidentCommandResults: {
        onSiteDays: 1259139.0390280546,
        phaseCost: 3075003782.9754696,
      },
      otherResults: {
        otherCosts: 406932798.68105376,
      },
      generalResults: {
        totalCost: 16649652959.56285,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 18488.8378986483,
          onSiteDays: 297623.4255566534,
          phaseCost: 6499212075.891428,
        },
        sourceReductionResults: {
          workDays: 7695.039170359572,
          onSiteDays: 7695.039170359572,
          phaseCost: 1392795245.7407033,
        },
        decontaminationResults: {
          workDays: 25.005347345724083,
          onSiteDays: 27.774562430049887,
          phaseCost: 775067873.1960961,
        },
        incidentCommandResults: {
          onSiteDays: 305354.239289443,
          phaseCost: 742153589.9438231,
        },
        otherResults: {
          otherCosts: 61583288.18635206,
        },
        generalResults: {
          totalCost: 9470812072.958403,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 9214.889257957471,
          onSiteDays: 405925.36875778454,
          phaseCost: 1007963380.3554384,
        },
        sourceReductionResults: {
          workDays: 2315.8193083381175,
          onSiteDays: 2315.8193083381175,
          phaseCost: 704853989.721488,
        },
        decontaminationResults: {
          workDays: 16.166402720419317,
          onSiteDays: 18.78877854691557,
          phaseCost: 379940198.83279616,
        },
        incidentCommandResults: {
          onSiteDays: 408267.97684466955,
          phaseCost: 1004819475.221328,
        },
        otherResults: {
          otherCosts: 129317949.81146929,
        },
        generalResults: {
          totalCost: 3226894993.942519,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 41470.238846302556,
        onSiteDays: 9658044.557257758,
        phaseCost: 7033455762.765655,
      },
      sourceReductionResults: {
        workDays: 7834.136605927817,
        onSiteDays: 7834.136605927817,
        phaseCost: 676724476.3395377,
      },
      decontaminationResults: {
        workDays: 13.834479834147375,
        onSiteDays: 16.5209023862893,
        phaseCost: 1554447232.0670345,
      },
      incidentCommandResults: {
        onSiteDays: 9665903.214766072,
        phaseCost: 23769769608.08953,
      },
      otherResults: {
        otherCosts: 3266698844.513932,
      },
      generalResults: {
        totalCost: 36301095923.77569,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 34581.16929413735,
        onSiteDays: 392554.3249018979,
        phaseCost: 11869219717.117634,
      },
      sourceReductionResults: {
        workDays: 65098.3944623544,
        onSiteDays: 65098.3944623544,
        phaseCost: 1392877903.1323338,
      },
      decontaminationResults: {
        workDays: 17.205745152478514,
        onSiteDays: 18.009581425927948,
        phaseCost: 1903888833.7108302,
      },
      incidentCommandResults: {
        onSiteDays: 457678.7289456783,
        phaseCost: 1126722998.45799,
      },
      otherResults: {
        otherCosts: 119573490.26497078,
      },
      generalResults: {
        totalCost: 16412282942.68376,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7507.916311783427,
          onSiteDays: 254930.79628010376,
          phaseCost: 2734775740.1472597,
        },
        sourceReductionResults: {
          workDays: 20235.15424405738,
          onSiteDays: 20235.15424405738,
          phaseCost: 1189731435.9718862,
        },
        decontaminationResults: {
          workDays: 20.65362844235581,
          onSiteDays: 22.444822453298798,
          phaseCost: 69589329.8460662,
        },
        incidentCommandResults: {
          onSiteDays: 275196.3953466145,
          phaseCost: 668842209.0999699,
        },
        otherResults: {
          otherCosts: 70623791.1391373,
        },
        generalResults: {
          totalCost: 4733562506.204319,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 10961.127073442676,
          onSiteDays: 399979.74375137634,
          phaseCost: 1896962231.483361,
        },
        sourceReductionResults: {
          workDays: 2418.4675391649353,
          onSiteDays: 2418.4675391649353,
          phaseCost: 463369062.5291703,
        },
        decontaminationResults: {
          workDays: 26.412451709251023,
          onSiteDays: 27.43955883091305,
          phaseCost: 95889262.95192885,
        },
        incidentCommandResults: {
          onSiteDays: 402433.6508493722,
          phaseCost: 977902373.4312575,
        },
        otherResults: {
          otherCosts: 93146454.11274178,
        },
        generalResults: {
          totalCost: 3527269384.5084596,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 15483.076386320656,
        onSiteDays: 1638935.761373982,
        phaseCost: 6570851271.709111,
      },
      sourceReductionResults: {
        workDays: 3808.733946509321,
        onSiteDays: 3808.733946509321,
        phaseCost: 1401317334.163169,
      },
      decontaminationResults: {
        workDays: 18.46027899148415,
        onSiteDays: 20.49881022179006,
        phaseCost: 856235795.7278622,
      },
      incidentCommandResults: {
        onSiteDays: 1642772.9941307132,
        phaseCost: 3994978216.348379,
      },
      otherResults: {
        otherCosts: 382275131.2599675,
      },
      generalResults: {
        totalCost: 13205657749.208488,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 80262.4557226389,
        onSiteDays: 987566.8501594788,
        phaseCost: 8467031196.364342,
      },
      sourceReductionResults: {
        workDays: 3434.6076739980717,
        onSiteDays: 3434.6076739980717,
        phaseCost: 740291400.3952256,
      },
      decontaminationResults: {
        workDays: 10.51844892034271,
        onSiteDays: 13.000064529944225,
        phaseCost: 2446881523.302037,
      },
      incidentCommandResults: {
        onSiteDays: 991022.4578980069,
        phaseCost: 2449529625.0016155,
      },
      otherResults: {
        otherCosts: 193146536.45125863,
      },
      generalResults: {
        totalCost: 14296880281.514477,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 23898.897255176096,
          onSiteDays: 144228.18781896122,
          phaseCost: 2602862240.3841443,
        },
        sourceReductionResults: {
          workDays: 5135.865638898176,
          onSiteDays: 5135.865638898176,
          phaseCost: 348986551.66827047,
        },
        decontaminationResults: {
          workDays: 28.47822195279371,
          onSiteDays: 29.25485244050037,
          phaseCost: 982018501.1048946,
        },
        incidentCommandResults: {
          onSiteDays: 149401.30831029988,
          phaseCost: 364675615.86428154,
        },
        otherResults: {
          otherCosts: 37433223.34777807,
        },
        generalResults: {
          totalCost: 4335976132.3693695,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 35060.42747280971,
          onSiteDays: 447143.1631102633,
          phaseCost: 5425224719.684135,
        },
        sourceReductionResults: {
          workDays: 9189.407173828158,
          onSiteDays: 9189.407173828158,
          phaseCost: 292895475.66511774,
        },
        decontaminationResults: {
          workDays: 24.839891279777486,
          onSiteDays: 25.676408294745816,
          phaseCost: 807448635.882216,
        },
        incidentCommandResults: {
          onSiteDays: 456366.2466923862,
          phaseCost: 1132670480.1327453,
        },
        otherResults: {
          otherCosts: 155127592.9399742,
        },
        generalResults: {
          totalCost: 7813366904.304188,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 28020.19055951325,
        onSiteDays: 875896.4662996064,
        phaseCost: 8238609853.88744,
      },
      sourceReductionResults: {
        workDays: 7500.2610076371075,
        onSiteDays: 7500.2610076371075,
        phaseCost: 1663632051.7033415,
      },
      decontaminationResults: {
        workDays: 20.05810978893612,
        onSiteDays: 21.332250766533484,
        phaseCost: 236300698.15579954,
      },
      incidentCommandResults: {
        onSiteDays: 883426.0595580101,
        phaseCost: 2164135103.2524223,
      },
      otherResults: {
        otherCosts: 205759739.60186073,
      },
      generalResults: {
        totalCost: 12508437446.600864,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 27021.491904143786,
        onSiteDays: 1876871.0092037208,
        phaseCost: 5968839261.705877,
      },
      sourceReductionResults: {
        workDays: 8315.436507880879,
        onSiteDays: 8315.436507880879,
        phaseCost: 584860980.2334557,
      },
      decontaminationResults: {
        workDays: 19.72931352554106,
        onSiteDays: 21.174005111719946,
        phaseCost: 1640622841.2443993,
      },
      incidentCommandResults: {
        onSiteDays: 1885215.6197167134,
        phaseCost: 4641631477.373933,
      },
      otherResults: {
        otherCosts: 487068452.9216561,
      },
      generalResults: {
        totalCost: 13323023013.47932,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 24712.58403428112,
          onSiteDays: 352732.7300485809,
          phaseCost: 4972597801.520235,
        },
        sourceReductionResults: {
          workDays: 4343.043709431928,
          onSiteDays: 4343.043709431928,
          phaseCost: 1126189565.7441752,
        },
        decontaminationResults: {
          workDays: 19.628541954473718,
          onSiteDays: 21.204626419163453,
          phaseCost: 287080664.3545923,
        },
        incidentCommandResults: {
          onSiteDays: 357104.97838443203,
          phaseCost: 866257312.7185296,
        },
        otherResults: {
          otherCosts: 70373446.57418959,
        },
        generalResults: {
          totalCost: 7322498790.911721,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 11336.771262879825,
          onSiteDays: 262527.06086510257,
          phaseCost: 6042069221.484479,
        },
        sourceReductionResults: {
          workDays: 6239.6881345667425,
          onSiteDays: 6239.6881345667425,
          phaseCost: 931782843.679901,
        },
        decontaminationResults: {
          workDays: 14.606900088630361,
          onSiteDays: 16.923041972080956,
          phaseCost: 589610746.3323255,
        },
        incidentCommandResults: {
          onSiteDays: 268791.67204164143,
          phaseCost: 663963134.2731382,
        },
        otherResults: {
          otherCosts: 88089476.75492561,
        },
        generalResults: {
          totalCost: 8315515422.52477,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 12767.603790589841,
        onSiteDays: 849799.0513959706,
        phaseCost: 2900094478.8230705,
      },
      sourceReductionResults: {
        workDays: 14488.901988450796,
        onSiteDays: 14488.901988450796,
        phaseCost: 1076400903.721903,
      },
      decontaminationResults: {
        workDays: 26.27789359359953,
        onSiteDays: 28.336469374908244,
        phaseCost: 560996680.2624037,
      },
      incidentCommandResults: {
        onSiteDays: 864324.2898537964,
        phaseCost: 2096369881.480203,
      },
      otherResults: {
        otherCosts: 224633661.164966,
      },
      generalResults: {
        totalCost: 6858495605.452545,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 18981.004299088727,
        onSiteDays: 407428.53150336555,
        phaseCost: 6109531423.141676,
      },
      sourceReductionResults: {
        workDays: 2757.197368471968,
        onSiteDays: 2757.197368471968,
        phaseCost: 438699483.8251121,
      },
      decontaminationResults: {
        workDays: 21.197990743023805,
        onSiteDays: 22.412716063534074,
        phaseCost: 1913747816.8632567,
      },
      incidentCommandResults: {
        onSiteDays: 410216.14158790105,
        phaseCost: 1007029615.9101295,
      },
      otherResults: {
        otherCosts: 77916331.86105584,
      },
      generalResults: {
        totalCost: 9546924671.601229,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 14538.070828116031,
          onSiteDays: 476733.7459863332,
          phaseCost: 4215214367.807706,
        },
        sourceReductionResults: {
          workDays: 1031.541894040102,
          onSiteDays: 1031.541894040102,
          phaseCost: 341147258.2216144,
        },
        decontaminationResults: {
          workDays: 14.019609035462981,
          onSiteDays: 16.09202324112226,
          phaseCost: 496870115.2846546,
        },
        incidentCommandResults: {
          onSiteDays: 477789.3799036144,
          phaseCost: 1175364231.5502343,
        },
        otherResults: {
          otherCosts: 125585039.278147,
        },
        generalResults: {
          totalCost: 6354181012.142357,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 18764.676888246468,
          onSiteDays: 225155.55490479997,
          phaseCost: 2675909964.4611044,
        },
        sourceReductionResults: {
          workDays: 3367.9232270247608,
          onSiteDays: 3367.9232270247608,
          phaseCost: 592306773.4531121,
        },
        decontaminationResults: {
          workDays: 20.51184438576732,
          onSiteDays: 21.864505766626564,
          phaseCost: 987807241.0995386,
        },
        incidentCommandResults: {
          onSiteDays: 228553.34263759136,
          phaseCost: 564666006.6896904,
        },
        otherResults: {
          otherCosts: 48238716.00252062,
        },
        generalResults: {
          totalCost: 4868928701.705966,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 12556.203758895892,
        onSiteDays: 366910.07748798165,
        phaseCost: 4353750639.60467,
      },
      sourceReductionResults: {
        workDays: 861.716219084216,
        onSiteDays: 861.716219084216,
        phaseCost: 25999032.797941107,
      },
      decontaminationResults: {
        workDays: 20.197458947821858,
        onSiteDays: 20.986498082519155,
        phaseCost: 2386495676.5445085,
      },
      incidentCommandResults: {
        onSiteDays: 367800.7802051484,
        phaseCost: 889976286.3832988,
      },
      otherResults: {
        otherCosts: 92250515.5634894,
      },
      generalResults: {
        totalCost: 7748472150.893907,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 36495.30193819257,
        onSiteDays: 948700.8506632742,
        phaseCost: 14053754597.539583,
      },
      sourceReductionResults: {
        workDays: 2701.449055261665,
        onSiteDays: 2701.449055261665,
        phaseCost: 63317700.41896035,
      },
      decontaminationResults: {
        workDays: 15.887058452676763,
        onSiteDays: 18.257787741082208,
        phaseCost: 1704409552.4585924,
      },
      incidentCommandResults: {
        onSiteDays: 951428.557506277,
        phaseCost: 2334193797.540868,
      },
      otherResults: {
        otherCosts: 185783275.57402128,
      },
      generalResults: {
        totalCost: 18341458923.532024,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 10025.964235809857,
          onSiteDays: 137844.75671006873,
          phaseCost: 3704726864.13672,
        },
        sourceReductionResults: {
          workDays: 3548.5833765965876,
          onSiteDays: 3548.5833765965876,
          phaseCost: 341583785.06137353,
        },
        decontaminationResults: {
          workDays: 19.84187224433801,
          onSiteDays: 20.00636780029311,
          phaseCost: 482025872.95285535,
        },
        incidentCommandResults: {
          onSiteDays: 141421.34645446562,
          phaseCost: 345718722.1972587,
        },
        otherResults: {
          otherCosts: 35414106.83830334,
        },
        generalResults: {
          totalCost: 4909469351.186512,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 32382.148478089046,
          onSiteDays: 374764.67709836445,
          phaseCost: 1514726928.1690838,
        },
        sourceReductionResults: {
          workDays: 1064.0805336927165,
          onSiteDays: 1064.0805336927165,
          phaseCost: 40154615.389177814,
        },
        decontaminationResults: {
          workDays: 19.331203582773732,
          onSiteDays: 20.320171171641018,
          phaseCost: 1061075889.7285848,
        },
        incidentCommandResults: {
          onSiteDays: 375857.0778032288,
          phaseCost: 931476460.6646913,
        },
        otherResults: {
          otherCosts: 64962853.51009111,
        },
        generalResults: {
          totalCost: 3612396747.461629,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 48723.89918980493,
        onSiteDays: 512087.3049145639,
        phaseCost: 9006684418.038706,
      },
      sourceReductionResults: {
        workDays: 3497.7239801083824,
        onSiteDays: 3497.7239801083824,
        phaseCost: 948836369.5590787,
      },
      decontaminationResults: {
        workDays: 19.661402616803862,
        onSiteDays: 20.942068843856006,
        phaseCost: 794340546.5586827,
      },
      incidentCommandResults: {
        onSiteDays: 515613.97096351616,
        phaseCost: 1275509776.7712681,
      },
      otherResults: {
        otherCosts: 101402486.47844775,
      },
      generalResults: {
        totalCost: 12126773597.406183,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 53894.602040957136,
        onSiteDays: 499904.4889544143,
        phaseCost: 12551189930.710531,
      },
      sourceReductionResults: {
        workDays: 3021.0872003507357,
        onSiteDays: 3021.0872003507357,
        phaseCost: 132011620.56842214,
      },
      decontaminationResults: {
        workDays: 11.138431909060671,
        onSiteDays: 12.677244344883887,
        phaseCost: 874872464.0062177,
      },
      incidentCommandResults: {
        onSiteDays: 502946.25339910993,
        phaseCost: 1228393930.9167886,
      },
      otherResults: {
        otherCosts: 160665684.54331765,
      },
      generalResults: {
        totalCost: 14947133630.745277,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13211.154317398197,
          onSiteDays: 238741.7757781887,
          phaseCost: 7437276664.974344,
        },
        sourceReductionResults: {
          workDays: 2572.295502693167,
          onSiteDays: 2572.295502693167,
          phaseCost: 505516215.8465553,
        },
        decontaminationResults: {
          workDays: 20.2862719263151,
          onSiteDays: 21.931466932392553,
          phaseCost: 451651262.8480544,
        },
        incidentCommandResults: {
          onSiteDays: 241344.00274781423,
          phaseCost: 585492400.9222243,
        },
        otherResults: {
          otherCosts: 65858157.64765317,
        },
        generalResults: {
          totalCost: 9045794702.238832,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 8972.005676414394,
          onSiteDays: 378240.8698270813,
          phaseCost: 2896120815.073808,
        },
        sourceReductionResults: {
          workDays: 2383.3620648176634,
          onSiteDays: 2383.3620648176634,
          phaseCost: 724033439.6428556,
        },
        decontaminationResults: {
          workDays: 27.060871620443855,
          onSiteDays: 29.245481012213393,
          phaseCost: 98236819.41858011,
        },
        incidentCommandResults: {
          onSiteDays: 380661.4773729112,
          phaseCost: 933153655.9674654,
        },
        otherResults: {
          otherCosts: 80733025.97272895,
        },
        generalResults: {
          totalCost: 4732277756.075438,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 35229.6921320818,
        onSiteDays: 558609.9348443364,
        phaseCost: 8555420377.326075,
      },
      sourceReductionResults: {
        workDays: 1100.54695008518,
        onSiteDays: 1100.54695008518,
        phaseCost: 38341068.85171532,
      },
      decontaminationResults: {
        workDays: 20.851328273269193,
        onSiteDays: 20.947916343097557,
        phaseCost: 1217751500.0528054,
      },
      incidentCommandResults: {
        onSiteDays: 559739.4297107647,
        phaseCost: 1379099190.473865,
      },
      otherResults: {
        otherCosts: 169488037.09281546,
      },
      generalResults: {
        totalCost: 11360100173.797276,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 114890.2921673767,
        onSiteDays: 17257608.232165433,
        phaseCost: 10594296243.804356,
      },
      sourceReductionResults: {
        workDays: 15611.651175498202,
        onSiteDays: 15611.651175498202,
        phaseCost: 3893701042.3564467,
      },
      decontaminationResults: {
        workDays: 16.094170037678946,
        onSiteDays: 16.531348190626908,
        phaseCost: 273753940.9455418,
      },
      incidentCommandResults: {
        onSiteDays: 17273244.414689124,
        phaseCost: 42557384178.21613,
      },
      otherResults: {
        otherCosts: 4682927178.671714,
      },
      generalResults: {
        totalCost: 62002062583.994194,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 54752.60321965176,
          onSiteDays: 680845.4541720753,
          phaseCost: 3915895930.317175,
        },
        sourceReductionResults: {
          workDays: 1828.1726244226877,
          onSiteDays: 1828.1726244226877,
          phaseCost: 442912090.16048396,
        },
        decontaminationResults: {
          workDays: 18.997634835540698,
          onSiteDays: 21.45650286098395,
          phaseCost: 1072973815.3699878,
        },
        incidentCommandResults: {
          onSiteDays: 682703.083299359,
          phaseCost: 1687807966.20854,
        },
        otherResults: {
          otherCosts: 201119947.82958513,
        },
        generalResults: {
          totalCost: 7320709749.885772,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 9870.182206299205,
          onSiteDays: 198984.92908921634,
          phaseCost: 1424772717.7800808,
        },
        sourceReductionResults: {
          workDays: 713.4487498075753,
          onSiteDays: 713.4487498075753,
          phaseCost: 124313001.59715006,
        },
        decontaminationResults: {
          workDays: 26.028045751626614,
          onSiteDays: 28.284361196980896,
          phaseCost: 97618003.29307304,
        },
        incidentCommandResults: {
          onSiteDays: 199734.6622002209,
          phaseCost: 483188611.291227,
        },
        otherResults: {
          otherCosts: 37914030.412718244,
        },
        generalResults: {
          totalCost: 2167806364.374249,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 20403.574610200027,
        onSiteDays: 2282970.8112615137,
        phaseCost: 8936080871.569408,
      },
      sourceReductionResults: {
        workDays: 3704.155666978443,
        onSiteDays: 3704.155666978443,
        phaseCost: 911233982.4333682,
      },
      decontaminationResults: {
        workDays: 19.838793800407743,
        onSiteDays: 21.478257018019974,
        phaseCost: 1260867004.2843497,
      },
      incidentCommandResults: {
        onSiteDays: 2286704.4451855104,
        phaseCost: 5555466072.336018,
      },
      otherResults: {
        otherCosts: 569509112.6827251,
      },
      generalResults: {
        totalCost: 17233157043.30587,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 86561.98220332901,
        onSiteDays: 646479.9608261418,
        phaseCost: 11041813224.673338,
      },
      sourceReductionResults: {
        workDays: 6799.433557310323,
        onSiteDays: 6799.433557310323,
        phaseCost: 562527514.1258321,
      },
      decontaminationResults: {
        workDays: 17.629096355668523,
        onSiteDays: 17.739142631352678,
        phaseCost: 932102529.2820787,
      },
      incidentCommandResults: {
        onSiteDays: 653305.1335260834,
        phaseCost: 1598031101.258231,
      },
      otherResults: {
        otherCosts: 201828613.4770841,
      },
      generalResults: {
        totalCost: 14336302982.816563,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13505.24450030876,
          onSiteDays: 378601.6149667555,
          phaseCost: 1531449335.1914394,
        },
        sourceReductionResults: {
          workDays: 3012.877591415892,
          onSiteDays: 3012.877591415892,
          phaseCost: 257335512.946368,
        },
        decontaminationResults: {
          workDays: 16.780727140787228,
          onSiteDays: 18.850624937063696,
          phaseCost: 566457871.4727147,
        },
        incidentCommandResults: {
          onSiteDays: 381641.34318310843,
          phaseCost: 929406249.725292,
        },
        otherResults: {
          otherCosts: 78351558.11296129,
        },
        generalResults: {
          totalCost: 3363000527.448776,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 20888.883715141696,
          onSiteDays: 245858.88550068048,
          phaseCost: 6153532148.480696,
        },
        sourceReductionResults: {
          workDays: 5107.5487184250505,
          onSiteDays: 5107.5487184250505,
          phaseCost: 588693755.3732377,
        },
        decontaminationResults: {
          workDays: 23.950605824112568,
          onSiteDays: 26.03439474944826,
          phaseCost: 614399298.3445765,
        },
        incidentCommandResults: {
          onSiteDays: 251000.46861385496,
          phaseCost: 610209536.9689558,
        },
        otherResults: {
          otherCosts: 74107577.24808118,
        },
        generalResults: {
          totalCost: 8040942316.415547,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 31991.86970848762,
        onSiteDays: 393438.9262152278,
        phaseCost: 8569549357.211988,
      },
      sourceReductionResults: {
        workDays: 1849.7275449641566,
        onSiteDays: 1849.7275449641566,
        phaseCost: 452284663.0170221,
      },
      decontaminationResults: {
        workDays: 11.389776405037795,
        onSiteDays: 12.876390128833332,
        phaseCost: 461142013.74280643,
      },
      incidentCommandResults: {
        onSiteDays: 395309.53015032085,
        phaseCost: 969929689.1422744,
      },
      otherResults: {
        otherCosts: 74097852.75542198,
      },
      generalResults: {
        totalCost: 10527003575.869514,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 65748.96485813726,
        onSiteDays: 4114609.1866919026,
        phaseCost: 11738006403.073578,
      },
      sourceReductionResults: {
        workDays: 2257.3798339621253,
        onSiteDays: 2257.3798339621253,
        phaseCost: 518574880.55507123,
      },
      decontaminationResults: {
        workDays: 16.207000650979346,
        onSiteDays: 17.76386789064013,
        phaseCost: 202235601.82786673,
      },
      incidentCommandResults: {
        onSiteDays: 4116892.3303937553,
        phaseCost: 10154164167.109337,
      },
      otherResults: {
        otherCosts: 873335618.0821067,
      },
      generalResults: {
        totalCost: 23486316670.64796,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 27320.182056174595,
          onSiteDays: 336043.70275882067,
          phaseCost: 3459336155.7400284,
        },
        sourceReductionResults: {
          workDays: 983.4212514590505,
          onSiteDays: 983.4212514590505,
          phaseCost: 316102529.7907294,
        },
        decontaminationResults: {
          workDays: 22.82293401491431,
          onSiteDays: 23.190919840054335,
          phaseCost: 977370146.8056633,
        },
        incidentCommandResults: {
          onSiteDays: 337058.3149301198,
          phaseCost: 821119054.3767453,
        },
        otherResults: {
          otherCosts: 96714223.32055739,
        },
        generalResults: {
          totalCost: 5670642110.033724,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 7039.048479387874,
          onSiteDays: 204426.8854024103,
          phaseCost: 1983937440.2173178,
        },
        sourceReductionResults: {
          workDays: 79.5341037650936,
          onSiteDays: 79.5341037650936,
          phaseCost: 21461672.1298275,
        },
        decontaminationResults: {
          workDays: 18.123621662408958,
          onSiteDays: 18.444659418297157,
          phaseCost: 545092625.0094036,
        },
        incidentCommandResults: {
          onSiteDays: 204532.8641655937,
          phaseCost: 499467392.8627577,
        },
        otherResults: {
          otherCosts: 46879921.80345727,
        },
        generalResults: {
          totalCost: 3096839052.0227637,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 19762.149437402855,
        onSiteDays: 1232486.8050219645,
        phaseCost: 8992925492.264902,
      },
      sourceReductionResults: {
        workDays: 9352.579671942869,
        onSiteDays: 9352.579671942869,
        phaseCost: 416358076.18304265,
      },
      decontaminationResults: {
        workDays: 17.165782259582958,
        onSiteDays: 18.798349470318843,
        phaseCost: 1488690408.9412045,
      },
      incidentCommandResults: {
        onSiteDays: 1241866.1830433777,
        phaseCost: 3061959543.633584,
      },
      otherResults: {
        otherCosts: 251382293.50885442,
      },
      generalResults: {
        totalCost: 14211315814.531586,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 106129.99886002889,
        onSiteDays: 573957.3429538833,
        phaseCost: 7303702819.612235,
      },
      sourceReductionResults: {
        workDays: 567.2228303945195,
        onSiteDays: 567.2228303945195,
        phaseCost: 154462933.736637,
      },
      decontaminationResults: {
        workDays: 24.54706626956981,
        onSiteDays: 26.258026920784737,
        phaseCost: 2069787663.6585915,
      },
      incidentCommandResults: {
        onSiteDays: 574558.8238111987,
        phaseCost: 1397021735.2277966,
      },
      otherResults: {
        otherCosts: 168856908.35752594,
      },
      generalResults: {
        totalCost: 11093832060.592787,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 19787.01503535363,
          onSiteDays: 589682.7431406332,
          phaseCost: 4539952982.2632885,
        },
        sourceReductionResults: {
          workDays: 15722.047575048196,
          onSiteDays: 15722.047575048196,
          phaseCost: 528991737.7122952,
        },
        decontaminationResults: {
          workDays: 19.925658731471202,
          onSiteDays: 21.727290309436455,
          phaseCost: 914992830.4011436,
        },
        incidentCommandResults: {
          onSiteDays: 605434.5180059908,
          phaseCost: 1469468465.0042396,
        },
        otherResults: {
          otherCosts: 141908968.75173524,
        },
        generalResults: {
          totalCost: 7595314984.132704,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 6282.7799471560575,
          onSiteDays: 720998.8733484106,
          phaseCost: 2362790492.753319,
        },
        sourceReductionResults: {
          workDays: 2558.6767112418356,
          onSiteDays: 2558.6767112418356,
          phaseCost: 195360944.23183516,
        },
        decontaminationResults: {
          workDays: 26.418658014018703,
          onSiteDays: 27.555699286646135,
          phaseCost: 1189193723.4773374,
        },
        incidentCommandResults: {
          onSiteDays: 723593.105758939,
          phaseCost: 1786702236.9451284,
        },
        otherResults: {
          otherCosts: 145853873.47239575,
        },
        generalResults: {
          totalCost: 5679901270.880015,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 75743.5113309123,
        onSiteDays: 633142.3625215683,
        phaseCost: 6807153495.350277,
      },
      sourceReductionResults: {
        workDays: 7072.310768200859,
        onSiteDays: 7072.310768200859,
        phaseCost: 747469107.6648943,
      },
      decontaminationResults: {
        workDays: 26.8136791304717,
        onSiteDays: 27.847554567700147,
        phaseCost: 717663227.8034674,
      },
      incidentCommandResults: {
        onSiteDays: 640250.520844337,
        phaseCost: 1564064237.426109,
      },
      otherResults: {
        otherCosts: 175639963.77380347,
      },
      generalResults: {
        totalCost: 10011990032.01855,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 17488.9666473891,
        onSiteDays: 807623.1584764017,
        phaseCost: 8807319579.756298,
      },
      sourceReductionResults: {
        workDays: 25927.963734852678,
        onSiteDays: 25927.963734852678,
        phaseCost: 2001098169.2482948,
      },
      decontaminationResults: {
        workDays: 16.430407610356436,
        onSiteDays: 17.76160774700381,
        phaseCost: 578102853.9295732,
      },
      incidentCommandResults: {
        onSiteDays: 833576.8838190015,
        phaseCost: 2050232263.3375301,
      },
      otherResults: {
        otherCosts: 213413329.23975024,
      },
      generalResults: {
        totalCost: 13650166195.511446,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 8431.52028758104,
          onSiteDays: 94914.3664522844,
          phaseCost: 2854160271.3798523,
        },
        sourceReductionResults: {
          workDays: 287.35854312564317,
          onSiteDays: 287.35854312564317,
          phaseCost: 97619545.91614887,
        },
        decontaminationResults: {
          workDays: 15.521457267348062,
          onSiteDays: 17.855824228808242,
          phaseCost: 234602561.81335685,
        },
        incidentCommandResults: {
          onSiteDays: 95227.58081963885,
          phaseCost: 234163748.68344772,
        },
        otherResults: {
          otherCosts: 19358382.90813761,
        },
        generalResults: {
          totalCost: 3439904510.7009435,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 21862.4280499344,
          onSiteDays: 1850741.8973651873,
          phaseCost: 4603653035.290272,
        },
        sourceReductionResults: {
          workDays: 3008.1367966750154,
          onSiteDays: 3008.1367966750154,
          phaseCost: 1076224440.43849,
        },
        decontaminationResults: {
          workDays: 12.02339382959143,
          onSiteDays: 14.26359410496978,
          phaseCost: 235499692.5752463,
        },
        incidentCommandResults: {
          onSiteDays: 1853772.2977559671,
          phaseCost: 4560566585.395988,
        },
        otherResults: {
          otherCosts: 510994877.3896235,
        },
        generalResults: {
          totalCost: 10986938631.08962,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 29375.102039575395,
        onSiteDays: 682417.536860069,
        phaseCost: 11764623189.630234,
      },
      sourceReductionResults: {
        workDays: 10740.659625007791,
        onSiteDays: 10740.659625007791,
        phaseCost: 2295439287.586404,
      },
      decontaminationResults: {
        workDays: 16.80555420480798,
        onSiteDays: 19.77647130302537,
        phaseCost: 1509936958.0814548,
      },
      incidentCommandResults: {
        onSiteDays: 693185.9729563799,
        phaseCost: 1699205752.4865751,
      },
      otherResults: {
        otherCosts: 175280849.01420343,
      },
      generalResults: {
        totalCost: 17444486036.79887,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 26653.42500229236,
        onSiteDays: 633141.6246313666,
        phaseCost: 15925078009.625042,
      },
      sourceReductionResults: {
        workDays: 6146.628948322523,
        onSiteDays: 6146.628948322523,
        phaseCost: 650468846.2407786,
      },
      decontaminationResults: {
        workDays: 24.21692225388645,
        onSiteDays: 24.50318763626348,
        phaseCost: 3292985688.3115025,
      },
      incidentCommandResults: {
        onSiteDays: 639320.7567673253,
        phaseCost: 1582712944.6343136,
      },
      otherResults: {
        otherCosts: 115841038.5521544,
      },
      generalResults: {
        totalCost: 21567086527.363792,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 14645.884652144105,
          onSiteDays: 2110567.7056956748,
          phaseCost: 3962887958.539198,
        },
        sourceReductionResults: {
          workDays: 7621.720380602955,
          onSiteDays: 7621.720380602955,
          phaseCost: 621081848.0192608,
        },
        decontaminationResults: {
          workDays: 25.086082609623226,
          onSiteDays: 26.25230234401587,
          phaseCost: 339292830.5146138,
        },
        incidentCommandResults: {
          onSiteDays: 2118223.6783786216,
          phaseCost: 5253368392.979506,
        },
        otherResults: {
          otherCosts: 487838485.90192825,
        },
        generalResults: {
          totalCost: 10664469515.954506,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 35395.28870195668,
          onSiteDays: 264759.19007879414,
          phaseCost: 4348718313.17573,
        },
        sourceReductionResults: {
          workDays: 1411.4654188418504,
          onSiteDays: 1411.4654188418504,
          phaseCost: 88066757.75625071,
        },
        decontaminationResults: {
          workDays: 25.235390570302354,
          onSiteDays: 28.094232801137082,
          phaseCost: 1013387295.341826,
        },
        incidentCommandResults: {
          onSiteDays: 266206.7497304371,
          phaseCost: 659531408.2439837,
        },
        otherResults: {
          otherCosts: 78286976.8348732,
        },
        generalResults: {
          totalCost: 6187990751.352663,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 16090.038875072083,
        onSiteDays: 173553.49576754766,
        phaseCost: 3346314707.0345783,
      },
      sourceReductionResults: {
        workDays: 407.6609133367752,
        onSiteDays: 407.6609133367752,
        phaseCost: 53990946.21681325,
      },
      decontaminationResults: {
        workDays: 19.892659716981616,
        onSiteDays: 22.2466875422389,
        phaseCost: 1110206666.8173416,
      },
      incidentCommandResults: {
        onSiteDays: 173991.4033684267,
        phaseCost: 430375919.26714003,
      },
      otherResults: {
        otherCosts: 34282725.051355466,
      },
      generalResults: {
        totalCost: 4975170964.387229,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 100344.44165358375,
        onSiteDays: 1466555.1811567552,
        phaseCost: 9512215515.044752,
      },
      sourceReductionResults: {
        workDays: 9588.83671291157,
        onSiteDays: 9588.83671291157,
        phaseCost: 918012835.4385934,
      },
      decontaminationResults: {
        workDays: 16.436051600248565,
        onSiteDays: 18.434012063879987,
        phaseCost: 186277675.6295175,
      },
      incidentCommandResults: {
        onSiteDays: 1476170.4518817305,
        phaseCost: 3632922290.370653,
      },
      otherResults: {
        otherCosts: 383617372.0155497,
      },
      generalResults: {
        totalCost: 14633045688.499065,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 24963.18197850036,
          onSiteDays: 159112.0177003871,
          phaseCost: 1096843677.9315298,
        },
        sourceReductionResults: {
          workDays: 370.85135153471725,
          onSiteDays: 370.85135153471725,
          phaseCost: 77091467.49292375,
        },
        decontaminationResults: {
          workDays: 15.318067555157018,
          onSiteDays: 15.31840640965812,
          phaseCost: 1037265575.2411758,
        },
        incidentCommandResults: {
          onSiteDays: 159506.1874583315,
          phaseCost: 393291556.3567103,
        },
        otherResults: {
          otherCosts: 48527485.194205955,
        },
        generalResults: {
          totalCost: 2653019762.2165456,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 32390.75732190079,
          onSiteDays: 1405024.0668890926,
          phaseCost: 1352446881.4397163,
        },
        sourceReductionResults: {
          workDays: 9149.70814634203,
          onSiteDays: 9149.70814634203,
          phaseCost: 694572794.2283987,
        },
        decontaminationResults: {
          workDays: 14.064735969543628,
          onSiteDays: 15.565093155616218,
          phaseCost: 490106998.5298392,
        },
        incidentCommandResults: {
          onSiteDays: 1414197.3401285904,
          phaseCost: 3469084355.650762,
        },
        otherResults: {
          otherCosts: 465748173.72840333,
        },
        generalResults: {
          totalCost: 6471959203.57712,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 48575.79633549035,
        onSiteDays: 1963360.701798962,
        phaseCost: 4358427668.7968,
      },
      sourceReductionResults: {
        workDays: 16154.86321483458,
        onSiteDays: 16154.86321483458,
        phaseCost: 1632442027.0470982,
      },
      decontaminationResults: {
        workDays: 18.714243718356418,
        onSiteDays: 20.267849141794223,
        phaseCost: 223921975.75547272,
      },
      incidentCommandResults: {
        onSiteDays: 1979543.8328629383,
        phaseCost: 4804574703.6854,
      },
      otherResults: {
        otherCosts: 403633603.69500434,
      },
      generalResults: {
        totalCost: 11422999978.979774,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 51413.08976978619,
        onSiteDays: 542351.9644339057,
        phaseCost: 4101069723.5373764,
      },
      sourceReductionResults: {
        workDays: 216.98053614076724,
        onSiteDays: 216.98053614076724,
        phaseCost: 5179901.571560705,
      },
      decontaminationResults: {
        workDays: 17.38605112009357,
        onSiteDays: 18.245218387163526,
        phaseCost: 919430819.8781967,
      },
      incidentCommandResults: {
        onSiteDays: 542595.1901884335,
        phaseCost: 1316782094.4773946,
      },
      otherResults: {
        otherCosts: 109687487.22679012,
      },
      generalResults: {
        totalCost: 6452150026.691319,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 12027.229384886168,
          onSiteDays: 626290.5715237778,
          phaseCost: 4701309746.520616,
        },
        sourceReductionResults: {
          workDays: 4755.64294852592,
          onSiteDays: 4755.64294852592,
          phaseCost: 83229087.48174013,
        },
        decontaminationResults: {
          workDays: 23.266171175815668,
          onSiteDays: 26.18872077627776,
          phaseCost: 750631906.5563667,
        },
        incidentCommandResults: {
          onSiteDays: 631080.40319308,
          phaseCost: 1526938143.8927302,
        },
        otherResults: {
          otherCosts: 116217256.93752939,
        },
        generalResults: {
          totalCost: 7178326141.388982,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 22851.671832420026,
          onSiteDays: 1366919.5164044418,
          phaseCost: 6881707245.315729,
        },
        sourceReductionResults: {
          workDays: 14379.140724029468,
          onSiteDays: 14379.140724029468,
          phaseCost: 550851302.0901425,
        },
        decontaminationResults: {
          workDays: 20.75383710902041,
          onSiteDays: 21.300207840115814,
          phaseCost: 1118227640.5027766,
        },
        incidentCommandResults: {
          onSiteDays: 1381327.9573363112,
          phaseCost: 3365198063.517847,
        },
        otherResults: {
          otherCosts: 429135266.5343613,
        },
        generalResults: {
          totalCost: 12345119517.960855,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 22360.21033677673,
        onSiteDays: 761177.9423771524,
        phaseCost: 9350569622.160006,
      },
      sourceReductionResults: {
        workDays: 1462.7548837206605,
        onSiteDays: 1462.7548837206605,
        phaseCost: 167895264.0718209,
      },
      decontaminationResults: {
        workDays: 19.03064772301136,
        onSiteDays: 19.202120013349255,
        phaseCost: 421452398.78083557,
      },
      incidentCommandResults: {
        onSiteDays: 762667.8993808863,
        phaseCost: 1880110299.2861161,
      },
      otherResults: {
        otherCosts: 159707478.7224701,
      },
      generalResults: {
        totalCost: 11979735063.021248,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 103035.18538762651,
        onSiteDays: 761450.3769283135,
        phaseCost: 9450739207.886723,
      },
      sourceReductionResults: {
        workDays: 3402.99471016055,
        onSiteDays: 3402.99471016055,
        phaseCost: 221355269.32545638,
      },
      decontaminationResults: {
        workDays: 21.463612862039263,
        onSiteDays: 21.84253498302831,
        phaseCost: 2119342851.0602016,
      },
      incidentCommandResults: {
        onSiteDays: 764883.2141734571,
        phaseCost: 1853845210.247305,
      },
      otherResults: {
        otherCosts: 183866181.04078868,
      },
      generalResults: {
        totalCost: 13829148719.560474,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13825.352275272147,
          onSiteDays: 133399.44097593144,
          phaseCost: 7354534414.072826,
        },
        sourceReductionResults: {
          workDays: 1344.7416660163851,
          onSiteDays: 1344.7416660163851,
          phaseCost: 64325409.04435327,
        },
        decontaminationResults: {
          workDays: 15.463666977235972,
          onSiteDays: 16.653869452340036,
          phaseCost: 579674231.2765338,
        },
        incidentCommandResults: {
          onSiteDays: 134768.83651140015,
          phaseCost: 327185661.8174714,
        },
        otherResults: {
          otherCosts: 35411036.25896291,
        },
        generalResults: {
          totalCost: 8361130752.470148,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 25107.040133944596,
          onSiteDays: 309379.2331496967,
          phaseCost: 2678860251.0289526,
        },
        sourceReductionResults: {
          workDays: 511.36775239037746,
          onSiteDays: 511.36775239037746,
          phaseCost: 79602030.28460166,
        },
        decontaminationResults: {
          workDays: 21.707612250397823,
          onSiteDays: 23.339618090153582,
          phaseCost: 436426341.60878503,
        },
        incidentCommandResults: {
          onSiteDays: 309921.94052017725,
          phaseCost: 768992194.5461069,
        },
        otherResults: {
          otherCosts: 73392489.58498126,
        },
        generalResults: {
          totalCost: 4037273307.0534277,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 52022.430362369836,
        onSiteDays: 631001.3186147239,
        phaseCost: 4026759287.895101,
      },
      sourceReductionResults: {
        workDays: 8752.414030989099,
        onSiteDays: 8752.414030989099,
        phaseCost: 1222385382.3931084,
      },
      decontaminationResults: {
        workDays: 16.038707061679734,
        onSiteDays: 18.156616894564735,
        phaseCost: 1205411060.8182228,
      },
      incidentCommandResults: {
        onSiteDays: 639779.8892626074,
        phaseCost: 1576737272.8338866,
      },
      otherResults: {
        otherCosts: 130001226.8141845,
      },
      generalResults: {
        totalCost: 8161294230.754503,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 26591.203042779798,
        onSiteDays: 260604.18573364633,
        phaseCost: 5561696945.525244,
      },
      sourceReductionResults: {
        workDays: 4041.5237766663477,
        onSiteDays: 4041.5237766663477,
        phaseCost: 395196370.7211685,
      },
      decontaminationResults: {
        workDays: 16.611336249069154,
        onSiteDays: 19.249410298245355,
        phaseCost: 499340306.7598686,
      },
      incidentCommandResults: {
        onSiteDays: 264672.9589206109,
        phaseCost: 646301493.9071116,
      },
      otherResults: {
        otherCosts: 81345584.02135704,
      },
      generalResults: {
        totalCost: 7183880700.93475,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 10069.109426896666,
          onSiteDays: 272108.86241021747,
          phaseCost: 5446694495.539998,
        },
        sourceReductionResults: {
          workDays: 6328.270103850917,
          onSiteDays: 6328.270103850917,
          phaseCost: 457571474.9140901,
        },
        decontaminationResults: {
          workDays: 21.088304493131186,
          onSiteDays: 23.348908568580846,
          phaseCost: 731267566.6986098,
        },
        incidentCommandResults: {
          onSiteDays: 278468.48142263695,
          phaseCost: 684824022.8488591,
        },
        otherResults: {
          otherCosts: 83183108.07558644,
        },
        generalResults: {
          totalCost: 7403540668.077144,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 23625.05067893521,
          onSiteDays: 144475.67759506268,
          phaseCost: 1005039502.132674,
        },
        sourceReductionResults: {
          workDays: 1262.090945938897,
          onSiteDays: 1262.090945938897,
          phaseCost: 43558699.23936751,
        },
        decontaminationResults: {
          workDays: 20.710459436222553,
          onSiteDays: 21.04191730591513,
          phaseCost: 639451338.5526614,
        },
        incidentCommandResults: {
          onSiteDays: 145766.81045830747,
          phaseCost: 357518493.9461776,
        },
        otherResults: {
          otherCosts: 46843855.892245404,
        },
        generalResults: {
          totalCost: 2092411889.763126,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 45408.84571026899,
        onSiteDays: 1079963.5759282226,
        phaseCost: 2376758375.9616623,
      },
      sourceReductionResults: {
        workDays: 28322.16741567141,
        onSiteDays: 28322.16741567141,
        phaseCost: 683671731.5683779,
      },
      decontaminationResults: {
        workDays: 16.31287861529572,
        onSiteDays: 16.817611920372027,
        phaseCost: 2300838627.292947,
      },
      incidentCommandResults: {
        onSiteDays: 1108310.5609558146,
        phaseCost: 2718442832.2154074,
      },
      otherResults: {
        otherCosts: 275882526.6308533,
      },
      generalResults: {
        totalCost: 8355594093.669248,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 83756.66873197953,
        onSiteDays: 2707266.8599018157,
        phaseCost: 8888056390.41509,
      },
      sourceReductionResults: {
        workDays: 13881.81173689653,
        onSiteDays: 13881.81173689653,
        phaseCost: 1519138051.737238,
      },
      decontaminationResults: {
        workDays: 19.619227816029273,
        onSiteDays: 21.75078335794406,
        phaseCost: 2217795731.676761,
      },
      incidentCommandResults: {
        onSiteDays: 2721178.42242207,
        phaseCost: 6705547466.402842,
      },
      otherResults: {
        otherCosts: 564655826.8986113,
      },
      generalResults: {
        totalCost: 19895193467.130547,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 14205.088388366716,
          onSiteDays: 2029973.4900789727,
          phaseCost: 4861938167.651014,
        },
        sourceReductionResults: {
          workDays: 3018.368234238473,
          onSiteDays: 3018.368234238473,
          phaseCost: 730059856.4621474,
        },
        decontaminationResults: {
          workDays: 19.60439089047825,
          onSiteDays: 21.999339309520867,
          phaseCost: 204501502.01815397,
        },
        incidentCommandResults: {
          onSiteDays: 2033021.8576525208,
          phaseCost: 4954191788.335619,
        },
        otherResults: {
          otherCosts: 620405282.5143895,
        },
        generalResults: {
          totalCost: 11371096596.981323,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 14145.973002269266,
          onSiteDays: 477846.93827337015,
          phaseCost: 2896183546.322815,
        },
        sourceReductionResults: {
          workDays: 133.13754969492558,
          onSiteDays: 133.13754969492558,
          phaseCost: 23757909.079204462,
        },
        decontaminationResults: {
          workDays: 20.279732995964523,
          onSiteDays: 21.848867740446902,
          phaseCost: 1138692075.3802958,
        },
        incidentCommandResults: {
          onSiteDays: 478009.9246908055,
          phaseCost: 1166516780.8639145,
        },
        otherResults: {
          otherCosts: 108146763.89892505,
        },
        generalResults: {
          totalCost: 5333297075.545155,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 9278.289937593272,
        onSiteDays: 619065.6528892422,
        phaseCost: 3707712196.111932,
      },
      sourceReductionResults: {
        workDays: 5711.071127672826,
        onSiteDays: 5711.071127672826,
        phaseCost: 1234692909.0665994,
      },
      decontaminationResults: {
        workDays: 18.22601588098938,
        onSiteDays: 18.557509990538822,
        phaseCost: 1382639466.4930828,
      },
      incidentCommandResults: {
        onSiteDays: 624803.2815269055,
        phaseCost: 1535135891.3190289,
      },
      otherResults: {
        otherCosts: 208910932.1388801,
      },
      generalResults: {
        totalCost: 8069091395.129523,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 26714.71769314831,
        onSiteDays: 1103215.947928559,
        phaseCost: 14148512774.089691,
      },
      sourceReductionResults: {
        workDays: 7243.607708221749,
        onSiteDays: 7243.607708221749,
        phaseCost: 871810662.5922679,
      },
      decontaminationResults: {
        workDays: 15.32407821093781,
        onSiteDays: 15.69097689834679,
        phaseCost: 2008139548.0904737,
      },
      incidentCommandResults: {
        onSiteDays: 1110483.2466136792,
        phaseCost: 2686441627.907815,
      },
      otherResults: {
        otherCosts: 347927079.06525064,
      },
      generalResults: {
        totalCost: 20062831691.7455,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 37063.88490882241,
          onSiteDays: 923094.8651725878,
          phaseCost: 2798095971.8633432,
        },
        sourceReductionResults: {
          workDays: 2984.047067762941,
          onSiteDays: 2984.047067762941,
          phaseCost: 264834004.50127426,
        },
        decontaminationResults: {
          workDays: 22.009420025630252,
          onSiteDays: 23.764728526064363,
          phaseCost: 750906431.8770863,
        },
        incidentCommandResults: {
          onSiteDays: 926110.6769688769,
          phaseCost: 2279488240.304758,
        },
        otherResults: {
          otherCosts: 213529035.69264123,
        },
        generalResults: {
          totalCost: 6306853684.239102,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 5160.728512483746,
          onSiteDays: 423397.1326155299,
          phaseCost: 1644541195.3434076,
        },
        sourceReductionResults: {
          workDays: 12063.093689424271,
          onSiteDays: 12063.093689424271,
          phaseCost: 1407987012.7423773,
        },
        decontaminationResults: {
          workDays: 16.123954161564807,
          onSiteDays: 17.640647512078434,
          phaseCost: 1028042636.939949,
        },
        incidentCommandResults: {
          onSiteDays: 435485.86695246625,
          phaseCost: 1062609158.7018402,
        },
        otherResults: {
          otherCosts: 128444562.83258675,
        },
        generalResults: {
          totalCost: 5271624566.560161,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 29664.647204695826,
        onSiteDays: 629773.7573297346,
        phaseCost: 5620499179.720678,
      },
      sourceReductionResults: {
        workDays: 2346.974035201792,
        onSiteDays: 2346.974035201792,
        phaseCost: 215478627.14574754,
      },
      decontaminationResults: {
        workDays: 15.792473704040162,
        onSiteDays: 18.494773355660676,
        phaseCost: 951835791.3833455,
      },
      incidentCommandResults: {
        onSiteDays: 632147.2261382921,
        phaseCost: 1555860411.1105607,
      },
      otherResults: {
        otherCosts: 115974002.63945337,
      },
      generalResults: {
        totalCost: 8459648011.999784,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 77976.59695509062,
        onSiteDays: 1638971.3791956396,
        phaseCost: 8656284441.808788,
      },
      sourceReductionResults: {
        workDays: 304.5650129799224,
        onSiteDays: 304.5650129799224,
        phaseCost: 10068704.062318254,
      },
      decontaminationResults: {
        workDays: 17.342248538355868,
        onSiteDays: 18.338754912917214,
        phaseCost: 1788726541.5326083,
      },
      incidentCommandResults: {
        onSiteDays: 1639302.2829635325,
        phaseCost: 4008906503.4991207,
      },
      otherResults: {
        otherCosts: 524100546.1189842,
      },
      generalResults: {
        totalCost: 14988086737.02182,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 14593.005035716702,
          onSiteDays: 808569.2660894545,
          phaseCost: 5806556667.791082,
        },
        sourceReductionResults: {
          workDays: 4727.676795505232,
          onSiteDays: 4727.676795505232,
          phaseCost: 797448583.4402188,
        },
        decontaminationResults: {
          workDays: 16.323824786190833,
          onSiteDays: 17.358580489493576,
          phaseCost: 201455709.86552483,
        },
        incidentCommandResults: {
          onSiteDays: 813322.3014654493,
          phaseCost: 1991150882.0736825,
        },
        otherResults: {
          otherCosts: 188143003.18829197,
        },
        generalResults: {
          totalCost: 8984754846.3588,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 19217.109669904126,
          onSiteDays: 572701.5824506393,
          phaseCost: 6018997729.336559,
        },
        sourceReductionResults: {
          workDays: 2922.816524554499,
          onSiteDays: 2922.816524554499,
          phaseCost: 150655214.06598228,
        },
        decontaminationResults: {
          workDays: 22.166700996497344,
          onSiteDays: 23.018888351046222,
          phaseCost: 980948241.4896175,
        },
        incidentCommandResults: {
          onSiteDays: 575655.4178635449,
          phaseCost: 1399701220.7344606,
        },
        otherResults: {
          otherCosts: 104757296.62244116,
        },
        generalResults: {
          totalCost: 8655059702.24906,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 12181.904842685162,
        onSiteDays: 1002970.7232981034,
        phaseCost: 3457539572.329542,
      },
      sourceReductionResults: {
        workDays: 3708.623700700312,
        onSiteDays: 3708.623700700312,
        phaseCost: 798162722.0759668,
      },
      decontaminationResults: {
        workDays: 16.840049411365776,
        onSiteDays: 17.392404330287224,
        phaseCost: 723651088.7550184,
      },
      incidentCommandResults: {
        onSiteDays: 1006704.7394031341,
        phaseCost: 2439271750.716527,
      },
      otherResults: {
        otherCosts: 255506789.9314357,
      },
      generalResults: {
        totalCost: 7674131923.80849,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 71886.4351200796,
        onSiteDays: 256109.58438476012,
        phaseCost: 4971336491.81304,
      },
      sourceReductionResults: {
        workDays: 16835.862317715135,
        onSiteDays: 16835.862317715135,
        phaseCost: 2772602465.251213,
      },
      decontaminationResults: {
        workDays: 20.441740236115116,
        onSiteDays: 22.43187555750643,
        phaseCost: 1886424638.5160058,
      },
      incidentCommandResults: {
        onSiteDays: 272975.8785780328,
        phaseCost: 667523455.5141159,
      },
      otherResults: {
        otherCosts: 61409369.146305814,
      },
      generalResults: {
        totalCost: 10359296420.24068,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 16861.27931737862,
          onSiteDays: 277939.947955586,
          phaseCost: 5377131608.439154,
        },
        sourceReductionResults: {
          workDays: 796.4988282983126,
          onSiteDays: 796.4988282983126,
          phaseCost: 159141594.8216325,
        },
        decontaminationResults: {
          workDays: 17.47830279787963,
          onSiteDays: 19.206205975777983,
          phaseCost: 591741263.8170679,
        },
        incidentCommandResults: {
          onSiteDays: 278763.6529898601,
          phaseCost: 687957704.9622171,
        },
        otherResults: {
          otherCosts: 63144777.444716066,
        },
        generalResults: {
          totalCost: 6879116949.484788,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 16326.805610211635,
          onSiteDays: 1187317.8892874462,
          phaseCost: 7234287467.238312,
        },
        sourceReductionResults: {
          workDays: 495.2418310598698,
          onSiteDays: 495.2418310598698,
          phaseCost: 74377619.12393561,
        },
        decontaminationResults: {
          workDays: 17.750356045260645,
          onSiteDays: 18.83558135289596,
          phaseCost: 500459087.50434655,
        },
        incidentCommandResults: {
          onSiteDays: 1187839.966699859,
          phaseCost: 2939043256.877143,
        },
        otherResults: {
          otherCosts: 274830260.4938672,
        },
        generalResults: {
          totalCost: 11022997691.237604,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 50689.17007461893,
        onSiteDays: 2165357.736496076,
        phaseCost: 4535379293.423866,
      },
      sourceReductionResults: {
        workDays: 20053.507323556885,
        onSiteDays: 20053.507323556885,
        phaseCost: 1364894369.2689433,
      },
      decontaminationResults: {
        workDays: 28.39177560023772,
        onSiteDays: 29.822010554098995,
        phaseCost: 2815730275.070414,
      },
      incidentCommandResults: {
        onSiteDays: 2185449.065830187,
        phaseCost: 5380126011.931482,
      },
      otherResults: {
        otherCosts: 630589440.5724045,
      },
      generalResults: {
        totalCost: 14726719390.26711,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 34855.84407553704,
        onSiteDays: 864972.8405057999,
        phaseCost: 6981280281.747541,
      },
      sourceReductionResults: {
        workDays: 2344.121684438153,
        onSiteDays: 2344.121684438153,
        phaseCost: 631321432.137046,
      },
      decontaminationResults: {
        workDays: 15.717627934114454,
        onSiteDays: 17.382401564946026,
        phaseCost: 3200064264.0833583,
      },
      incidentCommandResults: {
        onSiteDays: 867342.344591803,
        phaseCost: 2145667171.8234627,
      },
      otherResults: {
        otherCosts: 175475317.5326369,
      },
      generalResults: {
        totalCost: 13133808467.324045,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 11816.580627107738,
          onSiteDays: 1137609.790396333,
          phaseCost: 2807284443.566245,
        },
        sourceReductionResults: {
          workDays: 1206.7934815652754,
          onSiteDays: 1206.7934815652754,
          phaseCost: 94862187.36632016,
        },
        decontaminationResults: {
          workDays: 23.928434793355045,
          onSiteDays: 26.113828671889806,
          phaseCost: 1092925024.1040165,
        },
        incidentCommandResults: {
          onSiteDays: 1138850.6977065702,
          phaseCost: 2762590073.4061294,
        },
        otherResults: {
          otherCosts: 362850308.43178767,
        },
        generalResults: {
          totalCost: 7120512036.874498,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 18859.256338280426,
          onSiteDays: 285515.07392662455,
          phaseCost: 7261333891.616634,
        },
        sourceReductionResults: {
          workDays: 3252.7568353950414,
          onSiteDays: 3252.7568353950414,
          phaseCost: 797155209.061973,
        },
        decontaminationResults: {
          workDays: 22.062304251376148,
          onSiteDays: 23.832505746007087,
          phaseCost: 1322595085.9126828,
        },
        incidentCommandResults: {
          onSiteDays: 288799.6632677656,
          phaseCost: 702997216.9729527,
        },
        otherResults: {
          otherCosts: 64735011.85170814,
        },
        generalResults: {
          totalCost: 10148816415.415949,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 42411.13274882069,
        onSiteDays: 470283.3429610154,
        phaseCost: 7140277288.733657,
      },
      sourceReductionResults: {
        workDays: 3356.019241585033,
        onSiteDays: 3356.019241585033,
        phaseCost: 242372818.02036324,
      },
      decontaminationResults: {
        workDays: 23.99838367290757,
        onSiteDays: 26.034733551329634,
        phaseCost: 1647285588.7704515,
      },
      incidentCommandResults: {
        onSiteDays: 473673.3969361518,
        phaseCost: 1175729124.1734169,
      },
      otherResults: {
        otherCosts: 113357321.89380717,
      },
      generalResults: {
        totalCost: 10319022141.591694,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 141051.21851923704,
        onSiteDays: 8445292.719635535,
        phaseCost: 8852870775.640041,
      },
      sourceReductionResults: {
        workDays: 3863.167530678979,
        onSiteDays: 3863.167530678979,
        phaseCost: 115526935.97807766,
      },
      decontaminationResults: {
        workDays: 20.5594489340576,
        onSiteDays: 22.278039841278932,
        phaseCost: 1928231028.2031708,
      },
      incidentCommandResults: {
        onSiteDays: 8449186.165206054,
        phaseCost: 20805577720.582848,
      },
      otherResults: {
        otherCosts: 1898279783.6699703,
      },
      generalResults: {
        totalCost: 33600486244.07411,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 41504.94845229085,
          onSiteDays: 605749.1316072347,
          phaseCost: 3207244913.933404,
        },
        sourceReductionResults: {
          workDays: 2067.382247675951,
          onSiteDays: 2067.382247675951,
          phaseCost: 428694905.570071,
        },
        decontaminationResults: {
          workDays: 24.035739931751912,
          onSiteDays: 24.938625205992402,
          phaseCost: 1204314472.4848604,
        },
        incidentCommandResults: {
          onSiteDays: 607849.4524801166,
          phaseCost: 1482855342.1354012,
        },
        otherResults: {
          otherCosts: 183186450.7149856,
        },
        generalResults: {
          totalCost: 6506296084.838723,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 10314.252678460598,
          onSiteDays: 192780.4448105032,
          phaseCost: 1145953586.3973453,
        },
        sourceReductionResults: {
          workDays: 337.5371498712793,
          onSiteDays: 337.5371498712793,
          phaseCost: 77291847.51647702,
        },
        decontaminationResults: {
          workDays: 23.645986029795832,
          onSiteDays: 24.551835955249107,
          phaseCost: 57200492.68021068,
        },
        incidentCommandResults: {
          onSiteDays: 193150.53379632972,
          phaseCost: 467159774.05651444,
        },
        otherResults: {
          otherCosts: 44777668.01366917,
        },
        generalResults: {
          totalCost: 1792383368.6642168,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 49528.144609755895,
        onSiteDays: 495684.64115416596,
        phaseCost: 3447864936.526486,
      },
      sourceReductionResults: {
        workDays: 7928.713779475053,
        onSiteDays: 7928.713779475053,
        phaseCost: 374369399.14279103,
      },
      decontaminationResults: {
        workDays: 24.86014741306662,
        onSiteDays: 27.073929261666237,
        phaseCost: 2109650969.688657,
      },
      incidentCommandResults: {
        onSiteDays: 503648.4288629027,
        phaseCost: 1245543041.265758,
      },
      otherResults: {
        otherCosts: 99818227.72583881,
      },
      generalResults: {
        totalCost: 7277246574.34953,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 18505.349936875467,
        onSiteDays: 153813.074691918,
        phaseCost: 3049559886.5734897,
      },
      sourceReductionResults: {
        workDays: 988.3766423832247,
        onSiteDays: 988.3766423832247,
        phaseCost: 310950391.8181919,
      },
      decontaminationResults: {
        workDays: 22.09347271665313,
        onSiteDays: 23.3121170881931,
        phaseCost: 3080729267.0712843,
      },
      incidentCommandResults: {
        onSiteDays: 154832.76345138942,
        phaseCost: 376880424.95907474,
      },
      otherResults: {
        otherCosts: 48029675.75260774,
      },
      generalResults: {
        totalCost: 6866149646.174648,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 10872.290847761025,
          onSiteDays: 705605.5714912998,
          phaseCost: 5206924949.578916,
        },
        sourceReductionResults: {
          workDays: 10679.365371489237,
          onSiteDays: 10679.365371489237,
          phaseCost: 929972679.4826965,
        },
        decontaminationResults: {
          workDays: 20.36678691705847,
          onSiteDays: 22.636615675090958,
          phaseCost: 530662421.68918085,
        },
        incidentCommandResults: {
          onSiteDays: 716315.573478464,
          phaseCost: 1760475726.0902305,
        },
        otherResults: {
          otherCosts: 123504473.65440953,
        },
        generalResults: {
          totalCost: 8551540250.495434,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 20126.683702826886,
          onSiteDays: 332177.1139554975,
          phaseCost: 4222451837.541883,
        },
        sourceReductionResults: {
          workDays: 803.0926383573511,
          onSiteDays: 803.0926383573511,
          phaseCost: 146044325.7154301,
        },
        decontaminationResults: {
          workDays: 22.815714107550612,
          onSiteDays: 24.036890272758175,
          phaseCost: 580072715.3630645,
        },
        incidentCommandResults: {
          onSiteDays: 333012.2434841276,
          phaseCost: 814581835.2610304,
        },
        otherResults: {
          otherCosts: 97307213.12169997,
        },
        generalResults: {
          totalCost: 5860457927.003108,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 51608.859500975595,
        onSiteDays: 16450937.899482833,
        phaseCost: 7688147898.461842,
      },
      sourceReductionResults: {
        workDays: 1968.175156981455,
        onSiteDays: 1968.175156981455,
        phaseCost: 425584736.3512272,
      },
      decontaminationResults: {
        workDays: 18.231536113478136,
        onSiteDays: 18.633122888075448,
        phaseCost: 2737671466.6285768,
      },
      incidentCommandResults: {
        onSiteDays: 16452932.707762701,
        phaseCost: 39894947128.44665,
      },
      otherResults: {
        otherCosts: 3099935628.0462604,
      },
      generalResults: {
        totalCost: 53846286857.93455,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 59864.08330588063,
        onSiteDays: 10764529.315707508,
        phaseCost: 6115140293.931633,
      },
      sourceReductionResults: {
        workDays: 32467.81383784314,
        onSiteDays: 32467.81383784314,
        phaseCost: 1841085804.4935982,
      },
      decontaminationResults: {
        workDays: 19.035560401164823,
        onSiteDays: 19.48962175368555,
        phaseCost: 701332186.8349469,
      },
      incidentCommandResults: {
        onSiteDays: 10797024.619167104,
        phaseCost: 26458623905.812656,
      },
      otherResults: {
        otherCosts: 3189936725.043353,
      },
      generalResults: {
        totalCost: 38306118916.11618,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 28908.429859682477,
          onSiteDays: 614709.5988052177,
          phaseCost: 4460306983.011089,
        },
        sourceReductionResults: {
          workDays: 2041.1709582481901,
          onSiteDays: 2041.1709582481901,
          phaseCost: 207083603.31126747,
        },
        decontaminationResults: {
          workDays: 10.36970010338577,
          onSiteDays: 11.962516071266148,
          phaseCost: 444074572.5385068,
        },
        incidentCommandResults: {
          onSiteDays: 616770.7322795371,
          phaseCost: 1521820208.6885095,
        },
        otherResults: {
          otherCosts: 141869948.76454484,
        },
        generalResults: {
          totalCost: 6775155316.313918,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 10320.229210337475,
          onSiteDays: 462892.58379674004,
          phaseCost: 3131952294.1477165,
        },
        sourceReductionResults: {
          workDays: 14366.15652886129,
          onSiteDays: 14366.15652886129,
          phaseCost: 403420204.54666716,
        },
        decontaminationResults: {
          workDays: 25.322525303653098,
          onSiteDays: 26.269087525612928,
          phaseCost: 608423890.0538331,
        },
        incidentCommandResults: {
          onSiteDays: 477293.0094131269,
          phaseCost: 1155746526.0678494,
        },
        otherResults: {
          otherCosts: 141112688.80880263,
        },
        generalResults: {
          totalCost: 5440655603.624868,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 10316.242863595106,
        onSiteDays: 146061.17150598328,
        phaseCost: 2302024149.6293435,
      },
      sourceReductionResults: {
        workDays: 20360.900493379006,
        onSiteDays: 20360.900493379006,
        phaseCost: 1669287377.4899383,
      },
      decontaminationResults: {
        workDays: 15.913279824404343,
        onSiteDays: 18.557384333703055,
        phaseCost: 180695545.73689485,
      },
      incidentCommandResults: {
        onSiteDays: 166448.62938369598,
        phaseCost: 403389892.24875116,
      },
      otherResults: {
        otherCosts: 45582514.46100016,
      },
      generalResults: {
        totalCost: 4600979479.5659275,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 58899.19041592307,
        onSiteDays: 362242.2714068426,
        phaseCost: 2996246455.430553,
      },
      sourceReductionResults: {
        workDays: 20745.998221832444,
        onSiteDays: 20745.998221832444,
        phaseCost: 1519726654.2101874,
      },
      decontaminationResults: {
        workDays: 16.922456478914818,
        onSiteDays: 17.263863217845525,
        phaseCost: 928155558.6192819,
      },
      incidentCommandResults: {
        onSiteDays: 383013.5334918929,
        phaseCost: 939140814.368544,
      },
      otherResults: {
        otherCosts: 89219244.18601674,
      },
      generalResults: {
        totalCost: 6472488726.814583,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 21818.6761688037,
          onSiteDays: 1014681.2977574466,
          phaseCost: 4776964000.174999,
        },
        sourceReductionResults: {
          workDays: 5995.569069687099,
          onSiteDays: 5995.569069687099,
          phaseCost: 470942687.4988301,
        },
        decontaminationResults: {
          workDays: 16.1403031996778,
          onSiteDays: 16.279676189944073,
          phaseCost: 117069898.32739976,
        },
        incidentCommandResults: {
          onSiteDays: 1020701.1465033237,
          phaseCost: 2499679866.682892,
        },
        otherResults: {
          otherCosts: 288315830.56447077,
        },
        generalResults: {
          totalCost: 8152972283.248592,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 27502.716060336705,
          onSiteDays: 176362.35496381417,
          phaseCost: 1894212923.4904356,
        },
        sourceReductionResults: {
          workDays: 298.9366959893246,
          onSiteDays: 298.9366959893246,
          phaseCost: 51377157.485226974,
        },
        decontaminationResults: {
          workDays: 17.979635039572518,
          onSiteDays: 18.329889075674554,
          phaseCost: 234215565.8379971,
        },
        incidentCommandResults: {
          onSiteDays: 176687.6215488792,
          phaseCost: 436537574.55782604,
        },
        otherResults: {
          otherCosts: 47875967.51558093,
        },
        generalResults: {
          totalCost: 2664219188.887067,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 25953.15359597138,
        onSiteDays: 15588966.707964165,
        phaseCost: 4217942749.150546,
      },
      sourceReductionResults: {
        workDays: 4730.726010588114,
        onSiteDays: 4730.726010588114,
        phaseCost: 641269494.4918524,
      },
      decontaminationResults: {
        workDays: 15.330834811397558,
        onSiteDays: 15.710603452918727,
        phaseCost: 1664101435.647023,
      },
      incidentCommandResults: {
        onSiteDays: 15593721.144578207,
        phaseCost: 38497220224.809265,
      },
      otherResults: {
        otherCosts: 5254514154.922067,
      },
      generalResults: {
        totalCost: 50275048059.02075,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 35190.64138229467,
        onSiteDays: 4101702.143780066,
        phaseCost: 6388371358.317183,
      },
      sourceReductionResults: {
        workDays: 7763.853083895257,
        onSiteDays: 7763.853083895257,
        phaseCost: 3137906834.878737,
      },
      decontaminationResults: {
        workDays: 17.11922058023494,
        onSiteDays: 17.726974456740304,
        phaseCost: 2552255184.0212555,
      },
      incidentCommandResults: {
        onSiteDays: 4109491.723838418,
        phaseCost: 10003750827.626114,
      },
      otherResults: {
        otherCosts: 864213606.8001543,
      },
      generalResults: {
        totalCost: 22946497811.643444,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 32515.48068011918,
          onSiteDays: 346674.692629377,
          phaseCost: 6048878742.299196,
        },
        sourceReductionResults: {
          workDays: 680.43657959462,
          onSiteDays: 680.43657959462,
          phaseCost: 107554972.34422308,
        },
        decontaminationResults: {
          workDays: 24.085364908465504,
          onSiteDays: 26.092926124830946,
          phaseCost: 438101268.4011754,
        },
        incidentCommandResults: {
          onSiteDays: 347389.22213509644,
          phaseCost: 840359187.4323926,
        },
        otherResults: {
          otherCosts: 63769363.57392427,
        },
        generalResults: {
          totalCost: 7498663534.050912,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 12149.226823960005,
          onSiteDays: 158457.36279910366,
          phaseCost: 4260601626.2559824,
        },
        sourceReductionResults: {
          workDays: 522.1577471511238,
          onSiteDays: 522.1577471511238,
          phaseCost: 25618467.49461095,
        },
        decontaminationResults: {
          workDays: 18.29916070594898,
          onSiteDays: 20.357724273427788,
          phaseCost: 819644864.8975146,
        },
        incidentCommandResults: {
          onSiteDays: 159007.87827052822,
          phaseCost: 394120503.84122473,
        },
        otherResults: {
          otherCosts: 46700674.808422744,
        },
        generalResults: {
          totalCost: 5546686137.297755,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 7132.139502145732,
        onSiteDays: 95058.17455887559,
        phaseCost: 3381547753.96723,
      },
      sourceReductionResults: {
        workDays: 822.1462998721582,
        onSiteDays: 822.1462998721582,
        phaseCost: 322807364.9021221,
      },
      decontaminationResults: {
        workDays: 21.336713122748005,
        onSiteDays: 23.56991418417774,
        phaseCost: 2471589472.688356,
      },
      incidentCommandResults: {
        onSiteDays: 95911.89077293192,
        phaseCost: 236151310.254498,
      },
      otherResults: {
        otherCosts: 25279006.67030851,
      },
      generalResults: {
        totalCost: 6437374908.482514,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 24599.48142093944,
        onSiteDays: 1260346.8020340046,
        phaseCost: 8728115609.328789,
      },
      sourceReductionResults: {
        workDays: 8162.505864540684,
        onSiteDays: 8162.505864540684,
        phaseCost: 1110744404.8528929,
      },
      decontaminationResults: {
        workDays: 16.845026251591047,
        onSiteDays: 19.3012963215125,
        phaseCost: 244859039.7581823,
      },
      incidentCommandResults: {
        onSiteDays: 1268536.6091948666,
        phaseCost: 3082362680.4996223,
      },
      otherResults: {
        otherCosts: 378392570.82918817,
      },
      generalResults: {
        totalCost: 13544474305.268675,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 21106.82530584283,
          onSiteDays: 1120182.5324247065,
          phaseCost: 1867554176.1698923,
        },
        sourceReductionResults: {
          workDays: 4375.2122883548345,
          onSiteDays: 4375.2122883548345,
          phaseCost: 584598364.7555188,
        },
        decontaminationResults: {
          workDays: 25.937047893865277,
          onSiteDays: 26.135799822894807,
          phaseCost: 791917647.8483714,
        },
        incidentCommandResults: {
          onSiteDays: 1124591.8805128841,
          phaseCost: 2787275356.7363076,
        },
        otherResults: {
          otherCosts: 374995271.769665,
        },
        generalResults: {
          totalCost: 6406340817.279755,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 5802.372936101083,
          onSiteDays: 361194.44858584815,
          phaseCost: 1614465606.4968433,
        },
        sourceReductionResults: {
          workDays: 1723.9680918147756,
          onSiteDays: 1723.9680918147756,
          phaseCost: 258987588.74338567,
        },
        decontaminationResults: {
          workDays: 16.088188093176157,
          onSiteDays: 17.182527923533353,
          phaseCost: 395973915.5107983,
        },
        incidentCommandResults: {
          onSiteDays: 362943.5992055865,
          phaseCost: 888704668.4707882,
        },
        otherResults: {
          otherCosts: 99525584.36932474,
        },
        generalResults: {
          totalCost: 3257657363.5911407,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 22579.586374678995,
        onSiteDays: 1067107.8105595028,
        phaseCost: 5121307367.831773,
      },
      sourceReductionResults: {
        workDays: 3832.5191163088584,
        onSiteDays: 3832.5191163088584,
        phaseCost: 230691099.98973528,
      },
      decontaminationResults: {
        workDays: 22.110580805016355,
        onSiteDays: 22.84270224134501,
        phaseCost: 1432344687.2938743,
      },
      incidentCommandResults: {
        onSiteDays: 1070971.172378053,
        phaseCost: 2638080427.3752775,
      },
      otherResults: {
        otherCosts: 335610651.6224509,
      },
      generalResults: {
        totalCost: 9758034234.113113,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 22357.588177852842,
        onSiteDays: 761443.3362586137,
        phaseCost: 8983885139.930298,
      },
      sourceReductionResults: {
        workDays: 15384.656446959287,
        onSiteDays: 15384.656446959287,
        phaseCost: 2252341246.0195274,
      },
      decontaminationResults: {
        workDays: 15.440668102223581,
        onSiteDays: 17.789468862300147,
        phaseCost: 1329705959.1997283,
      },
      incidentCommandResults: {
        onSiteDays: 776853.7821744353,
        phaseCost: 1903692299.484281,
      },
      otherResults: {
        otherCosts: 238827897.21893698,
      },
      generalResults: {
        totalCost: 14708452541.852772,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 11475.12150049045,
          onSiteDays: 114037.4805969534,
          phaseCost: 3522172110.2624445,
        },
        sourceReductionResults: {
          workDays: 487.55265466144647,
          onSiteDays: 487.55265466144647,
          phaseCost: 11298149.506683093,
        },
        decontaminationResults: {
          workDays: 14.81991305686997,
          onSiteDays: 16.250510101963417,
          phaseCost: 103811348.3825175,
        },
        incidentCommandResults: {
          onSiteDays: 114549.28376171681,
          phaseCost: 278070003.99568474,
        },
        otherResults: {
          otherCosts: 35982035.614081934,
        },
        generalResults: {
          totalCost: 3951333647.761411,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 6623.892542055727,
          onSiteDays: 1959208.9945205953,
          phaseCost: 1741466232.0727868,
        },
        sourceReductionResults: {
          workDays: 1388.8034133355522,
          onSiteDays: 1388.8034133355522,
          phaseCost: 141000839.15701872,
        },
        decontaminationResults: {
          workDays: 25.306610995276504,
          onSiteDays: 26.18718931502364,
          phaseCost: 313214075.7629803,
        },
        incidentCommandResults: {
          onSiteDays: 1960631.9851232457,
          phaseCost: 4796162628.238994,
        },
        otherResults: {
          otherCosts: 350283168.2709893,
        },
        generalResults: {
          totalCost: 7342126943.5027685,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 53944.31870564082,
        onSiteDays: 734604.4122239727,
        phaseCost: 8495599825.15018,
      },
      sourceReductionResults: {
        workDays: 5091.753922602088,
        onSiteDays: 5091.753922602088,
        phaseCost: 144545769.64387208,
      },
      decontaminationResults: {
        workDays: 21.4781242342382,
        onSiteDays: 24.11446978689974,
        phaseCost: 2802573845.180155,
      },
      incidentCommandResults: {
        onSiteDays: 739728.2806163616,
        phaseCost: 1825825519.1407347,
      },
      otherResults: {
        otherCosts: 171564382.57646665,
      },
      generalResults: {
        totalCost: 13440109341.691408,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 47326.37708333498,
        onSiteDays: 2491525.2881109337,
        phaseCost: 9926603697.184816,
      },
      sourceReductionResults: {
        workDays: 9727.231761224997,
        onSiteDays: 9727.231761224997,
        phaseCost: 2127781075.7540898,
      },
      decontaminationResults: {
        workDays: 13.287977197973051,
        onSiteDays: 14.673149727907298,
        phaseCost: 1017975026.304773,
      },
      incidentCommandResults: {
        onSiteDays: 2501275.1930218865,
        phaseCost: 6058460585.101055,
      },
      otherResults: {
        otherCosts: 741956956.3873408,
      },
      generalResults: {
        totalCost: 19872777340.732075,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 36522.47536652288,
          onSiteDays: 1730927.5256676206,
          phaseCost: 2247127597.080014,
        },
        sourceReductionResults: {
          workDays: 7867.271720296054,
          onSiteDays: 7867.271720296054,
          phaseCost: 642877942.3896351,
        },
        decontaminationResults: {
          workDays: 12.148998985800194,
          onSiteDays: 12.457158388909223,
          phaseCost: 140426923.6995087,
        },
        incidentCommandResults: {
          onSiteDays: 1738815.2545463054,
          phaseCost: 4303899808.178479,
        },
        otherResults: {
          otherCosts: 428876791.4145353,
        },
        generalResults: {
          totalCost: 7763209062.762173,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 12687.790151706831,
          onSiteDays: 3857329.1282991543,
          phaseCost: 2537399011.8796597,
        },
        sourceReductionResults: {
          workDays: 1034.9926478534026,
          onSiteDays: 1034.9926478534026,
          phaseCost: 401481236.32046676,
        },
        decontaminationResults: {
          workDays: 25.38384498967413,
          onSiteDays: 25.45737983622993,
          phaseCost: 391741599.61237067,
        },
        incidentCommandResults: {
          onSiteDays: 3858397.5783268437,
          phaseCost: 9564970875.743225,
        },
        otherResults: {
          otherCosts: 1216137769.109722,
        },
        generalResults: {
          totalCost: 14111730492.665443,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 16509.761053875503,
        onSiteDays: 137488.53484310117,
        phaseCost: 3331964511.120518,
      },
      sourceReductionResults: {
        workDays: 475.268662320055,
        onSiteDays: 475.268662320055,
        phaseCost: 41338930.4958674,
      },
      decontaminationResults: {
        workDays: 13.596592381502639,
        onSiteDays: 15.09127368291171,
        phaseCost: 1297408419.605507,
      },
      incidentCommandResults: {
        onSiteDays: 137986.89477910413,
        phaseCost: 342116072.13090587,
      },
      otherResults: {
        otherCosts: 25131870.20935075,
      },
      generalResults: {
        totalCost: 5037959803.562149,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 15752.927131749126,
        onSiteDays: 514132.5387012753,
        phaseCost: 6613705504.495599,
      },
      sourceReductionResults: {
        workDays: 6236.43603859951,
        onSiteDays: 6236.43603859951,
        phaseCost: 675223785.0769324,
      },
      decontaminationResults: {
        workDays: 18.340152660696805,
        onSiteDays: 20.618918601334776,
        phaseCost: 393708099.25726384,
      },
      incidentCommandResults: {
        onSiteDays: 520397.59365847614,
        phaseCost: 1261731291.0525198,
      },
      otherResults: {
        otherCosts: 172436930.29187188,
      },
      generalResults: {
        totalCost: 9116805610.174187,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 28276.5225442643,
          onSiteDays: 2200232.198813562,
          phaseCost: 6176082240.470368,
        },
        sourceReductionResults: {
          workDays: 2226.9426943438048,
          onSiteDays: 2226.9426943438048,
          phaseCost: 728213609.6969938,
        },
        decontaminationResults: {
          workDays: 17.54941990053035,
          onSiteDays: 18.695185150181686,
          phaseCost: 385263104.09388936,
        },
        incidentCommandResults: {
          onSiteDays: 2202485.8366930555,
          phaseCost: 5414256239.607148,
        },
        otherResults: {
          otherCosts: 626123802.1555879,
        },
        generalResults: {
          totalCost: 13329938996.023989,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 7466.8883468847935,
          onSiteDays: 7335543.564857282,
          phaseCost: 1933387248.5865107,
        },
        sourceReductionResults: {
          workDays: 6467.843153976502,
          onSiteDays: 6467.843153976502,
          phaseCost: 333443228.92278004,
        },
        decontaminationResults: {
          workDays: 16.434789074220415,
          onSiteDays: 17.007292355412456,
          phaseCost: 977100999.3820333,
        },
        incidentCommandResults: {
          onSiteDays: 7342036.415303614,
          phaseCost: 17798292278.02042,
        },
        otherResults: {
          otherCosts: 1313620124.176854,
        },
        generalResults: {
          totalCost: 22355843879.088596,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 40163.73225059799,
        onSiteDays: 19596866.317390844,
        phaseCost: 6788081419.496527,
      },
      sourceReductionResults: {
        workDays: 1903.832349742044,
        onSiteDays: 1903.832349742044,
        phaseCost: 667498136.2542067,
      },
      decontaminationResults: {
        workDays: 22.007961209632445,
        onSiteDays: 24.868542761511293,
        phaseCost: 2177663587.5626974,
      },
      incidentCommandResults: {
        onSiteDays: 19598803.01828335,
        phaseCost: 48450202138.05464,
      },
      otherResults: {
        otherCosts: 4566572018.508132,
      },
      generalResults: {
        totalCost: 62650017299.876205,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 67752.98604143436,
        onSiteDays: 1699014.6493139034,
        phaseCost: 6885430130.755132,
      },
      sourceReductionResults: {
        workDays: 26912.07054426881,
        onSiteDays: 26912.07054426881,
        phaseCost: 1737288083.420238,
      },
      decontaminationResults: {
        workDays: 16.766521650079294,
        onSiteDays: 19.252510194259816,
        phaseCost: 3000549518.50582,
      },
      incidentCommandResults: {
        onSiteDays: 1725953.9723683663,
        phaseCost: 4185262349.8322687,
      },
      otherResults: {
        otherCosts: 476465598.9472808,
      },
      generalResults: {
        totalCost: 16284995681.46074,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7680.690680219029,
          onSiteDays: 721364.9863141332,
          phaseCost: 2567113382.188766,
        },
        sourceReductionResults: {
          workDays: 1172.9181595441955,
          onSiteDays: 1172.9181595441955,
          phaseCost: 73519685.58165577,
        },
        decontaminationResults: {
          workDays: 26.53608302179167,
          onSiteDays: 28.665870461302312,
          phaseCost: 1362950641.108843,
        },
        incidentCommandResults: {
          onSiteDays: 722574.5703441387,
          phaseCost: 1774266721.1794686,
        },
        otherResults: {
          otherCosts: 143713195.79732195,
        },
        generalResults: {
          totalCost: 5921563625.856055,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 58228.05830339092,
          onSiteDays: 183920.71500952158,
          phaseCost: 3284673005.1759253,
        },
        sourceReductionResults: {
          workDays: 1693.4432538332,
          onSiteDays: 1693.4432538332,
          phaseCost: 91818736.19883242,
        },
        decontaminationResults: {
          workDays: 21.166197413151664,
          onSiteDays: 21.95657258759173,
          phaseCost: 559354984.5890398,
        },
        incidentCommandResults: {
          onSiteDays: 185644.11483594237,
          phaseCost: 457427352.0054469,
        },
        otherResults: {
          otherCosts: 37413514.48212439,
        },
        generalResults: {
          totalCost: 4430687592.451368,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 13030.176409474157,
        onSiteDays: 185258.35397395026,
        phaseCost: 4509906223.553259,
      },
      sourceReductionResults: {
        workDays: 150.77966605426082,
        onSiteDays: 150.77966605426082,
        phaseCost: 70612890.11330724,
      },
      decontaminationResults: {
        workDays: 12.945273127859757,
        onSiteDays: 13.933170715098544,
        phaseCost: 501322169.06771517,
      },
      incidentCommandResults: {
        onSiteDays: 185431.0668107196,
        phaseCost: 450611573.1474143,
      },
      otherResults: {
        otherCosts: 49599882.245348535,
      },
      generalResults: {
        totalCost: 5582052738.127045,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 15364.287775862998,
        onSiteDays: 255489.34385784945,
        phaseCost: 7419302060.2884245,
      },
      sourceReductionResults: {
        workDays: 9026.086732594333,
        onSiteDays: 9026.086732594333,
        phaseCost: 2379754750.411824,
      },
      decontaminationResults: {
        workDays: 12.047534968947883,
        onSiteDays: 12.88233823815415,
        phaseCost: 1136864066.745858,
      },
      incidentCommandResults: {
        onSiteDays: 264536.31292868196,
        phaseCost: 641203583.6683457,
      },
      otherResults: {
        otherCosts: 56061914.96206142,
      },
      generalResults: {
        totalCost: 11633186376.076513,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 10700.65634490009,
          onSiteDays: 290337.1354829235,
          phaseCost: 3705531038.85313,
        },
        sourceReductionResults: {
          workDays: 1645.328261602568,
          onSiteDays: 1645.328261602568,
          phaseCost: 182737089.7351616,
        },
        decontaminationResults: {
          workDays: 19.580022414815616,
          onSiteDays: 21.925795348576685,
          phaseCost: 1183018291.2350242,
        },
        incidentCommandResults: {
          onSiteDays: 292012.3895398746,
          phaseCost: 723285555.9324629,
        },
        otherResults: {
          otherCosts: 85365414.83436091,
        },
        generalResults: {
          totalCost: 5879937390.590139,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 34377.507857948614,
          onSiteDays: 614707.4024486027,
          phaseCost: 2383435228.4154167,
        },
        sourceReductionResults: {
          workDays: 800.2261479170996,
          onSiteDays: 800.2261479170996,
          phaseCost: 61337783.658071175,
        },
        decontaminationResults: {
          workDays: 12.772649803145939,
          onSiteDays: 15.637874181996535,
          phaseCost: 855170201.0130421,
        },
        incidentCommandResults: {
          onSiteDays: 615531.2664707018,
          phaseCost: 1497789824.9754205,
        },
        otherResults: {
          otherCosts: 149829979.45106256,
        },
        generalResults: {
          totalCost: 4947563017.513013,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 35114.00562144791,
        onSiteDays: 1181414.7909962058,
        phaseCost: 5703967573.306852,
      },
      sourceReductionResults: {
        workDays: 12730.041711827025,
        onSiteDays: 12730.041711827025,
        phaseCost: 729759376.197345,
      },
      decontaminationResults: {
        workDays: 16.683490945651076,
        onSiteDays: 18.093567151365235,
        phaseCost: 1039613815.4470488,
      },
      incidentCommandResults: {
        onSiteDays: 1194170.9262751841,
        phaseCost: 2917268857.748592,
      },
      otherResults: {
        otherCosts: 208823784.45852166,
      },
      generalResults: {
        totalCost: 10599433407.15836,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 48983.14802641875,
        onSiteDays: 10053777.885623386,
        phaseCost: 8741801511.847286,
      },
      sourceReductionResults: {
        workDays: 18685.455644043832,
        onSiteDays: 18685.455644043832,
        phaseCost: 3186632976.8748217,
      },
      decontaminationResults: {
        workDays: 16.119550833040744,
        onSiteDays: 18.694313989182543,
        phaseCost: 1693099651.3766065,
      },
      incidentCommandResults: {
        onSiteDays: 10072490.03558142,
        phaseCost: 24657327094.93229,
      },
      otherResults: {
        otherCosts: 1850726828.3304303,
      },
      generalResults: {
        totalCost: 40129588063.361435,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 84827.77627246149,
          onSiteDays: 2297386.17794323,
          phaseCost: 4713695112.714309,
        },
        sourceReductionResults: {
          workDays: 1861.9541066474894,
          onSiteDays: 1861.9541066474894,
          phaseCost: 579000925.0625783,
        },
        decontaminationResults: {
          workDays: 18.972330381156024,
          onSiteDays: 21.409790930200785,
          phaseCost: 951648563.0387775,
        },
        incidentCommandResults: {
          onSiteDays: 2299277.541840808,
          phaseCost: 5565842408.142156,
        },
        otherResults: {
          otherCosts: 453971076.6156585,
        },
        generalResults: {
          totalCost: 12264158085.573479,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 39659.32599502976,
          onSiteDays: 721309.0458330947,
          phaseCost: 3970728658.046215,
        },
        sourceReductionResults: {
          workDays: 3196.941454220509,
          onSiteDays: 3196.941454220509,
          phaseCost: 199998500.40974003,
        },
        decontaminationResults: {
          workDays: 23.596778881176554,
          onSiteDays: 25.533779173282387,
          phaseCost: 540445081.1837077,
        },
        incidentCommandResults: {
          onSiteDays: 724539.5210664886,
          phaseCost: 1795774809.836988,
        },
        otherResults: {
          otherCosts: 243361105.2974582,
        },
        generalResults: {
          totalCost: 6750308154.774109,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 45411.02423112876,
        onSiteDays: 22009108.973160665,
        phaseCost: 3712632233.7825956,
      },
      sourceReductionResults: {
        workDays: 978.9458082139561,
        onSiteDays: 978.9458082139561,
        phaseCost: 196876751.17288256,
      },
      decontaminationResults: {
        workDays: 19.73608989471944,
        onSiteDays: 20.076041593932555,
        phaseCost: 1884713726.4968996,
      },
      incidentCommandResults: {
        onSiteDays: 22010115.995010473,
        phaseCost: 54505755748.93564,
      },
      otherResults: {
        otherCosts: 7038129101.560306,
      },
      generalResults: {
        totalCost: 67338107561.94832,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 129227.58030745418,
        onSiteDays: 949180.5636550784,
        phaseCost: 5522513737.097798,
      },
      sourceReductionResults: {
        workDays: 12421.569292400145,
        onSiteDays: 12421.569292400145,
        phaseCost: 780894065.0017521,
      },
      decontaminationResults: {
        workDays: 16.13566052078634,
        onSiteDays: 18.495079822953578,
        phaseCost: 1021954942.0935663,
      },
      incidentCommandResults: {
        onSiteDays: 961628.6280273015,
        phaseCost: 2345249608.444923,
      },
      otherResults: {
        otherCosts: 233859231.32559896,
      },
      generalResults: {
        totalCost: 9904471583.963638,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 17098.917756069855,
          onSiteDays: 401842.0050146256,
          phaseCost: 2821476359.2990355,
        },
        sourceReductionResults: {
          workDays: 644.6387137911978,
          onSiteDays: 644.6387137911978,
          phaseCost: 188328484.14434835,
        },
        decontaminationResults: {
          workDays: 25.167127784613317,
          onSiteDays: 25.767095860039603,
          phaseCost: 361178061.18973446,
        },
        incidentCommandResults: {
          onSiteDays: 402520.41082427686,
          phaseCost: 979897257.1233325,
        },
        otherResults: {
          otherCosts: 115389690.18187657,
        },
        generalResults: {
          totalCost: 4466269851.938327,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 14548.395884659983,
          onSiteDays: 308237.5215647609,
          phaseCost: 1652900899.2695532,
        },
        sourceReductionResults: {
          workDays: 713.766690078929,
          onSiteDays: 713.766690078929,
          phaseCost: 201628516.01024008,
        },
        decontaminationResults: {
          workDays: 14.924402782908736,
          onSiteDays: 17.625221565278533,
          phaseCost: 524459136.0546855,
        },
        incidentCommandResults: {
          onSiteDays: 308976.91347640514,
          phaseCost: 761674631.5502524,
        },
        otherResults: {
          otherCosts: 74230079.28764261,
        },
        generalResults: {
          totalCost: 3214893262.172374,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 33082.43139859366,
        onSiteDays: 455022.1380214592,
        phaseCost: 6703084972.923546,
      },
      sourceReductionResults: {
        workDays: 10112.245671344033,
        onSiteDays: 10112.245671344033,
        phaseCost: 1635771911.6500187,
      },
      decontaminationResults: {
        workDays: 22.17066674031566,
        onSiteDays: 25.032988730825718,
        phaseCost: 1468308255.4148662,
      },
      incidentCommandResults: {
        onSiteDays: 465167.4166815341,
        phaseCost: 1135351118.4205308,
      },
      otherResults: {
        otherCosts: 90773501.5940606,
      },
      generalResults: {
        totalCost: 11033289760.003021,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 24216.30967460369,
        onSiteDays: 2765977.741776875,
        phaseCost: 10684982880.934553,
      },
      sourceReductionResults: {
        workDays: 4578.6971840980195,
        onSiteDays: 4578.6971840980195,
        phaseCost: 1332776122.6367855,
      },
      decontaminationResults: {
        workDays: 26.242020624746107,
        onSiteDays: 27.492857925708606,
        phaseCost: 410523915.9192004,
      },
      incidentCommandResults: {
        onSiteDays: 2770591.931818899,
        phaseCost: 6779782019.773939,
      },
      otherResults: {
        otherCosts: 804053540.1502564,
      },
      generalResults: {
        totalCost: 20012118479.414738,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 41678.112833466555,
          onSiteDays: 3672181.6045819055,
          phaseCost: 2461543650.6055355,
        },
        sourceReductionResults: {
          workDays: 3908.49149685698,
          onSiteDays: 3908.49149685698,
          phaseCost: 810812896.6298652,
        },
        decontaminationResults: {
          workDays: 24.10695109053211,
          onSiteDays: 26.04607604072571,
          phaseCost: 513428833.9476002,
        },
        incidentCommandResults: {
          onSiteDays: 3676124.142154803,
          phaseCost: 9121209709.075905,
        },
        otherResults: {
          otherCosts: 1234090104.6968296,
        },
        generalResults: {
          totalCost: 14141085194.955734,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 12969.678788786394,
          onSiteDays: 2592540.8298895187,
          phaseCost: 3065593771.00612,
        },
        sourceReductionResults: {
          workDays: 3369.0785420873817,
          onSiteDays: 3369.0785420873817,
          phaseCost: 321477914.7317608,
        },
        decontaminationResults: {
          workDays: 21.46160801603962,
          onSiteDays: 23.545200132891814,
          phaseCost: 380067970.5732139,
        },
        incidentCommandResults: {
          onSiteDays: 2595941.4536317387,
          phaseCost: 6436301562.463341,
        },
        otherResults: {
          otherCosts: 528967412.74277747,
        },
        generalResults: {
          totalCost: 10732408631.517214,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 30926.21266683507,
        onSiteDays: 3683985.656472824,
        phaseCost: 8872714265.106201,
      },
      sourceReductionResults: {
        workDays: 1270.25302934074,
        onSiteDays: 1270.25302934074,
        phaseCost: 125828116.09521183,
      },
      decontaminationResults: {
        workDays: 14.854941988097256,
        onSiteDays: 16.818533771629102,
        phaseCost: 1626546204.8391361,
      },
      incidentCommandResults: {
        onSiteDays: 3685280.7280359366,
        phaseCost: 8933593159.190344,
      },
      otherResults: {
        otherCosts: 894367144.1448363,
      },
      generalResults: {
        totalCost: 20453048889.37573,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 47201.43391791773,
        onSiteDays: 975940.0979390941,
        phaseCost: 12441109449.88103,
      },
      sourceReductionResults: {
        workDays: 6981.8728827455825,
        onSiteDays: 6981.8728827455825,
        phaseCost: 1606910648.9300022,
      },
      decontaminationResults: {
        workDays: 11.80950652873365,
        onSiteDays: 11.952671790950157,
        phaseCost: 1451215974.5419385,
      },
      incidentCommandResults: {
        onSiteDays: 982941.9234936306,
        phaseCost: 2402001822.791397,
      },
      otherResults: {
        otherCosts: 239048016.69251198,
      },
      generalResults: {
        totalCost: 18140285912.83688,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 28912.066433164728,
          onSiteDays: 435586.4146149965,
          phaseCost: 5077254216.4896555,
        },
        sourceReductionResults: {
          workDays: 7834.024875941749,
          onSiteDays: 7834.024875941749,
          phaseCost: 464359519.12477326,
        },
        decontaminationResults: {
          workDays: 24.07642668068326,
          onSiteDays: 25.141346755936127,
          phaseCost: 1090858850.9502816,
        },
        incidentCommandResults: {
          onSiteDays: 443453.58083769423,
          phaseCost: 1100254086.5599065,
        },
        otherResults: {
          otherCosts: 121581100.02009061,
        },
        generalResults: {
          totalCost: 7854307773.144708,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 11110.323062380365,
          onSiteDays: 1571222.3794764692,
          phaseCost: 2331675522.1233907,
        },
        sourceReductionResults: {
          workDays: 1837.3416314358442,
          onSiteDays: 1837.3416314358442,
          phaseCost: 314983737.01635194,
        },
        decontaminationResults: {
          workDays: 14.456650387136417,
          onSiteDays: 15.68803640820273,
          phaseCost: 954989730.8887495,
        },
        incidentCommandResults: {
          onSiteDays: 1573083.4091443133,
          phaseCost: 3856117295.2050295,
        },
        otherResults: {
          otherCosts: 326776637.7459749,
        },
        generalResults: {
          totalCost: 7784542922.979497,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 56735.41162118223,
        onSiteDays: 1201466.562331649,
        phaseCost: 12207347383.657003,
      },
      sourceReductionResults: {
        workDays: 705.8486945689859,
        onSiteDays: 705.8486945689859,
        phaseCost: 117697263.03201255,
      },
      decontaminationResults: {
        workDays: 21.724137779493848,
        onSiteDays: 24.22255620342273,
        phaseCost: 248723213.5428214,
      },
      incidentCommandResults: {
        onSiteDays: 1202204.6335824213,
        phaseCost: 2933792915.208888,
      },
      otherResults: {
        otherCosts: 243412093.50086698,
      },
      generalResults: {
        totalCost: 15750972868.941595,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 186849.4193159035,
        onSiteDays: 2658477.777190978,
        phaseCost: 7451353310.6140785,
      },
      sourceReductionResults: {
        workDays: 1786.6532148676047,
        onSiteDays: 1786.6532148676047,
        phaseCost: 69622720.05564551,
      },
      decontaminationResults: {
        workDays: 15.359593314900899,
        onSiteDays: 17.86862332883026,
        phaseCost: 1557849529.6408482,
      },
      incidentCommandResults: {
        onSiteDays: 2660290.2990291747,
        phaseCost: 6495413660.029409,
      },
      otherResults: {
        otherCosts: 869676992.8851748,
      },
      generalResults: {
        totalCost: 16443916213.225159,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 42158.96176294513,
          onSiteDays: 1920019.9230096813,
          phaseCost: 4376871924.18679,
        },
        sourceReductionResults: {
          workDays: 9455.860623783938,
          onSiteDays: 9455.860623783938,
          phaseCost: 434205127.6358969,
        },
        decontaminationResults: {
          workDays: 18.396518151600965,
          onSiteDays: 19.968153803834728,
          phaseCost: 704456875.6552265,
        },
        incidentCommandResults: {
          onSiteDays: 1929503.751787269,
          phaseCost: 4733309775.8590975,
        },
        otherResults: {
          otherCosts: 346245344.47875017,
        },
        generalResults: {
          totalCost: 10595089047.815762,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 7530.620856690695,
          onSiteDays: 860293.8720972026,
          phaseCost: 2143502435.0919867,
        },
        sourceReductionResults: {
          workDays: 648.5355842553163,
          onSiteDays: 648.5355842553163,
          phaseCost: 228417204.7520916,
        },
        decontaminationResults: {
          workDays: 24.96541273849211,
          onSiteDays: 27.956934404316574,
          phaseCost: 885145706.4415855,
        },
        incidentCommandResults: {
          onSiteDays: 860978.3646158623,
          phaseCost: 2125151135.614862,
        },
        otherResults: {
          otherCosts: 189267279.5599446,
        },
        generalResults: {
          totalCost: 5571483761.46047,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 11558.634142844814,
        onSiteDays: 194151.23287483843,
        phaseCost: 2584061699.5723763,
      },
      sourceReductionResults: {
        workDays: 9202.041606398994,
        onSiteDays: 9202.041606398994,
        phaseCost: 817850232.3223357,
      },
      decontaminationResults: {
        workDays: 14.72679464256549,
        onSiteDays: 16.846354112924622,
        phaseCost: 150270438.72948602,
      },
      incidentCommandResults: {
        onSiteDays: 203378.12083535036,
        phaseCost: 495885504.88492006,
      },
      otherResults: {
        otherCosts: 67907205.83641216,
      },
      generalResults: {
        totalCost: 4115975081.34553,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 20523.880380373717,
        onSiteDays: 283216.20444674784,
        phaseCost: 8707684211.424307,
      },
      sourceReductionResults: {
        workDays: 7676.441586966127,
        onSiteDays: 7676.441586966127,
        phaseCost: 903620589.7155972,
      },
      decontaminationResults: {
        workDays: 16.07448851086071,
        onSiteDays: 18.574181880237113,
        phaseCost: 177698957.61142656,
      },
      incidentCommandResults: {
        onSiteDays: 290919.22021559416,
        phaseCost: 717599913.3203876,
      },
      otherResults: {
        otherCosts: 89310356.53843197,
      },
      generalResults: {
        totalCost: 10595914028.61015,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 18920.35632094603,
          onSiteDays: 569279.2592174391,
          phaseCost: 7542398765.471184,
        },
        sourceReductionResults: {
          workDays: 2605.998755659822,
          onSiteDays: 2605.998755659822,
          phaseCost: 323346255.1635195,
        },
        decontaminationResults: {
          workDays: 18.69867064843389,
          onSiteDays: 19.68594498808634,
          phaseCost: 392838544.37467486,
        },
        incidentCommandResults: {
          onSiteDays: 571912.9439180869,
          phaseCost: 1404499223.1156063,
        },
        otherResults: {
          otherCosts: 181597656.25731015,
        },
        generalResults: {
          totalCost: 9844680444.382296,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 15919.668192890309,
          onSiteDays: 227588.35000715923,
          phaseCost: 1692079652.6187735,
        },
        sourceReductionResults: {
          workDays: 24.227643039634273,
          onSiteDays: 24.227643039634273,
          phaseCost: 1494444.352469869,
        },
        decontaminationResults: {
          workDays: 16.350253188132832,
          onSiteDays: 16.627623884153465,
          phaseCost: 1140175501.1504266,
        },
        incidentCommandResults: {
          onSiteDays: 227637.205274083,
          phaseCost: 553804221.5909477,
        },
        otherResults: {
          otherCosts: 53376060.078965105,
        },
        generalResults: {
          totalCost: 3440929879.7915826,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 20453.3231561806,
        onSiteDays: 368648.8071012867,
        phaseCost: 7181998013.215347,
      },
      sourceReductionResults: {
        workDays: 1838.612792765825,
        onSiteDays: 1838.612792765825,
        phaseCost: 107062834.52302617,
      },
      decontaminationResults: {
        workDays: 15.300385762774475,
        onSiteDays: 15.529933829449567,
        phaseCost: 1769468033.6268167,
      },
      incidentCommandResults: {
        onSiteDays: 370510.949827882,
        phaseCost: 901848773.042397,
      },
      otherResults: {
        otherCosts: 109319794.67142956,
      },
      generalResults: {
        totalCost: 10069697449.079016,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 45095.56749586006,
        onSiteDays: 988336.6419486156,
        phaseCost: 9009409904.393806,
      },
      sourceReductionResults: {
        workDays: 1608.7242441602536,
        onSiteDays: 1608.7242441602536,
        phaseCost: 255687627.30025956,
      },
      decontaminationResults: {
        workDays: 15.843464357741983,
        onSiteDays: 16.748240480373667,
        phaseCost: 1619262768.044177,
      },
      incidentCommandResults: {
        onSiteDays: 989970.1144332561,
        phaseCost: 2451686554.5819597,
      },
      otherResults: {
        otherCosts: 261941906.55708265,
      },
      generalResults: {
        totalCost: 13597988760.877285,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 34976.226116749895,
          onSiteDays: 8004146.059667819,
          phaseCost: 3910754422.343912,
        },
        sourceReductionResults: {
          workDays: 5708.386969247069,
          onSiteDays: 5708.386969247069,
          phaseCost: 1393706057.376242,
        },
        decontaminationResults: {
          workDays: 20.322090893826,
          onSiteDays: 22.46008835440969,
          phaseCost: 435578420.49552035,
        },
        incidentCommandResults: {
          onSiteDays: 8009884.906725421,
          phaseCost: 19823000829.75723,
        },
        otherResults: {
          otherCosts: 1696649330.162398,
        },
        generalResults: {
          totalCost: 27259689060.135303,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 13406.807122815157,
          onSiteDays: 1399678.883971572,
          phaseCost: 4762310749.31776,
        },
        sourceReductionResults: {
          workDays: 925.1975822430414,
          onSiteDays: 925.1975822430414,
          phaseCost: 39303094.68293609,
        },
        decontaminationResults: {
          workDays: 20.213129863425422,
          onSiteDays: 20.848996325360844,
          phaseCost: 121754228.64272642,
        },
        incidentCommandResults: {
          onSiteDays: 1400632.9305501403,
          phaseCost: 3458353463.765752,
        },
        otherResults: {
          otherCosts: 373558899.71127963,
        },
        generalResults: {
          totalCost: 8755280436.120455,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 23346.987102261955,
        onSiteDays: 1583844.2650500203,
        phaseCost: 4278518068.7890987,
      },
      sourceReductionResults: {
        workDays: 18712.640914156753,
        onSiteDays: 18712.640914156753,
        phaseCost: 1252003670.1776075,
      },
      decontaminationResults: {
        workDays: 16.470678946112905,
        onSiteDays: 18.542899482311423,
        phaseCost: 411294156.1379704,
      },
      incidentCommandResults: {
        onSiteDays: 1602583.4488636595,
        phaseCost: 3895326999.684547,
      },
      otherResults: {
        otherCosts: 492560954.06448096,
      },
      generalResults: {
        totalCost: 10329703848.853704,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 69039.77727778949,
        onSiteDays: 1285562.5561747572,
        phaseCost: 4931876637.862302,
      },
      sourceReductionResults: {
        workDays: 14981.827775544942,
        onSiteDays: 14981.827775544942,
        phaseCost: 2537177887.988242,
      },
      decontaminationResults: {
        workDays: 25.069735738232207,
        onSiteDays: 25.20080765760523,
        phaseCost: 1905670420.2414887,
      },
      incidentCommandResults: {
        onSiteDays: 1300577.5847579597,
        phaseCost: 3159077614.8807735,
      },
      otherResults: {
        otherCosts: 386255596.78287524,
      },
      generalResults: {
        totalCost: 12920058157.755682,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 13787.778568986349,
          onSiteDays: 67807.25021996179,
          phaseCost: 2249103933.3869095,
        },
        sourceReductionResults: {
          workDays: 3525.861778781479,
          onSiteDays: 3525.861778781479,
          phaseCost: 260720568.86927432,
        },
        decontaminationResults: {
          workDays: 19.39944756831961,
          onSiteDays: 20.653290908237288,
          phaseCost: 923996080.1782397,
        },
        incidentCommandResults: {
          onSiteDays: 71361.76528965149,
          phaseCost: 174715583.63464716,
        },
        otherResults: {
          otherCosts: 15859227.87828546,
        },
        generalResults: {
          totalCost: 3624395393.947356,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 51457.60208623097,
          onSiteDays: 199913.1280654336,
          phaseCost: 2198166341.188368,
        },
        sourceReductionResults: {
          workDays: 3870.582662799286,
          onSiteDays: 3870.582662799286,
          phaseCost: 1155812075.1016598,
        },
        decontaminationResults: {
          workDays: 19.69376208276808,
          onSiteDays: 21.145655907957266,
          phaseCost: 542455381.1659412,
        },
        incidentCommandResults: {
          onSiteDays: 203812.85638414082,
          phaseCost: 502598786.41872597,
        },
        otherResults: {
          otherCosts: 67714370.03325191,
        },
        generalResults: {
          totalCost: 4466746953.907947,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 27773.985042875924,
        onSiteDays: 2445978.7145827725,
        phaseCost: 5675853397.890369,
      },
      sourceReductionResults: {
        workDays: 10166.08234388742,
        onSiteDays: 10166.08234388742,
        phaseCost: 3099609416.880554,
      },
      decontaminationResults: {
        workDays: 11.745991914706769,
        onSiteDays: 13.130335054623508,
        phaseCost: 1032254530.3192141,
      },
      incidentCommandResults: {
        onSiteDays: 2456165.927261715,
        phaseCost: 6075763080.26417,
      },
      otherResults: {
        otherCosts: 464105628.64433736,
      },
      generalResults: {
        totalCost: 16347586053.998644,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 49442.328942849126,
        onSiteDays: 703058.6472700709,
        phaseCost: 4278950727.4201202,
      },
      sourceReductionResults: {
        workDays: 4460.082090628977,
        onSiteDays: 4460.082090628977,
        phaseCost: 238380576.71328515,
      },
      decontaminationResults: {
        workDays: 26.57761182696037,
        onSiteDays: 28.45867423933434,
        phaseCost: 639915546.920817,
      },
      incidentCommandResults: {
        onSiteDays: 707555.1880349392,
        phaseCost: 1712669820.9551444,
      },
      otherResults: {
        otherCosts: 129478470.61836912,
      },
      generalResults: {
        totalCost: 6999395142.627736,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 8349.684006003743,
          onSiteDays: 586338.3325455298,
          phaseCost: 2391810988.4683437,
        },
        sourceReductionResults: {
          workDays: 985.8622022087079,
          onSiteDays: 985.8622022087079,
          phaseCost: 51297788.382951505,
        },
        decontaminationResults: {
          workDays: 19.166670761575613,
          onSiteDays: 21.49206015991328,
          phaseCost: 931848085.1675675,
        },
        incidentCommandResults: {
          onSiteDays: 587353.6868078985,
          phaseCost: 1445045413.5509582,
        },
        otherResults: {
          otherCosts: 138586676.05113947,
        },
        generalResults: {
          totalCost: 4958588951.62096,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 49469.50733146454,
          onSiteDays: 3171847.209406712,
          phaseCost: 3278164116.4889555,
        },
        sourceReductionResults: {
          workDays: 3797.36205454532,
          onSiteDays: 3797.36205454532,
          phaseCost: 788832858.52745,
        },
        decontaminationResults: {
          workDays: 15.371477813313595,
          onSiteDays: 16.417435462916604,
          phaseCost: 940084740.1774776,
        },
        incidentCommandResults: {
          onSiteDays: 3175668.9888967206,
          phaseCost: 7865526887.887604,
        },
        otherResults: {
          otherCosts: 920346187.8854668,
        },
        generalResults: {
          totalCost: 13792954790.966953,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 20183.765791919563,
        onSiteDays: 261713.71365346032,
        phaseCost: 2799846518.983762,
      },
      sourceReductionResults: {
        workDays: 17627.99872788267,
        onSiteDays: 17627.99872788267,
        phaseCost: 3179941847.853946,
      },
      decontaminationResults: {
        workDays: 22.143412749083577,
        onSiteDays: 23.856499918470277,
        phaseCost: 2781135990.7925577,
      },
      incidentCommandResults: {
        onSiteDays: 279373.56888126145,
        phaseCost: 687435970.4845067,
      },
      otherResults: {
        otherCosts: 58728505.44371596,
      },
      generalResults: {
        totalCost: 9507088833.558487,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 21892.015803443952,
        onSiteDays: 392047.064440556,
        phaseCost: 7629101725.614522,
      },
      sourceReductionResults: {
        workDays: 9062.016440578223,
        onSiteDays: 9062.016440578223,
        phaseCost: 410722967.22193635,
      },
      decontaminationResults: {
        workDays: 18.290749842368704,
        onSiteDays: 19.00903397333087,
        phaseCost: 1660986605.6755679,
      },
      incidentCommandResults: {
        onSiteDays: 401136.0899151075,
        phaseCost: 986424289.5144496,
      },
      otherResults: {
        otherCosts: 130285353.50789577,
      },
      generalResults: {
        totalCost: 10817520941.534372,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7636.048333561884,
          onSiteDays: 164870.3007231924,
          phaseCost: 3927485151.0008545,
        },
        sourceReductionResults: {
          workDays: 2712.609618347857,
          onSiteDays: 2712.609618347857,
          phaseCost: 528158607.1116007,
        },
        decontaminationResults: {
          workDays: 19.638860048409285,
          onSiteDays: 22.0333069635167,
          phaseCost: 457734318.0623232,
        },
        incidentCommandResults: {
          onSiteDays: 167612.94364850377,
          phaseCost: 411916838.2375468,
        },
        otherResults: {
          otherCosts: 32906598.846241333,
        },
        generalResults: {
          totalCost: 5358201513.258567,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 15641.139854156216,
          onSiteDays: 1700430.752893472,
          phaseCost: 6337737715.406536,
        },
        sourceReductionResults: {
          workDays: 4268.545549624712,
          onSiteDays: 4268.545549624712,
          phaseCost: 714944503.7838051,
        },
        decontaminationResults: {
          workDays: 16.05783407391464,
          onSiteDays: 18.676984199713214,
          phaseCost: 331117312.5680068,
        },
        incidentCommandResults: {
          onSiteDays: 1704725.9754272965,
          phaseCost: 4175605301.6859107,
        },
        otherResults: {
          otherCosts: 574988194.0268182,
        },
        generalResults: {
          totalCost: 12134393027.471075,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 42689.998198224435,
        onSiteDays: 1264052.5521031406,
        phaseCost: 12360159278.114853,
      },
      sourceReductionResults: {
        workDays: 50.60839388728313,
        onSiteDays: 50.60839388728313,
        phaseCost: 4189666.6993701556,
      },
      decontaminationResults: {
        workDays: 20.019399100686286,
        onSiteDays: 22.008447024507554,
        phaseCost: 972701324.4794765,
      },
      incidentCommandResults: {
        onSiteDays: 1264133.1689440524,
        phaseCost: 3127153904.3291254,
      },
      otherResults: {
        otherCosts: 346016197.3450583,
      },
      generalResults: {
        totalCost: 16810220370.967884,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 46925.00835662355,
        onSiteDays: 4746471.458561779,
        phaseCost: 8546535690.691994,
      },
      sourceReductionResults: {
        workDays: 15452.468674503378,
        onSiteDays: 15452.468674503378,
        phaseCost: 2086908038.4847991,
      },
      decontaminationResults: {
        workDays: 23.68317284055128,
        onSiteDays: 25.279878068780498,
        phaseCost: 1169224896.851818,
      },
      incidentCommandResults: {
        onSiteDays: 4761957.207114351,
        phaseCost: 11814799127.118832,
      },
      otherResults: {
        otherCosts: 1549773963.7492213,
      },
      generalResults: {
        totalCost: 25167241716.896664,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 15409.011463744322,
          onSiteDays: 3302778.7793874484,
          phaseCost: 2125235421.4500988,
        },
        sourceReductionResults: {
          workDays: 2012.7928498434824,
          onSiteDays: 2012.7928498434824,
          phaseCost: 62043555.80054105,
        },
        decontaminationResults: {
          workDays: 21.77394284256127,
          onSiteDays: 22.76415389374926,
          phaseCost: 933672210.2411053,
        },
        incidentCommandResults: {
          onSiteDays: 3304822.3363911854,
          phaseCost: 8042792858.581497,
        },
        otherResults: {
          otherCosts: 894538952.9929628,
        },
        generalResults: {
          totalCost: 12058282999.066204,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 62924.15197408797,
          onSiteDays: 263857.4481767324,
          phaseCost: 3549730827.485305,
        },
        sourceReductionResults: {
          workDays: 886.0667327397923,
          onSiteDays: 886.0667327397923,
          phaseCost: 99762962.16694805,
        },
        decontaminationResults: {
          workDays: 15.985654438376812,
          onSiteDays: 16.716759659749634,
          phaseCost: 291084702.41111785,
        },
        incidentCommandResults: {
          onSiteDays: 264768.23166913196,
          phaseCost: 647221492.559937,
        },
        otherResults: {
          otherCosts: 55316678.55106161,
        },
        generalResults: {
          totalCost: 4643116663.17437,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 27947.809919105664,
        onSiteDays: 1694764.4377158466,
        phaseCost: 8965761513.60154,
      },
      sourceReductionResults: {
        workDays: 8870.341048685688,
        onSiteDays: 8870.341048685688,
        phaseCost: 2295561600.711477,
      },
      decontaminationResults: {
        workDays: 15.12530473971863,
        onSiteDays: 15.53890287027203,
        phaseCost: 948266832.8336613,
      },
      incidentCommandResults: {
        onSiteDays: 1703658.3176674026,
        phaseCost: 4160830789.1401787,
      },
      otherResults: {
        otherCosts: 369570714.9325047,
      },
      generalResults: {
        totalCost: 16739991451.219362,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 48443.66308412254,
        onSiteDays: 2956206.6122076814,
        phaseCost: 3937046689.249566,
      },
      sourceReductionResults: {
        workDays: 5346.549001442426,
        onSiteDays: 5346.549001442426,
        phaseCost: 137139328.11585882,
      },
      decontaminationResults: {
        workDays: 18.054020930792674,
        onSiteDays: 21.020810086284953,
        phaseCost: 237385062.57316363,
      },
      incidentCommandResults: {
        onSiteDays: 2961582.18201921,
        phaseCost: 7351332524.53121,
      },
      otherResults: {
        otherCosts: 863206889.4955373,
      },
      generalResults: {
        totalCost: 12526110493.965336,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 19662.21184210316,
          onSiteDays: 922200.5786794472,
          phaseCost: 3703845721.814994,
        },
        sourceReductionResults: {
          workDays: 4409.585637188785,
          onSiteDays: 4409.585637188785,
          phaseCost: 202937683.51462695,
        },
        decontaminationResults: {
          workDays: 16.30289638049502,
          onSiteDays: 17.39865824752456,
          phaseCost: 254230304.22624007,
        },
        incidentCommandResults: {
          onSiteDays: 926635.5629748835,
          phaseCost: 2284605073.075948,
        },
        otherResults: {
          otherCosts: 177445867.6326445,
        },
        generalResults: {
          totalCost: 6623064650.264454,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 19576.591479839793,
          onSiteDays: 1700140.6631990613,
          phaseCost: 1830528899.484612,
        },
        sourceReductionResults: {
          workDays: 4450.6623232841075,
          onSiteDays: 4450.6623232841075,
          phaseCost: 387654124.3124987,
        },
        decontaminationResults: {
          workDays: 19.48885596322102,
          onSiteDays: 20.992443990891903,
          phaseCost: 108991644.37361108,
        },
        incidentCommandResults: {
          onSiteDays: 1704620.3179663364,
          phaseCost: 4135181434.6403975,
        },
        otherResults: {
          otherCosts: 313647053.29434603,
        },
        generalResults: {
          totalCost: 6776003156.105465,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 15847.683706362623,
        onSiteDays: 183037.1445045717,
        phaseCost: 4743280959.253785,
      },
      sourceReductionResults: {
        workDays: 1630.1885294775238,
        onSiteDays: 1630.1885294775238,
        phaseCost: 190466609.51895183,
      },
      decontaminationResults: {
        workDays: 13.292651371167194,
        onSiteDays: 14.976310372114256,
        phaseCost: 694961751.0304431,
      },
      incidentCommandResults: {
        onSiteDays: 184690.30934442134,
        phaseCost: 453106702.88613963,
      },
      otherResults: {
        otherCosts: 44364927.11227978,
      },
      generalResults: {
        totalCost: 6126180949.8015995,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 7568.637033189831,
        onSiteDays: 469789.36315380706,
        phaseCost: 1856910844.7126575,
      },
      sourceReductionResults: {
        workDays: 11698.187339195305,
        onSiteDays: 11698.187339195305,
        phaseCost: 339548050.5792459,
      },
      decontaminationResults: {
        workDays: 20.96632679318225,
        onSiteDays: 21.003627552418884,
        phaseCost: 514633218.0176788,
      },
      incidentCommandResults: {
        onSiteDays: 481516.55412055476,
        phaseCost: 1189508574.3827157,
      },
      otherResults: {
        otherCosts: 115530298.88672166,
      },
      generalResults: {
        totalCost: 4016130986.5790195,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 7947.935593757297,
          onSiteDays: 2887567.5637826556,
          phaseCost: 1543499127.0705886,
        },
        sourceReductionResults: {
          workDays: 3414.121687593964,
          onSiteDays: 3414.121687593964,
          phaseCost: 824181637.9431653,
        },
        decontaminationResults: {
          workDays: 24.89404271191313,
          onSiteDays: 26.329913551995975,
          phaseCost: 576441013.3979089,
        },
        incidentCommandResults: {
          onSiteDays: 2891016.0153838014,
          phaseCost: 7051737003.590678,
        },
        otherResults: {
          otherCosts: 607993287.8063874,
        },
        generalResults: {
          totalCost: 10603852069.80873,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 23741.720307352898,
          onSiteDays: 3420365.144004141,
          phaseCost: 3425847347.064206,
        },
        sourceReductionResults: {
          workDays: 4417.804353204015,
          onSiteDays: 4417.804353204015,
          phaseCost: 366660642.949385,
        },
        decontaminationResults: {
          workDays: 23.160154729420356,
          onSiteDays: 24.59329359992251,
          phaseCost: 79129202.03292781,
        },
        incidentCommandResults: {
          onSiteDays: 3424815.541650945,
          phaseCost: 8449459298.8623905,
        },
        otherResults: {
          otherCosts: 725419892.2022501,
        },
        generalResults: {
          totalCost: 13046516383.111158,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 16671.312557424968,
        onSiteDays: 505884.69699520787,
        phaseCost: 5025990842.263563,
      },
      sourceReductionResults: {
        workDays: 7310.647122515742,
        onSiteDays: 7310.647122515742,
        phaseCost: 699275699.071434,
      },
      decontaminationResults: {
        workDays: 20.930316721538617,
        onSiteDays: 22.542167750546277,
        phaseCost: 891235343.8983451,
      },
      incidentCommandResults: {
        onSiteDays: 513225.8862854741,
        phaseCost: 1273262558.3183289,
      },
      otherResults: {
        otherCosts: 149868921.82354617,
      },
      generalResults: {
        totalCost: 8039633365.375217,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 43065.56468686692,
        onSiteDays: 651418.0867240287,
        phaseCost: 4490213220.006828,
      },
      sourceReductionResults: {
        workDays: 20908.484291529865,
        onSiteDays: 20908.484291529865,
        phaseCost: 2396744556.1376896,
      },
      decontaminationResults: {
        workDays: 15.04210969829981,
        onSiteDays: 17.005404593424267,
        phaseCost: 3115398413.670586,
      },
      incidentCommandResults: {
        onSiteDays: 672351.576420152,
        phaseCost: 1630643479.664133,
      },
      otherResults: {
        otherCosts: 125670301.08751647,
      },
      generalResults: {
        totalCost: 11758669970.566753,
        areaContaminated: 40860000,
      },
    },
  },
  {
    Indoor: {
      Commercial: {
        characterizationSamplingResults: {
          workDays: 5937.188474037905,
          onSiteDays: 99962.16229547534,
          phaseCost: 1405288109.062841,
        },
        sourceReductionResults: {
          workDays: 6090.571706782271,
          onSiteDays: 6090.571706782271,
          phaseCost: 2832753201.1080995,
        },
        decontaminationResults: {
          workDays: 16.796259912614772,
          onSiteDays: 18.39969031824723,
          phaseCost: 177110946.64045265,
        },
        incidentCommandResults: {
          onSiteDays: 106079.13369257585,
          phaseCost: 260870314.57328933,
        },
        otherResults: {
          otherCosts: 35322954.40065291,
        },
        generalResults: {
          totalCost: 4711345525.785335,
          areaContaminated: 17860000,
        },
      },
      Industrial: {
        characterizationSamplingResults: {
          workDays: 8524.2832760318,
          onSiteDays: 392791.0706828232,
          phaseCost: 1930774815.6877751,
        },
        sourceReductionResults: {
          workDays: 1033.751578893697,
          onSiteDays: 1033.751578893697,
          phaseCost: 62755041.61761452,
        },
        decontaminationResults: {
          workDays: 20.11364178525136,
          onSiteDays: 22.143993663867935,
          phaseCost: 720027084.0040175,
        },
        incidentCommandResults: {
          onSiteDays: 393854.9662553808,
          phaseCost: 971175168.1740005,
        },
        otherResults: {
          otherCosts: 94734096.34919144,
        },
        generalResults: {
          totalCost: 3779466205.8325996,
          areaContaminated: 17860000,
        },
      },
    },
    Outdoor: {
      characterizationSamplingResults: {
        workDays: 18060.512374286245,
        onSiteDays: 262603.5493131227,
        phaseCost: 4362249253.979831,
      },
      sourceReductionResults: {
        workDays: 17088.626450315955,
        onSiteDays: 17088.626450315955,
        phaseCost: 494142255.8814255,
      },
      decontaminationResults: {
        workDays: 18.4240484715961,
        onSiteDays: 20.110702446687664,
        phaseCost: 310398753.29024327,
      },
      incidentCommandResults: {
        onSiteDays: 279720.2864658853,
        phaseCost: 693297199.0227196,
      },
      otherResults: {
        otherCosts: 53070599.4046375,
      },
      generalResults: {
        totalCost: 5913158061.578856,
        areaContaminated: 34460000,
      },
    },
    Underground: {
      characterizationSamplingResults: {
        workDays: 34129.25399543601,
        onSiteDays: 5623381.491024268,
        phaseCost: 17955652375.395515,
      },
      sourceReductionResults: {
        workDays: 13151.436102736812,
        onSiteDays: 13151.436102736812,
        phaseCost: 1667590165.557803,
      },
      decontaminationResults: {
        workDays: 19.14510521342631,
        onSiteDays: 21.358173840995452,
        phaseCost: 2259211427.8742104,
      },
      incidentCommandResults: {
        onSiteDays: 5636562.285300845,
        phaseCost: 13753645738.661259,
      },
      otherResults: {
        otherCosts: 1085068950.6193945,
      },
      generalResults: {
        totalCost: 36721168658.10818,
        areaContaminated: 40860000,
      },
    },
  },
];

export default mockResults;
