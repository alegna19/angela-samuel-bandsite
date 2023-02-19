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

let displayComment = (comment) => {
  const articleComments = document.createElement("article");
  articleComments.classList.add("comments__info");
  commentsList.appendChild(articleComments);

  const imageComment = document.createElement("img");
  imageComment.classList.add("comments__image");
  imageComment.src = "../assets/Images/vinyl.png";
  articleComments.appendChild(imageComment);

  const nameDefaultComment = document.createElement("p");
  nameDefaultComment.classList.add("comments__name");
  nameDefaultComment.innerText = comment.name;
  articleComments.appendChild(nameDefaultComment);

  const dateDefaultComment = document.createElement("p");
  dateDefaultComment.classList.add("comments__date");
  dateDefaultComment.innerText = comment.date;
  articleComments.appendChild(dateDefaultComment);

  const commentDefault = document.createElement("p");
  commentDefault.classList.add("comments__content");
  commentDefault.innerText = comment.commentText;
  articleComments.appendChild(commentDefault);
};

const showDefaults = () => {
  defaultComments.forEach((comment) => {
    displayComment(comment);
  });
};

showDefaults();

const showNewComments = () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newComments = {
      name: e.target.name.value,
      commentText: e.target.comment.value,
      date: new Date().toLocaleDateString(),
    };

    if (e.target.name.value === "" || e.target.name.value == null) {
      const nameError = document.querySelector(".form__error");
      nameError.innerText = "Please Enter a Name";
    } else {
      defaultComments.unshift(newComments);
      commentsList.innerHTML = "";
      showDefaults();
      form.reset();
    }
  });
};

showNewComments();
