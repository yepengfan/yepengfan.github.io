// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
document
  .getElementById("subscribe-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.querySelector('input[type="email"]');
    const emailError = document.getElementById("email-error");

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.classList.add("text-red-500");
    } else {
      emailError.textContent = "";
      // Here you can add code to handle the valid email submission
      console.log("Email submitted:", emailInput.value);
    }
  });
