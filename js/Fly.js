class Fly {
    constructor(bodyA, pointB) {

        // this.x = offsetX;
        // this.y = offsetY;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    // display() {
    //     var sp = this.rope.bodyA.position;
    //     var ep = this.rope.pointB.position;
    //     stroke('white');
    //     strokeWeight(3);
    //     line(sp.x + this.x, sp.y + this.y, ep.x, ep.y);
    // }
}