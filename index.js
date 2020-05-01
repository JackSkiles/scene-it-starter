
const search = document.getElementById('search-form');
const movieList = document.getElementById('movies-container');

let movieArray;


function saveToWatchList(imdbID) {
    let movie = movieArray.find(currentMovie => currentMovie.imdbID == imdbID); 
    let watchlistJSON = localStorage.getItem('watchlist');

    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);

    watchlistJSON = JSON.stringify(watchlist);

    localStorage.setItem('watchlist', watchlistJSON);

}

search.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchString = document.querySelector('input').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get( "http://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString)
    .then(function (response) {
        let movieData = response.data.Search;
        console.log('movieData');
        console.log(movieData);
        let movieHtmlArray = movieData.map(function (currentMovie) {
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
        movieList.innerHTML = movieHtmlArray.join('')
        movieArray = movieData;
        console.log(movieArray);
        // console.log(movieData);
    })
    

    // return movieHtmlArray.join(' ');
});