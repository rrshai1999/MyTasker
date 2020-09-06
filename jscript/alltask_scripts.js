/*LOAD ALL TASKS CURRENTLY STORED.*/
var count;

function Name() {
	var tasklist = document.getElementById("all_task_list");
	tasklist.innerHTML = '';
	count = 0;
	for (var key in localStorage) {
		if (key_test(key)) {
			count = count + 1;
			var task = JSON.parse(localStorage.getItem(key));
			var list_item = document.createElement("p");
			var task_title = document.createTextNode(task[0]);
			var task_priority = document.createTextNode(priority_converter(task[1]));
			var item_text = '<button id="accept_'+task[0]+'" class="unchecked">&check;</button>&emsp;'
			var task_date = document.createTextNode("due on "+this_date(task[2]));
			var task_type = document.createTextNode(task[5]);
			var task_time = document.createTextNode(task[6]);
			var edit_button = document.createElement('button');
			edt_value = "edit_"+task[0];
			view_value = "view_"+task[0];
			edit_button.setAttribute('id', edt_value);
			edit_button.setAttribute('onclick', "edit('"+task[0]+"')");
			edit_button.innerHTML = "Edit Task";
			list_item.innerHTML = item_text;
			list_item.setAttribute("class", "unchecked");
			list_item.appendChild(task_title);
			list_item.appendChild(document.createTextNode(", Type: "));
			list_item.appendChild(task_type);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(task_date);
			list_item.appendChild(document.createTextNode(" at "));
			list_item.appendChild(task_time);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(task_priority);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(edit_button);
			view_button = document.createElement("button");
			view_button.setAttribute("id", view_value);
			view_button.setAttribute("onclick","view('"+task[0]+"')");
			view_button.innerHTML = "View Task";
			list_item.appendChild(view_button);
			tasklist.appendChild(list_item);
			button_value = "accept_"+task[0];
			document.getElementById(button_value).setAttribute("onclick", 'selection("'+button_value+'")');
		}
	}

	document.getElementById("name_order").innerText = "Sorted by name order.";
	document.getElementById("name_order").setAttribute("onclick","message('Sort Tasks','Tasks already sorted by name.')");

	document.getElementById("date_order").innerText = "Can be sorted by date order.";
	document.getElementById("date_order").setAttribute("onclick","date()");

	document.getElementById("priority_order").innerText = "Can be sorted by priority order.";
	document.getElementById("priority_order").setAttribute("onclick","Priority()");

	if (localStorage.getItem("sort_mode") !== "name_order")	{
		message("Sort Tasks","Tasks now in order by name.");
	}
	localStorage.setItem("sort_mode","name_order");
	delete_undefined();
	sortList();
}

function date() {
	var tasklist = document.getElementById("all_task_list");
	tasklist.innerHTML = '';
	count = 0;
	for (var key in localStorage) {
		if (key_test(key)) {
			count = count + 1;
			var task = JSON.parse(localStorage.getItem(key));
			var list_item = document.createElement("p");
			var task_title = document.createTextNode(task[0]);
			var task_priority = document.createTextNode(priority_converter(task[1]));
			var item_text = '<button id="accept_'+task[0]+'" class="unchecked">&check;</button>&emsp;'
			var task_date = document.createTextNode("Due on "+this_date(task[2]));
			var task_type = document.createTextNode(task[5]);
			var task_time = document.createTextNode(task[6]);
			var edit_button = document.createElement('button')
			edt_value = "edit_"+task[0];
			view_value = "view_"+task[0];
			edit_button.setAttribute('id', edt_value);
			edit_button.setAttribute('onclick', "edit('"+task[0]+"')")
			edit_button.innerHTML = "Edit Task";
			list_item.innerHTML = item_text;
			list_item.setAttribute("class", "unchecked");
			list_item.appendChild(task_date);
			list_item.appendChild(document.createTextNode(" at "));
			list_item.appendChild(task_time);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(task_title);
			list_item.appendChild(document.createTextNode(", Type: "));
			list_item.appendChild(task_type);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(task_priority);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(edit_button);
			view_button = document.createElement("button");
			view_button.setAttribute("id", view_value);
			view_button.setAttribute("onclick","view('"+task[0]+"')");
			view_button.innerHTML = "View Task";
			list_item.appendChild(view_button);
			tasklist.appendChild(list_item);
			button_value = "accept_"+task[0];
			document.getElementById(button_value).setAttribute("onclick", 'selection("'+button_value+'")');
		}
	}
	document.getElementById("date_order").innerText = "Sorted by date order.";
	document.getElementById("date_order").setAttribute("onclick","message('Sort Tasks','Tasks already sorted by date.')");

	document.getElementById("name_order").innerText = "Can be sorted by name order.";
	document.getElementById("name_order").setAttribute("onclick","Name()");

	document.getElementById("priority_order").innerText = "Can be sorted by priority order.";
	document.getElementById("priority_order").setAttribute("onclick","Priority()");

	if (localStorage.getItem("sort_mode") !== "date_order")	{
		message("Sort Tasks","Tasks now in order by date.");
	}
	localStorage.setItem("sort_mode","date_order");
	delete_undefined();
	sortList();
}

