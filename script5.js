let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let int;

let h1 = document.querySelector("h1");

start.addEventListener("click", function () {
  let count = 0;
  int = setInterval(() => {
    h1.textContent = count;
    count++;
  }, 500);
});

stop.addEventListener("click", function () {
  clearInterval(int);
});
