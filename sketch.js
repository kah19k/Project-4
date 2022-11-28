
let newtorsofemale;

function preload() {
  // Load model with normalise parameter set to true
  newtorsofemale = loadModel('assets/newtorsofemale.obj', true);
}

function setup() {
  createCanvas(1200, 700, WEBGL);
  textScreen = createGraphics(1200,700)
  textScreen.text("NO",600,300)
  textScreen
  textSize(300);
  stroke(0);
}

function draw() {
  background(300);
  scale(3); // Scaled to make model fit into canvas
  let jitter = 0;
  if (mouseIsPressed) { 
   jitter = random(-.1,.1);
   image(textScreen, -width/2, -height/2)
   image(textScreen, -width/2.25, -height/2.25)
   image(textScreen, -width/1.75, -height/2.25)
   image(textScreen, -width/2, -height/2.75)
   image(textScreen, -width/2.50, -height/1.75)
   image(textScreen, -width/2.50, -height/3.25)
   image(textScreen, -width/1.70, -height/3.25)
   image(textScreen, -width/1.70, -height/1.75)
  c
   drawingContext.disable(drawingContext.DEPTH_TEST)
   //drawingContext.enable(drawingContext.BLEND)
   //drawingContext.enable(drawingContext.DEPTH_TEST)
   
  }
  
  rotateX(frameCount * 0.01 + jitter);
  rotateY(frameCount * 0.01 + jitter);
  normalMaterial(); // For effect
  model(newtorsofemale);
  orbitControl();
  
}
