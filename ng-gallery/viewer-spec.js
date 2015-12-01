////////////////////////////////////////
///  Model viewer test
////////////////////////////////////////

describe('Engine Model in viewer', function(){



	beforeEach(function(){

		browser.get('http://viewer.autodesk.io/node/gallery/#/viewer?id=560c6c57611ca14810e1b2bf');

		
	});

	it('should have viewer displayed, have built-in toolbars and ADN toolbars',function(){
		var viewer = element(by.className('adsk-viewing-viewer notouch'));
		expect(viewer).toBeDefined();
		//built-in toolbar
		expect(element(by.id('guiviewer3d-toolbar'))).toBeDefined();

		//ADN gallery toolbar
		expect(element(by.id('Gallery'))).toBeDefined();

	});

	it('should open extension list', function(){

		  //Locate Extension Manager control
  	var btnId = "Autodesk.ADN.Gallery.ExtensionManager.Button.Manage";

  	//displays extensions panel
  	element(by.id(btnId)).click();

  	

  	expect(element(by.css('extension-item')).toBeDefined());




	});

	



});


