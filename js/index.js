var wikiBtn = document.getElementById("btn");
var globalQuote = ""
function jsonpRequest(){
  var key = Math.floor((Math.random() * 999999));
  var tag = document.createElement("script");
  tag.id = "jsonpCall"
  tag.src = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=getQuote&key=" + key;
  document.getElementsByTagName("head")[0].appendChild(tag);
}
function getQuote(wikiData) {
  document.getElementById("quote").innerHTML = "<i class='fa fa-quote-left'></i>" + wikiData.quoteText + "<i class='fa fa-quote-right'></i>";
  if (wikiData.quoteAuthor == ""){
    document.getElementById("name").innerHTML = "-Anonymous";
  } else {
    document.getElementById("name").innerHTML = "-" + wikiData.quoteAuthor;
  }
  if (wikiData != ""){
    globalQuote = "\"" + wikiData.quoteText + "\" " + document.getElementById("name").innerHTML;
  }
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("jsonpCall"));
};

function tweet(text) {
  window.open("https://twitter.com/intent/tweet?text=" + text);
}

jsonpRequest();
