var wikiBtn = document.getElementById("btn");
var globalQuote = ""
console.log("starting");
function getQuote() {
  var key = Math.floor((Math.random() * 999999));
  var wikiRequest = new XMLHttpRequest();
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=" + key;
  wikiRequest.open('GET', url);
  wikiRequest.send();
  wikiRequest.onload = function(){
  var wikiData = JSON.parse(wikiRequest.responseText);
  //var quoteText = wikiData[0].content.replace("<p>", "").replace("</p>", "")
  document.getElementById("quote").innerHTML = "<i class='fa fa-quote-left'></i>" + wikiData.quoteText + "<i class='fa fa-quote-right'></i>";

  if (wikiData.quoteAuthor == ""){
    document.getElementById("name").innerHTML = "-Anonymous";
  } else {
    document.getElementById("name").innerHTML = "-" + wikiData.quoteAuthor;
  }
  if (wikiData != ""){
    globalQuote = "\"" + wikiData.quoteText + "\" " + document.getElementById("name").innerHTML;
  }
};

}
getQuote();

function tweet(tex) {
  window.open("https://twitter.com/intent/tweet?text=" + tex);
}
