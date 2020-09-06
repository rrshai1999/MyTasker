window.onload = get_settings();

var settings;
var day;
var back;
var fore;
var head;
var cal_date;
var cal_head;

/**
* @name {rgbToHex}
* @method {rgbToHex Conversion}
* @param {Integer} rgb - The integer in Base-10
* @returns {String} hex - The BASE-16 hex value.
* @desc BASE-10 TO BASE-16 CONVERSION TO GET HEX
*/
var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

/**
* @name {FullColorHex}
* @desc Runs the {@see rgbToHex} on each number of the RGB tuple.
* @param {Tuple} (r,g,b) - The 3 integers obtained from splitting inline styling.
* @return {String} hex_val - The 6 letter HEX value as a string ready to be stored in local Storage.
*
*/
var fullColorHex = function(r,g,b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  var hex_val = "#"+red+green+blue;
  return hex_val;
};

/**
* @method {LongCSS_toHexValue}
* @desc Using the inline css styles, get the rgb integers,
* split them into a tuple and return a 6-letter hex value
* to be stored in {@see UserSettings}.
*
* @param {String} style_value - The inline layout styling obtained from the user choice.
* @returns {String} hex_val - A 6-letter HEX colour representation.
*/
function long_to_hex(style_value) {
	var rgb_temp = style_value.split("; ")[1];
	rgb_temp = rgb_temp.split(": rgb(")[1];
	rgb_temp = rgb_temp.split(")")[0];
	rgb_temp = rgb_temp.split(",");
	var num1 = rgb_temp[0];
	var num2 = rgb_temp[1];
	var num3 = rgb_temp[2];
  var hex_val = fullColorHex(num1,num2,num3);
	return hex_val;
}

/**
* @method Get_Settings
* @desc If a user has chosen a colour scheme of their own and/or changed the start date of the calendar,
* get this information from local storage and apply it.
* Otherwise, store default start date/colours of webpage in local storage,
* store css information to use and rerun function.
*/
function get_settings() {
	if ("settings" in localStorage) {
		settings = JSON.parse(localStorage.getItem("settings"));
		if (document.querySelector("html").getAttribute('id') == "settings") {
			document.getElementById("day_selection").value = settings[0];
			document.getElementById("colors_background").setAttribute("value",settings[1]);
			document.getElementById("colors_text").setAttribute("value",settings[2]);
			document.getElementById("colors_header").setAttribute("value",settings[3]);
			document.getElementById("colors_cal_date").setAttribute("value",settings[4]);
			document.getElementById("colors_cal_header").setAttribute("value",settings[5]);
		}
		if (localStorage.getItem("css_style") == "custom") {
			apply_settings(settings);
		}
	}
	else {
		settings = ["Sun","#FFFFFF","#000000","#333333","#FF0000","#FFFFFF"];
		localStorage.setItem("settings",JSON.stringify(settings));
		localStorage.setItem("css_style","default");
		get_settings();
	}
}

/**
* @method {Submit_settings}
* @desc Save any changes that a user makes on each component to local storage.
*/
function submit_settings() {
	var day = document.getElementById("day_selection").value;
	var back = document.getElementById("colors_background").getAttribute("style");
	var fore = document.getElementById("colors_text").getAttribute("style");
	var head = document.getElementById("colors_header").getAttribute("style");
	var cal_date = document.getElementById("colors_cal_date").getAttribute("style");
	var cal_head = document.getElementById("colors_cal_header").getAttribute("style");
	var settings = [day, back, fore, head, cal_date, cal_head];
	localStorage.removeItem("settings");
	localStorage.setItem("settings",JSON.stringify(settings));
	var json = JSON.parse(localStorage.getItem("settings"));
	val_1 = long_to_hex(json[1]);
	val_2 = long_to_hex(json[2]);
	val_3 = long_to_hex(json[3]);
	val_4 = long_to_hex(json[4]);
	val_5 = long_to_hex(json[5]);
	var settings = [day, val_1, val_2, val_3, val_4, val_5];
	localStorage.setItem("settings",JSON.stringify(settings));
	localStorage.setItem("css_style","custom");
  document.getElementById('main-mode').textContent = "Set to default colour scheme.";
  document.getElementById('main-mode').setAttribute('onclick', 'main()');
	apply_settings(settings);
	message("Settings","Settings applied successfully.");
	}

/**
* @method Apply_Settings
* @desc Override existing css scheme in use with user defined colours and
* calendar start date.
* @param {@link UserSettings User Settings}
*
*/
function apply_settings(settings) {
	document.getElementById('background').style.backgroundColor = settings[1];
	document.querySelector("html").style.color = settings[2];
	document.getElementById('header').style.backgroundColor = settings[3];
	if (document.querySelector("html").hasAttribute('class', "hascalendar")) {
		var tds = document.getElementsByTagName('td');
		var array = Array.prototype.map.call(tds, function(item) {
	if (item.getAttribute("class") !== "today_date") {
		item.style.backgroundColor = settings[4];
		item.onmouseleave = function f() {
        item.style.backgroundColor = settings[4];
		}
		item.onmouseover = function e() {
		this.style.backgroundColor = "silver";
		}
	}
		});
		var chs = document.getElementsByTagName('th');
		var array = Array.prototype.map.call(chs, function(item) {
		item.style.backgroundColor = settings[5];
		});
	}
}

/**
* @method invertColor
* @desc Used to display the user chosen colours in Settings.
* @param {String} hex Current colour of the box in colour picker.
* @param {boolean} bw Determines whether to use black or white to contrast colours.
*/
function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

/**
* @desc Get all colour picker inputs and apply styles to each based on the
* hex values in the input fields.
*/
var source = document.querySelectorAll('input');
    for (var i = 0, j = source.length; i < j; ++i) {
		if (document.querySelector("html").getAttribute("id") == "settings") {
			(new CP(source[i])).on('change', function(r, g, b, a) {
            this.source.value = this.color(r, g, b, a);
			this.source.style.color = invertColor(this.source.value, true);
			this.source.style.backgroundColor = this.source.value;
        });
		}
	}
