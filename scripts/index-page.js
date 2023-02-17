const commentsList = document.querySelector(".comments");

let defaultComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    commentText:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    commentText:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "iles Acosta",
    date: "12/20/2020",
    commentText:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

/**
 * Loop that iterates and adds the comments to the form,
 * and display the comments by default when the page is loading.
 */

defaultComments.forEach((item) => {
  const articleComments = document.createElement("article");
  articleComments.classList.add("comments__info");
  commentsList.appendChild(articleComments);

  const imageComment = document.createElement("img");
  imageComment.classList.add("comments__image");
  imageComment.src = "../assets/Images/vinyl.png";
  articleComments.appendChild(imageComment);

  const nameDefaultComment = document.createElement("p");
  nameDefaultComment.classList.add("comments__name");
  nameDefaultComment.innerText = item.name;
  articleComments.appendChild(nameDefaultComment);

  const dateDefaultComment = document.createElement("p");
  dateDefaultComment.classList.add("comments__date");
  dateDefaultComment.innerText = item.date;
  articleComments.appendChild(dateDefaultComment);

  const commentDefault = document.createElement("p");
  commentDefault.classList.add("comments__content");
  commentDefault.innerText = item.commentText;
  articleComments.appendChild(commentDefault);
});

/**
 * Method that add a new article to the form in the comments section.
 */

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const articleComments = document.createElement("article");
  articleComments.classList.add("comments__info");
  commentsList.prepend(articleComments);

  const imageComment = document.createElement("img");
  imageComment.classList.add("comments__image");
  imageComment.src = "../assets/Images/vinyl.png";
  articleComments.appendChild(imageComment);

  const nameValue = e.target.name.value;
  const commentValue = e.target.comment.value;

  const nameNewName = document.createElement("p");
  nameNewName.classList.add("comments__name");
  nameNewName.innerText = nameValue;
  articleComments.appendChild(nameNewName);

  const dateDefaultComment = document.createElement("p");
  dateDefaultComment.classList.add("comments__date");
  dateDefaultComment.innerText = new Date().toLocaleDateString();
  articleComments.appendChild(dateDefaultComment);

  const nameNewComment = document.createElement("p");
  nameNewComment.classList.add("comments__content");
  nameNewComment.innerText = commentValue;
  articleComments.appendChild(nameNewComment);

  e.target.name.value = " ";
  e.target.comment.value = " ";
});

// let displayComment = (comment) => {
//   const articleComments = document.createElement("article");
//   articleComments.classList.add("comments__info");
//   commentsList.prepend(articleComments);

//   const imageComment = document.createElement("img");
//   imageComment.classList.add("comments__image");
//   imageComment.src = "../assets/Images/vinyl.png";
//   articleComments.appendChild(imageComment);

//   const dateDefaultComment = document.createElement("p");
//   dateDefaultComment.classList.add("comments__date");
//   dateDefaultComment.innerText = new Date().toLocaleDateString();
//   articleComments.appendChild(dateDefaultComment);
// };
