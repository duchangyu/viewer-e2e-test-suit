// conf.js
exports.config = {

	directConnect: true,

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
	// multiCapabilities : [{
	// 	browserName : 'firefox'
	// },
	// {
	// 	browserName : 'chrome'
	// }
	// ]

	capabilities : {
		'browserName' : 'chrome',
		'chromeOptions': {
			'perfLoggingPrefs': {
			    'enableNetwork': true,
			    'enablePage': false,
			    'enableTimeline': false
			}
		},
		loggingPrefs: {
			performance: 'ALL',
			browser: 'ALL'
		}
	}
	
	

}