import { Shape } from './Shape';
import { Circle } from './Circle';

let myCircle = new Circle(25, 2);

// declare and array of numbers based from the superclass Shape which has a data type number
let theShapeArr: Shape[] = [];

theShapeArr.push(myCircle);

for(let tempShape of theShapeArr){
    console.log(tempShape.getInfo());
    console.log(tempShape.calcArea());
}