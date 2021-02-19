var hr, mn, sc;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

angleMode(DEGREES);
//scAngle=map(sc, 0, 60, 0, 360);
//mnAngle=map(mn, 0, 60, 0, 360);
//hrAngle=map(hr, 0, 60, 0, 360);

}

function draw() {
  background(255,255,255);  
  hr=hour()
  mn=minute()
  sc=second()

  translate(200, 200)
rotate(-90)

  scAngle=map(sc, 0, 60, 0, 360);
  mnAngle=map(mn, 0, 60, 0, 360);
  hrAngle=map(hr, 0, 60, 0, 360);

push()
rotate(scAngle)
strokeWeight(7)
stroke("red")
line(0, 0, 100, 0)
pop()


push()
rotate(mnAngle)
strokeWeight(7)
stroke("blue")
line(0, 0, 75, 0)
pop()


push()

rotate(hrAngle)
strokeWeight(7)
stroke("green")
line(0, 0, 50, 0)
pop()

stroke("red")
point(0, 0)
noFill()
arc(0, 0, 300, 300, 0, scAngle)
stroke("blue")
arc(0, 0, 280, 280, 0, mnAngle)


stroke("green")
arc(0, 0, 260, 260, 0, hrAngle)


  drawSprites();
}