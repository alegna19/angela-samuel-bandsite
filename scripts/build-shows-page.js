const sectionShows = document.querySelector("#wrapper-shows");

let dividerShows = document.createElement("div");
dividerShows.classList.add("container");
sectionShows.appendChild(dividerShows);

let heatherShows = document.createElement("h2");
heatherShows.classList.add("shows__title");
dividerShows.appendChild(heatherShows);
heatherShows.innerText = "Shows";

let titles = document.createElement("div");
titles.classList.add("titles");
dividerShows.appendChild(titles);

let titlesDate = document.createElement("p");
titlesDate.classList.add("titles__date");
titles.appendChild(titlesDate);
titlesDate.innerText = "DATE";

let titlesVenue = document.createElement("p");
titlesVenue.classList.add("titles__venue");
titles.appendChild(titlesVenue);
titlesVenue.innerText = "VENUE";

let titlesLocation = document.createElement("p");
titlesLocation.classList.add("titles__location");
titles.appendChild(titlesLocation);
titlesLocation.innerText = "LOCATION";

const titleShows = document.querySelector(".shows__title");

let containerShows = document.createElement("div");
containerShows.classList.add("shows__description");
sectionShows.appendChild(containerShows);

let showsDescription = document.querySelector(".shows__description");

let apiKey = "c71eaba9-4139-499f-86a3-551633b09e24";
let apiUrl = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;

const showDates = (response) => {
  const showsInfo = response.data;
  showsInfo.forEach((item) => {
    displayShows(item);
  });
};

/**
 * Iterate the array of objects to display it in the Dom.
 */

let displayShows = (shows) => {
  const article = document.createElement("article");
  article.classList.add("shows__article");
  showsDescription.appendChild(article);

  const dateTitle = document.createElement("h3");
  dateTitle.classList.add("shows__subtitle");
  dateTitle.innerText = "DATE";
  article.appendChild(dateTitle);

  const dateValue = document.createElement("p");
  dateValue.classList.add("shows__date");
  article.appendChild(dateValue);
  dateValue.innerText = new Date(shows.date).toLocaleDateString();

  const venueTitle = document.createElement("h3");
  venueTitle.classList.add("shows__subtitle");
  venueTitle.innerText = "VENUE";
  article.appendChild(venueTitle);

  const venueValue = document.createElement("p");
  venueValue.classList.add("shows__details");
  article.appendChild(venueValue);
  venueValue.innerText = shows.place;

  const locationTitle = document.createElement("h3");
  locationTitle.classList.add("shows__subtitle");
  locationTitle.innerText = "LOCATION";
  article.appendChild(locationTitle);

  const locationValue = document.createElement("p");
  locationValue.classList.add("shows__details");
  article.appendChild(locationValue);
  locationValue.innerText = shows.location;

  const btnTickets = document.createElement("button");
  btnTickets.classList.add("shows__button");
  btnTickets.innerText = "BUY TICKETS";
  article.appendChild(btnTickets);
};

// GET all shows dates.
axios
  .get(apiUrl)
  .then(showDates)

  .catch((error) => {
    console.log(error);
  });

const articleElements = document.querySelectorAll(".shows__article");

/**
 * Method that recive an event to validate if the row of the article is active.
 */
articleElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    const activeValue = document.querySelector(".shows__article--active");

    if (activeValue) {
      activeValue.classList.remove("shows__article--active");
    }
    e.currentTarget.classList.toggle("shows__article--active");
  });
});
