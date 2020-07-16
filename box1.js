class box1 extends BaseClass{
    constructor(x, y){
        super(x, y);
        this.Visibility = 255;   
    }
    display(){
        fill(100,80,90);
        console.log(this.body.speed);
        if(this.body.speed < 7){
        super.display();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 0.05;
            tint(255, this.Visibility);
            rect(this.body.x, this.body.y, 30, 30);
            pop();
        }
        }
}