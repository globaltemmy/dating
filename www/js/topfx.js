$(document).ready(function () {
	console.log ("ready"); 
	topwake () ;
}) ;

function topwake () {
		console.log("i love me");
}

function TopStand () {
	$("#info").text("mike Break");
}

//$(".vidList li a").click (TopStand ());

$(document).on("click","#toplink",function () {
	$("#info").text("mike Break");
})

