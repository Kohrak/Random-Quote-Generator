var wikiBtn = document.getElementById("btn");
console.log("starting");
function getQuote() {
  console.log("getQuote")
  //var key = Math.floor((Math.random() * 999999));
  var wikiRequest = new XMLHttpRequest();
  var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

  wikiRequest.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
  var wikiData = JSON.parse(wikiRequest.responseText);
  var quoteText = wikiData[0].content.replace("<p>", "").replace("</p>", "")
  document.getElementById("quote").innerHTML = wikiData[0].content;
  document.getElementById("name").innerHTML = wikiData[0].title;
}
};
  wikiRequest.open('GET', url, true);
  wikiRequest.send();
}
getQuote();
