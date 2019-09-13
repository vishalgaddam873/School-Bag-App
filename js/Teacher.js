class Teacher {
  constructor() {
  }

  login() {
    app.updateState("teacher")
  }

  display() {
    fill("white")
    textSize(40)
    text("Teacher Page",width/2-180,80);
    app.subjects.display();
  }

}
