fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);

    let container = document.getElementsByTagName("body")[0];
    let image = document.createElement("img");
    image.src = data.img;
    container.appendChild(image);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
