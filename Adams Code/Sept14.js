var particle = {
    x: 0,
    y: 0,
    size: 10,
    move: function move(){
        this.x = this.x+1;
        this.y = this.y+1;
    }
};

var particle2 = {
    x: 0,
    y: 0,
    size: 10,
    move: function move(){
        this.x = this.x+1;
        this.y = this.y+1;
    }
};

var particles = [];


//function setup(){
//    createCanvas(600,600);
//    for(var i = 0; i < 10; i++){
//       particles.push( particle ); 
//    }    
//}
//
//function draw(){
//    // 89 is width of the sketch minus 
//    // the width of the shape and border
//    //rect(89, 0, 10, 10);
//    // rect(mouseX, mouseY, 10, 10);
//    
//    for(var i = 0; i < 10; i++){
//        //rect(mouseX +i, mouseY +i, 10,10);
//        rect(particle.x, particle.y, particle.size, particle.size);
//        rect(particle2.x, particle2.y, particle2.size, particle2.size);
//        rect( particles[i].x, particles[i].y, particles[i].size, particles[i].size); 
//    }
//    
//    // () function invokation operator
//    particle.move();
//    particle2.move();
//}


//I'm just copying the code but I don't know where this is placed for now
var canv;

function setup() {
//createcanvas create a refrence of the canvas\
    canv = createCanvas(400,400);
// canv.position(window height, window.width)
    canv.mouseOver(removecanvas);
    canv.mouseClicked(makeParticle);
    
    particles = [];
}

function draw() {
    for (var i=0, i < particles.length; i++){
        ellipse(particles[i].x, particles[i].y, particles[i].size);
        particles[i].x += particles[i].speed;
        particles[i].x += particles[i].speed;
    }
}

function makeParticle() {
    var particle = {
        x: mouseX,
        y: mouseY,
        size: 30
        speed: 1
        
    };
    
}