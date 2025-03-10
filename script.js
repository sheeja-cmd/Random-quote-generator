const quotes = [
    "Believe in yourself.",
    "Stay positive and happy.",
    "Never stop learning.",
    "Every day is a second chance.",
    "Push yourself, because no one else is going to do it for you."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
  
    document.getElementById("quote").innerText = selectedQuote;
  
    const twitterLink = 'https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedQuote)}';
    document.getElementById("share").href = twitterLink;
  }