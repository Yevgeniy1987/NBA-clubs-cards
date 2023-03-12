const nbaListElement = document.getElementById("nba-list");

for (i = 0; i < nbaCardsData.length; i++) {
  const card = nbaCardsData[i];

  const nbaCardHTML = createNbaCard(card);

  nbaListElement.insertAdjacentHTML("beforeend", nbaCardHTML);
}

function createNbaCard(card) {
  const championRings = "&#127775;".repeat(card.champions);
  

  return `<div class="nba-card ${card.currentPosition <= 5 ? "top-card" : ""}">
    <img class="team-icon" src="${card.img}" alt="team-icon" />
    <div class="nba-card-content">
      <h2 class="team-name">${"Team name:"} ${card.name}</h2>
      <h3 class="team-country">${"Country:"} ${card.country}</h3>
      <h3 class="team-city">${"City:"} ${card.city}</h3>
      <div class="footer">
     
        <span class="current-position">${"Seasonal position:"}${
    card.currentPosition
  }</span>
        <span class="ticket-price">${"Ticket price:"} ${card.ticketPrice}</span>
        ${
          card.champions
            ? `<span class="champions">${"Champions:"} ${championRings}</span>}`
            : ""
        }
      </div>
    </div>
  </div>`;
}