function Priority() {
	var tasklist = document.getElementById("all_task_list");
	tasklist.innerHTML = '';
	count = 0;
	for (var key in localStorage) {
		if (key_test(key)) {
			count = count + 1;
			var task = JSON.parse(localStorage.getItem(key));
			var list_item = document.createElement("p");
			var task_title = document.createTextNode(task[0]);
			var task_priority = document.createTextNode(priority_converter(task[1]));
			var item_text = '<button id="accept_'+task[0]+'" class="unchecked">&check;</button>&emsp;'
			var task_date = document.createTextNode("due on "+this_date(task[2]));
			var task_type = document.createTextNode(task[5]);
			var task_time = document.createTextNode(task[6]);
			var edit_button = document.createElement('button')
			edt_value = "edit_"+task[0];
			view_value = "view_"+task[0];
			edit_button.setAttribute('id', edt_value);
			edit_button.setAttribute('onclick', "edit('"+task[0]+"')")
			edit_button.innerHTML = "Edit Task";
			list_item.innerHTML = item_text;
			list_item.setAttribute("class", "unchecked");
			list_item.appendChild(task_priority);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(task_title);
			list_item.appendChild(document.createTextNode(", Task: "));
			list_item.appendChild(task_type);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(task_date);
			list_item.appendChild(document.createTextNode(" at "));
			list_item.appendChild(task_time);
			list_item.appendChild(document.createTextNode(", "));
			list_item.appendChild(edit_button);
			view_button = document.createElement("button");
			view_button.setAttribute("id", view_value);
			view_button.setAttribute("onclick","view('"+task[0]+"')");
			view_button.innerHTML = "View Task";
			list_item.appendChild(view_button);
			tasklist.appendChild(list_item);
			button_value = "accept_"+task[0];
			document.getElementById(button_value).setAttribute("onclick", 'selection("'+button_value+'")');
		}
	}
	document.getElementById("priority_order").innerText = "Sorted by priority order.";
	document.getElementById("priority_order").setAttribute("onclick","message('Sort Tasks','Tasks already sorted by priority.')");

	document.getElementById("name_order").innerText = "Can be sorted by name order.";
	document.getElementById("name_order").setAttribute("onclick","Name()");

	document.getElementById("date_order").innerText = "Can be sorted by date order.";
	document.getElementById("date_order").setAttribute("onclick","date()");

	if (localStorage.getItem("sort_mode") !== "priority_order")	{
		message("Sort Tasks","Tasks now in order by priority.");
	}
	localStorage.setItem("sort_mode","priority_order");
	delete_undefined();
	sortList();
}

function this_date(item) {
	if (typeof(item) != 'undefined' && item != null) {
		year = item.split("-")[0];
		month = item.split("-")[1];
		day = item.split("-")[2];
		return day+"/"+month+"/"+year;
	}
	else {
		return item;
	}
}

