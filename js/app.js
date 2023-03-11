
const nbaListElement = document.getElementById("nba-list");

for (i = 0; i < nbaCardsData.length; i++) {

  const card = nbaCardsData[i];

  const nbaCardHTML=createNbaCard(card);

  nbaListElement.insertAdjacentHTML("beforeend", nbaCardHTML);

  }
function createNbaCard(card) {
  return `<div class="nba-card">
    <img class="team-icon" src="${card.img}" alt="team-icon" />
    <div class="nba-card-content">
      <h2 class="team-name">${card.name}</h2>
      <h3 class="team-country">${card.country}</h3>
      <h3 class="team-city">${card.city}</h3>
      <div class="footer">
        <span class="champions">${card.champions}</span>
        <span class="current-position">${card.currentPosition}</span>
        <span class="ticket-price">${card.ticketPrice}</span>
      </div>
    </div>
  </div>`;
}
