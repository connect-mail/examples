/*
 * simpleauth-example
 * https://github.com/parroit/simpleauth-example
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var cm = require('connect-mail');
var smtp = require('cm-smtp');
var simpleAuth = require('cm-simpleauth');

//create smtp server instance
var server = smtp({
    port:10025,
    hostname: 'localhost'
});

//create connect-mail instance
var app = cm(server);

//use simpleauth for user authentication
app.authorize(simpleAuth('user-storage/users.json'));

//add simple middleware
app.use(function(mail, next){
    console.dir(mail);
    //accept all mails for me
    if (mail.to === 'me@parro.it'){
        mail.accept();

    } else { 
        //rejects all other ones
        mail.reject();
    }

    //proceed with next middleware
    next();
});

//start listening
app.listen();
