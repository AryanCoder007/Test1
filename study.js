function querydirect(){
    query1 = document.getElementById("query").value;
    window.open("https://www.google.com/search?q=" + query1);

}

function worddirect(){
    word1 = document.getElementById("word").value;
    window.open("https://en.wikipedia.org/wiki/" + word1);

}

function videodirect(){
    video1 = document.getElementById("video").value;
    window.open("https://www.youtube.com/results?search_query="+ video1);
}

function back(){
    window.location= "profile.html";
}
