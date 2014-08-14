/**
*
*	STREAM: <%= name %>
*
*
*	DESCRIPTION:
*		- <%= description %>
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) <%= year %>. <%= author %>.
*
*
*	AUTHOR:
*		<%= author %>. <%= email %>. <%= year %>.
*
*/

(function() {
	'use strict';

	// MODULES //

	// var module_alias = require( 'module_name' );


	// FUNCTIONS //

	/**
	* FUNCTION: foo()
	*	{{ foo description }}.
	*
	* @private
	*/
	function foo() {
		
	} // end FUNCTION foo()


	// STREAM //

	/**
	* FUNCTION: Stream()
	*	Stream constructor.
	*
	* @constructor
	* @returns {Stream} Stream instance
	*/
	function Stream() {
		return this;
	} // end FUNCTION Stream()

	/**
	* METHOD: bar()
	*	{{ bar description }}.
	*
	* @returns {Stream} Stream instance
	*/
	Stream.prototype.bar = function() {
		return this;
	}; // end METHOD bar()

	/**
	* METHOD: stream()
	*	{{ method description }}
	*
	* @returns {object} {{type of }} stream
	*/
	Stream.prototype.stream = function() {
		return /*stream*/;
	}; // end METHOD stream()


	// EXPORTS //

	module.exports = function createStream() {
		return new Stream();
	};

})();