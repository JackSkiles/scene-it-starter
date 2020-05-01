
const list = document.getElementById('movies-container2');

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
                    <button class="add" id="add" onclick="saveToWatchList('${currentMovie.imdbID}')">Add To Favorites</button>
                </div>
        </div>`
    });
    list.innerHTML = movieHtmlArray.join('')
});
   