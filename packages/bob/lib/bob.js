'use strict';

module.exports = bob;

function bob() {
    console.log( "hi, i'm bob" );
    return new Promise( resolve => {
        setTimeout( resolve, 5000 );
    } );
}
