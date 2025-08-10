// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
document
  .getElementById("subscribe-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    const emailError = document.getElementById("email-error");
    const toast = document.getElementById("toast-notification");

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.classList.add("text-red-500");
      toast.style.display = "none"; // Hide toast on error
    } else {
      emailError.textContent = "";

      // Show success toast
      showToast("Success", "Your email has been successfully subscribed!");

      // Clear the input
      emailInput.value = "";
    }
  });

function showToast(status, message) {
  const toast = document.getElementById("toast-notification");
  const toastStatus = document.getElementById("toast-status");
  const toastMessage = document.getElementById("toast-message");

  // Set content
  toastStatus.textContent = status;
  toastMessage.textContent = message;

  // Add styling classes
  toastStatus.classList.add("success-status");
  toastMessage.classList.add("success-message");
  toast.classList.add("success-notification");

  // Show the toast
  toast.style.display = "flex";
  toast.style.position = "fixed";
  toast.style.top = "20px";
  toast.style.right = "20px";
  toast.style.zIndex = "1000";

  // Auto-hide after 3 seconds
  // setTimeout(() => {
  //   toast.style.display = "none";
  // }, 3000);
}

// Optional: Click to dismiss toast
document
  .getElementById("toast-notification")
  .addEventListener("click", function () {
    this.style.display = "none";
  });
