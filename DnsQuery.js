'use strict' ;
var dns = require('dns') ;
exports.handler = function( event, context, callback ) {
  console.log('dns check for %s:%s', event.hostname, event.type) ;

  var t = process.hrtime() ;
  dns.resolve( event.hostname, event.type, function(err, addresses) {
    t = process.hrtime(t) ;
    var ms = ((t[0] * 1000) + (t[1] / 1000000)).toFixed(2);
    if( err ) { 
      console.log('error with dns check %s:%s - %s', event.hostname, event.type, JSON.stringify(err)) ;
      return callback( null, {
        success: false,
        error: err,
        duration: ms
      }); 
    }

    console.log('dns %s:%s returned in %d ms, result: ', event.hostname, event.type, ms, JSON.stringify(addresses));
    return callback(null, {
      success: true,
      duration: ms,
      details: {
        addresses: addresses
      }
    }); 

  }) ;
} ;