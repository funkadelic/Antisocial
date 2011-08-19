var blocklist = [
	"apis.google.com",
	"plusone.google.com",
	"ssl.gstatic.com",
	"connect.facebook.net",
	"www.facebook.com",
	"static.ak.fbcdn.net",
	"meebo.com",
	"s.meebocdn.net",
	"platform.twitter.com",
	"widgets.twimg.com",
	"s7.addthis.com",
	"platform.linkedin.com",
	"www.stumbleupon.com",
	"cdn.wibiya.com",
	"w.sharethis.com",
	"tweetmeme.com",
	"www.reddit.com",
	"widgets.digg.com"
]

var re = /https?:\/\/([^\/]+)/i;

document.addEventListener("beforeload", function(event) {
	var result =  re.exec(event.url);

	if (result && (blocklist.indexOf(result[1]) > -1)) {
		event.preventDefault();
	}
}, true);
