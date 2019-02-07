const packageName = require( '../package.json' ).name;

function l(...args) {
    console.log( `[${packageName}]`, ...args );
}

l( 'building packages' );

l( 'done' );

