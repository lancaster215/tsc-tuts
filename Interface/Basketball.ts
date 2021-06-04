import { Coach } from "./Coach";

export class Basketball implements Coach{
    getDailyWorkout(): string {
        return "Practice your dribbling";
    }
    getEventScores(): number {
        return 10;
    }
}