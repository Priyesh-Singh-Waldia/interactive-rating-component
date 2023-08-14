// Selecting the containers
const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thankyou-container");

// Selecting the submit button, btn and rating value
const submitButton = document.getElementById("submit");
const goBackButton = document.getElementById("back");
const rating = document.getElementById("rating");
const rateValue = document.querySelectorAll(".btn");

// Add click event to the submit button
submitButton.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

// Add click event to the go Back button
goBackButton.addEventListener("click", () => {
  thankYouContainer.classList.add("hidden");
  mainContainer.classList.remove("hidden");
});

// Display the selected rating on thank-you page
rateValue.forEach((value) => {
  value.addEventListener("click", () => {
    rating.innerHTML = value.innerHTML;
  });
});
