//preamble is the first 25 numbers prior to a given integer
//if an integer is not the sum of a non-repeated pair of any two numbers in the preamble, it is the weakness

function findWeakness(data) {
    //return integer as soon as it is identified as the weakness
  
    //iterate over data starting with the 26th element
    for (let i = 25; i < data.length; i++) {
    //take subset of data consisting of 25 previous integers prior to comparison element
    let preamble = data.slice(i - 25, i);
    let comparison = data[i];
    let weakness = true;
      //start combining each of the subset integers, checking for non-repetion of numbers in the pair as well as summing to the value of comparison element
      for (let j = 0; j < preamble.length; j++) {
        for (let k = 0; k < preamble.length; k++) {
  
          //element is not the same nor are separate elements equal
          if ((j !== k) && (preamble[j] !== preamble[k])) {
  
            //eliminates possibility of comparison element as weakness
            if (preamble[j] + preamble[k] === comparison) {
              weakness = false;
            }
            //________________________________________________________
  
          }
        }
      }
      //if none of the non-repeating elements do not sum to the comparison element, return comparison element
      if (weakness) {
        return comparison;
      }
    //continue until end of data array or until weakness is found
    }
  }
  
  
  const dataSet = [
  21,
  10,
  24,
  31,
  33,
  15,
  29,
  34,
  42,
  13,
  26,
  4,
  5,
  6,
  46,
  27,
  23,
  39,
  35,
  50,
  30,
  1,
  9,
  25,
  3,
  7,
  37,
  8,
  12,
  44,
  10,
  11,
  15,
  20,
  14,
  16,
  19,
  4,
  5,
  6,
  13,
  17,
  18,
  21,
  27,
  22,
  23,
  24,
  28,
  9,
  26,
  25,
  29,
  30,
  31,
  32,
  10,
  33,
  11,
  40,
  15,
  34,
  14,
  19,
  16,
  37,
  42,
  41,
  46,
  36,
  39,
  20,
  44,
  21,
  23,
  24,
  59,
  53,
  26,
  38,
  30,
  25,
  60,
  67,
  55,
  29,
  62,
  33,
  40,
  43,
  45,
  58,
  88,
  97,
  65,
  41,
  46,
  47,
  114,
  118,
  76,
  51,
  122,
  70,
  165,
  54,
  66,
  84,
  69,
  72,
  73,
  166,
  110,
  164,
  86,
  182,
  163,
  159,
  87,
  93,
  155,
  97,
  321,
  120,
  158,
  105,
  117,
  138,
  171,
  123,
  480,
  246,
  153,
  141,
  145,
  160,
  269,
  179,
  173,
  180,
  190,
  243,
  184,
  192,
  198,
  202,
  217,
  222,
  312,
  228,
  321,
  240,
  261,
  440,
  264,
  286,
  351,
  294,
  305,
  353,
  364,
  352,
  357,
  371,
  370,
  374,
  376,
  533,
  665,
  400,
  555,
  439,
  450,
  468,
  525,
  501,
  504,
  746,
  637,
  591,
  580,
  599,
  646,
  722,
  705,
  709,
  744,
  727,
  741,
  1001,
  1638,
  776,
  839,
  1150,
  850,
  1245,
  972,
  918,
  1026,
  1757,
  1005,
  1084,
  2234,
  1413,
  1302,
  1179,
  1594,
  1746,
  1414,
  1468,
  1591,
  1471,
  1503,
  1517,
  1615,
  1689,
  1955,
  2184,
  2772,
  2783,
  2385,
  2476,
  1944,
  2031,
  2263,
  2386,
  3039,
  2647,
  2481,
  2985,
  2593,
  3209,
  2917,
  2882,
  2939,
  2974,
  2988,
  3458,
  3132,
  5019,
  4678,
  3899,
  5251,
  4910,
  5033,
  3975,
  4207,
  4294,
  5237,
  8491,
  5371,
  5564,
  6071,
  5074,
  5475,
  5510,
  5799,
  6049,
  5913,
  9929,
  7282,
  6120,
  7031,
  8653,
  7874,
  8193,
  9771,
  13524,
  8182,
  11274,
  11039,
  8501,
  9368,
  10311,
  10549,
  10445,
  10584,
  10873,
  10985,
  11388,
  17866,
  14702,
  13923,
  12033,
  14313,
  13151,
  14621,
  28236,
  19148,
  17561,
  26929,
  16683,
  17550,
  17869,
  19486,
  18812,
  18946,
  19679,
  20756,
  21833,
  25311,
  21457,
  26090,
  22373,
  25956,
  31304,
  51267,
  26654,
  48762,
  65580,
  27772,
  34244,
  43506,
  35419,
  34552,
  37229,
  34233,
  38306,
  82995,
  37758,
  38491,
  42213,
  40435,
  44206,
  62268,
  50145,
  43830,
  48329,
  53677,
  52610,
  85719,
  61206,
  65145,
  62005,
  80382,
  62016,
  68477,
  78439,
  68785,
  120753,
  71462,
  130493,
  76797,
  76249,
  117232,
  109351,
  82648,
  140707,
  88036,
  92159,
  105835,
  202712,
  100939,
  182632,
  113816,
  169724,
  123211,
  124021,
  130801,
  133478,
  137262,
  254523,
  154688,
  147711,
  148259,
  158897,
  164285,
  153046,
  270740,
  170684,
  271732,
  174807,
  201852,
  180195,
  274791,
  206774,
  214755,
  249198,
  257499,
  416396,
  247232,
  333241,
  254822,
  354898,
  335330,
  333704,
  301305,
  295970,
  300757,
  307156,
  311943,
  317331,
  323730,
  376659,
  602130,
  381581,
  355002,
  382047,
  469577,
  421529,
  663628,
  461987,
  504020,
  1125615,
  647273,
  561978,
  550792,
  717499,
  688602,
  852097,
  630886,
  596727,
  607913,
  612700,
  619099,
  931042,
  803576,
  974101,
  1225606,
  737049,
  736583,
  1133205,
  1112770,
  883516,
  925549,
  966007,
  1012779,
  1054812,
  1220613,
  1147519,
  1158705,
  1163492,
  1204640,
  1209427,
  1215826,
  1227012,
  1231799,
  1344496,
  1349283,
  1355682,
  2086871,
  1473632,
  1620099,
  1620565,
  1662132,
  1702590,
  1809065,
  2222206,
  2084254,
  1938328,
  2067591,
  3704819,
  2281824,
  2306224,
  2368132,
  2587481,
  2372919,
  2414067,
  2425253,
  3449218,
  2458811,
  2829314,
  2700178,
  2822915,
  3322689,
  3094197,
  5874471,
  3240664,
  3558893,
  3364722,
  5927025,
  5104739,
  5646546,
  4022582,
  4005919,
  4349415,
  4588048,
  4695891,
  6149396,
  4872878,
  4786986,
  6152003,
  5794375,
  10847894,
  5917112,
  7790088,
  5523093,
  5940842,
  6063579,
  6334861,
  8345879,
  6605386,
  15720772,
  6923615,
  7370641,
  10938989,
  10310079,
  8028501,
  11586672,
  8355334,
  9375034,
  12243519,
  11317468,
  9659864,
  10395971,
  18309630,
  11440205,
  11463935,
  12251973,
  11857954,
  12275703,
  12004421,
  12398440,
  14363362,
  23692178,
  13529001,
  13976027,
  19615173,
  15278949,
  35935697,
  16383835,
  17403535,
  21884335,
  17730368,
  18015198,
  19034898,
  20055835,
  34136308,
  21100069,
  21836176,
  22904140,
  23298159,
  24133657,
  28659538,
  23862375,
  24280124,
  29734789,
  20874512,
  27505028,
  28807950,
  29254976,
  32682484,
  45698551,
  31662784,
  44335959,
  33787370,
  35133903,
  53388633,
  35745566,
  37050096,
  61292398,
  42959975,
  41974581,
  42710688,
  51091152,
  51957697,
  44172671,
  44736887,
  53535100,
  72832209,
  45154636,
  48379540,
  49682462,
  56312978,
  78456254,
  115542897,
  68712880,
  65450154,
  73637365,
  97871059,
  139087519,
  70879469,
  77720147,
  79918237,
  79024677,
  94837098,
  90354121,
  86883359,
  87447575,
  105995440,
  89327307,
  88909558,
  89891523,
  93534176,
  98062002,
  101467614,
  104692518,
  121763132,
  157622438,
  134163034,
  136329623,
  139592349,
  143170301,
  157638384,
  156744824,
  148599616,
  167047454,
  223088538,
  199529616,
  242133792,
  176357133,
  174330934,
  176210666,
  185509577,
  178236865,
  348129232,
  491299533,
  310520167,
  191596178,
  202754520,
  206160132,
  300808685,
  255926166,
  270492657,
  317829214,
  275921972,
  457421563,
  432666796,
  305344440,
  326836481,
  315647070,
  341378388,
  391125794,
  481701573,
  626167237,
  350541600,
  621034257,
  659938438,
  941814307,
  369833043,
  476652789,
  394350698,
  706772864,
  509425392,
  408914652,
  462086298,
  526418823,
  531848138,
  546414629,
  581266412,
  958354362,
  620991510,
  632180921,
  642483551,
  657025458,
  1029771481,
  759456252,
  720374643,
  1327764374,
  876960423,
  744892298,
  871000950,
  764183741,
  1240836530,
  778747695,
  803265350,
  1043352710,
  1041273530,
  935333475,
  940762790,
  1274664472,
  1058266961,
  1078262767,
  1188898180,
  1202257922,
  1263475061,
  1352555564,
  1299509009,
  1362858194,
  1523639993,
  1597335066,
  1562721602,
  1842446508,
  1509076039,
  1542931436,
  1548157648,
  1649748645,
  1582013045,
  1714081170,
  2532668541,
  1993600436,
  1876096265,
  2124231655,
  1999029751,
  2019025557,
  2136529728,
  2410822525,
  2267160947,
  3561956993,
  2465732983,
  2616030625,
  2652064573,
  2662367203,
  3066571429,
  3032716032,
  3052007475,
  3276802772,
  3262238818,
  3124944481,
  3192680081,
  3296094215,
  3231761690,
  6387183299,
  3590177435,
  5316911736,
  3869696701,
  3875126016,
  4266190698,
  4464762734,
  4155555285,
  4403690675,
  4677983472,
  4732893930,
  5081763608,
  5117797556,
  7137364834,
  5314431776,
  5695083235,
  6084723507,
  6572896987,
  6348101690,
  6317624562,
  6356706171,
  6421038696,
  7171220231,
  12929603158,
  6821939125,
  10839087685,
  8833538757,
  7744822717,
  8025251986,
  8030681301,
  8421745983,
  8559245960,
  12219128442,
  13539543539,
  11870258764,
  12777744867,
  10199561164,
  11474503727,
  11009515011,
  25148731600,
  11779806742,
  14317719704,
  12665726252,
  14980284656,
  12674330733,
  19219326444,
  14446290682,
  13993159356,
  14566761842,
  14847191111,
  16858790743,
  15770074703,
  17944383881,
  25792223431,
  16452427284,
  18621307147,
  18758807124,
  31937543237,
  22789321753,
  21209076175,
  22873891897,
  22484018738,
  24140229979,
  27120621415,
  48666115328,
  24445532994,
  25340056985,
  31424533376,
  26667490089,
  37331209849,
  28439450038,
  46504305079,
  28559921198,
  33325568966,
  30617265814,
  32628865446,
  34528881827,
  95170420407,
  39241749037,
  35073734431,
  45741928562,
  55564763355,
  45349306154,
  49604640153,
  44082968072,
  46624248717,
  46929551732,
  48585762973,
  49785589979,
  96228888870,
  53005454192,
  59984454574,
  129699302234,
  59056715852,
  56999371236,
  59177187012,
  61188786644,
  61885490164,
  63246131260,
  65146147641,
  67157747273,
  69602616258,
  74315483468,
  79156702503,
  80423040585,
  89432274226,
  90707216789,
  91012519804,
  98371352952,
  111831894233,
  93553800449,
  95515314705,
  105585134209,
  106784961215,
  110004825428,
  112062170044,
  128392278901,
  148609461238,
  116056087088,
  122423318272,
  120365973656,
  136200973632,
  125131621424,
  134748763899,
  132303894914,
  197797481019,
  154738524053,
  186147377701,
  172710502952,
  169855314811,
  197492178004,
  181719736593,
  248263143676,
  207347208938,
  201100448914,
  189069115154,
  202300275920,
  212370095424,
  226060912516,
  264743349481,
  228118257132,
  236422060744,
  314023631507,
  352478147832,
  305014397866,
  255114737555,
  257435516338,
  279870145477,
  267052658813,
  287042418967,
  351575051404,
  324593838864,
  383639555705,
  458535965252,
  358924429965,
  486734134459,
  571459147845,
  589337188345,
  429218706046,
  390169564068,
  391369391074,
  493113571329,
  438431007940,
  454179169648,
  714763402932,
  464540317876,
  491536798299,
  713650702807,
  618627710217,
  537305661815,
  995841627067,
  524488175151,
  546922804290,
  881706362367,
  638617470371,
  1097290258512,
  683518268829,
  742563985670,
  749093994033,
  750293821039,
  980706579419,
  1361191695887,
  1061793836966,
  781538955142,
  1240630792332,
  855909708950,
  892610177588,
  902971325816,
  1011463122166,
  956077116175,
  989028493027,
  1016024973450,
  1332278413024,
  1071410979441,
  1328461759432,
  1163105645522,
  1185540274661,
  1230441073119,
  2321306906051,
  1322135739200,
  1859048441991,
  1426082254499,
  1492857806709,
  2754544013931,
  1531832776181,
  1918996299266,
  1684510280958,
  1793002077308,
  1967079229803,
  3207710022135,
  1748519886538,
  1795581503404,
  1891999818843,
  1945105609202,
  1972102089625,
  2005053466477,
  2508882780159,
  2755921260399,
  2234516624963,
  3714577802670,
  2348645920183,
  2507676013861,
  2814993545909,
  2748217993699,
  3006646020158,
  2918940061208,
  3216343057139,
  3024690582890,
  3603506580224,
  3280352662719,
  4548923337707,
  3897053285320,
  3541521963846,
  3544101389942,
  3640519705381,
  3687581322247,
  3767683593029,
  5754864013857,
  3917207698827,
  3977155556102,
  4239570091440,
  4990437885362,
  4583162545146,
  4742192638824,
  4856321934044,
  5096863913882,
  6686623654237,
  5667158054907,
  5772908576589,
  7085623353788,
  6896095617310,
  6241033640029,
  6305043245609,
  7177405948039,
  7441154675262,
  7311784982971,
  7231682712189,
  7182041669227,
  7184621095323,
  7557727404208,
  9839056552706,
  14489190931010,
  7894363254929,
  8156777790267,
  11542945588281,
  15597932465529,
  12752781408695,
  9325355183970,
  10764021968789,
  9953185847926,
  10869772490471,
  11440066631496,
  11972201300516,
  18658385223718,
  12546076885638,
  13137129257339,
  13798761044237,
  13616828228580,
  17219718438899,
  14493826652198,
  14496406078294,
  14366662764550,
  14739769073435,
  21681027173617,
  28106019159590,
  17482132974237,
  19596844421763,
  21511191483509,
  20765421815466,
  19278541031896,
  20089377152759,
  20195127674441,
  20822958338397,
  33645203796446,
  38255229645481,
  22309839121967,
  23412267932012,
  25770962344753
  ]
  
  findWeakness(dataSet);