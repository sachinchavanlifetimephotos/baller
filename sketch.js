var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0; 
var particle1; 
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
   for(var k  = 0; k <=width; k = k +80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 

 

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var h = 50; h <=width-10; h=h+50) 
  {
    plinkos.push(new Plinko(h,175));
  }

  //create 3rd row of plinko objects
  for (var m = 75; m <=width; m=m+50) 
  {
    plinkos.push(new Plinko(m,275));
  }

  
  //create 4th row of plinko objects
  for (var l = 50; l <=width-10; l=l+50) 
  {
    plinkos.push(new Plinko(l,375));
  }


  //create particle objects
  

}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();   
  }
   
  
  //display the divisions
  

  //display the particles  

 
  

  for(var b=0; b<divisions.length; b++){ 
    divisions[b].display(); 
  }


 
if(frameCount%60===0){ 
  particles.push(new Particle(random(width/2-30,width/2+30),10,10)) 
  
} 
for (var j=0; j<particles.length; j++){ 
  particles[j].display(); 
}



 
}