// Usable functions
function removeActiveClass(elements) {
  elements.forEach((el) => {
    el.classList.remove("active");
  });
}

// Dark Mode
themeBtns = document.querySelectorAll(".theme-div span");
themeLight = document.querySelector(".light");
themeDark = document.querySelector(".dark");
body = document.body;
ModeLS = localStorage.getItem("Mode");
body.setAttribute("data-bs-theme", ModeLS);
if (ModeLS === "dark") {
  themeDark.classList.add("active");
} else if (ModeLS === "light") {
  themeLight.classList.add("active");
}


themeLight.addEventListener("click", function () {
  removeActiveClass(themeBtns);
  this.classList.add("active");
  if (body.getAttribute("data-bs-theme") === "dark") {
    body.setAttribute("data-bs-theme", "light");
    localStorage.setItem("Mode", "light");
  }
});


themeDark.addEventListener("click", function () {
  removeActiveClass(themeBtns);
  this.classList.add("active");
  if (body.getAttribute("data-bs-theme") === "light") {
    body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("Mode", "dark");
  }
});

// setting gear
settingGear = document.querySelector(".setting");
settingList = document.querySelector(".setting-list");

settingGear.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-gear")) {
    document.querySelector(".fa-gear").classList.toggle("fa-spin");
    settingList.classList.toggle("hidden");
  }
});




