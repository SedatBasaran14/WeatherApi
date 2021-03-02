const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(req, res){
    var link = "https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=40b46f4fead5a3da313c8caccc44aa5d";
    https.get(link, function(response){
      console.log('statusCode:', response.statusCode);
      response.on("data", function(gelenData){
        console.log(gelenData);

        var havaDurumu = JSON.parse(gelenData);
        console.log(havaDurumu);
      })
    });
});




app.listen(5000);
