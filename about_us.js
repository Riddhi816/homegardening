const toggleButton = document.querySelector('.menu-toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const description = document.getElementById("description").value;

  if (!name || !email || !description) {
    alert("Please fill out all fields.");
    return;
  }

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Description:", description);
  document.getElementById("contactForm").reset();
});

function toggleDropdown(id) {
  const content = document.getElementById(id);
  const icon = content.previousElementSibling.querySelector('i');
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  } else {
    content.style.display = "none";
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  }
}