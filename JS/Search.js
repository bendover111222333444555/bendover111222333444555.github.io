function searchgames() {
    var input = document.getElementById('searchBar');
    var filter = input.value.toUpperCase();
    var games = document.getElementsByClassName('game-link');
    
    for (var i = 0; i < games.length; i++) {
        var txtValue = games[i].textContent || games[i].innerText;
        var parentLink = games[i].parentElement; // the <a> tag
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            parentLink.style.display = "";
        } else {
            parentLink.style.display = "none";
        }
    }
}
