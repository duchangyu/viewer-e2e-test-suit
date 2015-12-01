////////////////////////////////////////
///  Model viewer test
////////////////////////////////////////

describe('Engine Model in viewer', function(){



	beforeEach(function(){

		browser.get('http://viewer.autodesk.io/node/gallery/#/viewer?id=560c6c57611ca14810e1b2bf');

		
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


