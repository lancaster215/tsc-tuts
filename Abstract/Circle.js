"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    //we decalre theX and theY as private to use them in get functions
    function Circle(theX, theY) {
        var _this = _super.call(this, theX, theY) || this;
        _this.theX = theX;
        _this.theY = theY;
        return _this;
    }
    Circle.prototype.calcArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            //theX is circumference, theY is always 2
            var rad = (this.theX / (this.theY * 3.14));
            return rad;
        },
        enumerable: false,
        configurable: true
    });
    //super.getInfo returns the getInfo from superClass Shape
    Circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (" radius=" + this.radius);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
