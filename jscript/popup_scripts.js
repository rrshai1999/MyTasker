/**
* @name Popup
* @desc Universal popup that takes in title, message and button names.
* Used to alert user on system information and let them make a choice on what to do.
* A user may confirm or cancel an action.
* @param {String} title_text Title of the popup.
* @param {String} body_text Main message of the popup.
* @param {String} button_1 Function you wish to apply when the user clicks Confirm.
*/
function popup(title_text, body_text, button_1) {

	/*THE BACKGROUND OF THE WEBPAGE*/
	var body = document.getElementById("background");

	/*POPUP COMPONENTS*/
	var popup = document.createElement("div");
	var popup_title = document.createElement("div");
	var popup_header = document.createElement("div");
	var popup_body = document.createElement("div");
	var popup_buttons = document.createElement("div");
	var overlay = document.createElement("div");
	var popup_close = document.createElement("button");
	var popup_confirm = document.createElement("button");
	var popup_cancel = document.createElement("button");

	/*BUTTON THAT CLOSES POPUP*/
	popup_close.setAttribute("id", "popup-close");
	popup_close.setAttribute("onclick", "popup_close()");
	popup_close.innerText = "×";

	/*TITLE OF POPUP*/
	popup_title.setAttribute("id", "popup-title");
	popup_title.innerText = title_text;

	/*HEADER CONTAINING TITLE AND CLOSE BUTTON OF POPUP*/
	popup_header.setAttribute("id", "popup-header");
	popup_header.appendChild(popup_title);
	popup_header.appendChild(popup_close);

	/*MAIN TEXT OF POPUP BELOW HEADER*/
	popup_body.setAttribute("id", "popup-body");
	popup_body.innerText = body_text;

	/*CONFIRM BUTTON*/
	popup_confirm.setAttribute("id","popup-confirm");
	popup_confirm.innerText = "Confirm";
	popup_confirm.setAttribute("onclick",button_1);

	/*CANCEL BUTTON*/
	popup_cancel.setAttribute("id","popup-cancel");
	popup_cancel.innerText = "Cancel";
	popup_cancel.setAttribute("onclick","popup_close()");

	/*BUTTONS CONTAINER*/
	popup_buttons.setAttribute("class","popup-buttons");
	popup_buttons.appendChild(popup_confirm);
	popup_buttons.appendChild(popup_cancel);

	/*POPUP WITH ALL ELEMENTS TOGETHER*/
	popup.setAttribute("id","popup");
	popup.appendChild(popup_header);
	popup.appendChild(popup_body);
	popup.appendChild(popup_buttons);

	/*OVERLAY TO DISABLE USER CLICKING WRONG THINGS*/
	overlay.setAttribute("id","overlay");

	body.appendChild(popup);
	body.appendChild(overlay);

	document.getElementById("popup").setAttribute("class","popup active");
	document.getElementById("overlay").setAttribute("class","active");
}
/**
* @name Close
* @desc Closes the popup, acts as a cancel returning false to the parent function/variable.
*/
function popup_close() {
	var overlay = document.getElementById("overlay");
	var popup = document.getElementById("popup");
	popup.parentNode.removeChild(popup);
	overlay.parentNode.removeChild(overlay);
	return false;
}
/**
* @name Continue
* @desc Closes the popup, acts as a confirm returning true to the parent function/variable.
*/
function popup_continue() {
	var overlay = document.getElementById("overlay");
	var popup = document.getElementById("popup");
	popup.parentNode.removeChild(popup);
	overlay.parentNode.removeChild(overlay);
	return true;
}
/**
* @name Clicked
* @desc The audio control to play click sounds for notification.
*/
function clicked() {
	var click = document.getElementById("click");
	click.loop = false;
	click.play();
}
/**
* @name Message
* @desc Universal popup that takes in title, message and button names.
* Used to alert user on system information.
* @param {String} title_text Title of the message.
* @param {String} body_text Main message of the message.
*/
function message(title_text, body_text) {

	/*MAIN PAGE BODY*/
	var body = document.getElementById("background");

	/*POPUP COMPONENTS*/
	var popup = document.createElement("div");
	var popup_title = document.createElement("div");
	var popup_header = document.createElement("div");
	var popup_body = document.createElement("div");
	var popup_buttons = document.createElement("div");
	var overlay = document.createElement("div");
	var popup_close = document.createElement("button");
	var popup_confirm = document.createElement("button");
	var popup_cancel = document.createElement("button");

	/*BUTTON THAT CLOSES POPUP*/
	popup_close.setAttribute("id", "popup-close");
	popup_close.setAttribute("onclick", "popup_close()");
	popup_close.innerText = "×";

	/*TITLE OF POPUP*/
	popup_title.setAttribute("id", "popup-title");
	popup_title.innerText = title_text;

	/*HEADER CONTAINING TITLE AND CLOSE BUTTON OF POPUP*/
	popup_header.setAttribute("id", "popup-header");
	popup_header.appendChild(popup_title);
	popup_header.appendChild(popup_close);

	/*MAIN TEXT OF POPUP BELOW HEADER*/
	popup_body.setAttribute("id", "popup-body");
	popup_body.innerText = body_text;

	/*CANCEL BUTTON*/
	popup_cancel.setAttribute("id","popup-cancel");
	popup_cancel.innerText = "OK";
	popup_cancel.setAttribute("onclick","popup_close()");

	/*BUTTONS CONTAINER*/
	popup_buttons.setAttribute("class","popup-buttons");
	popup_buttons.appendChild(popup_cancel);

	/*POPUP WITH ALL ELEMENTS TOGETHER*/
	popup.setAttribute("id","popup");
	popup.appendChild(popup_header);
	popup.appendChild(popup_body);
	popup.appendChild(popup_buttons);

	/*OVERLAY TO DISABLE USER CLICKING WRONG THINGS*/
	overlay.setAttribute("id","overlay");

	body.appendChild(popup);
	body.appendChild(overlay);

	document.getElementById("popup").setAttribute("class","popup active");
	document.getElementById("overlay").setAttribute("class","active");
	
	console.log(body_text);

}

