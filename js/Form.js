class Form {
    constructor() {
      this.teacherButton = createButton("");
      this.studentButton = createButton("");
      this.teacherImage = loadImage('assets/teacherImage.png');
      this.studentImage = loadImage('assets/studentImage.png');
    }

    display() {
      fill("#eba434");
      textSize(40);
      text("Welcome to Bag App", width/2-170, 100);

      text("I am Teacher", width/2-100, height/2-280);
      this.teacherButton.position(width/2-80 ,height/2-250);
      this.teacherButton.class('teacherButton');

      text("I am Student", width/2-100, height/2+90);
      this.studentButton.position(width/2-80, height/2 + 120);
      this.studentButton.class('studentButton');

      this.teacherButton.mousePressed(app.teacher.login);
      this.studentButton.mousePressed(app.student.login);
    }

    hide() {
      this.teacherButton.hide();
      this.studentButton.hide();
    }
}
