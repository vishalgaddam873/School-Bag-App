class Student {
  constructor() {

  }

  login() {
    app.appState = "student";
  }

  display() {
    fill("white")
    textSize(40);
    text("Student Page", 400, 200);
  }

}
