/************************************************************************/
/*	about.js															*/
/*	VASSEUR cedric @2016 												*/
/*	Index Page Route File  	  											*/
/************************************************************************/

var express = require('express'),
    path    = require('path');

var router = express.Router();
var portail = __dirname.split(path.sep).pop();
var page = 'index';

router.get('/', function(req, res, next) {
  	res.cookie('routes'+portail, '/'+portail+'/'+page);
  	res.render(portail+'/'+page+'/'+page+'_'+req.cookies.l10n+'.html',{i18n: res,portail:portail});
});

module.exports = router;