////////////////////////////////////////
///  Model viewer test
////////////////////////////////////////

describe('Engine Model in viewer', function(){



	beforeEach(function(){

		browser.get('http://viewer.autodesk.io/node/ng-gallery/#/viewer?id=54464d43af600b5c0a87254b');

		
	});

	it('should have viewer displayed',function(){
		var viewer = element(by.className('adsk-viewing-viewer notouch'));
		expect(viewer).toBeDefined();

	});

	it('shoud have toolbars',function(){

		expect(element(by.id('guiviewer3d-toolbar'))).toBeDefined();
	});

	it('should have ADN customized toolbar',function(){

		expect(element(by.id('Autodesk.ADN.Gallery.ControlGroup'))).toBeDefined();
	})



});


