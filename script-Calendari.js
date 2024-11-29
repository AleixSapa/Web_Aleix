let users = {}; // Base de dades d'usuaris
let loggedInUser = null;
let notes = {}; // Objecte per guardar notes per dia
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // Es neteja el calendari actual

    document.getElementById("currentMonthYear").textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const weekdays = ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"];

    let weekdaysRow = document.createElement("div");
    weekdaysRow.classList.add("weekdays");
    weekdays.forEach(day => {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;
        weekdaysRow.appendChild(dayDiv);
    });
    calendar.appendChild(weekdaysRow);

    let daysRow = document.createElement("div");
    daysRow.classList.add("days");

    for (let i = 0; i < firstDayOfMonth; i++) {
        let emptyDiv = document.createElement("div");
        emptyDiv.classList.add("day", "empty");
        daysRow.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = i;
        dayDiv.onclick = () => openNoteModal(i);
        daysRow.appendChild(dayDiv);

        if ((firstDayOfMonth + i) % 7 === 0) {
            calendar.appendChild(daysRow);
            daysRow = document.createElement("div");
            daysRow.classList.add("days");
        }
    }

    if (daysRow.children.length > 0) {
        calendar.appendChild(daysRow);
    }
}

function getMonthName(monthIndex) {
    const months = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
    return months[monthIndex];
}

function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
}

function openNoteModal(day) {
    document.getElementById("noteModal").style.display = "flex";
    document.getElementById("saveNoteButton").onclick = () => saveNote(day);
}

function saveNote(day) {
    const noteText = document.getElementById("noteText").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;

    if (!notes[day]) {
        notes[day] = [];
    }

    notes[day].push({ noteText, startTime, endTime });
    document.getElementById("noteText").value = ""; // Netegem el camp de text
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";

    closeNoteModal();
}

function closeNoteModal() {
    document.getElementById("noteModal").style.display = "none";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        loggedInUser = username;
        document.getElementById("authSection").style.display = "none";
        document.getElementById("calendarSection").style.display = "block";
        generateCalendar();
    } else {
        alert("Nom d'usuari o contrasenya incorrecte.");
    }
}

function register() {
    const username = document.getElementById("usernameRegister").value;
    const password = document.getElementById("passwordRegister").value;

    if (!users[username]) {
        users[username] = password;
        alert("Registrat amb èxit!");
        toggleForm('login');
    } else {
        alert("Aquest nom d'usuari ja existeix.");
    }
}

function toggleForm(form) {
    if (form === 'login') {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("registerForm").style.display = "none";
    } else {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
    }
}
function generateCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // Es neteja el calendari actual

    document.getElementById("currentMonthYear").textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const weekdays = ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"];

    let weekdaysRow = document.createElement("div");
    weekdaysRow.classList.add("weekdays");
    weekdays.forEach(day => {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;
        weekdaysRow.appendChild(dayDiv);
    });
    calendar.appendChild(weekdaysRow);

    let daysRow = document.createElement("div");
    daysRow.classList.add("days");

    // Afegir buits per als dies abans del primer dia del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
        let emptyDiv = document.createElement("div");
        emptyDiv.classList.add("day", "empty");
        daysRow.appendChild(emptyDiv);
    }

    // Afegir els dies del mes
    for (let i = 1; i <= daysInMonth; i++) {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = i;
        dayDiv.onclick = () => openNoteModal(i);
        daysRow.appendChild(dayDiv);

        // Quan hem arribat al final d'una setmana, afegim la fila i comencem una nova
        if ((firstDayOfMonth + i) % 7 === 0) {
            calendar.appendChild(daysRow);
            daysRow = document.createElement("div");
            daysRow.classList.add("days");
        }
    }

    // Afegir la fila restant de dies (si en queda alguna)
    if (daysRow.children.length > 0) {
        calendar.appendChild(daysRow);
    }
}
