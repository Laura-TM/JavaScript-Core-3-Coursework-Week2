function setUp() {
  let buttonHolder = document.getElementsByTagName("main")[0];

  let addButton = document.createElement("button");
  addButton.classList.add("button");
  addButton.innerHTML = "Add more";
  buttonHolder.appendChild(addButton);

  addButton.addEventListener("click", getDogImage);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("button");
  deleteButton.innerHTML = "Clear all";
  buttonHolder.appendChild(deleteButton);

  deleteButton.addEventListener("click", deleteAllImages);
}

const getDogImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw "error";
      }
    })
    .then(function (data) {
      createDogImage(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const createDogImage = (data) => {
  let imageHolder = document.getElementsByTagName("section")[0];

  let unorderedList = document.createElement("ul");
  unorderedList.classList.add("ul");
  imageHolder.appendChild(unorderedList);

  let liElement = document.createElement("li");
  liElement.classList.add("li");
  unorderedList.appendChild(liElement);

  let image = document.createElement("img");
  image.src = data.message;
  image.classList.add("image");
  liElement.appendChild(image);
  data.message++;
};

function deleteAllImages() {
  let allLiElements = document.getElementsByTagName("li");
  let i = 0;
  while (allLiElements.length > 0) {
    allLiElements[i].remove();
  }
}

window.onload = setUp;
