// Selectors
const movieList = document.getElementById("movie-list");
const purchaseTicketButtons = document.querySelectorAll("#purchase-ticket");
const ticketNumberInputs = document.querySelectorAll("#tickets");


function fetchMovieData() {
  return fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => data.movies);
};




fetchMovieData().then(movies => {
  movies.forEach(movie => {
    const movieItem = document.createElement("div");
    movieItem.className = "movie-item";
    movieItem.innerHTML = `
      <h2>${movie.title}</h2>
      <p>Tickets available: <span id="tickets">${movie.tickets_sold}</span></p>
      <button id="purchase-ticket">Purchase Ticket</button>
    `;
    movieList.appendChild(movieItem);
  });

  
  purchaseTicketButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const movieId = index + 1; // 
      const currentTicketQuantity = parseInt(ticketNumberInputs[index].textContent);
      if (currentTicketQuantity > 0) {
        ticketNumberInputs[index].textContent = currentTicketQuantity - 1;
        updateMovieData(movieId, currentTicketQuantity - 1);
      }
    });
  });
});





function updateMovieData(movieId, newTicketQuantity) {
  return fetch(`http://localhost:3000/films/${movieId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tickets_sold: newTicketQuantity })
  });
};