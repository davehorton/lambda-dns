'use strict' ;
var dns = require('dns') ;
exports.handler = function( event, context, callback ) {
  console.log('hostname %s: ', event.hostname) ;
  console.log('type: %s: ', event.type) ;

  dns.resolve( event.hostname, event.type, function(err, addresses) {

    if( err ) { 
      console.log('error with dns check %s:%s - %s', event.hostname, event.type, JSON.stringify(err)) ;
      return callback( err ); 
    }

    return callback(null, addresses); 

  }) ;
} ;