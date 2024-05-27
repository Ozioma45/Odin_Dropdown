class Dropdown {
  constructor(element) {
    this.dropdown = element;
    this.button = this.dropdown.querySelector(".dropdown-button");
    this.content = this.dropdown.querySelector(".dropdown-content");

    this.init();
  }

  init() {
    this.button.addEventListener("click", () => {
      this.toggle();
    });

    window.addEventListener("click", (e) => {
      if (!this.dropdown.contains(e.target)) {
        this.hide();
      }
    });
  }

  toggle() {
    this.content.classList.toggle("visible");
  }

  hide() {
    this.content.classList.remove("visible");
  }
}

document.querySelectorAll(".dropdown").forEach((dropdown) => {
  new Dropdown(dropdown);
});
