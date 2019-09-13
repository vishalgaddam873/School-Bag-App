class Subjects {
  constructor() {
    this.science = createButton("")
    this.mathematics = createButton("")
    this.socialscience = createButton("")
    this.hindi = createButton("Hindi")
    this.english = createButton("English")
    this.marathi = createButton("Marathi")
  }

  display() {
    fill("#e09f3d")
    textSize(25)
    text("Science",width/2-370,height/2+80)
    this.science.position(width/2-400,height/2-100);
    this.science.class("science");


    text("Mathematics",width/2-250,height/2-120)
    this.mathematics.position(width/2-250,height/2-300);
    this.mathematics.class("mathematics");


    text("Social Science",width/2,height/2-120)
    this.socialscience.position(width/2,height/2-300);
    this.socialscience.class("socialscience");


    text("Hindi",width/2+200,height/2+80)
    this.hindi.position(width/2+150,height/2-100);
    this.hindi.class("hindi");

    text("English",width/2-220,height/2+260)
    this.english.position(width/2-250,height/2+80);
    this.english.class("english");

    text("Marathi",width/2+40,height/2+260)
    this.marathi.position(width/2,height/2+80);
    this.marathi.class("english");
  }
}
