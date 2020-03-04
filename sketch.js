let y = 100;
let speed = 1;
let value= 155;


function setup() {
  createCanvas(800, 800);
  stroke(255);
  frameRate(2400);
}

function draw() {
  background(0);
  y = y - speed;
  if (y < 0 || y > 800) {
  //y = height;
  speed = -speed;

}





  fill(value);
  if (mouseX>790) {
    line(600,600,100,100)
  }else{
    line(510,250,300,75);


    line(460,210,260,mouseX);
    line(480,230,280,mouseX);
    line(500,250,300,mouseX);
    line(520,270,320,mouseX);
    line(540,290,340,mouseX);
    line(560,310,360,mouseX);
    line(580,330,380,mouseX);
    line(600,350,400,mouseX);

  }
  if (mouseX>790) {
    line(0,0,100,100);
  }else{
line(75,300,250,510);


line(mouseY,260,210,460);
line(mouseY,280,230,480);
line(mouseY,300,250,500);
line(mouseY,320,270,520);
line(mouseY,340,290,540);
line(mouseY,360,310,560);
line(mouseY,380,330,580);
line(mouseY,400,350,600);

  }

  line(75,75,175,175);
  line(550,550,175,175)


  fill(value);
  if (mouseY>400) {
    line(605,605,125,125);
  }else{
    noFill();



  }

if (mouseY>400) {
  line(25,25,125,125);
}else{
  noFill();


}


fill(value);
if (mouseX>790){
line(590,590,150,150);
line(50,50,150,150);
}else{

  line()
  line(400,150,200,mouseX);
  line(380,130,180,mouseX);
  line(360,110,160,mouseX);
  line(340,90,140,mouseX);

  line(mouseY,200,150,400);
  line(mouseY,180,130,380);
  line(mouseY,160,110,360);
  line(mouseY,140,90,340);

}






for (let i = 0; i < 400; i+=10) {
  line(i, y, width, i+40);
}
  //original lines//



  for (let i = 0; i < 400; i+=10) {
    line(i+40, y, width, i);
  }

  //original lines matchup 2//
  for (let i = 0; i < 400; i+=10) {
    line(y, i, i+40, width);
  }
//experimental set 1 (YES)//




for (let i = 0; i < 400; i+=10) {
  line(y, i+40, i, width);}
//experimental set matchup//





for (let i = 0; i < 400; i+=10) {
  line(y, i, width, i+40);}
//last set 1//





for (let i = 0; i < 400; i+=10) {
  line(y, i+40, i, width);}
//last set matchup//




for (let i = 0; i < 400; i+=10) {
  line(i, y, i+40, width);}
//another set 1//





for (let i = 0; i < 400; i+=10) {
  line(i+40, y, i, width);}
//another set matchup//

}
