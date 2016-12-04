var body = document.getElementsByTagName('body')[0];

var button = document.getElementById('on-off-button');

var header = document.getElementsByTagName('header')[0];

var menuRoz = document.getElementById('menu-roz');

var menuButOne = document.getElementById('menu-one');

function hideHeader(){
	header.style.opacity = 0.05;
	button.style.backgroundImage = "url('images/on.png')";
	button.onclick = function(){
		showHeader();
	}
}

function showHeader(){
	header.style.opacity = 1;
	button.style.backgroundImage = "url('images/off.png')";
	button.onclick = function(){
		hideHeader();
	}
}



function hideMenu(){
	menuRoz.style.display = "none";
	menuButOne.onclick = function(){
		showMenu();
	}
}

function showMenu(){
	menuRoz.style.display = "block";
		menuButOne.onclick = function(){
		hideMenu();
	}
}


hideMenu();
showHeader();