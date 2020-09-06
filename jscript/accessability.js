window.onload = setTimeout(get_style, 100);

function get_style() {
	if ("css_style" in localStorage) {
		in_use = localStorage.getItem("css_style");
		if (in_use == "default") {}
		if (in_use == "dyslexic") {dyslexic();}
		if (in_use == "color-blind") {color_blind();}
		if (in_use == "vibrant") {vibrant();}
		if (in_use == "high_contrast") {high_contrast();}
		if (in_use == "custom") {
			document.getElementById('main-mode').textContent = "Set to default colour scheme.";
			document.getElementById('main-mode').setAttribute('onclick', 'main()');
		}
	}
	else {
		localStorage.setItem("css_style", "default");
	}
}

function reset_theme() {
	localStorage.setItem("override","");
	main();
}

/**
* @name CSStoUse
* @desc Obtains the name of the CSS in use and returns new path to use.
* @param {String} name The name of the stylesheet you wish to override the webpage layout with.
* @returns {String} The full path of the stylesheet to apply.
*/
function css_to_use(name) {
	var css_in_use = document.getElementById('pagestyle').getAttribute('href');
	var css_for_use = css_in_use.substr(0, css_in_use.lastIndexOf("\/") + 1);
	var css_for_use = css_for_use.concat(name);
	return css_for_use;
}

/**
* @name DyslexicFriendlyMode
* @method dyslexic
* @desc Overrides layout scheme with larger font sizes and subtler colours to ease reading for those affected with dyslexia.
*/
function dyslexic() {

	/*1. Change colour scheme to support dyslexic users.*/

	var css = css_to_use("dyslexia_friendly.css");
	var htmlEl = document.querySelector("html");

		document.getElementById('pagestyle_override').setAttribute('href', css);
		if (localStorage.getItem("css_style") !== "dyslexic") {
			message("Colour scheme","Dyslexia friendly scheme activated.");
			}
		localStorage.removeItem("css_style");
		localStorage.setItem("css_style", "dyslexic");

	/*2. Apply button functions to correspond to user choices.*/

		/*IN USE*/

			/*Dyslexia*/
				document.getElementById('dyslexia').textContent = "Dyslexic friendly mode in use.";
				document.getElementById('dyslexia').setAttribute('onclick', 'alreadyactive()');

		/*AVAILABLE*/

			/*High Contrast*/
				document.getElementById('high_contrast').textContent = "Set to High Contrast mode.";
				document.getElementById('high_contrast').setAttribute('onclick', 'high_contrast()');
		
			/*Vibrant*/
			
				document.getElementById('vibrant').textContent = "Set to vibrant mode.";
				document.getElementById('vibrant').setAttribute('onclick', 'vibrant()');

			/*Color-blindness*/
				document.getElementById('color-blind').textContent = "Set to color-blind friendly mode.";
				document.getElementById('color-blind').setAttribute('onclick', 'color_blind()');

			/*Default*/
				document.getElementById('main-mode').textContent = "Set to default colour scheme.";
				document.getElementById('main-mode').setAttribute('onclick', 'main()');

				var day = JSON.parse(localStorage.getItem("settings"))[0];
				settings = [day,"#E9FFFD","#000000","#333333","#B6FFB7","#C1B9CA"];
				localStorage.setItem("settings",JSON.stringify(settings));
				apply_settings(settings);
	}

/**
* @name ColourBlindFriendlyMode
* @method color_blind
* @desc Overrides layout scheme by grayscaling calendar elements and colours used for those who are affected by colour blindness.
*/
function color_blind() {

	var css = css_to_use("color_blind.css");
	var htmlEl = document.body.parentNode;

	/*1. Change colour scheme to support colour-blind users.*/
		document.getElementById('pagestyle_override').setAttribute('href', css);
		if (localStorage.getItem("css_style") !== "color-blind") {
			message("Colour scheme","Colour blindness scheme activated.");
		}
		localStorage.removeItem("css_style");
		localStorage.setItem("css_style", "color-blind");

	/*2. Apply button functions to correspond to user choices.*/

		/*IN USE*/

			/*Color-blindness*/
				document.getElementById('color-blind').textContent = "Color-blind friendly mode in use.";
				document.getElementById('color-blind').setAttribute('onclick', 'alreadyactive()');

		/*AVAILABLE*/
		
			/*High Contrast*/
				document.getElementById('high_contrast').textContent = "Set to High Contrast mode.";
				document.getElementById('high_contrast').setAttribute('onclick', 'high_contrast()');
		
			/*Vibrant*/
			
				document.getElementById('vibrant').textContent = "Set to vibrant mode.";
				document.getElementById('vibrant').setAttribute('onclick', 'vibrant()');

			/*Dyslexia*/
				document.getElementById('dyslexia').textContent = "Set to dyslexic friendly mode.";
				document.getElementById('dyslexia').setAttribute('onclick', 'dyslexic()');

			/*Default*/
				document.getElementById('main-mode').textContent = "Set to default colour scheme.";
				document.getElementById('main-mode').setAttribute('onclick', 'main()');

				var day = JSON.parse(localStorage.getItem("settings"))[0];
				settings = [day,"#E6E6E6", "#000000", "#333333", "#C0C0C0", "#FFFFFF"];
				localStorage.setItem("settings",JSON.stringify(settings));
				apply_settings(settings);

}

