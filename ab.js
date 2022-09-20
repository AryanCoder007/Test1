function audiodirect(){
    audio1 = document.getElementById("audio").value;
    window.open("https://kukufm.com/search?q=" + audio1);
    document.getElementById("audio").value = "";
}

function back() {
    window.location = "profile.html";
}