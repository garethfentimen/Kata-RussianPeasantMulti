var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var path = require('path');

app.engine('hbs', expressHbs(
	{ 
		extname:'.hbs', 
		defaultLayout:'main'
	}));

app.set('view engine', 'hbs');

// configure app to use bodyParser()
// this will let us get the data from a POST (jsonifying)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000; 		// set our port

var router = express.Router();

router.get('/', function(req, res) {
				//res.send('im the home page!');
				var data = { title: 'RussianPeasant' };
				res.render('home', data);
			});

router.post('/', function(req, res) {
				// Go off and do calculation

				var data = { title: 'RussianPeasant' };
				res.render('home', data);
			});

// router.get('/home', function(req, res) {
// 				//res.send('im the home page!');
// 				var data = { title: 'Russian Peasant' };
// 				res.render('home', data);
// 			});

app.use('/', router);

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/libs'));

// START THE SERVER
app.listen(port);