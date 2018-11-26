var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  url = 'https://www.petfinder.com/dog/hooch-43354172/md/salisbury/humane-society-of-wicomico-county-md92/';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title;
      var json = { title : ""};

      $('.card-section-inner').filter(function(){
        var data = $(this);
        title = data.text().trim();
        

        json.title = title;
      })

      $('.ratingValue').filter(function(){
        var data = $(this);
        rating = data.text().trim();

        json.rating = rating;
      })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })
})

app.listen('8081')
console.log('Magic happens on http://localhost:8081/scrape');
exports = module.exports = app;