/**
* @name DefaultMode
* @method main
* @desc Changes the layout to its default.
*/
function main() {

	var htmlEl = document.body.parentNode;
	/*1. Change colour scheme to the standard scheme used.*/

		document.getElementById('pagestyle_override').setAttribute('href', "");
		if (localStorage.getItem("css_style") !== "default") {
			if ("override" in localStorage) {
				message("Settings","Reset to default theme.");
				localStorage.removeItem("override");
			} 
			else {
				message("Colour scheme","Standard colour scheme activated.");
			}
		}
		localStorage.removeItem("css_style");
		localStorage.setItem("css_style", "default");

	/*2. Apply button functions to correspond to user choices.*/

		/*IN USE*/

			/*Default*/

				document.getElementById('main-mode').textContent = "Default theme in use.";
				document.getElementById('main-mode').setAttribute('onclick', 'alreadyactive();');
				
			/*High Contrast*/
				document.getElementById('high_contrast').textContent = "Set to High Contrast mode.";
				document.getElementById('high_contrast').setAttribute('onclick', 'high_contrast()');

			/*Vibrant*/
			
				document.getElementById('vibrant').textContent = "Set to vibrant mode.";
				document.getElementById('vibrant').setAttribute('onclick', 'vibrant()');

			/*Dyslexia*/

				document.getElementById('dyslexia').textContent = "Set to dyslexic friendly mode.";
				document.getElementById('dyslexia').setAttribute('onclick', 'dyslexic()');

			/*Color-blind*/

				document.getElementById('color-blind').textContent = "Set to color-blind friendly mode.";
				document.getElementById('color-blind').setAttribute('onclick', 'color_blind()');

				var day = JSON.parse(localStorage.getItem("settings"))[0];
				settings = [day,"#FFFFFF","#000000","#333333","#FF0000","#FFFFFF"];
				localStorage.setItem("settings",JSON.stringify(settings));
				apply_settings(settings);
	}

function vibrant() {
		
	/*1. Change colour scheme for brighter colours.*/

	var css = css_to_use("vibrant.css");
	var htmlEl = document.querySelector("html");

		document.getElementById('pagestyle_override').setAttribute('href', css);
		if (localStorage.getItem("css_style") !== "vibrant") {
			message("Colour scheme","Vibrant scheme activated.");
			}
		localStorage.removeItem("css_style");
		localStorage.setItem("css_style", "vibrant");

	/*2. Apply button functions to correspond to user choices.*/

		/*IN USE*/

			/*Vibrant*/
				document.getElementById('vibrant').textContent = "Vibrant mode in use.";
				document.getElementById('vibrant').setAttribute('onclick', 'alreadyactive()');

		/*AVAILABLE*/
		
			/*High Contrast*/
				document.getElementById('high_contrast').textContent = "Set to High Contrast mode.";
				document.getElementById('high_contrast').setAttribute('onclick', 'high_contrast()');
		
			/*Dyslexic*/
				document.getElementById('dyslexia').textContent = "Set to dyslexic friendly mode.";
				document.getElementById('dyslexia').setAttribute('onclick', 'dyslexic()');

			/*Color-blindness*/
				document.getElementById('color-blind').textContent = "Set to color-blind friendly mode.";
				document.getElementById('color-blind').setAttribute('onclick', 'color_blind()');

			/*Default*/
				document.getElementById('main-mode').textContent = "Set to default colour scheme.";
				document.getElementById('main-mode').setAttribute('onclick', 'main()');

				var day = JSON.parse(localStorage.getItem("settings"))[0];
				settings = [day,"#fffcd1","#00078f","#ad4ba4","#51edc3","#C1B9CA"];
				localStorage.setItem("settings",JSON.stringify(settings));
				apply_settings(settings);
}

function high_contrast() {
	
		/*1. Change colour scheme for high_contrast colours.*/

	var css = css_to_use("high_contrast.css");
	var htmlEl = document.querySelector("html");

		document.getElementById('pagestyle_override').setAttribute('href', css);
		if (localStorage.getItem("css_style") !== "high_contrast") {
			message("Colour scheme","High contrast scheme activated.");
			}
		localStorage.removeItem("css_style");
		localStorage.setItem("css_style", "high_contrast");

	/*2. Apply button functions to correspond to user choices.*/

		/*IN USE*/

			/*High Contrast*/
				document.getElementById('high_contrast').textContent = "High Contrast mode in use.";
				document.getElementById('high_contrast').setAttribute('onclick', 'alreadyactive()');

		/*AVAILABLE*/
		
			/*Vibrant*/			
				document.getElementById('vibrant').textContent = "Set to vibrant mode.";
				document.getElementById('vibrant').setAttribute('onclick', 'vibrant()');
		
			/*Dyslexic*/
				document.getElementById('dyslexia').textContent = "Set to dyslexic friendly mode.";
				document.getElementById('dyslexia').setAttribute('onclick', 'dyslexic()');

			/*Color-blindness*/
				document.getElementById('color-blind').textContent = "Set to color-blind friendly mode.";
				document.getElementById('color-blind').setAttribute('onclick', 'color_blind()');

			/*Default*/
				document.getElementById('main-mode').textContent = "Set to default colour scheme.";
				document.getElementById('main-mode').setAttribute('onclick', 'main()');

				var day = JSON.parse(localStorage.getItem("settings"))[0];
				settings = [day,"#000000","#ffff00","#FF00FF","#FF00FF","#333333"];
				localStorage.setItem("settings",JSON.stringify(settings));
				apply_settings(settings);
	
}
/**
	* @name ThemeAlreadyInUse
	* @method main
	* @desc In case a theme is already selected, display this message on further theme selection.
	* @requires popup_scripts.js
*/
function alreadyactive() {
	message("Colour scheme","The theme you have chosen is already activated.");
}
