        var particle = {
            x: 0,
            y: 0,
            size:10,
            move: function move(){
            this.x = this.x+1
            this.y = this.y+1
        }
        };
        function setup(){
            createCanvas(600,600);
        }   
        function draw(){
            for(var i = 0; i<10; i++)
            rect(particle.x, particle.y,particle.size,particle.size);    
        }   
particle.move();