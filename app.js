//timestamp
let myDate = Date.now();
document.getElementById("timestamp").innerHTML = myDate.toString();

// date local
let myDate2 = new Date(2021,10,29);
document.getElementById("localDate").innerHTML = myDate2.toLocaleDateString();

//hours local
let myDate3 = new Date();
document.getElementById("localTime").innerHTML = myDate3.toLocaleTimeString();

//new Date and new hours
let today = new Date();
let newDay = new Date();
newDay.setDate(today.getDate() +2);
newDay.setHours(today.getHours() +6);
document.getElementById("newDate").innerHTML = newDay.toString();

if ( newDay > today) {
   let difference = document.createElement("div");
   let interval = today.getTime() - newDay.getTime();
   let days = Math.floor(interval / 1000 / 60 / 60 / 24);
   let hours = Math.floor(interval / 1000 / 60 / 60);
   let minutes = Math.floor(interval / 1000 / 60);
   let seconds = Math.floor(interval / 1000);

   difference.innerHTML = "Entre aujourd'hui et le nouveau jour, il y a: <br> ";
   difference.innerHTML += days + " jours ou <br>";
   difference.innerHTML += hours + " heures ou <br>";
   difference.innerHTML += minutes + " minutes ou <br>";
   difference.innerHTML += seconds + " secondes";

   document.body.appendChild(difference);
}