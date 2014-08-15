Yeoman Generator
================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependencies][dependencies-image]][dependencies-url]

This module is a [Yeoman](http://yeoman.io) generator for [flow.io](https://github.com/flow-io) modules. 


## Getting Started

To use the generator, ensure that you have installed Yeoman:

``` bash
$ npm install -g yo
```

For a general overview of Yeoman generators, see the [Getting Started Guide](http://yeoman.io/learning/).


## Installation

``` bash
$ npm install -g generator-flow-io
```

## Usage 

Once installed, navigate to the directory in which you want to place generated files and run

``` bash
$ yo flow-io
```

The generator will provide a series of prompts and will use your answers to tailor the module files, providing a scaffold upon which you can immediately build.

### Prompts

The prompts are as follows...


#### Module Name

The module name requires the convention that the module be prefixed with `flow-`. This ensures consistency with the current naming of flow.io modules.

Note that the module name __should correspond__ to the Github repository name.

Valid names include: `flow-mean`, `flow-sink-and-stream`, `flow-mmedian`, etc. Do __not__ include spaces or special characters in the name; e.g., `flow moving @ median`. 


#### Git

You have the option to initialize the module directory as a Git repository. The default option is `Y`. Typing `enter` or `y+enter` will confirm initialization and do the following:

``` bash
$ git init
$ git remote add origin https://github.com/flow-io/{{ module_name }}.git
$ git add -A
$ git commit -m "[INIT]"
```

The initialization process stops short of pushing the commit to the remote repository.


#### Author

Enter the primary author's name; i.e., in all likelihood that will be your name.


#### Email

If you have chosen to initialize the directory as a Git repository, the default will be the email associated with your Github account. This email should be a correspondence address for those individuals wanting to contact you directly with their questions and comments.

If the Github email address is fine, just type `enter`.


#### License

Enter the license holder for this module. The default is your name, but this could be the organization for which you work (say, if they are helping sponsor development) or some other entity.

If the default option is fine, just type `enter`.


#### Description

Enter the module description. You are requested to follow the convention of stating that the module produces a factory, which is similar to how other flow modules describe themselves.


### Scaffold

Once you have answered all prompts, you will have the following scaffold:

```
examples/
	- index.js
lib/
	- index.js
test/
	- test.js
.gitignore
.npmignore
.travis.yml
LICENSE
Makefile
package.json
README.md
TODO.md
```

#### Dotfiles

These are standard fare. If you notice that files are neither tracking in Git or making their way onto NPM, consult `.gitignore` and `.npmignore`. The scaffold includes a `.travis.yml` file for continuous integration purposes. Visit [Travis-CI](https://travis-ci.org/) to setup running builds.

#### Makefile

The `Makefile` includes methods to run tests and generate notes. To see TODOs and FIXMEs,

``` bash
$ make notes
```


#### License

The default license is the [MIT license](http://opensource.org/licenses/MIT).


#### Package.json

The generator creates a scaffold `package.json`, using the module name to get the Github repository urls. You need to manually add `keywords` and any additional `dependencies`.


#### Documentation

The generator includes a `TODO.md` file. Use this file for general TODOs which are not tied to any particular file line.

The `README.md` is a scaffold. You should add to the API, usage, and example code sections.


#### Lib

The main library file `lib/index.js` includes a skeleton constructor. The file includes a dummy private function (`foo`) and class method (`bar`). 

When modifying this file, the only __requirement__ is to include a `stream()` method which returns a pipeable stream.


#### Test

The generator creates a skeleton test file. Aim for 100% test coverage.


#### Examples

The `examples/index.js` file should be modified to showcase the stream factory's API and should match the example provided in the `README`.


#### Node Modules

The generator will automatically run `npm install` and install any node modules used by the scaffold. If you need any additional dependencies,

``` bash
$ npm install {{module_name}} --save
```

or development dependencies (either for testing or examples)

``` bash
$ npm install {{module_name}} --save-dev
```



## Notes

If you opted to initialize the module as a Git repository, you will need to manually push changes to Github.

``` bash
$ git push origin master
```

By default, the generator generates a [Travis-CI](https://travis-ci.org/) `*.yml` file for continuous integration and uses [Coveralls](https://coveralls.io/) for tracking code coverage over time.



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT).


---
## Copyright

Copyright &copy; 2014. Athan Reines.




[npm-image]: http://img.shields.io/npm/v/generator-flow-io.svg
[npm-url]: https://npmjs.org/package/generator-flow-io

[travis-image]: http://img.shields.io/travis/flow-io/generator-flow-io/master.svg
[travis-url]: https://travis-ci.org/flow-io/generator-flow-io

[coveralls-image]: https://img.shields.io/coveralls/flow-io/generator-flow-io/master.svg
[coveralls-url]: https://coveralls.io/r/flow-io/generator-flow-io?branch=master

[dependencies-image]: http://img.shields.io/david/flow-io/generator-flow-io.svg
[dependencies-url]: https://david-dm.org/flow-io/generator-flow-io

[dev-dependencies-image]: http://img.shields.io/david/dev/flow-io/generator-flow-io.svg
[dev-dependencies-url]: https://david-dm.org/dev/flow-io/generator-flow-io

[github-issues-image]: http://img.shields.io/github/issues/flow-io/generator-flow-io.svg
[github-issues-url]: https://github.com/flow-io/generator-flow-io/issues