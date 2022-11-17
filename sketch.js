
let torsofemale;

function preload() {
  // Load model with normalise parameter set to true
  torsofemale = loadModel('assets/torsofemale.obj', true);
}

function setup() {
  createCanvas(1200, 700, WEBGL);
  
}

function draw() {
  background(300);
  scale(3); // Scaled to make model fit into canvas
  let jitter = 0;
  if (mouseIsPressed) {  jitter = random(-.1,.1); }
  rotateX(frameCount * 0.01 + jitter);
  rotateY(frameCount * 0.01 + jitter);
  normalMaterial(); // For effect
  model(torsofemale);
  orbitControl();

}
