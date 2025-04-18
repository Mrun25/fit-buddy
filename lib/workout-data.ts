interface Exercise {
  name: string
  sets: number
  reps: number
  description: string
}

interface Workout {
  title: string
  description: string
  exercises: Exercise[]
  note?: string
}

interface WorkoutPlan {
  [key: string]: Workout
}

const workoutPlans: Record<string, WorkoutPlan> = {
  beginner: {
    day1: {
      title: "Full Body Workout",
      description: "A full body workout to build a foundation of strength and endurance.",
      exercises: [
        {
          name: "Squats",
          sets: 3,
          reps: 10,
          description: "A fundamental exercise for lower body strength.",
        },
        {
          name: "Push-ups",
          sets: 3,
          reps: "As many as possible",
          description: "A classic exercise for upper body strength.",
        },
        {
          name: "Dumbbell Rows",
          sets: 3,
          reps: 10,
          description: "An exercise for back strength.",
        },
        {
          name: "Plank",
          sets: 3,
          reps: "30 seconds",
          description: "An exercise for core strength.",
        },
      ],
      note: "Rest for 60 seconds between sets.",
    },
    day2: {
      title: "Rest Day",
      description: "Allow your body to recover and rebuild.",
      exercises: [],
    },
    day3: {
      title: "Full Body Workout",
      description: "A full body workout to build a foundation of strength and endurance.",
      exercises: [
        {
          name: "Lunges",
          sets: 3,
          reps: 10,
          description: "A fundamental exercise for lower body strength.",
        },
        {
          name: "Incline Push-ups",
          sets: 3,
          reps: "As many as possible",
          description: "A classic exercise for upper body strength.",
        },
        {
          name: "Dumbbell Bicep Curls",
          sets: 3,
          reps: 10,
          description: "An exercise for bicep strength.",
        },
        {
          name: "Crunches",
          sets: 3,
          reps: 15,
          description: "An exercise for core strength.",
        },
      ],
      note: "Rest for 60 seconds between sets.",
    },
    day4: {
      title: "Rest Day",
      description: "Allow your body to recover and rebuild.",
      exercises: [],
    },
    day5: {
      title: "Full Body Workout",
      description: "A full body workout to build a foundation of strength and endurance.",
      exercises: [
        {
          name: "Glute Bridges",
          sets: 3,
          reps: 12,
          description: "An exercise for glute strength.",
        },
        {
          name: "Wall Push-ups",
          sets: 3,
          reps: "As many as possible",
          description: "A classic exercise for upper body strength.",
        },
        {
          name: "Dumbbell Shoulder Press",
          sets: 3,
          reps: 10,
          description: "An exercise for shoulder strength.",
        },
        {
          name: "Russian Twists",
          sets: 3,
          reps: 15,
          description: "An exercise for core strength.",
        },
      ],
      note: "Rest for 60 seconds between sets.",
    },
    day6: {
      title: "Active Recovery",
      description: "Light activity such as walking or stretching.",
      exercises: [],
    },
    day7: {
      title: "Rest Day",
      description: "Allow your body to recover and rebuild.",
      exercises: [],
    },
  },
  intermediate: {
    day1: {
      title: "Upper Body Strength",
      description: "Focus on building upper body strength and muscle.",
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          reps: 8,
          description: "A compound exercise for chest, shoulders, and triceps.",
        },
        {
          name: "Pull-ups",
          sets: 3,
          reps: "As many as possible",
          description: "A challenging exercise for back and biceps.",
        },
        {
          name: "Overhead Press",
          sets: 3,
          reps: 8,
          description: "An exercise for shoulder strength and stability.",
        },
        {
          name: "Dumbbell Rows",
          sets: 3,
          reps: 10,
          description: "An exercise for back strength.",
        },
      ],
      note: "Rest for 75 seconds between sets.",
    },
    day2: {
      title: "Lower Body Strength",
      description: "Focus on building lower body strength and muscle.",
      exercises: [
        {
          name: "Barbell Squats",
          sets: 3,
          reps: 8,
          description: "A fundamental exercise for lower body strength.",
        },
        {
          name: "Deadlifts",
          sets: 1,
          reps: 5,
          description: "A powerful exercise for overall strength.",
        },
        {
          name: "Lunges",
          sets: 3,
          reps: 10,
          description: "An exercise for leg strength and balance.",
        },
        {
          name: "Calf Raises",
          sets: 3,
          reps: 15,
          description: "An exercise for calf strength.",
        },
      ],
      note: "Rest for 90 seconds between sets.",
    },
    day3: {
      title: "Rest Day",
      description: "Allow your body to recover and rebuild.",
      exercises: [],
    },
    day4: {
      title: "Upper Body Hypertrophy",
      description: "Focus on building upper body muscle mass.",
      exercises: [
        {
          name: "Incline Dumbbell Press",
          sets: 3,
          reps: 10,
          description: "An exercise for upper chest development.",
        },
        {
          name: "Lat Pulldowns",
          sets: 3,
          reps: 12,
          description: "An exercise for back width.",
        },
        {
          name: "Dumbbell Lateral Raises",
          sets: 3,
          reps: 12,
          description: "An exercise for shoulder width.",
        },
        {
          name: "Dumbbell Bicep Curls",
          sets: 3,
          reps: 12,
          description: "An exercise for bicep growth.",
        },
        {
          name: "Triceps Pushdowns",
          sets: 3,
          reps: 12,
          description: "An exercise for tricep growth.",
        },
      ],
      note: "Rest for 60 seconds between sets.",
    },
    day5: {
      title: "Lower Body Hypertrophy",
      description: "Focus on building lower body muscle mass.",
      exercises: [
        {
          name: "Leg Press",
          sets: 3,
          reps: 12,
          description: "An exercise for overall leg strength and size.",
        },
        {
          name: "Hamstring Curls",
          sets: 3,
          reps: 15,
          description: "An exercise for hamstring development.",
        },
        {
          name: "Leg Extensions",
          sets: 3,
          reps: 15,
          description: "An exercise for quadriceps development.",
        },
        {
          name: "Seated Calf Raises",
          sets: 3,
          reps: 20,
          description: "An exercise for calf growth.",
        },
      ],
      note: "Rest for 60 seconds between sets.",
    },
    day6: {
      title: "Active Recovery",
      description: "Light activity such as walking or stretching.",
      exercises: [],
    },
    day7: {
      title: "Rest Day",
      description: "Allow your body to recover and rebuild.",
      exercises: [],
    },
  },
  advanced: {
    day1: {
      title: "Push Day",
      description: "Focus on chest, shoulders, and triceps.",
      exercises: [
        {
          name: "Barbell Bench Press",
          sets: 4,
          reps: 6,
          description: "A compound exercise for chest, shoulders, and triceps.",
        },
        {
          name: "Incline Dumbbell Press",
          sets: 3,
          reps: 8,
          description: "An exercise for upper chest development.",
        },
        {
          name: "Overhead Press",
          sets: 3,
          reps: 6,
          description: "An exercise for shoulder strength and stability.",
        },
        {
          name: "Lateral Raises",
          sets: 3,
          reps: 10,
          description: "An exercise for shoulder width.",
        },
        {
          name: "Close-Grip Bench Press",
          sets: 3,
          reps: 8,
          description: "An exercise for tricep strength.",
        },
      ],
      note: "Rest for 90 seconds between sets.",
    },
    day2: {
      title: "Pull Day",
      description: "Focus on back and biceps.",
      exercises: [
        {
          name: "Pull-ups",
          sets: 3,
          reps: "As many as possible",
          description: "A challenging exercise for back and biceps.",
        },
        {
          name: "Barbell Rows",
          sets: 4,
          reps: 6,
          description: "A compound exercise for back strength.",
        },
        {
          name: "Lat Pulldowns",
          sets: 3,
          reps: 8,
          description: "An exercise for back width.",
        },
        {
          name: "Face Pulls",
          sets: 3,
          reps: 12,
          description: "An exercise for shoulder health and posture.",
        },
        {
          name: "Barbell Curls",
          sets: 3,
          reps: 8,
          description: "An exercise for bicep growth.",
        },
      ],
      note: "Rest for 90 seconds between sets.",
    },
    day3: {
      title: "Leg Day",
      description: "Focus on quadriceps, hamstrings, and calves.",
      exercises: [
        {
          name: "Barbell Squats",
          sets: 4,
          reps: 6,
          description: "A fundamental exercise for lower body strength.",
        },
        {
          name: "Romanian Deadlifts",
          sets: 3,
          reps: 8,
          description: "An exercise for hamstring development.",
        },
        {
          name: "Leg Press",
          sets: 3,
          reps: 10,
          description: "An exercise for overall leg strength and size.",
        },
        {
          name: "Leg Extensions",
          sets: 3,
          reps: 12,
          description: "An exercise for quadriceps development.",
        },
        {
          name: "Seated Calf Raises",
          sets: 4,
          reps: 15,
          description: "An exercise for calf growth.",
        },
      ],
      note: "Rest for 90 seconds between sets.",
    },
    day4: {
      title: "Rest Day",
      description: "Allow your body to recover and rebuild.",
      exercises: [],
    },
    day5: {
      title: "Push Day",
      description: "Focus on chest, shoulders, and triceps.",
      exercises: [
        {
          name: "Incline Barbell Press",
          sets: 4,
          reps: 6,
          description: "A compound exercise for upper chest, shoulders, and triceps.",
        },
        {
          name: "Decline Dumbbell Press",
          sets: 3,
          reps: 8,
          description: "An exercise for lower chest development.",
        },
        {
          name: "Arnold Press",
          sets: 3,
          reps: 6,
          description: "An exercise for shoulder strength and stability.",
        },
        {
          name: "Front Raises",
          sets: 3,
          reps: 10,
          description: "An exercise for shoulder width.",
        },
        {
          name: "Overhead Triceps Extension",
          sets: 3,
          reps: 8,
          description: "An exercise for tricep strength.",
        },
      ],
      note: "Rest for 90 seconds between sets.",
    },
    day6: {
      title: "Pull Day",
      description: "Focus on back and biceps.",
      exercises: [
        {
          name: "Chin-ups",
          sets: 3,
          reps: "As many as possible",
          description: "A challenging exercise for back and biceps.",
        },
        {
          name: "T-Bar Rows",
          sets: 4,
          reps: 6,
          description: "A compound exercise for back strength.",
        },
        {
          name: "Close-Grip Lat Pulldowns",
          sets: 3,
          reps: 8,
          description: "An exercise for back width.",
        },
        {
          name: "Rear Delt Flyes",
          sets: 3,
          reps: 12,
          description: "An exercise for shoulder health and posture.",
        },
        {
          name: "Hammer Curls",
          sets: 3,
          reps: 8,
          description: "An exercise for bicep growth.",
        },
      ],
      note: "Rest for 90 seconds between sets.",
    },
    day7: {
      title: "Active Recovery",
      description: "Light activity such as walking or stretching.",
      exercises: [],
    },
  },
}

export function getWorkoutPlan(fitnessLevel: string): WorkoutPlan {
  return workoutPlans[fitnessLevel] || workoutPlans["beginner"]
}

export function getFitnessLevel(bmi: number): string {
  if (bmi < 25) {
    return "beginner"
  } else if (bmi >= 25 && bmi < 30) {
    return "intermediate"
  } else {
    return "advanced"
  }
}

