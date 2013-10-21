chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('sheet.html', {
		bounds: {
			width: 700,
			height: 500
		},
		maxWidth: 800,
		minWidth: 600,
		maxHeight: 600,
		minHeight: 400,
	});
});