var wikiBtn = document.getElementById("btn");
console.log("starting");
function getQuote() {
  console.log("getQuote")
  var wikiRequest = new XMLHttpRequest();
  wikiRequest.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand');
  wikiRequest.send();
  wikiRequest.onload = function(){
  var wikiData = JSON.parse(wikiRequest.responseText);
  var quoteText = wikiData[0].content.replace("<p>", "").replace("</p>", "")
  document.getElementById("quote").innerHTML = quoteText;
  document.getElementById("name").innerHTML = wikiData[0].title;
};
}
