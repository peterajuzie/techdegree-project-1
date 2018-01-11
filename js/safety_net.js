// I save working code here before experimenting LOL
// Don't judge me, code game isn't that strong, yet. ):

//REFRESH PAGE AFTER A SPECIFIED TIME in milliseconds with reset timeout button
//var timeout = setTimeout("location.reload(true);",5000);
  // function resetTimeout() {
  //   clearTimeout(timeout);
  //   timeout = setTimeout("location.reload(true);",15000);
  //}



  // event listener to respond to "Show another quote" button clicks
  // when user clicks anywhere on the button, the "printQuote" function is called
  //document.getElementById('loadQuote').addEventListener("click", printQuote, false);

  var randomNumber, randomQuote, hexColor, randomColor, quote, timeout;
  var message = '';
  var bgColor = '';

  // Refresh page using the setTimeout and reload methods after a specified time in milliseconds
  // The resetTimeout function resets the refresh timer
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

  // Generate random number to use in randomly selecting individual quote objects
  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  // Generate random background color on click;
  function printColor() {
    document.body.style.backgroundColor = bgColors[getRandomNumber()];
  }

  function buttonColor() {
    document.getElementById('loadQuote').style.backgroundColor = bgColors[getRandomNumber()];
  }

  // Picks a random quote from the quotes oject
  function getRandomQuote(quote) {
    quote = quotes[getRandomNumber()];
    randomQuote = '<p class= "quote">' + quote.quote + '</p>';
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

  // Put all functions into a single function and call all at once
  // Will be usefull during the 'onclick' function calls in the html
  function callFunctions() {
    printColor();
    printQuote();
    buttonColor();
    resetTimeout();
  }
  callFunctions();
