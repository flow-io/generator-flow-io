Yeoman Generator
================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

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

The generator will provide a series of prompts asking for your `name`, `email`, `module_name`, `module_description`, etc. The generator uses your answers to tailor the module files and provide a base boilerplate upon which you can build.


## Notes

By default, the generator generates a [Travis-CI](https://travis-ci.org/) `*.yml` for continuous integration and uses [Coveralls](https://coveralls.io/) for tracking code coverage over time.


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