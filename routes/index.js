var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', {'showAlternate': false, 'projects': projects});
};

exports.viewGrid = function(req, res){
  	res.render('index', {'showAlternate': true, 'projects': projects});
};