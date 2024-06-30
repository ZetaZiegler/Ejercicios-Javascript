let api_key = "ce21e5041e8c42bdcb67c2b7dee0c723";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImg = "https://image.tmdb.org/t/p/w500";
let resultContainer = document.getElementById("results");

document.getElementById("searchButton").addEventListener("click", searchMovies);

function searchMovies() {
  let searchInput = document.getElementById("searchInput").value;
  resultContainer.innerHTML = "Buscando...";
  fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then((response) => response.json())
    .then((response) => displayMovies(response.results));
}

function displayMovies(movies) {
  resultContainer.innerHTML = "";

  if (movies.length === 0) {
    resultContainer.innerHTML =
      "<p>No se encontraron resultados para tu búsqueda</p>";
    return;
  }

  movies.forEach((movie) => {
    let movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    let title = document.createElement("h2");
    title.textContent = movie.original_title;

    let releasedate = document.createElement("p");
    releasedate.textContent =
      "La película se estrenó el día " + movie.release_date;

    let overview = document.createElement("p");
    overview.textContent = movie.overview;

    let posterPath = urlImg + movie.poster_path;
    let poster = document.createElement("img");
    poster.src = posterPath;

    movieDiv.appendChild(poster);
    movieDiv.appendChild(title);
    movieDiv.appendChild(releasedate);
    movieDiv.appendChild(overview);

    resultContainer.appendChild(movieDiv);
  });
}
