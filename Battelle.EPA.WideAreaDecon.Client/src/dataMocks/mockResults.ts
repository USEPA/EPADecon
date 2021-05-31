import IJobResultRealization from '@/interfaces/jobs/results/IJobResultRealization';

const mockResults: IJobResultRealization[] = [
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.2593690489039828,
          onSiteDays: 8.68591111234779,
          phaseCost: 362568,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.6243461171220845,
          onSiteDays: 16.78305814991253,
          phaseCost: 1020975,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.883715166026067,
          onSiteDays: 25.468969262260323,
          phaseCost: 1383543,
        },
        sourceReductionResults: { workDays: 0.5555314178131265, onSiteDays: 0.5555314178131265, phaseCost: 100480 },
        decontaminationResults: {
          workDays: 9.079790366599287,
          onSiteDays: 10.016591866504537,
          phaseCost: 206373,
        },
        incidentCommandResults: { onSiteDays: 44.041092546577985, phaseCost: 135409 },
        otherResults: { otherCosts: 79666 },
        generalResults: { totalCost: 2166616, areaContaminated: 8690.140841922288, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 7.171627423002343,
          onSiteDays: 21.19072739420737,
          phaseCost: 918728,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 11.134072037428306,
          onSiteDays: 58.37161246518783,
          phaseCost: 3038019,
        },
        totalCharacterizationSamplingResults: {
          workDays: 18.30569946043065,
          onSiteDays: 79.5623398593952,
          phaseCost: 3956747,
        },
        sourceReductionResults: { workDays: 0.866697198583625, onSiteDays: 0.866697198583625, phaseCost: 180368 },
        decontaminationResults: {
          workDays: 17.20423640874313,
          onSiteDays: 17.867549093409338,
          phaseCost: 185310,
        },
        incidentCommandResults: { onSiteDays: 106.29658615138815, phaseCost: 328526 },
        otherResults: { otherCosts: 82155 },
        generalResults: { totalCost: 5320900, areaContaminated: 8690.140841922288, decontaminationRounds: 4 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.5024375499467064,
        onSiteDays: 25.64149355263475,
        phaseCost: 548836,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.167723083460347,
        onSiteDays: 36.335836909638466,
        phaseCost: 838928,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.670160633407053,
        onSiteDays: 61.977330462273216,
        phaseCost: 1387764,
      },
      sourceReductionResults: { workDays: 0.25550368099658854, onSiteDays: 0.25550368099658854, phaseCost: 25628 },
      decontaminationResults: {
        workDays: 15.282976340335555,
        onSiteDays: 16.109954848678306,
        phaseCost: 185310,
      },
      incidentCommandResults: { onSiteDays: 86.34278899194811, phaseCost: 265624 },
      otherResults: { otherCosts: 56453 },
      generalResults: { totalCost: 2984884, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.0687950546182394,
        onSiteDays: 7.609619400507058,
        phaseCost: 307159,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.123626886462159,
        onSiteDays: 17.45668365060566,
        phaseCost: 1127191,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.192421941080398,
        onSiteDays: 25.06630305111272,
        phaseCost: 1434350,
      },
      sourceReductionResults: { workDays: 0.3766394289445705, onSiteDays: 0.3766394289445705, phaseCost: 90220 },
      decontaminationResults: {
        workDays: 3.913242122371039,
        onSiteDays: 6.408245293751416,
        phaseCost: 102166,
      },
      incidentCommandResults: { onSiteDays: 39.851187773808704, phaseCost: 121737 },
      otherResults: { otherCosts: 78130 },
      generalResults: { totalCost: 2007074, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.1031646722615847,
          onSiteDays: 10.423108654454161,
          phaseCost: 534010,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.777927655443835,
          onSiteDays: 8.283937441047108,
          phaseCost: 497929,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.88109232770542,
          onSiteDays: 18.70704609550127,
          phaseCost: 1031939,
        },
        sourceReductionResults: { workDays: 2.443080713398474, onSiteDays: 2.443080713398474, phaseCost: 372498 },
        decontaminationResults: {
          workDays: 4.038037374391695,
          onSiteDays: 6.974580359639269,
          phaseCost: 240917,
        },
        incidentCommandResults: { onSiteDays: 36.12470716853901, phaseCost: 110651 },
        otherResults: { otherCosts: 89102 },
        generalResults: { totalCost: 2055544, areaContaminated: 14988.12461038775, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.087409166368513,
          onSiteDays: 18.494047851364602,
          phaseCost: 700363,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.341076363435376,
          onSiteDays: 38.48830125980512,
          phaseCost: 1799379,
        },
        totalCharacterizationSamplingResults: {
          workDays: 10.42848552980389,
          onSiteDays: 56.982349111169725,
          phaseCost: 2499742,
        },
        sourceReductionResults: { workDays: 1.7169896403071518, onSiteDays: 1.7169896403071518, phaseCost: 136794 },
        decontaminationResults: {
          workDays: 3.743933647578567,
          onSiteDays: 4.178979241796532,
          phaseCost: 390601,
        },
        incidentCommandResults: { onSiteDays: 70.87831799327341, phaseCost: 219061 },
        otherResults: { otherCosts: 93695 },
        generalResults: { totalCost: 3541318, areaContaminated: 14988.12461038775, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.114045315344455,
        onSiteDays: 25.00785277137829,
        phaseCost: 842380,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.602408670247053,
        onSiteDays: 13.020556715520527,
        phaseCost: 457667,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.716453985591508,
        onSiteDays: 38.028409486898816,
        phaseCost: 1300047,
      },
      sourceReductionResults: { workDays: 2.3735904558163465, onSiteDays: 2.3735904558163465, phaseCost: 235518 },
      decontaminationResults: {
        workDays: 11.277583924186784,
        onSiteDays: 13.974753277603245,
        phaseCost: 72680,
      },
      incidentCommandResults: { onSiteDays: 62.376753220318406, phaseCost: 190565 },
      otherResults: { otherCosts: 133264 },
      generalResults: { totalCost: 2421370, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.1069355384283337,
        onSiteDays: 10.615319858071091,
        phaseCost: 210631,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.041804519583602,
        onSiteDays: 68.00544584871759,
        phaseCost: 1706607,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.148740058011936,
        onSiteDays: 78.62076570678867,
        phaseCost: 1917238,
      },
      sourceReductionResults: { workDays: 0.24543806258876963, onSiteDays: 0.24543806258876963, phaseCost: 41678 },
      decontaminationResults: {
        workDays: 12.868087687033249,
        onSiteDays: 14.420178643059959,
        phaseCost: 399578,
      },
      incidentCommandResults: { onSiteDays: 101.2863824124374, phaseCost: 309125 },
      otherResults: { otherCosts: 87130 },
      generalResults: { totalCost: 3584850, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.9165902857489865,
          onSiteDays: 24.611220541777975,
          phaseCost: 790759,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.7611613539696314,
          onSiteDays: 22.979726578820994,
          phaseCost: 791957,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.677751639718618,
          onSiteDays: 47.59094712059897,
          phaseCost: 1582716,
        },
        sourceReductionResults: { workDays: 0.4292181381076081, onSiteDays: 0.4292181381076081, phaseCost: 50972 },
        decontaminationResults: {
          workDays: 4.784175262270536,
          onSiteDays: 5.726690359815651,
          phaseCost: 63701,
        },
        incidentCommandResults: { onSiteDays: 61.746855618522225, phaseCost: 188478 },
        otherResults: { otherCosts: 106046 },
        generalResults: { totalCost: 2121961, areaContaminated: 8815.64494544073, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.886202840558524,
          onSiteDays: 30.885602374423783,
          phaseCost: 666471,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.667026146381254,
          onSiteDays: 34.23199139067906,
          phaseCost: 721311,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.553228986939779,
          onSiteDays: 65.11759376510284,
          phaseCost: 1387782,
        },
        sourceReductionResults: { workDays: 0.018707209888103843, onSiteDays: 0.018707209888103843, phaseCost: 7553 },
        decontaminationResults: {
          workDays: 4.920975984987098,
          onSiteDays: 6.688576012777299,
          phaseCost: 159229,
        },
        incidentCommandResults: { onSiteDays: 79.82487698776825, phaseCost: 244640 },
        otherResults: { otherCosts: 108695 },
        generalResults: { totalCost: 2235655, areaContaminated: 8815.64494544073, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.2897680654691905,
        onSiteDays: 19.217981250236758,
        phaseCost: 706382,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.6836245993700241,
        onSiteDays: 5.550466057864884,
        phaseCost: 200091,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.9733926648392144,
        onSiteDays: 24.768447308101642,
        phaseCost: 906473,
      },
      sourceReductionResults: { workDays: 1.9793625117767837, onSiteDays: 1.9793625117767837, phaseCost: 439585 },
      decontaminationResults: {
        workDays: 4.030553502736277,
        onSiteDays: 4.25749952002836,
        phaseCost: 187750,
      },
      incidentCommandResults: { onSiteDays: 39.00530933990679, phaseCost: 117763 },
      otherResults: { otherCosts: 133206 },
      generalResults: { totalCost: 1963767, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.0474712899616963,
        onSiteDays: 5.80880096525619,
        phaseCost: 155566,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.6663679166757008,
        onSiteDays: 11.2279810234917,
        phaseCost: 347851,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.713839206637397,
        onSiteDays: 17.03678198874789,
        phaseCost: 503417,
      },
      sourceReductionResults: { workDays: 3.1613981449678534, onSiteDays: 3.1613981449678534, phaseCost: 245023 },
      decontaminationResults: {
        workDays: 3.594328046914732,
        onSiteDays: 5.9483197405814,
        phaseCost: 433474,
      },
      incidentCommandResults: { onSiteDays: 34.14649987429715, phaseCost: 103229 },
      otherResults: { otherCosts: 47642 },
      generalResults: { totalCost: 1455573, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.8866861299909505,
          onSiteDays: 40.04620009892667,
          phaseCost: 802737,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.9490334958555562,
          onSiteDays: 9.141158322641465,
          phaseCost: 122497,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.835719625846506,
          onSiteDays: 49.187358421568135,
          phaseCost: 925234,
        },
        sourceReductionResults: { workDays: 0.46607085913270746, onSiteDays: 0.46607085913270746, phaseCost: 55859 },
        decontaminationResults: {
          workDays: 8.434288931645986,
          onSiteDays: 11.17370769548549,
          phaseCost: 196270,
        },
        incidentCommandResults: { onSiteDays: 68.82713697618632, phaseCost: 209561 },
        otherResults: { otherCosts: 78063 },
        generalResults: { totalCost: 1727180, areaContaminated: 8693.056777979493, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.9070714616585063,
          onSiteDays: 30.97745857919955,
          phaseCost: 563923,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.874278292439327,
          onSiteDays: 28.036559601213504,
          phaseCost: 479489,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.781349754097834,
          onSiteDays: 59.01401818041305,
          phaseCost: 1043412,
        },
        sourceReductionResults: { workDays: 3.1161348205691133, onSiteDays: 3.1161348205691133, phaseCost: 319852 },
        decontaminationResults: {
          workDays: 3.4065300958246296,
          onSiteDays: 5.1841587739028405,
          phaseCost: 351164,
        },
        incidentCommandResults: { onSiteDays: 75.31431177488501, phaseCost: 229822 },
        otherResults: { otherCosts: 76496 },
        generalResults: { totalCost: 2157726, areaContaminated: 8693.056777979493, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.2391360399077227,
        onSiteDays: 16.545096608270555,
        phaseCost: 1000036,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.364873392172381,
        onSiteDays: 6.953423768659051,
        phaseCost: 431895,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.604009432080104,
        onSiteDays: 23.498520376929605,
        phaseCost: 1431931,
      },
      sourceReductionResults: { workDays: 1.970633500745953, onSiteDays: 1.970633500745953, phaseCost: 441414 },
      decontaminationResults: {
        workDays: 16.96051398500812,
        onSiteDays: 16.978866120795455,
        phaseCost: 154605,
      },
      incidentCommandResults: { onSiteDays: 50.44801999847101, phaseCost: 153727 },
      otherResults: { otherCosts: 44853 },
      generalResults: { totalCost: 3002570, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.2443850640155987,
        onSiteDays: 6.519964783603657,
        phaseCost: 215927,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.2552313522617267,
        onSiteDays: 18.79376989484255,
        phaseCost: 754417,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.499616416277325,
        onSiteDays: 25.31373467844621,
        phaseCost: 970344,
      },
      sourceReductionResults: { workDays: 0.37489473399820716, onSiteDays: 0.37489473399820716, phaseCost: 20357 },
      decontaminationResults: {
        workDays: 7.547466763655532,
        onSiteDays: 9.254033357196962,
        phaseCost: 336630,
      },
      incidentCommandResults: { onSiteDays: 42.94266276964138, phaseCost: 129855 },
      otherResults: { otherCosts: 146525 },
      generalResults: { totalCost: 1967565, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.8079080585131846,
          onSiteDays: 5.689353595966968,
          phaseCost: 231148,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.7023123489216246,
          onSiteDays: 6.229436683277969,
          phaseCost: 197746,
        },
        totalCharacterizationSamplingResults: {
          workDays: 1.5102204074348093,
          onSiteDays: 11.918790279244938,
          phaseCost: 428894,
        },
        sourceReductionResults: { workDays: 0.6275946224435841, onSiteDays: 0.6275946224435841, phaseCost: 82624 },
        decontaminationResults: {
          workDays: 4.132841160784672,
          onSiteDays: 4.478822973668302,
          phaseCost: 125639,
        },
        incidentCommandResults: { onSiteDays: 25.025207875356823, phaseCost: 77419 },
        otherResults: { otherCosts: 33750 },
        generalResults: { totalCost: 971201, areaContaminated: 11965.225266051764, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 7.1640783726165065,
          onSiteDays: 24.083817201424658,
          phaseCost: 1221730,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.992613695924179,
          onSiteDays: 21.827772719265532,
          phaseCost: 1144847,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.156692068540686,
          onSiteDays: 45.91158992069019,
          phaseCost: 2366577,
        },
        sourceReductionResults: { workDays: 3.7501020832750944, onSiteDays: 3.7501020832750944, phaseCost: 255814 },
        decontaminationResults: {
          workDays: 8.48231814207563,
          onSiteDays: 10.973257771686942,
          phaseCost: 215049,
        },
        incidentCommandResults: { onSiteDays: 68.63494977565223, phaseCost: 208091 },
        otherResults: { otherCosts: 94096 },
        generalResults: { totalCost: 3602519, areaContaminated: 11965.225266051764, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.5782673329688732,
        onSiteDays: 21.67322192970125,
        phaseCost: 884447,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.9854740227536833,
        onSiteDays: 15.558304636095933,
        phaseCost: 497461,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.563741355722557,
        onSiteDays: 37.23152656579718,
        phaseCost: 1381908,
      },
      sourceReductionResults: { workDays: 1.8523538140474107, onSiteDays: 1.8523538140474107, phaseCost: 162074 },
      decontaminationResults: {
        workDays: 11.201908712322338,
        onSiteDays: 13.9077872403217,
        phaseCost: 319214,
      },
      incidentCommandResults: { onSiteDays: 60.9916676201663, phaseCost: 186384 },
      otherResults: { otherCosts: 55822 },
      generalResults: { totalCost: 2463917, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.959558595089723,
        onSiteDays: 19.77088435631393,
        phaseCost: 924298,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.588356473592188,
        onSiteDays: 10.433116022960277,
        phaseCost: 556480,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.54791506868191,
        onSiteDays: 30.204000379274206,
        phaseCost: 1480778,
      },
      sourceReductionResults: { workDays: 0.26251515392026953, onSiteDays: 0.26251515392026953, phaseCost: 48927 },
      decontaminationResults: {
        workDays: 3.799282630625945,
        onSiteDays: 6.355709458551302,
        phaseCost: 380132,
      },
      incidentCommandResults: { onSiteDays: 44.82222499174578, phaseCost: 138650 },
      otherResults: { otherCosts: 88544 },
      generalResults: { totalCost: 2361367, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.283531276021704,
          onSiteDays: 41.09215918516283,
          phaseCost: 589980,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 10.358280246543156,
          onSiteDays: 101.95853044191443,
          phaseCost: 1853004,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.641811522564861,
          onSiteDays: 143.05068962707725,
          phaseCost: 2442984,
        },
        sourceReductionResults: { workDays: 0.9860165196562822, onSiteDays: 0.9860165196562822, phaseCost: 101028 },
        decontaminationResults: {
          workDays: 15.263501068871353,
          onSiteDays: 15.740151525414586,
          phaseCost: 307183,
        },
        incidentCommandResults: { onSiteDays: 167.7768576721481, phaseCost: 507638 },
        otherResults: { otherCosts: 124466 },
        generalResults: { totalCost: 4320872, areaContaminated: 8643.743799450747, decontaminationRounds: 3 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.5640124045957555,
          onSiteDays: 9.026132862303774,
          phaseCost: 298480,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.0858182659726356,
          onSiteDays: 21.249705138219632,
          phaseCost: 786454,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.649830670568392,
          onSiteDays: 30.275838000523407,
          phaseCost: 1084934,
        },
        sourceReductionResults: { workDays: 0.15856831632036297, onSiteDays: 0.15856831632036297, phaseCost: 33044 },
        decontaminationResults: {
          workDays: 3.543756851587388,
          onSiteDays: 5.776333149703297,
          phaseCost: 47283,
        },
        incidentCommandResults: { onSiteDays: 44.21073946654707, phaseCost: 133415 },
        otherResults: { otherCosts: 117345 },
        generalResults: { totalCost: 1652911, areaContaminated: 8643.743799450747, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.571988915798563,
        onSiteDays: 50.87375484800877,
        phaseCost: 935381,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.86546945567619,
        onSiteDays: 53.59625852535919,
        phaseCost: 1096542,
      },
      totalCharacterizationSamplingResults: {
        workDays: 9.437458371474754,
        onSiteDays: 104.47001337336796,
        phaseCost: 2031923,
      },
      sourceReductionResults: { workDays: 0.1805689245812545, onSiteDays: 0.1805689245812545, phaseCost: 20231 },
      decontaminationResults: {
        workDays: 14.13511445469575,
        onSiteDays: 14.334777226283862,
        phaseCost: 416794,
      },
      incidentCommandResults: { onSiteDays: 126.98535952423308, phaseCost: 384931 },
      otherResults: { otherCosts: 106250 },
      generalResults: { totalCost: 3341834, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.8816955634303802,
        onSiteDays: 34.713786372260685,
        phaseCost: 1034814,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.871566701060039,
        onSiteDays: 17.90312292705534,
        phaseCost: 430268,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.753262264490419,
        onSiteDays: 52.61690929931602,
        phaseCost: 1465082,
      },
      sourceReductionResults: { workDays: 0.6398403955934697, onSiteDays: 0.6398403955934697, phaseCost: 95950 },
      decontaminationResults: {
        workDays: 4.95199939141795,
        onSiteDays: 5.195953158474516,
        phaseCost: 70669,
      },
      incidentCommandResults: { onSiteDays: 66.45270285338401, phaseCost: 200348 },
      otherResults: { otherCosts: 58072 },
      generalResults: { totalCost: 2210525, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.5554353385379271,
          onSiteDays: 13.502066336301608,
          phaseCost: 416821,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.6776648638652598,
          onSiteDays: 12.766753098659818,
          phaseCost: 408762,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.233100202403187,
          onSiteDays: 26.268819434961426,
          phaseCost: 825583,
        },
        sourceReductionResults: { workDays: 6.606483187126802, onSiteDays: 6.606483187126802, phaseCost: 375398 },
        decontaminationResults: {
          workDays: 7.535157513230843,
          onSiteDays: 8.102083392930702,
          phaseCost: 182629,
        },
        incidentCommandResults: { onSiteDays: 48.97738601501893, phaseCost: 149289 },
        otherResults: { otherCosts: 90574 },
        generalResults: { totalCost: 1960066, areaContaminated: 9809.357944133077, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.138886879734804,
          onSiteDays: 14.400182362858997,
          phaseCost: 356613,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.570781730839524,
          onSiteDays: 14.71710793428969,
          phaseCost: 445518,
        },
        totalCharacterizationSamplingResults: {
          workDays: 10.70966861057433,
          onSiteDays: 29.117290297148685,
          phaseCost: 802131,
        },
        sourceReductionResults: { workDays: 3.051911256371057, onSiteDays: 3.051911256371057, phaseCost: 189723 },
        decontaminationResults: {
          workDays: 4.531778201817483,
          onSiteDays: 5.304547586782031,
          phaseCost: 275012,
        },
        incidentCommandResults: { onSiteDays: 45.47374914030177, phaseCost: 140496 },
        otherResults: { otherCosts: 57126 },
        generalResults: { totalCost: 1709187, areaContaminated: 9809.357944133077, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.8919534691113578,
        onSiteDays: 15.586397635107055,
        phaseCost: 371537,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.467444403533671,
        onSiteDays: 21.07448285701969,
        phaseCost: 480107,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.359397872645029,
        onSiteDays: 36.66088049212674,
        phaseCost: 851644,
      },
      sourceReductionResults: { workDays: 2.3652827233569145, onSiteDays: 2.3652827233569145, phaseCost: 148122 },
      decontaminationResults: {
        workDays: 14.26672112575423,
        onSiteDays: 14.846560983417222,
        phaseCost: 314405,
      },
      incidentCommandResults: { onSiteDays: 61.872724198900876, phaseCost: 186234 },
      otherResults: { otherCosts: 78657 },
      generalResults: { totalCost: 1890378, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.5148251314631949,
        onSiteDays: 9.191551600049415,
        phaseCost: 369226,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.56828051287948,
        onSiteDays: 7.33486117910287,
        phaseCost: 244797,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.083105644342675,
        onSiteDays: 16.526412779152285,
        phaseCost: 614023,
      },
      sourceReductionResults: { workDays: 1.8949790006875034, onSiteDays: 1.8949790006875034, phaseCost: 181610 },
      decontaminationResults: {
        workDays: 3.8662142587979824,
        onSiteDays: 6.7336696460223,
        phaseCost: 114728,
      },
      incidentCommandResults: { onSiteDays: 33.15506142586209, phaseCost: 100420 },
      otherResults: { otherCosts: 29906 },
      generalResults: { totalCost: 1267644, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.8157412991682915,
          onSiteDays: 9.898688202076677,
          phaseCost: 492691,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.7613072698598733,
          onSiteDays: 4.523555300824944,
          phaseCost: 173767,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.5770485690281646,
          onSiteDays: 14.42224350290162,
          phaseCost: 666458,
        },
        sourceReductionResults: { workDays: 0.5585062058367267, onSiteDays: 0.5585062058367267, phaseCost: 100205 },
        decontaminationResults: {
          workDays: 7.65930825557078,
          onSiteDays: 9.04362684070217,
          phaseCost: 76162,
        },
        incidentCommandResults: { onSiteDays: 32.02437654944052, phaseCost: 99182 },
        otherResults: { otherCosts: 45927 },
        generalResults: { totalCost: 1426470, areaContaminated: 8092.692727943111, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.8515999120634614,
          onSiteDays: 7.498737916644528,
          phaseCost: 327505,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.486326381987951,
          onSiteDays: 9.590105663399797,
          phaseCost: 424854,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.337926294051412,
          onSiteDays: 17.088843580044326,
          phaseCost: 752359,
        },
        sourceReductionResults: { workDays: 0.31659082818550377, onSiteDays: 0.31659082818550377, phaseCost: 9790 },
        decontaminationResults: {
          workDays: 3.458722239467018,
          onSiteDays: 5.569338321818351,
          phaseCost: 58967,
        },
        incidentCommandResults: { onSiteDays: 30.97477273004818, phaseCost: 93821 },
        otherResults: { otherCosts: 46350 },
        generalResults: { totalCost: 1096238, areaContaminated: 8092.692727943111, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.4349305977854834,
        onSiteDays: 15.54105248936137,
        phaseCost: 1074352,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.5195818334756854,
        onSiteDays: 15.80481108616939,
        phaseCost: 1099635,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.954512431261168,
        onSiteDays: 31.34586357553076,
        phaseCost: 2173987,
      },
      sourceReductionResults: { workDays: 0.412786534987208, onSiteDays: 0.412786534987208, phaseCost: 31704 },
      decontaminationResults: {
        workDays: 3.7344297959316592,
        onSiteDays: 4.119238972458811,
        phaseCost: 323405,
      },
      incidentCommandResults: { onSiteDays: 43.87788908297678, phaseCost: 134777 },
      otherResults: { otherCosts: 118913 },
      generalResults: { totalCost: 2964865, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.490974724491651,
        onSiteDays: 8.251258420235029,
        phaseCost: 447542,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 9.216905573993849,
        onSiteDays: 20.038521944550443,
        phaseCost: 895393,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.707880298485499,
        onSiteDays: 28.28978036478547,
        phaseCost: 1342935,
      },
      sourceReductionResults: { workDays: 2.7355564523321982, onSiteDays: 2.7355564523321982, phaseCost: 301982 },
      decontaminationResults: {
        workDays: 3.304755773000595,
        onSiteDays: 4.031516406692452,
        phaseCost: 244603191795,
      },
      incidentCommandResults: { onSiteDays: 43.05685322381012, phaseCost: 133192 },
      otherResults: { otherCosts: 38204 },
      generalResults: { totalCost: 2252711, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.443667144992243,
          onSiteDays: 12.410742859661354,
          phaseCost: 481490,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 11.583086210582177,
          onSiteDays: 35.08224706666209,
          phaseCost: 1153599,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.02675335557442,
          onSiteDays: 47.492989926323446,
          phaseCost: 1635089,
        },
        sourceReductionResults: { workDays: 0.4686643706984039, onSiteDays: 0.4686643706984039, phaseCost: 27053 },
        decontaminationResults: {
          workDays: 9.293138473595757,
          onSiteDays: 11.262294603805591,
          phaseCost: 491241,
          otherCosts: 465863,
        },
        incidentCommandResults: { onSiteDays: 67.22394890082745, phaseCost: 207620 },
        otherResults: { otherCosts: 57868 },
        generalResults: { totalCost: 2884734, areaContaminated: 13022.67268254018, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.2430608601775806,
          onSiteDays: 13.917161292077347,
          phaseCost: 323290,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.239901285928456,
          onSiteDays: 41.07568640129451,
          phaseCost: 1298196,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.482962146106036,
          onSiteDays: 54.99284769337186,
          phaseCost: 1621486,
        },
        sourceReductionResults: { workDays: 0.7227358014784255, onSiteDays: 0.7227358014784255, phaseCost: 29683 },
        decontaminationResults: {
          workDays: 3.1141687599276584,
          onSiteDays: 5.700219697947665,
          phaseCost: 241020,
          otherCosts: 115849,
        },
        incidentCommandResults: { onSiteDays: 69.41580319279795, phaseCost: 210434 },
        otherResults: { otherCosts: 108681 },
        generalResults: { totalCost: 2327153, areaContaminated: 13022.67268254018, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.493691083670784,
        onSiteDays: 51.99912385068872,
        phaseCost: 1029449,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.355196039929435,
        onSiteDays: 50.58104375820017,
        phaseCost: 983378,
      },
      totalCharacterizationSamplingResults: {
        workDays: 12.84888712360022,
        onSiteDays: 102.58016760888889,
        phaseCost: 2012827,
      },
      sourceReductionResults: { workDays: 1.2318580601093294, onSiteDays: 1.2318580601093294, phaseCost: 76275 },
      decontaminationResults: {
        workDays: 12.393040169354771,
        onSiteDays: 13.816536853978537,
        phaseCost: 389681,
      },
      incidentCommandResults: { onSiteDays: 125.62856252297675, phaseCost: 378689 },
      otherResults: { otherCosts: 79266 },
      generalResults: { totalCost: 3408208, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.9557909201044597,
        onSiteDays: 11.273474766898886,
        phaseCost: 425792,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 23.218075775758216,
        onSiteDays: 78.81112002279987,
        phaseCost: 3090526,
      },
      totalCharacterizationSamplingResults: {
        workDays: 26.173866695862674,
        onSiteDays: 90.08459478969876,
        phaseCost: 3516318,
      },
      sourceReductionResults: { workDays: 0.5818270529907675, onSiteDays: 0.5818270529907675, phaseCost: 129219 },
      decontaminationResults: {
        workDays: 16.604587746924857,
        onSiteDays: 18.875348068279063,
        phaseCost: 211982959910,
      },
      incidentCommandResults: { onSiteDays: 117.54176991096858, phaseCost: 357764 },
      otherResults: { otherCosts: 83987 },
      generalResults: { totalCost: 5259180, areaContaminated: 10000, decontaminationRounds: 3 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 10.15985175358678,
          onSiteDays: 32.710857932527645,
          phaseCost: 603556,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.6624949436063545,
          onSiteDays: 23.129780684464908,
          phaseCost: 544413,
        },
        totalCharacterizationSamplingResults: {
          workDays: 12.822346697193135,
          onSiteDays: 55.84063861699255,
          phaseCost: 1147969,
        },
        sourceReductionResults: { workDays: 1.5512778905679951, onSiteDays: 1.5512778905679951, phaseCost: 70704 },
        decontaminationResults: {
          workDays: 4.27482460096358,
          onSiteDays: 7.26380276779267,
          phaseCost: 466382,
          otherCosts: 304655,
        },
        incidentCommandResults: { onSiteDays: 72.65571927535322, phaseCost: 225006 },
        otherResults: { otherCosts: 106149 },
        generalResults: { totalCost: 2320865, areaContaminated: 11040.891414983404, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 7.7930708976028065,
          onSiteDays: 40.89556400035346,
          phaseCost: 1039220,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.2454344575290959,
          onSiteDays: 9.711498163130432,
          phaseCost: 297696,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.038505355131903,
          onSiteDays: 50.60706216348389,
          phaseCost: 1336916,
        },
        sourceReductionResults: { workDays: 0.3898916281360759, onSiteDays: 0.3898916281360759, phaseCost: 64781 },
        decontaminationResults: {
          workDays: 9.267736041747904,
          onSiteDays: 11.699876492773154,
          phaseCost: 364892,
          otherCosts: 563780,
        },
        incidentCommandResults: { onSiteDays: 70.69683028439312, phaseCost: 214345 },
        otherResults: { otherCosts: 94401 },
        generalResults: { totalCost: 2639115, areaContaminated: 11040.891414983404, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.262317776276737,
        onSiteDays: 16.699145151918902,
        phaseCost: 533496,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.342000282866042,
        onSiteDays: 21.42343473593069,
        phaseCost: 628743,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.604318059142779,
        onSiteDays: 38.1225798878496,
        phaseCost: 1162239,
      },
      sourceReductionResults: { workDays: 3.1406590447794875, onSiteDays: 3.1406590447794875, phaseCost: 182731 },
      decontaminationResults: {
        workDays: 7.242853115602129,
        onSiteDays: 9.774422746797656,
        phaseCost: 179477392207,
      },
      incidentCommandResults: { onSiteDays: 59.03766167942674, phaseCost: 181600 },
      otherResults: { otherCosts: 115704 },
      generalResults: { totalCost: 2213958, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 11.61816822643606,
        onSiteDays: 31.308903013440244,
        phaseCost: 1154931,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 10.634839648485046,
        onSiteDays: 29.11492045888159,
        phaseCost: 889331,
      },
      totalCharacterizationSamplingResults: {
        workDays: 22.253007874921106,
        onSiteDays: 60.42382347232183,
        phaseCost: 2044262,
      },
      sourceReductionResults: { workDays: 0.20052326183894634, onSiteDays: 0.20052326183894634, phaseCost: 18979 },
      decontaminationResults: {
        workDays: 10.850206363445661,
        onSiteDays: 11.128191740049093,
        phaseCost: 45462538160,
      },
      incidentCommandResults: { onSiteDays: 79.75253847420987, phaseCost: 245286 },
      otherResults: { otherCosts: 55400 },
      generalResults: { totalCost: 2947549, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.485707244794272,
          onSiteDays: 16.52130150319421,
          phaseCost: 586288,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 20.92895024354491,
          onSiteDays: 52.408156290301406,
          phaseCost: 1784075,
        },
        totalCharacterizationSamplingResults: {
          workDays: 27.41465748833918,
          onSiteDays: 68.92945779349562,
          phaseCost: 2370363,
        },
        sourceReductionResults: { workDays: 3.185827416904194, onSiteDays: 3.185827416904194, phaseCost: 513757 },
        decontaminationResults: {
          workDays: 18.30512878608544,
          onSiteDays: 20.82718528337479,
          phaseCost: 563500,
          otherCosts: 970070,
        },
        incidentCommandResults: { onSiteDays: 100.9424704937746, phaseCost: 306667 },
        otherResults: { otherCosts: 57673 },
        generalResults: { totalCost: 4782030, areaContaminated: 14486.57420451906, decontaminationRounds: 2 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.3291350366979073,
          onSiteDays: 16.611956664264923,
          phaseCost: 496774,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.081825614629258,
          onSiteDays: 28.76319181198697,
          phaseCost: 706844,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.410960651327166,
          onSiteDays: 45.375148476251894,
          phaseCost: 1203618,
        },
        sourceReductionResults: { workDays: 2.4635293080472676, onSiteDays: 2.4635293080472676, phaseCost: 196810 },
        decontaminationResults: {
          workDays: 7.090435009237946,
          onSiteDays: 7.634875119113102,
          phaseCost: 159197,
          otherCosts: 211224,
        },
        incidentCommandResults: { onSiteDays: 63.47355290341227, phaseCost: 191845 },
        otherResults: { otherCosts: 63308 },
        generalResults: { totalCost: 2026002, areaContaminated: 14486.57420451906, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.51478248203695,
        onSiteDays: 23.785766317895426,
        phaseCost: 871942,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 10.72268038467451,
        onSiteDays: 30.99868223247669,
        phaseCost: 1021251,
      },
      totalCharacterizationSamplingResults: {
        workDays: 15.23746286671146,
        onSiteDays: 54.78444855037212,
        phaseCost: 1893193,
      },
      sourceReductionResults: { workDays: 0.8740550458550164, onSiteDays: 0.8740550458550164, phaseCost: 117553 },
      decontaminationResults: {
        workDays: 11.021018142816848,
        onSiteDays: 11.927999611927197,
        phaseCost: 46568904429,
      },
      incidentCommandResults: { onSiteDays: 75.58650320815433, phaseCost: 229544 },
      otherResults: { otherCosts: 78694 },
      generalResults: { totalCost: 3269981, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.4222903848403332,
        onSiteDays: 12.230186574858529,
        phaseCost: 422004,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.482645063551622,
        onSiteDays: 14.591018943341798,
        phaseCost: 573794,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.904935448391955,
        onSiteDays: 26.821205518200326,
        phaseCost: 995798,
      },
      sourceReductionResults: { workDays: 4.417916095857946, onSiteDays: 4.417916095857946, phaseCost: 254635 },
      decontaminationResults: {
        workDays: 4.610312790519165,
        onSiteDays: 5.35082136312286,
        phaseCost: 334802286730,
      },
      incidentCommandResults: { onSiteDays: 44.58994297718113, phaseCost: 137944 },
      otherResults: { otherCosts: 64067 },
      generalResults: { totalCost: 2073976, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.267253808516646,
          onSiteDays: 17.313281131149367,
          phaseCost: 595288,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 26.412591995515,
          onSiteDays: 54.79750566691628,
          phaseCost: 1818681,
        },
        totalCharacterizationSamplingResults: {
          workDays: 32.67984580403164,
          onSiteDays: 72.11078679806565,
          phaseCost: 2413969,
        },
        sourceReductionResults: { workDays: 0.33598649647610734, onSiteDays: 0.33598649647610734, phaseCost: 72715 },
        decontaminationResults: {
          workDays: 4.110648572237848,
          onSiteDays: 4.305978735281616,
          phaseCost: 431551,
          otherCosts: 221380,
        },
        incidentCommandResults: { onSiteDays: 84.75275202982337, phaseCost: 256466 },
        otherResults: { otherCosts: 106965 },
        generalResults: { totalCost: 3503046, areaContaminated: 14976.79968596827, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.0253050195316646,
          onSiteDays: 12.198791192803514,
          phaseCost: 484443,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 12.960050210272247,
          onSiteDays: 43.67130841365322,
          phaseCost: 1716325,
        },
        totalCharacterizationSamplingResults: {
          workDays: 15.985355229803911,
          onSiteDays: 55.87009960645673,
          phaseCost: 2200768,
        },
        sourceReductionResults: { workDays: 0.19770460489566824, onSiteDays: 0.19770460489566824, phaseCost: 15976 },
        decontaminationResults: {
          workDays: 13.062958778362479,
          onSiteDays: 15.168865676310116,
          phaseCost: 234904,
          otherCosts: 902544,
        },
        incidentCommandResults: { onSiteDays: 79.23666988766252, phaseCost: 243337 },
        otherResults: { otherCosts: 90238 },
        generalResults: { totalCost: 3687767, areaContaminated: 14976.79968596827, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.6110627318138127,
        onSiteDays: 3.783080535193415,
        phaseCost: 173755,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.7175041538111415,
        onSiteDays: 8.714524236596022,
        phaseCost: 623405,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.328566885624954,
        onSiteDays: 12.497604771789437,
        phaseCost: 797160,
      },
      sourceReductionResults: { workDays: 0.3746421831706485, onSiteDays: 0.3746421831706485, phaseCost: 41647 },
      decontaminationResults: {
        workDays: 8.275484578282452,
        onSiteDays: 9.782427921607724,
        phaseCost: 169790500501,
      },
      incidentCommandResults: { onSiteDays: 30.65467487656781, phaseCost: 93201 },
      otherResults: { otherCosts: 93516 },
      generalResults: { totalCost: 1695815, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.968614661962486,
        onSiteDays: 25.075761984653102,
        phaseCost: 851739,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.077589158288201,
        onSiteDays: 11.216029380173719,
        phaseCost: 319277,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.046203820250687,
        onSiteDays: 36.29179136482682,
        phaseCost: 1171016,
      },
      sourceReductionResults: { workDays: 1.6138775761019652, onSiteDays: 1.6138775761019652, phaseCost: 380945 },
      decontaminationResults: {
        workDays: 3.3999959524720897,
        onSiteDays: 5.124563037214001,
        phaseCost: 86640174997,
      },
      incidentCommandResults: { onSiteDays: 51.03023197814279, phaseCost: 154848 },
      otherResults: { otherCosts: 99531 },
      generalResults: { totalCost: 2067977, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.758345309411988,
          onSiteDays: 26.528672658648574,
          phaseCost: 1088152,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.479865116187521,
          onSiteDays: 19.838764999439572,
          phaseCost: 940913,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.238210425599508,
          onSiteDays: 46.36743765808815,
          phaseCost: 2029065,
        },
        sourceReductionResults: { workDays: 0.13777538567414518, onSiteDays: 0.13777538567414518, phaseCost: 42684 },
        decontaminationResults: {
          workDays: 3.049409344338209,
          onSiteDays: 5.025386950938354,
          phaseCost: 160848,
          otherCosts: 107056,
        },
        incidentCommandResults: { onSiteDays: 59.53059999470065, phaseCost: 181468 },
        otherResults: { otherCosts: 106313 },
        generalResults: { totalCost: 2627434, areaContaminated: 9285.819668855009, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.03552045183566,
          onSiteDays: 16.895536485626213,
          phaseCost: 653552,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.820519785931429,
          onSiteDays: 30.615301823947846,
          phaseCost: 1124851,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.85604023776709,
          onSiteDays: 47.510838309574055,
          phaseCost: 1778403,
        },
        sourceReductionResults: { workDays: 1.2508951223732987, onSiteDays: 1.2508951223732987, phaseCost: 172685 },
        decontaminationResults: {
          workDays: 9.374235734197832,
          onSiteDays: 12.016119937416194,
          phaseCost: 84797,
          otherCosts: 202201,
        },
        incidentCommandResults: { onSiteDays: 68.77785336936356, phaseCost: 211115 },
        otherResults: { otherCosts: 133951 },
        generalResults: { totalCost: 2583152, areaContaminated: 9285.819668855009, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.746408739656459,
        onSiteDays: 14.761914941415338,
        phaseCost: 731447,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.8824586083356827,
        onSiteDays: 4.956336678546857,
        phaseCost: 235403,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.628867347992142,
        onSiteDays: 19.718251619962196,
        phaseCost: 966850,
      },
      sourceReductionResults: { workDays: 0.9612647199485768, onSiteDays: 0.9612647199485768, phaseCost: 80199 },
      decontaminationResults: {
        workDays: 7.316539367036087,
        onSiteDays: 9.4602952181502,
        phaseCost: 320514298105,
      },
      incidentCommandResults: { onSiteDays: 38.13981155806097, phaseCost: 118185 },
      otherResults: { otherCosts: 81692 },
      generalResults: { totalCost: 1865545, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.6358941137128635,
        onSiteDays: 18.254296911796594,
        phaseCost: 476149,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.058897700963268,
        onSiteDays: 26.33097859429511,
        phaseCost: 759661,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.694791814676131,
        onSiteDays: 44.585275506091705,
        phaseCost: 1235810,
      },
      sourceReductionResults: { workDays: 0.21176879228935783, onSiteDays: 0.21176879228935783, phaseCost: 8233 },
      decontaminationResults: {
        workDays: 4.794523536179803,
        onSiteDays: 5.84574270757049,
        phaseCost: 175400226017,
      },
      incidentCommandResults: { onSiteDays: 58.64278700595155, phaseCost: 178730 },
      otherResults: { otherCosts: 58548 },
      generalResults: { totalCost: 1882738, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.0020101272674544,
          onSiteDays: 9.668903806968698,
          phaseCost: 377586,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.5288600067666085,
          onSiteDays: 16.700128650474483,
          phaseCost: 457510,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.530870134034063,
          onSiteDays: 26.369032457443183,
          phaseCost: 835096,
        },
        sourceReductionResults: { workDays: 0.8317471507470819, onSiteDays: 0.8317471507470819, phaseCost: 167226 },
        decontaminationResults: {
          workDays: 9.18889658087606,
          onSiteDays: 9.479336808314393,
          phaseCost: 165748,
          otherCosts: 522209,
        },
        incidentCommandResults: { onSiteDays: 44.68011641650466, phaseCost: 136388 },
        otherResults: { otherCosts: 69487 },
        generalResults: { totalCost: 1896154, areaContaminated: 7143.391157068171, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.4473935639942883,
          onSiteDays: 7.015434056356079,
          phaseCost: 502862,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.381993201245989,
          onSiteDays: 7.5283833318061895,
          phaseCost: 498542,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.8293867652402773,
          onSiteDays: 14.543817388162267,
          phaseCost: 1001404,
        },
        sourceReductionResults: { workDays: 0.6177047464630769, onSiteDays: 0.6177047464630769, phaseCost: 69636 },
        decontaminationResults: {
          workDays: 6.738059787251535,
          onSiteDays: 8.873918597557097,
          phaseCost: 101226,
          otherCosts: 269186,
        },
        incidentCommandResults: { onSiteDays: 32.03544073218244, phaseCost: 98341 },
        otherResults: { otherCosts: 60814 },
        generalResults: { totalCost: 1600607, areaContaminated: 7143.391157068171, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.639201942674106,
        onSiteDays: 16.06049309482014,
        phaseCost: 1086989,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.0084563832300875,
        onSiteDays: 14.780013666739805,
        phaseCost: 876160,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.647658325904192,
        onSiteDays: 30.840506761559944,
        phaseCost: 1963149,
      },
      sourceReductionResults: { workDays: 5.191391105228117, onSiteDays: 5.191391105228117, phaseCost: 429307 },
      decontaminationResults: {
        workDays: 13.400901452265892,
        onSiteDays: 14.708980046843408,
        phaseCost: 254055778937,
      },
      incidentCommandResults: { onSiteDays: 58.740877913631465, phaseCost: 180306 },
      otherResults: { otherCosts: 92415 },
      generalResults: { totalCost: 3698169, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.8936061336256444,
        onSiteDays: 11.071876480617478,
        phaseCost: 627052,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.322765112753088,
        onSiteDays: 16.635981553937366,
        phaseCost: 723683,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.216371246378733,
        onSiteDays: 27.707858034554846,
        phaseCost: 1350735,
      },
      sourceReductionResults: { workDays: 1.3009875093092207, onSiteDays: 1.3009875093092207, phaseCost: 194242 },
      decontaminationResults: {
        workDays: 4.635096885644621,
        onSiteDays: 7.310358845701059,
        phaseCost: 328516270135,
      },
      incidentCommandResults: { onSiteDays: 44.31920438956512, phaseCost: 135610 },
      otherResults: { otherCosts: 78760 },
      generalResults: { totalCost: 2357998, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.5886922203092348,
          onSiteDays: 8.904253323621019,
          phaseCost: 465104,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.5973216471406453,
          onSiteDays: 9.785935042547695,
          phaseCost: 598755,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.18601386744988,
          onSiteDays: 18.690188366168712,
          phaseCost: 1063859,
        },
        sourceReductionResults: { workDays: 0.6372944401053933, onSiteDays: 0.6372944401053933, phaseCost: 92189 },
        decontaminationResults: {
          workDays: 4.268510144033588,
          onSiteDays: 4.744340500501995,
          phaseCost: 48422,
          otherCosts: 282720,
        },
        incidentCommandResults: { onSiteDays: 32.071823306776096, phaseCost: 97743 },
        otherResults: { otherCosts: 59755 },
        generalResults: { totalCost: 1644688, areaContaminated: 6358.082455433459, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.0254394294068416,
          onSiteDays: 12.200573214728285,
          phaseCost: 970507,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.3477779406275303,
          onSiteDays: 10.464646567032268,
          phaseCost: 770866,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.3732173700343715,
          onSiteDays: 22.665219781760555,
          phaseCost: 1741373,
        },
        sourceReductionResults: { workDays: 0.029518317307599577, onSiteDays: 0.029518317307599577, phaseCost: 12804 },
        decontaminationResults: {
          workDays: 4.015996916456148,
          onSiteDays: 4.2396779966633025,
          phaseCost: 73533,
          otherCosts: 262288,
        },
        incidentCommandResults: { onSiteDays: 34.93441609573146, phaseCost: 107779 },
        otherResults: { otherCosts: 101549 },
        generalResults: { totalCost: 2299326, areaContaminated: 6358.082455433459, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.0032289296588575,
        onSiteDays: 21.203340581747227,
        phaseCost: 524687,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.336054444195215,
        onSiteDays: 25.905047530696507,
        phaseCost: 634520,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.339283373854073,
        onSiteDays: 47.108388112443734,
        phaseCost: 1159207,
      },
      sourceReductionResults: { workDays: 1.8838709997074363, onSiteDays: 1.8838709997074363, phaseCost: 144949 },
      decontaminationResults: {
        workDays: 16.272176853910132,
        onSiteDays: 19.009980588455218,
        phaseCost: 77587577301,
      },
      incidentCommandResults: { onSiteDays: 76.00223970060638, phaseCost: 232980 },
      otherResults: { otherCosts: 87012 },
      generalResults: { totalCost: 2279036, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 13.999035758867961,
        onSiteDays: 23.242197323917615,
        phaseCost: 951780,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.9893391952016816,
        onSiteDays: 4.765439440909893,
        phaseCost: 364610,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.988374954069643,
        onSiteDays: 28.00763676482751,
        phaseCost: 1316390,
      },
      sourceReductionResults: { workDays: 0.1932292288562527, onSiteDays: 0.1932292288562527, phaseCost: 8626 },
      decontaminationResults: {
        workDays: 8.016910416078034,
        onSiteDays: 9.01427675225173,
        phaseCost: 215637176261,
      },
      incidentCommandResults: { onSiteDays: 45.215142745935495, phaseCost: 138409 },
      otherResults: { otherCosts: 101808 },
      generalResults: { totalCost: 1957131, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.8578218293978384,
          onSiteDays: 20.91748670212366,
          phaseCost: 815473,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.289133278699634,
          onSiteDays: 31.56933988536459,
          phaseCost: 1079978,
        },
        totalCharacterizationSamplingResults: {
          workDays: 10.146955108097472,
          onSiteDays: 52.48682658748825,
          phaseCost: 1895451,
        },
        sourceReductionResults: { workDays: 1.5298283534336832, onSiteDays: 1.5298283534336832, phaseCost: 61490 },
        decontaminationResults: {
          workDays: 3.628820735641946,
          onSiteDays: 3.7106608929370206,
          phaseCost: 189995,
          otherCosts: 119559,
        },
        incidentCommandResults: { onSiteDays: 65.72731583385897, phaseCost: 201302 },
        otherResults: { otherCosts: 60429 },
        generalResults: { totalCost: 2528226, areaContaminated: 7882.583637927329, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.6380794069111886,
          onSiteDays: 11.62381666603481,
          phaseCost: 524012,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.4788239235797032,
          onSiteDays: 7.840903740194621,
          phaseCost: 345424,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.116903330490892,
          onSiteDays: 19.464720406229432,
          phaseCost: 869436,
        },
        sourceReductionResults: { workDays: 1.526645019076729, onSiteDays: 1.526645019076729, phaseCost: 225650 },
        decontaminationResults: {
          workDays: 8.274484382074904,
          onSiteDays: 8.923712661472083,
          phaseCost: 245766,
          otherCosts: 162736,
        },
        incidentCommandResults: { onSiteDays: 37.915078086778244, phaseCost: 116823 },
        otherResults: { otherCosts: 145886 },
        generalResults: { totalCost: 1766297, areaContaminated: 7882.583637927329, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.4909431953108623,
        onSiteDays: 17.838616532446636,
        phaseCost: 859819,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.7356262282034223,
        onSiteDays: 20.76635788819336,
        phaseCost: 1021712,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.2265694235142846,
        onSiteDays: 38.60497442064,
        phaseCost: 1881531,
      },
      sourceReductionResults: { workDays: 1.0663798140462541, onSiteDays: 1.0663798140462541, phaseCost: 188027 },
      decontaminationResults: {
        workDays: 16.733662534210286,
        onSiteDays: 18.85694313651345,
        phaseCost: 309340386643,
      },
      incidentCommandResults: { onSiteDays: 66.5282973711997, phaseCost: 202425 },
      otherResults: { otherCosts: 97930 },
      generalResults: { totalCost: 3065896, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.9995353630564854,
        onSiteDays: 10.738093647014225,
        phaseCost: 294253,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.229999837224501,
        onSiteDays: 23.826761131114115,
        phaseCost: 662406,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.229535200280986,
        onSiteDays: 34.564854778128336,
        phaseCost: 956659,
      },
      sourceReductionResults: { workDays: 0.7667189381297864, onSiteDays: 0.7667189381297864, phaseCost: 122485 },
      decontaminationResults: {
        workDays: 4.343047587048041,
        onSiteDays: 6.663298403067351,
        phaseCost: 250361272386,
      },
      incidentCommandResults: { onSiteDays: 49.99487211932547, phaseCost: 153954 },
      otherResults: { otherCosts: 96184 },
      generalResults: { totalCost: 1852029, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.7243514843722867,
          onSiteDays: 5.888992860141589,
          phaseCost: 208945,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.8814536059297882,
          onSiteDays: 6.764522538073308,
          phaseCost: 216946,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.605805090302075,
          onSiteDays: 12.653515398214896,
          phaseCost: 425891,
        },
        sourceReductionResults: { workDays: 0.47795595776108274, onSiteDays: 0.47795595776108274, phaseCost: 95021 },
        decontaminationResults: {
          workDays: 7.194095270054903,
          onSiteDays: 8.991351477799785,
          phaseCost: 470064,
          otherCosts: 587056,
        },
        incidentCommandResults: { onSiteDays: 30.122822833775764, phaseCost: 92690 },
        otherResults: { otherCosts: 59712 },
        generalResults: { totalCost: 1730434, areaContaminated: 11273.605103202537, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.7541957256532297,
          onSiteDays: 13.149364616872107,
          phaseCost: 571196,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.290868556110614,
          onSiteDays: 14.338004248157844,
          phaseCost: 758512,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.045064281763844,
          onSiteDays: 27.48736886502995,
          phaseCost: 1329708,
        },
        sourceReductionResults: { workDays: 0.2544069667024367, onSiteDays: 0.2544069667024367, phaseCost: 22969 },
        decontaminationResults: {
          workDays: 3.4965859606155627,
          onSiteDays: 5.503180928645465,
          phaseCost: 297557,
          otherCosts: 120759,
        },
        incidentCommandResults: { onSiteDays: 41.24495676037785, phaseCost: 126342 },
        otherResults: { otherCosts: 66939 },
        generalResults: { totalCost: 1964274, areaContaminated: 11273.605103202537, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.1127291489585183,
        onSiteDays: 8.716735427388594,
        phaseCost: 298089,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.433181527120545,
        onSiteDays: 22.542370842118903,
        phaseCost: 1096617,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.545910676079063,
        onSiteDays: 31.259106269507498,
        phaseCost: 1394706,
      },
      sourceReductionResults: { workDays: 2.4721660680906603, onSiteDays: 2.4721660680906603, phaseCost: 124579 },
      decontaminationResults: {
        workDays: 12.675059049314601,
        onSiteDays: 12.94436241359086,
        phaseCost: 193424667035,
      },
      incidentCommandResults: { onSiteDays: 54.675634751189016, phaseCost: 167781 },
      otherResults: { otherCosts: 69830 },
      generalResults: { totalCost: 2617355, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.7222980141456852,
        onSiteDays: 11.126571459933693,
        phaseCost: 551879,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.24408379642344,
        onSiteDays: 19.52916699379799,
        phaseCost: 942306,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.966381810569125,
        onSiteDays: 30.655738453731683,
        phaseCost: 1494185,
      },
      sourceReductionResults: { workDays: 0.04226000437874536, onSiteDays: 0.04226000437874536, phaseCost: 4438 },
      decontaminationResults: {
        workDays: 9.00269910483684,
        onSiteDays: 9.452264813811581,
        phaseCost: 399915750448,
      },
      incidentCommandResults: { onSiteDays: 48.150263271922014, phaseCost: 149062 },
      otherResults: { otherCosts: 34874 },
      generalResults: { totalCost: 2832922, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.0264092264089846,
          onSiteDays: 12.219962971114475,
          phaseCost: 536774,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.434965293924494,
          onSiteDays: 20.38772836414492,
          phaseCost: 1136567,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.461374520333479,
          onSiteDays: 32.607691335259396,
          phaseCost: 1673341,
        },
        sourceReductionResults: { workDays: 0.34253416277352594, onSiteDays: 0.34253416277352594, phaseCost: 29567 },
        decontaminationResults: {
          workDays: 8.268961411032118,
          onSiteDays: 9.895491153675945,
          phaseCost: 319574,
          otherCosts: 668566,
        },
        incidentCommandResults: { onSiteDays: 50.84571665170887, phaseCost: 154906 },
        otherResults: { otherCosts: 71187 },
        generalResults: { totalCost: 2917141, areaContaminated: 8797.800604672588, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.8314631753401938,
          onSiteDays: 26.892400993724273,
          phaseCost: 879626,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.000120293629531,
          onSiteDays: 35.986006575655324,
          phaseCost: 1204258,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.8315834689697255,
          onSiteDays: 62.8784075693796,
          phaseCost: 2083884,
        },
        sourceReductionResults: { workDays: 0.4527749022731598, onSiteDays: 0.4527749022731598, phaseCost: 37135 },
        decontaminationResults: {
          workDays: 14.558782511520846,
          onSiteDays: 16.523536064551102,
          phaseCost: 140108,
          otherCosts: 921737,
        },
        incidentCommandResults: { onSiteDays: 87.85471853620386, phaseCost: 268794 },
        otherResults: { otherCosts: 45376 },
        generalResults: { totalCost: 3497034, areaContaminated: 8797.800604672588, decontaminationRounds: 3 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.369152919369503,
        onSiteDays: 15.957244722987856,
        phaseCost: 592459,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.5030302975985372,
        onSiteDays: 26.593610803204044,
        phaseCost: 1103704,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.87218321696804,
        onSiteDays: 42.550855526191896,
        phaseCost: 1696163,
      },
      sourceReductionResults: { workDays: 0.41183528893824733, onSiteDays: 0.41183528893824733, phaseCost: 21043 },
      decontaminationResults: {
        workDays: 3.3920701584760264,
        onSiteDays: 4.334914275755853,
        phaseCost: 342908153402,
      },
      incidentCommandResults: { onSiteDays: 55.297605090885995, phaseCost: 170020 },
      otherResults: { otherCosts: 54913 },
      generalResults: { totalCost: 2438449, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.185635315402804,
        onSiteDays: 16.301802429558634,
        phaseCost: 1073538,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.3209154540171137,
        onSiteDays: 5.741961343770878,
        phaseCost: 300396,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.506550769419917,
        onSiteDays: 22.043763773329513,
        phaseCost: 1373934,
      },
      sourceReductionResults: { workDays: 1.3208791691728294, onSiteDays: 1.3208791691728294, phaseCost: 108031 },
      decontaminationResults: {
        workDays: 9.05157396221803,
        onSiteDays: 10.335979184446852,
        phaseCost: 218672322609,
      },
      incidentCommandResults: { onSiteDays: 41.7006221269492, phaseCost: 129343 },
      otherResults: { otherCosts: 51214 },
      generalResults: { totalCost: 2203803, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.3596679357838513,
          onSiteDays: 10.64073521838511,
          phaseCost: 410533,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.2360290033450474,
          onSiteDays: 7.934742396114633,
          phaseCost: 326688,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.595696939128898,
          onSiteDays: 18.575477614499743,
          phaseCost: 737221,
        },
        sourceReductionResults: { workDays: 1.573303364528814, onSiteDays: 1.573303364528814, phaseCost: 235293 },
        decontaminationResults: {
          workDays: 9.349408538394936,
          onSiteDays: 10.483852623841692,
          phaseCost: 546836,
          otherCosts: 572233,
        },
        incidentCommandResults: { onSiteDays: 38.63263360287025, phaseCost: 116937 },
        otherResults: { otherCosts: 85751 },
        generalResults: { totalCost: 2294271, areaContaminated: 12655.894730159987, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.6066230861386019,
          onSiteDays: 4.399130801858479,
          phaseCost: 173703,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.8889234481895496,
          onSiteDays: 7.669951237803266,
          phaseCost: 387465,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.4955465343281515,
          onSiteDays: 12.069082039661744,
          phaseCost: 561168,
        },
        sourceReductionResults: { workDays: 0.1939263450630379, onSiteDays: 0.1939263450630379, phaseCost: 29511 },
        decontaminationResults: {
          workDays: 4.721586101623622,
          onSiteDays: 6.701410435303443,
          phaseCost: 410207,
          otherCosts: 123204,
        },
        incidentCommandResults: { onSiteDays: 26.964418820028225, phaseCost: 82615 },
        otherResults: { otherCosts: 60589 },
        generalResults: { totalCost: 1267294, areaContaminated: 12655.894730159987, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.7351612149931153,
        onSiteDays: 9.378257605110083,
        phaseCost: 615875,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 9.530999579189555,
        onSiteDays: 22.353240614005443,
        phaseCost: 1115657,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.26616079418267,
        onSiteDays: 31.731498219115526,
        phaseCost: 1731532,
      },
      sourceReductionResults: { workDays: 1.0401238219448223, onSiteDays: 1.0401238219448223, phaseCost: 72657 },
      decontaminationResults: {
        workDays: 13.678444034112255,
        onSiteDays: 14.500376974814658,
        phaseCost: 178278484138,
      },
      incidentCommandResults: { onSiteDays: 55.271999015875004, phaseCost: 169286 },
      otherResults: { otherCosts: 76295 },
      generalResults: { totalCost: 2712186, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.554042868577729,
        onSiteDays: 39.60750994126979,
        phaseCost: 695418,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.0355915537708436,
        onSiteDays: 31.49483498921833,
        phaseCost: 577428,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.589634422348572,
        onSiteDays: 71.10234493048812,
        phaseCost: 1272846,
      },
      sourceReductionResults: { workDays: 0.3311697518995711, onSiteDays: 0.3311697518995711, phaseCost: 32203 },
      decontaminationResults: {
        workDays: 4.94234092206283,
        onSiteDays: 4.951186702109684,
        phaseCost: 78718146981,
      },
      incidentCommandResults: { onSiteDays: 84.38470138449736, phaseCost: 259492 },
      otherResults: { otherCosts: 87479 },
      generalResults: { totalCost: 1877719, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.0616331967075752,
          onSiteDays: 6.767597870463692,
          phaseCost: 391495,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.6588301859708134,
          onSiteDays: 10.05143067960488,
          phaseCost: 376332,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.7204633826783886,
          onSiteDays: 16.819028550068573,
          phaseCost: 767827,
        },
        sourceReductionResults: { workDays: 0.169056870016324, onSiteDays: 0.169056870016324, phaseCost: 33241 },
        decontaminationResults: {
          workDays: 3.5737038307296354,
          onSiteDays: 4.700337331206616,
          phaseCost: 418392,
          otherCosts: 230273,
        },
        incidentCommandResults: { onSiteDays: 29.68842275129151, phaseCost: 90823 },
        otherResults: { otherCosts: 79738 },
        generalResults: { totalCost: 1620294, areaContaminated: 10349.661322624808, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.60891374616676,
          onSiteDays: 14.381475072632735,
          phaseCost: 447019,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.06354817342027,
          onSiteDays: 8.166034790788554,
          phaseCost: 289817,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.67246191958703,
          onSiteDays: 22.54750986342129,
          phaseCost: 736836,
        },
        sourceReductionResults: { workDays: 0.303211321059066, onSiteDays: 0.303211321059066, phaseCost: 36918 },
        decontaminationResults: {
          workDays: 9.016208566030535,
          onSiteDays: 10.01021013804949,
          phaseCost: 222639,
          otherCosts: 299553,
        },
        incidentCommandResults: { onSiteDays: 40.86093132252985, phaseCost: 125665 },
        otherResults: { otherCosts: 157626 },
        generalResults: { totalCost: 1579237, areaContaminated: 10349.661322624808, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.358237105374411,
        onSiteDays: 15.933232635429112,
        phaseCost: 680059,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.1591824856554651,
        onSiteDays: 8.61865595612561,
        phaseCost: 314197,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.517419591029876,
        onSiteDays: 24.55188859155472,
        phaseCost: 994256,
      },
      sourceReductionResults: { workDays: 6.783070235351867, onSiteDays: 6.783070235351867, phaseCost: 404951 },
      decontaminationResults: {
        workDays: 14.062446688083572,
        onSiteDays: 14.96505203749171,
        phaseCost: 408832912290,
      },
      incidentCommandResults: { onSiteDays: 54.3000108643983, phaseCost: 163866 },
      otherResults: { otherCosts: 31115 },
      generalResults: { totalCost: 2915310, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.284274975169673,
        onSiteDays: 18.18450474338583,
        phaseCost: 633583,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.343944913789556,
        onSiteDays: 18.860575599975476,
        phaseCost: 891427,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.62821988895923,
        onSiteDays: 37.045080343361306,
        phaseCost: 1525010,
      },
      sourceReductionResults: { workDays: 1.612041301597026, onSiteDays: 1.612041301597026, phaseCost: 119756 },
      decontaminationResults: {
        workDays: 6.950183957570742,
        onSiteDays: 7.479940490908907,
        phaseCost: 66556390215,
      },
      incidentCommandResults: { onSiteDays: 54.13706213586724, phaseCost: 166610 },
      otherResults: { otherCosts: 77130 },
      generalResults: { totalCost: 2345277, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.0762423048807892,
          onSiteDays: 6.158333321627289,
          phaseCost: 349657,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 9.95526877197231,
          onSiteDays: 40.13837883380154,
          phaseCost: 1525090,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.0315110768531,
          onSiteDays: 46.29671215542883,
          phaseCost: 1874747,
        },
        sourceReductionResults: { workDays: 0.4252033174766314, onSiteDays: 0.4252033174766314, phaseCost: 60960 },
        decontaminationResults: {
          workDays: 18.52116036450517,
          onSiteDays: 19.799413260025766,
          phaseCost: 197828,
          otherCosts: 645376,
        },
        incidentCommandResults: { onSiteDays: 74.52132873293122, phaseCost: 226451 },
        otherResults: { otherCosts: 74665 },
        generalResults: { totalCost: 3080027, areaContaminated: 5092.064552030542, decontaminationRounds: 3 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.1158842522477634,
          onSiteDays: 9.671798530615195,
          phaseCost: 283276,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.0883581095728236,
          onSiteDays: 7.371319563500549,
          phaseCost: 197871,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.204242361820587,
          onSiteDays: 17.043118094115744,
          phaseCost: 481147,
        },
        sourceReductionResults: { workDays: 2.0610383236567764, onSiteDays: 2.0610383236567764, phaseCost: 154943 },
        decontaminationResults: {
          workDays: 9.16561887999196,
          onSiteDays: 11.667015567344384,
          phaseCost: 101712,
          otherCosts: 384197,
        },
        incidentCommandResults: { onSiteDays: 38.77117198511691, phaseCost: 118048 },
        otherResults: { otherCosts: 74182 },
        generalResults: { totalCost: 1314229, areaContaminated: 5092.064552030542, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.3658602271951874,
        onSiteDays: 4.837708474053404,
        phaseCost: 227226,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.564049465997433,
        onSiteDays: 15.188055189146791,
        phaseCost: 593647,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.929909693192621,
        onSiteDays: 20.025763663200195,
        phaseCost: 820873,
      },
      sourceReductionResults: { workDays: 1.189206361105582, onSiteDays: 1.189206361105582, phaseCost: 219721 },
      decontaminationResults: {
        workDays: 11.552466686012332,
        onSiteDays: 13.129336365994376,
        phaseCost: 331279616956,
      },
      incidentCommandResults: { onSiteDays: 42.344306390300154, phaseCost: 130115 },
      otherResults: { otherCosts: 79941 },
      generalResults: { totalCost: 2198885, areaContaminated: 10000, decontaminationRounds: 2 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.9314816753641177,
        onSiteDays: 12.645345832020201,
        phaseCost: 233514,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.297568775152127,
        onSiteDays: 45.93200308686703,
        phaseCost: 952865,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.229050450516246,
        onSiteDays: 58.577348918887225,
        phaseCost: 1186379,
      },
      sourceReductionResults: { workDays: 1.9817666879284386, onSiteDays: 1.9817666879284386, phaseCost: 80899 },
      decontaminationResults: {
        workDays: 3.1166102593104843,
        onSiteDays: 4.478435080377021,
        phaseCost: 345510126167,
      },
      incidentCommandResults: { onSiteDays: 73.03755068719269, phaseCost: 222953 },
      otherResults: { otherCosts: 64596 },
      generalResults: { totalCost: 2026504, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 7.74845705125557,
          onSiteDays: 33.79383779179682,
          phaseCost: 768560,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.552029506355234,
          onSiteDays: 38.72993662589954,
          phaseCost: 1018579,
        },
        totalCharacterizationSamplingResults: {
          workDays: 15.300486557610803,
          onSiteDays: 72.52377441769636,
          phaseCost: 1787139,
        },
        sourceReductionResults: { workDays: 0.032147627177361714, onSiteDays: 0.032147627177361714, phaseCost: 9205 },
        decontaminationResults: {
          workDays: 11.153623800294852,
          onSiteDays: 13.869764838570209,
          phaseCost: 208696,
          otherCosts: 217148,
        },
        incidentCommandResults: { onSiteDays: 94.42568688344393, phaseCost: 289541 },
        otherResults: { otherCosts: 79758 },
        generalResults: { totalCost: 2591487, areaContaminated: 11876.345408818765, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.3822966074332084,
          onSiteDays: 18.80885312129502,
          phaseCost: 733323,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 33.74819752650318,
          onSiteDays: 135.9887022101824,
          phaseCost: 5682787,
        },
        totalCharacterizationSamplingResults: {
          workDays: 37.130494133936395,
          onSiteDays: 154.7975553314774,
          phaseCost: 6416110,
        },
        sourceReductionResults: { workDays: 0.21393515164832672, onSiteDays: 0.21393515164832672, phaseCost: 25813 },
        decontaminationResults: {
          workDays: 13.833707462491866,
          onSiteDays: 15.560299904216151,
          phaseCost: 329633,
          otherCosts: 1014731,
        },
        incidentCommandResults: { onSiteDays: 178.57179038734188, phaseCost: 542390 },
        otherResults: { otherCosts: 142600 },
        generalResults: { totalCost: 8471277, areaContaminated: 11876.345408818765, decontaminationRounds: 3 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 15.425985391024057,
        onSiteDays: 40.03714304202221,
        phaseCost: 686876,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.260348792476774,
        onSiteDays: 29.297194688503048,
        phaseCost: 775751,
      },
      totalCharacterizationSamplingResults: {
        workDays: 19.68633418350083,
        onSiteDays: 69.33433773052525,
        phaseCost: 1462627,
      },
      sourceReductionResults: { workDays: 0.03102088115826729, onSiteDays: 0.03102088115826729, phaseCost: 4517 },
      decontaminationResults: {
        workDays: 15.397447369852438,
        onSiteDays: 16.78271514125697,
        phaseCost: 280368447876,
      },
      incidentCommandResults: { onSiteDays: 94.14807375294049, phaseCost: 286952 },
      otherResults: { otherCosts: 157570 },
      generalResults: { totalCost: 2639910, areaContaminated: 10000, decontaminationRounds: 2 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.3953280121845708,
        onSiteDays: 6.600841242937571,
        phaseCost: 319505,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.3015181679434913,
        onSiteDays: 6.009466466176988,
        phaseCost: 324806,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.696846180128062,
        onSiteDays: 12.61030770911456,
        phaseCost: 644311,
      },
      sourceReductionResults: { workDays: 1.9562056838670792, onSiteDays: 1.9562056838670792, phaseCost: 272153 },
      decontaminationResults: {
        workDays: 4.641041773753483,
        onSiteDays: 6.541393780508403,
        phaseCost: 356341369816,
      },
      incidentCommandResults: { onSiteDays: 29.10790717349004, phaseCost: 90232 },
      otherResults: { otherCosts: 70027 },
      generalResults: { totalCost: 1802880, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 9.724362864695202,
          onSiteDays: 52.88574883108263,
          phaseCost: 951143,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.97776683279081,
          onSiteDays: 24.691278953056504,
          phaseCost: 444508,
        },
        totalCharacterizationSamplingResults: {
          workDays: 12.702129697486011,
          onSiteDays: 77.57702778413913,
          phaseCost: 1395651,
        },
        sourceReductionResults: { workDays: 0.08039993592341903, onSiteDays: 0.08039993592341903, phaseCost: 7079 },
        decontaminationResults: {
          workDays: 4.227255724656223,
          onSiteDays: 5.839726401222807,
          phaseCost: 298020,
          otherCosts: 298949,
        },
        incidentCommandResults: { onSiteDays: 91.49715412128536, phaseCost: 275361 },
        otherResults: { otherCosts: 128019 },
        generalResults: { totalCost: 2403079, areaContaminated: 9156.352147496385, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.2516347172853486,
          onSiteDays: 34.334941111568526,
          phaseCost: 741323,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.3515349583939937,
          onSiteDays: 15.004703599325651,
          phaseCost: 236782,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.603169675679342,
          onSiteDays: 49.33964471089418,
          phaseCost: 978105,
        },
        sourceReductionResults: { workDays: 0.547734335530339, onSiteDays: 0.547734335530339, phaseCost: 32914 },
        decontaminationResults: {
          workDays: 4.602129674423982,
          onSiteDays: 6.732641913865843,
          phaseCost: 172148,
          otherCosts: 194092,
        },
        incidentCommandResults: { onSiteDays: 64.62002096029036, phaseCost: 199519 },
        otherResults: { otherCosts: 89058 },
        generalResults: { totalCost: 1665836, areaContaminated: 9156.352147496385, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.9877498669261533,
        onSiteDays: 6.811890241229575,
        phaseCost: 259099,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.538099953514362,
        onSiteDays: 18.288768702973158,
        phaseCost: 937662,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.525849820440515,
        onSiteDays: 25.100658944202735,
        phaseCost: 1196761,
      },
      sourceReductionResults: { workDays: 0.8983589132137529, onSiteDays: 0.8983589132137529, phaseCost: 131988 },
      decontaminationResults: {
        workDays: 7.42188244904901,
        onSiteDays: 7.723450533748476,
        phaseCost: 333181238326,
      },
      incidentCommandResults: { onSiteDays: 41.722468391164966, phaseCost: 126598 },
      otherResults: { otherCosts: 113837 },
      generalResults: { totalCost: 2140691, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 14.045802666101086,
        onSiteDays: 49.53004444992516,
        phaseCost: 930237,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.0471678768117725,
        onSiteDays: 12.859247664955095,
        phaseCost: 219032,
      },
      totalCharacterizationSamplingResults: {
        workDays: 18.09297054291286,
        onSiteDays: 62.38929211488025,
        phaseCost: 1149269,
      },
      sourceReductionResults: { workDays: 0.376531553593751, onSiteDays: 0.376531553593751, phaseCost: 50806 },
      decontaminationResults: {
        workDays: 7.032321491519064,
        onSiteDays: 9.928281210579044,
        phaseCost: 254490275249,
      },
      incidentCommandResults: { onSiteDays: 80.69410487905304, phaseCost: 242750 },
      otherResults: { otherCosts: 95237 },
      generalResults: { totalCost: 2067801, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 16.457841639315415,
          onSiteDays: 32.85967361759186,
          phaseCost: 1204984,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.59642698775009,
          onSiteDays: 21.6377125073118,
          phaseCost: 1302081,
        },
        totalCharacterizationSamplingResults: {
          workDays: 21.054268627065504,
          onSiteDays: 54.497386124903656,
          phaseCost: 2507065,
        },
        sourceReductionResults: { workDays: 1.1509555487425596, onSiteDays: 1.1509555487425596, phaseCost: 41278 },
        decontaminationResults: {
          workDays: 6.465786415260701,
          onSiteDays: 8.536941639505546,
          phaseCost: 90147,
          otherCosts: 266181,
        },
        incidentCommandResults: { onSiteDays: 72.18528331315176, phaseCost: 219623 },
        otherResults: { otherCosts: 63562 },
        generalResults: { totalCost: 3187856, areaContaminated: 13217.398528525931, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.0950468599296626,
          onSiteDays: 51.346928931860226,
          phaseCost: 1707719,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.206009463049315,
          onSiteDays: 37.175842605852225,
          phaseCost: 1250483,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.301056322978978,
          onSiteDays: 88.52277153771246,
          phaseCost: 2958202,
        },
        sourceReductionResults: { workDays: 0.6349501703038295, onSiteDays: 0.6349501703038295, phaseCost: 124278 },
        decontaminationResults: {
          workDays: 4.452419272030801,
          onSiteDays: 5.915068952346935,
          phaseCost: 156189,
          otherCosts: 168597,
        },
        incidentCommandResults: { onSiteDays: 103.07279066036321, phaseCost: 316497 },
        otherResults: { otherCosts: 61829 },
        generalResults: { totalCost: 3785592, areaContaminated: 13217.398528525931, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.6806826850844353,
        onSiteDays: 3.6054771710237024,
        phaseCost: 184617,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.192417511962109,
        onSiteDays: 14.582088339499022,
        phaseCost: 1089421,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.873100197046544,
        onSiteDays: 18.187565510522724,
        phaseCost: 1274038,
      },
      sourceReductionResults: { workDays: 0.25830075669594627, onSiteDays: 0.25830075669594627, phaseCost: 32820 },
      decontaminationResults: {
        workDays: 11.497935105231111,
        onSiteDays: 14.044186758120588,
        phaseCost: 401056509895,
      },
      incidentCommandResults: { onSiteDays: 40.49005302533926, phaseCost: 123145 },
      otherResults: { otherCosts: 164604 },
      generalResults: { totalCost: 2505558, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.578095990842956,
        onSiteDays: 5.314401068739869,
        phaseCost: 483713,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 31.259208430764662,
        onSiteDays: 63.777643365977845,
        phaseCost: 2900208,
      },
      totalCharacterizationSamplingResults: {
        workDays: 32.83730442160762,
        onSiteDays: 69.0920444347177,
        phaseCost: 3383921,
      },
      sourceReductionResults: { workDays: 3.1627097655729965, onSiteDays: 3.1627097655729965, phaseCost: 438217 },
      decontaminationResults: {
        workDays: 10.278054604604387,
        onSiteDays: 11.303839667538144,
        phaseCost: 225574290661,
      },
      incidentCommandResults: { onSiteDays: 91.55859386782885, phaseCost: 275435 },
      otherResults: { otherCosts: 98621 },
      generalResults: { totalCost: 4712429, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.040757433277748,
          onSiteDays: 25.06531416581094,
          phaseCost: 504276,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.5721221828025413,
          onSiteDays: 22.468520063520714,
          phaseCost: 595448,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.612879616080289,
          onSiteDays: 47.53383422933165,
          phaseCost: 1099724,
        },
        sourceReductionResults: { workDays: 0.39214581394392434, onSiteDays: 0.39214581394392434, phaseCost: 42245 },
        decontaminationResults: {
          workDays: 12.97584829548743,
          onSiteDays: 13.003479438369043,
          phaseCost: 134009,
          otherCosts: 1032908,
        },
        incidentCommandResults: { onSiteDays: 68.92945948164461, phaseCost: 209971 },
        otherResults: { otherCosts: 97924 },
        generalResults: { totalCost: 2616781, areaContaminated: 7161.282629743517, decontaminationRounds: 2 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.56336919550254,
          onSiteDays: 15.61034183346881,
          phaseCost: 727437,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.5258198711603121,
          onSiteDays: 8.713061039678246,
          phaseCost: 364935,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.089189066662852,
          onSiteDays: 24.323402873147057,
          phaseCost: 1092372,
        },
        sourceReductionResults: { workDays: 0.5426201423371294, onSiteDays: 0.5426201423371294, phaseCost: 127982 },
        decontaminationResults: {
          workDays: 3.8014356751929586,
          onSiteDays: 5.878265146137743,
          phaseCost: 159799,
          otherCosts: 143172,
        },
        incidentCommandResults: { onSiteDays: 38.744288161621924, phaseCost: 119154 },
        otherResults: { otherCosts: 40067 },
        generalResults: { totalCost: 1682546, areaContaminated: 7161.282629743517, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.328409814392506,
        onSiteDays: 40.72213142114099,
        phaseCost: 954379,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.327868121531784,
        onSiteDays: 40.450265298167814,
        phaseCost: 980113,
      },
      totalCharacterizationSamplingResults: {
        workDays: 12.65627793592429,
        onSiteDays: 81.17239671930881,
        phaseCost: 1934492,
      },
      sourceReductionResults: { workDays: 0.47868551471613313, onSiteDays: 0.47868551471613313, phaseCost: 36045 },
      decontaminationResults: {
        workDays: 16.54806782969927,
        onSiteDays: 17.05264856178608,
        phaseCost: 339419591796,
      },
      incidentCommandResults: { onSiteDays: 106.70373079581103, phaseCost: 320881 },
      otherResults: { otherCosts: 70254 },
      generalResults: { totalCost: 3292887, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.848600468141387,
        onSiteDays: 21.591661755115595,
        phaseCost: 717120,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.63332296475284,
        onSiteDays: 27.660734265567587,
        phaseCost: 1068288,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.481923432894227,
        onSiteDays: 49.25239602068318,
        phaseCost: 1785408,
      },
      sourceReductionResults: { workDays: 0.05649971117024017, onSiteDays: 0.05649971117024017, phaseCost: 15563 },
      decontaminationResults: {
        workDays: 4.804213214154405,
        onSiteDays: 6.872244433935789,
        phaseCost: 160408236460,
      },
      incidentCommandResults: { onSiteDays: 64.1811401657892, phaseCost: 196191 },
      otherResults: { otherCosts: 66312 },
      generalResults: { totalCost: 2460342, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.8388182132064936,
          onSiteDays: 14.448356341653886,
          phaseCost: 667672,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.8106998655350672,
          onSiteDays: 17.80390034656975,
          phaseCost: 826424,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.649518078741561,
          onSiteDays: 32.25225668822364,
          phaseCost: 1494096,
        },
        sourceReductionResults: { workDays: 0.8787307925405297, onSiteDays: 0.8787307925405297, phaseCost: 54957 },
        decontaminationResults: {
          workDays: 3.4689354851071106,
          onSiteDays: 5.575037746358438,
          phaseCost: 348729,
          otherCosts: 301852,
        },
        incidentCommandResults: { onSiteDays: 46.70602522712261, phaseCost: 143857 },
        otherResults: { otherCosts: 44378 },
        generalResults: { totalCost: 2387869, areaContaminated: 10242.562427940444, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.0925441313968145,
          onSiteDays: 41.24029277085217,
          phaseCost: 866411,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.8633073196138803,
          onSiteDays: 9.462559494380464,
          phaseCost: 168266,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.955851451010695,
          onSiteDays: 50.702852265232636,
          phaseCost: 1034677,
        },
        sourceReductionResults: { workDays: 1.9444359180927266, onSiteDays: 1.9444359180927266, phaseCost: 387964 },
        decontaminationResults: {
          workDays: 6.316680260076346,
          onSiteDays: 7.5920359591469255,
          phaseCost: 168925,
          otherCosts: 413263,
        },
        incidentCommandResults: { onSiteDays: 68.2393241424723, phaseCost: 211484 },
        otherResults: { otherCosts: 71022 },
        generalResults: { totalCost: 2287335, areaContaminated: 10242.562427940444, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.4795095595906114,
        onSiteDays: 10.65321575956676,
        phaseCost: 185807,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.5254497904146582,
        onSiteDays: 14.699524295412775,
        phaseCost: 462777,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.00495935000527,
        onSiteDays: 25.352740054979535,
        phaseCost: 648584,
      },
      sourceReductionResults: { workDays: 0.5319871748790378, onSiteDays: 0.5319871748790378, phaseCost: 102793 },
      decontaminationResults: {
        workDays: 7.828180500266184,
        onSiteDays: 9.441635794807606,
        phaseCost: 73709202309,
      },
      incidentCommandResults: { onSiteDays: 43.32636302466618, phaseCost: 132139 },
      otherResults: { otherCosts: 77328 },
      generalResults: { totalCost: 1236862, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.008999327696737,
        onSiteDays: 23.010445539900182,
        phaseCost: 803949,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 25.593825457309705,
        onSiteDays: 89.59515576860933,
        phaseCost: 2308017,
      },
      totalCharacterizationSamplingResults: {
        workDays: 29.60282478500644,
        onSiteDays: 112.6056013085095,
        phaseCost: 3111966,
      },
      sourceReductionResults: { workDays: 5.271745999365081, onSiteDays: 5.271745999365081, phaseCost: 189884 },
      decontaminationResults: {
        workDays: 16.10992467638802,
        onSiteDays: 16.259503732495826,
        phaseCost: 179299625799,
      },
      incidentCommandResults: { onSiteDays: 142.1368510403704, phaseCost: 437403 },
      otherResults: { otherCosts: 135341 },
      generalResults: { totalCost: 4679692, areaContaminated: 10000, decontaminationRounds: 3 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.0923872646256727,
          onSiteDays: 8.882837140848027,
          phaseCost: 268342,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.264390448671643,
          onSiteDays: 28.855943016089412,
          phaseCost: 982042,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.356777713297316,
          onSiteDays: 37.73878015693744,
          phaseCost: 1250384,
        },
        sourceReductionResults: { workDays: 1.562515774049277, onSiteDays: 1.562515774049277, phaseCost: 117593 },
        decontaminationResults: {
          workDays: 4.121730332058326,
          onSiteDays: 6.188853990097729,
          phaseCost: 146722,
          otherCosts: 215319,
        },
        incidentCommandResults: { onSiteDays: 53.49014992108444, phaseCost: 163545 },
        otherResults: { otherCosts: 56052 },
        generalResults: { totalCost: 1949615, areaContaminated: 9230.966950820519, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.4602982532358304,
          onSiteDays: 32.46639867705194,
          phaseCost: 808472,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.189279487135504,
          onSiteDays: 28.74228536681397,
          phaseCost: 555295,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.649577740371335,
          onSiteDays: 61.208684043865915,
          phaseCost: 1363767,
        },
        sourceReductionResults: { workDays: 0.47418508531855663, onSiteDays: 0.47418508531855663, phaseCost: 75094 },
        decontaminationResults: {
          workDays: 7.972659553394807,
          onSiteDays: 10.780916657713455,
          phaseCost: 239441,
          otherCosts: 254067,
        },
        incidentCommandResults: { onSiteDays: 80.46378578689793, phaseCost: 249515 },
        otherResults: { otherCosts: 93485 },
        generalResults: { totalCost: 2275369, areaContaminated: 9230.966950820519, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.029092630379024,
        onSiteDays: 14.923023342505696,
        phaseCost: 382807,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.0730878628493326,
        onSiteDays: 8.277490879013651,
        phaseCost: 350741,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.1021804932283565,
        onSiteDays: 23.20051422151935,
        phaseCost: 733548,
      },
      sourceReductionResults: { workDays: 0.5339947607716272, onSiteDays: 0.5339947607716272, phaseCost: 127283 },
      decontaminationResults: {
        workDays: 16.133369498451557,
        onSiteDays: 18.993880297987225,
        phaseCost: 216291979346,
      },
      incidentCommandResults: { onSiteDays: 50.7283892802782, phaseCost: 157221 },
      otherResults: { otherCosts: 61833 },
      generalResults: { totalCost: 2275522, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.3076115578845433,
        onSiteDays: 6.375722673861405,
        phaseCost: 393420,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.478997461829364,
        onSiteDays: 6.512193950494174,
        phaseCost: 395979,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.7866090197139073,
        onSiteDays: 12.88791662435558,
        phaseCost: 789399,
      },
      sourceReductionResults: { workDays: 1.2123625663861386, onSiteDays: 1.2123625663861386, phaseCost: 234681 },
      decontaminationResults: {
        workDays: 3.932512100537427,
        onSiteDays: 5.336885987859426,
        phaseCost: 378137249514,
      },
      incidentCommandResults: { onSiteDays: 27.437165178601145, phaseCost: 82534 },
      otherResults: { otherCosts: 64538 },
      generalResults: { totalCost: 1798803, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.162861504375753,
          onSiteDays: 6.324595598300295,
          phaseCost: 231987,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.941798761436293,
          onSiteDays: 19.910749865803748,
          phaseCost: 1010800,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.104660265812046,
          onSiteDays: 26.235345464104043,
          phaseCost: 1242787,
        },
        sourceReductionResults: { workDays: 0.9222622744340347, onSiteDays: 0.9222622744340347, phaseCost: 120998 },
        decontaminationResults: {
          workDays: 3.628286894557133,
          onSiteDays: 6.00677844835603,
          phaseCost: 270468,
          otherCosts: 346044,
        },
        incidentCommandResults: { onSiteDays: 41.164386186894106, phaseCost: 127411 },
        otherResults: { otherCosts: 77365 },
        generalResults: { totalCost: 2185073, areaContaminated: 14965.214810791707, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.951176153020807,
          onSiteDays: 54.61066809700178,
          phaseCost: 1070978,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.896737450646701,
          onSiteDays: 25.406141939616894,
          phaseCost: 421798,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.847913603667507,
          onSiteDays: 80.01681003661866,
          phaseCost: 1492776,
        },
        sourceReductionResults: { workDays: 3.520666849601888, onSiteDays: 3.520666849601888, phaseCost: 176841 },
        decontaminationResults: {
          workDays: 4.832095854876585,
          onSiteDays: 6.414928547203291,
          phaseCost: 385778,
          otherCosts: 326119,
        },
        incidentCommandResults: { onSiteDays: 97.95240543342385, phaseCost: 302724 },
        otherResults: { otherCosts: 49927 },
        generalResults: { totalCost: 2734165, areaContaminated: 14965.214810791707, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.2243534891958836,
        onSiteDays: 11.755905569919928,
        phaseCost: 738194,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.497555913915302,
        onSiteDays: 10.360851084009266,
        phaseCost: 465422,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.721909403111185,
        onSiteDays: 22.116756653929194,
        phaseCost: 1203616,
      },
      sourceReductionResults: { workDays: 0.11565733262435605, onSiteDays: 0.11565733262435605, phaseCost: 10377 },
      decontaminationResults: {
        workDays: 12.32592778637212,
        onSiteDays: 15.224441607534988,
        phaseCost: 312199432142,
      },
      incidentCommandResults: { onSiteDays: 45.45685559408854, phaseCost: 140199 },
      otherResults: { otherCosts: 106132 },
      generalResults: { totalCost: 2204665, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.205415332398444,
        onSiteDays: 20.667118661917296,
        phaseCost: 609936,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.244060987004587,
        onSiteDays: 16.55561790648016,
        phaseCost: 332766,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.449476319403031,
        onSiteDays: 37.22273656839745,
        phaseCost: 942702,
      },
      sourceReductionResults: { workDays: 1.1890250910853932, onSiteDays: 1.1890250910853932, phaseCost: 66501 },
      decontaminationResults: {
        workDays: 4.521605412830041,
        onSiteDays: 6.397910738223677,
        phaseCost: 427866210509,
      },
      incidentCommandResults: { onSiteDays: 52.80967239770652, phaseCost: 159193 },
      otherResults: { otherCosts: 101608 },
      generalResults: { totalCost: 1908379, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.267197953104822,
          onSiteDays: 14.051761419220036,
          phaseCost: 744687,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.3741722086056787,
          onSiteDays: 11.433400632842492,
          phaseCost: 649101,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.641370161710501,
          onSiteDays: 25.485162052062527,
          phaseCost: 1393788,
        },
        sourceReductionResults: { workDays: 6.267029368278166, onSiteDays: 6.267029368278166, phaseCost: 525321 },
        decontaminationResults: {
          workDays: 4.23315209924084,
          onSiteDays: 5.05991719175594,
          phaseCost: 114215,
          otherCosts: 235332,
        },
        incidentCommandResults: { onSiteDays: 44.81210861209664, phaseCost: 138392 },
        otherResults: { otherCosts: 61239 },
        generalResults: { totalCost: 2468287, areaContaminated: 12253.429507197212, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.040841466974573,
          onSiteDays: 34.67224213966115,
          phaseCost: 1343359,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 9.168415172853837,
          onSiteDays: 34.3081230842134,
          phaseCost: 1126296,
        },
        totalCharacterizationSamplingResults: {
          workDays: 14.20925663982841,
          onSiteDays: 68.98036522387454,
          phaseCost: 2469655,
        },
        sourceReductionResults: { workDays: 0.6189074143937017, onSiteDays: 0.6189074143937017, phaseCost: 63458 },
        decontaminationResults: {
          workDays: 3.2415218162912693,
          onSiteDays: 3.9805169084529664,
          phaseCost: 189626,
          otherCosts: 128729,
        },
        incidentCommandResults: { onSiteDays: 81.57978954672122, phaseCost: 250173 },
        otherResults: { otherCosts: 140862 },
        generalResults: { totalCost: 3242503, areaContaminated: 12253.429507197212, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.286567978539277,
        onSiteDays: 12.856808786781588,
        phaseCost: 445056,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.503355972599792,
        onSiteDays: 12.39554213957902,
        phaseCost: 337347,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.78992395113907,
        onSiteDays: 25.252350926360606,
        phaseCost: 782403,
      },
      sourceReductionResults: { workDays: 0.5664466592347558, onSiteDays: 0.5664466592347558, phaseCost: 26851 },
      decontaminationResults: {
        workDays: 7.796838451129579,
        onSiteDays: 9.062199158841324,
        phaseCost: 53058343179,
      },
      incidentCommandResults: { onSiteDays: 42.880996744436686, phaseCost: 131652 },
      otherResults: { otherCosts: 64715 },
      generalResults: { totalCost: 1401858, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 16.48744417338243,
        onSiteDays: 31.79472319184223,
        phaseCost: 622123,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.78032908690317,
        onSiteDays: 19.2480447008639,
        phaseCost: 622530,
      },
      totalCharacterizationSamplingResults: {
        workDays: 21.267773260285598,
        onSiteDays: 51.04276789270613,
        phaseCost: 1244653,
      },
      sourceReductionResults: { workDays: 0.3202462416807089, onSiteDays: 0.3202462416807089, phaseCost: 49551 },
      decontaminationResults: {
        workDays: 3.146469086908379,
        onSiteDays: 5.340483843661026,
        phaseCost: 51404218614,
      },
      incidentCommandResults: { onSiteDays: 64.70349797804786, phaseCost: 198263 },
      otherResults: { otherCosts: 93120 },
      generalResults: { totalCost: 1855605, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.6216494334785352,
          onSiteDays: 6.537079784618368,
          phaseCost: 228255,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.6734153726293057,
          onSiteDays: 12.42824489078645,
          phaseCost: 464089,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.295064806107841,
          onSiteDays: 18.96532467540482,
          phaseCost: 692344,
        },
        sourceReductionResults: { workDays: 0.17670777775104404, onSiteDays: 0.17670777775104404, phaseCost: 20484 },
        decontaminationResults: {
          workDays: 8.393451707529241,
          onSiteDays: 10.518844276321783,
          phaseCost: 49072,
          otherCosts: 378340,
        },
        incidentCommandResults: { onSiteDays: 37.66087672947765, phaseCost: 116839 },
        otherResults: { otherCosts: 60396 },
        generalResults: { totalCost: 1317475, areaContaminated: 8445.77122792736, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 8.268208613726435,
          onSiteDays: 23.996474187658457,
          phaseCost: 651157,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.53297686120488,
          onSiteDays: 15.423560176895116,
          phaseCost: 521695,
        },
        totalCharacterizationSamplingResults: {
          workDays: 10.801185474931314,
          onSiteDays: 39.42003436455357,
          phaseCost: 1172852,
        },
        sourceReductionResults: { workDays: 0.8424408971796681, onSiteDays: 0.8424408971796681, phaseCost: 69382 },
        decontaminationResults: {
          workDays: 3.7754494726600707,
          onSiteDays: 4.501046214136538,
          phaseCost: 41561,
          otherCosts: 278525,
        },
        incidentCommandResults: { onSiteDays: 52.76352147586978, phaseCost: 158634 },
        otherResults: { otherCosts: 78867 },
        generalResults: { totalCost: 1799821, areaContaminated: 8445.77122792736, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 13.900648640951538,
        onSiteDays: 25.478625767859462,
        phaseCost: 1039248,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.565225840717338,
        onSiteDays: 18.233252328182974,
        phaseCost: 1070079,
      },
      totalCharacterizationSamplingResults: {
        workDays: 19.465874481668877,
        onSiteDays: 43.71187809604244,
        phaseCost: 2109327,
      },
      sourceReductionResults: { workDays: 5.789079613824963, onSiteDays: 5.789079613824963, phaseCost: 106689 },
      decontaminationResults: {
        workDays: 9.813059883148656,
        onSiteDays: 12.690545492267828,
        phaseCost: 305635323862,
      },
      incidentCommandResults: { onSiteDays: 70.19150320213524, phaseCost: 217002 },
      otherResults: { otherCosts: 83121 },
      generalResults: { totalCost: 3145636, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.840278515932586,
        onSiteDays: 10.69557821358052,
        phaseCost: 528995,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.0058640531004706,
        onSiteDays: 16.5373198632673,
        phaseCost: 1193652,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.846142569033057,
        onSiteDays: 27.232898076847817,
        phaseCost: 1722647,
      },
      sourceReductionResults: { workDays: 0.10868064424930954, onSiteDays: 0.10868064424930954, phaseCost: 20833 },
      decontaminationResults: {
        workDays: 3.114304117419362,
        onSiteDays: 4.947128404618038,
        phaseCost: 250572106130,
      },
      incidentCommandResults: { onSiteDays: 40.28870712571516, phaseCost: 123634 },
      otherResults: { otherCosts: 56137 },
      generalResults: { totalCost: 2279953, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.936969631076134,
          onSiteDays: 18.448350060372533,
          phaseCost: 959337,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.608638871935746,
          onSiteDays: 34.700360749681316,
          phaseCost: 1496527,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.54560850301188,
          onSiteDays: 53.14871081005385,
          phaseCost: 2455864,
        },
        sourceReductionResults: { workDays: 1.6096069077664061, onSiteDays: 1.6096069077664061, phaseCost: 58140 },
        decontaminationResults: {
          workDays: 9.505669972744228,
          onSiteDays: 10.270012875383257,
          phaseCost: 252669,
          otherCosts: 668140,
        },
        incidentCommandResults: { onSiteDays: 73.0283305932035, phaseCost: 219791 },
        otherResults: { otherCosts: 118259 },
        generalResults: { totalCost: 3772863, areaContaminated: 13649.298739305066, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 7.026526007076644,
          onSiteDays: 20.70014316606494,
          phaseCost: 1170804,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.025765050736863,
          onSiteDays: 21.396341680039285,
          phaseCost: 1229012,
        },
        totalCharacterizationSamplingResults: {
          workDays: 15.052291057813507,
          onSiteDays: 42.096484846104225,
          phaseCost: 2399816,
        },
        sourceReductionResults: { workDays: 0.940146953327613, onSiteDays: 0.940146953327613, phaseCost: 128485 },
        decontaminationResults: {
          workDays: 4.90203172292142,
          onSiteDays: 7.0519655696237376,
          phaseCost: 59019,
          otherCosts: 258005,
        },
        incidentCommandResults: { onSiteDays: 58.08859736905558, phaseCost: 178786 },
        otherResults: { otherCosts: 64235 },
        generalResults: { totalCost: 3088346, areaContaminated: 13649.298739305066, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.00455186334133,
        onSiteDays: 31.254160279513812,
        phaseCost: 783984,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.7894075505674438,
        onSiteDays: 17.465680178189814,
        phaseCost: 429912,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.793959413908774,
        onSiteDays: 48.719840457703626,
        phaseCost: 1213896,
      },
      sourceReductionResults: { workDays: 0.042046278847604, onSiteDays: 0.042046278847604, phaseCost: 7804 },
      decontaminationResults: {
        workDays: 4.91181348960656,
        onSiteDays: 5.053463226895189,
        phaseCost: 387346132236,
      },
      incidentCommandResults: { onSiteDays: 61.81534996344642, phaseCost: 186561 },
      otherResults: { otherCosts: 104901 },
      generalResults: { totalCost: 2032744, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.8572927712426757,
        onSiteDays: 7.173760613794689,
        phaseCost: 353775,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.776581632794795,
        onSiteDays: 14.725577649188129,
        phaseCost: 872789,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.63387440403747,
        onSiteDays: 21.899338262982816,
        phaseCost: 1226564,
      },
      sourceReductionResults: { workDays: 0.1429960251846125, onSiteDays: 0.1429960251846125, phaseCost: 18654 },
      decontaminationResults: {
        workDays: 7.195614350772373,
        onSiteDays: 8.299880253686542,
        phaseCost: 128108500047,
      },
      incidentCommandResults: { onSiteDays: 38.34221454185397, phaseCost: 116926 },
      otherResults: { otherCosts: 36545 },
      generalResults: { totalCost: 2026844, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.228268659206371,
          onSiteDays: 43.601492010955575,
          phaseCost: 1017196,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.794169667178363,
          onSiteDays: 62.4359402920414,
          phaseCost: 1404555,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.022438326384734,
          onSiteDays: 106.03743230299698,
          phaseCost: 2421751,
        },
        sourceReductionResults: { workDays: 4.938781677291445, onSiteDays: 4.938781677291445, phaseCost: 391617 },
        decontaminationResults: {
          workDays: 7.29466482514857,
          onSiteDays: 9.26761851209859,
          phaseCost: 92111,
          otherCosts: 495907,
        },
        incidentCommandResults: { onSiteDays: 128.243832492387, phaseCost: 392293 },
        otherResults: { otherCosts: 151005 },
        generalResults: { totalCost: 3944684, areaContaminated: 14995.577028020187, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.176209500714933,
          onSiteDays: 9.760345599057636,
          phaseCost: 221148,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.305834438335429,
          onSiteDays: 22.598269863984164,
          phaseCost: 1013478,
        },
        totalCharacterizationSamplingResults: {
          workDays: 10.482043939050362,
          onSiteDays: 32.3586154630418,
          phaseCost: 1234626,
        },
        sourceReductionResults: { workDays: 1.259152899287299, onSiteDays: 1.259152899287299, phaseCost: 132535 },
        decontaminationResults: {
          workDays: 7.278008495289368,
          onSiteDays: 7.513731570801169,
          phaseCost: 216178,
          otherCosts: 256265,
        },
        incidentCommandResults: { onSiteDays: 49.13149993313027, phaseCost: 148824 },
        otherResults: { otherCosts: 109555 },
        generalResults: { totalCost: 2097983, areaContaminated: 14995.577028020187, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.9549992466386281,
        onSiteDays: 13.876730816322711,
        phaseCost: 298820,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.707139744518738,
        onSiteDays: 40.058691815787256,
        phaseCost: 729525,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.662138991157367,
        onSiteDays: 53.93542263210997,
        phaseCost: 1028345,
      },
      sourceReductionResults: { workDays: 2.7049666060631896, onSiteDays: 2.7049666060631896, phaseCost: 83904 },
      decontaminationResults: {
        workDays: 11.751877295494051,
        onSiteDays: 13.06963535376583,
        phaseCost: 36773532731,
      },
      incidentCommandResults: { onSiteDays: 77.71002459193899, phaseCost: 239980 },
      otherResults: { otherCosts: 106091 },
      generalResults: { totalCost: 2027824, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.155540041034955,
        onSiteDays: 18.08496473863506,
        phaseCost: 729767,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.4095883228555537,
        onSiteDays: 12.240643679723517,
        phaseCost: 500845,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.5651283638905085,
        onSiteDays: 30.325608418358577,
        phaseCost: 1230612,
      },
      sourceReductionResults: { workDays: 2.4821845521815877, onSiteDays: 2.4821845521815877, phaseCost: 331479 },
      decontaminationResults: {
        workDays: 4.358360831476366,
        onSiteDays: 6.126788430411086,
        phaseCost: 265192324421,
      },
      incidentCommandResults: { onSiteDays: 46.934581400951245, phaseCost: 142517 },
      otherResults: { otherCosts: 59966 },
      generalResults: { totalCost: 2354187, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.8478129148986913,
          onSiteDays: 22.416104030173543,
          phaseCost: 288700,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.051510813959699,
          onSiteDays: 32.365390360880866,
          phaseCost: 449079,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.89932372885839,
          onSiteDays: 54.78149439105441,
          phaseCost: 737779,
        },
        sourceReductionResults: { workDays: 3.1266676106084326, onSiteDays: 3.1266676106084326, phaseCost: 528415 },
        decontaminationResults: {
          workDays: 3.4478282650112706,
          onSiteDays: 4.610295015529332,
          phaseCost: 167915,
          otherCosts: 215464,
        },
        incidentCommandResults: { onSiteDays: 70.51845701719218, phaseCost: 213404 },
        otherResults: { otherCosts: 82383 },
        generalResults: { totalCost: 1945360, areaContaminated: 14057.28818128288, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.804506228611313,
          onSiteDays: 23.6555378381102,
          phaseCost: 1086982,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.4816996112003418,
          onSiteDays: 15.721918577858148,
          phaseCost: 693574,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.286205839811655,
          onSiteDays: 39.37745641596835,
          phaseCost: 1780556,
        },
        sourceReductionResults: { workDays: 0.6903519220610709, onSiteDays: 0.6903519220610709, phaseCost: 82260 },
        decontaminationResults: {
          workDays: 4.917803512867029,
          onSiteDays: 5.187859735495379,
          phaseCost: 429781,
          otherCosts: 229534,
        },
        incidentCommandResults: { onSiteDays: 53.255668073524795, phaseCost: 162921 },
        otherResults: { otherCosts: 44605 },
        generalResults: { totalCost: 2729657, areaContaminated: 14057.28818128288, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.7276027235184284,
        onSiteDays: 12.899624327288423,
        phaseCost: 433102,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.8025950799685315,
        onSiteDays: 14.391517492754623,
        phaseCost: 566050,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.53019780348696,
        onSiteDays: 27.291141820043045,
        phaseCost: 999152,
      },
      sourceReductionResults: { workDays: 1.761101248279516, onSiteDays: 1.761101248279516, phaseCost: 137026 },
      decontaminationResults: {
        workDays: 12.988898177162953,
        onSiteDays: 15.400270316610175,
        phaseCost: 26112589645,
      },
      incidentCommandResults: { onSiteDays: 52.452513384932736, phaseCost: 160108 },
      otherResults: { otherCosts: 141388 },
      generalResults: { totalCost: 2053431, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.610930321306113,
        onSiteDays: 49.14236235635444,
        phaseCost: 1023887,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 17.732562001309773,
        onSiteDays: 61.61706885178419,
        phaseCost: 946309,
      },
      totalCharacterizationSamplingResults: {
        workDays: 21.343492322615887,
        onSiteDays: 110.75943120813864,
        phaseCost: 1970196,
      },
      sourceReductionResults: { workDays: 0.5000480605802099, onSiteDays: 0.5000480605802099, phaseCost: 59351 },
      decontaminationResults: {
        workDays: 7.0597282552765055,
        onSiteDays: 8.40095415255077,
        phaseCost: 130773301431,
      },
      incidentCommandResults: { onSiteDays: 127.66043342126962, phaseCost: 389309 },
      otherResults: { otherCosts: 152183 },
      generalResults: { totalCost: 3003243, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.007955030470786,
          onSiteDays: 13.247424720523618,
          phaseCost: 319108,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.3635830487608066,
          onSiteDays: 6.069761004994233,
          phaseCost: 140106,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.3715380792315925,
          onSiteDays: 19.317185725517852,
          phaseCost: 459214,
        },
        sourceReductionResults: { workDays: 0.40909382106762204, onSiteDays: 0.40909382106762204, phaseCost: 86171 },
        decontaminationResults: {
          workDays: 8.529846302357,
          onSiteDays: 9.121974136243102,
          phaseCost: 171121,
          otherCosts: 286337,
        },
        incidentCommandResults: { onSiteDays: 36.84825368282858, phaseCost: 113827 },
        otherResults: { otherCosts: 108820 },
        generalResults: { totalCost: 1225490, areaContaminated: 6573.533313715256, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.0008114415953,
          onSiteDays: 13.401315117980452,
          phaseCost: 337554,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.731155594117368,
          onSiteDays: 5.534334207481331,
          phaseCost: 176546,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.731967035712668,
          onSiteDays: 18.93564932546178,
          phaseCost: 514100,
        },
        sourceReductionResults: { workDays: 0.2017510744884249, onSiteDays: 0.2017510744884249, phaseCost: 15072 },
        decontaminationResults: {
          workDays: 7.087879176504883,
          onSiteDays: 8.606706791465802,
          phaseCost: 246019,
          otherCosts: 561778,
        },
        incidentCommandResults: { onSiteDays: 35.744107191416006, phaseCost: 110709 },
        otherResults: { otherCosts: 85721 },
        generalResults: { totalCost: 1533399, areaContaminated: 6573.533313715256, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.463365844588267,
        onSiteDays: 16.607319448298284,
        phaseCost: 232739,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.980249921951218,
        onSiteDays: 10.285032896945822,
        phaseCost: 156262,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.4436157665394846,
        onSiteDays: 26.892352345244106,
        phaseCost: 389001,
      },
      sourceReductionResults: { workDays: 1.651786465877815, onSiteDays: 1.651786465877815, phaseCost: 347737 },
      decontaminationResults: {
        workDays: 18.78180645866827,
        onSiteDays: 19.532668909181996,
        phaseCost: 332654836100,
      },
      incidentCommandResults: { onSiteDays: 56.07680772030392, phaseCost: 173175 },
      otherResults: { otherCosts: 90504 },
      generalResults: { totalCost: 2169171, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.960596634448331,
        onSiteDays: 10.249988580589047,
        phaseCost: 348968,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 12.15515137463046,
        onSiteDays: 65.98106376803527,
        phaseCost: 2663602,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.115748009078791,
        onSiteDays: 76.23105234862432,
        phaseCost: 3012570,
      },
      sourceReductionResults: { workDays: 0.4582959390651217, onSiteDays: 0.4582959390651217, phaseCost: 69890 },
      decontaminationResults: {
        workDays: 13.170759079319135,
        onSiteDays: 13.279102787906094,
        phaseCost: 372331405608,
      },
      incidentCommandResults: { onSiteDays: 97.96845107559554, phaseCost: 302034 },
      otherResults: { otherCosts: 91580 },
      generalResults: { totalCost: 4254013, areaContaminated: 10000, decontaminationRounds: 3 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.3034894806260784,
          onSiteDays: 27.70763598877148,
          phaseCost: 1001473,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 16.30753544345024,
          onSiteDays: 54.20447069658783,
          phaseCost: 1712551,
        },
        totalCharacterizationSamplingResults: {
          workDays: 19.611024924076318,
          onSiteDays: 81.9121066853593,
          phaseCost: 2714024,
        },
        sourceReductionResults: { workDays: 4.933693777582824, onSiteDays: 4.933693777582824, phaseCost: 330396 },
        decontaminationResults: {
          workDays: 7.504970232375192,
          onSiteDays: 9.183833037080204,
          phaseCost: 341740,
          otherCosts: 453470,
        },
        incidentCommandResults: { onSiteDays: 104.02963350002233, phaseCost: 320606 },
        otherResults: { otherCosts: 69691 },
        generalResults: { totalCost: 4229927, areaContaminated: 13973.187298740537, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.4018332065512675,
          onSiteDays: 15.481551242985745,
          phaseCost: 790665,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.9919862801583839,
          onSiteDays: 12.62025096611228,
          phaseCost: 542300,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.393819486709651,
          onSiteDays: 28.101802209098025,
          phaseCost: 1332965,
        },
        sourceReductionResults: { workDays: 0.9505823135171305, onSiteDays: 0.9505823135171305, phaseCost: 173937 },
        decontaminationResults: {
          workDays: 4.199598048161622,
          onSiteDays: 4.637991139115298,
          phaseCost: 308212,
          otherCosts: 88695,
        },
        incidentCommandResults: { onSiteDays: 41.69037566173046, phaseCost: 129092 },
        otherResults: { otherCosts: 95879 },
        generalResults: { totalCost: 2128780, areaContaminated: 13973.187298740537, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.491168240052616,
        onSiteDays: 14.97003748493384,
        phaseCost: 657498,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.116042356280769,
        onSiteDays: 12.284044019811581,
        phaseCost: 835756,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.607210596333385,
        onSiteDays: 27.25408150474542,
        phaseCost: 1493254,
      },
      sourceReductionResults: { workDays: 0.2593755491990873, onSiteDays: 0.2593755491990873, phaseCost: 9701 },
      decontaminationResults: {
        workDays: 4.546039562566681,
        onSiteDays: 5.747119452046957,
        phaseCost: 151801221027,
      },
      incidentCommandResults: { onSiteDays: 41.260576505991466, phaseCost: 126451 },
      otherResults: { otherCosts: 64244 },
      generalResults: { totalCost: 2066478, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.8530462676969157,
        onSiteDays: 40.18228944890298,
        phaseCost: 692679,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.191513378254391,
        onSiteDays: 27.041536696716836,
        phaseCost: 406695,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.044559645951306,
        onSiteDays: 67.22382614561981,
        phaseCost: 1099374,
      },
      sourceReductionResults: { workDays: 0.042349291284835854, onSiteDays: 0.042349291284835854, phaseCost: 10786 },
      decontaminationResults: {
        workDays: 7.582935905918232,
        onSiteDays: 10.141647839718882,
        phaseCost: 340179226595,
      },
      incidentCommandResults: { onSiteDays: 85.40782327662353, phaseCost: 258009 },
      otherResults: { otherCosts: 128865 },
      generalResults: { totalCost: 2063808, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.7794746804828394,
          onSiteDays: 10.507951302233213,
          phaseCost: 527370,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.440983578856248,
          onSiteDays: 36.6797520202612,
          phaseCost: 1569646,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.220458259339088,
          onSiteDays: 47.187703322494414,
          phaseCost: 2097016,
        },
        sourceReductionResults: { workDays: 3.262247320039577, onSiteDays: 3.262247320039577, phaseCost: 183169 },
        decontaminationResults: {
          workDays: 10.264372657813219,
          onSiteDays: 13.012598325035675,
          phaseCost: 332950,
          otherCosts: 254953,
        },
        incidentCommandResults: { onSiteDays: 71.46254896756966, phaseCost: 215529 },
        otherResults: { otherCosts: 58406 },
        generalResults: { totalCost: 3142023, areaContaminated: 13432.080573037287, decontaminationRounds: 2 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.937785834121179,
          onSiteDays: 46.79584173337379,
          phaseCost: 1097157,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.698230967882487,
          onSiteDays: 29.832513391412803,
          phaseCost: 587047,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.636016802003667,
          onSiteDays: 76.6283551247866,
          phaseCost: 1684204,
        },
        sourceReductionResults: { workDays: 1.8445203986286687, onSiteDays: 1.8445203986286687, phaseCost: 301670 },
        decontaminationResults: {
          workDays: 3.997452503768134,
          onSiteDays: 4.597537922346391,
          phaseCost: 200732,
          otherCosts: 95840,
        },
        incidentCommandResults: { onSiteDays: 91.07041344576166, phaseCost: 281807 },
        otherResults: { otherCosts: 104631 },
        generalResults: { totalCost: 2668884, areaContaminated: 13432.080573037287, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 8.667231789190033,
        onSiteDays: 37.30961891352774,
        phaseCost: 952982,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 13.372267874708811,
        onSiteDays: 46.68367075162538,
        phaseCost: 1192289,
      },
      totalCharacterizationSamplingResults: {
        workDays: 22.039499663898845,
        onSiteDays: 83.99328966515313,
        phaseCost: 2145271,
      },
      sourceReductionResults: { workDays: 0.8059690336776846, onSiteDays: 0.8059690336776846, phaseCost: 114611 },
      decontaminationResults: {
        workDays: 21.364049336492098,
        onSiteDays: 22.07969209297553,
        phaseCost: 1237461050639,
      },
      incidentCommandResults: { onSiteDays: 114.87895079180635, phaseCost: 348102 },
      otherResults: { otherCosts: 127847 },
      generalResults: { totalCost: 3910216, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.9066419687894556,
        onSiteDays: 7.489223122485859,
        phaseCost: 151474,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.3935659094628607,
        onSiteDays: 19.239911004365318,
        phaseCost: 675360,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.3002078782523165,
        onSiteDays: 26.72913412685118,
        phaseCost: 826834,
      },
      sourceReductionResults: { workDays: 0.7788045942158496, onSiteDays: 0.7788045942158496, phaseCost: 100846 },
      decontaminationResults: {
        workDays: 3.078442547954256,
        onSiteDays: 4.376734229823745,
        phaseCost: 208226133637,
      },
      incidentCommandResults: { onSiteDays: 39.884672950890774, phaseCost: 122870 },
      otherResults: { otherCosts: 74816 },
      generalResults: { totalCost: 1467229, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.9018176980521533,
          onSiteDays: 10.797020272860207,
          phaseCost: 646089,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.151575675306034,
          onSiteDays: 7.274807576578029,
          phaseCost: 330044,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.053393373358187,
          onSiteDays: 18.071827849438236,
          phaseCost: 976133,
        },
        sourceReductionResults: { workDays: 1.6093167324280213, onSiteDays: 1.6093167324280213, phaseCost: 232322 },
        decontaminationResults: {
          workDays: 7.271914856338853,
          onSiteDays: 7.775793326733585,
          phaseCost: 466857,
          otherCosts: 374692,
        },
        incidentCommandResults: { onSiteDays: 35.45693790859984, phaseCost: 106661 },
        otherResults: { otherCosts: 83772 },
        generalResults: { totalCost: 2240437, areaContaminated: 13149.25334140408, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.706988719854853,
          onSiteDays: 11.748454120664775,
          phaseCost: 253321,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.089276884825169,
          onSiteDays: 9.179018063886632,
          phaseCost: 321401,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.796265604680022,
          onSiteDays: 20.927472184551405,
          phaseCost: 574722,
        },
        sourceReductionResults: { workDays: 1.024888550317234, onSiteDays: 1.024888550317234, phaseCost: 117318 },
        decontaminationResults: {
          workDays: 7.507287869580856,
          onSiteDays: 10.203591094399709,
          phaseCost: 281271,
          otherCosts: 200723,
        },
        incidentCommandResults: { onSiteDays: 40.155951829268346, phaseCost: 123653 },
        otherResults: { otherCosts: 116496 },
        generalResults: { totalCost: 1414183, areaContaminated: 13149.25334140408, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.2240901947318061,
        onSiteDays: 20.120830392346768,
        phaseCost: 355571,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.9851177743747397,
        onSiteDays: 11.484082241974805,
        phaseCost: 185279,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.209207969106546,
        onSiteDays: 31.604912634321572,
        phaseCost: 540850,
      },
      sourceReductionResults: { workDays: 3.6165201060164307, onSiteDays: 3.6165201060164307, phaseCost: 241006 },
      decontaminationResults: {
        workDays: 15.625432067929168,
        onSiteDays: 17.8815399836473,
        phaseCost: 326856648048,
      },
      incidentCommandResults: { onSiteDays: 61.1029727239853, phaseCost: 186157 },
      otherResults: { otherCosts: 125748 },
      generalResults: { totalCost: 2068665, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.8246457361178072,
        onSiteDays: 19.884686301336238,
        phaseCost: 480300,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.837036234670154,
        onSiteDays: 27.48646935682858,
        phaseCost: 670471,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.661681970787961,
        onSiteDays: 47.37115565816482,
        phaseCost: 1150771,
      },
      sourceReductionResults: { workDays: 2.9756661284117283, onSiteDays: 2.9756661284117283, phaseCost: 139552 },
      decontaminationResults: {
        workDays: 4.46712278515732,
        onSiteDays: 5.501360679627713,
        phaseCost: 290679118318,
      },
      incidentCommandResults: { onSiteDays: 63.848182466204264, phaseCost: 194016 },
      otherResults: { otherCosts: 102447 },
      generalResults: { totalCost: 1995783, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.012900376506093,
          onSiteDays: 10.377639239022054,
          phaseCost: 153940,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.1085515255099825,
          onSiteDays: 32.26723770160081,
          phaseCost: 628543,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.121451902016076,
          onSiteDays: 42.644876940622865,
          phaseCost: 782483,
        },
        sourceReductionResults: { workDays: 1.753597271979155, onSiteDays: 1.753597271979155, phaseCost: 131121 },
        decontaminationResults: {
          workDays: 9.756603240677297,
          onSiteDays: 11.021927767205502,
          phaseCost: 86648,
          otherCosts: 342324,
        },
        incidentCommandResults: { onSiteDays: 63.42040197980752, phaseCost: 192778 },
        otherResults: { otherCosts: 88580 },
        generalResults: { totalCost: 1623934, areaContaminated: 7577.945814136869, decontaminationRounds: 2 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.5736582765955824,
          onSiteDays: 19.89525565688077,
          phaseCost: 637457,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 10.805686673261418,
          onSiteDays: 29.505249639112364,
          phaseCost: 603479,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.379344949857,
          onSiteDays: 49.400505295993135,
          phaseCost: 1240936,
        },
        sourceReductionResults: { workDays: 1.3424850520304719, onSiteDays: 1.3424850520304719, phaseCost: 104832 },
        decontaminationResults: {
          workDays: 8.80925409002445,
          onSiteDays: 10.318193080676298,
          phaseCost: 163256,
          otherCosts: 554220,
        },
        incidentCommandResults: { onSiteDays: 69.0611834286999, phaseCost: 212663 },
        otherResults: { otherCosts: 74586 },
        generalResults: { totalCost: 2350493, areaContaminated: 7577.945814136869, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 14.003233541749843,
        onSiteDays: 26.172724025383495,
        phaseCost: 1073604,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.0990136810098923,
        onSiteDays: 10.261537310025592,
        phaseCost: 494227,
      },
      totalCharacterizationSamplingResults: {
        workDays: 17.102247222759736,
        onSiteDays: 36.43426133540909,
        phaseCost: 1567831,
      },
      sourceReductionResults: { workDays: 1.9716054782815253, onSiteDays: 1.9716054782815253, phaseCost: 312761 },
      decontaminationResults: {
        workDays: 9.584037349462518,
        onSiteDays: 10.206118274760925,
        phaseCost: 140586506521,
      },
      incidentCommandResults: { onSiteDays: 56.61198508845154, phaseCost: 170560 },
      otherResults: { otherCosts: 59064 },
      generalResults: { totalCost: 2757323, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.8940709581000394,
        onSiteDays: 35.96362565225921,
        phaseCost: 821976,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.803329063616609,
        onSiteDays: 27.289585553610333,
        phaseCost: 529092,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.697400021716648,
        onSiteDays: 63.25321120586955,
        phaseCost: 1351068,
      },
      sourceReductionResults: { workDays: 0.46669555001131113, onSiteDays: 0.46669555001131113, phaseCost: 85720 },
      decontaminationResults: {
        workDays: 12.532110880951423,
        onSiteDays: 12.74784742220022,
        phaseCost: 346491326890,
      },
      incidentCommandResults: { onSiteDays: 84.46775417808108, phaseCost: 261445 },
      otherResults: { otherCosts: 79682 },
      generalResults: { totalCost: 2451296, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.293982794260528,
          onSiteDays: 18.718440974206818,
          phaseCost: 874101,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.2376311239806155,
          onSiteDays: 18.202483927145728,
          phaseCost: 897684,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.531613918241144,
          onSiteDays: 36.92092490135255,
          phaseCost: 1771785,
        },
        sourceReductionResults: { workDays: 2.5795060313855918, onSiteDays: 2.5795060313855918, phaseCost: 283493 },
        decontaminationResults: {
          workDays: 4.030697766465763,
          onSiteDays: 6.7872582200884946,
          phaseCost: 279003,
          otherCosts: 226585,
        },
        incidentCommandResults: { onSiteDays: 54.28768915282664, phaseCost: 164502 },
        otherResults: { otherCosts: 84336 },
        generalResults: { totalCost: 2809704, areaContaminated: 7881.11265350159, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.984965865761565,
          onSiteDays: 15.907773567948043,
          phaseCost: 553131,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.1951959525732332,
          onSiteDays: 8.315709886552687,
          phaseCost: 297245,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.180161818334798,
          onSiteDays: 24.22348345450073,
          phaseCost: 850376,
        },
        sourceReductionResults: { workDays: 3.286087792311796, onSiteDays: 3.286087792311796, phaseCost: 238403 },
        decontaminationResults: {
          workDays: 4.04167760886291,
          onSiteDays: 5.412748169948522,
          phaseCost: 182260,
          otherCosts: 194252,
        },
        incidentCommandResults: { onSiteDays: 40.92231941676105, phaseCost: 123754 },
        otherResults: { otherCosts: 60551 },
        generalResults: { totalCost: 1649596, areaContaminated: 7881.11265350159, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.1929449644912067,
        onSiteDays: 19.786448375506954,
        phaseCost: 1124485,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.717184407219763,
        onSiteDays: 24.47374985459119,
        phaseCost: 1076315,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.910129371710969,
        onSiteDays: 44.26019823009814,
        phaseCost: 2200800,
      },
      sourceReductionResults: { workDays: 1.3068258126982415, onSiteDays: 1.3068258126982415, phaseCost: 61223 },
      decontaminationResults: {
        workDays: 6.395214485562224,
        onSiteDays: 7.643737005219735,
        phaseCost: 262834267941,
      },
      incidentCommandResults: { onSiteDays: 61.21076104801612, phaseCost: 187335 },
      otherResults: { otherCosts: 79713 },
      generalResults: { totalCost: 3059846, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.1595150977173077,
        onSiteDays: 9.145108843135676,
        phaseCost: 255282,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.407611745162072,
        onSiteDays: 22.17891073418037,
        phaseCost: 488382,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.56712684287938,
        onSiteDays: 31.324019577316044,
        phaseCost: 743664,
      },
      sourceReductionResults: { workDays: 2.287729091555269, onSiteDays: 2.287729091555269, phaseCost: 372734 },
      decontaminationResults: {
        workDays: 8.530809012830911,
        onSiteDays: 8.844772660370165,
        phaseCost: 338168437128,
      },
      incidentCommandResults: { onSiteDays: 50.45652132924148, phaseCost: 155587 },
      otherResults: { otherCosts: 115336 },
      generalResults: { totalCost: 2162617, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.6621820633176605,
          onSiteDays: 12.330393472995524,
          phaseCost: 451151,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.435351649567248,
          onSiteDays: 17.091315668068987,
          phaseCost: 440786,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.097533712884909,
          onSiteDays: 29.42170914106451,
          phaseCost: 891937,
        },
        sourceReductionResults: { workDays: 1.0806249479223056, onSiteDays: 1.0806249479223056, phaseCost: 78083 },
        decontaminationResults: {
          workDays: 8.151109579985754,
          onSiteDays: 10.342384136827286,
          phaseCost: 256043,
          otherCosts: 145769,
        },
        incidentCommandResults: { onSiteDays: 48.844718225814105, phaseCost: 147771 },
        otherResults: { otherCosts: 97101 },
        generalResults: { totalCost: 1616704, areaContaminated: 6353.766185081044, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.486251753007351,
          onSiteDays: 19.877150457264325,
          phaseCost: 380977,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.2188394334844577,
          onSiteDays: 25.95928809391771,
          phaseCost: 598832,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.705091186491808,
          onSiteDays: 45.836438551182034,
          phaseCost: 979809,
        },
        sourceReductionResults: { workDays: 0.5096060671618715, onSiteDays: 0.5096060671618715, phaseCost: 24960 },
        decontaminationResults: {
          workDays: 4.213106240893971,
          onSiteDays: 4.219292772053576,
          phaseCost: 195673,
          otherCosts: 158489,
        },
        incidentCommandResults: { onSiteDays: 58.56533739039748, phaseCost: 178723 },
        otherResults: { otherCosts: 50477 },
        generalResults: { totalCost: 1588131, areaContaminated: 6353.766185081044, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.556415699684164,
        onSiteDays: 23.24918605631096,
        phaseCost: 402812,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.725946573018621,
        onSiteDays: 47.075754859646125,
        phaseCost: 1067480,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.282362272702786,
        onSiteDays: 70.32494091595709,
        phaseCost: 1470292,
      },
      sourceReductionResults: { workDays: 1.0915140721257712, onSiteDays: 1.0915140721257712, phaseCost: 54157 },
      decontaminationResults: {
        workDays: 7.660546557898761,
        onSiteDays: 8.699520582496078,
        phaseCost: 83124305139,
      },
      incidentCommandResults: { onSiteDays: 88.11597557057894, phaseCost: 270967 },
      otherResults: { otherCosts: 108082 },
      generalResults: { totalCost: 2291761, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.79636868386862,
        onSiteDays: 21.364947500390137,
        phaseCost: 677112,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.417171892452696,
        onSiteDays: 13.754016215967738,
        phaseCost: 495492,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.213540576321316,
        onSiteDays: 35.118963716357875,
        phaseCost: 1172604,
      },
      sourceReductionResults: { workDays: 2.9242182621685893, onSiteDays: 2.9242182621685893, phaseCost: 335424 },
      decontaminationResults: {
        workDays: 4.472289084799655,
        onSiteDays: 5.3692893151588015,
        phaseCost: 157720289188,
      },
      incidentCommandResults: { onSiteDays: 51.412471293685265, phaseCost: 156717 },
      otherResults: { otherCosts: 78756 },
      generalResults: { totalCost: 2190409, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.3549117641038697,
          onSiteDays: 6.464959412677377,
          phaseCost: 71413,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.6632762650924329,
          onSiteDays: 10.718086295363875,
          phaseCost: 185915,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.0181880291963026,
          onSiteDays: 17.183045708041252,
          phaseCost: 257328,
        },
        sourceReductionResults: { workDays: 0.7362217393498326, onSiteDays: 0.7362217393498326, phaseCost: 35006 },
        decontaminationResults: {
          workDays: 3.520798483053408,
          onSiteDays: 4.515065737654237,
          phaseCost: 240083,
          otherCosts: 96934,
        },
        incidentCommandResults: { onSiteDays: 30.434333185045322, phaseCost: 93703 },
        otherResults: { otherCosts: 51709 },
        generalResults: { totalCost: 774763, areaContaminated: 6341.127057406382, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.52446249104672,
          onSiteDays: 20.539112658983036,
          phaseCost: 548628,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.5782265892962539,
          onSiteDays: 7.057957508345048,
          phaseCost: 263081,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.102689080342975,
          onSiteDays: 27.597070167328084,
          phaseCost: 811709,
        },
        sourceReductionResults: { workDays: 0.19283000873604608, onSiteDays: 0.19283000873604608, phaseCost: 32457 },
        decontaminationResults: {
          workDays: 4.502298773150494,
          onSiteDays: 7.0408822656704295,
          phaseCost: 65335,
          otherCosts: 293779,
        },
        incidentCommandResults: { onSiteDays: 42.830782441734556, phaseCost: 130249 },
        otherResults: { otherCosts: 39689 },
        generalResults: { totalCost: 1373218, areaContaminated: 6341.127057406382, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.6046768731090075,
        onSiteDays: 12.886133084606751,
        phaseCost: 489842,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.931341246921949,
        onSiteDays: 24.9330125944151,
        phaseCost: 1009084,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.536018120030956,
        onSiteDays: 37.81914567902185,
        phaseCost: 1498926,
      },
      sourceReductionResults: { workDays: 0.15153022513239336, onSiteDays: 0.15153022513239336, phaseCost: 45217 },
      decontaminationResults: {
        workDays: 3.91362500258573,
        onSiteDays: 5.290512955116693,
        phaseCost: 175198258664,
      },
      incidentCommandResults: { onSiteDays: 51.26118885927093, phaseCost: 157113 },
      otherResults: { otherCosts: 144099 },
      generalResults: { totalCost: 2279217, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.481871070809184,
        onSiteDays: 17.103542905557035,
        phaseCost: 1117032,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.0294154458590001,
        onSiteDays: 4.804582719455162,
        phaseCost: 247545,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.511286516668184,
        onSiteDays: 21.908125625012197,
        phaseCost: 1364577,
      },
      sourceReductionResults: { workDays: 0.5473926545573402, onSiteDays: 0.5473926545573402, phaseCost: 103428 },
      decontaminationResults: {
        workDays: 3.924019428650853,
        onSiteDays: 6.006025706186431,
        phaseCost: 42978269297,
      },
      incidentCommandResults: { onSiteDays: 36.461543985755966, phaseCost: 112523 },
      otherResults: { otherCosts: 77795 },
      generalResults: { totalCost: 1970598, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.7204626473839366,
          onSiteDays: 12.049912900034247,
          phaseCost: 318276,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.6879227875380051,
          onSiteDays: 7.640739927637199,
          phaseCost: 231952,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.4083854349219416,
          onSiteDays: 19.690652827671446,
          phaseCost: 550228,
        },
        sourceReductionResults: { workDays: 0.940580061655886, onSiteDays: 0.940580061655886, phaseCost: 43175 },
        decontaminationResults: {
          workDays: 8.101914761611706,
          onSiteDays: 8.305522919470798,
          phaseCost: 321719,
          otherCosts: 511036,
        },
        incidentCommandResults: { onSiteDays: 36.93675580879813, phaseCost: 113221 },
        otherResults: { otherCosts: 107385 },
        generalResults: { totalCost: 1646764, areaContaminated: 8496.214806450582, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.9469573190872274,
          onSiteDays: 9.821371792706032,
          phaseCost: 587793,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 13.695148154639377,
          onSiteDays: 26.734297120353194,
          phaseCost: 1055669,
        },
        totalCharacterizationSamplingResults: {
          workDays: 15.642105473726604,
          onSiteDays: 36.55566891305922,
          phaseCost: 1643462,
        },
        sourceReductionResults: { workDays: 0.3374393893001933, onSiteDays: 0.3374393893001933, phaseCost: 20719 },
        decontaminationResults: {
          workDays: 4.739256908125071,
          onSiteDays: 6.786160270400849,
          phaseCost: 272303,
          otherCosts: 188828,
        },
        incidentCommandResults: { onSiteDays: 51.679268572760265, phaseCost: 156167 },
        otherResults: { otherCosts: 62853 },
        generalResults: { totalCost: 2344332, areaContaminated: 8496.214806450582, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.9927258326901023,
        onSiteDays: 14.57349724076926,
        phaseCost: 885203,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 9.630109261840998,
        onSiteDays: 43.8999382128252,
        phaseCost: 2570447,
      },
      totalCharacterizationSamplingResults: {
        workDays: 12.6228350945311,
        onSiteDays: 58.47343545359446,
        phaseCost: 3455650,
      },
      sourceReductionResults: { workDays: 1.63315128344712, onSiteDays: 1.63315128344712, phaseCost: 158023 },
      decontaminationResults: {
        workDays: 21.704613086931552,
        onSiteDays: 23.386063205633796,
        phaseCost: 409290560874,
      },
      incidentCommandResults: { onSiteDays: 91.49264994267537, phaseCost: 275601 },
      otherResults: { otherCosts: 137688 },
      generalResults: { totalCost: 4997126, areaContaminated: 10000, decontaminationRounds: 2 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.730182349927351,
        onSiteDays: 42.826969231381796,
        phaseCost: 583232,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.201234813318616,
        onSiteDays: 21.996170870055593,
        phaseCost: 243998,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.931417163245968,
        onSiteDays: 64.82314010143739,
        phaseCost: 827230,
      },
      sourceReductionResults: { workDays: 1.0438032264192605, onSiteDays: 1.0438032264192605, phaseCost: 66833 },
      decontaminationResults: {
        workDays: 3.69973903724452,
        onSiteDays: 5.048675524082192,
        phaseCost: 153380167865,
      },
      incidentCommandResults: { onSiteDays: 78.91561885193883, phaseCost: 237399 },
      otherResults: { otherCosts: 71458 },
      generalResults: { totalCost: 1524165, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.8032922585626248,
          onSiteDays: 6.825293782158714,
          phaseCost: 291068,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.7533988486240997,
          onSiteDays: 5.616210513184164,
          phaseCost: 196099,
        },
        totalCharacterizationSamplingResults: {
          workDays: 1.5566911071867244,
          onSiteDays: 12.441504295342877,
          phaseCost: 487167,
        },
        sourceReductionResults: { workDays: 2.711845013407181, onSiteDays: 2.711845013407181, phaseCost: 289002 },
        decontaminationResults: {
          workDays: 8.717735030855456,
          onSiteDays: 9.77968448837746,
          phaseCost: 62612,
          otherCosts: 383403,
        },
        incidentCommandResults: { onSiteDays: 32.93303379712752, phaseCost: 99427 },
        otherResults: { otherCosts: 45692 },
        generalResults: { totalCost: 1367303, areaContaminated: 7770.246547360497, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.0098573693294775,
          onSiteDays: 17.42698387360992,
          phaseCost: 600116,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.92511880127014,
          onSiteDays: 18.830851760925423,
          phaseCost: 637508,
        },
        totalCharacterizationSamplingResults: {
          workDays: 10.934976170599619,
          onSiteDays: 36.25783563453534,
          phaseCost: 1237624,
        },
        sourceReductionResults: { workDays: 0.12871178751170104, onSiteDays: 0.12871178751170104, phaseCost: 15323 },
        decontaminationResults: {
          workDays: 7.857491627302368,
          onSiteDays: 10.098804756789189,
          phaseCost: 293850,
          otherCosts: 629059,
        },
        incidentCommandResults: { onSiteDays: 54.48535217883622, phaseCost: 164203 },
        otherResults: { otherCosts: 103412 },
        generalResults: { totalCost: 2443471, areaContaminated: 7770.246547360497, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.5466388484972944,
        onSiteDays: 25.13463458310334,
        phaseCost: 554862,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.3189332593276326,
        onSiteDays: 19.229864383571723,
        phaseCost: 383520,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.865572107824927,
        onSiteDays: 44.364498966675065,
        phaseCost: 938382,
      },
      sourceReductionResults: { workDays: 0.7376646841674214, onSiteDays: 0.7376646841674214, phaseCost: 100072 },
      decontaminationResults: {
        workDays: 14.543527482204029,
        onSiteDays: 15.444936437170238,
        phaseCost: 110698961495,
      },
      incidentCommandResults: { onSiteDays: 68.54710008801273, phaseCost: 211781 },
      otherResults: { otherCosts: 110257 },
      generalResults: { totalCost: 2432685, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.991347656063431,
        onSiteDays: 18.56131293697073,
        phaseCost: 1072777,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.974326927418388,
        onSiteDays: 15.294253925255653,
        phaseCost: 1029210,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.965674583481819,
        onSiteDays: 33.85556686222638,
        phaseCost: 2101987,
      },
      sourceReductionResults: { workDays: 2.644332429903239, onSiteDays: 2.644332429903239, phaseCost: 205543 },
      decontaminationResults: {
        workDays: 3.701148117590032,
        onSiteDays: 5.8136207216450995,
        phaseCost: 230350173951,
      },
      incidentCommandResults: { onSiteDays: 50.31352001377472, phaseCost: 151861 },
      otherResults: { otherCosts: 101156 },
      generalResults: { totalCost: 2964848, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.576951448232237,
          onSiteDays: 17.018779146394984,
          phaseCost: 740879,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.952911557369257,
          onSiteDays: 20.783873661436296,
          phaseCost: 810241,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.529863005601493,
          onSiteDays: 37.80265280783128,
          phaseCost: 1551120,
        },
        sourceReductionResults: { workDays: 0.72293294979416, onSiteDays: 0.72293294979416, phaseCost: 32780 },
        decontaminationResults: {
          workDays: 4.966480724040065,
          onSiteDays: 7.5641703739678885,
          phaseCost: 257716,
          otherCosts: 200361,
        },
        incidentCommandResults: { onSiteDays: 54.08975613159333, phaseCost: 162624 },
        otherResults: { otherCosts: 89133 },
        generalResults: { totalCost: 2293734, areaContaminated: 13799.836029950491, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.8423529583168348,
          onSiteDays: 28.666684410416206,
          phaseCost: 914454,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.651547668459214,
          onSiteDays: 50.335669074151284,
          phaseCost: 1897067,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.49390062677605,
          onSiteDays: 79.0023534845675,
          phaseCost: 2811521,
        },
        sourceReductionResults: { workDays: 1.6462994226531813, onSiteDays: 1.6462994226531813, phaseCost: 86544 },
        decontaminationResults: {
          workDays: 13.76236966875437,
          onSiteDays: 15.78602606495517,
          phaseCost: 212983,
          otherCosts: 945464,
        },
        incidentCommandResults: { onSiteDays: 104.43467897217585, phaseCost: 314393 },
        otherResults: { otherCosts: 89545 },
        generalResults: { totalCost: 4460450, areaContaminated: 13799.836029950491, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.2687260767134676,
        onSiteDays: 33.51296973898271,
        phaseCost: 1246573,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.152769999446449,
        onSiteDays: 13.477717844455894,
        phaseCost: 508916,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.421496076159917,
        onSiteDays: 46.99068758343861,
        phaseCost: 1755489,
      },
      sourceReductionResults: { workDays: 0.7898358047305926, onSiteDays: 0.7898358047305926, phaseCost: 31165 },
      decontaminationResults: {
        workDays: 8.025002313783625,
        onSiteDays: 8.341467909128747,
        phaseCost: 324432166936,
      },
      incidentCommandResults: { onSiteDays: 64.12199129729794, phaseCost: 195712 },
      otherResults: { otherCosts: 109740 },
      generalResults: { totalCost: 2583474, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 8.786719130097305,
        onSiteDays: 27.129820479206998,
        phaseCost: 1115667,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 9.932477228921998,
        onSiteDays: 50.325514354409805,
        phaseCost: 2320279,
      },
      totalCharacterizationSamplingResults: {
        workDays: 18.719196359019303,
        onSiteDays: 77.4553348336168,
        phaseCost: 3435946,
      },
      sourceReductionResults: { workDays: 0.6204437949952465, onSiteDays: 0.6204437949952465, phaseCost: 121134 },
      decontaminationResults: {
        workDays: 18.786165097678584,
        onSiteDays: 19.374133604898613,
        phaseCost: 612071004128,
      },
      incidentCommandResults: { onSiteDays: 105.44991223351067, phaseCost: 318171 },
      otherResults: { otherCosts: 56024 },
      generalResults: { totalCost: 4996610, areaContaminated: 10000, decontaminationRounds: 3 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.644553718863662,
          onSiteDays: 15.991099776222791,
          phaseCost: 412965,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.664761401401247,
          onSiteDays: 19.922818094615593,
          phaseCost: 749758,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.309315120264909,
          onSiteDays: 35.91391787083838,
          phaseCost: 1162723,
        },
        sourceReductionResults: { workDays: 1.8039478673718268, onSiteDays: 1.8039478673718268, phaseCost: 265931 },
        decontaminationResults: {
          workDays: 4.535230363145292,
          onSiteDays: 6.575081252859691,
          phaseCost: 569081,
          otherCosts: 223649,
        },
        incidentCommandResults: { onSiteDays: 52.2929469910699, phaseCost: 159286 },
        otherResults: { otherCosts: 117961 },
        generalResults: { totalCost: 2498631, areaContaminated: 13243.585903719902, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 9.261170758450193,
          onSiteDays: 36.39715628841721,
          phaseCost: 720597,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 21.304422504421908,
          onSiteDays: 71.46226909235784,
          phaseCost: 1318360,
        },
        totalCharacterizationSamplingResults: {
          workDays: 30.5655932628721,
          onSiteDays: 107.85942538077505,
          phaseCost: 2038957,
        },
        sourceReductionResults: { workDays: 4.5815790564082794, onSiteDays: 4.5815790564082794, phaseCost: 345209 },
        decontaminationResults: {
          workDays: 4.051505355874893,
          onSiteDays: 4.147382559289081,
          phaseCost: 287662,
          otherCosts: 96115,
        },
        incidentCommandResults: { onSiteDays: 124.58838699647241, phaseCost: 384384 },
        otherResults: { otherCosts: 82518 },
        generalResults: { totalCost: 3234845, areaContaminated: 13243.585903719902, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.5595608616677765,
        onSiteDays: 21.984356190116532,
        phaseCost: 705041,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.512897514058671,
        onSiteDays: 30.815644487772627,
        phaseCost: 971232,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.072458375726447,
        onSiteDays: 52.80000067788916,
        phaseCost: 1676273,
      },
      sourceReductionResults: { workDays: 0.30130975181241115, onSiteDays: 0.30130975181241115, phaseCost: 14215 },
      decontaminationResults: {
        workDays: 16.290302067597,
        onSiteDays: 16.681181784412168,
        phaseCost: 132305580548,
      },
      incidentCommandResults: { onSiteDays: 77.78249221411374, phaseCost: 240087 },
      otherResults: { otherCosts: 105981 },
      generalResults: { totalCost: 2749409, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.5214890751830072,
        onSiteDays: 10.883151311012478,
        phaseCost: 505295,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.907785937632185,
        onSiteDays: 17.99154207346357,
        phaseCost: 688069,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.429275012815192,
        onSiteDays: 28.874693384476046,
        phaseCost: 1193364,
      },
      sourceReductionResults: { workDays: 5.326176336840841, onSiteDays: 5.326176336840841, phaseCost: 307334 },
      decontaminationResults: {
        workDays: 4.311256040658629,
        onSiteDays: 5.9299144029919795,
        phaseCost: 132889172077,
      },
      incidentCommandResults: { onSiteDays: 48.13078412430886, phaseCost: 147122 },
      otherResults: { otherCosts: 96707 },
      generalResults: { totalCost: 2049493, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.6346298399911827,
          onSiteDays: 13.42010234623474,
          phaseCost: 603163,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.421609273106458,
          onSiteDays: 15.182352734433545,
          phaseCost: 802801,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.056239113097641,
          onSiteDays: 28.602455080668285,
          phaseCost: 1405964,
        },
        sourceReductionResults: { workDays: 0.7113250560585497, onSiteDays: 0.7113250560585497, phaseCost: 97079 },
        decontaminationResults: {
          workDays: 4.937404099837273,
          onSiteDays: 5.007947929903853,
          phaseCost: 256808,
          otherCosts: 245452,
        },
        incidentCommandResults: { onSiteDays: 42.32172806663068, phaseCost: 128186 },
        otherResults: { otherCosts: 71304 },
        generalResults: { totalCost: 2204793, areaContaminated: 9717.402910980723, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.6631633480155426,
          onSiteDays: 13.87001248469116,
          phaseCost: 808171,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 9.79456072141719,
          onSiteDays: 18.243844278464344,
          phaseCost: 628710,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.457724069432732,
          onSiteDays: 32.1138567631555,
          phaseCost: 1436881,
        },
        sourceReductionResults: { workDays: 1.7144078786416912, onSiteDays: 1.7144078786416912, phaseCost: 284183 },
        decontaminationResults: {
          workDays: 7.702885928494597,
          onSiteDays: 8.532025660279213,
          phaseCost: 60193,
          otherCosts: 465039,
        },
        incidentCommandResults: { onSiteDays: 50.36029030207641, phaseCost: 152671 },
        otherResults: { otherCosts: 90137 },
        generalResults: { totalCost: 2489104, areaContaminated: 9717.402910980723, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.676441407486923,
        onSiteDays: 13.138662591376598,
        phaseCost: 245895,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.9617088096902915,
        onSiteDays: 23.81851077542329,
        phaseCost: 619292,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.638150217177214,
        onSiteDays: 36.95717336679989,
        phaseCost: 865187,
      },
      sourceReductionResults: { workDays: 0.16541732267524337, onSiteDays: 0.16541732267524337, phaseCost: 19119 },
      decontaminationResults: {
        workDays: 8.096000818558037,
        onSiteDays: 10.407995059017091,
        phaseCost: 409592218012,
      },
      incidentCommandResults: { onSiteDays: 55.53058574849223, phaseCost: 170082 },
      otherResults: { otherCosts: 59916 },
      generalResults: { totalCost: 1741908, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.2037542433865112,
        onSiteDays: 6.987059811350761,
        phaseCost: 330587,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.5333569637668547,
        onSiteDays: 16.113083911675965,
        phaseCost: 820492,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.737111207153366,
        onSiteDays: 23.100143723026726,
        phaseCost: 1151079,
      },
      sourceReductionResults: { workDays: 0.12415562340212623, onSiteDays: 0.12415562340212623, phaseCost: 12190 },
      decontaminationResults: {
        workDays: 7.885731394841738,
        onSiteDays: 9.031406166039268,
        phaseCost: 261729525231,
      },
      incidentCommandResults: { onSiteDays: 40.25570551246812, phaseCost: 122575 },
      otherResults: { otherCosts: 72206 },
      generalResults: { totalCost: 2145010, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.3563071817740364,
          onSiteDays: 12.35029885938664,
          phaseCost: 788509,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.7927440335321858,
          onSiteDays: 7.298904750777155,
          phaseCost: 413582,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.149051215306223,
          onSiteDays: 19.649203610163795,
          phaseCost: 1202091,
        },
        sourceReductionResults: { workDays: 3.8205623691127575, onSiteDays: 3.8205623691127575, phaseCost: 125587 },
        decontaminationResults: {
          workDays: 3.129723436229332,
          onSiteDays: 5.822856411529438,
          phaseCost: 191958,
          otherCosts: 225270,
        },
        incidentCommandResults: { onSiteDays: 37.29262239080599, phaseCost: 114406 },
        otherResults: { otherCosts: 86901 },
        generalResults: { totalCost: 1946213, areaContaminated: 6985.398871355083, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.3530176952896675,
          onSiteDays: 8.875290705328505,
          phaseCost: 175818,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.4771183394635656,
          onSiteDays: 21.789740998631757,
          phaseCost: 681351,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.830136034753233,
          onSiteDays: 30.66503170396026,
          phaseCost: 857169,
        },
        sourceReductionResults: { workDays: 0.4139801843515081, onSiteDays: 0.4139801843515081, phaseCost: 60973 },
        decontaminationResults: {
          workDays: 6.724792380054666,
          onSiteDays: 6.938821891541319,
          phaseCost: 119565,
          otherCosts: 305065,
        },
        incidentCommandResults: { onSiteDays: 46.017833779853085, phaseCost: 139160 },
        otherResults: { otherCosts: 71866 },
        generalResults: { totalCost: 1553798, areaContaminated: 6985.398871355083, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.282089620305767,
        onSiteDays: 21.451732685967052,
        phaseCost: 453043,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.5581451965665014,
        onSiteDays: 46.218564795378256,
        phaseCost: 1004118,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.840234816872268,
        onSiteDays: 67.6702974813453,
        phaseCost: 1457161,
      },
      sourceReductionResults: { workDays: 0.534739831096281, onSiteDays: 0.534739831096281, phaseCost: 23992 },
      decontaminationResults: {
        workDays: 6.894471567332388,
        onSiteDays: 7.578819016595096,
        phaseCost: 212328333331,
      },
      incidentCommandResults: { onSiteDays: 83.78385632903667, phaseCost: 255644 },
      otherResults: { otherCosts: 62620 },
      generalResults: { totalCost: 2345076, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.2585791824796893,
        onSiteDays: 11.20373647065188,
        phaseCost: 400084,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.754793782558285,
        onSiteDays: 10.652089763657024,
        phaseCost: 450367,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.013372965037974,
        onSiteDays: 21.855826234308903,
        phaseCost: 850451,
      },
      sourceReductionResults: { workDays: 1.0363369546578556, onSiteDays: 1.0363369546578556, phaseCost: 193225 },
      decontaminationResults: {
        workDays: 3.091730229577918,
        onSiteDays: 3.5546412087405663,
        phaseCost: 98696114434,
      },
      incidentCommandResults: { onSiteDays: 34.446804397707325, phaseCost: 105076 },
      otherResults: { otherCosts: 38667 },
      generalResults: { totalCost: 1400549, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.061414523932566,
          onSiteDays: 8.800909283097054,
          phaseCost: 292476,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.0773130494863192,
          onSiteDays: 9.998624285089697,
          phaseCost: 580507,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.138727573418885,
          onSiteDays: 18.799533568186753,
          phaseCost: 872983,
        },
        sourceReductionResults: { workDays: 0.5305377199112918, onSiteDays: 0.5305377199112918, phaseCost: 25060 },
        decontaminationResults: {
          workDays: 7.339089501960922,
          onSiteDays: 9.040564170349521,
          phaseCost: 130318,
          otherCosts: 286357,
        },
        incidentCommandResults: { onSiteDays: 36.370635458447566, phaseCost: 111553 },
        otherResults: { otherCosts: 66949 },
        generalResults: { totalCost: 1493220, areaContaminated: 7942.6512035873375, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.7637249600476155,
          onSiteDays: 20.986804594567765,
          phaseCost: 456123,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.001647694274251,
          onSiteDays: 14.624825426844717,
          phaseCost: 315333,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.765372654321866,
          onSiteDays: 35.61163002141248,
          phaseCost: 771456,
        },
        sourceReductionResults: { workDays: 0.0747172337629198, onSiteDays: 0.0747172337629198, phaseCost: 14570 },
        decontaminationResults: {
          workDays: 8.066808352728097,
          onSiteDays: 8.38035092418556,
          phaseCost: 200313,
          otherCosts: 458166,
        },
        incidentCommandResults: { onSiteDays: 52.066698179360955, phaseCost: 157868 },
        otherResults: { otherCosts: 121091 },
        generalResults: { totalCost: 1723464, areaContaminated: 7942.6512035873375, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 8.537198509623172,
        onSiteDays: 28.056338156334405,
        phaseCost: 744667,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.1782932123967018,
        onSiteDays: 7.456651558353403,
        phaseCost: 222597,
      },
      totalCharacterizationSamplingResults: {
        workDays: 9.715491722019873,
        onSiteDays: 35.512989714687805,
        phaseCost: 967264,
      },
      sourceReductionResults: { workDays: 2.0728443832589956, onSiteDays: 2.0728443832589956, phaseCost: 224102 },
      decontaminationResults: {
        workDays: 9.61512488210926,
        onSiteDays: 12.414382649216424,
        phaseCost: 207833582209,
      },
      incidentCommandResults: { onSiteDays: 58.00021674716322, phaseCost: 174504 },
      otherResults: { otherCosts: 107798 },
      generalResults: { totalCost: 2263710, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.777883367262577,
        onSiteDays: 23.314952326051696,
        phaseCost: 507885,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.449072122534683,
        onSiteDays: 28.540154250199887,
        phaseCost: 688804,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.226955489797259,
        onSiteDays: 51.855106576251586,
        phaseCost: 1196689,
      },
      sourceReductionResults: { workDays: 0.06343279888640956, onSiteDays: 0.06343279888640956, phaseCost: 15703 },
      decontaminationResults: {
        workDays: 3.3340371382269165,
        onSiteDays: 5.175147468264948,
        phaseCost: 259194188969,
      },
      incidentCommandResults: { onSiteDays: 65.09368684340293, phaseCost: 196736 },
      otherResults: { otherCosts: 92102 },
      generalResults: { totalCost: 1949393, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.82295957095115,
          onSiteDays: 25.950731705275032,
          phaseCost: 1071746,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.5863015287972715,
          onSiteDays: 24.185877498646416,
          phaseCost: 847614,
        },
        totalCharacterizationSamplingResults: {
          workDays: 12.409261099748422,
          onSiteDays: 50.13660920392145,
          phaseCost: 1919360,
        },
        sourceReductionResults: { workDays: 5.688731672713008, onSiteDays: 5.688731672713008, phaseCost: 233057 },
        decontaminationResults: {
          workDays: 8.368514088068277,
          onSiteDays: 11.314601031670954,
          phaseCost: 406918,
          otherCosts: 562823,
        },
        incidentCommandResults: { onSiteDays: 75.13994190830542, phaseCost: 226955 },
        otherResults: { otherCosts: 91221 },
        generalResults: { totalCost: 3440334, areaContaminated: 12134.435169197255, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.589230662659869,
          onSiteDays: 35.43579128625801,
          phaseCost: 1233534,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.2316520058660227,
          onSiteDays: 17.934904299496356,
          phaseCost: 589547,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.820882668525892,
          onSiteDays: 53.37069558575436,
          phaseCost: 1823081,
        },
        sourceReductionResults: { workDays: 6.484884465554599, onSiteDays: 6.484884465554599, phaseCost: 409558 },
        decontaminationResults: {
          workDays: 4.555029273395201,
          onSiteDays: 5.758108938289366,
          phaseCost: 370393,
          otherCosts: 153307,
        },
        incidentCommandResults: { onSiteDays: 73.61368898959833, phaseCost: 226508 },
        otherResults: { otherCosts: 107991 },
        generalResults: { totalCost: 3090838, areaContaminated: 12134.435169197255, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 9.216294003963926,
        onSiteDays: 20.8464047039066,
        phaseCost: 1186591,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.249857889920559,
        onSiteDays: 5.386380299465092,
        phaseCost: 352549,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.466151893884485,
        onSiteDays: 26.232785003371692,
        phaseCost: 1539140,
      },
      sourceReductionResults: { workDays: 1.6825766621111686, onSiteDays: 1.6825766621111686, phaseCost: 148449 },
      decontaminationResults: {
        workDays: 16.096707912650125,
        onSiteDays: 17.212739715867848,
        phaseCost: 132825651978,
      },
      incidentCommandResults: { onSiteDays: 53.12810138135071, phaseCost: 161006 },
      otherResults: { otherCosts: 78936 },
      generalResults: { totalCost: 2712334, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.584728991417512,
        onSiteDays: 25.44006741084148,
        phaseCost: 715167,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.955554892924201,
        onSiteDays: 63.82324709734175,
        phaseCost: 1854761,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.540283884341713,
        onSiteDays: 89.26331450818323,
        phaseCost: 2569928,
      },
      sourceReductionResults: { workDays: 0.1520456621069056, onSiteDays: 0.1520456621069056, phaseCost: 29341 },
      decontaminationResults: {
        workDays: 9.433885680146954,
        onSiteDays: 10.681011951454218,
        phaseCost: 375756174635,
      },
      incidentCommandResults: { onSiteDays: 108.09637212174435, phaseCost: 331783 },
      otherResults: { otherCosts: 142850 },
      generalResults: { totalCost: 3624293, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.3888420109932524,
          onSiteDays: 13.988726245645475,
          phaseCost: 498533,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.7756444655460001,
          onSiteDays: 4.655879473774945,
          phaseCost: 137378,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.1644864765392526,
          onSiteDays: 18.64460571942042,
          phaseCost: 635911,
        },
        sourceReductionResults: { workDays: 1.4778216628598284, onSiteDays: 1.4778216628598284, phaseCost: 50555 },
        decontaminationResults: {
          workDays: 13.103256351338526,
          onSiteDays: 13.16193923939996,
          phaseCost: 50775,
          otherCosts: 483601,
        },
        incidentCommandResults: { onSiteDays: 41.284366621680206, phaseCost: 127919 },
        otherResults: { otherCosts: 85150 },
        generalResults: { totalCost: 1433911, areaContaminated: 6581.662653847986, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.521586576041964,
          onSiteDays: 22.541680385390848,
          phaseCost: 773055,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.942369484868932,
          onSiteDays: 32.173163528638916,
          phaseCost: 1834143,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.463956060910895,
          onSiteDays: 54.714843914029764,
          phaseCost: 2607198,
        },
        sourceReductionResults: { workDays: 0.7766891682547473, onSiteDays: 0.7766891682547473, phaseCost: 81390 },
        decontaminationResults: {
          workDays: 15.172751632792117,
          onSiteDays: 17.146085343357658,
          phaseCost: 75538,
          otherCosts: 907418,
        },
        incidentCommandResults: { onSiteDays: 80.63761842564217, phaseCost: 249426 },
        otherResults: { otherCosts: 110506 },
        generalResults: { totalCost: 4031476, areaContaminated: 6581.662653847986, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.8720975954978885,
        onSiteDays: 15.890622767554206,
        phaseCost: 1018958,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.7755304125799034,
        onSiteDays: 19.665226189143347,
        phaseCost: 1168466,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.647628008077792,
        onSiteDays: 35.55584895669755,
        phaseCost: 2187424,
      },
      sourceReductionResults: { workDays: 0.20947411529954138, onSiteDays: 0.20947411529954138, phaseCost: 16623 },
      decontaminationResults: {
        workDays: 3.413010144702394,
        onSiteDays: 5.64181134119672,
        phaseCost: 320013102907,
      },
      incidentCommandResults: { onSiteDays: 49.407134413193816, phaseCost: 150402 },
      otherResults: { otherCosts: 65914 },
      generalResults: { totalCost: 2843283, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.1996191243646475,
        onSiteDays: 10.050265909019124,
        phaseCost: 199783,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.5458946486961507,
        onSiteDays: 28.4612144558333,
        phaseCost: 620853,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.745513773060798,
        onSiteDays: 38.511480364852424,
        phaseCost: 820636,
      },
      sourceReductionResults: { workDays: 6.109284302226928, onSiteDays: 6.109284302226928, phaseCost: 280568 },
      decontaminationResults: {
        workDays: 4.0673499598790315,
        onSiteDays: 6.781509929751397,
        phaseCost: 321774243123,
      },
      incidentCommandResults: { onSiteDays: 59.40227459683075, phaseCost: 181173 },
      otherResults: { otherCosts: 54985 },
      generalResults: { totalCost: 1902259, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.1860230336388677,
          onSiteDays: 35.749378613847256,
          phaseCost: 758919,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.62780728820878,
          onSiteDays: 53.22565849879599,
          phaseCost: 1031736,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.813830321847648,
          onSiteDays: 88.97503711264324,
          phaseCost: 1790655,
        },
        sourceReductionResults: { workDays: 1.1102121874144086, onSiteDays: 1.1102121874144086, phaseCost: 109383 },
        decontaminationResults: {
          workDays: 4.058838367708688,
          onSiteDays: 4.5523759626206886,
          phaseCost: 266256,
          otherCosts: 235763,
        },
        incidentCommandResults: { onSiteDays: 102.63762526267833, phaseCost: 313011 },
        otherResults: { otherCosts: 143832 },
        generalResults: { totalCost: 2858900, areaContaminated: 13272.625074785348, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.627545463308733,
          onSiteDays: 37.27648946503468,
          phaseCost: 1186217,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 26.058619944644253,
          onSiteDays: 97.59408280785327,
          phaseCost: 2524696,
        },
        totalCharacterizationSamplingResults: {
          workDays: 30.686165407952984,
          onSiteDays: 134.87057227288796,
          phaseCost: 3710913,
        },
        sourceReductionResults: { workDays: 1.966405757828898, onSiteDays: 1.966405757828898, phaseCost: 203774 },
        decontaminationResults: {
          workDays: 12.25042701215726,
          onSiteDays: 15.068346082947297,
          phaseCost: 328132,
          otherCosts: 468169,
        },
        incidentCommandResults: { onSiteDays: 159.90532411366416, phaseCost: 489986 },
        otherResults: { otherCosts: 107857 },
        generalResults: { totalCost: 5308831, areaContaminated: 13272.625074785348, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.424728296003958,
        onSiteDays: 23.232817428527216,
        phaseCost: 941332,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.5065266151840078,
        onSiteDays: 19.107673236221093,
        phaseCost: 724911,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.931254911187965,
        onSiteDays: 42.34049066474831,
        phaseCost: 1666243,
      },
      sourceReductionResults: { workDays: 7.131417725848852, onSiteDays: 7.131417725848852, phaseCost: 368839 },
      decontaminationResults: {
        workDays: 15.201999330707359,
        onSiteDays: 15.292765528963125,
        phaseCost: 413218931618,
      },
      incidentCommandResults: { onSiteDays: 72.7646739195603, phaseCost: 220219 },
      otherResults: { otherCosts: 105725 },
      generalResults: { totalCost: 3705862, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.9481263970327607,
        onSiteDays: 28.386525721704665,
        phaseCost: 599071,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.9087363317634338,
        onSiteDays: 23.35365931759675,
        phaseCost: 584854,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.8568627287961945,
        onSiteDays: 51.740185039301416,
        phaseCost: 1183925,
      },
      sourceReductionResults: { workDays: 0.8187225205510781, onSiteDays: 0.8187225205510781, phaseCost: 35493 },
      decontaminationResults: {
        workDays: 7.529995727243366,
        onSiteDays: 7.592123303700267,
        phaseCost: 145384305916,
      },
      incidentCommandResults: { onSiteDays: 68.15103086355276, phaseCost: 208823 },
      otherResults: { otherCosts: 60326 },
      generalResults: { totalCost: 1939867, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.4577312333227852,
          onSiteDays: 4.861566931075837,
          phaseCost: 256439,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.5033701549537235,
          onSiteDays: 10.07451743413399,
          phaseCost: 739367,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.961101388276509,
          onSiteDays: 14.936084365209826,
          phaseCost: 995806,
        },
        sourceReductionResults: { workDays: 0.2598166227025899, onSiteDays: 0.2598166227025899, phaseCost: 59734 },
        decontaminationResults: {
          workDays: 4.656064657414348,
          onSiteDays: 7.1174500226316635,
          phaseCost: 422465,
          otherCosts: 252433,
        },
        incidentCommandResults: { onSiteDays: 30.313351010544082, phaseCost: 93566 },
        otherResults: { otherCosts: 81853 },
        generalResults: { totalCost: 1905857, areaContaminated: 9686.615808095461, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.0357323859290313,
          onSiteDays: 7.688457343113891,
          phaseCost: 352568,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.543230520142762,
          onSiteDays: 13.377445437787786,
          phaseCost: 969820,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.578962906071793,
          onSiteDays: 21.065902780901677,
          phaseCost: 1322388,
        },
        sourceReductionResults: { workDays: 1.0862805180179185, onSiteDays: 1.0862805180179185, phaseCost: 100066 },
        decontaminationResults: {
          workDays: 4.1634486674246025,
          onSiteDays: 4.874448684946272,
          phaseCost: 318084,
          otherCosts: 165567,
        },
        incidentCommandResults: { onSiteDays: 35.02663198386587, phaseCost: 108024 },
        otherResults: { otherCosts: 51155 },
        generalResults: { totalCost: 2065284, areaContaminated: 9686.615808095461, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.6222889345540017,
        onSiteDays: 15.836646716498757,
        phaseCost: 292466,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.159408309190528,
        onSiteDays: 17.14116288885753,
        phaseCost: 231690,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.78169724374453,
        onSiteDays: 32.977809605356285,
        phaseCost: 524156,
      },
      sourceReductionResults: { workDays: 5.21998606810363, onSiteDays: 5.21998606810363, phaseCost: 297620 },
      decontaminationResults: {
        workDays: 13.702492183237915,
        onSiteDays: 16.508018146387304,
        phaseCost: 365507310295,
      },
      incidentCommandResults: { onSiteDays: 62.70581381984722, phaseCost: 188800 },
      otherResults: { otherCosts: 118973 },
      generalResults: { totalCost: 1805351, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 10.147851112222588,
        onSiteDays: 27.231413330043928,
        phaseCost: 1092196,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.155398125280214,
        onSiteDays: 8.268763879841318,
        phaseCost: 444351,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.303249237502802,
        onSiteDays: 35.500177209885244,
        phaseCost: 1536547,
      },
      sourceReductionResults: { workDays: 0.6344558844828726, onSiteDays: 0.6344558844828726, phaseCost: 79330 },
      decontaminationResults: {
        workDays: 3.046825685549254,
        onSiteDays: 5.510002387107816,
        phaseCost: 419948207085,
      },
      incidentCommandResults: { onSiteDays: 49.64463548147594, phaseCost: 149434 },
      otherResults: { otherCosts: 55969 },
      generalResults: { totalCost: 2448313, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.0213770347758064,
          onSiteDays: 21.368709828253852,
          phaseCost: 574102,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.214639243437081,
          onSiteDays: 43.26501736499337,
          phaseCost: 1294556,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.236016278212888,
          onSiteDays: 64.63372719324722,
          phaseCost: 1868658,
        },
        sourceReductionResults: { workDays: 1.622968450451732, onSiteDays: 1.622968450451732, phaseCost: 102579 },
        decontaminationResults: {
          workDays: 7.005036866992022,
          onSiteDays: 9.058515735217025,
          phaseCost: 413874,
          otherCosts: 205529,
        },
        incidentCommandResults: { onSiteDays: 83.31521137891599, phaseCost: 255391 },
        otherResults: { otherCosts: 70831 },
        generalResults: { totalCost: 2916862, areaContaminated: 11142.740139305299, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.2946916728316022,
          onSiteDays: 26.723801510691565,
          phaseCost: 542891,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.052031541098153,
          onSiteDays: 37.79602649415747,
          phaseCost: 717084,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.346723213929756,
          onSiteDays: 64.51982800484905,
          phaseCost: 1259975,
        },
        sourceReductionResults: { workDays: 4.775673603799742, onSiteDays: 4.775673603799742, phaseCost: 326915 },
        decontaminationResults: {
          workDays: 9.300129962922103,
          onSiteDays: 11.616319276070296,
          phaseCost: 356415,
          otherCosts: 576709,
        },
        incidentCommandResults: { onSiteDays: 88.91182088471909, phaseCost: 275215 },
        otherResults: { otherCosts: 97378 },
        generalResults: { totalCost: 2892607, areaContaminated: 11142.740139305299, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.5819153403531647,
        onSiteDays: 25.865579202183568,
        phaseCost: 948996,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.458093411726908,
        onSiteDays: 32.23669735187225,
        phaseCost: 1041053,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.040008752080073,
        onSiteDays: 58.10227655405582,
        phaseCost: 1990049,
      },
      sourceReductionResults: { workDays: 0.5988307888460165, onSiteDays: 0.5988307888460165, phaseCost: 41567 },
      decontaminationResults: {
        workDays: 3.458978788102739,
        onSiteDays: 4.720278316345131,
        phaseCost: 266704188681,
      },
      incidentCommandResults: { onSiteDays: 71.42138565924697, phaseCost: 216458 },
      otherResults: { otherCosts: 53305 },
      generalResults: { totalCost: 2756764, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 14.359156557135538,
        onSiteDays: 26.84043405708661,
        phaseCost: 1003211,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.8219863535413008,
        onSiteDays: 8.555210884952611,
        phaseCost: 640291,
      },
      totalCharacterizationSamplingResults: {
        workDays: 16.18114291067684,
        onSiteDays: 35.395644942039226,
        phaseCost: 1643502,
      },
      sourceReductionResults: { workDays: 2.221650524927215, onSiteDays: 2.221650524927215, phaseCost: 458217 },
      decontaminationResults: {
        workDays: 4.823787798132698,
        onSiteDays: 5.846289425819714,
        phaseCost: 43358589205,
      },
      incidentCommandResults: { onSiteDays: 51.46358489278615, phaseCost: 155350 },
      otherResults: { otherCosts: 69517 },
      generalResults: { totalCost: 2849376, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.6978501295325374,
          onSiteDays: 29.733427931383982,
          phaseCost: 953160,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.9309265219586096,
          onSiteDays: 24.57771009736626,
          phaseCost: 742327,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.6287766514911475,
          onSiteDays: 54.31113802875024,
          phaseCost: 1695487,
        },
        sourceReductionResults: { workDays: 1.6025810624276575, onSiteDays: 1.6025810624276575, phaseCost: 196404 },
        decontaminationResults: {
          workDays: 3.849299200542574,
          onSiteDays: 4.965800867408002,
          phaseCost: 369752,
          otherCosts: 143818,
        },
        incidentCommandResults: { onSiteDays: 68.8795199585859, phaseCost: 208522 },
        otherResults: { otherCosts: 73150 },
        generalResults: { totalCost: 2687133, areaContaminated: 10449.60567621738, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 8.831482586336394,
          onSiteDays: 25.57793669985614,
          phaseCost: 1322705,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.6280488419010157,
          onSiteDays: 15.005468359411093,
          phaseCost: 950642,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.45953142823741,
          onSiteDays: 40.583405059267236,
          phaseCost: 2273347,
        },
        sourceReductionResults: { workDays: 0.9736264610028796, onSiteDays: 0.9736264610028796, phaseCost: 124421 },
        decontaminationResults: {
          workDays: 7.251482500520414,
          onSiteDays: 8.548696138325308,
          phaseCost: 235814,
          otherCosts: 210712,
        },
        incidentCommandResults: { onSiteDays: 58.10572765859543, phaseCost: 178082 },
        otherResults: { otherCosts: 62194 },
        generalResults: { totalCost: 3084570, areaContaminated: 10449.60567621738, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.533386588454443,
        onSiteDays: 40.809470312356204,
        phaseCost: 1159725,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.8753265761173668,
        onSiteDays: 19.68335607984988,
        phaseCost: 538423,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.408713164571809,
        onSiteDays: 60.492826392206084,
        phaseCost: 1698148,
      },
      sourceReductionResults: { workDays: 0.4765972358186891, onSiteDays: 0.4765972358186891, phaseCost: 45776 },
      decontaminationResults: {
        workDays: 12.490077542022355,
        onSiteDays: 15.244256384727606,
        phaseCost: 125512491598,
      },
      incidentCommandResults: { onSiteDays: 84.21368001275238, phaseCost: 259515 },
      otherResults: { otherCosts: 102313 },
      generalResults: { totalCost: 2722862, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.0827506817682693,
        onSiteDays: 30.513808833487154,
        phaseCost: 605047,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.2881389415936413,
        onSiteDays: 45.44087098734587,
        phaseCost: 805721,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.370889623361911,
        onSiteDays: 75.95467982083302,
        phaseCost: 1410768,
      },
      sourceReductionResults: { workDays: 2.1179094088073738, onSiteDays: 2.1179094088073738, phaseCost: 334636 },
      decontaminationResults: {
        workDays: 7.936382126979619,
        onSiteDays: 8.31933711267061,
        phaseCost: 52592189428,
      },
      incidentCommandResults: { onSiteDays: 94.39192634231101, phaseCost: 289864 },
      otherResults: { otherCosts: 55282 },
      generalResults: { totalCost: 2332570, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.0924261857290323,
          onSiteDays: 15.955584083456943,
          phaseCost: 856014,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 15.275618583391537,
          onSiteDays: 49.545679831970574,
          phaseCost: 1984805,
        },
        totalCharacterizationSamplingResults: {
          workDays: 18.36804476912057,
          onSiteDays: 65.50126391542751,
          phaseCost: 2840819,
        },
        sourceReductionResults: { workDays: 2.169686830078532, onSiteDays: 2.169686830078532, phaseCost: 259250 },
        decontaminationResults: {
          workDays: 13.673297099925879,
          onSiteDays: 14.594204321641987,
          phaseCost: 492005,
          otherCosts: 822346,
        },
        incidentCommandResults: { onSiteDays: 90.26515506714803, phaseCost: 277343 },
        otherResults: { otherCosts: 63292 },
        generalResults: { totalCost: 4755055, areaContaminated: 12306.884032978418, decontaminationRounds: 2 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.6457015293876562,
          onSiteDays: 4.891961788657183,
          phaseCost: 247792,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.955322315746357,
          onSiteDays: 18.29381006258699,
          phaseCost: 1145230,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.601023845134013,
          onSiteDays: 23.185771851244173,
          phaseCost: 1393022,
        },
        sourceReductionResults: { workDays: 0.2151827214351827, onSiteDays: 0.2151827214351827, phaseCost: 34272 },
        decontaminationResults: {
          workDays: 9.177953749238036,
          onSiteDays: 9.719413813138242,
          phaseCost: 493019,
          otherCosts: 468978,
        },
        incidentCommandResults: { onSiteDays: 41.1203683858176, phaseCost: 123915 },
        otherResults: { otherCosts: 72348 },
        generalResults: { totalCost: 2585554, areaContaminated: 12306.884032978418, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.161675982507906,
        onSiteDays: 16.63682364062218,
        phaseCost: 495206,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.178527664278201,
        onSiteDays: 16.77045353908826,
        phaseCost: 459361,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.340203646786108,
        onSiteDays: 33.407277179710434,
        phaseCost: 954567,
      },
      sourceReductionResults: { workDays: 0.6049998373114308, onSiteDays: 0.6049998373114308, phaseCost: 104824 },
      decontaminationResults: {
        workDays: 11.490754186290026,
        onSiteDays: 13.756376894832677,
        phaseCost: 90613382323,
      },
      incidentCommandResults: { onSiteDays: 55.76865391185454, phaseCost: 170139 },
      otherResults: { otherCosts: 161687 },
      generalResults: { totalCost: 1864153, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.3056132833190106,
        onSiteDays: 7.994726179999777,
        phaseCost: 170278,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.732183835920212,
        onSiteDays: 31.32365814521718,
        phaseCost: 854802,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.037797119239222,
        onSiteDays: 39.318384325216954,
        phaseCost: 1025080,
      },
      sourceReductionResults: { workDays: 1.6986570656511597, onSiteDays: 1.6986570656511597, phaseCost: 58542 },
      decontaminationResults: {
        workDays: 3.8624707387905732,
        onSiteDays: 6.576457316422941,
        phaseCost: 402277202014,
      },
      incidentCommandResults: { onSiteDays: 55.593498707291054, phaseCost: 171807 },
      otherResults: { otherCosts: 97766 },
      generalResults: { totalCost: 1957486, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 7.481155714816642,
          onSiteDays: 25.423405655756767,
          phaseCost: 665038,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.866399000509848,
          onSiteDays: 35.416088576803816,
          phaseCost: 1198247,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.347554715326488,
          onSiteDays: 60.83949423256058,
          phaseCost: 1863285,
        },
        sourceReductionResults: { workDays: 1.0782300964962512, onSiteDays: 1.0782300964962512, phaseCost: 46353 },
        decontaminationResults: {
          workDays: 8.583285340709445,
          onSiteDays: 11.210381934701088,
          phaseCost: 259496,
          otherCosts: 259035,
        },
        incidentCommandResults: { onSiteDays: 81.12810626375791, phaseCost: 246878 },
        otherResults: { otherCosts: 85583 },
        generalResults: { totalCost: 2760630, areaContaminated: 11461.69083576223, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.174172497744378,
          onSiteDays: 30.58960315135289,
          phaseCost: 1114434,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.684898304442841,
          onSiteDays: 21.77380856924006,
          phaseCost: 688303,
        },
        totalCharacterizationSamplingResults: {
          workDays: 10.859070802187219,
          onSiteDays: 52.36341172059295,
          phaseCost: 1802737,
        },
        sourceReductionResults: { workDays: 0.9586023431439786, onSiteDays: 0.9586023431439786, phaseCost: 236065 },
        decontaminationResults: {
          workDays: 7.25255797366904,
          onSiteDays: 8.999017827445412,
          phaseCost: 401515,
          otherCosts: 398710,
        },
        incidentCommandResults: { onSiteDays: 70.32103189118234, phaseCost: 213857 },
        otherResults: { otherCosts: 92181 },
        generalResults: { totalCost: 3145065, areaContaminated: 11461.69083576223, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.015253436735648,
        onSiteDays: 30.002549930651952,
        phaseCost: 598946,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.868013996164016,
        onSiteDays: 37.16949151293239,
        phaseCost: 810460,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.883267432899665,
        onSiteDays: 67.17204144358433,
        phaseCost: 1409406,
      },
      sourceReductionResults: { workDays: 0.8894541628444101, onSiteDays: 0.8894541628444101, phaseCost: 180701 },
      decontaminationResults: {
        workDays: 8.349478430661717,
        onSiteDays: 10.130771924073523,
        phaseCost: 357591192777,
      },
      incidentCommandResults: { onSiteDays: 86.19226753050228, phaseCost: 265438 },
      otherResults: { otherCosts: 115749 },
      generalResults: { totalCost: 2521662, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.9695533249187345,
        onSiteDays: 15.336593805113012,
        phaseCost: 534029,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.935763501132229,
        onSiteDays: 45.571161379908276,
        phaseCost: 2081830,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.905316826050964,
        onSiteDays: 60.90775518502129,
        phaseCost: 2615859,
      },
      sourceReductionResults: { workDays: 0.7020451798279306, onSiteDays: 0.7020451798279306, phaseCost: 134054 },
      decontaminationResults: {
        workDays: 17.955953077170058,
        onSiteDays: 19.96040900376635,
        phaseCost: 2248061022250,
      },
      incidentCommandResults: { onSiteDays: 89.57020936861556, phaseCost: 272003 },
      otherResults: { otherCosts: 129101 },
      generalResults: { totalCost: 4398073, areaContaminated: 10000, decontaminationRounds: 4 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.554495562131752,
          onSiteDays: 8.504472704958793,
          phaseCost: 137379,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.4839848310031167,
          onSiteDays: 16.99326143291703,
          phaseCost: 420976,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.0384803931348685,
          onSiteDays: 25.497734137875824,
          phaseCost: 558355,
        },
        sourceReductionResults: { workDays: 1.0850870195759887, onSiteDays: 1.0850870195759887, phaseCost: 56906 },
        decontaminationResults: {
          workDays: 7.454991635739569,
          onSiteDays: 8.358471409035491,
          phaseCost: 391840,
          otherCosts: 450912,
        },
        incidentCommandResults: { onSiteDays: 42.941292566487306, phaseCost: 131678 },
        otherResults: { otherCosts: 47637 },
        generalResults: { totalCost: 1637328, areaContaminated: 9791.863084489447, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.2635804326980082,
          onSiteDays: 16.326684388243514,
          phaseCost: 658236,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.4402345067169957,
          onSiteDays: 17.458456390727974,
          phaseCost: 921199,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.703814939415004,
          onSiteDays: 33.78514077897149,
          phaseCost: 1579435,
        },
        sourceReductionResults: { workDays: 1.6309231028954907, onSiteDays: 1.6309231028954907, phaseCost: 200268 },
        decontaminationResults: {
          workDays: 3.495088901951697,
          onSiteDays: 4.986199305156758,
          phaseCost: 281712,
          otherCosts: 176986,
        },
        incidentCommandResults: { onSiteDays: 48.40226318702374, phaseCost: 149090 },
        otherResults: { otherCosts: 39273 },
        generalResults: { totalCost: 2426764, areaContaminated: 9791.863084489447, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.412991316466897,
        onSiteDays: 24.283952242276094,
        phaseCost: 399192,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.311982265403083,
        onSiteDays: 36.91115397193527,
        phaseCost: 746038,
      },
      totalCharacterizationSamplingResults: {
        workDays: 9.72497358186998,
        onSiteDays: 61.195106214211364,
        phaseCost: 1145230,
      },
      sourceReductionResults: { workDays: 2.442434320243394, onSiteDays: 2.442434320243394, phaseCost: 94710 },
      decontaminationResults: {
        workDays: 3.287775271173514,
        onSiteDays: 4.450634238880741,
        phaseCost: 370742160403,
      },
      incidentCommandResults: { onSiteDays: 76.0881747733355, phaseCost: 231044 },
      otherResults: { otherCosts: 80150 },
      generalResults: { totalCost: 2082279, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.2976034635942093,
        onSiteDays: 21.312101312442028,
        phaseCost: 486978,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 12.018097729460177,
        onSiteDays: 37.61571425927808,
        phaseCost: 655542,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.315701193054386,
        onSiteDays: 58.9278155717201,
        phaseCost: 1142520,
      },
      sourceReductionResults: { workDays: 0.5161461560804558, onSiteDays: 0.5161461560804558, phaseCost: 45199 },
      decontaminationResults: {
        workDays: 3.7826711150777226,
        onSiteDays: 5.302336545964316,
        phaseCost: 126569126169,
      },
      incidentCommandResults: { onSiteDays: 72.74629827376486, phaseCost: 225550 },
      otherResults: { otherCosts: 105222 },
      generalResults: { totalCost: 1771229, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.149446777207503,
          onSiteDays: 26.406113292478665,
          phaseCost: 1856725,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.6519081243092995,
          onSiteDays: 20.0561895675772,
          phaseCost: 1042895,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.801354901516802,
          onSiteDays: 46.462302860055864,
          phaseCost: 2899620,
        },
        sourceReductionResults: { workDays: 1.3286546368719974, onSiteDays: 1.3286546368719974, phaseCost: 181089 },
        decontaminationResults: {
          workDays: 3.1273028524888917,
          onSiteDays: 4.702338002785654,
          phaseCost: 498565,
          otherCosts: 172047,
        },
        incidentCommandResults: { onSiteDays: 60.49329549971351, phaseCost: 183604 },
        otherResults: { otherCosts: 67482 },
        generalResults: { totalCost: 4002407, areaContaminated: 14677.755020018143, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 9.141190496257765,
          onSiteDays: 32.84713381448342,
          phaseCost: 686628,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 9.227652957926901,
          onSiteDays: 59.94490786671985,
          phaseCost: 1533556,
        },
        totalCharacterizationSamplingResults: {
          workDays: 18.368843454184667,
          onSiteDays: 92.79204168120327,
          phaseCost: 2220184,
        },
        sourceReductionResults: { workDays: 3.0447486107405863, onSiteDays: 3.0447486107405863, phaseCost: 277983 },
        decontaminationResults: {
          workDays: 12.683154948913296,
          onSiteDays: 13.62868217556474,
          phaseCost: 191765,
          otherCosts: 623195,
        },
        incidentCommandResults: { onSiteDays: 117.46547246750859, phaseCost: 354745 },
        otherResults: { otherCosts: 74587 },
        generalResults: { totalCost: 3742459, areaContaminated: 14677.755020018143, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.882151963838347,
        onSiteDays: 43.070840971143056,
        phaseCost: 789929,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.276856512599921,
        onSiteDays: 34.71202170956093,
        phaseCost: 637186,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.159008476438268,
        onSiteDays: 77.78286268070399,
        phaseCost: 1427115,
      },
      sourceReductionResults: { workDays: 2.292460570038366, onSiteDays: 2.292460570038366, phaseCost: 90029 },
      decontaminationResults: {
        workDays: 11.919132665945014,
        onSiteDays: 13.68300217475812,
        phaseCost: 31647672861,
      },
      incidentCommandResults: { onSiteDays: 101.75832542550047, phaseCost: 306819 },
      otherResults: { otherCosts: 68784 },
      generalResults: { totalCost: 2597255, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.3342593005983934,
        onSiteDays: 7.356884546840552,
        phaseCost: 403163,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 16.661276605138806,
        onSiteDays: 99.50451667167206,
        phaseCost: 7390099,
      },
      totalCharacterizationSamplingResults: {
        workDays: 17.9955359057372,
        onSiteDays: 106.86140121851261,
        phaseCost: 7793262,
      },
      sourceReductionResults: { workDays: 0.3106838058425838, onSiteDays: 0.3106838058425838, phaseCost: 81005 },
      decontaminationResults: {
        workDays: 27.568879364423655,
        onSiteDays: 29.09292500258724,
        phaseCost: 3667441935483,
      },
      incidentCommandResults: { onSiteDays: 144.26501002694243, phaseCost: 442217 },
      otherResults: { otherCosts: 115465 },
      generalResults: { totalCost: 10734176, areaContaminated: 10000, decontaminationRounds: 5 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.6612925463566448,
          onSiteDays: 5.939156693605994,
          phaseCost: 267757,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.972442101204913,
          onSiteDays: 12.026343808254612,
          phaseCost: 550149,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.633734647561558,
          onSiteDays: 17.965500501860607,
          phaseCost: 817906,
        },
        sourceReductionResults: { workDays: 0.1659333589678873, onSiteDays: 0.1659333589678873, phaseCost: 28211 },
        decontaminationResults: {
          workDays: 8.816391373243274,
          onSiteDays: 9.534180401948788,
          phaseCost: 199970,
          otherCosts: 314391,
        },
        incidentCommandResults: { onSiteDays: 35.66561426277728, phaseCost: 108026 },
        otherResults: { otherCosts: 82179 },
        generalResults: { totalCost: 1550683, areaContaminated: 5314.060456658262, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.089698737498711,
          onSiteDays: 10.282796945683206,
          phaseCost: 362698,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.6860074000256992,
          onSiteDays: 5.037534603023072,
          phaseCost: 176737,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.77570613752441,
          onSiteDays: 15.320331548706278,
          phaseCost: 539435,
        },
        sourceReductionResults: { workDays: 0.18516681155208153, onSiteDays: 0.18516681155208153, phaseCost: 22659 },
        decontaminationResults: {
          workDays: 7.174884728895241,
          onSiteDays: 9.799563277931782,
          phaseCost: 207683,
          otherCosts: 412933,
        },
        incidentCommandResults: { onSiteDays: 33.30506163819014, phaseCost: 103066 },
        otherResults: { otherCosts: 82145 },
        generalResults: { totalCost: 1367921, areaContaminated: 5314.060456658262, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.8647271556668352,
        onSiteDays: 12.591946175282015,
        phaseCost: 285087,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.498982595858347,
        onSiteDays: 31.6364966432489,
        phaseCost: 634265,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.363709751525182,
        onSiteDays: 44.228442818530915,
        phaseCost: 919352,
      },
      sourceReductionResults: { workDays: 1.722591908917366, onSiteDays: 1.722591908917366, phaseCost: 302745 },
      decontaminationResults: {
        workDays: 12.748360123892398,
        onSiteDays: 15.576296683767879,
        phaseCost: 72638661259,
      },
      incidentCommandResults: { onSiteDays: 69.52733141121615, phaseCost: 212872 },
      otherResults: { otherCosts: 69146 },
      generalResults: { totalCost: 2238012, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.667602270335128,
        onSiteDays: 22.228199225990945,
        phaseCost: 551512,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.043102522941194,
        onSiteDays: 8.096618705051602,
        phaseCost: 195216,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.710704793276323,
        onSiteDays: 30.324817931042546,
        phaseCost: 746728,
      },
      sourceReductionResults: { workDays: 0.762786371235104, onSiteDays: 0.762786371235104, phaseCost: 53050 },
      decontaminationResults: {
        workDays: 3.7414575020646343,
        onSiteDays: 3.851735208381837,
        phaseCost: 8249179290,
      },
      incidentCommandResults: { onSiteDays: 42.93933951065949, phaseCost: 132099 },
      otherResults: { otherCosts: 94857 },
      generalResults: { totalCost: 1188515, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 8.455250993464379,
          onSiteDays: 27.42500714832544,
          phaseCost: 524685,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.888288979456362,
          onSiteDays: 16.213879670957137,
          phaseCost: 323287,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.343539972920741,
          onSiteDays: 43.638886819282575,
          phaseCost: 847972,
        },
        sourceReductionResults: { workDays: 0.8829899138549636, onSiteDays: 0.8829899138549636, phaseCost: 84689 },
        decontaminationResults: {
          workDays: 12.725578115723463,
          onSiteDays: 12.910352616317187,
          phaseCost: 76880,
          otherCosts: 319675,
        },
        incidentCommandResults: { onSiteDays: 65.43222934945473, phaseCost: 198398 },
        otherResults: { otherCosts: 90427 },
        generalResults: { totalCost: 1618041, areaContaminated: 6725.920697610341, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.1497784872579504,
          onSiteDays: 31.43837268263226,
          phaseCost: 531017,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.6887199761791455,
          onSiteDays: 11.698704350009372,
          phaseCost: 202671,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.8384984634370958,
          onSiteDays: 43.13707703264163,
          phaseCost: 733688,
        },
        sourceReductionResults: { workDays: 0.11707632936170624, onSiteDays: 0.11707632936170624, phaseCost: 14813 },
        decontaminationResults: {
          workDays: 8.904751758301806,
          onSiteDays: 11.36035452814781,
          phaseCost: 229479,
          otherCosts: 382900,
        },
        incidentCommandResults: { onSiteDays: 62.614507890151145, phaseCost: 193304 },
        otherResults: { otherCosts: 86220 },
        generalResults: { totalCost: 1640404, areaContaminated: 6725.920697610341, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.754192116151862,
        onSiteDays: 15.563735198314507,
        phaseCost: 685557,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.143018609826843,
        onSiteDays: 13.74177813652243,
        phaseCost: 505624,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.897210725978706,
        onSiteDays: 29.305513334836938,
        phaseCost: 1191181,
      },
      sourceReductionResults: { workDays: 0.5148680186266839, onSiteDays: 0.5148680186266839, phaseCost: 82195 },
      decontaminationResults: {
        workDays: 8.419180863634493,
        onSiteDays: 9.976272766240005,
        phaseCost: 269830468458,
      },
      incidentCommandResults: { onSiteDays: 47.796654119703625, phaseCost: 146969 },
      otherResults: { otherCosts: 93437 },
      generalResults: { totalCost: 2252070, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.018510014812396,
        onSiteDays: 12.447832106356138,
        phaseCost: 267510,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.9929142125670145,
        onSiteDays: 35.1473102741083,
        phaseCost: 808699,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.01142422737941,
        onSiteDays: 47.59514238046444,
        phaseCost: 1076209,
      },
      sourceReductionResults: { workDays: 0.6935025199086676, onSiteDays: 0.6935025199086676, phaseCost: 83453 },
      decontaminationResults: {
        workDays: 4.49823796597734,
        onSiteDays: 4.614749226629443,
        phaseCost: 121813229927,
      },
      incidentCommandResults: { onSiteDays: 60.90339412700255, phaseCost: 188510 },
      otherResults: { otherCosts: 81610 },
      generalResults: { totalCost: 1781522, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.2050145377528407,
          onSiteDays: 8.255300741320998,
          phaseCost: 209975,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.904373376004359,
          onSiteDays: 22.875932221824716,
          phaseCost: 953987,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.1093879137572,
          onSiteDays: 31.131232963145713,
          phaseCost: 1163962,
        },
        sourceReductionResults: { workDays: 0.6241462742598562, onSiteDays: 0.6241462742598562, phaseCost: 70314 },
        decontaminationResults: {
          workDays: 3.848953264031781,
          onSiteDays: 4.395058631057632,
          phaseCost: 211942,
          otherCosts: 119716,
        },
        incidentCommandResults: { onSiteDays: 44.1504378684632, phaseCost: 135094 },
        otherResults: { otherCosts: 66947 },
        generalResults: { totalCost: 1767975, areaContaminated: 10451.232049486422, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.445452929134482,
          onSiteDays: 22.740852187926734,
          phaseCost: 650522,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.4384772139402284,
          onSiteDays: 8.539670375139046,
          phaseCost: 201454,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.883930143074711,
          onSiteDays: 31.28052256306578,
          phaseCost: 851976,
        },
        sourceReductionResults: { workDays: 1.6448456558761855, onSiteDays: 1.6448456558761855, phaseCost: 78832 },
        decontaminationResults: {
          workDays: 8.456582982665063,
          onSiteDays: 9.153343152523354,
          phaseCost: 185866,
          otherCosts: 521593,
        },
        incidentCommandResults: { onSiteDays: 50.078711371465324, phaseCost: 153547 },
        otherResults: { otherCosts: 36845 },
        generalResults: { totalCost: 1828659, areaContaminated: 10451.232049486422, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.8255608784388713,
        onSiteDays: 10.598213610842794,
        phaseCost: 325042,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.6224390204301025,
        onSiteDays: 16.710203940964618,
        phaseCost: 735413,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.447999898868973,
        onSiteDays: 27.308417551807413,
        phaseCost: 1060455,
      },
      sourceReductionResults: { workDays: 1.4033752712029428, onSiteDays: 1.4033752712029428, phaseCost: 229054 },
      decontaminationResults: {
        workDays: 16.387582661674262,
        onSiteDays: 19.21431359094901,
        phaseCost: 253898391711,
      },
      incidentCommandResults: { onSiteDays: 55.92610641395937, phaseCost: 172127 },
      otherResults: { otherCosts: 141276 },
      generalResults: { totalCost: 2248521, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.120757683745661,
        onSiteDays: 43.06829725064558,
        phaseCost: 964116,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.492242853332289,
        onSiteDays: 46.26491519532394,
        phaseCost: 1011816,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.6130005370779505,
        onSiteDays: 89.33321244596951,
        phaseCost: 1975932,
      },
      sourceReductionResults: { workDays: 3.107472954988232, onSiteDays: 3.107472954988232, phaseCost: 332400 },
      decontaminationResults: {
        workDays: 4.057566841379173,
        onSiteDays: 6.653992732207755,
        phaseCost: 326031119860,
      },
      incidentCommandResults: { onSiteDays: 107.09467813316549, phaseCost: 329050 },
      otherResults: { otherCosts: 134758 },
      generalResults: { totalCost: 3218031, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.733795216228499,
          onSiteDays: 17.680025897741153,
          phaseCost: 847761,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.0828509552029573,
          onSiteDays: 4.835659185098557,
          phaseCost: 143042,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.816646171431456,
          onSiteDays: 22.51568508283971,
          phaseCost: 990803,
        },
        sourceReductionResults: { workDays: 1.1329345068629175, onSiteDays: 1.1329345068629175, phaseCost: 151285 },
        decontaminationResults: {
          workDays: 8.960158516410775,
          onSiteDays: 11.86577007311065,
          phaseCost: 185195,
          otherCosts: 805334,
        },
        incidentCommandResults: { onSiteDays: 43.51438966281327, phaseCost: 132708 },
        otherResults: { otherCosts: 62995 },
        generalResults: { totalCost: 2328320, areaContaminated: 9394.781837331779, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.34866121924979,
          onSiteDays: 19.475580018898142,
          phaseCost: 717629,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.945604284953996,
          onSiteDays: 33.166386724635345,
          phaseCost: 1336964,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.294265504203786,
          onSiteDays: 52.64196674353349,
          phaseCost: 2054593,
        },
        sourceReductionResults: { workDays: 1.1185316020871359, onSiteDays: 1.1185316020871359, phaseCost: 73055 },
        decontaminationResults: {
          workDays: 12.674023715703287,
          onSiteDays: 14.846027728134306,
          phaseCost: 55960,
          otherCosts: 471349,
        },
        incidentCommandResults: { onSiteDays: 76.60652607375494, phaseCost: 237440 },
        otherResults: { otherCosts: 61581 },
        generalResults: { totalCost: 2953978, areaContaminated: 9394.781837331779, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 12.88412835260128,
        onSiteDays: 23.951680392143416,
        phaseCost: 841392,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.5213115226456106,
        onSiteDays: 8.935088245721314,
        phaseCost: 563625,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.405439875246891,
        onSiteDays: 32.88676863786473,
        phaseCost: 1405017,
      },
      sourceReductionResults: { workDays: 0.13479813742609248, onSiteDays: 0.13479813742609248, phaseCost: 23218 },
      decontaminationResults: {
        workDays: 11.639374967813346,
        onSiteDays: 13.244355155910448,
        phaseCost: 130174921275,
      },
      incidentCommandResults: { onSiteDays: 54.26592193120128, phaseCost: 164970 },
      otherResults: { otherCosts: 90433 },
      generalResults: { totalCost: 2735087, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.505937937585044,
        onSiteDays: 29.495597453873334,
        phaseCost: 639900,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 11.984479341367484,
        onSiteDays: 126.0646589356402,
        phaseCost: 3569599,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.490417278952528,
        onSiteDays: 155.56025638951354,
        phaseCost: 4209499,
      },
      sourceReductionResults: { workDays: 4.58596382735345, onSiteDays: 4.58596382735345, phaseCost: 174110 },
      decontaminationResults: {
        workDays: 18.58364714951805,
        onSiteDays: 19.937238177037155,
        phaseCost: 233441527362,
      },
      incidentCommandResults: { onSiteDays: 188.08345839390415, phaseCost: 578495 },
      otherResults: { otherCosts: 128115 },
      generalResults: { totalCost: 5851022, areaContaminated: 10000, decontaminationRounds: 4 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.408050305344389,
          onSiteDays: 14.217219632033819,
          phaseCost: 380169,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.159429687073806,
          onSiteDays: 13.885563031278014,
          phaseCost: 506143,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.567479992418195,
          onSiteDays: 28.102782663311835,
          phaseCost: 886312,
        },
        sourceReductionResults: { workDays: 2.6329180943332244, onSiteDays: 2.6329180943332244, phaseCost: 169630 },
        decontaminationResults: {
          workDays: 11.807721594536613,
          onSiteDays: 13.263270213795657,
          phaseCost: 189089,
          otherCosts: 435579,
        },
        incidentCommandResults: { onSiteDays: 51.99897097144071, phaseCost: 158159 },
        otherResults: { otherCosts: 85072 },
        generalResults: { totalCost: 1923841, areaContaminated: 5379.6641343225865, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.6109167869567416,
          onSiteDays: 13.909420769430293,
          phaseCost: 506925,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.560670962578694,
          onSiteDays: 12.028156386100116,
          phaseCost: 381562,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.1715877495354357,
          onSiteDays: 25.93757715553041,
          phaseCost: 888487,
        },
        sourceReductionResults: { workDays: 0.6954339031985508, onSiteDays: 0.6954339031985508, phaseCost: 45498 },
        decontaminationResults: {
          workDays: 8.688294132400372,
          onSiteDays: 10.731975912286895,
          phaseCost: 153876,
          otherCosts: 355530,
        },
        incidentCommandResults: { onSiteDays: 45.36498697101585, phaseCost: 138868 },
        otherResults: { otherCosts: 88077 },
        generalResults: { totalCost: 1670336, areaContaminated: 5379.6641343225865, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 11.10370316386011,
        onSiteDays: 35.87459754005462,
        phaseCost: 639929,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.2970972238353946,
        onSiteDays: 9.074305856628927,
        phaseCost: 201058,
      },
      totalCharacterizationSamplingResults: {
        workDays: 12.400800387695504,
        onSiteDays: 44.94890339668355,
        phaseCost: 840987,
      },
      sourceReductionResults: { workDays: 0.12679386973750312, onSiteDays: 0.12679386973750312, phaseCost: 23723 },
      decontaminationResults: {
        workDays: 11.979589489051046,
        onSiteDays: 12.697962112654459,
        phaseCost: 272865753473,
      },
      incidentCommandResults: { onSiteDays: 65.77365937907551, phaseCost: 200130 },
      otherResults: { otherCosts: 91252 },
      generalResults: { totalCost: 2182430, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.0184390063576494,
        onSiteDays: 11.014479758552062,
        phaseCost: 620915,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 16.906708818038027,
        onSiteDays: 51.5104448602151,
        phaseCost: 2919268,
      },
      totalCharacterizationSamplingResults: {
        workDays: 18.925147824395676,
        onSiteDays: 62.524924618767166,
        phaseCost: 3540183,
      },
      sourceReductionResults: { workDays: 0.8814163880641408, onSiteDays: 0.8814163880641408, phaseCost: 29733 },
      decontaminationResults: {
        workDays: 15.935411693047595,
        onSiteDays: 17.56967781916486,
        phaseCost: 158916952805,
      },
      incidentCommandResults: { onSiteDays: 88.97601882599616, phaseCost: 269015 },
      otherResults: { otherCosts: 93091 },
      generalResults: { totalCost: 5043743, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.606821392612635,
          onSiteDays: 40.318370280845706,
          phaseCost: 1565903,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.8237344082183746,
          onSiteDays: 34.32252543980479,
          phaseCost: 1539757,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.430555800831009,
          onSiteDays: 74.64089572065049,
          phaseCost: 3105660,
        },
        sourceReductionResults: { workDays: 0.8057466355865688, onSiteDays: 0.8057466355865688, phaseCost: 60053 },
        decontaminationResults: {
          workDays: 3.4023637064738113,
          onSiteDays: 5.247147233050118,
          phaseCost: 262249,
          otherCosts: 98848,
        },
        incidentCommandResults: { onSiteDays: 88.69378958928718, phaseCost: 269502 },
        otherResults: { otherCosts: 63630 },
        generalResults: { totalCost: 3859942, areaContaminated: 13267.487762092494, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.816579831613255,
          onSiteDays: 32.52846670988853,
          phaseCost: 1296135,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.353188173687407,
          onSiteDays: 36.487129862191935,
          phaseCost: 1575254,
        },
        totalCharacterizationSamplingResults: {
          workDays: 14.16976800530066,
          onSiteDays: 69.01559657208045,
          phaseCost: 2871389,
        },
        sourceReductionResults: { workDays: 1.2540942174939183, onSiteDays: 1.2540942174939183, phaseCost: 69564 },
        decontaminationResults: {
          workDays: 12.46296481542824,
          onSiteDays: 13.686484921883439,
          phaseCost: 206824,
          otherCosts: 349646,
        },
        incidentCommandResults: { onSiteDays: 91.9561757114578, phaseCost: 276714 },
        otherResults: { otherCosts: 56739 },
        generalResults: { totalCost: 3830876, areaContaminated: 13267.487762092494, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.000532117802492,
        onSiteDays: 14.535163410318514,
        phaseCost: 977604,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.195748462890735,
        onSiteDays: 11.339550064833585,
        phaseCost: 595183,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.196280580693227,
        onSiteDays: 25.8747134751521,
        phaseCost: 1572787,
      },
      sourceReductionResults: { workDays: 0.26593328299482516, onSiteDays: 0.26593328299482516, phaseCost: 17453 },
      decontaminationResults: {
        workDays: 8.982123191231423,
        onSiteDays: 11.692555348782928,
        phaseCost: 293613392711,
      },
      incidentCommandResults: { onSiteDays: 45.83320210692985, phaseCost: 140323 },
      otherResults: { otherCosts: 76627 },
      generalResults: { totalCost: 2493514, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.800967265869088,
        onSiteDays: 22.07254445249519,
        phaseCost: 654614,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.381755433652189,
        onSiteDays: 16.851789134391712,
        phaseCost: 633874,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.182722699521277,
        onSiteDays: 38.9243335868869,
        phaseCost: 1288488,
      },
      sourceReductionResults: { workDays: 0.37121710498998234, onSiteDays: 0.37121710498998234, phaseCost: 88027 },
      decontaminationResults: {
        workDays: 8.69944970791681,
        onSiteDays: 10.002911639633334,
        phaseCost: 238507426878,
      },
      incidentCommandResults: { onSiteDays: 57.298462331510216, phaseCost: 176286 },
      otherResults: { otherCosts: 153215 },
      generalResults: { totalCost: 2371401, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.8242435637383981,
          onSiteDays: 7.603547302806411,
          phaseCost: 333298,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.2038060251473075,
          onSiteDays: 13.397633983955679,
          phaseCost: 533527,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.028049588885706,
          onSiteDays: 21.00118128676209,
          phaseCost: 866825,
        },
        sourceReductionResults: { workDays: 2.1441438941678475, onSiteDays: 2.1441438941678475, phaseCost: 64701 },
        decontaminationResults: {
          workDays: 7.131387552509873,
          onSiteDays: 8.098056953656034,
          phaseCost: 135109,
          otherCosts: 451841,
        },
        incidentCommandResults: { onSiteDays: 39.24338213458597, phaseCost: 120076 },
        otherResults: { otherCosts: 67627 },
        generalResults: { totalCost: 1706179, areaContaminated: 6854.96504461741, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.5777259022190796,
          onSiteDays: 7.57245601257476,
          phaseCost: 183048,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.19351409180992,
          onSiteDays: 25.02898338125387,
          phaseCost: 629588,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.7712399940289996,
          onSiteDays: 32.60143939382863,
          phaseCost: 812636,
        },
        sourceReductionResults: { workDays: 0.681539376496442, onSiteDays: 0.681539376496442, phaseCost: 73958 },
        decontaminationResults: {
          workDays: 4.481678419625777,
          onSiteDays: 5.0253788475006305,
          phaseCost: 222443,
          otherCosts: 272714,
        },
        incidentCommandResults: { onSiteDays: 46.308357617825706, phaseCost: 139356 },
        otherResults: { otherCosts: 121249 },
        generalResults: { totalCost: 1642356, areaContaminated: 6854.96504461741, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.396659452478678,
        onSiteDays: 11.004188478263277,
        phaseCost: 824681,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.501382410048852,
        onSiteDays: 14.855376970226875,
        phaseCost: 894150,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.89804186252753,
        onSiteDays: 25.85956544849015,
        phaseCost: 1718831,
      },
      sourceReductionResults: { workDays: 0.1842971061995669, onSiteDays: 0.1842971061995669, phaseCost: 38199 },
      decontaminationResults: {
        workDays: 6.96344020985147,
        onSiteDays: 9.673147007281226,
        phaseCost: 102021244763,
      },
      incidentCommandResults: { onSiteDays: 43.71700956197094, phaseCost: 135526 },
      otherResults: { otherCosts: 54726 },
      generalResults: { totalCost: 2294066, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.9203732267211324,
        onSiteDays: 12.338446307182446,
        phaseCost: 608784,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.2071216932257363,
        onSiteDays: 8.599932461834996,
        phaseCost: 460950,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.1274949199468685,
        onSiteDays: 20.93837876901744,
        phaseCost: 1069734,
      },
      sourceReductionResults: { workDays: 0.9034943670049156, onSiteDays: 0.9034943670049156, phaseCost: 214864 },
      decontaminationResults: {
        workDays: 6.756772296213725,
        onSiteDays: 7.860483015389295,
        phaseCost: 29342471339,
      },
      incidentCommandResults: { onSiteDays: 37.70235615141165, phaseCost: 114128 },
      otherResults: { otherCosts: 54421 },
      generalResults: { totalCost: 1953828, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.7696084351631747,
          onSiteDays: 18.063969514475133,
          phaseCost: 500252,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.6919798075858243,
          onSiteDays: 16.492754583644924,
          phaseCost: 464286,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.461588242748999,
          onSiteDays: 34.55672409812006,
          phaseCost: 964538,
        },
        sourceReductionResults: { workDays: 0.19947473128673393, onSiteDays: 0.19947473128673393, phaseCost: 39904 },
        decontaminationResults: {
          workDays: 9.434719855765515,
          onSiteDays: 11.648289047099718,
          phaseCost: 19815,
          otherCosts: 808236,
        },
        incidentCommandResults: { onSiteDays: 54.40448787650651, phaseCost: 167226 },
        otherResults: { otherCosts: 53890 },
        generalResults: { totalCost: 2053609, areaContaminated: 5850.483188603652, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.977062662370049,
          onSiteDays: 16.48163373765548,
          phaseCost: 395957,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.822552681421456,
          onSiteDays: 30.341530155298756,
          phaseCost: 757319,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.799615343791505,
          onSiteDays: 46.823163892954234,
          phaseCost: 1153276,
        },
        sourceReductionResults: { workDays: 0.5858141437830586, onSiteDays: 0.5858141437830586, phaseCost: 70996 },
        decontaminationResults: {
          workDays: 10.230473946135135,
          onSiteDays: 12.118053071693994,
          phaseCost: 38894,
          otherCosts: 398688,
        },
        incidentCommandResults: { onSiteDays: 67.52703110843129, phaseCost: 207422 },
        otherResults: { otherCosts: 80691 },
        generalResults: { totalCost: 1949967, areaContaminated: 5850.483188603652, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.877792880646651,
        onSiteDays: 19.42111243843265,
        phaseCost: 1061004,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.555616122230932,
        onSiteDays: 16.315194536825572,
        phaseCost: 790886,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.433409002877582,
        onSiteDays: 35.73630697525822,
        phaseCost: 1851890,
      },
      sourceReductionResults: { workDays: 0.8320441285917068, onSiteDays: 0.8320441285917068, phaseCost: 116813 },
      decontaminationResults: {
        workDays: 10.336878941239993,
        onSiteDays: 12.364315107782444,
        phaseCost: 115332349818,
      },
      incidentCommandResults: { onSiteDays: 56.93266621163237, phaseCost: 171964 },
      otherResults: { otherCosts: 109689 },
      generalResults: { totalCost: 2715506, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.80144928175574,
        onSiteDays: 24.721158641174974,
        phaseCost: 840649,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.876171415323343,
        onSiteDays: 19.31593535855386,
        phaseCost: 856908,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.6776206970790835,
        onSiteDays: 44.03709399972883,
        phaseCost: 1697557,
      },
      sourceReductionResults: { workDays: 0.09674822985294931, onSiteDays: 0.09674822985294931, phaseCost: 13544 },
      decontaminationResults: {
        workDays: 13.432431090258163,
        onSiteDays: 13.47505093609799,
        phaseCost: 2982801079577,
      },
      incidentCommandResults: { onSiteDays: 65.60889316567977, phaseCost: 201153 },
      otherResults: { otherCosts: 63801 },
      generalResults: { totalCost: 3353912, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.4119169655247745,
          onSiteDays: 19.247953853441132,
          phaseCost: 580868,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.4615913579898976,
          onSiteDays: 16.735955395643103,
          phaseCost: 520196,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.873508323514672,
          onSiteDays: 35.983909249084235,
          phaseCost: 1101064,
        },
        sourceReductionResults: { workDays: 0.020902903299836278, onSiteDays: 0.020902903299836278, phaseCost: 4597 },
        decontaminationResults: {
          workDays: 8.431279491733592,
          onSiteDays: 10.264165354488457,
          phaseCost: 266925,
          otherCosts: 337913,
        },
        incidentCommandResults: { onSiteDays: 54.268977506872524, phaseCost: 163829 },
        otherResults: { otherCosts: 66901 },
        generalResults: { totalCost: 1941229, areaContaminated: 14666.34945936183, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.961721095516656,
          onSiteDays: 28.83624734023877,
          phaseCost: 717166,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.851338757102275,
          onSiteDays: 26.484052820028637,
          phaseCost: 635176,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.813059852618931,
          onSiteDays: 55.32030016026741,
          phaseCost: 1352342,
        },
        sourceReductionResults: { workDays: 2.2651326157159968, onSiteDays: 2.2651326157159968, phaseCost: 273270 },
        decontaminationResults: {
          workDays: 9.518861574474457,
          onSiteDays: 11.8060218682061,
          phaseCost: 66559,
          otherCosts: 361338,
        },
        incidentCommandResults: { onSiteDays: 77.39145464418951, phaseCost: 232962 },
        otherResults: { otherCosts: 112357 },
        generalResults: { totalCost: 2398828, areaContaminated: 14666.34945936183, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.310653708018977,
        onSiteDays: 27.545469001653892,
        phaseCost: 846748,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.54646524364423,
        onSiteDays: 32.45711526894028,
        phaseCost: 934445,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.857118951663207,
        onSiteDays: 60.00258427059417,
        phaseCost: 1781193,
      },
      sourceReductionResults: { workDays: 0.02913097793657445, onSiteDays: 0.02913097793657445, phaseCost: 11940 },
      decontaminationResults: {
        workDays: 8.597897767228517,
        onSiteDays: 8.639003689083971,
        phaseCost: 199111256113,
      },
      incidentCommandResults: { onSiteDays: 76.67071893761471, phaseCost: 236573 },
      otherResults: { otherCosts: 115544 },
      generalResults: { totalCost: 2600474, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.6862189611824054,
        onSiteDays: 8.617904368967269,
        phaseCost: 574513,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.1471665381023746,
        onSiteDays: 6.988004612130034,
        phaseCost: 236410,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.8333854992847805,
        onSiteDays: 15.605908981097302,
        phaseCost: 810923,
      },
      sourceReductionResults: { workDays: 0.1369737092463575, onSiteDays: 0.1369737092463575, phaseCost: 33940 },
      decontaminationResults: {
        workDays: 4.92254064789101,
        onSiteDays: 7.187689161437491,
        phaseCost: 89963197603,
      },
      incidentCommandResults: { onSiteDays: 30.93057185178115, phaseCost: 93571 },
      otherResults: { otherCosts: 85185 },
      generalResults: { totalCost: 1311185, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.7848910306900323,
          onSiteDays: 15.086426394170687,
          phaseCost: 494729,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.158200788808568,
          onSiteDays: 38.725987279702935,
          phaseCost: 1428296,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.9430918194986,
          onSiteDays: 53.81241367387362,
          phaseCost: 1923025,
        },
        sourceReductionResults: { workDays: 1.503438018440332, onSiteDays: 1.503438018440332, phaseCost: 240699 },
        decontaminationResults: {
          workDays: 3.6825850812444894,
          onSiteDays: 4.811576730993478,
          phaseCost: 165441,
          otherCosts: 193697,
        },
        incidentCommandResults: { onSiteDays: 68.12742842330744, phaseCost: 208052 },
        otherResults: { otherCosts: 108220 },
        generalResults: { totalCost: 2839134, areaContaminated: 13425.632540235676, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.6941020308859205,
          onSiteDays: 40.07582999887217,
          phaseCost: 1218413,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.222919887740562,
          onSiteDays: 48.88553984859687,
          phaseCost: 1514382,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.917021918626482,
          onSiteDays: 88.96136984746904,
          phaseCost: 2732795,
        },
        sourceReductionResults: { workDays: 1.5909824741885146, onSiteDays: 1.5909824741885146, phaseCost: 142102 },
        decontaminationResults: {
          workDays: 8.695418325880407,
          onSiteDays: 11.16380341704092,
          phaseCost: 469506,
          otherCosts: 396999,
        },
        incidentCommandResults: { onSiteDays: 109.71615573869849, phaseCost: 333479 },
        otherResults: { otherCosts: 116484 },
        generalResults: { totalCost: 4191365, areaContaminated: 13425.632540235676, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 9.401379330612622,
        onSiteDays: 38.407213008404874,
        phaseCost: 1088831,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.1324495812098285,
        onSiteDays: 23.604041100802814,
        phaseCost: 757695,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.53382891182245,
        onSiteDays: 62.011254109207684,
        phaseCost: 1846526,
      },
      sourceReductionResults: { workDays: 1.2381689138529544, onSiteDays: 1.2381689138529544, phaseCost: 136220 },
      decontaminationResults: {
        workDays: 11.047140870719948,
        onSiteDays: 12.547770743153006,
        phaseCost: 31752329016,
      },
      incidentCommandResults: { onSiteDays: 83.79719376621364, phaseCost: 256625 },
      otherResults: { otherCosts: 81316 },
      generalResults: { totalCost: 2681455, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.125428368626255,
        onSiteDays: 12.329571179207143,
        phaseCost: 910630,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.898459857742252,
        onSiteDays: 17.974692203415877,
        phaseCost: 1246448,
      },
      totalCharacterizationSamplingResults: {
        workDays: 9.023888226368507,
        onSiteDays: 30.30426338262302,
        phaseCost: 2157078,
      },
      sourceReductionResults: { workDays: 0.5421938840532736, onSiteDays: 0.5421938840532736, phaseCost: 69769 },
      decontaminationResults: {
        workDays: 12.219477442377125,
        onSiteDays: 13.879547170800983,
        phaseCost: 127922424848,
      },
      incidentCommandResults: { onSiteDays: 52.72600443747727, phaseCost: 162909 },
      otherResults: { otherCosts: 81237 },
      generalResults: { totalCost: 3023763, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.987261869876017,
          onSiteDays: 19.790868258183124,
          phaseCost: 850461,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.5701805444038354,
          onSiteDays: 4.299270972208032,
          phaseCost: 180549,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.557442414279852,
          onSiteDays: 24.090139230391156,
          phaseCost: 1031010,
        },
        sourceReductionResults: { workDays: 2.658083134255782, onSiteDays: 2.658083134255782, phaseCost: 262608 },
        decontaminationResults: {
          workDays: 4.44939738312955,
          onSiteDays: 6.366626982662508,
          phaseCost: 80255,
          otherCosts: 117618,
        },
        incidentCommandResults: { onSiteDays: 41.114849347309445, phaseCost: 125153 },
        otherResults: { otherCosts: 101366 },
        generalResults: { totalCost: 1718010, areaContaminated: 11080.400854367856, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.071926680234192,
          onSiteDays: 13.569305335886613,
          phaseCost: 280619,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.9496073050605047,
          onSiteDays: 8.059966385089181,
          phaseCost: 188151,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.0215339852946967,
          onSiteDays: 21.629271720975794,
          phaseCost: 468770,
        },
        sourceReductionResults: { workDays: 2.074291395793516, onSiteDays: 2.074291395793516, phaseCost: 188480 },
        decontaminationResults: {
          workDays: 9.372093487850412,
          onSiteDays: 10.955819770683492,
          phaseCost: 288284,
          otherCosts: 262298,
        },
        incidentCommandResults: { onSiteDays: 42.6593828874528, phaseCost: 128282 },
        otherResults: { otherCosts: 43093 },
        generalResults: { totalCost: 1379207, areaContaminated: 11080.400854367856, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.9829103266786987,
        onSiteDays: 11.008718479356208,
        phaseCost: 328699,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.2934271499548131,
        onSiteDays: 6.039034718313248,
        phaseCost: 226159,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.276337476633512,
        onSiteDays: 17.047753197669458,
        phaseCost: 554858,
      },
      sourceReductionResults: { workDays: 1.8665569828138089, onSiteDays: 1.8665569828138089, phaseCost: 83593 },
      decontaminationResults: {
        workDays: 9.555152090628434,
        onSiteDays: 12.282064311737676,
        phaseCost: 285616433664,
      },
      incidentCommandResults: { onSiteDays: 39.19637449222094, phaseCost: 118491 },
      otherResults: { otherCosts: 65175 },
      generalResults: { totalCost: 1541397, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 10.834538226631368,
        onSiteDays: 26.88677101720424,
        phaseCost: 680770,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.633996851057772,
        onSiteDays: 34.37386698517997,
        phaseCost: 1388605,
      },
      totalCharacterizationSamplingResults: {
        workDays: 16.46853507768914,
        onSiteDays: 61.26063800238421,
        phaseCost: 2069375,
      },
      sourceReductionResults: { workDays: 1.8443525022268457, onSiteDays: 1.8443525022268457, phaseCost: 243435 },
      decontaminationResults: {
        workDays: 11.321031526737155,
        onSiteDays: 13.871264340558849,
        phaseCost: 191249454830,
      },
      incidentCommandResults: { onSiteDays: 84.9762548451699, phaseCost: 256674 },
      otherResults: { otherCosts: 103905 },
      generalResults: { totalCost: 3319468, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.9944240715769608,
          onSiteDays: 13.263112669032129,
          phaseCost: 361210,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.119222872007131,
          onSiteDays: 17.6628341754824,
          phaseCost: 487666,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.113646943584092,
          onSiteDays: 30.925946844514527,
          phaseCost: 848876,
        },
        sourceReductionResults: { workDays: 0.6067890886740099, onSiteDays: 0.6067890886740099, phaseCost: 54996 },
        decontaminationResults: {
          workDays: 3.410806208013279,
          onSiteDays: 4.685665108190306,
          phaseCost: 271151,
          otherCosts: 275406,
        },
        incidentCommandResults: { onSiteDays: 44.21840104137884, phaseCost: 133185 },
        otherResults: { otherCosts: 63684 },
        generalResults: { totalCost: 1647298, areaContaminated: 10017.791852591976, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.367238146269667,
          onSiteDays: 17.65100015298607,
          phaseCost: 382517,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.7315398937800128,
          onSiteDays: 25.69221358699548,
          phaseCost: 573132,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.09877804004968,
          onSiteDays: 43.34321373998155,
          phaseCost: 955649,
        },
        sourceReductionResults: { workDays: 0.8053484864310312, onSiteDays: 0.8053484864310312, phaseCost: 144745 },
        decontaminationResults: {
          workDays: 8.38049443028413,
          onSiteDays: 9.820150245870499,
          phaseCost: 384701,
          otherCosts: 244584,
        },
        incidentCommandResults: { onSiteDays: 61.96871247228308, phaseCost: 186475 },
        otherResults: { otherCosts: 58884 },
        generalResults: { totalCost: 1975038, areaContaminated: 10017.791852591976, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 8.89417682360156,
        onSiteDays: 29.314275040632218,
        phaseCost: 719413,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 10.5329445511423,
        onSiteDays: 28.460639981681236,
        phaseCost: 663808,
      },
      totalCharacterizationSamplingResults: {
        workDays: 19.427121374743862,
        onSiteDays: 57.77491502231345,
        phaseCost: 1383221,
      },
      sourceReductionResults: { workDays: 0.26966862032966743, onSiteDays: 0.26966862032966743, phaseCost: 32088 },
      decontaminationResults: {
        workDays: 10.697231302433003,
        onSiteDays: 13.318109979927101,
        phaseCost: 138706303573,
      },
      incidentCommandResults: { onSiteDays: 79.36269362257022, phaseCost: 241499 },
      otherResults: { otherCosts: 102160 },
      generalResults: { totalCost: 2201247, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.522284427147962,
        onSiteDays: 21.371250955468874,
        phaseCost: 790766,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.596213378718332,
        onSiteDays: 16.79943849424071,
        phaseCost: 554728,
      },
      totalCharacterizationSamplingResults: {
        workDays: 12.118497805866294,
        onSiteDays: 38.170689449709585,
        phaseCost: 1345494,
      },
      sourceReductionResults: { workDays: 0.4885059312567864, onSiteDays: 0.4885059312567864, phaseCost: 59703 },
      decontaminationResults: {
        workDays: 3.0400016806181522,
        onSiteDays: 4.380396137801091,
        phaseCost: 420862160156,
      },
      incidentCommandResults: { onSiteDays: 51.039591518767466, phaseCost: 154824 },
      otherResults: { otherCosts: 69463 },
      generalResults: { totalCost: 2210502, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 12.756111732506865,
          onSiteDays: 27.703085541057042,
          phaseCost: 1406194,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.942474844492093,
          onSiteDays: 3.97552179308046,
          phaseCost: 224409,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.698586576998958,
          onSiteDays: 31.678607334137503,
          phaseCost: 1630603,
        },
        sourceReductionResults: { workDays: 4.8260668656596195, onSiteDays: 4.8260668656596195, phaseCost: 531455 },
        decontaminationResults: {
          workDays: 3.089653229827446,
          onSiteDays: 5.316631093462145,
          phaseCost: 55542,
          otherCosts: 229972,
        },
        incidentCommandResults: { onSiteDays: 49.821305293259265, phaseCost: 152762 },
        otherResults: { otherCosts: 87396 },
        generalResults: { totalCost: 2687730, areaContaminated: 13114.8703322082, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.1417865032417565,
          onSiteDays: 17.876972409894815,
          phaseCost: 546890,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.76285696698973,
          onSiteDays: 16.104286349282376,
          phaseCost: 324269,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.904643470231488,
          onSiteDays: 33.981258759177194,
          phaseCost: 871159,
        },
        sourceReductionResults: { workDays: 1.552104889409441, onSiteDays: 1.552104889409441, phaseCost: 36536 },
        decontaminationResults: {
          workDays: 7.206128752605554,
          onSiteDays: 8.567967132098966,
          phaseCost: 319664,
          otherCosts: 318501,
        },
        incidentCommandResults: { onSiteDays: 52.1013307806856, phaseCost: 158059 },
        otherResults: { otherCosts: 45050 },
        generalResults: { totalCost: 1748969, areaContaminated: 13114.8703322082, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.136247088876865,
        onSiteDays: 5.838576662307174,
        phaseCost: 234362,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.1660541129389395,
        onSiteDays: 5.2929748273765185,
        phaseCost: 137210,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.3023012018158044,
        onSiteDays: 11.131551489683693,
        phaseCost: 371572,
      },
      sourceReductionResults: { workDays: 0.11140605079998703, onSiteDays: 0.11140605079998703, phaseCost: 19169 },
      decontaminationResults: {
        workDays: 18.706712039817756,
        onSiteDays: 21.214526987917377,
        phaseCost: 119110710970,
      },
      incidentCommandResults: { onSiteDays: 40.457484528401054, phaseCost: 124544 },
      otherResults: { otherCosts: 152463 },
      generalResults: { totalCost: 1497828, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.1001519506611235,
        onSiteDays: 41.804283612972824,
        phaseCost: 689770,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.331090668858253,
        onSiteDays: 36.28292032611251,
        phaseCost: 620741,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.431242619519376,
        onSiteDays: 78.08720393908533,
        phaseCost: 1310511,
      },
      sourceReductionResults: { workDays: 0.8852307575086292, onSiteDays: 0.8852307575086292, phaseCost: 105987 },
      decontaminationResults: {
        workDays: 3.887003718616209,
        onSiteDays: 4.540452675321245,
        phaseCost: 370690254807,
      },
      incidentCommandResults: { onSiteDays: 91.5128873719152, phaseCost: 282004 },
      otherResults: { otherCosts: 102428 },
      generalResults: { totalCost: 2426427, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.252460320259399,
          onSiteDays: 25.524659531559852,
          phaseCost: 775261,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.39052640580631315,
          onSiteDays: 4.3039718897237975,
          phaseCost: 120235,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.642986726065712,
          onSiteDays: 29.82863142128365,
          phaseCost: 895496,
        },
        sourceReductionResults: { workDays: 0.29389999864173944, onSiteDays: 0.29389999864173944, phaseCost: 12844 },
        decontaminationResults: {
          workDays: 8.436435611088863,
          onSiteDays: 9.432959625365436,
          phaseCost: 260827,
          otherCosts: 384197,
        },
        incidentCommandResults: { onSiteDays: 47.55549104529082, phaseCost: 146019 },
        otherResults: { otherCosts: 71716 },
        generalResults: { totalCost: 1771099, areaContaminated: 9901.120698754938, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.6680739674124028,
          onSiteDays: 15.954825665244705,
          phaseCost: 1460262,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 11.170879838949137,
          onSiteDays: 23.930321653142194,
          phaseCost: 1438283,
        },
        totalCharacterizationSamplingResults: {
          workDays: 14.83895380636154,
          onSiteDays: 39.8851473183869,
          phaseCost: 2898545,
        },
        sourceReductionResults: { workDays: 0.09976999923049701, onSiteDays: 0.09976999923049701, phaseCost: 7585 },
        decontaminationResults: {
          workDays: 4.0403814020195,
          onSiteDays: 6.982896126569923,
          phaseCost: 394683,
          otherCosts: 103940,
        },
        incidentCommandResults: { onSiteDays: 54.967813444187314, phaseCost: 170248 },
        otherResults: { otherCosts: 81869 },
        generalResults: { totalCost: 3656870, areaContaminated: 9901.120698754938, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.489325292513501,
        onSiteDays: 26.82010668895333,
        phaseCost: 728767,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.9890538749306321,
        onSiteDays: 15.076671648613466,
        phaseCost: 542845,
      },
      totalCharacterizationSamplingResults: {
        workDays: 9.478379167444134,
        onSiteDays: 41.8967783375668,
        phaseCost: 1271612,
      },
      sourceReductionResults: { workDays: 5.015612382844095, onSiteDays: 5.015612382844095, phaseCost: 88527 },
      decontaminationResults: {
        workDays: 11.52614793333368,
        onSiteDays: 14.398370939399667,
        phaseCost: 179402399478,
      },
      incidentCommandResults: { onSiteDays: 69.31076165981057, phaseCost: 214204 },
      otherResults: { otherCosts: 66423 },
      generalResults: { totalCost: 2219646, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.8533497679663573,
        onSiteDays: 15.371968216754627,
        phaseCost: 529938,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 13.2685001714732,
        onSiteDays: 38.302071356643715,
        phaseCost: 1053992,
      },
      totalCharacterizationSamplingResults: {
        workDays: 15.121849939439556,
        onSiteDays: 53.674039573398346,
        phaseCost: 1583930,
      },
      sourceReductionResults: { workDays: 2.2754586294329338, onSiteDays: 2.2754586294329338, phaseCost: 385880 },
      decontaminationResults: {
        workDays: 9.170305605318934,
        onSiteDays: 10.911051951560902,
        phaseCost: 322036556038,
      },
      incidentCommandResults: { onSiteDays: 74.86055015439219, phaseCost: 230970 },
      otherResults: { otherCosts: 111573 },
      generalResults: { totalCost: 3190427, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.513887882982719,
          onSiteDays: 7.67678258373539,
          phaseCost: 481365,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.9879359788186152,
          onSiteDays: 5.7861173539693755,
          phaseCost: 183658,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.501823861801334,
          onSiteDays: 13.462899937704766,
          phaseCost: 665023,
        },
        sourceReductionResults: { workDays: 6.817680570746483, onSiteDays: 6.817680570746483, phaseCost: 324569 },
        decontaminationResults: {
          workDays: 7.126913342887283,
          onSiteDays: 7.604981165287314,
          phaseCost: 134061,
          otherCosts: 287004,
        },
        incidentCommandResults: { onSiteDays: 35.885561673738565, phaseCost: 109729 },
        otherResults: { otherCosts: 131164 },
        generalResults: { totalCost: 1651550, areaContaminated: 8325.11461184479, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.5433889831805625,
          onSiteDays: 9.02734364390082,
          phaseCost: 204393,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.728629627535643,
          onSiteDays: 40.94703556856977,
          phaseCost: 2064268,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.272018610716206,
          onSiteDays: 49.97437921247059,
          phaseCost: 2268661,
        },
        sourceReductionResults: { workDays: 1.4664213953212666, onSiteDays: 1.4664213953212666, phaseCost: 158054 },
        decontaminationResults: {
          workDays: 14.125158842449345,
          onSiteDays: 16.078096080822426,
          phaseCost: 148381,
          otherCosts: 482888,
        },
        incidentCommandResults: { onSiteDays: 75.51889668861429, phaseCost: 230433 },
        otherResults: { otherCosts: 104920 },
        generalResults: { totalCost: 3393337, areaContaminated: 8325.11461184479, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.7900238446144554,
        onSiteDays: 6.547841854883689,
        phaseCost: 270429,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.6973964465465565,
        onSiteDays: 15.95499112495947,
        phaseCost: 529147,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.487420291161012,
        onSiteDays: 22.50283297984316,
        phaseCost: 799576,
      },
      sourceReductionResults: { workDays: 1.6451957092885, onSiteDays: 1.6451957092885, phaseCost: 311211 },
      decontaminationResults: {
        workDays: 7.245088259513743,
        onSiteDays: 10.018375465883494,
        phaseCost: 403449235760,
      },
      incidentCommandResults: { onSiteDays: 42.16640415501516, phaseCost: 130729 },
      otherResults: { otherCosts: 100091 },
      generalResults: { totalCost: 1980816, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.69366638452952,
        onSiteDays: 11.334952632742782,
        phaseCost: 741827,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.048697012658537,
        onSiteDays: 7.795744448634899,
        phaseCost: 270078,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.742363397188058,
        onSiteDays: 19.130697081377683,
        phaseCost: 1011905,
      },
      sourceReductionResults: { workDays: 5.590530099294237, onSiteDays: 5.590530099294237, phaseCost: 236369 },
      decontaminationResults: {
        workDays: 4.670336921156928,
        onSiteDays: 7.537595173702016,
        phaseCost: 235185263365,
      },
      incidentCommandResults: { onSiteDays: 40.25882235437393, phaseCost: 124894 },
      otherResults: { otherCosts: 71266 },
      generalResults: { totalCost: 1942984, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.1700620842804552,
          onSiteDays: 5.618632427562143,
          phaseCost: 184566,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.4036023739352568,
          onSiteDays: 10.144940600096364,
          phaseCost: 388429,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.573664458215712,
          onSiteDays: 15.763573027658506,
          phaseCost: 572995,
        },
        sourceReductionResults: { workDays: 4.878596680220207, onSiteDays: 4.878596680220207, phaseCost: 544569 },
        decontaminationResults: {
          workDays: 4.525235425570336,
          onSiteDays: 5.57253715455824,
          phaseCost: 242761,
          otherCosts: 271309,
        },
        incidentCommandResults: { onSiteDays: 34.214706862436955, phaseCost: 103546 },
        otherResults: { otherCosts: 57025 },
        generalResults: { totalCost: 1792205, areaContaminated: 14616.707304869013, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.948397607868786,
          onSiteDays: 40.08780937523544,
          phaseCost: 971828,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.916177795760081,
          onSiteDays: 38.13800079277603,
          phaseCost: 807475,
        },
        totalCharacterizationSamplingResults: {
          workDays: 14.864575403628868,
          onSiteDays: 78.22581016801146,
          phaseCost: 1779303,
        },
        sourceReductionResults: { workDays: 4.591516024869615, onSiteDays: 4.591516024869615, phaseCost: 218471 },
        decontaminationResults: {
          workDays: 8.442627394674957,
          onSiteDays: 9.644529476213393,
          phaseCost: 363253,
          otherCosts: 302440,
        },
        incidentCommandResults: { onSiteDays: 100.46185566909448, phaseCost: 309109 },
        otherResults: { otherCosts: 67550 },
        generalResults: { totalCost: 3040126, areaContaminated: 14616.707304869013, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.7012127722450945,
        onSiteDays: 18.55908903678983,
        phaseCost: 690800,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.6524635306954707,
        onSiteDays: 14.985955305115308,
        phaseCost: 727379,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.353676302940565,
        onSiteDays: 33.54504434190514,
        phaseCost: 1418179,
      },
      sourceReductionResults: { workDays: 3.643488607226591, onSiteDays: 3.643488607226591, phaseCost: 435352 },
      decontaminationResults: {
        workDays: 8.632995046822586,
        onSiteDays: 10.443918540711495,
        phaseCost: 45865402090,
      },
      incidentCommandResults: { onSiteDays: 55.63245148984323, phaseCost: 170978 },
      otherResults: { otherCosts: 99097 },
      generalResults: { totalCost: 2571561, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.418583333113309,
        onSiteDays: 21.818206206145085,
        phaseCost: 572584,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.760445343897255,
        onSiteDays: 23.87396028057747,
        phaseCost: 812737,
      },
      totalCharacterizationSamplingResults: {
        workDays: 12.179028677010564,
        onSiteDays: 45.692166486722556,
        phaseCost: 1385321,
      },
      sourceReductionResults: { workDays: 1.5386741504206878, onSiteDays: 1.5386741504206878, phaseCost: 198511 },
      decontaminationResults: {
        workDays: 4.2871470081822824,
        onSiteDays: 7.228613908921512,
        phaseCost: 287431213211,
      },
      incidentCommandResults: { onSiteDays: 62.459454546064755, phaseCost: 191107 },
      otherResults: { otherCosts: 66999 },
      generalResults: { totalCost: 2342580, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.339893723565414,
          onSiteDays: 16.189918738523808,
          phaseCost: 572740,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.818485362410785,
          onSiteDays: 19.323705595015056,
          phaseCost: 679010,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.158379085976199,
          onSiteDays: 35.513624333538864,
          phaseCost: 1251750,
        },
        sourceReductionResults: { workDays: 0.2772759137926982, onSiteDays: 0.2772759137926982, phaseCost: 22026 },
        decontaminationResults: {
          workDays: 8.055848712114582,
          onSiteDays: 8.711600382279512,
          phaseCost: 320422,
          otherCosts: 532872,
        },
        incidentCommandResults: { onSiteDays: 52.50250062961108, phaseCost: 160795 },
        otherResults: { otherCosts: 83713 },
        generalResults: { totalCost: 2371578, areaContaminated: 8519.249691981648, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.8619238490722014,
          onSiteDays: 24.14956097915906,
          phaseCost: 596959,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.225889603317866,
          onSiteDays: 13.639876944155649,
          phaseCost: 365190,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.087813452390067,
          onSiteDays: 37.78943792331471,
          phaseCost: 962149,
        },
        sourceReductionResults: { workDays: 0.7435774782355327, onSiteDays: 0.7435774782355327, phaseCost: 76940 },
        decontaminationResults: {
          workDays: 7.66873950363806,
          onSiteDays: 9.272207923296888,
          phaseCost: 355453,
          otherCosts: 179043,
        },
        incidentCommandResults: { onSiteDays: 55.80522332484713, phaseCost: 170337 },
        otherResults: { otherCosts: 70284 },
        generalResults: { totalCost: 1814206, areaContaminated: 8519.249691981648, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.9778568940746595,
        onSiteDays: 25.799853013213095,
        phaseCost: 618039,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.5500058451779606,
        onSiteDays: 19.511362799992003,
        phaseCost: 396189,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.52786273925262,
        onSiteDays: 45.311215813205095,
        phaseCost: 1014228,
      },
      sourceReductionResults: { workDays: 0.6476291128156485, onSiteDays: 0.6476291128156485, phaseCost: 124288 },
      decontaminationResults: {
        workDays: 7.3974465102417035,
        onSiteDays: 10.013047711693925,
        phaseCost: 439133482813,
      },
      incidentCommandResults: { onSiteDays: 63.971892637714674, phaseCost: 198313 },
      otherResults: { otherCosts: 96141 },
      generalResults: { totalCost: 2354916, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.9403420729779115,
        onSiteDays: 11.363702025635178,
        phaseCost: 918371,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.7315369803396985,
        onSiteDays: 12.971455091288167,
        phaseCost: 1032235,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.67187905331761,
        onSiteDays: 24.335157116923344,
        phaseCost: 1950606,
      },
      sourceReductionResults: { workDays: 0.006658836876013101, onSiteDays: 0.006658836876013101, phaseCost: 7963 },
      decontaminationResults: {
        workDays: 4.590637643726225,
        onSiteDays: 6.18967116977779,
        phaseCost: 253073276016,
      },
      incidentCommandResults: { onSiteDays: 38.53148712357715, phaseCost: 116906 },
      otherResults: { otherCosts: 110076 },
      generalResults: { totalCost: 2714640, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.268311852764322,
          onSiteDays: 28.060640993481016,
          phaseCost: 541010,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.6532084252777717,
          onSiteDays: 8.636632771244157,
          phaseCost: 175866,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.9215202780420935,
          onSiteDays: 36.697273764725175,
          phaseCost: 716876,
        },
        sourceReductionResults: { workDays: 0.7752574792454868, onSiteDays: 0.7752574792454868, phaseCost: 99466 },
        decontaminationResults: {
          workDays: 4.002713503549507,
          onSiteDays: 6.49349940975511,
          phaseCost: 394215,
          otherCosts: 304606,
        },
        incidentCommandResults: { onSiteDays: 51.966030653725774, phaseCost: 159605 },
        otherResults: { otherCosts: 82942 },
        generalResults: { totalCost: 1757710, areaContaminated: 9515.465913460466, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 9.091094947825313,
          onSiteDays: 26.252313383657885,
          phaseCost: 957539,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.871878148046525,
          onSiteDays: 19.245253143620797,
          phaseCost: 897131,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.962973095871838,
          onSiteDays: 45.49756652727868,
          phaseCost: 1854670,
        },
        sourceReductionResults: { workDays: 2.4462259290927455, onSiteDays: 2.4462259290927455, phaseCost: 159059 },
        decontaminationResults: {
          workDays: 7.800083001097684,
          onSiteDays: 9.834372672679455,
          phaseCost: 136449,
          otherCosts: 309944,
        },
        incidentCommandResults: { onSiteDays: 65.77816512905088, phaseCost: 203735 },
        otherResults: { otherCosts: 61617 },
        generalResults: { totalCost: 2725474, areaContaminated: 9515.465913460466, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.589608366857792,
        onSiteDays: 24.675384848269555,
        phaseCost: 747756,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.6121973949194803,
        onSiteDays: 24.19190132311145,
        phaseCost: 705998,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.201805761777273,
        onSiteDays: 48.867286171381004,
        phaseCost: 1453754,
      },
      sourceReductionResults: { workDays: 0.1678012665779524, onSiteDays: 0.1678012665779524, phaseCost: 41668 },
      decontaminationResults: {
        workDays: 15.013649702773813,
        onSiteDays: 16.55680398260169,
        phaseCost: 164753581618,
      },
      incidentCommandResults: { onSiteDays: 73.59189142056064, phaseCost: 227307 },
      otherResults: { otherCosts: 70562 },
      generalResults: { totalCost: 2539662, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.259996193838116,
        onSiteDays: 22.280647486201374,
        phaseCost: 1002610,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.1073270057019364,
        onSiteDays: 6.398410011105672,
        phaseCost: 274354,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.367323199540053,
        onSiteDays: 28.679057497307046,
        phaseCost: 1276964,
      },
      sourceReductionResults: { workDays: 0.6693753908466512, onSiteDays: 0.6693753908466512, phaseCost: 148456 },
      decontaminationResults: {
        workDays: 3.2650009040406442,
        onSiteDays: 3.476233802613857,
        phaseCost: 106738152982,
      },
      incidentCommandResults: { onSiteDays: 40.82466669076755, phaseCost: 125575 },
      otherResults: { otherCosts: 73520 },
      generalResults: { totalCost: 1884235, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.1332379659690908,
          onSiteDays: 8.17222413465276,
          phaseCost: 308334,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.738961985921929,
          onSiteDays: 28.497582442807257,
          phaseCost: 1003209,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.87219995189102,
          onSiteDays: 36.669806577460015,
          phaseCost: 1311543,
        },
        sourceReductionResults: { workDays: 0.17629107735760416, onSiteDays: 0.17629107735760416, phaseCost: 22531 },
        decontaminationResults: {
          workDays: 4.575698452437226,
          onSiteDays: 4.844778302089493,
          phaseCost: 452196,
          otherCosts: 97187,
        },
        incidentCommandResults: { onSiteDays: 49.690875956907114, phaseCost: 153908 },
        otherResults: { otherCosts: 84686 },
        generalResults: { totalCost: 2122051, areaContaminated: 11653.165001574245, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.229100154362221,
          onSiteDays: 17.173735792086948,
          phaseCost: 786011,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.4554580920303994,
          onSiteDays: 10.815512378627723,
          phaseCost: 295909,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.684558246392621,
          onSiteDays: 27.98924817071467,
          phaseCost: 1081920,
        },
        sourceReductionResults: { workDays: 0.48291658620178124, onSiteDays: 0.48291658620178124, phaseCost: 84314 },
        decontaminationResults: {
          workDays: 12.257782042785031,
          onSiteDays: 12.916663708378715,
          phaseCost: 308917,
          otherCosts: 699579,
        },
        incidentCommandResults: { onSiteDays: 49.38882846529517, phaseCost: 152356 },
        otherResults: { otherCosts: 80878 },
        generalResults: { totalCost: 2407964, areaContaminated: 11653.165001574245, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.5365263651025596,
        onSiteDays: 12.91093383783121,
        phaseCost: 498975,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.627785367372745,
        onSiteDays: 61.34054954867951,
        phaseCost: 3234572,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.164311732475305,
        onSiteDays: 74.25148338651073,
        phaseCost: 3733547,
      },
      sourceReductionResults: { workDays: 4.7963720627257755, onSiteDays: 4.7963720627257755, phaseCost: 191390 },
      decontaminationResults: {
        workDays: 28.561751260552963,
        onSiteDays: 29.37756172669529,
        phaseCost: 4296581168198,
      },
      incidentCommandResults: { onSiteDays: 116.4254171759318, phaseCost: 354036 },
      otherResults: { otherCosts: 113120 },
      generalResults: { totalCost: 5989949, areaContaminated: 10000, decontaminationRounds: 3 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.8208748668421197,
        onSiteDays: 8.805183723798166,
        phaseCost: 165047,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 6.650627080585744,
        onSiteDays: 25.7301234326222,
        phaseCost: 671741,
      },
      totalCharacterizationSamplingResults: {
        workDays: 9.471501947427864,
        onSiteDays: 34.535307156420366,
        phaseCost: 836788,
      },
      sourceReductionResults: { workDays: 6.504996887973534, onSiteDays: 6.504996887973534, phaseCost: 289425 },
      decontaminationResults: {
        workDays: 7.443913828452097,
        onSiteDays: 8.93582720820229,
        phaseCost: 416846272504,
      },
      incidentCommandResults: { onSiteDays: 57.97613125259619, phaseCost: 176417 },
      otherResults: { otherCosts: 96795 },
      generalResults: { totalCost: 2088775, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.449798121469952,
          onSiteDays: 21.81600910118626,
          phaseCost: 778300,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 13.902498807424248,
          onSiteDays: 34.855702797821515,
          phaseCost: 866144,
        },
        totalCharacterizationSamplingResults: {
          workDays: 16.352296928894198,
          onSiteDays: 56.671711899007775,
          phaseCost: 1644444,
        },
        sourceReductionResults: { workDays: 0.8370007982271664, onSiteDays: 0.8370007982271664, phaseCost: 59684 },
        decontaminationResults: {
          workDays: 8.600094886636384,
          onSiteDays: 11.08049898852606,
          phaseCost: 117378,
          otherCosts: 727634,
        },
        incidentCommandResults: { onSiteDays: 76.589211685761, phaseCost: 237310 },
        otherResults: { otherCosts: 127450 },
        generalResults: { totalCost: 2913900, areaContaminated: 14255.894643546988, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.7575917330458644,
          onSiteDays: 4.155641509630716,
          phaseCost: 207904,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.7044670180563575,
          onSiteDays: 17.926264514201996,
          phaseCost: 1013546,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.462058751102222,
          onSiteDays: 22.081906023832712,
          phaseCost: 1221450,
        },
        sourceReductionResults: { workDays: 0.5958781940490159, onSiteDays: 0.5958781940490159, phaseCost: 93314 },
        decontaminationResults: {
          workDays: 3.0688338615160515,
          onSiteDays: 4.325964503531802,
          phaseCost: 192539,
          otherCosts: 130286,
        },
        incidentCommandResults: { onSiteDays: 35.00374872141353, phaseCost: 106962 },
        otherResults: { otherCosts: 54325 },
        generalResults: { totalCost: 1798876, areaContaminated: 14255.894643546988, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.686181923334904,
        onSiteDays: 14.786570851987882,
        phaseCost: 527187,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.815351487925206,
        onSiteDays: 25.047459843127385,
        phaseCost: 949964,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.501533411260109,
        onSiteDays: 39.83403069511527,
        phaseCost: 1477151,
      },
      sourceReductionResults: { workDays: 0.6687676449435689, onSiteDays: 0.6687676449435689, phaseCost: 117274 },
      decontaminationResults: {
        workDays: 9.946006228436252,
        onSiteDays: 11.84450236937136,
        phaseCost: 249383387195,
      },
      incidentCommandResults: { onSiteDays: 60.3473007094302, phaseCost: 182945 },
      otherResults: { otherCosts: 100847 },
      generalResults: { totalCost: 2514795, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.3801415804761463,
        onSiteDays: 8.361898764670979,
        phaseCost: 380229,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.427439570530228,
        onSiteDays: 16.46769865766897,
        phaseCost: 757808,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.807581151006374,
        onSiteDays: 24.829597422339948,
        phaseCost: 1138037,
      },
      sourceReductionResults: { workDays: 0.4018845487537185, onSiteDays: 0.4018845487537185, phaseCost: 77179 },
      decontaminationResults: {
        workDays: 4.719418913526325,
        onSiteDays: 6.582062458987828,
        phaseCost: 104951144664,
      },
      incidentCommandResults: { onSiteDays: 39.81354443008149, phaseCost: 120475 },
      otherResults: { otherCosts: 71865 },
      generalResults: { totalCost: 1657171, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.867039626371333,
          onSiteDays: 15.106155556231231,
          phaseCost: 715943,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.167738956209918,
          onSiteDays: 4.6271147073203425,
          phaseCost: 100619,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.034778582581251,
          onSiteDays: 19.733270263551574,
          phaseCost: 816562,
        },
        sourceReductionResults: { workDays: 0.07818126655780423, onSiteDays: 0.07818126655780423, phaseCost: 12214 },
        decontaminationResults: {
          workDays: 7.168166890081057,
          onSiteDays: 7.506686446840569,
          phaseCost: 186825,
          otherCosts: 156427,
        },
        incidentCommandResults: { onSiteDays: 35.31813797694995, phaseCost: 108865 },
        otherResults: { otherCosts: 57104 },
        generalResults: { totalCost: 1337997, areaContaminated: 6329.513565015401, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.1487362650595334,
          onSiteDays: 15.400712882435,
          phaseCost: 649906,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.383888603624244,
          onSiteDays: 13.91409393702471,
          phaseCost: 591268,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.532624868683778,
          onSiteDays: 29.31480681945971,
          phaseCost: 1241174,
        },
        sourceReductionResults: { workDays: 0.17871972023310498, onSiteDays: 0.17871972023310498, phaseCost: 23513 },
        decontaminationResults: {
          workDays: 8.70342183129476,
          onSiteDays: 9.511367601694392,
          phaseCost: 194898,
          otherCosts: 312271,
        },
        incidentCommandResults: { onSiteDays: 47.00489414138721, phaseCost: 143040 },
        otherResults: { otherCosts: 73447 },
        generalResults: { totalCost: 1988343, areaContaminated: 6329.513565015401, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.813764124731964,
        onSiteDays: 18.46141886010544,
        phaseCost: 812558,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.2307679568369565,
        onSiteDays: 18.62780053934899,
        phaseCost: 1098902,
      },
      totalCharacterizationSamplingResults: {
        workDays: 13.04453208156892,
        onSiteDays: 37.08921939945443,
        phaseCost: 1911460,
      },
      sourceReductionResults: { workDays: 1.2527690589726503, onSiteDays: 1.2527690589726503, phaseCost: 225610 },
      decontaminationResults: {
        workDays: 10.518858123924318,
        onSiteDays: 11.37457851492208,
        phaseCost: 379793415816,
      },
      incidentCommandResults: { onSiteDays: 57.71656697334916, phaseCost: 178093 },
      otherResults: { otherCosts: 68787 },
      generalResults: { totalCost: 3179559, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.8794248955311232,
        onSiteDays: 15.49134504050437,
        phaseCost: 823092,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.4777425434288305,
        onSiteDays: 8.858213026489153,
        phaseCost: 393904,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.357167438959953,
        onSiteDays: 24.349558066993524,
        phaseCost: 1216996,
      },
      sourceReductionResults: { workDays: 0.6950681940156404, onSiteDays: 0.6950681940156404, phaseCost: 126782 },
      decontaminationResults: {
        workDays: 10.981164996042189,
        onSiteDays: 12.600431016320464,
        phaseCost: 374856584885,
      },
      incidentCommandResults: { onSiteDays: 45.64505727732963, phaseCost: 138672 },
      otherResults: { otherCosts: 68686 },
      generalResults: { totalCost: 2510877, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 10.50343584931699,
          onSiteDays: 32.05445736021159,
          phaseCost: 1376418,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.7299921605031041,
          onSiteDays: 6.3465854752223,
          phaseCost: 249594,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.233428009820093,
          onSiteDays: 38.40104283543389,
          phaseCost: 1626012,
        },
        sourceReductionResults: { workDays: 2.1997150982845746, onSiteDays: 2.1997150982845746, phaseCost: 302149 },
        decontaminationResults: {
          workDays: 3.200693664653388,
          onSiteDays: 5.09623474327294,
          phaseCost: 443657,
          otherCosts: 113130,
        },
        incidentCommandResults: { onSiteDays: 53.69699267699141, phaseCost: 166348 },
        otherResults: { otherCosts: 70514 },
        generalResults: { totalCost: 2721810, areaContaminated: 14436.522633637422, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.114868776013333,
          onSiteDays: 76.76156835239075,
          phaseCost: 1454890,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.5801669563968916,
          onSiteDays: 13.444647132393673,
          phaseCost: 200415,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.695035732410225,
          onSiteDays: 90.20621548478442,
          phaseCost: 1655305,
        },
        sourceReductionResults: { workDays: 0.053927357960409095, onSiteDays: 0.053927357960409095, phaseCost: 7012 },
        decontaminationResults: {
          workDays: 3.700077504082601,
          onSiteDays: 4.215504172308255,
          phaseCost: 321334,
          otherCosts: 99195,
        },
        incidentCommandResults: { onSiteDays: 102.47564701505308, phaseCost: 315318 },
        otherResults: { otherCosts: 64478 },
        generalResults: { totalCost: 2462642, areaContaminated: 14436.522633637422, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.0912186329545608,
        onSiteDays: 4.392809364683454,
        phaseCost: 331314,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.9227503719715324,
        onSiteDays: 6.735643007365963,
        phaseCost: 194536,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.013969004926093,
        onSiteDays: 11.128452372049416,
        phaseCost: 525850,
      },
      sourceReductionResults: { workDays: 1.982445750311411, onSiteDays: 1.982445750311411, phaseCost: 283864 },
      decontaminationResults: {
        workDays: 11.655392252992696,
        onSiteDays: 13.776390635589227,
        phaseCost: 114636545728,
      },
      incidentCommandResults: { onSiteDays: 34.88728875795005, phaseCost: 107685 },
      otherResults: { otherCosts: 125442 },
      generalResults: { totalCost: 1703205, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 11.107731395012204,
        onSiteDays: 30.02172224854467,
        phaseCost: 665664,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.6329991228776195,
        onSiteDays: 16.886038672646727,
        phaseCost: 431887,
      },
      totalCharacterizationSamplingResults: {
        workDays: 14.740730517889823,
        onSiteDays: 46.9077609211914,
        phaseCost: 1097551,
      },
      sourceReductionResults: { workDays: 0.706431057339425, onSiteDays: 0.706431057339425, phaseCost: 72674 },
      decontaminationResults: {
        workDays: 3.804274940119189,
        onSiteDays: 4.921532838354244,
        phaseCost: 111818243420,
      },
      incidentCommandResults: { onSiteDays: 60.535724816885065, phaseCost: 184851 },
      otherResults: { otherCosts: 111372 },
      generalResults: { totalCost: 1821686, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.5936589164550057,
          onSiteDays: 10.909855305099,
          phaseCost: 460631,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.436255947962216,
          onSiteDays: 19.963275022182017,
          phaseCost: 604093,
        },
        totalCharacterizationSamplingResults: {
          workDays: 9.029914864417222,
          onSiteDays: 30.873130327281018,
          phaseCost: 1064724,
        },
        sourceReductionResults: { workDays: 0.7266754375609971, onSiteDays: 0.7266754375609971, phaseCost: 31298 },
        decontaminationResults: {
          workDays: 6.927016135055343,
          onSiteDays: 6.974111653159865,
          phaseCost: 64190,
          otherCosts: 286971,
        },
        incidentCommandResults: { onSiteDays: 46.57391741800188, phaseCost: 142053 },
        otherResults: { otherCosts: 45636 },
        generalResults: { totalCost: 1634872, areaContaminated: 5235.949235557566, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.5206829540341662,
          onSiteDays: 8.336319376494114,
          phaseCost: 320281,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.2401579745523774,
          onSiteDays: 5.76547490854465,
          phaseCost: 164731,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.7608409285865436,
          onSiteDays: 14.101794285038764,
          phaseCost: 485012,
        },
        sourceReductionResults: { workDays: 2.238471902344006, onSiteDays: 2.238471902344006, phaseCost: 144441 },
        decontaminationResults: {
          workDays: 8.278110524704239,
          onSiteDays: 10.759809622950806,
          phaseCost: 194674,
          otherCosts: 401503,
        },
        incidentCommandResults: { onSiteDays: 35.10007581033358, phaseCost: 107015 },
        otherResults: { otherCosts: 65276 },
        generalResults: { totalCost: 1397921, areaContaminated: 5235.949235557566, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.008258442151994,
        onSiteDays: 16.400280527433807,
        phaseCost: 675844,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.2103338153798333,
        onSiteDays: 24.704984687840575,
        phaseCost: 1174547,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.218592257531827,
        onSiteDays: 41.105265215274386,
        phaseCost: 1850391,
      },
      sourceReductionResults: { workDays: 0.2014074676354033, onSiteDays: 0.2014074676354033, phaseCost: 16284 },
      decontaminationResults: {
        workDays: 7.957305609238638,
        onSiteDays: 8.6404509175663,
        phaseCost: 149005164707,
      },
      incidentCommandResults: { onSiteDays: 57.94712360047609, phaseCost: 179088 },
      otherResults: { otherCosts: 66420 },
      generalResults: { totalCost: 2425895, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 8.071046720535245,
        onSiteDays: 27.571029067825002,
        phaseCost: 1005370,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.7458760071324155,
        onSiteDays: 18.206787761685888,
        phaseCost: 743287,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.81692272766766,
        onSiteDays: 45.77781682951089,
        phaseCost: 1748657,
      },
      sourceReductionResults: { workDays: 0.49032025590870554, onSiteDays: 0.49032025590870554, phaseCost: 73675 },
      decontaminationResults: {
        workDays: 7.7271289135625425,
        onSiteDays: 8.431234211528496,
        phaseCost: 120257358418,
      },
      incidentCommandResults: { onSiteDays: 62.699371296948094, phaseCost: 192389 },
      otherResults: { otherCosts: 113366 },
      generalResults: { totalCost: 2606762, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.8672841433283995,
          onSiteDays: 11.624775201211605,
          phaseCost: 425606,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.2849989244175353,
          onSiteDays: 5.3232264762083545,
          phaseCost: 127649,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.152283067745935,
          onSiteDays: 16.94800167741996,
          phaseCost: 553255,
        },
        sourceReductionResults: { workDays: 3.539460452398325, onSiteDays: 3.539460452398325, phaseCost: 168932 },
        decontaminationResults: {
          workDays: 8.879437915719915,
          onSiteDays: 10.397883617644638,
          phaseCost: 52576,
          otherCosts: 376055,
        },
        incidentCommandResults: { onSiteDays: 38.88534574746292, phaseCost: 117571 },
        otherResults: { otherCosts: 82549 },
        generalResults: { totalCost: 1350938, areaContaminated: 5241.990890410261, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.9325544895012945,
          onSiteDays: 8.154286253221086,
          phaseCost: 252445,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.2594166268218723,
          onSiteDays: 11.585635926925717,
          phaseCost: 398951,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.1919711163231668,
          onSiteDays: 19.739922180146802,
          phaseCost: 651396,
        },
        sourceReductionResults: { workDays: 0.011863149385594641, onSiteDays: 0.011863149385594641, phaseCost: 2797 },
        decontaminationResults: {
          workDays: 4.873980720032468,
          onSiteDays: 5.054888949742282,
          phaseCost: 229425,
          otherCosts: 184622,
        },
        incidentCommandResults: { onSiteDays: 32.806674279274674, phaseCost: 99194 },
        otherResults: { otherCosts: 71245 },
        generalResults: { totalCost: 1238679, areaContaminated: 5241.990890410261, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.383848575215125,
        onSiteDays: 13.335457805945818,
        phaseCost: 397734,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.8446927922966143,
        onSiteDays: 26.605453157665544,
        phaseCost: 1205842,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.228541367511738,
        onSiteDays: 39.94091096361136,
        phaseCost: 1603576,
      },
      sourceReductionResults: { workDays: 5.039992115894609, onSiteDays: 5.039992115894609, phaseCost: 326321 },
      decontaminationResults: {
        workDays: 4.733664585681089,
        onSiteDays: 5.4067410958015225,
        phaseCost: 225062271636,
      },
      incidentCommandResults: { onSiteDays: 58.387644175307486, phaseCost: 178066 },
      otherResults: { otherCosts: 79688 },
      generalResults: { totalCost: 2684349, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.8536376352155233,
        onSiteDays: 38.050539558382965,
        phaseCost: 800109,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 5.679364407690221,
        onSiteDays: 20.14360775998376,
        phaseCost: 316035,
      },
      totalCharacterizationSamplingResults: {
        workDays: 9.533002042905744,
        onSiteDays: 58.194147318366724,
        phaseCost: 1116144,
      },
      sourceReductionResults: { workDays: 0.28172172194361794, onSiteDays: 0.28172172194361794, phaseCost: 30361 },
      decontaminationResults: {
        workDays: 3.6654695446289773,
        onSiteDays: 4.7067324427670645,
        phaseCost: 406055164793,
      },
      incidentCommandResults: { onSiteDays: 71.1826014830774, phaseCost: 218816 },
      otherResults: { otherCosts: 95705 },
      generalResults: { totalCost: 2031874, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.1917645913833788,
          onSiteDays: 14.53986205657188,
          phaseCost: 1157694,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 9.311564806992184,
          onSiteDays: 26.942985580842265,
          phaseCost: 1879341,
        },
        totalCharacterizationSamplingResults: {
          workDays: 12.503329398375563,
          onSiteDays: 41.482847637414146,
          phaseCost: 3037035,
        },
        sourceReductionResults: { workDays: 0.4263239536377643, onSiteDays: 0.4263239536377643, phaseCost: 32193 },
        decontaminationResults: {
          workDays: 12.518404552600906,
          onSiteDays: 15.083696660372357,
          phaseCost: 146045,
          otherCosts: 552342,
        },
        incidentCommandResults: { onSiteDays: 64.99286825142427, phaseCost: 201311 },
        otherResults: { otherCosts: 95481 },
        generalResults: { totalCost: 4064407, areaContaminated: 10668.083372448587, decontaminationRounds: 2 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 17.73345234968492,
          onSiteDays: 45.66017762456333,
          phaseCost: 1201214,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.2518872167211192,
          onSiteDays: 22.187968773917444,
          phaseCost: 918965,
        },
        totalCharacterizationSamplingResults: {
          workDays: 19.98533956640604,
          onSiteDays: 67.84814639848078,
          phaseCost: 2120179,
        },
        sourceReductionResults: { workDays: 4.438163077787083, onSiteDays: 4.438163077787083, phaseCost: 212149 },
        decontaminationResults: {
          workDays: 7.128476685641445,
          onSiteDays: 7.210317890674416,
          phaseCost: 214179,
          otherCosts: 563845,
        },
        incidentCommandResults: { onSiteDays: 87.49662736694228, phaseCost: 271236 },
        otherResults: { otherCosts: 137404 },
        generalResults: { totalCost: 3518992, areaContaminated: 10668.083372448587, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.9539244913358242,
        onSiteDays: 17.236776908605243,
        phaseCost: 850336,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.7991240345826007,
        onSiteDays: 10.82706030580086,
        phaseCost: 559600,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.753048525918425,
        onSiteDays: 28.063837214406103,
        phaseCost: 1409936,
      },
      sourceReductionResults: { workDays: 0.6742306736622892, onSiteDays: 0.6742306736622892, phaseCost: 41621 },
      decontaminationResults: {
        workDays: 11.449445573252031,
        onSiteDays: 11.95900881801709,
        phaseCost: 433168405138,
      },
      incidentCommandResults: { onSiteDays: 48.69707670608548, phaseCost: 148431 },
      otherResults: { otherCosts: 77653 },
      generalResults: { totalCost: 2515947, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.1242748471512125,
        onSiteDays: 38.49520030844691,
        phaseCost: 674782,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.98095930670626,
        onSiteDays: 27.370286005736745,
        phaseCost: 374356,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.105234153857472,
        onSiteDays: 65.86548631418366,
        phaseCost: 1049138,
      },
      sourceReductionResults: { workDays: 0.8799862347705221, onSiteDays: 0.8799862347705221, phaseCost: 169341 },
      decontaminationResults: {
        workDays: 8.506204581471673,
        onSiteDays: 8.69340467981375,
        phaseCost: 120013271371,
      },
      incidentCommandResults: { onSiteDays: 83.43887722876794, phaseCost: 258202 },
      otherResults: { otherCosts: 104472 },
      generalResults: { totalCost: 1972537, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.145545896612982,
          onSiteDays: 33.27331474460224,
          phaseCost: 1458713,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 6.779313011285597,
          onSiteDays: 35.291685331821256,
          phaseCost: 1332375,
        },
        totalCharacterizationSamplingResults: {
          workDays: 11.924858907898578,
          onSiteDays: 68.5650000764235,
          phaseCost: 2791088,
        },
        sourceReductionResults: { workDays: 5.320035672852117, onSiteDays: 5.320035672852117, phaseCost: 175334 },
        decontaminationResults: {
          workDays: 4.749726307054452,
          onSiteDays: 7.498081392258889,
          phaseCost: 275026,
          otherCosts: 137550,
        },
        incidentCommandResults: { onSiteDays: 89.38311714153451, phaseCost: 274430 },
        otherResults: { otherCosts: 99342 },
        generalResults: { totalCost: 3752770, areaContaminated: 12202.565450501294, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 9.634556991742128,
          onSiteDays: 22.485224584613448,
          phaseCost: 683275,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.609760435053728,
          onSiteDays: 11.15883936618668,
          phaseCost: 254452,
        },
        totalCharacterizationSamplingResults: {
          workDays: 14.244317426795856,
          onSiteDays: 33.64406395080013,
          phaseCost: 937727,
        },
        sourceReductionResults: { workDays: 0.0527538386644632, onSiteDays: 0.0527538386644632, phaseCost: 13617 },
        decontaminationResults: {
          workDays: 3.764786597985026,
          onSiteDays: 4.092313849621525,
          phaseCost: 62505,
          otherCosts: 170495,
        },
        incidentCommandResults: { onSiteDays: 45.78913163908612, phaseCost: 141315 },
        otherResults: { otherCosts: 66381 },
        generalResults: { totalCost: 1392040, areaContaminated: 12202.565450501294, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.9115865968474166,
        onSiteDays: 11.127132837397035,
        phaseCost: 323267,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.3559358325383917,
        onSiteDays: 18.657071739426655,
        phaseCost: 525545,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.267522429385808,
        onSiteDays: 29.78420457682369,
        phaseCost: 848812,
      },
      sourceReductionResults: { workDays: 0.1536105951889631, onSiteDays: 0.1536105951889631, phaseCost: 12530 },
      decontaminationResults: {
        workDays: 4.6780532919052185,
        onSiteDays: 7.380782003370296,
        phaseCost: 43732239860,
      },
      incidentCommandResults: { onSiteDays: 45.31859717538295, phaseCost: 139291 },
      otherResults: { otherCosts: 145508 },
      generalResults: { totalCost: 1429733, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.4975755801214112,
        onSiteDays: 49.42639873951477,
        phaseCost: 917771,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.765648976797904,
        onSiteDays: 23.04505393760082,
        phaseCost: 354273,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.263224556919315,
        onSiteDays: 72.4714526771156,
        phaseCost: 1272044,
      },
      sourceReductionResults: { workDays: 0.1852323975855298, onSiteDays: 0.1852323975855298, phaseCost: 24221 },
      decontaminationResults: {
        workDays: 8.83067391087084,
        onSiteDays: 10.423120477800984,
        phaseCost: 271989584723,
      },
      incidentCommandResults: { onSiteDays: 91.0798055525021, phaseCost: 281628 },
      otherResults: { otherCosts: 97580 },
      generalResults: { totalCost: 2532185, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.915104016486182,
          onSiteDays: 18.23109379158625,
          phaseCost: 876619,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.651344352463262,
          onSiteDays: 25.522861828159762,
          phaseCost: 1074593,
        },
        totalCharacterizationSamplingResults: {
          workDays: 14.566448368949445,
          onSiteDays: 43.75395561974601,
          phaseCost: 1951212,
        },
        sourceReductionResults: { workDays: 6.391239770893006, onSiteDays: 6.391239770893006, phaseCost: 165729 },
        decontaminationResults: {
          workDays: 4.054895401246588,
          onSiteDays: 6.373256380989508,
          phaseCost: 140462,
          otherCosts: 286302,
        },
        incidentCommandResults: { onSiteDays: 64.51845177162852, phaseCost: 196815 },
        otherResults: { otherCosts: 91735 },
        generalResults: { totalCost: 2832255, areaContaminated: 13687.209246840142, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 7.753729783448728,
          onSiteDays: 27.52625449054367,
          phaseCost: 608874,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 9.49991253976955,
          onSiteDays: 82.05342624018684,
          phaseCost: 3208350,
        },
        totalCharacterizationSamplingResults: {
          workDays: 17.25364232321828,
          onSiteDays: 109.5796807307305,
          phaseCost: 3817224,
        },
        sourceReductionResults: { workDays: 0.17445919504095134, onSiteDays: 0.17445919504095134, phaseCost: 10348 },
        decontaminationResults: {
          workDays: 16.105568729831273,
          onSiteDays: 17.989591369170135,
          phaseCost: 416001,
          otherCosts: 487696,
        },
        incidentCommandResults: { onSiteDays: 135.7437312949416, phaseCost: 414035 },
        otherResults: { otherCosts: 71860 },
        generalResults: { totalCost: 5217164, areaContaminated: 13687.209246840142, decontaminationRounds: 3 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.1490214927721265,
        onSiteDays: 29.943796210435252,
        phaseCost: 956164,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.6971533147336662,
        onSiteDays: 7.878691629591784,
        phaseCost: 243980,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.846174807505792,
        onSiteDays: 37.82248784002704,
        phaseCost: 1200144,
      },
      sourceReductionResults: { workDays: 0.14763167262308888, onSiteDays: 0.14763167262308888, phaseCost: 8527 },
      decontaminationResults: {
        workDays: 12.214037573247692,
        onSiteDays: 13.819601401644666,
        phaseCost: 54105316370,
      },
      incidentCommandResults: { onSiteDays: 59.7897209142948, phaseCost: 181955 },
      otherResults: { otherCosts: 79309 },
      generalResults: { totalCost: 1840410, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.21330773549138,
        onSiteDays: 26.69451466522543,
        phaseCost: 1146495,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.768159765124884,
        onSiteDays: 16.396038084263687,
        phaseCost: 635474,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.981467500616265,
        onSiteDays: 43.09055274948912,
        phaseCost: 1781969,
      },
      sourceReductionResults: { workDays: 2.5100887674609647, onSiteDays: 2.5100887674609647, phaseCost: 203852 },
      decontaminationResults: {
        workDays: 4.3422377555030955,
        onSiteDays: 6.9698283425462035,
        phaseCost: 30292203025,
      },
      incidentCommandResults: { onSiteDays: 60.570469859496285, phaseCost: 182714 },
      otherResults: { otherCosts: 115354 },
      generalResults: { totalCost: 2517206, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.187211901548772,
          onSiteDays: 13.86411509303019,
          phaseCost: 645585,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.6068600352310218,
          onSiteDays: 8.028662626453198,
          phaseCost: 342832,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.794071936779794,
          onSiteDays: 21.892777719483387,
          phaseCost: 988417,
        },
        sourceReductionResults: { workDays: 0.026735334381248615, onSiteDays: 0.026735334381248615, phaseCost: 7076 },
        decontaminationResults: {
          workDays: 3.49403595889314,
          onSiteDays: 4.696866537373714,
          phaseCost: 54069,
          otherCosts: 118525,
        },
        incidentCommandResults: { onSiteDays: 34.616379591238356, phaseCost: 105008 },
        otherResults: { otherCosts: 48447 },
        generalResults: { totalCost: 1321542, areaContaminated: 6564.873170937615, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.601266148913192,
          onSiteDays: 3.029463427164094,
          phaseCost: 113930,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.060563769373311,
          onSiteDays: 15.39323767736521,
          phaseCost: 724563,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.661829918286503,
          onSiteDays: 18.422701104529303,
          phaseCost: 838493,
        },
        sourceReductionResults: { workDays: 2.6925284807800773, onSiteDays: 2.6925284807800773, phaseCost: 188413 },
        decontaminationResults: {
          workDays: 6.692587931801702,
          onSiteDays: 8.387636651142415,
          phaseCost: 247397,
          otherCosts: 250351,
        },
        incidentCommandResults: { onSiteDays: 37.502866236451794, phaseCost: 115581 },
        otherResults: { otherCosts: 53567 },
        generalResults: { totalCost: 1693802, areaContaminated: 6564.873170937615, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.6913205838499197,
        onSiteDays: 22.809645702841497,
        phaseCost: 632238,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 10.555923508354086,
        onSiteDays: 33.374401164804766,
        phaseCost: 740507,
      },
      totalCharacterizationSamplingResults: {
        workDays: 13.247244092204006,
        onSiteDays: 56.18404686764626,
        phaseCost: 1372745,
      },
      sourceReductionResults: { workDays: 1.8956949607130118, onSiteDays: 1.8956949607130118, phaseCost: 84871 },
      decontaminationResults: {
        workDays: 7.87104334446393,
        onSiteDays: 8.672911917248953,
        phaseCost: 25048299188,
      },
      incidentCommandResults: { onSiteDays: 74.75265374560823, phaseCost: 224774 },
      otherResults: { otherCosts: 77536 },
      generalResults: { totalCost: 2084162, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.826035383906752,
        onSiteDays: 18.463578041445007,
        phaseCost: 724666,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.0712667666027988,
        onSiteDays: 7.3635875999745295,
        phaseCost: 304801,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.89730215050955,
        onSiteDays: 25.827165641419537,
        phaseCost: 1029467,
      },
      sourceReductionResults: { workDays: 1.0181593374939608, onSiteDays: 1.0181593374939608, phaseCost: 85819 },
      decontaminationResults: {
        workDays: 7.808030891653157,
        onSiteDays: 9.87370372607226,
        phaseCost: 328077307096,
      },
      incidentCommandResults: { onSiteDays: 44.71902870498576, phaseCost: 134671 },
      otherResults: { otherCosts: 97389 },
      generalResults: { totalCost: 1982519, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.3188195283996684,
          onSiteDays: 18.30658820988919,
          phaseCost: 590732,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.510066582723363,
          onSiteDays: 35.71336471665532,
          phaseCost: 1252956,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.8288861111230315,
          onSiteDays: 54.019952926544505,
          phaseCost: 1843688,
        },
        sourceReductionResults: { workDays: 10.491733559177803, onSiteDays: 10.491733559177803, phaseCost: 520897 },
        decontaminationResults: {
          workDays: 8.33312213754587,
          onSiteDays: 10.925532325619258,
          phaseCost: 149321,
          otherCosts: 487586,
        },
        incidentCommandResults: { onSiteDays: 83.43721881134157, phaseCost: 255390 },
        otherResults: { otherCosts: 91428 },
        generalResults: { totalCost: 3348310, areaContaminated: 12581.816089242187, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.5428139877524827,
          onSiteDays: 8.363308954819558,
          phaseCost: 580964,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.7816897510197367,
          onSiteDays: 9.602226809741339,
          phaseCost: 596152,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.324503738772219,
          onSiteDays: 17.965535764560897,
          phaseCost: 1177116,
        },
        sourceReductionResults: { workDays: 0.1011587108877057, onSiteDays: 0.1011587108877057, phaseCost: 13039 },
        decontaminationResults: {
          workDays: 4.663998653568327,
          onSiteDays: 6.842793688839952,
          phaseCost: 471760,
          otherCosts: 228119,
        },
        incidentCommandResults: { onSiteDays: 32.909488164288554, phaseCost: 100620 },
        otherResults: { otherCosts: 85106 },
        generalResults: { totalCost: 2075760, areaContaminated: 12581.816089242187, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.568092633348253,
        onSiteDays: 33.30093111296434,
        phaseCost: 1194980,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.6693125714266577,
        onSiteDays: 5.200872733088834,
        phaseCost: 200536,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.237405204774911,
        onSiteDays: 38.50180384605318,
        phaseCost: 1395516,
      },
      sourceReductionResults: { workDays: 0.9846912952924977, onSiteDays: 0.9846912952924977, phaseCost: 112260 },
      decontaminationResults: {
        workDays: 12.790527581654146,
        onSiteDays: 12.968967031447441,
        phaseCost: 343485729466,
      },
      incidentCommandResults: { onSiteDays: 60.45546217279312, phaseCost: 183775 },
      otherResults: { otherCosts: 52696 },
      generalResults: { totalCost: 2817198, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.4163708519092477,
        onSiteDays: 21.916963137607844,
        phaseCost: 1067856,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.345733696273996,
        onSiteDays: 28.11964614023604,
        phaseCost: 1656753,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.762104548183244,
        onSiteDays: 50.03660927784388,
        phaseCost: 2724609,
      },
      sourceReductionResults: { workDays: 1.8921116500840527, onSiteDays: 1.8921116500840527, phaseCost: 246844 },
      decontaminationResults: {
        workDays: 9.834908537295393,
        onSiteDays: 11.917365423850102,
        phaseCost: 157761502932,
      },
      incidentCommandResults: { onSiteDays: 71.84608635177804, phaseCost: 218413 },
      otherResults: { otherCosts: 129552 },
      generalResults: { totalCost: 3980111, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.7985145566242895,
          onSiteDays: 5.787167806300367,
          phaseCost: 196589,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.0036177486292264,
          onSiteDays: 16.233338812151338,
          phaseCost: 598120,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.802132305253516,
          onSiteDays: 22.020506618451705,
          phaseCost: 794709,
        },
        sourceReductionResults: { workDays: 0.5888678998351137, onSiteDays: 0.5888678998351137, phaseCost: 82849 },
        decontaminationResults: {
          workDays: 4.179139828118295,
          onSiteDays: 4.5822555205277755,
          phaseCost: 416906,
          otherCosts: 294741,
        },
        incidentCommandResults: { onSiteDays: 35.191630038814594, phaseCost: 106699 },
        otherResults: { otherCosts: 31595 },
        generalResults: { totalCost: 1727499, areaContaminated: 12456.11420540514, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.5929691427213362,
          onSiteDays: 5.6944417321531695,
          phaseCost: 232260,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.586076597600259,
          onSiteDays: 11.801547043658712,
          phaseCost: 531001,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.1790457403215955,
          onSiteDays: 17.49598877581188,
          phaseCost: 763261,
        },
        sourceReductionResults: { workDays: 0.7468766520263755, onSiteDays: 0.7468766520263755, phaseCost: 121170 },
        decontaminationResults: {
          workDays: 8.54693933682212,
          onSiteDays: 9.590118644663626,
          phaseCost: 336757,
          otherCosts: 477355,
        },
        incidentCommandResults: { onSiteDays: 35.83298407250189, phaseCost: 109504 },
        otherResults: { otherCosts: 68844 },
        generalResults: { totalCost: 1876891, areaContaminated: 12456.11420540514, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.2077215267779267,
        onSiteDays: 9.801548680849205,
        phaseCost: 320179,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.217576387672649,
        onSiteDays: 29.168222283530312,
        phaseCost: 1007194,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.425297914450575,
        onSiteDays: 38.96977096437952,
        phaseCost: 1327373,
      },
      sourceReductionResults: { workDays: 5.2039765866243135, onSiteDays: 5.2039765866243135, phaseCost: 280443 },
      decontaminationResults: {
        workDays: 20.214034242838164,
        onSiteDays: 20.28945936921273,
        phaseCost: 259326893646,
      },
      incidentCommandResults: { onSiteDays: 72.46320692021656, phaseCost: 221586 },
      otherResults: { otherCosts: 57121 },
      generalResults: { totalCost: 3039495, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.7448602950471317,
        onSiteDays: 9.302238067312407,
        phaseCost: 410984,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.5767906695456517,
        onSiteDays: 7.826563702271628,
        phaseCost: 284237,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.321650964592783,
        onSiteDays: 17.128801769584037,
        phaseCost: 695221,
      },
      sourceReductionResults: { workDays: 4.87308845111771, onSiteDays: 4.87308845111771, phaseCost: 213320 },
      decontaminationResults: {
        workDays: 7.037551230526891,
        onSiteDays: 8.1032932568582,
        phaseCost: 56352262120,
      },
      incidentCommandResults: { onSiteDays: 38.10518347755995, phaseCost: 116848 },
      otherResults: { otherCosts: 77390 },
      generalResults: { totalCost: 1421251, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.6871454436397433,
          onSiteDays: 7.4801328291932005,
          phaseCost: 133357,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 10.541510599465514,
          onSiteDays: 69.90197435575122,
          phaseCost: 1957788,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.228656043105257,
          onSiteDays: 77.38210718494442,
          phaseCost: 2091145,
        },
        sourceReductionResults: { workDays: 0.1724657894384936, onSiteDays: 0.1724657894384936, phaseCost: 40961 },
        decontaminationResults: {
          workDays: 22.374806200707056,
          onSiteDays: 24.117530374349453,
          phaseCost: 214064,
          otherCosts: 896372,
        },
        incidentCommandResults: { onSiteDays: 109.67210334873236, phaseCost: 339978 },
        otherResults: { otherCosts: 73234 },
        generalResults: { totalCost: 3655754, areaContaminated: 5198.930157394831, decontaminationRounds: 4 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.3588031032942114,
          onSiteDays: 7.688392921633034,
          phaseCost: 118611,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.7703068624973819,
          onSiteDays: 5.451629533605829,
          phaseCost: 65247,
        },
        totalCharacterizationSamplingResults: {
          workDays: 2.129109965791593,
          onSiteDays: 13.140022455238864,
          phaseCost: 183858,
        },
        sourceReductionResults: { workDays: 0.27351190138131204, onSiteDays: 0.27351190138131204, phaseCost: 26165 },
        decontaminationResults: {
          workDays: 4.404431252135995,
          onSiteDays: 6.725848883559427,
          phaseCost: 209500,
          otherCosts: 218880,
        },
        incidentCommandResults: { onSiteDays: 28.1393832401796, phaseCost: 86100 },
        otherResults: { otherCosts: 90101 },
        generalResults: { totalCost: 814604, areaContaminated: 5198.930157394831, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 6.3689403092432,
        onSiteDays: 37.659723805028854,
        phaseCost: 1075583,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.85476046092314,
        onSiteDays: 23.708833372625435,
        phaseCost: 606141,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.22370077016634,
        onSiteDays: 61.36855717765429,
        phaseCost: 1681724,
      },
      sourceReductionResults: { workDays: 8.033557816363903, onSiteDays: 8.033557816363903, phaseCost: 211348 },
      decontaminationResults: {
        workDays: 19.62086007339434,
        onSiteDays: 21.87757795138228,
        phaseCost: 409496609410,
      },
      incidentCommandResults: { onSiteDays: 99.27969294540047, phaseCost: 307623 },
      otherResults: { otherCosts: 94086 },
      generalResults: { totalCost: 3313687, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.009797882597108,
        onSiteDays: 4.784917543539516,
        phaseCost: 268877,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.3182524348320321,
        onSiteDays: 6.411779762178745,
        phaseCost: 315337,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.32805031742914,
        onSiteDays: 11.19669730571826,
        phaseCost: 584214,
      },
      sourceReductionResults: { workDays: 1.3197468154653273, onSiteDays: 1.3197468154653273, phaseCost: 83338 },
      decontaminationResults: {
        workDays: 3.5816455433568093,
        onSiteDays: 4.121678355643916,
        phaseCost: 202372134736,
      },
      incidentCommandResults: { onSiteDays: 24.638122476827505, phaseCost: 75551 },
      otherResults: { otherCosts: 70296 },
      generalResults: { totalCost: 1150507, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.09683263059579,
          onSiteDays: 36.59718312586902,
          phaseCost: 754032,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 7.444306090301014,
          onSiteDays: 31.002394006972594,
          phaseCost: 625517,
        },
        totalCharacterizationSamplingResults: {
          workDays: 13.541138720896804,
          onSiteDays: 67.59957713284162,
          phaseCost: 1379549,
        },
        sourceReductionResults: { workDays: 0.3102097343165204, onSiteDays: 0.3102097343165204, phaseCost: 31946 },
        decontaminationResults: {
          workDays: 9.11914017310346,
          onSiteDays: 9.967719051280925,
          phaseCost: 299133,
          otherCosts: 450081,
        },
        incidentCommandResults: { onSiteDays: 85.87750591843906, phaseCost: 265625 },
        otherResults: { otherCosts: 61862 },
        generalResults: { totalCost: 2488196, areaContaminated: 7066.292511780349, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.4054548323342875,
          onSiteDays: 15.753005524437272,
          phaseCost: 438166,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.9429482163124905,
          onSiteDays: 12.143868662204493,
          phaseCost: 290078,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.348403048646778,
          onSiteDays: 27.896874186641767,
          phaseCost: 728244,
        },
        sourceReductionResults: { workDays: 0.6741225210373498, onSiteDays: 0.6741225210373498, phaseCost: 62802 },
        decontaminationResults: {
          workDays: 8.919551575770498,
          onSiteDays: 11.515910363876241,
          phaseCost: 242959,
          otherCosts: 427173,
        },
        incidentCommandResults: { onSiteDays: 48.08690707155536, phaseCost: 145890 },
        otherResults: { otherCosts: 47016 },
        generalResults: { totalCost: 1654084, areaContaminated: 7066.292511780349, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 2.9928228905676075,
        onSiteDays: 11.57759588121146,
        phaseCost: 356383,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.718105087965881,
        onSiteDays: 17.34081243099906,
        phaseCost: 583560,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.710927978533489,
        onSiteDays: 28.918408312210516,
        phaseCost: 939943,
      },
      sourceReductionResults: { workDays: 4.611949940230579, onSiteDays: 4.611949940230579, phaseCost: 140332 },
      decontaminationResults: {
        workDays: 15.584681103374967,
        onSiteDays: 17.4560330676511,
        phaseCost: 40047801112,
      },
      incidentCommandResults: { onSiteDays: 58.986391320092196, phaseCost: 182961 },
      otherResults: { otherCosts: 113073 },
      generalResults: { totalCost: 2217468, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.7414898765111165,
        onSiteDays: 4.8182029104454625,
        phaseCost: 308633,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.678530042539582,
        onSiteDays: 6.605785821005279,
        phaseCost: 533179,
      },
      totalCharacterizationSamplingResults: {
        workDays: 2.4200199190506986,
        onSiteDays: 11.423988731450741,
        phaseCost: 841812,
      },
      sourceReductionResults: { workDays: 0.9704679665859811, onSiteDays: 0.9704679665859811, phaseCost: 131998 },
      decontaminationResults: {
        workDays: 9.194298334232137,
        onSiteDays: 11.718718082578556,
        phaseCost: 281868528155,
      },
      incidentCommandResults: { onSiteDays: 32.11317478061528, phaseCost: 98538 },
      otherResults: { otherCosts: 80620 },
      generalResults: { totalCost: 1962991, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.358232297377251,
          onSiteDays: 11.86285049655739,
          phaseCost: 273051,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.6015664108368,
          onSiteDays: 20.60288876423066,
          phaseCost: 562786,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.959798708214051,
          onSiteDays: 32.46573926078805,
          phaseCost: 835837,
        },
        sourceReductionResults: { workDays: 0.35960780740498416, onSiteDays: 0.35960780740498416, phaseCost: 17448 },
        decontaminationResults: {
          workDays: 9.323326866450563,
          onSiteDays: 9.535365213531852,
          phaseCost: 97280,
          otherCosts: 581313,
        },
        incidentCommandResults: { onSiteDays: 50.36071228172489, phaseCost: 152168 },
        otherResults: { otherCosts: 106773 },
        generalResults: { totalCost: 1790819, areaContaminated: 9313.831456078642, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.2621693646240124,
          onSiteDays: 13.3310407045459,
          phaseCost: 694539,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.0569563513726266,
          onSiteDays: 14.871140240783372,
          phaseCost: 841659,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.319125715996639,
          onSiteDays: 28.202180945329275,
          phaseCost: 1536198,
        },
        sourceReductionResults: { workDays: 1.8556119116328103, onSiteDays: 1.8556119116328103, phaseCost: 107546 },
        decontaminationResults: {
          workDays: 4.3820725948042405,
          onSiteDays: 4.773414361237878,
          phaseCost: 136617,
          otherCosts: 101598,
        },
        incidentCommandResults: { onSiteDays: 42.831207218199964, phaseCost: 132317 },
        otherResults: { otherCosts: 113485 },
        generalResults: { totalCost: 2127761, areaContaminated: 9313.831456078642, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.7949317325737947,
        onSiteDays: 10.558277475381438,
        phaseCost: 242013,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.1038119754385978,
        onSiteDays: 45.13769251163391,
        phaseCost: 1127053,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.8987437080123923,
        onSiteDays: 55.695969987015346,
        phaseCost: 1369066,
      },
      sourceReductionResults: { workDays: 0.19324215825314423, onSiteDays: 0.19324215825314423, phaseCost: 27873 },
      decontaminationResults: {
        workDays: 22.899532075249482,
        onSiteDays: 25.166160334871655,
        phaseCost: 313309868083,
      },
      incidentCommandResults: { onSiteDays: 89.05537248014014, phaseCost: 275828 },
      otherResults: { otherCosts: 110451 },
      generalResults: { totalCost: 2964610, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.2961586257121995,
        onSiteDays: 19.673358207657387,
        phaseCost: 1202581,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 8.628344947414007,
        onSiteDays: 22.511022892883545,
        phaseCost: 1060315,
      },
      totalCharacterizationSamplingResults: {
        workDays: 13.924503573126206,
        onSiteDays: 42.18438110054093,
        phaseCost: 2262896,
      },
      sourceReductionResults: { workDays: 1.2618869349321842, onSiteDays: 1.2618869349321842, phaseCost: 123845 },
      decontaminationResults: {
        workDays: 6.739128388170881,
        onSiteDays: 9.581834864472466,
        phaseCost: 166341341272,
      },
      incidentCommandResults: { onSiteDays: 61.02810289994558, phaseCost: 185278 },
      otherResults: { otherCosts: 110931 },
      generalResults: { totalCost: 3190563, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.4346386641347095,
          onSiteDays: 18.688815996293332,
          phaseCost: 785755,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.577456174589042,
          onSiteDays: 21.14176683559996,
          phaseCost: 797788,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.012094838723751,
          onSiteDays: 39.830582831893295,
          phaseCost: 1583543,
        },
        sourceReductionResults: { workDays: 4.104149518857625, onSiteDays: 4.104149518857625, phaseCost: 172023 },
        decontaminationResults: {
          workDays: 3.5155378716335486,
          onSiteDays: 4.373463979310697,
          phaseCost: 89116,
          otherCosts: 202093,
        },
        incidentCommandResults: { onSiteDays: 56.30819633006162, phaseCost: 174318 },
        otherResults: { otherCosts: 84564 },
        generalResults: { totalCost: 2305657, areaContaminated: 7654.205507751135, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 5.47660948827952,
          onSiteDays: 30.45350994231893,
          phaseCost: 521234,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.8012662693272157,
          onSiteDays: 8.795591332034075,
          phaseCost: 121811,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.277875757606735,
          onSiteDays: 39.24910127435301,
          phaseCost: 643045,
        },
        sourceReductionResults: { workDays: 1.5086083080528168, onSiteDays: 1.5086083080528168, phaseCost: 111313 },
        decontaminationResults: {
          workDays: 3.102240059548579,
          onSiteDays: 4.732334905008863,
          phaseCost: 245224,
          otherCosts: 109606,
        },
        incidentCommandResults: { onSiteDays: 53.490044487414686, phaseCost: 164911 },
        otherResults: { otherCosts: 46963 },
        generalResults: { totalCost: 1321062, areaContaminated: 7654.205507751135, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.9587785659852115,
        onSiteDays: 8.827834322592567,
        phaseCost: 276823,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.8892362866703802,
        onSiteDays: 21.03375565607992,
        phaseCost: 643314,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.8480148526555915,
        onSiteDays: 29.861589978672484,
        phaseCost: 920137,
      },
      sourceReductionResults: { workDays: 0.7311374028278093, onSiteDays: 0.7311374028278093, phaseCost: 87628 },
      decontaminationResults: {
        workDays: 11.02958459780309,
        onSiteDays: 11.862952621854598,
        phaseCost: 259000438610,
      },
      incidentCommandResults: { onSiteDays: 50.45568000335489, phaseCost: 155718 },
      otherResults: { otherCosts: 47785 },
      generalResults: { totalCost: 1908878, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.825208324481375,
        onSiteDays: 28.315745755162943,
        phaseCost: 590840,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.3502175885202397,
        onSiteDays: 12.549882578472085,
        phaseCost: 260643,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.1754259130016145,
        onSiteDays: 40.86562833363503,
        phaseCost: 851483,
      },
      sourceReductionResults: { workDays: 0.9465133827067331, onSiteDays: 0.9465133827067331, phaseCost: 137076 },
      decontaminationResults: {
        workDays: 7.871038538373783,
        onSiteDays: 8.579884175579037,
        phaseCost: 141765293959,
      },
      incidentCommandResults: { onSiteDays: 58.3920258919208, phaseCost: 176808 },
      otherResults: { otherCosts: 74392 },
      generalResults: { totalCost: 1675483, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.1853308799007851,
          onSiteDays: 6.346353499300806,
          phaseCost: 208512,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.6762615094010975,
          onSiteDays: 43.98038556374551,
          phaseCost: 2114340,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.861592389301883,
          onSiteDays: 50.32673906304631,
          phaseCost: 2322852,
        },
        sourceReductionResults: { workDays: 0.39779494851021396, onSiteDays: 0.39779494851021396, phaseCost: 31808 },
        decontaminationResults: {
          workDays: 11.56660986472075,
          onSiteDays: 12.767561112243579,
          phaseCost: 478701,
          otherCosts: 647652,
        },
        incidentCommandResults: { onSiteDays: 71.49209512380011, phaseCost: 221562 },
        otherResults: { otherCosts: 52134 },
        generalResults: { totalCost: 3754709, areaContaminated: 11350.6946843934, decontaminationRounds: 2 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.814641993579184,
          onSiteDays: 29.931407816886484,
          phaseCost: 1006036,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 8.00190950478899,
          onSiteDays: 70.45315456572914,
          phaseCost: 3183958,
        },
        totalCharacterizationSamplingResults: {
          workDays: 14.816551498368174,
          onSiteDays: 100.38456238261563,
          phaseCost: 4189994,
        },
        sourceReductionResults: { workDays: 3.5789181446398084, onSiteDays: 3.5789181446398084, phaseCost: 162565 },
        decontaminationResults: {
          workDays: 12.382562070941217,
          onSiteDays: 13.344178265040782,
          phaseCost: 121071,
          otherCosts: 421905,
        },
        incidentCommandResults: { onSiteDays: 125.30765879229622, phaseCost: 382150 },
        otherResults: { otherCosts: 145829 },
        generalResults: { totalCost: 5423514, areaContaminated: 11350.6946843934, decontaminationRounds: 2 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 1.5766693499817723,
        onSiteDays: 10.108492377426405,
        phaseCost: 526584,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 3.9187379050629536,
        onSiteDays: 9.394722077870629,
        phaseCost: 310387,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.495407255044726,
        onSiteDays: 19.503214455297034,
        phaseCost: 836971,
      },
      sourceReductionResults: { workDays: 0.8103407702889182, onSiteDays: 0.8103407702889182, phaseCost: 79784 },
      decontaminationResults: {
        workDays: 12.769970918486354,
        onSiteDays: 13.031852103311534,
        phaseCost: 419180343237,
      },
      incidentCommandResults: { onSiteDays: 41.34540732889749, phaseCost: 126725 },
      otherResults: { otherCosts: 61097 },
      generalResults: { totalCost: 1866994, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.3192530017900186,
        onSiteDays: 46.93769539581551,
        phaseCost: 874927,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.587288591094194,
        onSiteDays: 46.530242874569986,
        phaseCost: 918155,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.906541592884213,
        onSiteDays: 93.4679382703855,
        phaseCost: 1793082,
      },
      sourceReductionResults: { workDays: 0.9206293724239443, onSiteDays: 0.9206293724239443, phaseCost: 177177 },
      decontaminationResults: {
        workDays: 3.419872700800158,
        onSiteDays: 4.883789216373998,
        phaseCost: 337731186239,
      },
      incidentCommandResults: { onSiteDays: 107.27235685918345, phaseCost: 323924 },
      otherResults: { otherCosts: 86757 },
      generalResults: { totalCost: 2904910, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.2745889594898503,
          onSiteDays: 12.681280074387963,
          phaseCost: 448248,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.5533118089948156,
          onSiteDays: 3.2304801359187345,
          phaseCost: 76169,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.8279007684846658,
          onSiteDays: 15.911760210306698,
          phaseCost: 524417,
        },
        sourceReductionResults: { workDays: 0.5533952426662623, onSiteDays: 0.5533952426662623, phaseCost: 40252 },
        decontaminationResults: {
          workDays: 3.423937374358982,
          onSiteDays: 6.2245303723552565,
          phaseCost: 74004,
          otherCosts: 182603,
        },
        incidentCommandResults: { onSiteDays: 30.689685825328215, phaseCost: 93930 },
        otherResults: { otherCosts: 51985 },
        generalResults: { totalCost: 967191, areaContaminated: 5400.646580476466, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.9104565779902414,
          onSiteDays: 19.216441318926115,
          phaseCost: 429590,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 4.234746231914314,
          onSiteDays: 40.82891537928825,
          phaseCost: 1321523,
        },
        totalCharacterizationSamplingResults: {
          workDays: 8.145202809904555,
          onSiteDays: 60.04535669821436,
          phaseCost: 1751113,
        },
        sourceReductionResults: { workDays: 0.04239979397618105, onSiteDays: 0.04239979397618105, phaseCost: 4787 },
        decontaminationResults: {
          workDays: 19.51708458981409,
          onSiteDays: 19.55426514068485,
          phaseCost: 98799,
          otherCosts: 1064367,
        },
        incidentCommandResults: { onSiteDays: 87.6420216328754, phaseCost: 265370 },
        otherResults: { otherCosts: 88820 },
        generalResults: { totalCost: 3273256, areaContaminated: 5400.646580476466, decontaminationRounds: 3 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 5.280070853296447,
        onSiteDays: 33.44759703845588,
        phaseCost: 867781,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.2728032731102783,
        onSiteDays: 9.076356587918275,
        phaseCost: 223163,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.552874126406725,
        onSiteDays: 42.52395362637416,
        phaseCost: 1090944,
      },
      sourceReductionResults: { workDays: 3.5003186785039238, onSiteDays: 3.5003186785039238, phaseCost: 257850 },
      decontaminationResults: {
        workDays: 4.785465822970836,
        onSiteDays: 6.267256591298445,
        phaseCost: 226602156932,
      },
      incidentCommandResults: { onSiteDays: 60.29152889617653, phaseCost: 183487 },
      otherResults: { otherCosts: 63250 },
      generalResults: { totalCost: 1979065, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.3606881949925977,
        onSiteDays: 27.22523127715001,
        phaseCost: 550449,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 13.640279653998295,
        onSiteDays: 44.79204580064404,
        phaseCost: 784518,
      },
      totalCharacterizationSamplingResults: {
        workDays: 17.000967848990893,
        onSiteDays: 72.01727707779405,
        phaseCost: 1334967,
      },
      sourceReductionResults: { workDays: 2.2509132511944907, onSiteDays: 2.2509132511944907, phaseCost: 120117 },
      decontaminationResults: {
        workDays: 7.839056239425916,
        onSiteDays: 9.744217152182063,
        phaseCost: 392588359624,
      },
      incidentCommandResults: { onSiteDays: 92.0124074811706, phaseCost: 283139 },
      otherResults: { otherCosts: 71285 },
      generalResults: { totalCost: 2561720, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.5498929543002724,
          onSiteDays: 22.18470314523608,
          phaseCost: 787978,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.1401054461821105,
          onSiteDays: 30.90591366392298,
          phaseCost: 1054399,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.6899984004823825,
          onSiteDays: 53.09061680915906,
          phaseCost: 1842377,
        },
        sourceReductionResults: { workDays: 3.0053341602850026, onSiteDays: 3.0053341602850026, phaseCost: 462336 },
        decontaminationResults: {
          workDays: 7.043954053671088,
          onSiteDays: 7.979221084848796,
          phaseCost: 369964,
          otherCosts: 289004,
        },
        incidentCommandResults: { onSiteDays: 72.07517205429286, phaseCost: 217397 },
        otherResults: { otherCosts: 88855 },
        generalResults: { totalCost: 3269933, areaContaminated: 12149.267684935889, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.8976456367602195,
          onSiteDays: 27.26814940862643,
          phaseCost: 1099095,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 17.479917680711267,
          onSiteDays: 46.71224206199395,
          phaseCost: 1478015,
        },
        totalCharacterizationSamplingResults: {
          workDays: 22.377563317471488,
          onSiteDays: 73.98039147062038,
          phaseCost: 2577110,
        },
        sourceReductionResults: { workDays: 2.1088250794358765, onSiteDays: 2.1088250794358765, phaseCost: 144766 },
        decontaminationResults: {
          workDays: 4.506903706934979,
          onSiteDays: 5.810605168996986,
          phaseCost: 158395,
          otherCosts: 105992,
        },
        incidentCommandResults: { onSiteDays: 89.89982171905324, phaseCost: 273373 },
        otherResults: { otherCosts: 111068 },
        generalResults: { totalCost: 3370704, areaContaminated: 12149.267684935889, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.9788472886871584,
        onSiteDays: 4.306156639191825,
        phaseCost: 126940,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.9131203686901008,
        onSiteDays: 4.975720721848726,
        phaseCost: 215348,
      },
      totalCharacterizationSamplingResults: {
        workDays: 1.8919676573772592,
        onSiteDays: 9.28187736104055,
        phaseCost: 342288,
      },
      sourceReductionResults: { workDays: 0.21796744407578847, onSiteDays: 0.21796744407578847, phaseCost: 37717 },
      decontaminationResults: {
        workDays: 17.914465148447654,
        onSiteDays: 19.834967445310895,
        phaseCost: 53854597850,
      },
      incidentCommandResults: { onSiteDays: 37.334812250427234, phaseCost: 115068 },
      otherResults: { otherCosts: 56408 },
      generalResults: { totalCost: 1203185, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.7139709944741783,
        onSiteDays: 9.007237281866622,
        phaseCost: 337415,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.677794459673148,
        onSiteDays: 20.68727087335006,
        phaseCost: 1112751,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.391765454147325,
        onSiteDays: 29.69450815521668,
        phaseCost: 1450166,
      },
      sourceReductionResults: { workDays: 0.3444394574305711, onSiteDays: 0.3444394574305711, phaseCost: 81078 },
      decontaminationResults: {
        workDays: 3.5959881177628388,
        onSiteDays: 6.082283929940845,
        phaseCost: 52731245386,
      },
      incidentCommandResults: { onSiteDays: 44.1212315425881, phaseCost: 134946 },
      otherResults: { otherCosts: 88448 },
      generalResults: { totalCost: 2052755, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.6188119922396123,
          onSiteDays: 15.042096952665613,
          phaseCost: 365706,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.4517057413531536,
          onSiteDays: 19.36223036668393,
          phaseCost: 412995,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.070517733592766,
          onSiteDays: 34.40432731934955,
          phaseCost: 778701,
        },
        sourceReductionResults: { workDays: 0.004177791353801113, onSiteDays: 0.004177791353801113, phaseCost: 4402 },
        decontaminationResults: {
          workDays: 4.659867714545658,
          onSiteDays: 6.977080879261969,
          phaseCost: 204925,
          otherCosts: 270758,
        },
        incidentCommandResults: { onSiteDays: 49.38558598996532, phaseCost: 148877 },
        otherResults: { otherCosts: 82610 },
        generalResults: { totalCost: 1490273, areaContaminated: 5586.205786230556, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 0.5151550269417482,
          onSiteDays: 4.8190865676177,
          phaseCost: 153115,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.16515228953317,
          onSiteDays: 17.55090918150053,
          phaseCost: 436090,
        },
        totalCharacterizationSamplingResults: {
          workDays: 3.6803073164749183,
          onSiteDays: 22.369995749118228,
          phaseCost: 589205,
        },
        sourceReductionResults: { workDays: 1.2369455305564363, onSiteDays: 1.2369455305564363, phaseCost: 30228 },
        decontaminationResults: {
          workDays: 4.470714435789435,
          onSiteDays: 5.119225081084116,
          phaseCost: 24003,
          otherCosts: 216871,
        },
        incidentCommandResults: { onSiteDays: 36.72616636075878, phaseCost: 113898 },
        otherResults: { otherCosts: 72536 },
        generalResults: { totalCost: 1046741, areaContaminated: 5586.205786230556, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.448647312737897,
        onSiteDays: 22.91878076269484,
        phaseCost: 1227597,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 7.407036990192392,
        onSiteDays: 21.670460731223375,
        phaseCost: 873659,
      },
      totalCharacterizationSamplingResults: {
        workDays: 10.855684302930289,
        onSiteDays: 44.589241493918216,
        phaseCost: 2101256,
      },
      sourceReductionResults: { workDays: 0.3721204505572616, onSiteDays: 0.3721204505572616, phaseCost: 34243 },
      decontaminationResults: {
        workDays: 8.834349499278318,
        onSiteDays: 10.54882277002298,
        phaseCost: 28072321545,
      },
      incidentCommandResults: { onSiteDays: 63.51018471449846, phaseCost: 195860 },
      otherResults: { otherCosts: 87869 },
      generalResults: { totalCost: 2768845, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.2504726344770525,
        onSiteDays: 12.499137122709211,
        phaseCost: 295559,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 0.8643056430259243,
        onSiteDays: 7.359783057504794,
        phaseCost: 205008,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.114778277502976,
        onSiteDays: 19.858920180214007,
        phaseCost: 500567,
      },
      sourceReductionResults: { workDays: 1.4361106284499132, onSiteDays: 1.4361106284499132, phaseCost: 237078 },
      decontaminationResults: {
        workDays: 7.1168711341723965,
        onSiteDays: 8.986304245420337,
        phaseCost: 138938152954,
      },
      incidentCommandResults: { onSiteDays: 38.28133505408426, phaseCost: 118716 },
      otherResults: { otherCosts: 107991 },
      generalResults: { totalCost: 1256244, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 1.6386919082509364,
          onSiteDays: 13.493358989794611,
          phaseCost: 515835,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.5787026119469565,
          onSiteDays: 15.447837135740173,
          phaseCost: 524144,
        },
        totalCharacterizationSamplingResults: {
          workDays: 4.217394520197892,
          onSiteDays: 28.941196125534784,
          phaseCost: 1039979,
        },
        sourceReductionResults: { workDays: 0.4295406423627896, onSiteDays: 0.4295406423627896, phaseCost: 21462 },
        decontaminationResults: {
          workDays: 8.115945403025473,
          onSiteDays: 8.910135471473945,
          phaseCost: 111446,
          otherCosts: 479349,
        },
        incidentCommandResults: { onSiteDays: 46.28087223937152, phaseCost: 142596 },
        otherResults: { otherCosts: 99644 },
        generalResults: { totalCost: 1894476, areaContaminated: 10980.311074755227, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 2.37527826232524,
          onSiteDays: 17.298000873016992,
          phaseCost: 564180,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 5.144119896130942,
          onSiteDays: 24.029743987430273,
          phaseCost: 774408,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.519398158456182,
          onSiteDays: 41.32774486044727,
          phaseCost: 1338588,
        },
        sourceReductionResults: { workDays: 2.344592218291535, onSiteDays: 2.344592218291535, phaseCost: 185344 },
        decontaminationResults: {
          workDays: 4.79130901158585,
          onSiteDays: 6.19945016554544,
          phaseCost: 121459,
          otherCosts: 257895,
        },
        incidentCommandResults: { onSiteDays: 57.87178724428425, phaseCost: 179508 },
        otherResults: { otherCosts: 74762 },
        generalResults: { totalCost: 2157556, areaContaminated: 10980.311074755227, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.0133992872585456,
        onSiteDays: 30.700692622465553,
        phaseCost: 642988,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.4585027200095246,
        onSiteDays: 15.155448289321539,
        phaseCost: 303462,
      },
      totalCharacterizationSamplingResults: {
        workDays: 5.471902007268071,
        onSiteDays: 45.856140911787094,
        phaseCost: 946450,
      },
      sourceReductionResults: { workDays: 3.006727337337165, onSiteDays: 3.006727337337165, phaseCost: 414620 },
      decontaminationResults: {
        workDays: 16.518669197456603,
        onSiteDays: 19.25872612168517,
        phaseCost: 359064764441,
      },
      incidentCommandResults: { onSiteDays: 76.12159437080943, phaseCost: 235158 },
      otherResults: { otherCosts: 131134 },
      generalResults: { totalCost: 2850867, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 7.309883281430787,
        onSiteDays: 36.28147361622458,
        phaseCost: 804961,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.0278700173786295,
        onSiteDays: 8.57295426210697,
        phaseCost: 208961,
      },
      totalCharacterizationSamplingResults: {
        workDays: 8.337753298809417,
        onSiteDays: 44.85442787833155,
        phaseCost: 1013922,
      },
      sourceReductionResults: { workDays: 2.7250898864635156, onSiteDays: 2.7250898864635156, phaseCost: 237538 },
      decontaminationResults: {
        workDays: 3.696822025975404,
        onSiteDays: 6.39945929506781,
        phaseCost: 116835225526,
      },
      incidentCommandResults: { onSiteDays: 61.97897705986287, phaseCost: 189923 },
      otherResults: { otherCosts: 100482 },
      generalResults: { totalCost: 1884226, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.859583381679759,
          onSiteDays: 28.44070207113837,
          phaseCost: 612016,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 1.58532268922563,
          onSiteDays: 16.01398494058007,
          phaseCost: 387680,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.444906070905389,
          onSiteDays: 44.45468701171844,
          phaseCost: 999696,
        },
        sourceReductionResults: { workDays: 8.193639971180176, onSiteDays: 8.193639971180176, phaseCost: 274664 },
        decontaminationResults: {
          workDays: 3.3278636006470452,
          onSiteDays: 5.756316590531803,
          phaseCost: 116931,
          otherCosts: 189843,
        },
        incidentCommandResults: { onSiteDays: 66.40464357343042, phaseCost: 202665 },
        otherResults: { otherCosts: 100970 },
        generalResults: { totalCost: 1884769, areaContaminated: 9440.843666540655, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.568754983920103,
          onSiteDays: 15.636585450905892,
          phaseCost: 780765,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 0.8769517202618009,
          onSiteDays: 6.774350612544064,
          phaseCost: 294589,
        },
        totalCharacterizationSamplingResults: {
          workDays: 5.445706704181903,
          onSiteDays: 22.410936063449956,
          phaseCost: 1075354,
        },
        sourceReductionResults: { workDays: 6.50666249647982, onSiteDays: 6.50666249647982, phaseCost: 244190 },
        decontaminationResults: {
          workDays: 7.929279063346161,
          onSiteDays: 8.125622859719586,
          phaseCost: 76362,
          otherCosts: 387655,
        },
        incidentCommandResults: { onSiteDays: 45.04322141964936, phaseCost: 136627 },
        otherResults: { otherCosts: 150994 },
        generalResults: { totalCost: 2071182, areaContaminated: 9440.843666540655, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.9422107837754111,
        onSiteDays: 6.945775438889038,
        phaseCost: 255885,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.70606893832455,
        onSiteDays: 19.219904550940054,
        phaseCost: 797543,
      },
      totalCharacterizationSamplingResults: {
        workDays: 3.648279722099961,
        onSiteDays: 26.165679989829094,
        phaseCost: 1053428,
      },
      sourceReductionResults: { workDays: 0.11953196894165131, onSiteDays: 0.11953196894165131, phaseCost: 11342 },
      decontaminationResults: {
        workDays: 13.880437917746706,
        onSiteDays: 16.36395834837201,
        phaseCost: 290211709829,
      },
      incidentCommandResults: { onSiteDays: 50.649170307142754, phaseCost: 155304 },
      otherResults: { otherCosts: 135082 },
      generalResults: { totalCost: 2355196, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 0.8253504649531294,
        onSiteDays: 10.023608918964408,
        phaseCost: 240862,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 10.527390014794335,
        onSiteDays: 48.98828802431066,
        phaseCost: 1315573,
      },
      totalCharacterizationSamplingResults: {
        workDays: 11.352740479747464,
        onSiteDays: 59.01189694327507,
        phaseCost: 1556435,
      },
      sourceReductionResults: { workDays: 3.0092512964298797, onSiteDays: 3.0092512964298797, phaseCost: 604728 },
      decontaminationResults: {
        workDays: 12.325815824169156,
        onSiteDays: 12.760277227675607,
        phaseCost: 141989542456,
      },
      incidentCommandResults: { onSiteDays: 82.78142546738056, phaseCost: 254465 },
      otherResults: { otherCosts: 86112 },
      generalResults: { totalCost: 3186185, areaContaminated: 10000, decontaminationRounds: 2 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 3.9170575071229465,
          onSiteDays: 12.124156314965763,
          phaseCost: 281877,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.521578759934121,
          onSiteDays: 18.305384043775998,
          phaseCost: 648669,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.438636267057067,
          onSiteDays: 30.42954035874176,
          phaseCost: 930546,
        },
        sourceReductionResults: { workDays: 1.1173024889778953, onSiteDays: 1.1173024889778953, phaseCost: 140790 },
        decontaminationResults: {
          workDays: 6.547567174897429,
          onSiteDays: 7.512984440548575,
          phaseCost: 145184,
          otherCosts: 366872,
        },
        incidentCommandResults: { onSiteDays: 47.05982728826823, phaseCost: 141634 },
        otherResults: { otherCosts: 66251 },
        generalResults: { totalCost: 1791277, areaContaminated: 13521.039867429303, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.411943743131207,
          onSiteDays: 19.608712269429503,
          phaseCost: 1035264,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 2.080284321894393,
          onSiteDays: 12.27868610910282,
          phaseCost: 670776,
        },
        totalCharacterizationSamplingResults: {
          workDays: 6.4922280650256,
          onSiteDays: 31.887398378532325,
          phaseCost: 1706040,
        },
        sourceReductionResults: { workDays: 0.22073397420406898, onSiteDays: 0.22073397420406898, phaseCost: 38743 },
        decontaminationResults: {
          workDays: 4.360463385786969,
          onSiteDays: 4.454029692209798,
          phaseCost: 560471,
          otherCosts: 215304,
        },
        incidentCommandResults: { onSiteDays: 44.56216204494619, phaseCost: 137858 },
        otherResults: { otherCosts: 49583 },
        generalResults: { totalCost: 2707999, areaContaminated: 13521.039867429303, decontaminationRounds: 1 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 4.056509275883252,
        onSiteDays: 15.37394314964308,
        phaseCost: 849291,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 2.396985694323034,
        onSiteDays: 7.818922865548467,
        phaseCost: 318278,
      },
      totalCharacterizationSamplingResults: {
        workDays: 6.453494970206286,
        onSiteDays: 23.192866015191548,
        phaseCost: 1167569,
      },
      sourceReductionResults: { workDays: 0.6512005690926722, onSiteDays: 0.6512005690926722, phaseCost: 163206 },
      decontaminationResults: {
        workDays: 17.629274381238332,
        onSiteDays: 19.937358090173767,
        phaseCost: 175074939468,
      },
      incidentCommandResults: { onSiteDays: 51.78142467445799, phaseCost: 156039 },
      otherResults: { otherCosts: 92516 },
      generalResults: { totalCost: 2693872, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.2218538472201974,
        onSiteDays: 8.846214646766246,
        phaseCost: 255312,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 1.1047796673367052,
        onSiteDays: 7.967404112129039,
        phaseCost: 347453,
      },
      totalCharacterizationSamplingResults: {
        workDays: 4.326633514556903,
        onSiteDays: 16.813618758895284,
        phaseCost: 602765,
      },
      sourceReductionResults: { workDays: 0.014559544529632588, onSiteDays: 0.014559544529632588, phaseCost: 10354 },
      decontaminationResults: {
        workDays: 11.934683228594876,
        onSiteDays: 13.63921514727157,
        phaseCost: 282648816626,
      },
      incidentCommandResults: { onSiteDays: 38.467393450696484, phaseCost: 117234 },
      otherResults: { otherCosts: 92114 },
      generalResults: { totalCost: 1921741, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
  {
    Indoor: {
      Commercial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 4.078561018365108,
          onSiteDays: 45.49778793031142,
          phaseCost: 1159153,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 3.2017039641964473,
          onSiteDays: 11.962552986552987,
          phaseCost: 197380,
        },
        totalCharacterizationSamplingResults: {
          workDays: 7.2802649825615555,
          onSiteDays: 57.4603409168644,
          phaseCost: 1356533,
        },
        sourceReductionResults: { workDays: 4.656003651725848, onSiteDays: 4.656003651725848, phaseCost: 396447 },
        decontaminationResults: {
          workDays: 10.191918185258265,
          onSiteDays: 11.950514452986074,
          phaseCost: 482212,
          otherCosts: 214453,
        },
        incidentCommandResults: { onSiteDays: 82.06685902157632, phaseCost: 252029 },
        otherResults: { otherCosts: 119457 },
        generalResults: { totalCost: 2821131, areaContaminated: 13278.291215719257, decontaminationRounds: 1 },
      },
      Industrial: {
        preDeconCharacterizationSamplingResults: {
          workDays: 6.304420655441547,
          onSiteDays: 15.305302227665306,
          phaseCost: 830899,
        },
        postDeconCharacterizationSamplingResults: {
          workDays: 11.84908284758616,
          onSiteDays: 68.44771560411904,
          phaseCost: 6161054,
        },
        totalCharacterizationSamplingResults: {
          workDays: 18.153503503027707,
          onSiteDays: 83.75301783178435,
          phaseCost: 6991953,
        },
        sourceReductionResults: { workDays: 3.0353065296958244, onSiteDays: 3.0353065296958244, phaseCost: 449456 },
        decontaminationResults: {
          workDays: 14.767392967540628,
          onSiteDays: 17.46843404706298,
          phaseCost: 79929,
          otherCosts: 490270,
        },
        incidentCommandResults: { onSiteDays: 112.25675840854316, phaseCost: 347024 },
        otherResults: { otherCosts: 63189 },
        generalResults: { totalCost: 8421821, areaContaminated: 13278.291215719257, decontaminationRounds: 3 },
      },
    },
    Outdoor: {
      preDeconCharacterizationSamplingResults: {
        workDays: 3.1561087818810822,
        onSiteDays: 17.567355664018827,
        phaseCost: 289459,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 4.734653325811454,
        onSiteDays: 38.27556801808241,
        phaseCost: 751978,
      },
      totalCharacterizationSamplingResults: {
        workDays: 7.890762107692536,
        onSiteDays: 55.84292368210124,
        phaseCost: 1041437,
      },
      sourceReductionResults: { workDays: 0.8394737908322627, onSiteDays: 0.8394737908322627, phaseCost: 49848 },
      decontaminationResults: {
        workDays: 8.320806354824642,
        onSiteDays: 11.15459581607827,
        phaseCost: 72218274405,
      },
      incidentCommandResults: { onSiteDays: 75.83699328901177, phaseCost: 235230 },
      otherResults: { otherCosts: 51462 },
      generalResults: { totalCost: 1724600, areaContaminated: 10000, decontaminationRounds: 1 },
    },
    Underground: {
      preDeconCharacterizationSamplingResults: {
        workDays: 9.835264223225897,
        onSiteDays: 35.928573922621666,
        phaseCost: 689942,
      },
      postDeconCharacterizationSamplingResults: {
        workDays: 10.61397044700287,
        onSiteDays: 43.779059906487085,
        phaseCost: 791453,
      },
      totalCharacterizationSamplingResults: {
        workDays: 20.44923467022877,
        onSiteDays: 79.70763382910874,
        phaseCost: 1481395,
      },
      sourceReductionResults: { workDays: 1.6149792951190756, onSiteDays: 1.6149792951190756, phaseCost: 82242 },
      decontaminationResults: {
        workDays: 4.9255469846365845,
        onSiteDays: 7.626709598262494,
        phaseCost: 174547369073,
      },
      incidentCommandResults: { onSiteDays: 96.94932272249031, phaseCost: 295359 },
      otherResults: { otherCosts: 70004 },
      generalResults: { totalCost: 2472620, areaContaminated: 10000, decontaminationRounds: 1 },
    },
  },
];

export default mockResults;
