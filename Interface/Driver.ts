import { Basketball } from './Basketball';
import { Coach } from './Coach';

let myBasketball = new Basketball();

let theCoaches: Coach[] = [];

theCoaches.push(myBasketball);

for(let tempCoaches of theCoaches){
    console.log(tempCoaches.getDailyWorkout());
    console.log(tempCoaches.getEventScores())
}