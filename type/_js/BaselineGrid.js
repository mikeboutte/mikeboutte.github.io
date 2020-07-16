var BaselineGrid = (function()
{
	var grid;
	var isshowing = false;
	
	// shift + b
	var keymap = {16:false, 66:false};
	
	var init = function () {
		console.log("BaselineGrid init");
		buildgridelement();
		setgridheight();
		initkeylistener();
		initwindowlistener();
	};
	
	var buildgridelement = function() {
		grid = document.createElement('div');
		grid.setAttribute('id', 'baselinegrid');
		grid.classList.add('px4');
		document.body.appendChild(grid);
	};
	
	var setgridheight = function() {
		var h = Math.max( document.body.scrollHeight, document.documentElement.scrollHeight,  document.body.offsetHeight, document.documentElement.offsetHeight,  document.body.clientHeight, document.documentElement.clientHeight);
		document.getElementById('baselinegrid').style.height = h+"px";
	};
	
	var initkeylistener = function() {
		document.addEventListener('keydown', function(e) {
			if (e.keyCode in keymap) keymap[e.keyCode] = true;
			
			var alldown = true;
			for (key in keymap) {
				if (keymap[key] != true) alldown = false;
			};
			if (alldown) togglegrid();
		});
		document.addEventListener('keyup', function(e) {
			if (e.keyCode in keymap) keymap[e.keyCode] = false;
		});
	};
	
	var initwindowlistener = function() {
		window.onresize = function(e) {
			setgridheight();
		};
	};
	
	var togglegrid = function() {
		
		if (isshowing) {
			grid.classList.remove('showing');
			isshowing = false;
		} else {
			setgridheight();
			grid.classList.add('showing');
			isshowing = true;
		}
	};
	
	return {
		// public properties
		init: init
	};
})();