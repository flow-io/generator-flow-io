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


	// FACTORY //

	/**
	* FUNCTION: Factory()
	*	Stream factory constructor.
	*
	* @constructor
	* @returns {Factory} Factory instance
	*/
	function Factory() {
		return this;
	} // end FUNCTION Factory()

	/**
	* METHOD: bar()
	*	{{ bar description }}.
	*
	* @returns {Factory} Factory instance
	*/
	Factory.prototype.bar = function() {
		return this;
	}; // end METHOD bar()

	/**
	* METHOD: stream()
	*	{{ method description }}
	*
	* @returns {Stream} {{type of }} stream
	*/
	Factory.prototype.stream = function() {
		return /*stream*/;
	}; // end METHOD stream()

	
	// EXPORTS //

	module.exports = function createFactory() {
		return new Factory();
	};

})();