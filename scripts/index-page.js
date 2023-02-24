let apiKey = "c71eaba9-4139-499f-86a3-551633b09e24";
let apiUrl = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;

/**
 * Method to iterate the array of objects in order to display the comments by default.
 */
const defaultData = [];

const form = document.querySelector(".form");
const nameError = document.querySelector("#form__error");

form.addEventListener("keydown", typing);

/**
 * Function that clean the form.
 * @param {KeyboardEvent} e
 */
function typing(e) {
  if (e.target.name.value !== "") {
    nameError.innerText = "";
  }
}

/**
 * GET all defaults Comments.
 */
const showDefaults = () => {
  axios
    .get(apiUrl)
    .then((response) => {
      const defaultData = response.data;
      defaultData.reverse().forEach((comment) => {
        displayComment(comment);
      });
    })

    .catch((error) => {
      console.log(error);
    });
};

/**
 * Add the new comments and display it dynamically to the DOM.
 * @param {SubmitEvent} e
 */
const showNewComments = (e) => {
  e.preventDefault();

  const newComments = {
    name: e.target.name.value,
    comment: e.target.comment.value,
  };

  if (e.target.name.value === "" || e.target.name.value == null) {
    nameError.innerText = "!Please enter a name";
  } else if (e.target.comment.value.length < 3) {
    nameError.innerText = "Comment must have 20 or more characters...";
  } else {
    axios
      .post(apiUrl, newComments)
      .then(() => {
        commentsList.innerHTML = "";
        showDefaults();
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

form.addEventListener("submit", showNewComments);

const commentsList = document.querySelector(".comments");

/**
 * Function to create the elements in the DOM.
 * @param {Object} comment
 */

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
  dateDefaultComment.innerText = new Date(
    comment.timestamp
  ).toLocaleDateString();
  articleComments.appendChild(dateDefaultComment);

  const commentDefault = document.createElement("p");
  commentDefault.classList.add("comments__content");
  commentDefault.innerText = comment.comment;
  articleComments.appendChild(commentDefault);
};

showDefaults();
