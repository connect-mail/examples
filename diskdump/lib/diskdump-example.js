/*
 * diskdump-example
 * https://github.com/parroit/diskdump-example
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var cm = require('connect-mail');
var smtp = require('cm-smtp');
var diskdump = require('cm-diskdump');

//create smtp server instance
var server = smtp({
    port:10025,
    hostname: 'localhost'
});

//create connect-mail instance
var app = cm(server);

//use diskdump for user authentication
app.use(diskdump('./mails'));

//add simple middleware
app.use(function(mail, next){
    console.dir(mail);
    if ( mail.to.indexOf('me@parro.it') !== -1){
        mail.accept();
    } else { 
        mail.reject();
    }

    //proceed with next middleware
    next();
});

//start listening
app.listen();
