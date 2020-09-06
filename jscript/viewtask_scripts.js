window.onload = e();

function e() {
  var i = 0
  var nlink = window.location.href;
  var task = getKey(nlink);
  var button = document.getElementById("edit_btn");
  var subtask_input = document.getElementById("subtask_to_add");
  subtask_input.parentNode.removeChild(subtask_input);
  var buttons = document.getElementsByTagName("li");
  var array = Array.prototype.map.call(buttons, function(item) {
	  if (item.innerText.indexOf("Choose") == -1) {
		  item.innerHTML = item.innerHTML.split("<button ")[0];
		  item.innerHTML = item.innerHTML.replace(">", "readonly>");
	  }
	  
  });
  var alltasks = document.getElementById("return");
  button.setAttribute("onclick","edit('"+task+"')");
  alltasks.setAttribute("onclick","window.location.replace('alltasks.html')");
  document.querySelector("title").innerText = "MyTask: "+JSON.parse(localStorage.getItem(task))[0];
  
}

function edit(key) {
	var task = JSON.parse(localStorage.getItem(getKey(window.location.href)))[0];
	message("Task Edit","Preparing to edit task "+task);
	if ("date-selected" in localStorage) {
		localStorage.removeItem("date-selected");
	}
	setTimeout(function() {window.location.replace("forms/edittask.html?key="+key)},3000);
	}

function getKey(str) {
    return str.split('=')[1];
}

function key_test(test) {
	if (test.indexOf("task") !== -1) {return true;}
	else {return false;}
}
