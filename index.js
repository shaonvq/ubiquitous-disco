const express = require('express');
const axios = require('axios');
var hbs = require('hbs');
const bodyParser = require('body-parser');

let app = express();

const port = process.env.port || 3000;

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{ 
    res.render('index');
});

app.get('/result',(req,res)=>{
    console.log(req.query.curone,req.query.curtwo,req.query.amount);   
    axios.get(`https://forex.1forge.com/1.0.3/convert?from=${req.query.curone}&to=${req.query.curtwo}&quantity=${req.query.amount}&api_key=Fyg0PC8OSXCrhHCoEL20IAlwP8gYkem0`)
    .then(function (response) {
        res.send(response.data);
    })
        .catch(function (error) {
        console.log(error);
    });
});

app.listen(port);