const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/test', async (req, res) => {
        res.json({
            "legs": [
              {
                "id": "BLR-DEL:6E415~1:6E2339~1:0",   
                "departureTime": "08:40",              
                "arrivalTime": "15:20",                 
                "duration": "06h 40m",                   
                "departureAirportCode": "BLR",            
                "arrivalAirportCode": "DEL",               
                "airlineCodes": [ 
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "JAI"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 520,
                "arrivalTimeMinutes": 920,
                "departureDateTime": "2022-02-01T08:40:00.000+05:30",
                "arrivalDateTime": "2022-02-01T15:20:00.000+05:30",
                "stopoverDurationMinutes": 170,
                "durationMinutes": 400,               
                "overnight": false,
                "stopoverDuration": "02h 50m",           
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 170,
                    "stopoverDurationMinutes": 170,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "JAI",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E415",
                    "departureDateTime": "2022-02-01T08:40:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T11:30:00.000+05:30"
                  },
                  {
                    "durationMinutes": 60,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "JAI",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2339",
                    "departureDateTime": "2022-02-01T14:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T15:20:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 853.33
              },
              {
                "id": "BLR-DEL:6E6491~1:6E643~1:0",
                "departureTime": "13:05",
                "arrivalTime": "18:10",
                "duration": "05h 05m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 785,
                "arrivalTimeMinutes": 1090,
                "departureDateTime": "2022-02-01T13:05:00.000+05:30",
                "arrivalDateTime": "2022-02-01T18:10:00.000+05:30",
                "stopoverDurationMinutes": 100,
                "durationMinutes": 305,
                "overnight": false,
                "stopoverDuration": "01h 40m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 70,
                    "stopoverDurationMinutes": 100,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6491",
                    "departureDateTime": "2022-02-01T13:05:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T14:15:00.000+05:30"
                  },
                  {
                    "durationMinutes": 135,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E643",
                    "departureDateTime": "2022-02-01T15:55:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T18:10:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 856.33
              },
              {
                "id": "BLR-DEL:6E2027~1:0",
                "departureTime": "11:55",
                "arrivalTime": "14:50",
                "duration": "02h 55m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 0,
                "departureTimeMinutes": 715,
                "arrivalTimeMinutes": 890,
                "departureDateTime": "2022-02-01T11:55:00.000+05:30",
                "arrivalDateTime": "2022-02-01T14:50:00.000+05:30",
                "stopoverDurationMinutes": 0,
                "durationMinutes": 175,
                "overnight": false,
                "stopoverDuration": "00h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 175,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2027",
                    "departureDateTime": "2022-02-01T11:55:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T14:50:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "DIRECT",
                "shortStopover": true,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 976
              },
              {
                "id": "BLR-DEL:6E2186~1:0",
                "departureTime": "07:50",
                "arrivalTime": "10:50",
                "duration": "03h",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 0,
                "departureTimeMinutes": 470,
                "arrivalTimeMinutes": 650,
                "departureDateTime": "2022-02-01T07:50:00.000+05:30",
                "arrivalDateTime": "2022-02-01T10:50:00.000+05:30",
                "stopoverDurationMinutes": 0,
                "durationMinutes": 180,
                "overnight": false,
                "stopoverDuration": "00h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 180,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2186",
                    "departureDateTime": "2022-02-01T07:50:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T10:50:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "DIRECT",
                "shortStopover": true,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 964
              },
              {
                "id": "BLR-DEL:6E2514~1:0",
                "departureTime": "16:30",
                "arrivalTime": "19:20",
                "duration": "02h 50m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 0,
                "departureTimeMinutes": 990,
                "arrivalTimeMinutes": 1160,
                "departureDateTime": "2022-02-01T16:30:00.000+05:30",
                "arrivalDateTime": "2022-02-01T19:20:00.000+05:30",
                "stopoverDurationMinutes": 0,
                "durationMinutes": 170,
                "overnight": false,
                "stopoverDuration": "00h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 170,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2514",
                    "departureDateTime": "2022-02-01T16:30:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T19:20:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "DIRECT",
                "shortStopover": true,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 976
              },
              {
                "id": "BLR-DEL:6E886~1:6E643~1:0",
                "departureTime": "09:20",
                "arrivalTime": "18:10",
                "duration": "08h 50m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 560,
                "arrivalTimeMinutes": 1090,
                "departureDateTime": "2022-02-01T09:20:00.000+05:30",
                "arrivalDateTime": "2022-02-01T18:10:00.000+05:30",
                "stopoverDurationMinutes": 315,
                "durationMinutes": 530,
                "overnight": false,
                "stopoverDuration": "05h 15m",
                "durationDays": 0,
                "longStopover": true,
                "segments": [
                  {
                    "durationMinutes": 80,
                    "stopoverDurationMinutes": 315,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E886",
                    "departureDateTime": "2022-02-01T09:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T10:40:00.000+05:30"
                  },
                  {
                    "durationMinutes": 135,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E643",
                    "departureDateTime": "2022-02-01T15:55:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T18:10:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 832.17
              },
              {
                "id": "BLR-DEL:6E6257~1:6E2093~1:0",
                "departureTime": "06:10",
                "arrivalTime": "11:55",
                "duration": "05h 45m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 370,
                "arrivalTimeMinutes": 715,
                "departureDateTime": "2022-02-01T06:10:00.000+05:30",
                "arrivalDateTime": "2022-02-01T11:55:00.000+05:30",
                "stopoverDurationMinutes": 140,
                "durationMinutes": 345,
                "overnight": false,
                "stopoverDuration": "02h 20m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 70,
                    "stopoverDurationMinutes": 140,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6257",
                    "departureDateTime": "2022-02-01T06:10:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T07:20:00.000+05:30"
                  },
                  {
                    "durationMinutes": 135,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2093",
                    "departureDateTime": "2022-02-01T09:40:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T11:55:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 857
              },
              {
                "id": "BLR-DEL:6E6104~1:6E2481~1:0",
                "departureTime": "11:20",
                "arrivalTime": "16:30",
                "duration": "05h 10m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "PNQ"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 680,
                "arrivalTimeMinutes": 990,
                "departureDateTime": "2022-02-01T11:20:00.000+05:30",
                "arrivalDateTime": "2022-02-01T16:30:00.000+05:30",
                "stopoverDurationMinutes": 80,
                "durationMinutes": 310,
                "overnight": false,
                "stopoverDuration": "01h 20m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 100,
                    "stopoverDurationMinutes": 80,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "PNQ",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6104",
                    "departureDateTime": "2022-02-01T11:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T13:00:00.000+05:30"
                  },
                  {
                    "durationMinutes": 130,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "PNQ",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2481",
                    "departureDateTime": "2022-02-01T14:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T16:30:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 852.67
              },
              {
                "id": "BLR-DEL:6E6753~1:6E2134~1:0",
                "departureTime": "10:05",
                "arrivalTime": "15:30",
                "duration": "05h 25m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "NAG"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 605,
                "arrivalTimeMinutes": 930,
                "departureDateTime": "2022-02-01T10:05:00.000+05:30",
                "arrivalDateTime": "2022-02-01T15:30:00.000+05:30",
                "stopoverDurationMinutes": 100,
                "durationMinutes": 325,
                "overnight": false,
                "stopoverDuration": "01h 40m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 110,
                    "stopoverDurationMinutes": 100,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "NAG",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6753",
                    "departureDateTime": "2022-02-01T10:05:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T11:55:00.000+05:30"
                  },
                  {
                    "durationMinutes": 115,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "NAG",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2134",
                    "departureDateTime": "2022-02-01T13:35:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T15:30:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 867
              },
              {
                "id": "BLR-DEL:6E6257~1:6E2248~1:0",
                "departureTime": "06:10",
                "arrivalTime": "16:10",
                "duration": "10h",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 370,
                "arrivalTimeMinutes": 970,
                "departureDateTime": "2022-02-01T06:10:00.000+05:30",
                "arrivalDateTime": "2022-02-01T16:10:00.000+05:30",
                "stopoverDurationMinutes": 380,
                "durationMinutes": 600,
                "overnight": false,
                "stopoverDuration": "06h 20m",
                "durationDays": 0,
                "longStopover": true,
                "segments": [
                  {
                    "durationMinutes": 70,
                    "stopoverDurationMinutes": 380,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6257",
                    "departureDateTime": "2022-02-01T06:10:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T07:20:00.000+05:30"
                  },
                  {
                    "durationMinutes": 150,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2248",
                    "departureDateTime": "2022-02-01T13:40:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T16:10:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 816.67
              },
              {
                "id": "BLR-DEL:6E2337~1:0",
                "departureTime": "09:30",
                "arrivalTime": "12:15",
                "duration": "02h 45m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 0,
                "departureTimeMinutes": 570,
                "arrivalTimeMinutes": 735,
                "departureDateTime": "2022-02-01T09:30:00.000+05:30",
                "arrivalDateTime": "2022-02-01T12:15:00.000+05:30",
                "stopoverDurationMinutes": 0,
                "durationMinutes": 165,
                "overnight": false,
                "stopoverDuration": "00h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 165,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2337",
                    "departureDateTime": "2022-02-01T09:30:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T12:15:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "DIRECT",
                "shortStopover": true,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 976
              },
              {
                "id": "BLR-DEL:6E528~1:6E2369~1:0",
                "departureTime": "17:15",
                "arrivalTime": "22:40",
                "duration": "05h 25m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "PNQ"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 1035,
                "arrivalTimeMinutes": 1360,
                "departureDateTime": "2022-02-01T17:15:00.000+05:30",
                "arrivalDateTime": "2022-02-01T22:40:00.000+05:30",
                "stopoverDurationMinutes": 105,
                "durationMinutes": 325,
                "overnight": false,
                "stopoverDuration": "01h 45m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 90,
                    "stopoverDurationMinutes": 105,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "PNQ",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E528",
                    "departureDateTime": "2022-02-01T17:15:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T18:45:00.000+05:30"
                  },
                  {
                    "durationMinutes": 130,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "PNQ",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2369",
                    "departureDateTime": "2022-02-01T20:30:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T22:40:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 845.83
              },
              {
                "id": "BLR-DEL:6E2174~1:0",
                "departureTime": "17:50",
                "arrivalTime": "20:45",
                "duration": "02h 55m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 0,
                "departureTimeMinutes": 1070,
                "arrivalTimeMinutes": 1245,
                "departureDateTime": "2022-02-01T17:50:00.000+05:30",
                "arrivalDateTime": "2022-02-01T20:45:00.000+05:30",
                "stopoverDurationMinutes": 0,
                "durationMinutes": 175,
                "overnight": false,
                "stopoverDuration": "00h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 175,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2174",
                    "departureDateTime": "2022-02-01T17:50:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T20:45:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "DIRECT",
                "shortStopover": true,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 976
              },
              {
                "id": "BLR-DEL:6E528~1:6E672~1:0",
                "departureTime": "17:15",
                "arrivalTime": "02:05",
                "duration": "08h 50m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "PNQ"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 1035,
                "arrivalTimeMinutes": 125,
                "departureDateTime": "2022-02-01T17:15:00.000+05:30",
                "arrivalDateTime": "2022-02-02T02:05:00.000+05:30",
                "stopoverDurationMinutes": 310,
                "durationMinutes": 530,
                "overnight": true,
                "stopoverDuration": "05h 10m",
                "durationDays": 1,
                "longStopover": true,
                "segments": [
                  {
                    "durationMinutes": 90,
                    "stopoverDurationMinutes": 310,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "PNQ",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E528",
                    "departureDateTime": "2022-02-01T17:15:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T18:45:00.000+05:30"
                  },
                  {
                    "durationMinutes": 130,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "PNQ",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E672",
                    "departureDateTime": "2022-02-01T23:55:00.000+05:30",
                    "arrivalDateTime": "2022-02-02T02:05:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 833
              },
              {
                "id": "BLR-DEL:6E436~1:6E2481~1:0",
                "departureTime": "05:15",
                "arrivalTime": "16:30",
                "duration": "11h 15m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "PNQ"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 315,
                "arrivalTimeMinutes": 990,
                "departureDateTime": "2022-02-01T05:15:00.000+05:30",
                "arrivalDateTime": "2022-02-01T16:30:00.000+05:30",
                "stopoverDurationMinutes": 455,
                "durationMinutes": 675,
                "overnight": false,
                "stopoverDuration": "07h 35m",
                "durationDays": 0,
                "longStopover": true,
                "segments": [
                  {
                    "durationMinutes": 90,
                    "stopoverDurationMinutes": 455,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "PNQ",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E436",
                    "departureDateTime": "2022-02-01T05:15:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T06:45:00.000+05:30"
                  },
                  {
                    "durationMinutes": 130,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "PNQ",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2481",
                    "departureDateTime": "2022-02-01T14:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T16:30:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": true,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 779.17
              },
              {
                "id": "BLR-DEL:6E886~1:6E2248~1:0",
                "departureTime": "09:20",
                "arrivalTime": "16:10",
                "duration": "06h 50m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 560,
                "arrivalTimeMinutes": 970,
                "departureDateTime": "2022-02-01T09:20:00.000+05:30",
                "arrivalDateTime": "2022-02-01T16:10:00.000+05:30",
                "stopoverDurationMinutes": 180,
                "durationMinutes": 410,
                "overnight": false,
                "stopoverDuration": "03h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 80,
                    "stopoverDurationMinutes": 180,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E886",
                    "departureDateTime": "2022-02-01T09:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T10:40:00.000+05:30"
                  },
                  {
                    "durationMinutes": 150,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2248",
                    "departureDateTime": "2022-02-01T13:40:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T16:10:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 852.67
              },
              {
                "id": "BLR-DEL:6E276~1:6E648~1:0",
                "departureTime": "15:20",
                "arrivalTime": "20:25",
                "duration": "05h 05m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "JAI"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 920,
                "arrivalTimeMinutes": 1225,
                "departureDateTime": "2022-02-01T15:20:00.000+05:30",
                "arrivalDateTime": "2022-02-01T20:25:00.000+05:30",
                "stopoverDurationMinutes": 90,
                "durationMinutes": 305,
                "overnight": false,
                "stopoverDuration": "01h 30m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 160,
                    "stopoverDurationMinutes": 90,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "JAI",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E276",
                    "departureDateTime": "2022-02-01T15:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T18:00:00.000+05:30"
                  },
                  {
                    "durationMinutes": 55,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "JAI",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E648",
                    "departureDateTime": "2022-02-01T19:30:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T20:25:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 866.67
              },
              {
                "id": "BLR-DEL:6E6139~1:0",
                "departureTime": "14:00",
                "arrivalTime": "16:45",
                "duration": "02h 45m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 0,
                "departureTimeMinutes": 840,
                "arrivalTimeMinutes": 1005,
                "departureDateTime": "2022-02-01T14:00:00.000+05:30",
                "arrivalDateTime": "2022-02-01T16:45:00.000+05:30",
                "stopoverDurationMinutes": 0,
                "durationMinutes": 165,
                "overnight": false,
                "stopoverDuration": "00h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 165,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6139",
                    "departureDateTime": "2022-02-01T14:00:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T16:45:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "DIRECT",
                "shortStopover": true,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 976
              },
              {
                "id": "BLR-DEL:6E6535~1:6E2194~1:0",
                "departureTime": "11:40",
                "arrivalTime": "17:35",
                "duration": "05h 55m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "IDR"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 700,
                "arrivalTimeMinutes": 1055,
                "departureDateTime": "2022-02-01T11:40:00.000+05:30",
                "arrivalDateTime": "2022-02-01T17:35:00.000+05:30",
                "stopoverDurationMinutes": 120,
                "durationMinutes": 355,
                "overnight": false,
                "stopoverDuration": "02h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 145,
                    "stopoverDurationMinutes": 120,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "IDR",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6535",
                    "departureDateTime": "2022-02-01T11:40:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T14:05:00.000+05:30"
                  },
                  {
                    "durationMinutes": 90,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "IDR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2194",
                    "departureDateTime": "2022-02-01T16:05:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T17:35:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 856.33
              },
              {
                "id": "BLR-DEL:6E6491~1:6E6684~1:0",
                "departureTime": "13:05",
                "arrivalTime": "23:45",
                "duration": "10h 40m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 785,
                "arrivalTimeMinutes": 1425,
                "departureDateTime": "2022-02-01T13:05:00.000+05:30",
                "arrivalDateTime": "2022-02-01T23:45:00.000+05:30",
                "stopoverDurationMinutes": 435,
                "durationMinutes": 640,
                "overnight": false,
                "stopoverDuration": "07h 15m",
                "durationDays": 0,
                "longStopover": true,
                "segments": [
                  {
                    "durationMinutes": 70,
                    "stopoverDurationMinutes": 435,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6491",
                    "departureDateTime": "2022-02-01T13:05:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T14:15:00.000+05:30"
                  },
                  {
                    "durationMinutes": 135,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6684",
                    "departureDateTime": "2022-02-01T21:30:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T23:45:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": true,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 794.83
              },
              {
                "id": "BLR-DEL:6E6067~1:6E6684~1:0",
                "departureTime": "16:20",
                "arrivalTime": "23:45",
                "duration": "07h 25m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 980,
                "arrivalTimeMinutes": 1425,
                "departureDateTime": "2022-02-01T16:20:00.000+05:30",
                "arrivalDateTime": "2022-02-01T23:45:00.000+05:30",
                "stopoverDurationMinutes": 220,
                "durationMinutes": 445,
                "overnight": false,
                "stopoverDuration": "03h 40m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 90,
                    "stopoverDurationMinutes": 220,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6067",
                    "departureDateTime": "2022-02-01T16:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T17:50:00.000+05:30"
                  },
                  {
                    "durationMinutes": 135,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6684",
                    "departureDateTime": "2022-02-01T21:30:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T23:45:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": true,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 840.33
              },
              {
                "id": "BLR-DEL:6E886~1:6E2456~1:0",
                "departureTime": "09:20",
                "arrivalTime": "19:55",
                "duration": "10h 35m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 560,
                "arrivalTimeMinutes": 1195,
                "departureDateTime": "2022-02-01T09:20:00.000+05:30",
                "arrivalDateTime": "2022-02-01T19:55:00.000+05:30",
                "stopoverDurationMinutes": 430,
                "durationMinutes": 635,
                "overnight": false,
                "stopoverDuration": "07h 10m",
                "durationDays": 0,
                "longStopover": true,
                "segments": [
                  {
                    "durationMinutes": 80,
                    "stopoverDurationMinutes": 430,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E886",
                    "departureDateTime": "2022-02-01T09:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T10:40:00.000+05:30"
                  },
                  {
                    "durationMinutes": 125,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2456",
                    "departureDateTime": "2022-02-01T17:50:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T19:55:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 806
              },
              {
                "id": "BLR-DEL:6E6491~1:6E2456~1:0",
                "departureTime": "13:05",
                "arrivalTime": "19:55",
                "duration": "06h 50m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "HYD"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 785,
                "arrivalTimeMinutes": 1195,
                "departureDateTime": "2022-02-01T13:05:00.000+05:30",
                "arrivalDateTime": "2022-02-01T19:55:00.000+05:30",
                "stopoverDurationMinutes": 215,
                "durationMinutes": 410,
                "overnight": false,
                "stopoverDuration": "03h 35m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 70,
                    "stopoverDurationMinutes": 215,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "HYD",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6491",
                    "departureDateTime": "2022-02-01T13:05:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T14:15:00.000+05:30"
                  },
                  {
                    "durationMinutes": 125,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "HYD",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2456",
                    "departureDateTime": "2022-02-01T17:50:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T19:55:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 852.67
              },
              {
                "id": "BLR-DEL:6E6535~1:6E2279~1:0",
                "departureTime": "11:40",
                "arrivalTime": "21:20",
                "duration": "09h 40m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "IDR"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 700,
                "arrivalTimeMinutes": 1280,
                "departureDateTime": "2022-02-01T11:40:00.000+05:30",
                "arrivalDateTime": "2022-02-01T21:20:00.000+05:30",
                "stopoverDurationMinutes": 355,
                "durationMinutes": 580,
                "overnight": false,
                "stopoverDuration": "05h 55m",
                "durationDays": 0,
                "longStopover": true,
                "segments": [
                  {
                    "durationMinutes": 145,
                    "stopoverDurationMinutes": 355,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "IDR",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6535",
                    "departureDateTime": "2022-02-01T11:40:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T14:05:00.000+05:30"
                  },
                  {
                    "durationMinutes": 80,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "IDR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2279",
                    "departureDateTime": "2022-02-01T20:00:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T21:20:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 822.17
              },
              {
                "id": "BLR-DEL:6E6393~1:6E175~1:0",
                "departureTime": "06:05",
                "arrivalTime": "13:40",
                "duration": "07h 35m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "IDR"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 365,
                "arrivalTimeMinutes": 820,
                "departureDateTime": "2022-02-01T06:05:00.000+05:30",
                "arrivalDateTime": "2022-02-01T13:40:00.000+05:30",
                "stopoverDurationMinutes": 220,
                "durationMinutes": 455,
                "overnight": false,
                "stopoverDuration": "03h 40m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 150,
                    "stopoverDurationMinutes": 220,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "IDR",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6393",
                    "departureDateTime": "2022-02-01T06:05:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T08:35:00.000+05:30"
                  },
                  {
                    "durationMinutes": 85,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "IDR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E175",
                    "departureDateTime": "2022-02-01T12:15:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T13:40:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 849.67
              },
              {
                "id": "BLR-DEL:6E2034~1:0",
                "departureTime": "19:15",
                "arrivalTime": "22:10",
                "duration": "02h 55m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 0,
                "departureTimeMinutes": 1155,
                "arrivalTimeMinutes": 1330,
                "departureDateTime": "2022-02-01T19:15:00.000+05:30",
                "arrivalDateTime": "2022-02-01T22:10:00.000+05:30",
                "stopoverDurationMinutes": 0,
                "durationMinutes": 175,
                "overnight": false,
                "stopoverDuration": "00h",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 175,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E2034",
                    "departureDateTime": "2022-02-01T19:15:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T22:10:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "DIRECT",
                "shortStopover": true,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 966
              },
              {
                "id": "BLR-DEL:6E6104~1:6E587~1:0",
                "departureTime": "11:20",
                "arrivalTime": "18:30",
                "duration": "07h 10m",
                "departureAirportCode": "BLR",
                "arrivalAirportCode": "DEL",
                "airlineCodes": [
                  "6E"
                ],
                "stopoverAirportCodes": [
                  "PNQ"
                ],
                "allianceCodes": [
                  ""
                ],
                "stopoversCount": 1,
                "departureTimeMinutes": 680,
                "arrivalTimeMinutes": 1110,
                "departureDateTime": "2022-02-01T11:20:00.000+05:30",
                "arrivalDateTime": "2022-02-01T18:30:00.000+05:30",
                "stopoverDurationMinutes": 195,
                "durationMinutes": 430,
                "overnight": false,
                "stopoverDuration": "03h 15m",
                "durationDays": 0,
                "longStopover": false,
                "segments": [
                  {
                    "durationMinutes": 100,
                    "stopoverDurationMinutes": 195,
                    "departureAirportCode": "BLR",
                    "arrivalAirportCode": "PNQ",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E6104",
                    "departureDateTime": "2022-02-01T11:20:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T13:00:00.000+05:30"
                  },
                  {
                    "durationMinutes": 135,
                    "stopoverDurationMinutes": 0,
                    "departureAirportCode": "PNQ",
                    "arrivalAirportCode": "DEL",
                    "airlineCode": "6E",
                    "cabin": "economy",
                    "designatorCode": "6E587",
                    "departureDateTime": "2022-02-01T16:15:00.000+05:30",
                    "arrivalDateTime": "2022-02-01T18:30:00.000+05:30"
                  }
                ],
                "operatingAirlineCodes": [],
                "stopoverCode": "ONE_STOP",
                "shortStopover": false,
                "earlyDeparture": false,
                "lateArrival": false,
                "newAircraft": false,
                "oldAircraft": true,
                "highlyRatedCarrier": false,
                "score": 851.33
              }
            ],
            "tags": [],
            "search": {
              "id": "304704d38d6dc367msr",
              "cabin": "economy",
              "adultsCount": 2,
              "childrenCount": 0,
              "infantsCount": 1,
              "siteCode": "US",
              "currencyCode": "USD",
              "locale": "en",
              "deviceType": "desktop",
              "appType": "WEB_APP",
              "createdAt": "2022-01-18T13:33:25.534Z",
              "key": "[BLR:DEL:2022-02-01]~2~0~1~US~economy~desktop~WEB_APP",
              "userCountryCode": "IT",
              "legs": [
                {
                  "id": "BLR:DEL:2022-02-01",
                  "outboundDate": "2022-02-01",
                  "departureAirportCode": "BLR",
                  "arrivalAirportCode": "DEL",
                  "departureCity": {
                    "code": "BLR",
                    "name": "Bangalore",
                    "enName": "Bangalore",
                    "countryCode": "IN",
                    "countryName": "India",
                    "countryEnName": "India",
                    "worldRegionCode": "i",
                    "worldRegionName": "Asia",
                    "worldRegionEnName": "Asia"
                  },
                  "arrivalCity": {
                    "code": "DEL",
                    "name": "New Delhi",
                    "enName": "New Delhi",
                    "countryCode": "IN",
                    "countryName": "India",
                    "countryEnName": "India",
                    "worldRegionCode": "i",
                    "worldRegionName": "Asia",
                    "worldRegionEnName": "Asia"
                  },
                  "departureAirport": {
                    "name": "Bangalore (Bengaluru) Airport",
                    "code": "BLR",
                    "cityCode": "BLR"
                  },
                  "arrivalAirport": {
                    "name": "Delhi Airport",
                    "code": "DEL",
                    "cityCode": "DEL"
                  }
                }
              ]
            },
            "airlines": [                   
              {
                "name": "IndiGo",
                "code": "6E"
              }
            ],
            "airports": [
              {
                "name": "Bangalore (Bengaluru) Airport",
                "code": "BLR",
                "cityCode": "BLR"
              },
              {
                "name": "Delhi Airport",
                "code": "DEL",
                "cityCode": "DEL"
              },
              {
                "name": "Indore Airport",
                "code": "IDR",
                "cityCode": "IDR"
              },
              {
                "name": "Jaipur Airport",
                "code": "JAI",
                "cityCode": "JAI"
              },
              {
                "name": "Nagpur Airport",
                "code": "NAG",
                "cityCode": "NAG"
              },
              {
                "name": "Pune Airport",
                "code": "PNQ",
                "cityCode": "PNQ"
              },
              {
                "name": "Shamshabad Airport",
                "code": "HYD",
                "cityCode": "HYD"
              }
            ],
            "cities": [                      //
              {
                "code": "BLR",
                "name": "Bangalore",
                "countryCode": "IN"
              },
              {
                "code": "HYD",
                "name": "Hyderabad",
                "countryCode": "IN"
              },
              {
                "code": "IDR",
                "name": "Indore",
                "countryCode": "IN"
              },
              {
                "code": "JAI",
                "name": "Jaipur",
                "countryCode": "IN"
              },
              {
                "code": "NAG",
                "name": "Nagpur",
                "countryCode": "IN"
              },
              {
                "code": "DEL",
                "name": "New Delhi",
                "countryCode": "IN"
              },
              {
                "code": "PNQ",
                "name": "Pune",
                "countryCode": "IN"
              }
            ],
            "providers": [
              {
                "code": "goindigo.in",
                "name": "Goindigo",
                "type": "airline",
                "instant": false,
                "facilitatedBooking": false,
                "wegoFare": false
              }
            ],
            "countries": [
              {
                "code": "IN",
                "name": "India"
              },
              {
                "code": "IN",
                "name": "India"
              },
              {
                "code": "IN",
                "name": "India"
              },
              {
                "code": "IN",
                "name": "India"
              },
              {
                "code": "IN",
                "name": "India"
              },
              {
                "code": "IN",
                "name": "India"
              },
              {
                "code": "IN",
                "name": "India"
              }
            ],
            "trips": [                                           
              {
                "id": "304704d38d6dc367msr:6E886~1-6E643~1",
                "code": "6E886~1-6E643~1",
                "legIds": [
                  "BLR-DEL:6E886~1:6E643~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6535~1-6E2279~1",
                "code": "6E6535~1-6E2279~1",
                "legIds": [
                  "BLR-DEL:6E6535~1:6E2279~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E2034~1",
                "code": "6E2034~1",
                "legIds": [
                  "BLR-DEL:6E2034~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6257~1-6E2248~1",
                "code": "6E6257~1-6E2248~1",
                "legIds": [
                  "BLR-DEL:6E6257~1:6E2248~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6535~1-6E2194~1",
                "code": "6E6535~1-6E2194~1",
                "legIds": [
                  "BLR-DEL:6E6535~1:6E2194~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E528~1-6E672~1",
                "code": "6E528~1-6E672~1",
                "legIds": [
                  "BLR-DEL:6E528~1:6E672~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6753~1-6E2134~1",
                "code": "6E6753~1-6E2134~1",
                "legIds": [
                  "BLR-DEL:6E6753~1:6E2134~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E886~1-6E2248~1",
                "code": "6E886~1-6E2248~1",
                "legIds": [
                  "BLR-DEL:6E886~1:6E2248~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E886~1-6E2456~1",
                "code": "6E886~1-6E2456~1",
                "legIds": [
                  "BLR-DEL:6E886~1:6E2456~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6104~1-6E2481~1",
                "code": "6E6104~1-6E2481~1",
                "legIds": [
                  "BLR-DEL:6E6104~1:6E2481~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E436~1-6E2481~1",
                "code": "6E436~1-6E2481~1",
                "legIds": [
                  "BLR-DEL:6E436~1:6E2481~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E2514~1",
                "code": "6E2514~1",
                "legIds": [
                  "BLR-DEL:6E2514~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E2174~1",
                "code": "6E2174~1",
                "legIds": [
                  "BLR-DEL:6E2174~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6104~1-6E587~1",
                "code": "6E6104~1-6E587~1",
                "legIds": [
                  "BLR-DEL:6E6104~1:6E587~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E415~1-6E2339~1",
                "code": "6E415~1-6E2339~1",
                "legIds": [
                  "BLR-DEL:6E415~1:6E2339~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6491~1-6E2456~1",
                "code": "6E6491~1-6E2456~1",
                "legIds": [
                  "BLR-DEL:6E6491~1:6E2456~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6067~1-6E6684~1",
                "code": "6E6067~1-6E6684~1",
                "legIds": [
                  "BLR-DEL:6E6067~1:6E6684~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6139~1",
                "code": "6E6139~1",
                "legIds": [
                  "BLR-DEL:6E6139~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6393~1-6E175~1",
                "code": "6E6393~1-6E175~1",
                "legIds": [
                  "BLR-DEL:6E6393~1:6E175~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6491~1-6E643~1",
                "code": "6E6491~1-6E643~1",
                "legIds": [
                  "BLR-DEL:6E6491~1:6E643~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6257~1-6E2093~1",
                "code": "6E6257~1-6E2093~1",
                "legIds": [
                  "BLR-DEL:6E6257~1:6E2093~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E276~1-6E648~1",
                "code": "6E276~1-6E648~1",
                "legIds": [
                  "BLR-DEL:6E276~1:6E648~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E2027~1",
                "code": "6E2027~1",
                "legIds": [
                  "BLR-DEL:6E2027~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E2337~1",
                "code": "6E2337~1",
                "legIds": [
                  "BLR-DEL:6E2337~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E6491~1-6E6684~1",
                "code": "6E6491~1-6E6684~1",
                "legIds": [
                  "BLR-DEL:6E6491~1:6E6684~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E528~1-6E2369~1",
                "code": "6E528~1-6E2369~1",
                "legIds": [
                  "BLR-DEL:6E528~1:6E2369~1:0"
                ]
              },
              {
                "id": "304704d38d6dc367msr:6E2186~1",
                "code": "6E2186~1",
                "legIds": [
                  "BLR-DEL:6E2186~1:0"
                ]
              }
            ],
            "fares": [                                             
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:796d4f3d09b53979",          
                "price": {
                  "totalAmount": 219,
                  "totalAmountUsd": 219.06854,
                  "amount": 73,
                  "amountUsd": 73.02285,
                  "originalAmount": 69,
                  "originalAmountUsd": 69,
                  "amountPerAdult": 103,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:796d4f3d09b53979&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E2514~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:baaa0881ab81aedd",
                "price": {
                  "totalAmount": 219,
                  "totalAmountUsd": 219.06854,
                  "amount": 73,
                  "amountUsd": 73.02285,
                  "originalAmount": 69,
                  "originalAmountUsd": 69,
                  "amountPerAdult": 103,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:baaa0881ab81aedd&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E2186~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:cfb1b0a213a9608b",
                "price": {
                  "totalAmount": 219,
                  "totalAmountUsd": 219.06854,
                  "amount": 73,
                  "amountUsd": 73.02285,
                  "originalAmount": 69,
                  "originalAmountUsd": 69,
                  "amountPerAdult": 103,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:cfb1b0a213a9608b&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6139~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:99a94d090136a12c",
                "price": {
                  "totalAmount": 219,
                  "totalAmountUsd": 219.06854,
                  "amount": 73,
                  "amountUsd": 73.02285,
                  "originalAmount": 69,
                  "originalAmountUsd": 69,
                  "amountPerAdult": 103,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:99a94d090136a12c&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E2027~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:d149ecbec571b275",
                "price": {
                  "totalAmount": 219,
                  "totalAmountUsd": 219.06854,
                  "amount": 73,
                  "amountUsd": 73.02285,
                  "originalAmount": 69,
                  "originalAmountUsd": 69,
                  "amountPerAdult": 103,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:d149ecbec571b275&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E2337~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:a85b6974b92959be",
                "price": {
                  "totalAmount": 219,
                  "totalAmountUsd": 219.06854,
                  "amount": 73,
                  "amountUsd": 73.02285,
                  "originalAmount": 69,
                  "originalAmountUsd": 69,
                  "amountPerAdult": 103,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:a85b6974b92959be&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E2174~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:cdd9490715f77d48",
                "price": {
                  "totalAmount": 219,
                  "totalAmountUsd": 219.06854,
                  "amount": 73,
                  "amountUsd": 73.02285,
                  "originalAmount": 69,
                  "originalAmountUsd": 69,
                  "amountPerAdult": 103,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:cdd9490715f77d48&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E2034~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:760052c30a8ffa08",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:760052c30a8ffa08&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6491~1-6E6684~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:6c5fcd2c89e0077f",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:6c5fcd2c89e0077f&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6491~1-6E643~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:66835ce1d4560b79",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:66835ce1d4560b79&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E886~1-6E2456~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:6562814ffa71372b",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:6562814ffa71372b&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E886~1-6E2248~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:cc429daf23dceec8",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:cc429daf23dceec8&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6491~1-6E2456~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:5421ef6ff0c9cb88",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:5421ef6ff0c9cb88&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E886~1-6E643~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:20697ea3e9cf4353",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 133,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:20697ea3e9cf4353&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6753~1-6E2134~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:e747e5b25101e65",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:e747e5b25101e65&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6257~1-6E2093~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:43379903e9452d83",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:43379903e9452d83&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6067~1-6E6684~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:e468575c0a2ff9f",
                "price": {
                  "totalAmount": 279,
                  "totalAmountUsd": 279.06854,
                  "amount": 93,
                  "amountUsd": 93.02285,
                  "originalAmount": 89,
                  "originalAmountUsd": 89,
                  "amountPerAdult": 134,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:e468575c0a2ff9f&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6257~1-6E2248~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:dd78e8d59b459c1e",
                "price": {
                  "totalAmount": 303,
                  "totalAmountUsd": 303.06854,
                  "amount": 101,
                  "amountUsd": 101.02285,
                  "originalAmount": 97,
                  "originalAmountUsd": 97,
                  "amountPerAdult": 146,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:dd78e8d59b459c1e&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6393~1-6E175~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:64392be598ed78a5",
                "price": {
                  "totalAmount": 303,
                  "totalAmountUsd": 303.06854,
                  "amount": 101,
                  "amountUsd": 101.02285,
                  "originalAmount": 97,
                  "originalAmountUsd": 97,
                  "amountPerAdult": 146,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:64392be598ed78a5&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6535~1-6E2194~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:e083dc4634dd0dfb",
                "price": {
                  "totalAmount": 303,
                  "totalAmountUsd": 303.06854,
                  "amount": 101,
                  "amountUsd": 101.02285,
                  "originalAmount": 97,
                  "originalAmountUsd": 97,
                  "amountPerAdult": 146,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:e083dc4634dd0dfb&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6535~1-6E2279~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:d2a9cfe034432dc",
                "price": {
                  "totalAmount": 303,
                  "totalAmountUsd": 303.06854,
                  "amount": 101,
                  "amountUsd": 101.02285,
                  "originalAmount": 97,
                  "originalAmountUsd": 97,
                  "amountPerAdult": 145,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:d2a9cfe034432dc&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E528~1-6E672~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:797ad0443e2a4f3d",
                "price": {
                  "totalAmount": 303,
                  "totalAmountUsd": 303.06854,
                  "amount": 101,
                  "amountUsd": 101.02285,
                  "originalAmount": 97,
                  "originalAmountUsd": 97,
                  "amountPerAdult": 145,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:797ad0443e2a4f3d&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6104~1-6E587~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:39711eff5048eb14",
                "price": {
                  "totalAmount": 303,
                  "totalAmountUsd": 303.06854,
                  "amount": 101,
                  "amountUsd": 101.02285,
                  "originalAmount": 97,
                  "originalAmountUsd": 97,
                  "amountPerAdult": 145,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:39711eff5048eb14&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E528~1-6E2369~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:85d61d59a6ec0bb4",
                "price": {
                  "totalAmount": 309,
                  "totalAmountUsd": 309.06854,
                  "amount": 103,
                  "amountUsd": 103.02285,
                  "originalAmount": 99,
                  "originalAmountUsd": 99,
                  "amountPerAdult": 148,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:85d61d59a6ec0bb4&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E6104~1-6E2481~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:1506bf8e75e90cbb",
                "price": {
                  "totalAmount": 309,
                  "totalAmountUsd": 309.06854,
                  "amount": 103,
                  "amountUsd": 103.02285,
                  "originalAmount": 99,
                  "originalAmountUsd": 99,
                  "amountPerAdult": 148,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:1506bf8e75e90cbb&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E436~1-6E2481~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:211218f2ef4f650",
                "price": {
                  "totalAmount": 330,
                  "totalAmountUsd": 330.06854,
                  "amount": 110,
                  "amountUsd": 110.02285,
                  "originalAmount": 106,
                  "originalAmountUsd": 106,
                  "amountPerAdult": 159,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:211218f2ef4f650&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E276~1-6E648~1"
              },
              {
                "paymentFees": [
                  {
                    "paymentMethodId": 3,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 10,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  },
                  {
                    "paymentMethodId": 15,
                    "currencyCode": "USD",
                    "amount": 4.02,
                    "amountUsd": 4.022852
                  }
                ],
                "id": "304704d38d6dc367msr:goindigo.in:7222e4ddb25745f8",
                "price": {
                  "totalAmount": 330,
                  "totalAmountUsd": 330.06854,
                  "amount": 110,
                  "amountUsd": 110.02285,
                  "originalAmount": 106,
                  "originalAmountUsd": 106,
                  "amountPerAdult": 159,
                  "amountPerChild": 0,
                  "amountPerInfant": 0,
                  "taxAmount": 0,
                  "taxAmountUsd": 0,
                  "totalTaxAmount": 0,
                  "totalTaxAmountUsd": 0,
                  "currencyCode": "USD",
                  "paymentFeeAmountUsd": 4.022852,
                  "bookingFee": 0,
                  "bookingFeeUsd": 0,
                  "totalBookingFee": 0,
                  "totalBookingFeeUsd": 0
                },
                "providerCode": "goindigo.in",
                "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:7222e4ddb25745f8&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&region=ap-southeast-1&placement_type=metasearch",
                "ecpc": 0,
                "remainingSeatsCount": 0,
                "conditionIds": [],
                "legConditionIds": [],
                "refundable": false,
                "exchangeable": false,
                "tags": [],
                "tripId": "304704d38d6dc367msr:6E415~1-6E2339~1"
              }
            ],
            "filters": {
              "minPrice": {
                "totalAmount": 219,
                "totalAmountUsd": 219.06854,
                "amount": 73,
                "amountUsd": 73.02285,
                "originalAmount": 69,
                "originalAmountUsd": 69,
                "amountPerAdult": 103,
                "amountPerChild": 0,
                "amountPerInfant": 0,
                "taxAmount": 0,
                "taxAmountUsd": 0,
                "totalTaxAmount": 0,
                "totalTaxAmountUsd": 0,
                "currencyCode": "USD",
                "paymentFeeAmountUsd": 4.022852,
                "bookingFee": 0,
                "bookingFeeUsd": 0,
                "totalBookingFee": 0,
                "totalBookingFeeUsd": 0
              },
              "maxPrice": {
                "totalAmount": 330,
                "totalAmountUsd": 330.06854,
                "amount": 110,
                "amountUsd": 110.02285,
                "originalAmount": 106,
                "originalAmountUsd": 106,
                "amountPerAdult": 159,
                "amountPerChild": 0,
                "amountPerInfant": 0,
                "taxAmount": 0,
                "taxAmountUsd": 0,
                "totalTaxAmount": 0,
                "totalTaxAmountUsd": 0,
                "currencyCode": "USD",
                "paymentFeeAmountUsd": 4.022852,
                "bookingFee": 0,
                "bookingFeeUsd": 0,
                "totalBookingFee": 0,
                "totalBookingFeeUsd": 0
              },
              "stops": [
                {
                  "code": "ONE_STOP",
                  "price": {
                    "totalAmount": 279,
                    "totalAmountUsd": 279.06854,
                    "amount": 93,
                    "amountUsd": 93.02285,
                    "originalAmount": 89,
                    "originalAmountUsd": 89,
                    "amountPerAdult": 134,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                },
                {
                  "code": "DIRECT",
                  "price": {
                    "totalAmount": 219,
                    "totalAmountUsd": 219.06854,
                    "amount": 73,
                    "amountUsd": 73.02285,
                    "originalAmount": 69,
                    "originalAmountUsd": 69,
                    "amountPerAdult": 103,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                }
              ],
              "airlines": [
                {
                  "code": "6E",
                  "price": {
                    "totalAmount": 219,
                    "totalAmountUsd": 219.06854,
                    "amount": 73,
                    "amountUsd": 73.02285,
                    "originalAmount": 69,
                    "originalAmountUsd": 69,
                    "amountPerAdult": 103,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                }
              ],
              "providers": [
                {
                  "code": "goindigo.in",
                  "price": {
                    "totalAmount": 219,
                    "totalAmountUsd": 219.06854,
                    "amount": 73,
                    "amountUsd": 73.02285,
                    "originalAmount": 69,
                    "originalAmountUsd": 69,
                    "amountPerAdult": 103,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                }
              ],
              "stopoverAirports": [
                {
                  "code": "HYD",
                  "price": {
                    "totalAmount": 279,
                    "totalAmountUsd": 279.06854,
                    "amount": 93,
                    "amountUsd": 93.02285,
                    "originalAmount": 89,
                    "originalAmountUsd": 89,
                    "amountPerAdult": 134,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                },
                {
                  "code": "PNQ",
                  "price": {
                    "totalAmount": 303,
                    "totalAmountUsd": 303.06854,
                    "amount": 101,
                    "amountUsd": 101.02285,
                    "originalAmount": 97,
                    "originalAmountUsd": 97,
                    "amountPerAdult": 145,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                },
                {
                  "code": "JAI",
                  "price": {
                    "totalAmount": 330,
                    "totalAmountUsd": 330.06854,
                    "amount": 110,
                    "amountUsd": 110.02285,
                    "originalAmount": 106,
                    "originalAmountUsd": 106,
                    "amountPerAdult": 159,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                },
                {
                  "code": "NAG",
                  "price": {
                    "totalAmount": 279,
                    "totalAmountUsd": 279.06854,
                    "amount": 93,
                    "amountUsd": 93.02285,
                    "originalAmount": 89,
                    "originalAmountUsd": 89,
                    "amountPerAdult": 133,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                },
                {
                  "code": "IDR",
                  "price": {
                    "totalAmount": 303,
                    "totalAmountUsd": 303.06854,
                    "amount": 101,
                    "amountUsd": 101.02285,
                    "originalAmount": 97,
                    "originalAmountUsd": 97,
                    "amountPerAdult": 146,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                }
              ],
              "stopoverDurations": {
                "min": 0,
                "max": 455
              },
              "originAirports": [
                {
                  "code": "BLR",
                  "price": {
                    "totalAmount": 219,
                    "totalAmountUsd": 219.06854,
                    "amount": 73,
                    "amountUsd": 73.02285,
                    "originalAmount": 69,
                    "originalAmountUsd": 69,
                    "amountPerAdult": 103,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                }
              ],
              "destinationAirports": [
                {
                  "code": "DEL",
                  "price": {
                    "totalAmount": 219,
                    "totalAmountUsd": 219.06854,
                    "amount": 73,
                    "amountUsd": 73.02285,
                    "originalAmount": 69,
                    "originalAmountUsd": 69,
                    "amountPerAdult": 103,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                }
              ],
              "tripDurations": {
                "min": 165,
                "max": 675
              },
              "legs": [
                {
                  "departureAirportCode": "BLR",
                  "arrivalAirportCode": "DEL",
                  "departureCityCode": "BLR",
                  "arrivalCityCode": "DEL",
                  "index": 0,
                  "departureTimes": {
                    "min": 315,
                    "max": 1155
                  },
                  "arrivalTimes": {
                    "min": 125,
                    "max": 1425
                  },
                  "durations": {
                    "min": 165,
                    "max": 675
                  },
                  "stops": [
                    {
                      "code": "ONE_STOP",
                      "price": {
                        "totalAmount": 279,
                        "totalAmountUsd": 279.06854,
                        "amount": 93,
                        "amountUsd": 93.02285,
                        "originalAmount": 89,
                        "originalAmountUsd": 89,
                        "amountPerAdult": 134,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    },
                    {
                      "code": "DIRECT",
                      "price": {
                        "totalAmount": 219,
                        "totalAmountUsd": 219.06854,
                        "amount": 73,
                        "amountUsd": 73.02285,
                        "originalAmount": 69,
                        "originalAmountUsd": 69,
                        "amountPerAdult": 103,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    }
                  ],
                  "stopoverDurations": {
                    "min": 0,
                    "max": 455
                  },
                  "stopoverAirports": [
                    {
                      "code": "HYD",
                      "price": {
                        "totalAmount": 279,
                        "totalAmountUsd": 279.06854,
                        "amount": 93,
                        "amountUsd": 93.02285,
                        "originalAmount": 89,
                        "originalAmountUsd": 89,
                        "amountPerAdult": 134,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    },
                    {
                      "code": "PNQ",
                      "price": {
                        "totalAmount": 303,
                        "totalAmountUsd": 303.06854,
                        "amount": 101,
                        "amountUsd": 101.02285,
                        "originalAmount": 97,
                        "originalAmountUsd": 97,
                        "amountPerAdult": 145,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    },
                    {
                      "code": "JAI",
                      "price": {
                        "totalAmount": 330,
                        "totalAmountUsd": 330.06854,
                        "amount": 110,
                        "amountUsd": 110.02285,
                        "originalAmount": 106,
                        "originalAmountUsd": 106,
                        "amountPerAdult": 159,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    },
                    {
                      "code": "NAG",
                      "price": {
                        "totalAmount": 279,
                        "totalAmountUsd": 279.06854,
                        "amount": 93,
                        "amountUsd": 93.02285,
                        "originalAmount": 89,
                        "originalAmountUsd": 89,
                        "amountPerAdult": 133,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    },
                    {
                      "code": "IDR",
                      "price": {
                        "totalAmount": 303,
                        "totalAmountUsd": 303.06854,
                        "amount": 101,
                        "amountUsd": 101.02285,
                        "originalAmount": 97,
                        "originalAmountUsd": 97,
                        "amountPerAdult": 146,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    }
                  ],
                  "airlines": [
                    {
                      "code": "6E",
                      "price": {
                        "totalAmount": 219,
                        "totalAmountUsd": 219.06854,
                        "amount": 73,
                        "amountUsd": 73.02285,
                        "originalAmount": 69,
                        "originalAmountUsd": 69,
                        "amountPerAdult": 103,
                        "amountPerChild": 0,
                        "amountPerInfant": 0,
                        "taxAmount": 0,
                        "taxAmountUsd": 0,
                        "totalTaxAmount": 0,
                        "totalTaxAmountUsd": 0,
                        "currencyCode": "USD",
                        "paymentFeeAmountUsd": 4.022852,
                        "bookingFee": 0,
                        "bookingFeeUsd": 0,
                        "totalBookingFee": 0,
                        "totalBookingFeeUsd": 0
                      }
                    }
                  ]
                }
              ],
              "alliances": [
                {
                  "code": "",
                  "price": {
                    "totalAmount": 219,
                    "totalAmountUsd": 219.06854,
                    "amount": 73,
                    "amountUsd": 73.02285,
                    "originalAmount": 69,
                    "originalAmountUsd": 69,
                    "amountPerAdult": 103,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  }
                }
              ],
              "fareConditions": []
            },
            "routeSponsors": [
              {
                "priority": 0,
                "fare": {
                  "paymentFees": [
                    {
                      "paymentMethodId": 3,
                      "currencyCode": "USD",
                      "amount": 4.02,
                      "amountUsd": 4.022852
                    },
                    {
                      "paymentMethodId": 10,
                      "currencyCode": "USD",
                      "amount": 4.02,
                      "amountUsd": 4.022852
                    },
                    {
                      "paymentMethodId": 15,
                      "currencyCode": "USD",
                      "amount": 4.02,
                      "amountUsd": 4.022852
                    }
                  ],
                  "id": "304704d38d6dc367msr:goindigo.in:5421ef6ff0c9cb88",
                  "price": {
                    "totalAmount": 279,
                    "totalAmountUsd": 279.06854,
                    "amount": 93,
                    "amountUsd": 93.02285,
                    "originalAmount": 89,
                    "originalAmountUsd": 89,
                    "amountPerAdult": 134,
                    "amountPerChild": 0,
                    "amountPerInfant": 0,
                    "taxAmount": 0,
                    "taxAmountUsd": 0,
                    "totalTaxAmount": 0,
                    "totalTaxAmountUsd": 0,
                    "currencyCode": "USD",
                    "paymentFeeAmountUsd": 4.022852,
                    "bookingFee": 0,
                    "bookingFeeUsd": 0,
                    "totalBookingFee": 0,
                    "totalBookingFeeUsd": 0
                  },
                  "providerCode": "goindigo.in",
                  "handoffUrl": "https://handoff.wego.com/flights/continue?currency=USD&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=304704d38d6dc367msr:goindigo.in:5421ef6ff0c9cb88&route=BLR-DEL&search_id=304704d38d6dc367msr&trip_id=BLR:DEL:2022-02-01&pwa=false&api_version=2&integration_code=goindigo.in&placement_type=metasearch",
                  "ecpc": 0,
                  "remainingSeatsCount": 0,
                  "conditionIds": [],
                  "legConditionIds": [],
                  "refundable": false,
                  "exchangeable": false,
                  "tags": [],
                  "tripId": "304704d38d6dc367msr:6E886~1-6E643~1"
                }
              }
            ],
            "scores": {
              "304704d38d6dc367msr:6E886~1-6E643~1": 832.17,
              "304704d38d6dc367msr:6E6535~1-6E2279~1": 822.17,
              "304704d38d6dc367msr:6E2034~1": 966,
              "304704d38d6dc367msr:6E6257~1-6E2248~1": 816.67,
              "304704d38d6dc367msr:6E6535~1-6E2194~1": 856.33,
              "304704d38d6dc367msr:6E528~1-6E672~1": 833,
              "304704d38d6dc367msr:6E6753~1-6E2134~1": 867,
              "304704d38d6dc367msr:6E886~1-6E2248~1": 852.67,
              "304704d38d6dc367msr:6E886~1-6E2456~1": 806,
              "304704d38d6dc367msr:6E6104~1-6E2481~1": 852.67,
              "304704d38d6dc367msr:6E436~1-6E2481~1": 779.17,
              "304704d38d6dc367msr:6E2514~1": 976,
              "304704d38d6dc367msr:6E2174~1": 976,
              "304704d38d6dc367msr:6E6104~1-6E587~1": 851.33,
              "304704d38d6dc367msr:6E415~1-6E2339~1": 853.33,
              "304704d38d6dc367msr:6E6491~1-6E2456~1": 852.67,
              "304704d38d6dc367msr:6E6067~1-6E6684~1": 840.33,
              "304704d38d6dc367msr:6E6139~1": 976,
              "304704d38d6dc367msr:6E6393~1-6E175~1": 849.67,
              "304704d38d6dc367msr:6E6491~1-6E643~1": 856.33,
              "304704d38d6dc367msr:6E6257~1-6E2093~1": 857,
              "304704d38d6dc367msr:6E276~1-6E648~1": 866.67,
              "304704d38d6dc367msr:6E2027~1": 976,
              "304704d38d6dc367msr:6E2337~1": 976,
              "304704d38d6dc367msr:6E6491~1-6E6684~1": 794.83,
              "304704d38d6dc367msr:6E528~1-6E2369~1": 845.83,
              "304704d38d6dc367msr:6E2186~1": 964
            },
            "paymentMethods": [
              {
                "id": 16,
                "name": "Visa Debit"
              },
              {
                "id": 3,
                "name": "American Express"
              },
              {
                "id": 5,
                "name": "Diners Club"
              },
              {
                "id": 10,
                "name": "MasterCard Credit"
              },
              {
                "id": 11,
                "name": "MasterCard Debit"
              },
              {
                "id": 14,
                "name": "Visa"
              },
              {
                "id": 15,
                "name": "Visa Credit"
              },
              {
                "id": 63,
                "name": "RuPay"
              }
            ],
            "fareConditions": [],
            "faresCount": {
              "304704d38d6dc367msr:6E886~1-6E643~1": 1,
              "304704d38d6dc367msr:6E6535~1-6E2279~1": 1,
              "304704d38d6dc367msr:6E6257~1-6E2248~1": 1,
              "304704d38d6dc367msr:6E2034~1": 1,
              "304704d38d6dc367msr:6E6535~1-6E2194~1": 1,
              "304704d38d6dc367msr:6E528~1-6E672~1": 1,
              "304704d38d6dc367msr:6E6753~1-6E2134~1": 1,
              "304704d38d6dc367msr:6E886~1-6E2248~1": 1,
              "304704d38d6dc367msr:6E436~1-6E2481~1": 1,
              "304704d38d6dc367msr:6E6104~1-6E2481~1": 1,
              "304704d38d6dc367msr:6E886~1-6E2456~1": 1,
              "304704d38d6dc367msr:6E2174~1": 1,
              "304704d38d6dc367msr:6E2514~1": 1,
              "304704d38d6dc367msr:6E6104~1-6E587~1": 1,
              "304704d38d6dc367msr:6E415~1-6E2339~1": 1,
              "304704d38d6dc367msr:6E6491~1-6E2456~1": 1,
              "304704d38d6dc367msr:6E6067~1-6E6684~1": 1,
              "304704d38d6dc367msr:6E6139~1": 1,
              "304704d38d6dc367msr:6E6393~1-6E175~1": 1,
              "304704d38d6dc367msr:6E6257~1-6E2093~1": 1,
              "304704d38d6dc367msr:6E6491~1-6E643~1": 1,
              "304704d38d6dc367msr:6E276~1-6E648~1": 1,
              "304704d38d6dc367msr:6E2027~1": 1,
              "304704d38d6dc367msr:6E6491~1-6E6684~1": 1,
              "304704d38d6dc367msr:6E2337~1": 1,
              "304704d38d6dc367msr:6E528~1-6E2369~1": 1,
              "304704d38d6dc367msr:6E2186~1": 1
            },
            "promosCount": {},
            "count": 27,
            "sponsors": []
          });
});

module.exports = router;