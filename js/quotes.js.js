// List of love quotes
const loveQuotes = [
  "If loving you was amala and gbegiri, I’d never stop eating. You’re my sweet pot of soup, my Offa princess!",
  "You’re like jollof rice from Kwara State—spicy, sweet, and unforgettable. My taste buds and my heart can’t get enough of you!",
  "Offa gave us sweet mangoes, but you’re the sweetest thing in the whole town. I might just rename you ‘Queen Sugar’!",
  "If love was a game of ayo, you’d always win, because you’ve captured all the seeds of my heart!",
  "Forget Offa market; the only trade I’m interested in is exchanging my love for your smile!",
  "Offa is known for its rich culture, but to me, you’re the richest treasure this town has ever given the world!",
  "If your love were a meal, I’d ask for a second plate every single day. You’re my daily fufu and stew for the soul!",
  "You’re so beautiful, even the Offa hills would bow if they saw you. How did I get so lucky?",
  "You’re my Offa sunshine. Even NEPA can’t dim your brightness in my heart!",
  "Your love is like a Kwara rainstorm—powerful, refreshing, and it sweeps me off my feet every time!",
  "The way I love you, even if I went to Offa polytechnic to study it, I still wouldn’t graduate. You’re too much to comprehend!",
  "If love was a market, you’d be the best-seller at Offa market. Everybody wants you, but I’m the lucky buyer!",
  "You’re my sugarcane from Kwara—sweet, natural, and completely addictive. I can’t stop loving you!",
  "You’re like Offa’s best suya—spicy, irresistible, and worth every bite of life with you.",
  "If I had to count all the things I love about you, I’d need the help of everyone in Offa. You’re my endless blessing!"
];

// Define colors for each quote (fixed color for each quote)
const quoteColors = [
  "#FF6347", "#FFD700", "#98FB98", "#AFEEEE", "#FF69B4", 
  "#8A2BE2", "#FF4500", "#00FA9A", "#FF1493", "#FFD700", 
  "#D2691E", "#20B2AA", "#F08080", "#DC143C", "#B0C4DE"
];

// Get DOM Elements
const quoteTextElement = document.getElementById("quote-text");
const nextQuoteButton = document.getElementById("next-quote");
const previousQuoteButton = document.getElementById("previous-quote");

let currentQuoteIndex = 0;  // Track the current quote index

// Show the first quote when the page loads
window.onload = () => {
  displayQuote();
};

// Function to display the quote with its color
function displayQuote() {
  quoteTextElement.textContent = loveQuotes[currentQuoteIndex];
  quoteTextElement.style.color = quoteColors[currentQuoteIndex];
}

// Handle Next button click to show next quote
nextQuoteButton.addEventListener("click", () => {
  currentQuoteIndex = (currentQuoteIndex + 1) % loveQuotes.length;  // Wrap around to first quote after the last one
  displayQuote();
});

// Handle Previous button click to show previous quote
previousQuoteButton.addEventListener("click", () => {
  currentQuoteIndex = (currentQuoteIndex - 1 + loveQuotes.length) % loveQuotes.length;  // Wrap around to last quote
  displayQuote();
});
