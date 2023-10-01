// A FUNCTION TO CLEAR PREVIOUS DATA IN THE SEMANTICS TO AVOID REDUCTANCE
function clearAll() {
  const meme = document.querySelector(".meme-content");
  const joke = document.querySelector(".joke-content");
  const quote = document.querySelector(".quote-content");
  const riddle = document.querySelector(".riddle-content");

  meme.innerHTML = "";
  joke.innerHTML = "";
  quote.innerHTML = "";
  riddle.innerHTML = "";
}

//API FUNCTION TO GENERATE MEMES
async function showMeme() {
  // API CALLING.
  let res = await fetch("https://meme-api.com/gimme");
  let data = await res.json();
  let url = data.url;
  //required url data fetched from api is stored in url
  const memeContainer = document.querySelector(".meme-content");
  const newMeme = document.createElement("img");

  newMeme.setAttribute("src", url);
  clearAll();
  // Add the new img to the document
  memeContainer.appendChild(newMeme);
}

//API FUNCTION TO GENERATE JOKES
async function showJoke() {
  // API CALLING
  let res = await fetch(
    "https://geek-jokes.sameerkumar.website/api?format=json"
  );
  let data = await res.json();
  let joke = data.joke;
  // const randomJokeText = getRandomData("jokes");

  const jokeContainer = document.querySelector(".joke-content");
  const newJoke = document.createElement("p");
  newJoke.textContent = joke;

  clearAll();

  // Add the new img to the document
  jokeContainer.appendChild(newJoke);
}

//API FUNCTION TO GENERATE QUOTES
async function showQuote() {
  // API CALLING
  let res = await fetch("https://api.quotable.io/quotes/random");
  let data = await res.json();

  const quoteContainer = document.querySelector(".quote-content");
  const newQuoteText = document.createElement("p");
  const newQuoteAuthor = document.createElement("p");
  newQuoteText.textContent = data[0].content;
  newQuoteAuthor.textContent = "- " + data[0].author;

  clearAll();

  quoteContainer.appendChild(newQuoteText);
  quoteContainer.appendChild(newQuoteAuthor);
}

//API FUNCTION TO GENERATE RIDDLES
async function showRiddle() {
  // API CALLING
  let res = await fetch("https://riddles-api.vercel.app/random");
  let data = await res.json();

  const riddleContainer = document.querySelector(".riddle-content");
  const newRiddleText = document.createElement("p");
  const newRiddleAnswer = document.createElement("p");

  newRiddleText.textContent = data.riddle;
  newRiddleAnswer.textContent = "- " + data.answer;
  newRiddleAnswer.setAttribute("id", "riddle-answer");

  clearAll();

  newRiddleAnswer.hidden = true;

  riddleContainer.appendChild(newRiddleText);
  riddleContainer.appendChild(newRiddleAnswer);
}

//FUNCTION TO REVEAL ANSWERS
function revealAnswers() {
  const riddleContent = document.querySelector(".riddle-content");
  const riddle = riddleContent.querySelector("p");
  const riddleAnswer = document.querySelector("#riddle-answer");

  if (riddle && riddleAnswer.hidden) {
    riddleAnswer.hidden = false;
  } else if (riddle && riddleAnswer) {
    alert("The riddle answer is already exposed!");
  } else {
    alert("There is no riddle to show the answer for!");
  }
}
