import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateBMI(weight: number, height: number, unit: string): number {
  if (unit === "metric") {
    // Weight in kg, height in cm
    return weight / ((height / 100) * (height / 100))
  } else {
    // Weight in lb, height in inches
    return (weight / (height * height)) * 703
  }
}

export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) {
    return "Underweight"
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight"
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

export function calculateWaterIntake(weightInKg: number): number {
  // A common recommendation is 30-35ml per kg of body weight
  // We'll use 33ml as an average
  return Math.round(weightInKg * 33)
}

