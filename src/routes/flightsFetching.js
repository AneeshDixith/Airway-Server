const express = require('express');
const router = express.Router();
var axios = require("axios").default;
const bodyParser = require('body-parser');
router.use(bodyParser.json());

async function matchAndReturnIndexOfLegId(legsId, trips){
  for(let k = 0; k < trips.length; k++){
    if(legsId == trips[k].legIds[0]){
      //console.log(k);
      return k;
    }
  }
};

async function matchAndReturnIndexOfTripsId(tripsId, fares){
  for(let j = 0; j < fares.length; j++){
    if(tripsId == fares[j].tripId){
      //console.log(j);
      return j;
    }
  }
};

async function matchAndReturnNameOfAirline( airlineCode, airlines){
  for (let j = 0; j < airlines.length; j++){
    if(airlineCode == airlines[j].code){
      return airlines[j].name;
    }
  }
}


router.post('/:userId/fetchFlights', async (req, res) => {
  try{
    const getFlights = {
      dest : req.body.dest,
      src : req.body.src,
      date1 : req.body.date1,
      adults : req.body.adults,
      cabin : req.body.cabin,
      userId : req.params.userId,
      infants : req.body.infants,
      children : req.body.children
    }

    const src = getFlights.src;
    const dest = getFlights.dest;
    const date1 = getFlights.date1;
    const adults = getFlights.adults;
    const children = getFlights.children;
    const infants = getFlights.infants;
    const cabin = getFlights.cabin;

    //console.log(getFlights);
    //res.json(getFlights);

    var options = {
    //  method: 'GET',
    //  url: `https://api.flightapi.io/onewaytrip/61e6c0153af59b74e513e55a/${src}/${dest}/${date1}/${adults}/${children}/${infants}/${cabin}/USD`,
      method: "GET",
      url : `http://localhost:3001/test/test`,
      
    };
    
    axios.request(options).then(async (response) => {
      const responseData = response.data;

      //console.log(responseData);

      var allResults = [];
      for(let i =0; i<15;i++){
        if(!(responseData.legs[i])){
          break;
        }
        const legIdIndex = await matchAndReturnIndexOfLegId(responseData.legs[i].id, responseData.trips);
        //console.log(legIdIndex);

        const tripIdIndex = await matchAndReturnIndexOfTripsId(responseData.trips[legIdIndex].id, responseData.fares);
        //console.log(tripIdIndex)

        const airlineName = await matchAndReturnNameOfAirline(responseData.legs[i].airlineCodes[0], responseData.airlines);
        //console.log(airlineName);

        const totalAmountUsd = await responseData.fares[tripIdIndex].price.totalAmountUsd;
        //console.log(totalAmountUsd);

        const searchResults = {
          id : responseData.legs[i].id,
          src : responseData.legs[i].departureAirportCode,
          dest : responseData.legs[i].arrivalAirportCode,
          depTime : responseData.legs[i].departureTime,
          arrTime : responseData.legs[i].arrivalTime,
          duration : responseData.legs[i].duration,
          airlineCodes : responseData.legs[i].airlineCodes[0],
          airlineName : await airlineName,
          totalPriceUsd : await totalAmountUsd,
        }
        //console.log(searchResults)
        allResults.push(searchResults);
      }
      //console.log(allResults);
      res.status(200).send(allResults);
    }).catch((error) => {
      console.error(error);
      res.status(403).json(error);
    });
  }catch(err){
    res.json({message: error});
  }
});

module.exports = router;