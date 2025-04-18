interface Meal {
  title: string
  items: string[]
  note?: string
}

interface DayMeals {
  breakfast: Meal
  lunch: Meal
  dinner: Meal
}

interface MealPlan {
  [key: string]: DayMeals
}

// Replace the vegetarianMealPlans and nonVegetarianMealPlans objects with the updated meal plans

// Vegetarian meal plans based on BMI category
const vegetarianMealPlans: Record<string, MealPlan> = {
  underweight: {
    day1: {
      breakfast: {
        title: "High-Calorie Breakfast",
        items: ["Paneer paratha with butter", "Mixed nuts (handful)", "Fruit juice (1 glass)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Dal makhani", "Whole wheat roti (2)", "Mixed vegetable salad"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Ghee rice", "Rajma curry", "Papad", "Buttermilk"],
      },
    },
    day2: {
      breakfast: {
        title: "Energy-Packed Breakfast",
        items: ["Banana smoothie (1 glass)", "Poha with peanuts", "Mixed dry fruits"],
      },
      lunch: {
        title: "Nutrient-Dense Lunch",
        items: ["Chole curry", "Steamed rice", "Fresh curd", "Mixed vegetable salad"],
      },
      dinner: {
        title: "Protein-Rich Dinner",
        items: ["Stuffed aloo paratha (2)", "Buttermilk", "Mixed pickle"],
      },
    },
    day3: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Oats with nuts and honey", "Banana (1)", "Milk (1 glass)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Bhindi sabzi", "Whole wheat roti (2)", "Fresh curd", "Salad"],
      },
      dinner: {
        title: "Comfort Dinner",
        items: ["Moong dal khichdi", "Papad", "Pickle", "Buttermilk"],
      },
    },
    day4: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Besan chilla (2)", "Coconut chutney", "Fresh fruit juice (1 glass)"],
      },
      lunch: {
        title: "Hearty Lunch",
        items: ["Mixed dal", "Ghee chapati (2)", "Mixed vegetable sabzi", "Salad"],
      },
      dinner: {
        title: "Flavorful Dinner",
        items: ["Vegetable pulao", "Raita", "Papad", "Pickle"],
      },
    },
    day5: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Sprouts chaat", "Jaggery piece", "Buttermilk (1 glass)"],
      },
      lunch: {
        title: "Iron-Rich Lunch",
        items: ["Palak paneer", "Whole wheat chapati (2)", "Cucumber raita", "Salad"],
      },
      dinner: {
        title: "South Indian Dinner",
        items: ["Masala dosa", "Sambhar", "Coconut chutney", "Fresh fruit"],
      },
    },
    day6: {
      breakfast: {
        title: "Energy Breakfast",
        items: ["Dalia porridge with nuts", "Mixed dry fruits", "Milk (1 glass)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Rajma rice", "Mixed vegetable salad", "Papad", "Buttermilk"],
      },
      dinner: {
        title: "Vegetable-Rich Dinner",
        items: ["Stuffed capsicum", "Whole wheat roti (2)", "Fresh curd", "Pickle"],
      },
    },
    day7: {
      breakfast: {
        title: "Traditional Breakfast",
        items: ["Upma", "Coconut chutney", "Fresh fruit juice (1 glass)"],
      },
      lunch: {
        title: "Protein-Packed Lunch",
        items: ["Soya chunk curry", "Steamed rice", "Mixed vegetable salad", "Papad"],
      },
      dinner: {
        title: "Comfort Dinner",
        items: ["Kadhi pakora", "Jeera rice", "Mixed pickle", "Buttermilk"],
      },
    },
  },
  normal: {
    day1: {
      breakfast: {
        title: "Balanced Breakfast",
        items: ["Poha with peanuts", "Fresh fruit", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Mixed dal", "Whole wheat roti (2)", "Seasonal vegetable sabzi", "Salad"],
      },
      dinner: {
        title: "Nutritious Dinner",
        items: ["Palak paneer", "Jeera rice", "Cucumber raita", "Salad"],
      },
    },
    day2: {
      breakfast: {
        title: "South Indian Breakfast",
        items: ["Idli (2)", "Sambhar", "Coconut chutney", "Fresh fruit"],
      },
      lunch: {
        title: "Fiber-Rich Lunch",
        items: ["Rajma curry", "Brown rice", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Methi thepla (2)", "Fresh curd", "Pickle", "Herbal tea"],
      },
    },
    day3: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Sprouts chaat", "Lemon water", "Mixed nuts"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Bhindi sabzi", "Whole wheat roti (2)", "Buttermilk", "Salad"],
      },
      dinner: {
        title: "Comfort Dinner",
        items: ["Vegetable khichdi", "Fresh curd", "Papad", "Pickle"],
      },
    },
    day4: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Masala oats with nuts", "Fresh fruit", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Packed Lunch",
        items: ["Soya curry", "Whole wheat chapati (2)", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "South Indian Dinner",
        items: ["Moong dal dosa", "Coconut chutney", "Sambhar", "Fresh fruit"],
      },
    },
    day5: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Chia pudding with fruits", "Mixed nuts", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Chole curry", "Steamed rice", "Mixed vegetable salad", "Papad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Dal fry", "Tandoori roti (2)", "Cucumber raita", "Salad"],
      },
    },
    day6: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Besan chilla (2)", "Coconut chutney", "Fresh fruit juice (1 glass)"],
      },
      lunch: {
        title: "Vegetable-Rich Lunch",
        items: ["Baingan bharta", "Whole wheat roti (2)", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Protein-Rich Dinner",
        items: ["Matar paneer", "Whole wheat chapati (2)", "Fresh curd", "Salad"],
      },
    },
    day7: {
      breakfast: {
        title: "Traditional Breakfast",
        items: ["Upma", "Coconut chutney", "Fresh fruit", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Mixed vegetable curry", "Whole wheat paratha (2)", "Fresh curd", "Pickle"],
      },
      dinner: {
        title: "Comfort Dinner",
        items: ["Dal tadka", "Jeera rice", "Papad", "Mixed vegetable salad"],
      },
    },
  },
  overweight: {
    day1: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Oats porridge with flax seeds", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Moong dal", "Whole wheat chapati (1)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Vegetable soup", "Paneer tikka (small portion)", "Steamed vegetables"],
      },
    },
    day2: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Sprouts salad", "Coconut water (1 glass)", "Mixed seeds"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Mixed dal", "Brown rice (small portion)", "Seasonal vegetable sabzi", "Large salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Methi paratha (1)", "Fresh curd", "Steamed vegetables"],
      },
    },
    day3: {
      breakfast: {
        title: "Protein-Rich Breakfast",
        items: ["Masala chilla (1)", "Green chutney", "Green tea (1 cup)"],
      },
      lunch: {
        title: "High-Protein Lunch",
        items: ["Soya chunk stir-fry", "Whole wheat roti (1)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Khichdi (small portion)", "Buttermilk", "Steamed vegetables"],
      },
    },
    day4: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Green smoothie", "Mixed nuts (small handful)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Fiber-Rich Lunch",
        items: ["Baingan bharta", "Whole wheat roti (1)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Protein-Rich Dinner",
        items: ["Dal tadka (small portion)", "Quinoa (small portion)", "Steamed vegetables"],
      },
    },
    day5: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Chia pudding with nuts", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Chole curry (small portion)", "Multigrain roti (1)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Stir-fried vegetables", "Fresh curd", "Herbal tea"],
      },
    },
    day6: {
      breakfast: {
        title: "Energy Breakfast",
        items: ["Dalia with mixed seeds", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Rajma curry (small portion)", "Brown rice (small portion)", "Raita", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Besan chilla (1)", "Vegetable soup", "Steamed vegetables"],
      },
    },
    day7: {
      breakfast: {
        title: "Traditional Breakfast",
        items: ["Upma (small portion)", "Coconut chutney", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Palak paneer (small portion)", "Whole wheat roti (1)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Grilled vegetables", "Low-fat yogurt", "Herbal tea"],
      },
    },
  },
  obese: {
    day1: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Overnight oats with almonds (small portion)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: [
          "Mixed dal (small portion)",
          "Quinoa (small portion)",
          "Seasonal vegetable sabzi",
          "Large mixed vegetable salad",
        ],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Vegetable soup", "Paneer stir-fry (small portion)", "Steamed vegetables"],
      },
    },
    day2: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Sprouts salad", "Coconut water (1 glass)"],
      },
      lunch: {
        title: "Fiber-Rich Lunch",
        items: ["Moong dal chilla (1)", "Fresh curd", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Steamed vegetables", "Clear vegetable soup", "Herbal tea"],
      },
    },
    day3: {
      breakfast: {
        title: "Energy Breakfast",
        items: ["Masala oats with flaxseeds (small portion)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Stir-fried soya chunks", "Whole wheat chapati (1 small)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Grilled paneer (small portion)", "Sautéed vegetables", "Herbal tea"],
      },
    },
    day4: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Green smoothie", "Almonds (5-6)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Chole curry (very small portion)", "Whole wheat roti (1 small)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Mixed dal (small portion)", "Tandoori vegetables", "Clear soup"],
      },
    },
    day5: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Greek yogurt with chia seeds", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Fiber-Rich Lunch",
        items: ["Rajma curry (small portion)", "Brown rice (very small portion)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Grilled mushrooms", "Mixed green salad", "Herbal tea"],
      },
    },
    day6: {
      breakfast: {
        title: "Traditional Breakfast",
        items: ["Upma (small portion)", "Coconut chutney", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Baingan bharta", "Whole wheat roti (1 small)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Moong dal soup", "Mixed green salad", "Herbal tea"],
      },
    },
    day7: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Chia pudding with nuts (small portion)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Palak paneer (small portion)", "Quinoa (small portion)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Roasted vegetables", "Hummus (small portion)", "Herbal tea"],
      },
    },
  },
}

