links = document.querySelectorAll(".links li a");
icon = document.querySelector("nav .checkbtn");
menuBar = document.querySelector("nav ul ");

links.forEach((e) => {
  e.addEventListener("click", function () {
    links.forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});

icon.addEventListener("click", function () {
  menuBar.classList.toggle("open");
});
