class App {
    constructor() {
      this.appState=undefined;
      this.form = new Form();
      this.teacher = new Teacher();
      this.student = new Student();
      this.subjects = new Subjects();
      this.books = new Books();
     }

    getState() {
      var appState = database.ref('appState').on("value",(state)=>{
        this.appState = state.val();
      });
      console.log("App State:-",this.appState);
    }

    updateState(state) {
      database.ref('/').update({
        appState: state
      });
    }

    display() {
      switch(this.appState){
        case "open":
          this.form.display();
          break;
        case "teacher":
          this.teacher.display();
          this.form.hide();
          break;
        case "student":
          this.student.display();
          this.form.hide();
          break;
      }
    }
}
