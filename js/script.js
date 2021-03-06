// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var randomNumber, randomQuote, hexColor, randomColor, quote, timeout;
var message = '';
var bgColor = '';

// Refresh page using the setTimeout and reload methods after a specified time in milliseconds
// The resetTimeout function resets the refresh timer giving you time to read the quote if you click the new quote button well into the timer :)
timeout = setTimeout("location.reload(true);",25000);
  function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout("location.reload(true);",25000);
  }

// This print function targets a specific section on the html page with id 'quote-box'
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

// Generate random number from 0 to 19 to use in randomly selecting individual quote and color objects.
function getRandomNumber() {
  return Math.floor(Math.random() * 19) + 1;
}

// Generate random background color on click;
function printColor() {
  document.body.style.backgroundColor = bgColors[getRandomNumber()];
}

function buttonColor() {
  document.getElementById('loadQuote').style.backgroundColor = bgColors[getRandomNumber()];
}

// Picks a random quote from the quotes object
function getRandomQuote(quote) {
  return quotes[getRandomNumber()];
}

// This function will print the random quote object on the page
function printQuote() {
  quote = getRandomQuote();
  randomQuote = '<p class= "quote">' + quote.quote + '</p>';
  randomQuote += '<p class= "source">' + quote.source;
  if (quote.citation !== '') {
    randomQuote += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year !== undefined) {
    randomQuote += '<span class= "year">' + quote.year + '</span>';
  }
  randomQuote += '<span class="tag">' + quote.tag + '</span>';
  randomQuote += '</p>';
  print(randomQuote);
}

// Put all functions into a single function and call all at once
// Will be usefull during the 'onclick' function calls in the html
function callFunctions() {
  printColor();
  printQuote();
  buttonColor();
  resetTimeout();
}
callFunctions();
