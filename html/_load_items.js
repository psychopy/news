import all_items from "./news_items.json" assert { type: 'json' };;

var ii = 0;
var news_items = all_items.news;
var newerBtn = document.getElementById("newer");
var olderBtn = document.getElementById("older");

// function to return news item at current index
export function updateNewsItem(increment) {
    ii += increment;
    // update index and next/prev buttons
    if (ii <= 0) {
        ii = 0;
        olderBtn.disabled=false;
        newerBtn.disabled=true;
    }
    else if (ii >= news_items.length-1) {
        ii = news_items.length-1;
        olderBtn.disabled=true;
        newerBtn.disabled=false;
    }
    else {
        olderBtn.disabled=false;
        newerBtn.disabled=false;

    }
    //console.log(ii)
    var url = "items/"+news_items[ii].url;
    document.getElementsByName('newsFrame')[0].src = url;
}
