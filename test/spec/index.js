// library for testing
require('should');

////////////////////////////////////////
// test
describe('define', function() {
	describe('should pass', function() {
		it('all support parameter', function() {
			// init ekit-define library
			var define = require('../../index.js');

			define().should.be.false;
			define('main').should.be.false;
			define('main', 'root').should.be.false;
			define('main', 'root', 'hello').should.be.false;
			define(function() {}).should.be.false;

			define('main', function() {}).should.be.true;
			define(['main'], function() {}).should.be.true;
			define('main', 'root', function() {}).should.be.true;
			define(['main'], 'root', function() {}).should.be.true;
			define(['main'], ['root'], function() {}).should.be.true;
		});
	});

	describe('should pass', function(){
		it('export define / namespace', function(){
			// init ekit-define library
			var define = require('../../index.js');

			define('main', function(){
				var main = 1;
			});
			define('sub', 'main', function(){
				main += 1;
			});

			eval(define.export('main'));
			main.should.equal(2);

			// define('free', function(){
			// 	main = 0;
			// });
			// eval(define.export('free');


		});
	});
});