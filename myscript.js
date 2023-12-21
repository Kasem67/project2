// myScript.js

// Get the display element
const display = document.getElementById('my-result');

// Get all the number buttons
const numberButtons = document.querySelectorAll('.my-number');

// Get all the operator buttons
const operatorButtons = document.querySelectorAll('.my-operator');

// Get the clear button
const clearButton = document.getElementById('my-clear');
// Get the equal button
const equalButton = document.getElementById('my-equal');

// Store the current input and result
let input = '';
let result = '';

// Add event listeners to number buttons
numberButtons.forEach(button => {
   button.addEventListener('click', () => {
      input += button.textContent;
      display.value = input;
   });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
   button.addEventListener('click', () => {
      input += button.textContent;
      display.value = input;
   });
});

// Add event listener to clear button
clearButton.addEventListener('click', () => {
   input = '';
   result = '';
   display.value = '';
});

// Add event listener to equal button
equalButton.addEventListener('click', () => {
   try {
      result = eval(input);
      display.value = result;
   } catch (error) {
      display.value = 'Error';
   }
});
// Get the decimal button
const decimalButton = document.querySelector('.my-number');

// ...

// Add event listener to decimal button
decimalButton.addEventListener('click', () => {
   if (!input.includes('.')) {
      input += '.';
      display.value = input;
   }
});

// ...
const percentageButton = document.querySelector('.my-operator');

// ...

// Add event listener to percentage button
percentageButton.addEventListener('click', () => {
   if (input !== '') {
      const percentage = parseFloat(input) / 100;
      input = percentage.toString();
      display.value = input;
   }
});
// Get the backspace button
const backspaceButton = document.getElementById('my-backspace');

// ...

// Add event listener to backspace button
backspaceButton.addEventListener('click', () => {
   if (input !== '') {
      input = input.slice(0, -1);
      display.value = input;
   }
});