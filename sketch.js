let video;
let label = "waiting...";

let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/MioAyAlS/';

function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(900, 520);
  video = createCapture(VIDEO);
  video.hide();

  classifyVideo();
}

function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  image(video, 0, 0);

  
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  let emoji = "📱";
  if (label == "HUMAN") {
    emoji = "🙋‍♂️";
  } else if (label == "BALL") {
    emoji = "🥎";
  } else if (label == "BOTTLE") {
    emoji = "🍾";
  }

  
  textSize(225);
  text(emoji, 780, 200);
 }

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
 //console.log(results);
  classifyVideo();
}