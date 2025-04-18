"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Check, Utensils } from "lucide-react"
import { getMealPlan } from "@/lib/meal-data"

export default function MealPlanner() {
  const searchParams = useSearchParams()
  const bmi = searchParams.get("bmi") ? Number.parseFloat(searchParams.get("bmi")!) : null
  const category = searchParams.get("category") || ""

  const [dietType, setDietType] = useState("vegetarian")
  const [currentDay, setCurrentDay] = useState("day1")
  const [mealPlan, setMealPlan] = useState<any>(null)
  const [completedMeals, setCompletedMeals] = useState<Record<string, Record<string, boolean>>>({})
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (bmi) {
      const plan = getMealPlan(bmi, dietType)
      setMealPlan(plan)

      // Initialize completed meals tracking
      const initialCompletedMeals: Record<string, Record<string, boolean>> = {}
      Object.keys(plan).forEach((day) => {
        initialCompletedMeals[day] = {
          breakfast: false,
          lunch: false,
          dinner: false,
        }
      })
      setCompletedMeals(initialCompletedMeals)
    }
  }, [bmi, dietType])

  useEffect(() => {
    if (mealPlan) {
      // Calculate progress
      let completed = 0
      let total = 0

      Object.keys(completedMeals).forEach((day) => {
        Object.keys(completedMeals[day]).forEach((mealType) => {
          total++
          if (completedMeals[day][mealType]) {
            completed++
          }
        })
      })

      setProgress(total > 0 ? (completed / total) * 100 : 0)
    }
  }, [completedMeals, mealPlan])

  const toggleMealCompletion = (day: string, mealType: string) => {
    setCompletedMeals((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: !prev[day][mealType],
      },
    }))
  }

  if (!bmi) {
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>BMI Required</CardTitle>
            <CardDescription>Please calculate your BMI first to get a personalized meal plan</CardDescription>
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
              <h1 className="text-3xl font-bold tracking-tight">Meal Planner</h1>
              <p className="text-muted-foreground">
                Your personalized 7-day meal plan based on your BMI:{" "}
                <span className="font-medium">{bmi?.toFixed(1)}</span> ({category})
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>Track your meal plan adherence</CardDescription>
                </div>
                <div className="w-full md:w-48">
                  <Select value={dietType} onValueChange={setDietType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Diet Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                    </SelectContent>
                  </Select>
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

          {mealPlan && (
            <Tabs value={currentDay} onValueChange={setCurrentDay} className="w-full">
              <TabsList className="grid grid-cols-7 mb-8">
                {Object.keys(mealPlan).map((day, index) => (
                  <TabsTrigger key={day} value={day} className="relative">
                    Day {index + 1}
                    {Object.values(completedMeals[day]).every(Boolean) && (
                      <span className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(mealPlan).map(([day, meals]: [string, any]) => (
                <TabsContent key={day} value={day}>
                  <div className="grid gap-6">
                    {["breakfast", "lunch", "dinner"].map((mealType) => (
                      <Card key={mealType}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="capitalize">{mealType}</CardTitle>
                            <div className="flex items-center">
                              <Checkbox
                                id={`${day}-${mealType}`}
                                checked={completedMeals[day]?.[mealType] || false}
                                onCheckedChange={() => toggleMealCompletion(day, mealType)}
                                className="mr-2 h-5 w-5"
                              />
                              <label htmlFor={`${day}-${mealType}`} className="text-sm font-medium cursor-pointer">
                                Mark as completed
                              </label>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className={completedMeals[day]?.[mealType] ? "opacity-50" : ""}>
                            <div className="flex items-start gap-4">
                              <div className="bg-primary/10 p-3 rounded-full">
                                <Utensils className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium text-lg mb-2">{meals[mealType].title}</h3>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {meals[mealType].items.map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                                {meals[mealType].note && (
                                  <p className="mt-2 text-sm text-muted-foreground italic">{meals[mealType].note}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </main>
  )
}

