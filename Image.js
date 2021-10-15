const textUrl = document.querySelector(".text-img");
const buttonImg = document.querySelector(".button-img");

class Image {
  parentElement = document.querySelector(".container");
  image;

  constructor(image) {
    this.image = document.createElement("img");
    this.getHTML();
  }

  getHTML() {
    this.parentElement.append(image);
  }
}

buttonImg.addEventListener("click", () => {
  new Image(textUrl.src);
});
