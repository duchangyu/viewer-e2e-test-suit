//spec.js

describe('ng-gallyer home page', function(){

		var models = element.all(by.repeater('model in models'));
		var modelFilter = element(by.id('input-home-search'));


	beforeEach(function(){

		browser.get('http://gallery.autodesk.io/');

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

	it('should filter model by name, sample model name = engine', function(){



		expect(modelFilter).toBeDefined();

		modelFilter.sendKeys('engine');

		models = element.all(by.repeater('model in models'));
		expect(models.first()).toBeDefined();

		expect(models.first().getText()).toContain('engine');

	});

	it('should open engine model in viewer', function(){

		var btnId = "btn-load-560c6c57611ca14810e1b2bf";
		var viewerUrl = 'viewer?id=560c6c57611ca14810e1b2bf'

		var showViewerButton = element(by.id(btnId));
		showViewerButton.click();

		expect(browser.getLocationAbsUrl())
			.toContain(viewerUrl);


		// models.each(function(item,index){
		// 	item.getText().then(function(text){

		// 		if (text.indexOf('Engine') > 0) {
		// 			// var showViewerButton = element(by.cssContainingText('.btn .btn-primary','Show in viewer'));
		// 			// showViewerButton.click();

		// 			// expect(browser.getLocationAbsUrl())
		// 			// 	.toBe('http://viewer.autodesk.io/node/ng-gallery/#/viewer?id=54464d43af600b5c0a87254b');

		// 			//return;
		// 		}
		// 		console.log(index, text);
		// 	});
		// });
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







