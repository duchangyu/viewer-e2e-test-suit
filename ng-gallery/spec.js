//spec.js

describe('ng-gallyer viewer sample end to end test', function(){

	// var firstNumber = element(by.model('first'));
	// var secondNumber = element(by.model('second'));
	// var goButton = element(by.id('gobutton'));
	// var latestResult = element(by.binding('latest'));
	// var history = element.all(by.repeater('result in memory'));

	// function add(a,b){

	// }

	beforeEach(function(){

		browser.get('http://viewer.autodesk.io/node/ng-gallery');

	});

	
	afterEach(function() {
		//show network logs
	    browser.manage().logs().get('performance').then(function(browserLogs) {
	      browserLogs.forEach(function(browserLog) {
	        var message = JSON.parse(browserLog.message).message;
	        if (message.method == 'Network.responseReceived') {
	          console.log(message);
	        }
	      });
	    });


	   //  //fail if browser log has errors
	   //  browser.manage().logs().get('browser').then(function(browserLog) {
	   //    expect(browserLog.length).toEqual(0);
	   //    	// Uncomment to actually see the log.
	   //  	console.log('log: ' + require('util').inspect(browserLog));
	  	// });

  	});

	it('should have a title',function(){
		
		expect(browser.getTitle()).toEqual('View & Data Gallery');
	});

	// it('should fail when the console has errors - FAILURE EXPECTED', function() {
	// 	browser.executeScript(function() {console.error('error from test')});
	// });

	// it('should pass when the console has non-error logs', function() {
	// 	browser.executeScript(function() {console.log('hi!')});
	// })

});