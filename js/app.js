const nbaListElement = document.getElementById("nba-list");

for (i = 0; i < nbaCardsData.length; i++) {
  const card = nbaCardsData[i];

  const nbaCardHTML = createNbaCard(card);

  nbaListElement.insertAdjacentHTML("beforeend", nbaCardHTML);
}

function createNbaCard(card) {
  const championRings = "&#128141;".repeat(card.champions);

  const starsRating = createStarsRating(card.fanRate);

  return `<div class="nba-card ${card.currentPosition <= 5 ? "top-card" : ""}">
    <img class="team-icon" src="${card.img}" alt="team-icon" />
    <div class="nba-card-content">
      <h2 class="team-name">${"Team name:"}${card.name}</h2>
      <h3 class="team-country ${
        card.country == "USA"
          ? "Country:" && card.country && "country-flag-usa"
          : "Country:" && card.country && "country-flag-canada"
      }">${"Country:"}${card.country}</h3>
      <h3 class="team-city">${"City:"}${card.city}</h3>
      <div class="footer">
     
        <span class="current-position">${"Seasonal position:"}${
    card.currentPosition
  }</span>
        <span class="ticket-price">${"Ticket price:"} ${card.ticketPrice}</span>
        ${card.priceForUkr ? "Price for ukrainians:" + card.priceForUkr : ""}
        ${
          card.champions
            ? `<span class="champions">${"Champion rings:"} ${championRings}</span>}`
            : ''
        }
       
        <span class="team-rate">${"Fan Rating:"} ${starsRating}${
    card.fanRate
  }</span>
      </div>
    </div>
  </div>`;
}

function createStarsRating(fanRate) {
  let stars = "";
  // stars+='&#9733'
  // stars+='&#9734'
  // stars+='&#xF587'

  for (let i = 0; i < 5; i++) {
    if (i < fanRate - 0.5) {
      stars += "&#9733;";
    } else if (i < fanRate) {
      stars += "&#128141;";
    } else {
      stars += "&#9734;";
    }
  }
  return stars;
}
