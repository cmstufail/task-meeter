const btn = document.getElementsByClassName("card-btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    alert("Board updated Successfully");
    btn[i].style.background = "#e5e7eb";
    btn[i].style.color = "#808080";

    // const taskAsign = document.getElementById("task-asign").innerText;
    // const incrementNumber = document.getElementById("increment-number").innerText;
    const activityLog = document.getElementById("activity-log");
    const clearHistory = document.getElementById("remove-history");
    const history = document.getElementById("history");
    const headingText =
      document.querySelectorAll(".heading-text")[i].textContent;

    const time = new Date();
    const timeString = time.toLocaleTimeString();

    const div = document.createElement("div");
    div.innerHTML = `
    
    <span> You have completed the task ${headingText} at ${timeString} </span>
    `;
    history.appendChild(div);

    clearHistory.addEventListener("click", function () {
      if (history.hasChildNodes()) {
        history.removeChild(history.lastChild);
      }
    });
  });
}

const btnEnd = document.getElementsByClassName("btn-end");
for (let i = 0; i < btn.length; i++) {
  btnEnd[i].addEventListener("click", function () {
    alert("congrates!!! You have completed all the current task");
  });
}
