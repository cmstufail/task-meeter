// dynamic page color array

const colors = [
  "#808080",
  "#4682B4",
  "#FF00FF",
  "#9370DB",
  "#6A5ACD",
  "#00BFFF",
];
let color = 0;

// dynamic date

const dayWeek = document.getElementById("day-week");
const dayMonth = document.getElementById("date");
const date = new Date();

// weeks name array
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// months name array
const monthOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dayOfWeek = daysOfWeek[date.getDay()];
const month = monthOfYear[date.getMonth()];

const dayOfMonth = date.getDate();
const year = date.getFullYear();

dayWeek.textContent = dayOfWeek;
dayMonth.textContent = `${month} ${dayOfMonth} ${year}`;

// blog page link
document
  .getElementById("enter-blog-page")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });

// dynamic page background change
document
  .getElementById("change-bg-color")
  .addEventListener("click", function () {
    document.body.style.background = colors[color];
    color = (color + 1) % colors.length;
  });

// initial value
let incrementCount = 23;
let decrementCount = 6;

const cardBtns = document.getElementsByClassName("card-btn");
const clearHistory = document.getElementById("remove-history");
const history = document.getElementById("history");
const btnEnds = document.getElementById("btn-end");
const headingTexts = document.querySelectorAll(".heading-text");

for (let i = 0; i < cardBtns.length; i++) {
  const cardBtn = cardBtns[i];

  cardBtn.addEventListener("click", function () {
    incrementCount++;

    if (decrementCount > 0) {
      decrementCount--;
    }
    document.getElementById("incrementDisplay").textContent = incrementCount;
    document.getElementById("decrementDisplay").textContent = decrementCount;

    alert("Board updated Successfully");
    cardBtn.style.background = "#e5e7eb";
    cardBtn.style.color = "#808080";

    // cards heading text
    const headingText = headingTexts[i] ? headingTexts[i].textContent : "Task";

    // time
    const time = new Date();
    const timeString = time.toLocaleTimeString();

    const div = document.createElement("div");
    div.style.background = "#f4f7ff";
    div.style.borderRadius = "10px";
    div.style.padding = "8px";
    div.style.marginBottom = "8px";

    // for button click time show
    // const emoji = "\uD83D\uDE0A";
    // const emoji = String.fromCodePoint(0x1f44f);
    // const emoji = "👏";
    const imageUrl = "./A5-Dev-Board/assets/emoji.png";


    div.innerHTML = `
    
    <span>You have completed the task ${headingText} at ${timeString} </span>    
    `;
    history.appendChild(div);
  });
}
// remove clear history
clearHistory.addEventListener("click", function () {
  while (history.firstChild) {
    history.removeChild(history.firstChild);
  }
});
// last card button
document.getElementById("btn-end").addEventListener("click", function () {
  alert("Congrates!!! You have completed all the current task");
});
