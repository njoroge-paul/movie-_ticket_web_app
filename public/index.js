// Select all movie lists
const movieLists = document.querySelectorAll('#movie-list');

// Loop through each movie list
movieLists.forEach((movieList) => {
  // Select the purchase ticket button
  const purchaseButton = movieList.querySelector('button');

  // Select the tickets available span
  const ticketsAvailableSpan = movieList.querySelector('h3 span');

  // Get the initial number of tickets available
  let ticketsAvailable = parseInt(ticketsAvailableSpan.textContent, 10);

  // Add an event listener to the purchase button
  purchaseButton.addEventListener('click', () => {
    // Check if there are still tickets available
    if (ticketsAvailable > 0) {
      // Decrement the number of tickets available
      ticketsAvailable--;

      // Update the tickets available span
      ticketsAvailableSpan.textContent = ticketsAvailable;

      // Display a success message
      alert(`Ticket booked successfully! ${ticketsAvailable} tickets remaining.`);

      // Disable the purchase button if there are no more tickets available
      if (ticketsAvailable === 0) {
        purchaseButton.disabled = true;
      }

         

    } else {
      // Display an error message if there are no more tickets available
      alert('Sorry, no more tickets available!');
    }
  });
});