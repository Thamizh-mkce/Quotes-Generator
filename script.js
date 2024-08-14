const quotes = [
  "The best way to predict the future is to create it. – Peter Drucker",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "I have learned over the years that when one’s mind is made up, this diminishes fear. – Rosa Parks",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Creativity is intelligence having fun. – Albert Einstein",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
];

const quoteText = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}
