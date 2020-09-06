let today = new Date();
let currentDay = today.getDay();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
var datestore;

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
	clicked();
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
	clicked();
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function startDay() {
	var settings = JSON.parse(localStorage.getItem("settings"));
	if (settings[0] == "Sat") {
		return "<thead><tr><th>Sat</th><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th></tr></thead>";
	}
	if (settings[0] == "Sun") {
		return "<thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>";
	}
	if (settings[0] == "Mon") {
		return "<thead><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></thead>";
	}
}

function place_first(value) {
	if (JSON.parse(localStorage.getItem("settings"))[0] == "Sat") {
		return value+1;
	}
	if (JSON.parse(localStorage.getItem("settings"))[0] == "Sun") {
		return value;
	}
	if (JSON.parse(localStorage.getItem("settings"))[0] == "Mon") {
		return value-1;
	}
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");

    // set cells in table to headers only based on start date selection.
    tbl.innerHTML = startDay();

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, interactive dates allowing new task creation.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < place_first(firstDay)) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }
            else {
				datestore = padded(date)+"/"+padded(month+1)+"/"+year;
                let cell = document.createElement("td");
                let cellText = "<div class='tooltip'>"+date+"<span class='tooltiptext'>"+datestore+"</span>";
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("today_date");
                }
				else {
					cell.classList.add("calendar");
				}
				cell.setAttribute("onclick", "new_task('"+datestore+"')");
				cell.setAttribute("id", datestore);
                cell.innerHTML = cellText;
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }

		apply_settings(JSON.parse(localStorage.getItem("settings")));
}

function padded(val) {
	if (val < 10) {
		return "0"+val;
	}
	else {
		return val;
	}
}

function new_task_redirect(date) {
	localStorage.setItem("date-selected", date);
	window.location.replace("pages/forms/newtask.html");
}

function new_task(date) {
	popup("Task Creation","You have selected the following date: "+date+"\nDo you want to create a task to complete on/before this date?","new_task_redirect('"+date+"')");
}

function checkSelection() {
	if ('date-selected' in localStorage) {
		localStorage.removeItem('date-selected');
	}
}
