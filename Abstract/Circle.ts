import { Shape } from './Shape';

export class Circle extends Shape{
    calcArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
    //we decalre theX and theY as private to use them in get functions
    constructor(private theX: number, private theY: number){
        super(theX, theY)
    }

    public get radius(): number{
        //theX is circumference, theY is always 2
        let rad = (this.theX / (this.theY * 3.14))
        return rad;
    }

    //super.getInfo returns the getInfo from superClass Shape
    getInfo(): string{
        return super.getInfo() + ` radius=${this.radius}`;
    }
}