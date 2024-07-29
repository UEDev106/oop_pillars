
 class Shaped{
  area(){
        throw console.error('it must be implemented');
    }
    random(){
        console.log('its random method may or may not implement')
    }
}
class Circle extends Shaped{
    constructor(radius){
        super();
        this.radius=radius
    }
    area(){
        return Math.PI * this.radius * this.radius
    }
}
class Rectangle extends Shaped{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }
    area(){
        return this.height * this.width
    }
}

const main = ()=>{
    const mycircle = new Circle(3,4)
    const myrectangle= new Rectangle(4,6)

    const circlearea= mycircle.area ()
    const circlerectangle=myrectangle.area()
        Circle.random();

        console.log(`circlArea:${circlearea}
            circlerectangle: ${circlerectangle}`)
    
};
main();



/// using interface
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}
    
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    
    getArea(): number {
        return this.width * this.height;
    }
}

const circle: Shape = new Circle(3);
const rectangle: Shape = new Rectangle(6, 10);

console.log(circle.getArea()); // Outputs the area of the circle
console.log(rectangle.getArea()); // Outputs the area of the rectangle
