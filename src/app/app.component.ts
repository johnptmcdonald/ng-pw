import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  length = 0;
  password = "";
  checkboxes = {
    letters: false,
    numbers: false,
    symbols: false
  };

  onChangeLength(value: string) {
    const parsedValue = +value;
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeCheckbox(event) {
    this.checkboxes[event.target.name] = !this.checkboxes[event.target.name];
  }

  onButtonClick() {
    const numbers = "123456789";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = "";
    if (this.checkboxes.letters) {
      validChars += letters;
    }
    if (this.checkboxes.numbers) {
      validChars += numbers;
    }
    if (this.checkboxes.symbols) {
      validChars += symbols;
    }

    let generatedPassword = "";

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