// Non-vegetarian meal plans based on BMI category
const nonVegetarianMealPlans: Record<string, MealPlan> = {
  underweight: {
    day1: {
      breakfast: {
        title: "Protein-Rich Breakfast",
        items: ["Scrambled eggs (2)", "Whole wheat toast (2)", "Banana (1)", "Milk (1 glass)"],
      },
      lunch: {
        title: "High-Calorie Lunch",
        items: ["Butter chicken", "Naan (2)", "Mixed vegetable salad", "Raita"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Grilled fish", "Mashed potatoes", "Sautéed vegetables", "Fruit yogurt"],
      },
    },
    day2: {
      breakfast: {
        title: "Energy-Packed Breakfast",
        items: ["Cheese omelette (2 eggs)", "Whole wheat sandwich", "Fresh fruit juice (1 glass)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Mutton curry", "Steamed rice", "Mixed vegetable salad", "Papad"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Egg curry", "Paratha (2)", "Mixed vegetable salad", "Buttermilk"],
      },
    },
    day3: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Boiled eggs (2)", "Mixed dry fruits", "Milk (1 glass)"],
      },
      lunch: {
        title: "Flavorful Lunch",
        items: ["Chicken biryani", "Raita", "Mixed vegetable salad", "Papad"],
      },
      dinner: {
        title: "Protein-Rich Dinner",
        items: ["Fish tikka", "Sautéed vegetables", "Whole wheat roti (2)", "Fruit yogurt"],
      },
    },
    day4: {
      breakfast: {
        title: "Energy Breakfast",
        items: ["Chicken sandwich", "Banana shake (1 glass)", "Mixed nuts"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Egg fried rice", "Mixed vegetable salad", "Papad", "Raita"],
      },
      dinner: {
        title: "Seafood Dinner",
        items: ["Prawns curry", "Whole wheat roti (2)", "Sautéed vegetables", "Buttermilk"],
      },
    },
    day5: {
      breakfast: {
        title: "High-Calorie Breakfast",
        items: ["Milkshake (1 glass)", "Peanut butter toast (2)", "Boiled egg (1)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Chicken stew", "Whole wheat roti (2)", "Mixed vegetable salad", "Raita"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Tandoori chicken", "Dal", "Steamed rice", "Mixed vegetable salad"],
      },
    },
    day6: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Paneer bhurji", "Paratha (2)", "Mixed fruit bowl", "Milk (1 glass)"],
      },
      lunch: {
        title: "Omega-Rich Lunch",
        items: ["Grilled salmon", "Mashed potatoes", "Sautéed vegetables", "Fresh fruit juice (1 glass)"],
      },
      dinner: {
        title: "Protein-Rich Dinner",
        items: ["Keema curry", "Steamed rice", "Mixed vegetable salad", "Raita"],
      },
    },
    day7: {
      breakfast: {
        title: "Sweet Breakfast",
        items: ["French toast with peanut butter", "Mixed fruit bowl", "Milk (1 glass)"],
      },
      lunch: {
        title: "Flavorful Lunch",
        items: ["Mutton biryani", "Raita", "Mixed vegetable salad", "Papad"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Grilled fish", "Quinoa", "Sautéed vegetables", "Fruit yogurt"],
      },
    },
  },
  normal: {
    day1: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Boiled eggs (2)", "Multigrain toast (2)", "Fresh fruit", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Chicken curry (small portion)", "Whole wheat roti (2)", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Omega-Rich Dinner",
        items: ["Grilled fish", "Sautéed vegetables", "Brown rice (small portion)", "Fresh fruit"],
      },
    },
    day2: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Vegetable omelette (2 eggs)", "Fruit smoothie (1 glass)", "Mixed nuts (small handful)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Egg curry", "Brown rice (small portion)", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Chicken stew", "Quinoa (small portion)", "Steamed vegetables", "Fresh fruit"],
      },
    },
    day3: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Sprouts salad", "Banana (1)", "Boiled egg (1)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Seafood Lunch",
        items: ["Prawns curry (small portion)", "Steamed rice", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Protein-Rich Dinner",
        items: ["Fish tikka", "Grilled vegetables", "Whole wheat roti (1)", "Fresh fruit"],
      },
    },
    day4: {
      breakfast: {
        title: "Balanced Breakfast",
        items: ["Paneer sandwich (whole grain bread)", "Buttermilk (1 glass)", "Mixed fruit"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Chicken tikka", "Whole wheat roti (2)", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Vegetable omelette (2 eggs)", "Avocado toast (1)", "Mixed green salad", "Herbal tea"],
      },
    },
    day5: {
      breakfast: {
        title: "Energy Breakfast",
        items: ["Dalia with nuts", "Boiled egg (1)", "Fresh fruit", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Packed Lunch",
        items: ["Chicken salad", "Whole wheat chapati (2)", "Buttermilk", "Fresh fruit"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Egg fried rice (small portion)", "Stir-fried vegetables", "Mixed green salad", "Herbal tea"],
      },
    },
    day6: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Peanut butter toast (whole grain bread)", "Milk (1 glass)", "Mixed fruit"],
      },
      lunch: {
        title: "Flavorful Lunch",
        items: ["Butter chicken (small portion)", "Brown rice (small portion)", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Omega-Rich Dinner",
        items: ["Grilled salmon", "Mashed potatoes (small portion)", "Steamed vegetables", "Fresh fruit"],
      },
    },
    day7: {
      breakfast: {
        title: "South Indian Breakfast",
        items: ["Masala dosa", "Sambhar", "Coconut chutney", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Keema curry (small portion)", "Whole wheat roti (2)", "Mixed vegetable salad", "Buttermilk"],
      },
      dinner: {
        title: "Balanced Dinner",
        items: ["Tandoori chicken (small portion)", "Fresh curd", "Mixed green salad", "Herbal tea"],
      },
    },
  },
  overweight: {
    day1: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Egg whites (3)", "Brown toast (1)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Lean Protein Lunch",
        items: ["Grilled chicken", "Mixed green salad", "Buttermilk (1 glass)"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Grilled fish", "Steamed vegetables", "Clear soup", "Herbal tea"],
      },
    },
    day2: {
      breakfast: {
        title: "Protein-Rich Breakfast",
        items: ["Omelette (egg whites only)", "Avocado (small)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Prawns curry (small portion)", "Brown rice (small portion)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Chicken stew (small portion)", "Sautéed vegetables", "Clear soup"],
      },
    },
    day3: {
      breakfast: {
        title: "Energy Breakfast",
        items: ["Scrambled egg whites (3)", "Green smoothie (1 glass)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Boiled chicken", "Whole wheat roti (1)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Tandoori fish (small portion)", "Mixed green salad", "Clear soup"],
      },
    },
    day4: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Whole grain toast with peanut butter (1 slice)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Packed Lunch",
        items: ["Keema curry (small portion)", "Quinoa (small portion)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Boiled eggs (2)", "Stir-fried vegetables", "Clear soup"],
      },
    },
    day5: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Greek yogurt with berries (small portion)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Chicken salad", "Whole wheat roti (1)", "Buttermilk (1 glass)"],
      },
      dinner: {
        title: "Omega-Rich Dinner",
        items: ["Grilled salmon (small portion)", "Steamed spinach", "Clear soup"],
      },
    },
    day6: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Sprouts chaat", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Egg curry (2 eggs)", "Whole wheat roti (1)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Paneer bhurji (small portion)", "Clear soup", "Steamed vegetables"],
      },
    },
    day7: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Protein smoothie with seeds", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Lean Protein Lunch",
        items: ["Grilled chicken", "Quinoa (small portion)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Fish curry (small portion)", "Steamed vegetables", "Clear soup"],
      },
    },
  },
  obese: {
    day1: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Scrambled egg whites (3)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Lean Protein Lunch",
        items: ["Grilled chicken breast (small portion)", "Large mixed vegetable salad", "Lemon water"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Fish curry (small portion)", "Steamed spinach", "Clear vegetable soup"],
      },
    },
    day2: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Boiled egg whites (3)", "Fruit smoothie (small)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Prawns stir-fry (small portion)", "Large mixed vegetable salad", "Lemon water"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Tandoori chicken (small portion)", "Low-fat yogurt", "Steamed vegetables"],
      },
    },
    day3: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Boiled eggs (3 whites)", "Avocado (small piece)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Keema (small portion)", "Whole wheat roti (1 small)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Omega-Rich Dinner",
        items: ["Grilled salmon (small portion)", "Quinoa (very small portion)", "Steamed vegetables"],
      },
    },
    day4: {
      breakfast: {
        title: "Light Breakfast",
        items: ["Whole grain toast with peanut butter (1 small slice)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Egg curry (2 eggs)", "Large mixed vegetable salad", "Lemon water"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Chicken broth", "Steamed vegetables", "Herbal tea"],
      },
    },
    day5: {
      breakfast: {
        title: "Protein Breakfast",
        items: ["Greek yogurt with berries (small portion)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Lean Protein Lunch",
        items: ["Grilled chicken", "Steamed spinach", "Lemon water"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Tandoori fish (small portion)", "Large mixed vegetable salad", "Herbal tea"],
      },
    },
    day6: {
      breakfast: {
        title: "Fiber-Rich Breakfast",
        items: ["Sprouts with seeds", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Balanced Lunch",
        items: ["Chicken stew (small portion)", "Whole wheat roti (1 small)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Fish tikka (small portion)", "Sautéed greens", "Clear soup"],
      },
    },
    day7: {
      breakfast: {
        title: "Nutritious Breakfast",
        items: ["Protein smoothie with nuts (small)", "Green tea (1 cup)"],
      },
      lunch: {
        title: "Protein-Rich Lunch",
        items: ["Butter chicken (very small portion)", "Multigrain roti (1 small)", "Large mixed vegetable salad"],
      },
      dinner: {
        title: "Light Dinner",
        items: ["Boiled eggs (2)", "Clear vegetable soup", "Steamed vegetables"],
      },
    },
  },
}

export function getMealPlan(bmi: number, dietType: string): MealPlan {
  let category = ""

  if (bmi < 18.5) {
    category = "underweight"
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "normal"
  } else if (bmi >= 25 && bmi < 30) {
    category = "overweight"
  } else {
    category = "obese"
  }

  if (dietType === "vegetarian") {
    return vegetarianMealPlans[category]
  } else {
    return nonVegetarianMealPlans[category]
  }
}

