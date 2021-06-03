"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var myCircle = new Circle_1.Circle(25, 2);
// declare and array of numbers based from the superclass Shape which has a data type number
var theShapeArr = [];
theShapeArr.push(myCircle);
for (var _i = 0, theShapeArr_1 = theShapeArr; _i < theShapeArr_1.length; _i++) {
    var tempShape = theShapeArr_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calcArea());
}
