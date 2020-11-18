class Display {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.width =  10;
        this.height = size/2 - this.width/2;
        this.offset = this.width;
    }

    show(segments) {
        this.edge(this.x, this.y-this.offset, true, segments[0]);
        this.edge(this.x + this.height, this.y, false, segments[1]);
        this.edge(this.x + this.height, this.y + this.height+this.offset, false, segments[2]);
        this.edge(this.x, this.y + 2*this.height+this.offset, true, segments[3]);
        this.edge(this.x-this.offset, this.y + this.height+this.offset, false, segments[4]);
        this.edge(this.x-this.offset, this.y, false, segments[5]);
        this.edge(this.x, this.y + this.height, true, segments[6]);
        
        // this.edge(this.x, this.y + this.height, true, true);
        // this.edge(this.x, this.y, false);
        // this.edge(this.x, this.y, false);
        // this.edge(this.x, this.y, false);
    }

    edge(x, y, hor, flag){
        if(flag)
            fill(255,0,0);
        else
            fill(0);
        if(hor)
            rect(x, y, this.height, this.width);
        else
            rect(x, y, this.width, this.height);
    }
}