function toolsSwitch(tool){
	for(var i = 0; i < 5; i++){
		document.getElementById("tool"+[i]).style.display = "none";
		document.getElementById("toolSwitcher"+[i]).style.filter = "none";
	}
	document.getElementById("toolSwitcher"+tool).style.filter = "invert(100%)";
	document.getElementById("tool"+tool).style.display = "flex";
	document.getElementById("tool"+tool).style.flexDirection = "column";
}