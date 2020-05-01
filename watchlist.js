
const list = document.getElementById('movies-container2');
let movieArray;

function removeFavorites(imdbID) {
    let movie = movieArray.find(currentMovie => currentMovie.imdbID == imdbID); 
    let watchlistJSON = localStorage.getItem('watchlist');

    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.splice(imdbID, imdbID);

    watchlistJSON = JSON.stringify(watchlist);

    localStorage.setItem('watchlist', watchlistJSON);

}

document.addEventListener('DOMContentLoaded', function() {
    let favoritesListJSON = localStorage.getItem('watchlist');
    let favoritesList = JSON.parse(favoritesListJSON)
    let movieHtmlArray = favoritesList.map(function (currentMovie) {
        return `
        <div>
            <img src="${currentMovie.Poster}">
                <div class="card-body">
                    <h4 class="card-text mx-auto">${currentMovie.Title}</h4>
                    <p>${currentMovie.Year}</p>
                    <button class="add" id="add" onclick="removeFavorites('${currentMovie.imdbID}')">remove from favorites</button>
                </div>
        </div>`
    });
    movieArray = movieData;
    list.innerHTML = movieHtmlArray.join('')
});
   
