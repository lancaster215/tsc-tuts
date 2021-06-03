export abstract class Shape {
    constructor(private _x: number, private _y: number){

    }
    public get x(): number {
        return this._x;
    }

    public set x(val: number){
        this._x = val;
    }

    public get y(): number{
        return this._y;
    }

    public set y(val: number){
        this._y = val;
    }

    getInfo(): string{
        return `x=${this._x} y=${this._y}`;
    }

    abstract calcArea():  number
}