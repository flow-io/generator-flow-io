

(function() {
	'use strict';

	// MODULES //

	var path = require( 'path' ),
		yeoman = require( 'yeoman-generator' ),
		yosay = require( 'yosay' ),
		npmName = require( 'npm-name' ),
		chalk = require( 'chalk' );


	// GENERATOR //

	var Generator = yeoman.generators.Base.extend({

		/**
		* METHOD: init()
		*	Generator initialization.
		*/
		init: function() {
			this.pkg = require( '../package.json' );
			this.year = (new Date() ).getFullYear();
			this.log( yosay( 'Welcome to the flow.io generator...' ) );
		},

		/**
		* METHOD: promptUser()
		*	Prompts a user for input relevant to flow module.
		*/
		promptUser: function() {
			var next = this.async(),
				regex = /^flow\-/,
				dirname,
				prompts;

			// Get the current directory name:
			dirname = path.basename( process.cwd() );

			// Get the user:
			this.log( yosay( 'The module name should follow the convention `flow-{name}`, where `name` is a unique ID not already in use on NPM or within the flow.io organization on Github.' ) );

			// Specify the input prompts required in order to tailor the module...
			prompts = [
				{
					'type': 'input',
					'name': 'name',
					'message': 'What is the module name?',
					'default': dirname,
					validate: function ( answer ) {
						var next = this.async();
						
						if ( !regex.test( answer ) ) {
							next( 'The provided name is not prefixed with `flow-`.' );
						}
						npmName( answer, function onResponse( error, available ) {
							if ( !available ) {
								// Ask for another name:
								next( 'The requested module name already exists on NPM.' );
								return;
							}
							next( true );
						});
					}
				},
				{
					'type': 'input',
					'name': 'author',
					'message': 'Primary author\'s name?'
				},
				{
					'type': 'input',
					'name': 'email',
					'message': 'Primary author\'s e-mail?'
				},
				{
					'type': 'input',
					'name': 'license_holder',
					'message': 'Author name(s) to include in the license file?'
				},
				{
					'type': 'input',
					'name': 'description',
					'message': 'Module description:',
					'default': 'Stream factory.'
				}
			];

			// Prompt the user for responses:
			this.prompt( prompts, function onAnswers( answers ) {
				this.author = answers.author;
				this.email = answers.email;
				this.license_holder = answers.license_holder;
				this.moduleName = answers.name;
				this.description = answers.description;

				next();
			}.bind( this ) );
		}, // end METHOD promptUser()

		/**
		* METHOD: mkdirs()
		*	Creates module directories.
		*/
		mkdirs: function() {
			this.mkdir( 'examples' );
			this.mkdir( 'lib' );
			this.mkdir( 'test' );
		}, // end METHOD mkdirs()

		/**
		* METHOD: dotFiles()
		*	Copies over base dot files.
		*/
		dotFiles: function() {
			this.copy( 'gitignore', '.gitignore' );
			this.copy( 'npmignore', '.npmignore' );
			this.copy( 'travis.yml', '.travis.yml' );
		}, // end METHOD dotfiles()

		/**
		* METHOD: makefile()
		*	Copies over base Makefile.
		*/
		makefile: function() {
			this.copy( '_Makefile', 'Makefile' );
		}, // end METHOD makefile()

		/**
		* METHOD: license()
		*	Creates a license file.
		*/
		license: function() {
			var context = {
					'holder': this.license_holder
				};

			this.template( '_LICENSE', 'LICENSE', context );
		}, // end METHOD license()

		/**
		* METHOD: package()
		*	Creates a `package.json` file.
		*/
		package: function() {
			var context = {
					'name': this.moduleName,
					'author': this.author,
					'email': this.email,
					'description': this.description
				};

			this.template( '_package.json', 'package.json', context );
		}, // end METHOD package()

		/**
		* METHOD: todo()
		*	Copies over a TODO file.
		*/
		todo: function() {
			this.copy( '_TODO.md', 'TODO.md' );
		}, // end METHOD todo()

		/**
		* METHOD: readme()
		*	Creates a boilerplate README.
		*/
		readme: function() {
			var context = {
					'name': this.moduleName,
					'author': this.author,
					'year': this.year,
					'description': this.description
				};

			this.template( '_README.md', 'README.md', context );
		}, // end METHOD readme()

		/**
		* METHOD: lib()
		*	Creates a module boilerplate.
		*/
		lib: function() {
			var context = {
					'name': this.moduleName.split('-').slice(1).join('-'),
					'author': this.author,
					'email': this.email,
					'description': this.description,
					'year': this.year
				};

			this.template( 'lib/_index.js', 'lib/index.js', context );
		}, // end METHOD lib()

		/**
		* METHOD: test()
		*	Creates a test boilerplate.
		*/
		test: function() {
			var context = {
					'name': this.moduleName
				};

			this.template( 'test/_test.js', 'test/test.js', context );
		}, // end METHOD test()

		/**
		* METHOD: examples()
		*	Copies a boilerplate example.
		*/
		examples: function() {
			this.copy( 'examples/_index.js', 'examples/index.js' );
		}, // end METHOD examples()

		/**
		* METHOD: install()
		*	Installs dependencies.
		*/
		install: function() {
			var config = {
					'bower': false,
					'npm': true,
					'skipInstall': this.options[ 'skip-install' ],
					'skipMessage': false,
					'callback': function onFinish() {
						console.log( '\n...finished.\n' );
					}
				};

			this.on( 'end', function onEnd() {
				this.installDependencies( config );
			});
		} // end METHOD install()

	});


	// EXPORTS //

	module.exports = Generator;

})();
