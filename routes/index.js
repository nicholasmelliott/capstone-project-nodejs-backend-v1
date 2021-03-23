var express = require('express');
var router = express.Router();
const Company = require("../models").Company;
const Order = require("../models").Order;
const Person = require("../models").Person;
const Product = require("../models").Product;
const Dimension = require("../models").Dimension;
const fetch = require('node-fetch');
const config = require('../config.js')

let weatherJSON;
let insectJSON = [];
const services = [
  {
    type: "Build new screens",
    desc: "Choose the color of your: frame, screen, hardware, etc.",
    imgSrc: "border-outer.svg",
    btn: "Build"
  },
  {
    type: "Build new windows",
    desc: "Choose the color of your: frame, screen, hardware, etc.",
    imgSrc: "border-all.svg",
    btn: "Build"
  },
  {
    type: "Restore old screens",
    desc: "Bring your house to life by repairing those old, dirty, torn screens.",
    imgSrc: "layers-fill.svg",
    btn: "Restore"
  },
  {
    type: "Restore old windows",
    desc: "Defeat the winter's cold air and revamp your old storm windows.",
    imgSrc: "layers-half.svg",
    btn: "Restore"
  },
  {
    type: "Custom Glass",
    desc: "Need glass? We can cut to size or shape depending on your needs.",
    imgSrc: "columns-gap.svg",
    btn: "Custom Glass"
  },
];
const speciesBody = 
      {
        "criteriaType" : "species",
        "locationCriteria": [{
          "paramType" : "subnation",
          "subnation" : "IN",
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

//fetch APIs
((async() => {

  //Get local weather image from MetaWeather API
  fetch('https://www.metaweather.com/api/location/2427032/', {
    method: 'get',
    headers: {'Content-Type':'application/json'},
  })
    .then(res => {
      res.json().then(data => {
        console.log(data);
        weatherJSON = { weatherIMG: `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`};
      })
    });

    //Get local insect species and push results to insectJSON array
    await fetch('https://explorer.natureserve.org/api/data/speciesSearch', {
            method: 'post',
            body:    JSON.stringify(speciesBody),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(async json => {    
          const ranNums = [];  
          // console.log(json);
          //Create x number of random numbers between 0 and response results length    
          for(let i = 0; i <= 59; i++){
            let ranNum = parseInt(Math.random() * json.results.length);
            ranNums.push(ranNum);
          };
          console.log(ranNums.length)
          //Sort array from least to greatest
          await ranNums.sort(function(a, b){return a-b});
          //Randomly picks species result using number in ranNum array
          json.results.map((species, i) => {
            ranNums.map(num => {
              if(num === i){
                insectJSON.push({commonName: species.primaryCommonName, sciName: species.scientificName, url: species.nsxUrl, photo: []});
                ranNums.shift();
              }
            });
          });
        }); 

     
    //Uses mapped insectJSON array and Flickr API to find image of species and map src back to insectJSON array
    insectJSON.map((insect, i) => {
      // console.log(insectJSON);
      if(i <= 59){
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${insect.sciName}&license=1,2,3,5&per_page=24&extras=url_m&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then(json => {
          if(json.photos.photo[0]){
            insectJSON[i].photo.push(json.photos.photo[0].url_m ? json.photos.photo[0].url_m : "");
          }
        });  
      }    
    });     
})())

/* GET home page. */
router.get('/weather', function(req, res, next) {  
  res.json(weatherJSON);
});

router.get('/insects', function(req, res, next) {  
  res.json(insectJSON);
});


module.exports = router;
