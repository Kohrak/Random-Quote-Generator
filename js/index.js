var wikiBtn = document.getElementById("btn");
console.log("starting");
wikiBtn.addEventListener("click", function(){
  var wikiRequest = new XMLHttpRequest();
  wikiRequest.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
  wikiRequest.onload = function(){
  var wikiData = JSON.parse(wikiRequest.responseText);
  //document.getElementById("quote").innerHTML = "name: " +   wikiData[0].name;
    console.log(wikiData[0].title + " " + wikiData[0]);
};
      wikiRequest.send(); 

});