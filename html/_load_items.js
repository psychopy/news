import news_items from "./news_items.json" assert { type: 'json' };;

var ii = 0;

// function to return news item at current index
export function updateNewsItem(increment) {
    ii += increment;
    var url = "items/"+news_items.news[ii].url;
    document.getElementsByName('newsFrame')[0].src = url;
}
