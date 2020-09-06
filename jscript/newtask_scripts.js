/*Retrieve tasklist and find all input subtasks. Use an iterator to have unique ids.*/
var j;
window.onload = initial();

function initial() {
	if ("date-selected" in localStorage) {
		var date = localStorage.getItem("date-selected");
		document.getElementById("task_date").value = date;
	}
	if ("task_id" in localStorage) {
		var j = Number(JSON.parse(localStorage.getItem("task_id"))) + 1;
		localStorage.setItem("task_id",j);
	}
	if (("task_id" in localStorage) == false) {
		var j = 0;
		localStorage.setItem("task_id",j);
	}
}

function clicked() {
	var click = document.getElementById("click");
	click.loop = false;
	click.play();
	click.stop();
}

const list = document.getElementById("tasklist");
var myNodelist = list.getElementsByTagName("input");
const new_task = "New Task"
var i = 0;

/*ADDING SUBTASKS*/
function newSubtask() {
	i = i + 1;
	if (document.getElementById("subtask_to_add").value !== "") {
		var nw = document.createElement("li");
		nw.setAttribute("class","container");
		nw.setAttribute("maxlength","30");
		txt = '<input type=text name=voodoo value=voodoo size="40" maxlength="20">';
		id_val = 'close'+i;
		txt = txt.concat('<button id="close0" class="close">×</button>');
		var value = document.getElementById("subtask_to_add").value;
		txt = txt.replace("voodoo", value);
		txt = txt.replace("voodoo", value);
		txt = txt.replace('close0', 'close'+i)
		txt = txt.replace("Task(close0)", "Task(close"+i+')"');
		nw.innerHTML = txt;
		document.getElementById("tasklist").appendChild(nw);
		document.getElementById(id_val).setAttribute("onclick", "delSubtask('"+id_val+"')");
		document.createElement("br");
		console.log("Subtask "+ document.getElementById("subtask_to_add").value+" added successfully.");
	}
	else {
		message("New Sub-Task","You must add text to subtask field.");
	}
}

/*DELETING SUBTASKS*/
function delSubtask(id_value) {
	document.getElementById(id_value).parentNode.remove();
	console.log("Subtask removed successfully.");
}

/*SAVING NEW TASK WITH ANY SUBTASKS INTO LOCAL STORAGE*/
function task_submission() {
	var items = document.getElementById("tasklist").getElementsByTagName("input");
		var array = Array.prototype.map.call(items, function(item) {
			if (item.getAttribute("type") !== "reset") {
				return item.getAttribute("value");
			}
		});

	var name = document.getElementById("task_name").value,
	pri = document.getElementById("priority-selection").value,
	dat = document.getElementById("task_date").value,
	desc = document.getElementById("task_text").value;
	time = document.getElementById("task_time").value;
	type = document.getElementById("task-type").value;
	
	if (name == "" || pri == "--" || dat == "" || desc == "") {
		if (name == "") {alert("Enter task name.")}
		if (pri == "--") {alert("Select task priority.")}
		if (dat == "") {alert("Set the task date.")}
		if (desc == "") {alert("Give the task description.")}
	}
	else if (name.length <= 5) {
		alert("Task title must be between 6 and 30 characters.");
	}
	else {
		window.localStorage.setItem("task_status","Task created successfully!");
		if (type == "Unassigned") {
			type = "No Type Set";
		}
		if (time == "") {
			time = "No Time Set";
		}
		var task = [name, pri, dat, desc, array, type, time];
		var j = localStorage.getItem("task_id");
		localStorage.setItem("task"+j,JSON.stringify(task));
		localStorage.setItem("task_id",j);
	}
}
