import React from "react"
import { Text, View } from "react-native";
import HabitComponent from "./habit_component";
import { habitStyles } from "./_habits";

// TODO: remove these once we have real habits from the DB
const fakeHabits = [
  { 
    name: 'Drink water',
    icon: 'water-outline',
    type: 'material-community',
    total: '8',
    completed: '5',
    unit: 'cups',
  },
  {
    name: 'Eat fruits/veggies',
    icon: 'water',
    type: 'material-community',
    total: '3',
    completed: '2', 
    unit: 'cups',
  },
  {
    name: 'Exercise',
    icon: 'directions-run',
    total: '45',
    type: 'material',
    completed: '15',
    unit: 'minutes',
  },
];

const HabitsComponent = () => {
  return(
    <View style={habitStyles.main}>
        <Text style={habitStyles.title}>Daily Habits</Text>
        <View>
          {fakeHabits.map((prop, key) => {
            return (
              <HabitComponent
                name={prop.name}
                icon={prop.icon}
                total={prop.total}
                completed={prop.completed}
                unit={prop.unit}
                type={prop.type}
                key={key}
              ></HabitComponent>
            );
          })}
        </View>
      </View>
  )
}

export default HabitsComponent