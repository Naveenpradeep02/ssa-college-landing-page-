const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
    const answer = q.nextElementSibling;
    answer.classList.toggle("show");
  });
});

const openMenu = () => {
  document.querySelector(".mobile").classList.add("show-menu");
};
const closeMenu = () => {
  document.querySelector(".mobile").classList.remove("show-menu");
};

setTimeout(() => {
  document.querySelector(".form-container").classList.add("close-form");
}, 8000);

const form = document.getElementById("studentForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value.trim();

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  submitBtn.textContent = "Submitting...";

  // Use fetch API to submit form data
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    mode: "no-cors", // needed for Google Sheets endpoint
  })
    .then(() => {
      alert("Form submitted successfully!");
      form.reset();
      window.location.href = "#"; // change to your page
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
      submitBtn.textContent = "Submit"; // reset button text
    });
});

const openForm = () => {
  document.querySelector(".form-container").classList.add("close-form");
};
const closeForm = () => {
  document.querySelector(".form-container").classList.remove("close-form");
};

window.addEventListener("scroll", () => {
  const floatSection = document.querySelector(".float-section");
  if (window.scrollY > 200) {
    // Show after scrolling 200px
    floatSection.style.display = "block";
  } else {
    floatSection.style.display = "none";
  }
});
