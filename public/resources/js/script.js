/*
 * Because Angular JS has dynamic content loading, some buttons might not exist
 * yet when Ladda and MDB is loaded. That would result in buttons not being
 * binded to their corresponding plugins.
 */
//setTimeout(function MDB() {
//	Waves.attach(".btn", ["waves-light"]);
//	setTimeout(MDB, 500);
//}, 500);

function onLoad() {
	setTimeout(function() {
		$(".container-fluid").css("-webkit-transition", "opacity .5s");
		$(".container-fluid").css("opacity", "1");	
		setTimeout(function() { $(".container-fluid").removeAttr("style") }, 500)
	}, 500);
}