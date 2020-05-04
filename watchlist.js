
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
        <div class="card-body">
            <img src="${currentMovie.Poster}">
            <h3 class="card-text mx-auto">${currentMovie.Title}</h3>
            <p>${currentMovie.Year}</p>
            <button type="button" class="btn btn-primary" id="pic" onclick="removeFavorites('${currentMovie.imdbID}')">remove from favorites</button>
        </div>`
    });
    movieArray = movieData;
    list.innerHTML = movieHtmlArray.join('')
});
   
