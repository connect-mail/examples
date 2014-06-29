/*
 * simpleauth-example
 * https://github.com/parroit/simpleauth-example
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var cm = require('connect-mail');
var smtp = require('simplesmtp');
var server = smtp.createServer();
var app = cm(server);
var simpleAuth = require('cm-simpleauth');

app.authorize(simpleAuth('user-storage/users.json'));

app.use(function(req, res){
    //accept all mails for me
    if (req.to === 'me@parro.it'){
        res.accept();

    } else { 
        //rejects all other ones
        res.reject();
    }

});

app.listen();
