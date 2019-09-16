class Teacher {
  constructor() {
    this.password = createInput('',"password");
    this.submit = createButton("Submit");
    this.image = loadImage('assets/teacherImage.png')
  }
  sucsess() {
    var password = this.password.value()
    if(password === "admin"){
      app.appState = "subjects"
    }
  }

  login(){
    app.appState = "teacherlogin";
    fill("white")
    textSize(40)
    text("Teacher Login", width/2-130,80);
    image(this.image,width/2-80,height/2-280,150,150)
    textSize(20)
    text("Enter your password",width/2-100, height/2-100 )
    this.password.position(width/2-150, height/2-80);
    this.password.class("password");
    this.submit.position(width/2-80, height/2);
    this.submit.class("submit")
    this.submit.mousePressed(()=>{
      this.sucsess();
    })
  }

  hide() {
    this.password.hide();
    this.submit.hide();
  }

}
