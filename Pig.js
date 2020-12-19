class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image=loadImage("sprites/enemy.png")
      /*  var options={
         restitution:0.8,
         friction:0.3,
         density:1
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        
        this.width=50;
        this.height=50;
       // Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
        */

    }
    display(){
        super.display();  
       /* var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate(pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER)
        fill (0,255,0)
        rect(0,0,this.width,this.height)
        pop ()*/
    }
}





