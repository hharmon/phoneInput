// Function to create the input using the DOM model
function createPhoneNumberInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "phone-input";
    input.placeholder = "(123) 456-7890";
    input.addEventListener("input", formatPhoneNumber);
    document.body.appendChild(input);
  }
  
  // Function to format the phone number as the user types
  function formatPhoneNumber(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remove all non-digit characters
  
    if (value.length > 10) {
      value = value.slice(0, 10); // Limit to 10 digits
    }
  
    let formattedValue = "";
  
    if (value.length > 0) {
      formattedValue += "(";
    }
    if (value.length > 3) {
      formattedValue += value.slice(0, 3) + ") ";
      value = value.slice(3);
    }
    if (value.length > 3) {
      formattedValue += value.slice(0, 3) + "-";
      value = value.slice(3);
    }
    formattedValue += value;
  
    input.value = formattedValue;
  }
  
  // Call the function to create the input field when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", createPhoneNumberInput);
  