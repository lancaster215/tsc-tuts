import { Shape } from './Shape';
import { Circle } from './Circle';

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(25, 2);
console.log(myCircle.getInfo());