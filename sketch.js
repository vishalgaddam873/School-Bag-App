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
  app.getState();
  app.display();
}
