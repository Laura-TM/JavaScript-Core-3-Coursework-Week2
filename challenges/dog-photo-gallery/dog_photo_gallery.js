let buttonHolder = document.getElementsByTagName("main")[0];
let imageHolder = document.getElementsByTagName("section")[0];

let buttonOne = document.createElement("button");
buttonOne.classList.add("button");
buttonOne.innerHTML = "Add more";
buttonHolder.appendChild(buttonOne);

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw "error";
      }
    })
    .then(function (data) {
      console.log(data);

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
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

buttonOne.addEventListener("click", getDogImage);

let buttonTwo = document.createElement("button");
buttonTwo.classList.add("button");
buttonTwo.innerHTML = "Clear all";
buttonHolder.appendChild(buttonTwo);

function deleteAllImages() {
  let allLiElements = document.getElementsByTagName("li");
  let i = 0;
  while (allLiElements.length > 0) {
    allLiElements[i].remove();
  }
}

buttonTwo.addEventListener("click", deleteAllImages);
