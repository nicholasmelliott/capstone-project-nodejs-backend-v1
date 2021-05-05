var express = require('express');
var router = express.Router();
const Company = require("../models").Company;
const Order = require("../models").Order;
const Person = require("../models").Person;
const Product = require("../models").Product;
const Dimension = require("../models").Dimension;
const fetch = require('node-fetch');
//const config = require('../config.js')

let locationID;
let weatherJSON;
let insectJSON = [];

 const getWeather = async (coords) => {
    //Get location from MetaWeather API
    await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${coords.latitude},${coords.longitude}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'},
    })
      .then(res => res.json())
      .then(data => {
        console.log(data[0]);
        locationID = data[0].woeid;
      }).catch(err => {
        console.error("Fetching user coords from MetaWeather API: " + err)
      });
    //Get local weather from MetaWeather API  
    fetch(`https://www.metaweather.com/api/location/${locationID}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'},
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        weatherJSON = { 
          weatherIMG: `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`,
          title: data.title,
          currTemp: data.consolidated_weather[0].the_temp
        };
     }).catch(err => {
      console.error("Fetching local weather from MetaWeather API: " + err)
    });;
 }     

 //Get local insects
const getInsects = (state) => {
  return new Promise((resolve, reject) => { 
    insectJSON = [];
    const speciesBody = 
    {
      "criteriaType" : "species",
      "locationCriteria": [{
        "paramType" : "subnation",
        "subnation" : state,
        "nation" : "US"
      }],
      "pagingOptions" : {
        "page" : 0,
        "recordsPerPage" : 10000
      },
      "speciesTaxonomyCriteria": [
        {
          "paramType" : "scientificTaxonomy",
          "level" : "CLASS",
          "scientificTaxonomy" : "Arachnida",
          "kingdom" : "Animalia"
        },
        {
          "paramType" : "scientificTaxonomy",
          "level" : "CLASS",
          "scientificTaxonomy" : "Insecta",
          "kingdom" : "Animalia"
        },
        {
          "paramType" : "scientificTaxonomy",
          "level" : "CLASS",
          "scientificTaxonomy" : "Chilopoda",
          "kingdom" : "Animalia"
        },
        {
          "paramType" : "scientificTaxonomy",
          "level" : "CLASS",
          "scientificTaxonomy" : "Diplopoda",
          "kingdom" : "Animalia"
        }
      ]
    };
    //Get local insect species and push results to insectJSON array
    fetch('https://explorer.natureserve.org/api/data/speciesSearch', {
      method: 'post',
      body:    JSON.stringify(speciesBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(async json => {    
        const ranNums = [];  
        //Create x number of random numbers between 0 and response results length    
        for(let i = 0; i <= 59; i++){
          let ranNum = parseInt(Math.random() * json.results.length);
          ranNums.push(ranNum);
        };
        //Sort array from least to greatest
        ranNums.sort(function(a, b){return a-b});
        //Randomly picks species result using number in ranNum array, resolves promise after cycling results array
        json.results.map((species, i) => {
          if(i === (json.results.length - 1)){
            resolve(insectJSON);
          }else{
            ranNums.map(async num => {
              if(num === i){
                const USStates = [];
                await species.nations.map(nation => {
                  if(nation.nationCode === "US"){
                    USStates.push(nation.subnations);
                  }
                });
                insectJSON.push({commonName: species.primaryCommonName, sciName: species.scientificName, url: species.nsxUrl, subNations: USStates, informalTax: species.speciesGlobal.informalTaxonomy ,photo: []});
                ranNums.shift();
              }
            });
          }
        });
      }).catch(err => {
        console.log("Fetching Insect Species: " + err);
      }); 
  }).catch(err => {
    console.log("getInsects function: " + err);
  });
};  

const getInsectPhoto = (insectArry) => {
  console.log(insectArry[0]);
  const promises = insectArry.map((insect, i) => {
    return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${insect.sciName}&license=1,2,3,5&per_page=24&extras=url_m&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(json => {
        json.photos.photo[0] ? insectJSON[i].photo.push(json.photos.photo[0].url_m) : " ";
      }).catch(err => {
        console.error("Fetching insect photo: " + err);
      });
  });
  return Promise.all(promises);
};

//Get weather
router.get('/weather', function(req, res, next) {  
  res.json(weatherJSON);
});

router.post('/', function(req, res, next) {  
  Promise.resolve().then(() => {
    coords = req.body;
    getWeather(req.body);
    res.status(200).end();
  }).catch(next);
});

router.post('/insects', function(req, res, next) {  
  Promise.resolve().then(() => {
    getInsects(req.body.state)
    .then(insectArry => {
      // getInsectPhoto(insectArry)
      Promise.resolve()
        .then(()=>{
          res.json(insectJSON);
          res.status(200).end();
        }).catch( err => {
          res.status(500).end();
          throw new Error("getInsectPhoto function: " + err);
        });
    });
  }).catch(next);
});


module.exports = router;
