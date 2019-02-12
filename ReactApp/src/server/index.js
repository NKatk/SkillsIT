const express = require('express');
const os = require('os');
const fs =require('fs');

let content = fs.readFileSync(__dirname + '/content.json', 'utf-8');
let events = fs.readFileSync(__dirname + '/events.json', 'utf-8');
let greeting = fs.readFileSync(__dirname + '/greeting.json', 'utf-8');
let partnership = fs.readFileSync(__dirname + '/partnership.json', 'utf-8');

//console.log(content);

const app = express();

app.use(express.static('dist'));

app.get('/api/getThisContent', function(req, res){
    //let con = JSON.parse(content);
    //console.log(con);
    res.send(content);
});

app.get('/api/getThisEvents', function (req, res) {
   //console.log (events);
   res.send(events);
});

app.get('/api/getThisGreeting', function (req, res) {
    //console.log (events);
    res.send(greeting);
});

app.get('/api/getThisPartnerShip', function (req, res) {
    console.log (partnership);
    res.send(partnership);
});
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