function priority_converter(value) {
	switch(value) {
		case 'least':
			return "5 (Lowest)";
			break;
		case 'low':
			return "4 (Low)";
			break;
		case 'normal':
			return "3 (Moderate)";
			break;
		case 'higher':
			return "2 (High)";
			break;
		case 'most':
			return "1 (Urgent)";
			break;
	}
}

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("all_task_list");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("P");
    for (i = 0; i < (b.length - 1); i++) {

      shouldSwitch = false;
	  if (localStorage.getItem("sort_mode") == "date_order") {
		  date = b[i].innerHTML.split('Due on ')[1];
		  date = date.split(",")[0];
		  date = date.split("/");
		  date_b = b[i + 1].innerHTML.split('Due on ')[1];
		  date_b = date_b.split(",")[0];
		  date_b = date_b.split("/");
			if (date[1] > date_b[1]) {
			  shouldSwitch = true;
			  break;
			}
		}
	  
	  else {
		if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break; 
		}
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

window.onload = function e() {
	if ("task_status" in localStorage) {
		message("Task Status",localStorage.getItem("task_status"));
		localStorage.removeItem("task_status");
	}
	if ("sort_mode" in localStorage) {
		if (localStorage.getItem("sort_mode") == "name_order") {Name();}
		else if (localStorage.getItem("sort_mode") == "date_order") {date();}
		else {Priority();}
	}
	else {
		localStorage.setItem("sort_mode","name_order");
		setTimeout(Name, 2000);
	}
	document.getElementById("task_count").innerText = "Task List, "+(count-1)+" tasks.";
}

/**CHECK TO SEE IF KEYS IN LOCAL STORAGE ARE TASK KEYS*/
function key_test(test) {
	if (test.indexOf("task") !== -1) {return true;}
	else {return false;}
}

function get_task_key(item) {
	if (localStorage.getItem("sort_mode") == "name_order") {
		id_value = item.innerHTML;
		id_value = id_value.split('</button>')[1];
		id_value = id_value.split(',')[0];
		id_value = id_value.trim();
	}
	else {
		id_value = item.innerHTML;
		id_value = id_value.split('</button>')[1];
		id_value = id_value.split(',')[1];
		id_value = id_value.trim();
	}
	for (var key in localStorage){
		if (key_test(key)) {
			var task = JSON.parse(localStorage.getItem(key));
				if (task[0] == id_value) {
					localStorage.removeItem(key);
			}
		}
	}
}

function delete_undefined() {
	var element =  document.getElementById('accept_undefined');
		if (typeof(element) != 'undefined' && element != null)	{
		var undef = document.getElementById("accept_undefined");
		undef.parentNode.remove(undef);
	}
}

function delete_all_tasks() {
	var check = confirm("Are you sure you wish to delete ALL tasks? This action CANNOT be undone.");
	if (check) {
		var paras = document.getElementsByClassName('checked');
		while (paras[0]) {
			get_task_key(paras[0]);
			paras[0].parentNode.removeChild(paras[0]);
			console.log("Task removed successfully");
		}
		paras = document.getElementsByClassName('unchecked');
		while (paras[0]) {
			get_task_key(paras[0]);
			paras[0].parentNode.removeChild(paras[0]);
			console.log("Task removed successfully");
		}
		tasks_count = 0;
		clicked();
		update_tasks_count(tasks_count);
		message("Task Deletion","Tasks removed successfully!");
		}
	else {
		message("Task Deletion","Deletion cancelled.");
	}
}

function delete_tasks_selected() {
	var check = confirm("Are you sure you wish to delete these tasks? This action is irreversible and CANNOT be undone?");
	if (check) {
		if (tasks_count !== 0) {
		var paras = document.getElementsByClassName('checked');
		while (paras[0]) {
			get_task_key(paras[0]);
			paras[0].parentNode.removeChild(paras[0]);
			console.log("Task removed successfully");
			tasks_count--;
		}
		message("Task Deletion","Tasks removed successfully!");
		update_tasks_count(tasks_count);
		clicked();
		}
		else {
		message("Task Deletion","You must select tasks to delete!");
		}
	}
	else {
		message("Task Deletion","Deletion cancelled.");
		}
	}

var tasks_count = 0;

function selection(value) {
	var into = document.getElementById(value);
	if (into.parentNode.getAttribute("class") == "unchecked") {
		into.parentNode.setAttribute("class", "checked");
		into.setAttribute("class", "checked");
		tasks_count++;
		update_tasks_count(tasks_count);
	}
	else {
		into.parentNode.setAttribute("class", "unchecked");
		into.setAttribute("class", "unchecked");
		tasks_count--;
		update_tasks_count(tasks_count);
	}
	clicked();
}

function update_tasks_count(value) {
	if (value !== 0) {
		document.getElementById("task_count").innerText = "Task List - "+value+" task(s) selected.";
	}
	else {
		document.getElementById("task_count").innerText = "Task List, "+(count-1)+" tasks.";
	}
}

function edit(id_value) {
	for (var key in localStorage){
		if (key_test(key)) {
			var task = JSON.parse(localStorage.getItem(key));
				if (task[0] == id_value) {
					message("Task Edit","Loading information from "+task[0]+"...");
					break;
				}
			}
		}
	if ("date-selected" in localStorage) {
		localStorage.removeItem("date-selected");
	}
	setTimeout(function f() {window.location.replace("forms/edittask.html?key="+key)},3000);
	}

	function view(id_value) {
		for (var key in localStorage){
			if (key_test(key)) {
				var task = JSON.parse(localStorage.getItem(key));
					if (task[0] == id_value) {
						message("Task View","Loading information from "+task[0]+"...");
						break;
					}
				}
			}
		if ("date-selected" in localStorage) {
			localStorage.removeItem("date-selected");
		}
		setTimeout(function f() {window.location.replace("viewtask.html?key="+key)},3000);
		}