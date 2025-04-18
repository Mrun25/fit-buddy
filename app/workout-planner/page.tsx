"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Check, Dumbbell } from "lucide-react"
import { getWorkoutPlan, getFitnessLevel } from "@/lib/workout-data"

export default function WorkoutPlanner() {
  const searchParams = useSearchParams()
  const bmi = searchParams.get("bmi") ? Number.parseFloat(searchParams.get("bmi")!) : null
  const category = searchParams.get("category") || ""

  const [currentDay, setCurrentDay] = useState("day1")
  const [workoutPlan, setWorkoutPlan] = useState<any>(null)
  const [completedWorkouts, setCompletedWorkouts] = useState<Record<string, boolean>>({})
  const [progress, setProgress] = useState(0)
  const [fitnessLevel, setFitnessLevel] = useState("")

  useEffect(() => {
    if (bmi) {
      const level = getFitnessLevel(bmi)
      setFitnessLevel(level)

      const plan = getWorkoutPlan(level)
      setWorkoutPlan(plan)

      // Initialize completed workouts tracking
      const initialCompletedWorkouts: Record<string, boolean> = {}
      Object.keys(plan).forEach((day) => {
        initialCompletedWorkouts[day] = false
      })
      setCompletedWorkouts(initialCompletedWorkouts)
    }
  }, [bmi])

  useEffect(() => {
    if (workoutPlan) {
      // Calculate progress
      const completed = Object.values(completedWorkouts).filter(Boolean).length
      const total = Object.keys(completedWorkouts).length
      setProgress(total > 0 ? (completed / total) * 100 : 0)
    }
  }, [completedWorkouts, workoutPlan])

  const toggleWorkoutCompletion = (day: string) => {
    setCompletedWorkouts((prev) => ({
      ...prev,
      [day]: !prev[day],
    }))
  }

  if (!bmi) {
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>BMI Required</CardTitle>
            <CardDescription>Please calculate your BMI first to get a personalized workout plan</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/" passHref>
              <Button className="w-full">Go to BMI Calculator</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="flex items-center mb-6">
            <Link href="/" passHref>
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <div className="ml-4">
              <h1 className="text-3xl font-bold tracking-tight">Workout Planner</h1>
              <p className="text-muted-foreground">
                Your personalized 7-day workout plan based on your BMI:{" "}
                <span className="font-medium">{bmi?.toFixed(1)}</span> ({category})
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>Track your workout plan adherence</CardDescription>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-md">
                  <span className="text-sm font-medium">Fitness Level: </span>
                  <span className="text-sm font-bold text-primary">{fitnessLevel}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {workoutPlan && (
            <Tabs value={currentDay} onValueChange={setCurrentDay} className="w-full">
              <TabsList className="grid grid-cols-7 mb-8">
                {Object.keys(workoutPlan).map((day, index) => (
                  <TabsTrigger key={day} value={day} className="relative">
                    Day {index + 1}
                    {completedWorkouts[day] && (
                      <span className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(workoutPlan).map(([day, workout]: [string, any]) => (
                <TabsContent key={day} value={day}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{workout.title}</CardTitle>
                        <div className="flex items-center">
                          <Checkbox
                            id={`${day}-workout`}
                            checked={completedWorkouts[day] || false}
                            onCheckedChange={() => toggleWorkoutCompletion(day)}
                            className="mr-2 h-5 w-5"
                          />
                          <label htmlFor={`${day}-workout`} className="text-sm font-medium cursor-pointer">
                            Mark as completed
                          </label>
                        </div>
                      </div>
                      <CardDescription>{workout.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={completedWorkouts[day] ? "opacity-50" : ""}>
                        <div className="space-y-6">
                          {workout.exercises.map((exercise: any, i: number) => (
                            <div key={i} className="flex items-start gap-4">
                              <div className="bg-primary/10 p-3 rounded-full">
                                <Dumbbell className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium text-lg">{exercise.name}</h3>
                                <p className="text-muted-foreground">
                                  {exercise.sets} × {exercise.reps}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">{exercise.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {workout.note && (
                          <div className="mt-6 p-4 bg-muted rounded-lg">
                            <p className="text-sm font-medium">Note:</p>
                            <p className="text-sm text-muted-foreground">{workout.note}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </main>
  )
}

