const textP = document.querySelector(".text-p");
const buttonP = document.querySelector(".button-p");

class Paragraph {
  parentElement = document.querySelector(".container");
  paragraph;

  constructor(paragraph) {
    this.paragraph = document.createElement("p");
    this.getHTML();
  }

  getHTML() {
    this.parentElement.append(paragraph);
  }
}

buttonP.addEventListener("click", () => {
  new Paragraph(textP.value);
});
