/*
 * simpleauth-example
 * https://github.com/parroit/simpleauth-example
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var simpleauthExample = require('../lib/simpleauth-example.js');

describe('simpleauth-example module', function(){
  describe('#awesome()', function(){
    it('should return a hello', function(){
      simpleauthExample.awesome('livia').should.equal('hello livia');
    });
  });
});
