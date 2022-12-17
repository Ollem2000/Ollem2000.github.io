function openWindow(tool)
{
	console.log(tool.id)
	var actual = document.getElementById(tool.id)
	var target = document.getElementById(tool.id+"Window")
	
	for(var i = 0; i < 5; i++)
	{
		var tab = document.querySelector(".t"+[i]);
		var win = document.querySelector(".w"+[i]);
		
		tab.style.background = "none";
		tab.style.filter = "invert(0%)";
		win.style.display = "none";
	}
	
	target.style.display = "block";
	actual.style.background = "black";
	actual.style.filter = "invert(100%)";	
}