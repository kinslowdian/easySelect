// DEBUG
var trace = function(msg){ console.log(msg); };

function pageLoad_init()
{
	trace("pageLoad_init();");

	test();
}

function test()
{
	// SAME AS JQUERY
	e$(".box").addEventListener("click", test_event, false);
}

function test_event(event)
{
	trace(event);

	// RETURN SET CLASS / ID NAME RECORDED ON THE ELEMENT FROM THE FUNCTION
	let targ = event.target.attributes["data-refselect"].value;

	e$(targ).classList.add("new");
}


// UTIL

function e$(str)
{
	let e = document.querySelector(str);

	e.setAttribute("data-refselect", str);

	return e;
}




