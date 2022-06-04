let quotes = [
  '"When you give up, that’s when the game ends." – Mitsuyoshi Anzai (Slam Dunk)',

  '"Whatever you lose, you’ll find it again. But what you throw away you’ll never get back." – Himura Kenshin (Rurouni Kenshin)',

  '"Hard work is worthless for those that don’t believe in themselves." – Naruto Uzumaki',

  '"Whatever you do, enjoy it to the fullest. That is the secret of life." – Rider (Fate Zero)',

  "“Power comes in response to a need, not a desire. You have to create that need.” – Goku (Dragon Ball Z)",

  "“The moment you think of giving up, think of the reason why you held on so long.” – Natsu Dragneel (Fairy Tail)",

  "“Life is not a game of luck. If you wanna win, work hard.” – Sora (No Game No Life)",

  "“A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.“ – Jiraiya (Naruto)",

  "“It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.” – Might Guy (Naruto)",
];
let btnQuote = document.getElementById("btnQuote");
function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
window.onload = function () {
  let button = document.getElementById("button");
  setInterval(function () {
    button.click();
  }, 3000); // this will make it click again every 1000 miliseconds
};

function newQuotes() {
  let dataQuote = document.getElementById("dataQuote").value;
  console.log(quotes.push(dataQuote));
  document
    .getElementById("btnQuote")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
  alert("A New Quote Has Been Added Randomly");
  localStorage.setItem("storage", JSON.stringify(dataQuote));
}

btnQuote.addEventListener("click", newQuotes);

function savedQuotes() {
  let savedStorage = JSON.parse(localStorage.getItem("storage"));
  console.log(quotes.push(savedStorage));
}
savedQuotes();

console.log(quotes);
