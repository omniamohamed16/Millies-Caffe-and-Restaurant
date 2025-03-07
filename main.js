// Dark Mode
themeBtn = document.querySelector(".theme");
body = document.body;
ModeLS = localStorage.getItem("Mode");
body.setAttribute("data-bs-theme", ModeLS);
themeBtn.addEventListener("click", function () {
  if (body.getAttribute("data-bs-theme") === "dark") {
    body.setAttribute("data-bs-theme", "light");
    localStorage.setItem("Mode", "light");
  } else {
    body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("Mode", "dark");
  }
  console.log(ModeLS);
});
