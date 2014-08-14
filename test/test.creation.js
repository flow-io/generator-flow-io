

// MODULES //

var path = require( 'path' ),
	helpers = require( 'yeoman-generator' ).test;


// TESTS //

describe( 'flow-io generator', function tests() {
	'use strict';

	// SETUP //

	beforeEach( function setup( done ) {
		helpers.testDirectory( path.join(__dirname, 'temp' ), function onError( error ) {
			if ( error ) {
				return done( error );
			}

			this.app = helpers.createGenerator( 'flow-io:app', [ '../../app' ] );

			done();
		}.bind( this ) );
	});


	// TESTS //

	it( 'creates expected files', function test( done ) {
		var expected = [
				'.gitignore',
				'.npmignore',
				'.travis.yml',
				'README.md',
				'TODO.md',
				'Makefile',
				'LICENSE',
				'examples/index.js',
				'test/test.js',
				'lib/index.js'
			];

		helpers.mockPrompt( this.app, {
			'moduleName': 'generator-test',
			'author': 'Jane Doe',
			'email': 'jane@doe.com',
			'license_holder': 'Jane Doe &lt;jane@doe.com&gt;',
			'description': 'Flow generator test module.'
		});

		this.app.options[ 'skip-install' ] = true;

		this.app.run( {}, function onRun() {
			helpers.assertFile( expected );
			done();
		});
	});
});
