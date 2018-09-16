var canv;

function setup() {
	canv = createCanvas(400,400);
	canv.mouseClicked(canvasClicked);
	ptag = createP("some text");
	button = createButton("don't click me");
	button.mouseClicked(goAway);
}

function draw(){
	ellipse(width/2, height/2, 40);
}

function canvasClicked() {
	console.log(mouseX, mouseY);
	if( dist(width/2, height/2, mouseX, mouseY) < 20)
		fill(60,0,0)
}

funtion goAway() {
	rect(width/2, height/2, 40, 40)
}