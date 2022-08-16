//open(url, target, windowFeatures)
//open attributes are optional 
// the target attribute can be used as the target attribute of <a> or <form> elements 
//windowFeatures - a string containing a comma-separated list of window features in the form "name=value" -- or for boolean features, just name.
// the noopener windowFeature, when this feature is set, the new window will not have access to the originating window via Window.opener and will return NULL.
//when noopener is used, non-empty target names, other than _top, _self, and _parent are treated like _blank in terms of deciding whether to open a new browsing context. 
//when noreferrer windowFeature is set, the browser will leave out the Referer header, as well as set noopener to true.
// safe
function newWindowOpener(untrustedURL) {
	var newWindow=window.open();
	newWindow.location=untrustedURL;
}
function WindowOpen1(untrustedURL) {
	var newWindow=window.open(untrustedURL);
}
function WindowOpen2(untrustedURL) {
	var newWindow=window.open(untrustedURL,"_blank");
}
//not safe , the noopener and noreferrer attributes are at place resulting in window.opener==NULL
function WindowOpen3(untrustedURL) {
	var newWindow=window.open(untrustedURL,"_blank","noopener");
}

function WindowOpen4(untrustedURL) {
	var newWindow=window.open(untrustedURL,"_blank","noreferrer");
}
// not safe 
// the noopener attribute is second its ignored by the browser thus allowing the window.opener to change the parent location.
function WindowOpen5(untrustedURL) {
	var newWindow=window.open(untrustedURL,"noopener");
}

function WindowOpen6(untrustedURL) {
	var newWindow=window.open(untrustedURL,"noreferrer");
}
// For all intents and purposes, if it has an href, a target set to _blank,
// and no rel="noopener" or rel="noreferrer" or a combination of the two - it is unsafe

// safe
function newWindowOpenerSafe7(untrustedURL) {
	var newWindow=window.open();
	newWindow.opener=null;
	newWindow.location=untrustedURL;
}
function newWindowOpener8(untrustedURL) {
	const a = document.createElement("a")
	a.href = untrustedURL
	a.target = "_blank"
	a.click()
}
function newWindowOpenerSafe9(untrustedURL) {
	const a = document.createElement("a")
	a.href = untrustedURL
	a.target = "_blank"
	a.rel = "noopener"
	a.click()
}