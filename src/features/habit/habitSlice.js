import { createSlice, nanoid } from '@reduxjs/toolkit';

const dayMapper = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};
const getPreviousDate = (numOfDays) => {
  const today = new Date();
  const currDate = new Date(today.getTime() - numOfDays * 24 * 60 * 60 * 1000);
  const dd = currDate.getDate();
  const mm = currDate.getMonth();
  const yy = currDate.getFullYear();
  const day = dayMapper[currDate.getDay()];
  return `${day}:${dd}-${mm}-${yy}`;
};

const initialState = {
  habits: [],
};

export const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: nanoid(),
        text: action.payload,
        weekLog: [
          {
            id: 0,
            day: getPreviousDate(0).split(':')[0],
            date: getPreviousDate(0).split(':')[1],
            isCompleted: null,
          },
          {
            id: 1,
            day: getPreviousDate(1).split(':')[0],
            date: getPreviousDate(1).split(':')[1],
            isCompleted: null,
          },
          {
            id: 2,
            day: getPreviousDate(2).split(':')[0],
            date: getPreviousDate(2).split(':')[1],
            isCompleted: null,
          },
          {
            id: 3,
            day: getPreviousDate(3).split(':')[0],
            date: getPreviousDate(3).split(':')[1],
            isCompleted: null,
          },
          {
            id: 4,
            day: getPreviousDate(4).split(':')[0],
            date: getPreviousDate(4).split(':')[1],
            isCompleted: null,
          },
          {
            id: 5,
            day: getPreviousDate(5).split(':')[0],
            date: getPreviousDate(5).split(':')[1],
            isCompleted: null,
          },
          {
            id: 6,
            day: getPreviousDate(6).split(':')[0],
            date: getPreviousDate(6).split(':')[1],
            isCompleted: null,
          },
        ],
      };
      state.habits.push(newHabit);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter((habit) => {
        return action.payload !== habit.id;
      });
    },
    toggleHabbit: (state, action) => {
      const { id, toggleValue } = action.payload;
      state.habits.forEach((habit) => {
        if (id === habit.id) {
          habit.completed = toggleValue;
        }
      });
    },
  },
});

export const { addHabit, removeHabit } = habitSlice.actions;

export default habitSlice.reducer;
