const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

let navbar_closer = document.getElementById("doc_navbar_closer");
let navbar_toogler = document.getElementById("doc_navbar_toogler");
let navbar = document.getElementById("doc_navbar");

dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();

    const dropdownMenu = this.nextElementSibling;

    document.querySelectorAll(".dropdown").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.remove("show");
      }
    });

    dropdownMenu.classList.toggle("show");
  });
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".option")) {
    document.querySelectorAll(".dropdown").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
});

function showDocList() {
  navbar_closer.style.left = "350px";
  navbar_closer.style.display = "flex";
  navbar_toogler.style.display = "none";
  navbar.style.display = "block";
}

function closeDocList() {
  navbar_closer.style.left = "0";
  navbar_closer.style.display = "none";
  navbar_toogler.style.display = "flex";
  navbar.style.display = "none";
}

let phone__navbar_toogler_on = document.getElementById(
  "phone__navbar_toogler_on"
);
let phone__navbar_toogler_off = document.getElementById(
  "phone__navbar_toogler_off"
);

phone__navbar_toogler_off.style.display = "none";

let phone__navbar_dropdown = document.getElementById("phone__navbar_dropdown");

function showPhoneList() {
  phone__navbar_toogler_on.style.display = "none";
  phone__navbar_toogler_off.style.display = "block";
  phone__navbar_dropdown.style.display = "block";

  navbar_toogler.style.display = "none";
  navbar_closer.style.display = "none";
}
function hidePhoneList() {
  phone__navbar_toogler_on.style.display = "block";
  phone__navbar_toogler_off.style.display = "none";
  phone__navbar_dropdown.style.display = "none";

  navbar_toogler.style.display = "flex";
  navbar_closer.style.display = "flex";
}
