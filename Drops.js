class Drops {

constructor (x,y){

this.rain=Bodies.circle(x,y,5,options);
this.radius=5;
World.add(this.rain,world);

}


update(){

if (this.rain.position.y > height){

Matter.Body.setPosition(this.rain, {x:random(0,400),y: random (0,400)})

}


}

display(){

    post= this.rain.position;
ellipse(0,0,this.rain.position.x,this.rain.position.y);

}





}