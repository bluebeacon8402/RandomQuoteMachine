// JavaScript source code
function myFunction() {
    var obj = JSON.parse(Get("https://api.icndb.com/jokes/random.json <https://api.icndb.com/jokes/random.json> "));
    var y = obj.value.joke;
    document.getElementById("thequote").innerHTML = y;
}

function Get(url) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}