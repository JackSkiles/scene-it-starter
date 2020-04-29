
const search = document.getElementById('search');
const movieList = document.getElementById('movies-container');

search.addEventListener('click', function(e) {
    e.preventDefault();
    let movieHtmlArray = movieData.map(function (currentMovie) {
        return `
        <div>
            <img src="${currentMovie.Poster}">
                <div class="card-body">
                    <h4 class="card-text mx-auto">${currentMovie.Title}</h4>
                    <p>${currentMovie.Year}</p>
                    <button class="add">Add</button>
                </div>
        </div>`

    });
    movieList.innerHTML = (movieHtmlArray);s
    // return movieHtmlArray.join(' ');
});