/**
* @name PreventionMeasures
* @desc If any key combinations are attempted to inspect the website,
* ensure they are rendered useless.
*/
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

function index_hint() {
	message('MyTasker Header','By using MyTasker, you accept that MyTasker will use local storage in your browser to store and retrieve information. DO NOT tamper with anything in local storage unless you know what you are doing.\n\nAdd New Task - allows you to create a new task.\n\nMyTasks - sends you to the list of tasks created in MyTasker\n\nMySettings - sends you to MyTasker settings currently in use\n\nChoose colour scheme - allows you to choose preset schemes.\n\nCalendar - allows you to create a task due on the date selected.');
}

function view_task_hint() {
	message('MyTasker View Task','Unhappy with the task information? No problem!\n\nEdit this task - Allows you to make changes to the currently loaded task.\n\nGo Back - returns you to the tasklist.');
}

function task_form_hint() {
	message('MyTasker Task Form','Task name - the title of the task. Between 6 and 30 characters.\n\nTask priority - the urgency of the task. Options include Lowest, Low, Moderate, High and Urgent.\n\nTask date - the date that the task must be completed for.\n\nTask description - a summary of what the task should accomplish and may involve.');
}

function subtask_form_hint() {
	message('MyTasker Task Form','Subtasks are no longer than 20 characters and can be edited once added. Changes are saved automatically.\n\nAdd - will create a subtask to go with the task. Max length: 20 characters.\n\n× - will delete the subtask next to it from the task')
}

function settings_hint() {
	message('MySettings','Background Colour - The website background colour\n\nText Colour - The colour of the text on MyTasker\n\nHeader Background Colour - The background colour of the navigation header.')
}