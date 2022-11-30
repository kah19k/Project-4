
let newtorsofemale;
var clicks = 0;

function preload() {
  // Load model with normalise parameter set to true
  newtorsofemale = loadModel('assets/newtorsofemale.obj', true);
}

function setup() {
  createCanvas(2400, 1200, WEBGL);
  textScreen = createGraphics(2400,1200)
  textScreen.text("STOP!!!",1200, 500)
  textScreen
  fill(0);
textSize(12);
textFont('Georgia');
  textSize(800);
  stroke(10);
  let lights = [
  { c: '#f00', t: 1.12, p: 1.91, r: 0.2 },
  { c: '#0f0', t: 1.21, p: 1.31, r: 0.2 },
  { c: '#00f', t: 1.37, p: 1.57, r: 0.2 },
  { c: '#ff0', t: 1.12, p: 1.91, r: 0.7 },
  { c: '#0ff', t: 1.21, p: 1.31, r: 0.7 },
  { c: '#f0f', t: 1.37, p: 1.57, r: 0.7 }
];
}

function draw() {
  background(600);
  textSize(800);
  stroke(10);
  scale(3); // Scaled to make model fit into canvas
  let jitter = 0;
  if (mouseIsPressed) { 
   jitter = random(-.1,.1);
   background('rgb(100%,0%,10%)')

   directionalLight(color('#222'), 1, 1, 1);
   image(textScreen, -width/2, -height/2);
   image(textScreen, -width/2.15, -height/2);
   image(textScreen, -width/2.25, -height/2.25);
   image(textScreen, -width/2.35, -height/2.25);
   image(textScreen, -width/1.75, -height/2.25);
   image(textScreen, -width/1.85, -height/2.25);
   image(textScreen, -width/2, -height/2.75) ;
   image(textScreen, -width/2, -height/2.85);
   image(textScreen, -width/2.50, -height/1.75) ;
   image(textScreen, -width/2.50, -height/1.85);
   image(textScreen, -width/2.50, -height/3.25);
   image(textScreen, -width/2.50, -height/3);
   image(textScreen, -width/1.70, -height/3.25);
   image(textScreen, -width/1.70, -height/2.75);
   image(textScreen, -width/1.70, -height/1.75);

   image(textScreen, -width/1.23, -height/1.95);
   image(textScreen, -width/2.0, -height/2.15);
   image(textScreen, -width/2.35, -height/2.15);
   image(textScreen, -width/2.45, -height/2.15);
   image(textScreen, -width/1.85, -height/2.15);
   image(textScreen, -width/1.95, -height/2.15);
   image(textScreen, -width/2.10, -height/2.75) ;
   image(textScreen, -width/2, -height/2.85);
   image(textScreen, -width/1.50, -height/1.65) ;
   image(textScreen, -width/1.50, -height/1.35);
   image(textScreen, -width/1.50, -height/3.15);
   image(textScreen, -width/1.50, -height/3.10);
   image(textScreen, -width/1.75, -height/3.15);
   image(textScreen, -width/1.75, -height/2.65);
   image(textScreen, -width/1.75, -height/1.65);

   drawingContext.disable(drawingContext.DEPTH_TEST);
   drawingContext.enable(drawingContext.BLEND);
   drawingContext.enable(drawingContext.BLEND);
   //drawingContext.enable(drawingContext.DEPTH_TEST)
   
  
  }
   
  

  rotateX(frameCount * 0.01 + jitter);
  rotateY(frameCount * 0.01 + jitter);
  normalMaterial(); // For effect
  model(newtorsofemale);
  orbitControl();
  
  
  
  
}
