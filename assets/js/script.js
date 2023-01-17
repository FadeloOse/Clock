



const date = document.getElementById("date");
//fonction static objet + method (exemp : getFullYear est une fonction de 4chiffres allant de 0 à 9999).
const clock = document.getElementById('time')





function updateDate() {
	let newDate = new Date();
	let year = newDate.getFullYear();
	let month = newDate.getMonth() + 1;
	let days = newDate.getDate();
	
	let clockJSRead = `${days}/${month}/${year} `;
	date.textContent = clockJSRead;
}
setInterval(updateDate, 1000);
updateDate();



function updateHour() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
	let mins = currentTime.getMinutes();
	let sec = currentTime.getSeconds();

    let clockRead = `${hour}:${mins}:${sec}`;
    time.textContent = clockRead;
    console.log(clockRead);
}
setInterval(updateHour, 1000);
updateHour();