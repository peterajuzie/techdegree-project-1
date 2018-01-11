// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var randomNumber, randomQuote, hexColor, randomBgColor, quote;
var message = '';
var bgColor = '';

// This print function targets a specific section on the html page with id 'quote-box'
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

// Generate random number to use in randomly selecting individual quote objects
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Picks a random quote from the quotes oject
function getRandomQuote(quote) {
  quote = quotes[getRandomNumber()];
  randomQuote += '<p class= "quote">' + quote.quote + '</p>';
  randomQuote += '<p class= "source">' + quote.source;
  if (quote.citation !== '') {
    randomQuote += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year !== undefined) {
    randomQuote += '<span class= "year">' + quote.year + '</span>';
  }
  randomQuote += '</p>';
  return randomQuote;
}

// This function will print the random quote object on the page
function printQuote() {
  message = getRandomQuote(randomQuote);
  print(message);
}
printQuote(message);
