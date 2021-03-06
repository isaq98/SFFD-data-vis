let sourceData2016 = [ { zipcode: '94102',
    callCount: 39922,
    neighborhood: 'Tenderloin',
    'Potentially Life-Threatening': 22054,
    'Non Life-threatening': 9880,
    Alarm: 7524,
    Fire: 431,
    '': 33 },
  { zipcode: '94103',
    callCount: 39712,
    neighborhood: 'Mission',
    'Non Life-threatening': 10252,
    'Potentially Life-Threatening': 21528,
    Fire: 660,
    Alarm: 7241,
    '': 31 },
  { zipcode: '94104',
    callCount: 2386,
    neighborhood: 'Financial District/South Beach',
    Alarm: 818,
    'Potentially Life-Threatening': 1009,
    'Non Life-threatening': 498,
    Fire: 60,
    '': 1 },
  { zipcode: '94105',
    callCount: 7961,
    neighborhood: 'Financial District/South Beach',
    Alarm: 2316,
    'Potentially Life-Threatening': 3641,
    'Non Life-threatening': 1786,
    Fire: 213,
    '': 5 },
  { zipcode: '94107',
    callCount: 12915,
    neighborhood: 'South of Market',
    'Potentially Life-Threatening': 5978,
    Fire: 521,
    Alarm: 3467,
    'Non Life-threatening': 2931,
    '': 18 },
  { zipcode: '94108',
    callCount: 6847,
    neighborhood: 'Chinatown',
    'Potentially Life-Threatening': 2986,
    Alarm: 2381,
    'Non Life-threatening': 1323,
    Fire: 155,
    '': 2 },
  { zipcode: '94109',
    callCount: 26212,
    neighborhood: 'Tenderloin',
    'Potentially Life-Threatening': 13181,
    'Non Life-threatening': 6225,
    Alarm: 6413,
    Fire: 369,
    '': 24 },
  { zipcode: '94110',
    callCount: 23648,
    neighborhood: 'Mission',
    'Potentially Life-Threatening': 12064,
    'Non Life-threatening': 5903,
    Alarm: 4649,
    Fire: 1010,
    '': 22 },
  { zipcode: '94111',
    callCount: 5722,
    neighborhood: 'Financial District/South Beach',
    'Potentially Life-Threatening': 2435,
    Alarm: 1812,
    'Non Life-threatening': 1204,
    Fire: 270,
    '': 1 },
  { zipcode: '94112',
    callCount: 13578,
    neighborhood: 'Outer Mission',
    'Potentially Life-Threatening': 6841,
    'Non Life-threatening': 3478,
    Alarm: 2902,
    Fire: 338,
    '': 19 },
  { zipcode: '94114',
    callCount: 9446,
    neighborhood: 'Castro/Upper Market',
    'Non Life-threatening': 2221,
    'Potentially Life-Threatening': 4584,
    Alarm: 2318,
    Fire: 315,
    '': 8 },
  { zipcode: '94115',
    callCount: 12354,
    neighborhood: 'Western Addition',
    Alarm: 3330,
    'Non Life-threatening': 2829,
    'Potentially Life-Threatening': 5988,
    Fire: 203,
    '': 4 },
  { zipcode: '94116',
    callCount: 5998,
    neighborhood: 'Sunset/Parkside',
    Alarm: 1284,
    'Potentially Life-Threatening': 2934,
    'Non Life-threatening': 1564,
    Fire: 216 },
  { zipcode: '94117',
    callCount: 9978,
    neighborhood: 'Hayes Valley',
    Alarm: 2456,
    'Potentially Life-Threatening': 4913,
    'Non Life-threatening': 2338,
    Fire: 268,
    '': 3 },
  { zipcode: '94118',
    callCount: 8554,
    neighborhood: 'Inner Richmond',
    'Non Life-threatening': 2222,
    'Potentially Life-Threatening': 3925,
    Alarm: 2279,
    Fire: 121,
    '': 7 },
  { zipcode: '94121',
    callCount: 7891,
    neighborhood: 'Outer Richmond',
    'Non Life-threatening': 1812,
    'Potentially Life-Threatening': 3497,
    Fire: 600,
    Alarm: 1973,
    '': 9 },
  { zipcode: '94122',
    callCount: 10023,
    neighborhood: 'Sunset/Parkside',
    Fire: 472,
    Alarm: 2061,
    'Non Life-threatening': 2432,
    'Potentially Life-Threatening': 5049,
    '': 9 },
  { zipcode: '94123',
    callCount: 6271,
    neighborhood: 'Marina',
    'Non Life-threatening': 1233,
    Alarm: 2422,
    'Potentially Life-Threatening': 2375,
    Fire: 227,
    '': 14 },
  { zipcode: '94124',
    callCount: 14810,
    neighborhood: 'Bayview Hunters Point',
    'Potentially Life-Threatening': 7445,
    'Non Life-threatening': 3456,
    Alarm: 2949,
    Fire: 935,
    '': 25 },
  { zipcode: '94127',
    callCount: 2693,
    neighborhood: 'West of Twin Peaks',
    'Non Life-threatening': 677,
    Alarm: 751,
    'Potentially Life-Threatening': 1196,
    '': 19,
    Fire: 50 },
  { zipcode: '94129',
    callCount: 1542,
    neighborhood: 'Presidio',
    'Non Life-threatening': 273,
    'Potentially Life-Threatening': 317,
    Alarm: 388,
    Fire: 546,
    '': 18 },
  { zipcode: '94130',
    callCount: 2191,
    neighborhood: 'Treasure Island',
    'Non Life-threatening': 602,
    Fire: 273,
    'Potentially Life-Threatening': 952,
    Alarm: 364 },
  { zipcode: '94131',
    callCount: 5247,
    neighborhood: 'Glen Park',
    'Non Life-threatening': 1168,
    Alarm: 1728,
    'Potentially Life-Threatening': 2204,
    Fire: 139,
    '': 8 },
  { zipcode: '94132',
    callCount: 7308,
    neighborhood: 'Lakeshore',
    Fire: 433,
    'Potentially Life-Threatening': 2763,
    'Non Life-threatening': 1874,
    Alarm: 2179,
    '': 59 },
  { zipcode: '94133',
    callCount: 11454,
    neighborhood: 'North Beach',
    'Potentially Life-Threatening': 5434,
    Alarm: 3056,
    'Non Life-threatening': 2638,
    Fire: 320,
    '': 6 },
  { zipcode: '94134',
    callCount: 7530,
    neighborhood: 'Portola',
    'Potentially Life-Threatening': 3858,
    Fire: 293,
    'Non Life-threatening': 1935,
    Alarm: 1427,
    '': 17 },
  { zipcode: '94158',
    callCount: 2438,
    neighborhood: 'Mission Bay',
    'Non Life-threatening': 524,
    Alarm: 776,
    'Potentially Life-Threatening': 1042,
    Fire: 89,
    '': 7 } ]
