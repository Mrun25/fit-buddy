"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Droplets } from "lucide-react"
import { calculateWaterIntake } from "@/lib/utils"

export default function WaterTracker() {
  const searchParams = useSearchParams()
  const bmi = searchParams.get("bmi") ? Number.parseFloat(searchParams.get("bmi")!) : null

  const category = searchParams.get("category") || ""
  const weightInKg = bmi && searchParams.get("weight") ? Number.parseFloat(searchParams.get("weight")!) : 70

  const [currentIntake, setCurrentIntake] = useState(0)
  const [targetIntake, setTargetIntake] = useState(0)
  const [waterLog, setWaterLog] = useState<{ time: string; amount: number }[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (weightInKg) {
      const recommendedIntake = calculateWaterIntake(weightInKg)
      setTargetIntake(recommendedIntake)
    }

    // Load saved data from localStorage if available
    const savedDate = localStorage.getItem("waterTrackerDate")
    const today = new Date().toDateString()

    if (savedDate === today) {
      const savedIntake = localStorage.getItem("currentIntake")
      const savedLog = localStorage.getItem("waterLog")

      if (savedIntake) setCurrentIntake(Number.parseInt(savedIntake))
      if (savedLog) setWaterLog(JSON.parse(savedLog))
    } else {
      // Reset for new day
      localStorage.setItem("waterTrackerDate", today)
      localStorage.setItem("currentIntake", "0")
      localStorage.setItem("waterLog", JSON.stringify([]))
    }
  }, [weightInKg])

  useEffect(() => {
    // Update progress whenever current intake changes
    setProgress((currentIntake / targetIntake) * 100)

    // Save to localStorage
    localStorage.setItem("currentIntake", currentIntake.toString())
    localStorage.setItem("waterLog", JSON.stringify(waterLog))
  }, [currentIntake, targetIntake, waterLog])

  const addWater = (amount: number) => {
    const now = new Date()
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    setCurrentIntake((prev) => prev + amount)
    setWaterLog((prev) => [...prev, { time: timeString, amount }])
  }

  const resetTracker = () => {
    setCurrentIntake(0)
    setWaterLog([])
    localStorage.setItem("currentIntake", "0")
    localStorage.setItem("waterLog", JSON.stringify([]))
  }

  if (!bmi) {
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>BMI Required</CardTitle>
            <CardDescription>
              Please calculate your BMI first to get a personalized water intake recommendation
            </CardDescription>
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
              <h1 className="text-3xl font-bold tracking-tight">Water Tracker</h1>
              <p className="text-muted-foreground">Track your daily water intake based on your weight</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Today's Progress</CardTitle>
                <CardDescription>Your recommended daily water intake is {targetIntake} ml</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/50">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-bold mb-1">{currentIntake}</div>
                          <div className="text-sm text-muted-foreground">of {targetIntake} ml</div>
                        </div>
                      </div>
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-muted stroke-current"
                          strokeWidth="10"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-primary stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                          strokeDasharray={`${Math.min(progress, 100) * 2.51} 251.2`}
                          strokeDashoffset="0"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        {progress >= 100
                          ? "Great job! You've reached your water intake goal for today."
                          : `You need ${targetIntake - currentIntake} ml more to reach your goal.`}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col gap-1" onClick={() => addWater(250)}>
                      <Droplets className="h-6 w-6" />
                      <span>250 ml</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-1" onClick={() => addWater(500)}>
                      <Droplets className="h-6 w-6" />
                      <span>500 ml</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-1" onClick={() => addWater(750)}>
                      <Droplets className="h-6 w-6" />
                      <span>750 ml</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-1" onClick={() => addWater(1000)}>
                      <Droplets className="h-6 w-6" />
                      <span>1000 ml</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={resetTracker}>
                  Reset Today's Tracker
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Water Log</CardTitle>
                <CardDescription>Your water intake history for today</CardDescription>
              </CardHeader>
              <CardContent>
                {waterLog.length === 0 ? (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <Droplets className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No water intake logged yet today</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Use the buttons on the left to log your water intake
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {waterLog.map((log, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Droplets className="h-4 w-4 text-primary" />
                          </div>
                          <span>{log.amount} ml</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{log.time}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Total: {currentIntake} ml</div>
                <div className="text-sm text-muted-foreground">{waterLog.length} entries</div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

