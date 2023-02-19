const sectionShows = document.querySelector("#wrapper-shows");

let heatherShows = document.createElement("h2");
heatherShows.classList.add("shows__title");
sectionShows.appendChild(heatherShows);
heatherShows.innerText = "Shows";

let titles = document.createElement("div");
titles.classList.add("titles");
sectionShows.appendChild(titles);

let titlesDate = document.createElement("p");
titlesDate.classList.add("titles__name");
titles.appendChild(titlesDate);
titlesDate.innerText = "DATE";

let titlesVenue = document.createElement("p");
titlesVenue.classList.add("titles__name");
titles.appendChild(titlesVenue);
titlesVenue.innerText = "VENUE";

let titlesLocation = document.createElement("p");
titlesLocation.classList.add("titles__name");
titles.appendChild(titlesLocation);
titlesLocation.innerText = "LOCATION";

const titleShows = document.querySelector(".shows__title");

let containerShows = document.createElement("div");
containerShows.classList.add("shows__description");
sectionShows.appendChild(containerShows);

let showsDescription = document.querySelector(".shows__description");

let showsInfo = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

showsInfo.forEach((item) => {
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
  dateValue.innerText = item.date;

  const venueTitle = document.createElement("h3");
  venueTitle.classList.add("shows__subtitle");
  venueTitle.innerText = "VENUE";
  article.appendChild(venueTitle);

  const venueValue = document.createElement("p");
  venueValue.classList.add("shows__details");
  article.appendChild(venueValue);
  venueValue.innerText = item.venue;

  const locationTitle = document.createElement("h3");
  locationTitle.classList.add("shows__subtitle");
  locationTitle.innerText = "LOCATION";
  article.appendChild(locationTitle);

  const locationValue = document.createElement("p");
  locationValue.classList.add("shows__details");
  article.appendChild(locationValue);
  locationValue.innerText = item.location;

  const btnTickets = document.createElement("button");
  btnTickets.classList.add("shows__button");
  btnTickets.innerText = "BUY TICKETS";
  article.appendChild(btnTickets);
});

const articleElements = document.querySelectorAll(".shows__article");

articleElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    const activeValue = document.querySelector(".shows__article--active");

    if (activeValue) {
      activeValue.classList.remove("shows__article--active");
    }
    e.currentTarget.classList.toggle("shows__article--active");
  });
});
