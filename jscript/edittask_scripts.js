var task_loaded;

window.onload = load_task();

function clicked() {
	var click = document.getElementById("click");
	click.loop = false;
	click.play();
	click.stop();
}

function load_task() {
	var url = window.location.href;
	var key = getKey(url);
	if (key in localStorage) {
		var task = JSON.parse(localStorage.getItem(key));
		task_loaded = key;
		console.log("Loaded task"+task[0]+" with ID "+task_loaded+" successfully.")
		document.getElementById("task_name").value = task[0];
		document.getElementById("priority-selection").value = task[1];
		document.getElementById("task_date").setAttribute("value",task[2]);
		document.getElementById("task_text").value = task[3];
		document.getElementById("task-type").value = task[5];
		document.getElementById("task_time").value = task[6];
		var subtasks = task[4];
		for (var item in subtasks) {
			document.getElementById("subtask_to_add").value = task[4][item];
			newSubtask();
			}
		document.getElementById("subtask_to_add").value = '';
		}
	else {
		if (document.querySelector("html").getAttribute("id") == "view_task") {
			window.location.replace("error/fail.html");
		}
		else {
			window.location.replace("../error/fail.html");
		}
	}
}

function revert() {
	window.location.reload(true);
}

function getKey(str) {
    return str.split('=')[1];
}

/*UPDATING TASK WITH ANY SUBTASKS INTO LOCAL STORAGE*/
function submission() {
	clicked();
	var items = document.getElementById("tasklist").getElementsByTagName("input");
		var array = Array.prototype.map.call(items, function(item) {
		return item.getAttribute("value");
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
		if (type == "Unassigned") {
			type = "No Type Set";
		}
		if (time == "") {
			time = "No Time Set";
		}
	var task = [name, pri, dat, desc, array, type, time];
	window.localStorage.setItem(task_loaded,JSON.stringify(task));
	window.localStorage.setItem("task_status","Task updated successfully!");
}
