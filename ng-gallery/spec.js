//spec.js

describe('ng-gallyer viewer sample end to end test', function(){

	// var firstNumber = element(by.model('first'));
	// var secondNumber = element(by.model('second'));
	// var goButton = element(by.id('gobutton'));
	// var latestResult = element(by.binding('latest'));
	// var history = element.all(by.repeater('result in memory'));

	var models = element.all(by.repeater('model in models'));
	var modelFilter = element(by.model('modelsFilterValue'));

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
	          //uncomment to show the network log
	          //console.log(message);
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

	it('should have some models',function(){

		expect(models).toBeDefined();
		expect(models.count()).toBeGreaterThan(0);
		
	});

	it('should filter model by name, sample model name = box', function(){

		expect(modelFilter).toBeDefined();
		//modelFilter.sendKeys('box');
		//expect(models.first()).toBeDefined();

		//expect(models.first().getText()).toContain('box');

	});

	// it('should fail when the console has errors - FAILURE EXPECTED', function() {
	// 	browser.executeScript(function() {console.error('error from test')});
	// });

	// it('should pass when the console has non-error logs', function() {
	// 	browser.executeScript(function() {console.log('hi!')});
	// })


	// it('should have left navigator bar', function(){

	// 	var leftNavigator = element.all(by.);

	// });



});