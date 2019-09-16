class App {
    constructor() {
      this.appState="open";
      this.form = new Form();
      this.teacher = new Teacher();
      this.student = new Student();
      this.subjects = new Subjects();
      this.books = new Books();
     }

    display() {
      switch(this.appState){
        case "open":
          this.form.display();
          break;
        case "teacherlogin":
          this.form.hide();
          this.teacher.login();
          break;
        case "subjects":
          this.teacher.hide();
          this.subjects.getSubjects();
          this.subjects.display();
          break;
        case "notebooks":
          this.subjects.showBooks();
          break;
        case "student":
          this.form.hide();
          this.teacher.hide();
          this.student.display();
          break;
      }
    }
}
