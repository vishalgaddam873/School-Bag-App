class Subjects {
  constructor() {
    this.allSubjects = null;
    this.allBooks = null;
    this.science = loadImage('assets/science.jpg')
    this.mathematics = loadImage('assets/mathematics.jpg')
    this.socialscience = loadImage('assets/socialscience.jpg');
    this.notebooks = []
    this.radius = 50;
    this.notebookX = 200;
    this.notebookY = 200;
    this.active = false;
  }

  showBooks() {
    fill("white")
    textSize(40)
    text("All Books", 300,300)

    if(this.notebooks.length > 0){
      for(var i=0 ;i<this.notebooks.length;i++){
        var books = this.notebooks[i]
        noStroke();
        fill(books.color)
        ellipse(books.x, books.y,this.radius, this.radius)
      }
    }
  }

  getSubjects() {
    database.ref('subjects').on("value",(data)=>{
      this.allSubjects = data.val();
    })
  }

  showSubjects() {
    var imgX = 150
    var imgY = 300
    for(var i in this.allSubjects){
      image(eval("this." + i),imgX, imgY, 150, 280)
      fill("white")
      textSize(30)
      text(i,imgX,620)
      imgX+=280
    }
    if(touches[0]){
      console.log(touches[0].x,touches[0].y);
      if((touches[0].x >=140 && touches[0].x <= 290) && (touches[0].y >= 320 && touches[0].y <= 570)){
        this.allBooks = this.allSubjects.mathematics.books
        app.appState = "notebooks"
      }
      else if((touches[0].x >=450 && touches[0].x <= 580) && (touches[0].y >= 320 && touches[0].y <= 570)){
        this.allBooks = this.allSubjects.science.books
        app.appState = "notebooks"
      }
      else if((touches[0].x >=720 && touches[0].x <= 830) && (touches[0].y >= 320 && touches[0].y <= 570)){
        this.allBooks = this.allSubjects.socialscience.books
        app.appState = "notebooks"
      }

      var count = 100
      for(var i=0;i< this.allBooks.length;i++){
        this.notebooks.push({x:count, y:300,color:"#fff",active:false})
        count+=100
      }

    }
  }

  display() {
    this.showSubjects();
  }
}
