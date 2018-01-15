var wikiBtn = document.getElementById("btn");
console.log("starting");
function getQuote() {
  console.log("getQuote")
  var key = Math.floor((Math.random() * 999999));
  var wikiRequest = new XMLHttpRequest();
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=" + key;
  wikiRequest.open('GET', url);
  wikiRequest.send();
  wikiRequest.onload = function(){
  var wikiData = JSON.parse(wikiRequest.responseText);
  //var quoteText = wikiData[0].content.replace("<p>", "").replace("</p>", "")
  document.getElementById("quote").innerHTML = wikiData.quoteText;
  document.getElementById("name").innerHTML = wikiData.quoteAuthor;
};
}
getQuote();
