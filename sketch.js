
let torsofemale;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('assets/torsofemale.obj', true);
}

function setup() {
  createCanvas(100, 100, WEBGL);
  describe('Vertically rotating 3-d teapot with red, green and blue gradient.');
}

function draw() {
  background(200);
  scale(0.4); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(teapot);
}