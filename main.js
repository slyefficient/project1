chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('sheet.html', {
		bounds: {
			width: 700,
			height: 500
		},
		maxWidth: 900,
		minWidth: 500,
		maxHeight: 700,
		minHeight: 300,
	});
});