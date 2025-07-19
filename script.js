let results = document.getElementById("converted-value");

const from = document.getElementById("from");
const to = document.getElementById("to");
const inputField = document.getElementById("input");

to.onchange = convertTemperature;
from.onchange = convertTemperature;
inputField.oninput = convertTemperature;

function convertTemperature() {
  results.innerHTML = "";
  results.style.color = "black";

  let input = parseFloat(inputField.value);
  let fromValue = from.value;
  let toValue = to.value;

  if (fromValue === toValue) {
    results.style.color = "red";
    results.innerHTML = "CONVERSION UNITS SHOULD BE DIFFERENT!";
    return;
  }

  if (isNaN(input)) {
    results.style.color = "red";
    results.innerHTML = "Please enter a valid number!";
    return;
  }

  if (fromValue === "celsius" && toValue === "fahrenheit") celsiusToFahrenheit(input);
  else if (fromValue === "celsius" && toValue === "kelvin") celsiusToKelvin(input);
  else if (fromValue === "fahrenheit" && toValue === "celsius") fahrenheitToCelsius(input);
  else if (fromValue === "fahrenheit" && toValue === "kelvin") fahrenheitToKelvin(input);
  else if (fromValue === "kelvin" && toValue === "celsius") kelvinToCelsius(input);
  else if (fromValue === "kelvin" && toValue === "fahrenheit") kelvinToFahrenheit(input);
}

// Conversion Functions

const celsiusToFahrenheit = (input) => {
  let result = (input * 9 / 5) + 32;
  results.innerHTML = `The final converted value is ${result.toFixed(2)} °F`;
};

const celsiusToKelvin = (input) => {
  let result = input + 273.15;
  results.innerHTML = `The final converted value is ${result.toFixed(2)} K`;
};

const fahrenheitToCelsius = (input) => {
  let result = (input - 32) * 5 / 9;
  results.innerHTML = `The final converted value is ${result.toFixed(2)} °C`;
};

const fahrenheitToKelvin = (input) => {
  let result = (input + 459.67) * 5 / 9;
  results.innerHTML = `The final converted value is ${result.toFixed(2)} K`;
};

const kelvinToCelsius = (input) => {
  let result = input - 273.15;
  results.innerHTML = `The final converted value is ${result.toFixed(2)} °C`;
};

const kelvinToFahrenheit = (input) => {
  let result = (input * 9 / 5) - 459.67;
  results.innerHTML = `The final converted value is ${result.toFixed(2)} °F`;
};
