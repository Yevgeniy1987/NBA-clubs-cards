"use strict";
const nbaListElement = document.getElementById("nba-list");
const tileActions = document.getElementById("tile-actions");
const tileActionBtn = tileActions.children;
const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // const form = event.target
  // const inputField = form.searchQuery
  // const InputValue = inputField.value

  const searchQueryString = event.target.searchQuery.value
    .trim()
    .replaceAll(/\s{2,}/g, " ")
    .toLowerCase();

  const filteredCards = nbaCardsData.filter((cardData) => {
    // return `${cardData.name}&&${cardData.city}&&${cardData.country}`
    return `${cardData.champions}&&${cardData.fanRate}&&${cardData.minTicketPrice}&&${cardData.minPriceForUkr}`
      .toLowerCase()
      .includes(searchQueryString);
  });

  console.log(filteredCards);

  nbaListElement.innerHTML = "";

  filteredCards.forEach((card) => {
    const nbaCardHTML = createNbaCard(card);

    nbaListElement.insertAdjacentHTML("beforeend", nbaCardHTML);
  });
});

// for ( let i = 0; i < nbaCardsData.length; i++) {
//   const card = nbaCardsData[i];

nbaCardsData.forEach((card) => {
  const nbaCardHTML = createNbaCard(card);

  nbaListElement.insertAdjacentHTML("beforeend", nbaCardHTML);
});

function createNbaCard(card) {
  const championRings = "&#128141;".repeat(card.champions);

  const starsRating = createStarsRating(card.fanRate);

  return `<div class="nba-card ${card.currentPosition <= 5 ? "top-card" : ""}">
    <img class="team-icon" src="${card.img}" alt="team-icon" />
    <div class="nba-card-content">
      <h2 class="team-card-content-text">Team name:${card.name}</h2>
      <h3 class="team-card-content-text team-country ${
        card.country == "USA"
          ? "Country:" && card.country && "country-flag-usa"
          : "Country:" && card.country && "country-flag-canada"
      }">Country:${card.country}</h3>
      <h3 class="team-card-content-text">City:${card.city}</h3>
      <div class="footer">
     
        <span class="current-position">Seasonal position:${
          card.currentPosition
        }</span>
        <span class="ticket-price">Ticket price: ${card.minTicketPrice}$</span>
        ${
          card.minPriceForUkr
            ? "Price for ukrainians:" + card.minPriceForUkr + "$"
            : ""
        }
        ${
          card.champions
            ? `<span class="champions">Champion rings: ${championRings}</span>`
            : ""
        }
       
        <span class="team-rate">Fan Rating: ${starsRating}${card.fanRate}</span>
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

const nbaCont = document.querySelectorAll(".nba-card-content");

tileActions.addEventListener("click", (event) => {
  const currentActionBtn = event.target.classList.contains("tile-action")
    ? event.target
    : null;
  if (currentActionBtn) {
    for (let i = 0; i < tileActionBtn.length; i++) {
      const actionButton = tileActionBtn[i];

      if (actionButton === currentActionBtn) {
        actionButton.classList.add("is-active");
      } else {
        actionButton.classList.remove("is-active");
      }
    }

    const action = currentActionBtn.dataset.action;

    console.log("clicked on button", action);
    if (action === "one-clm") {
      nbaListElement.classList.add("one-clm");
      nbaListElement.classList.remove("three-clm", "compact-card");
    }
    if (action === "three-clm") {
      nbaListElement.classList.add("three-clm");
      nbaListElement.classList.remove("one-clm", "compact-card");
    }
    if (action === "compact-card") {
      nbaListElement.classList.add("compact-card");
      nbaListElement.classList.remove("three-clm", "one-clm");
    }
  }
});

// const topFanRate = nbaCardsData.filter((card) => {
//   return card.fanRate < 3;
// });
// console.log(topFanRate);

// const countryNbaCards = nbaCardsData.filter((card) => {
//   return card.country === "USA";
// });
// console.log(countryNbaCards);

// const positionNbaCards = countryNbaCards.map((card) => {
//   return card.currentPosition < 5;
// });
// console.log(positionNbaCards);
// const findResult = nbaCardsData.find((card) => {
//   return card.name === "Lakers";
// });
// console.log(findResult);

// const specialPriceForUkr = nbaCardsData.filter((card) => {
//   return card.minPriceForUkr;
// });

// console.log(specialPriceForUkr);

// const discountForUkr = specialPriceForUkr.map((card) => {
//   return (card.minPriceForUkr / card.minTicketPrice) * 100;
// });

// discountForUkr.forEach((elem) => {
//   console.log("Discount for ukrainians is --->", elem.toFixed(0), "%");
// });

// const someResult = nbaCardsData.some(card => {
//   return card.name === "Pacers";
// })

// console.log(someResult);

// const everyResult = nbaCardsData.every(card => {
//   return card.minPriceForUkr;
// })
// console.log(everyResult);

// const includesResult = nbaCardsData.includes(card => {
//   return card.city;
// })
// console.log(includesResult);
