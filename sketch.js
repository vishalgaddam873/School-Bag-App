var canvas;
var form;
var database;
var app;

function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  app = new App();
}

function draw(){
  background("#2b2a2a");
  app.display();
}



// Run when the mouse/touch is down.
function mousePressed() {
  if(app.appState === "notebooks"){
    if(app.subjects.notebooks.length >0){
      for(var i=0;i<app.subjects.notebooks.length;i++){
        var book = app.subjects.notebooks[i],
            distance = dist(mouseX, mouseY,book.x, book.y)
        if(distance < app.subjects.radius){
          book.active = true;
          book.color = "#f00";
        }else {
          book.active = false;
          book.color = '#fff';
        }
      }
    }
    // Prevent default functionality.
    return false;
  }
}

// // Run when the mouse/touch is dragging.
function mouseDragged() {
  if(app.appState === "notebooks"){
    if(app.subjects.notebooks.length > 0){
      for(var i= 0;i<app.subjects.notebooks.length;i++){
        var book = app.subjects.notebooks[i]
        if(book.active){
          book.x = mouseX
          book.y = mouseY
          break
        }
      }
    }
    // Prevent default functionality.
    return false;
  }
}
