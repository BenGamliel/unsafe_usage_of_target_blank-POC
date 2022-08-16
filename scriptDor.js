// TP
function newWindowOpener(untrustedURL) {
	var newWindow=window.open();
	newWindow.location=untrustedURL;
}

// FN
// For all intents and purposes, if it has an href, a target set to _blank,
// and no rel="noopener" or rel="noreferrer" or a combination of the two - it is TP
function newWindowOpener2(untrustedURL) {
	const a = document.createElement("a")
	a.href = untrustedURL
	a.target = "_blank"
	a.click()
}

// TP
function newWindowOpener3(untrustedURL) {
	var newWindow=window.open(untrustedURL);
}

// TN
function newWindowOpenerSafe(untrustedURL) {
	var newWindow=window.open();
	newWindow.opener=null;
	newWindow.location=untrustedURL;
}

// Fix for the above method
function newWindowOpenerSafe2(untrustedURL) {
	const a = document.createElement("a")
	a.href = untrustedURL
	a.target = "_blank"
	a.rel = "noopener"
	a.click()
}