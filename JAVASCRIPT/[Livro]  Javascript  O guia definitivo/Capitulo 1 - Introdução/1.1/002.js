function Point(x,y){
    this.x = x;
    this.y = y;
}

var  points =  new Point(1,1)

Point.prototype.fc = function(){
    return Math.sqrt(this.x * this.x + this.y * this.y)
}

console.log(points.fc())