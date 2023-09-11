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
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

/***
 * `printQuote` function
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
  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);