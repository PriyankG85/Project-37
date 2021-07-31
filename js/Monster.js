class Monster {
    constructor(x, y, w, h, i) {
        var options = {
            density: 1
        }
        this.body = Bodies.circle(x, y, h/2.4, options);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.i = i;
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.i, 0, 0, this.w, this.h);
        // ellipse(0, 0, this.r, this.r);
        pop();
    }
}