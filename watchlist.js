
const list = document.getElementById('movies-container2');


function removeFavorites(imdbID) {
    let watchlistJSON = localStorage.getItem('watchlist');
    
    let watchlist = JSON.parse(watchlistJSON);
    
    let movie = watchlist.find(currentMovie => currentMovie.imdbID == imdbID); 
    // console.log(watchlist);
    console.log(movie);

    watchlist = watchlist.filter(function (item){
        if(imdbID !== item.imdbID) {
            return true;
        }
        else {
            return false;
        }
    })

    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    console.log(watchlist);

    // if (watchlist == null) {
    //     watchlist = [];
    // }
    // console.log(watchlist);
    // removeList = watchlist.filter(imdbID, movie);

    // localStorage.setItem('watchlist', watchlistJSON);

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
   
