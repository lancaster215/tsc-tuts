"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Basketball_1 = require("./Basketball");
var myBasketball = new Basketball_1.Basketball();
var theCoaches = [];
theCoaches.push(myBasketball);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoaches = theCoaches_1[_i];
    console.log(tempCoaches.getDailyWorkout());
    console.log(tempCoaches.getEventScores());
}
