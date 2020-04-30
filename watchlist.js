
const list = document.getElementById('movies-container2');

document.addEventListener('DOMContentLoaded', function() {
    let favoritesList = localStorage.getItem('watchlist');
    list.appendChild(favoritesList);
    // forEach.favoritesList(function () {
    //     const watchItem = document.createElement('img'); 
    //     const titleName = document.createElement('p');
    //     const movieYear = document.createElement('p');
    //     watchItem.setAttribute('src', favoritesList.Poster);
    //     titleName.textContent = favoritesList.Title;
    //     movieYear.textContent = favoritesList.Year;
    //     list.appendChild(watchItem);

    // })
        
});
   