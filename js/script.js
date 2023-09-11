/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 created an array of objects called quotes
 quote objects have the following properties:
  -quote (string): quotation
  -source (string): author
  -citation (string), optional: cited source
  -year (number), optional: year attributed to quote
  -tags (array), optional: descriptive catagorizers for quote
***/

const quotes = [
  {
    quote: "All our dreams can come true if we have the courage to pursue them.",
    source: "Walt Disney"
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela"
  },
  {
    quote: "Love yourself first and everything else falls into place.",
    source: "Lucille Ball",
    tags: ['inspirational', 'self-love']
  },
  {
    quote: "Do something wonderful, people may imitate it.",
    source: "Albert Schweitzer"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Ghandi"
  },
  {
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Amy March",
    citation: '"Little Women" by Louisa May Alcott',
    year: 1869
  },
];

/***
 *Returns a random element from an array
 *
 * @param {array} arr - the array to select from randomly
 * @returns {array element} - a randomly selected element from the array
***/

const getRandomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

/***
 * Returns a random number between a given range
 * 
 * @param {number} lower - lower limit to the range
 * @param {number} upper - upper limit to the range
 * @returns {number} a random number in range lower to upper
 */

const getRandomNumber = (lower, upper) => {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}

/***
 * Returns a random background color
 * 
 * @returns {string} rgb color
 */

const getRandomColor = () => {
  const rValue = getRandomNumber(0, 255);
  const gValue = getRandomNumber(0, 255);
  const bValue = getRandomNumber(0, 255);
  return `rgb(${rValue}, ${gValue}, ${bValue})`
}

/***
 * Builds an html template string based on a random quote object
 * Updates html displayed on page
***/

const printQuote = () => {
  const randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.tags) {
    for ( let i = 0; i < randomQuote.tags.length; i++ ){
      html += `<br><span class="tag"><i>${randomQuote.tags[i]}</i></span>`
    }
  }
  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = getRandomColor();
}

/***
 * Display a new quote object every 10 seconds using the setInterval() method
 */

setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);