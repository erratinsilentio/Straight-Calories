import { atom } from "nanostores";

export interface Intake {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export const $dailyIntakeGoal = atom<Intake>({
  calories: 2800,
  protein: 130,
  fat: 100,
  carbs: 350,
});

export const $dailyIntakeCurrent = atom<Intake>({
  calories: 0,
  protein: 0,
  fat: 0,
  carbs: 0,
});

export function setNewIntakeGoal(intake: Intake) {
  $dailyIntakeGoal.set({
    calories: intake.calories,
    protein: intake.protein,
    fat: intake.fat,
    carbs: intake.carbs,
  });
}

export function addNewMeal(intake: Intake) {
  $dailyIntakeCurrent.set({
    calories: $dailyIntakeCurrent.get().calories + intake.calories,
    protein: $dailyIntakeCurrent.get().protein + intake.protein,
    fat: $dailyIntakeCurrent.get().fat + intake.fat,
    carbs: $dailyIntakeCurrent.get().carbs + intake.carbs,
  });
}
