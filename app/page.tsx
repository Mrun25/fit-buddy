"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calculator, Utensils, Dumbbell, Droplets } from "lucide-react"
import { calculateBMI, getBMICategory } from "@/lib/utils"

export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    unit: "metric",
  })
  const [bmiResult, setBmiResult] = useState<{ bmi: number; category: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const calculateUserBMI = () => {
    const { weight, height, unit } = formData

    if (!weight || !height) return

    const weightValue = Number.parseFloat(weight)
    const heightValue = Number.parseFloat(height)

    if (isNaN(weightValue) || isNaN(heightValue)) return

    const bmi = calculateBMI(weightValue, heightValue, unit)
    const category = getBMICategory(bmi)

    setBmiResult({ bmi, category })
  }

  const navigateTo = (path: string) => {
    if (bmiResult) {
      router.push(`${path}?bmi=${bmiResult.bmi}&category=${bmiResult.category}`)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-2">FitBuddy</h1>
            <p className="text-muted-foreground text-lg">Your personal health and fitness companion</p>
          </div>

          <Tabs defaultValue="bmi" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="bmi" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>BMI Calculator</span>
              </TabsTrigger>
              <TabsTrigger value="meal" disabled={!bmiResult} className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                <span>Meal Planner</span>
              </TabsTrigger>
              <TabsTrigger value="workout" disabled={!bmiResult} className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4" />
                <span>Workout Planner</span>
              </TabsTrigger>
              <TabsTrigger value="water" disabled={!bmiResult} className="flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                <span>Water Tracker</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bmi">
              <Card>
                <CardHeader>
                  <CardTitle>Calculate Your BMI</CardTitle>
                  <CardDescription>
                    Enter your details to calculate your Body Mass Index and get personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="unit">Unit System</Label>
                        <Select value={formData.unit} onValueChange={(value) => handleSelectChange("unit", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit system" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                            <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight ({formData.unit === "metric" ? "kg" : "lb"})</Label>
                        <Input
                          id="weight"
                          name="weight"
                          type="number"
                          placeholder={formData.unit === "metric" ? "e.g. 70" : "e.g. 154"}
                          value={formData.weight}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Height ({formData.unit === "metric" ? "cm" : "in"})</Label>
                        <Input
                          id="height"
                          name="height"
                          type="number"
                          placeholder={formData.unit === "metric" ? "e.g. 175" : "e.g. 69"}
                          value={formData.height}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age (years)</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          placeholder="e.g. 30"
                          value={formData.age}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setFormData({
                        weight: "",
                        height: "",
                        age: "",
                        gender: "male",
                        unit: "metric",
                      })
                    }
                  >
                    Reset
                  </Button>
                  <Button onClick={calculateUserBMI}>Calculate BMI</Button>
                </CardFooter>
              </Card>

              {bmiResult && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Your BMI Results</CardTitle>
                    <CardDescription>Based on your height and weight</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-muted/50">
                        <div className="text-5xl font-bold mb-2">{bmiResult.bmi.toFixed(1)}</div>
                        <div className="text-xl font-semibold text-primary">{bmiResult.category}</div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <Button className="flex items-center gap-2" onClick={() => navigateTo("/meal-planner")}>
                          <Utensils className="h-4 w-4" />
                          <span>Meal Planner</span>
                          <ArrowRight className="h-4 w-4 ml-auto" />
                        </Button>
                        <Button className="flex items-center gap-2" onClick={() => navigateTo("/workout-planner")}>
                          <Dumbbell className="h-4 w-4" />
                          <span>Workout Planner</span>
                          <ArrowRight className="h-4 w-4 ml-auto" />
                        </Button>
                        <Button className="flex items-center gap-2" onClick={() => navigateTo("/water-tracker")}>
                          <Droplets className="h-4 w-4" />
                          <span>Water Tracker</span>
                          <ArrowRight className="h-4 w-4 ml-auto" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="meal">
              <Card>
                <CardHeader>
                  <CardTitle>Meal Planner</CardTitle>
                  <CardDescription>Get a personalized meal plan based on your BMI</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button className="flex items-center gap-2" onClick={() => navigateTo("/meal-planner")}>
                    <Utensils className="h-4 w-4" />
                    <span>Go to Meal Planner</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workout">
              <Card>
                <CardHeader>
                  <CardTitle>Workout Planner</CardTitle>
                  <CardDescription>Get a personalized workout plan based on your BMI</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button className="flex items-center gap-2" onClick={() => navigateTo("/workout-planner")}>
                    <Dumbbell className="h-4 w-4" />
                    <span>Go to Workout Planner</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="water">
              <Card>
                <CardHeader>
                  <CardTitle>Water Tracker</CardTitle>
                  <CardDescription>Track your daily water intake based on your weight</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button className="flex items-center gap-2" onClick={() => navigateTo("/water-tracker")}>
                    <Droplets className="h-4 w-4" />
                    <span>Go to Water Tracker</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

