import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

export const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: nanoid,
        text: action.payload,
        completed: false,
      };
      state.habits.push(newHabit);
    },
    removeHabit: (state, action) => {
      state.habits.filter((habit) => action.payload !== habit.id);
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
