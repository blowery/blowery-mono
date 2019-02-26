#!/usr/bin/env node
const bob = require( './bob' );

bob().then( () => {
  console.log( 'Bob is done!' );
} );