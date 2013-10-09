var qooxdoo = require("qooxdoo");
var wialon_sdk = require("wialon_sdk");

var sdk_url = "https://hst-api.wialon.com";
wialon.core.Session.getInstance().initSession(sdk_url);
		
wialon.core.Remote.getInstance().replaceSender("sdk", new wialon.core.NodeHttp(wialon.core.Remote.getInstance().createFullUrl(wialon.core.Session.getInstance().getBaseUrl()) + "/wialon/post.html", 0));
wialon.core.Remote.getInstance().replaceSender("search", new wialon.core.NodeHttp(wialon.core.Remote.getInstance().createFullUrl(wialon.core.Session.getInstance().getBaseGisUrl("search")) + "/gis_post?1", 1));
wialon.core.Remote.getInstance().replaceSender("geocode", new wialon.core.NodeHttp(wialon.core.Remote.getInstance().createFullUrl(wialon.core.Session.getInstance().getBaseGisUrl("geocode")) + "/gis_post?2", 2));

wialon.core.Session.getInstance().login("wialon_test", "test", "", function() {
	var user = wialon.core.Session.getInstance().getCurrUser();
	console.log(user.getName());
});

