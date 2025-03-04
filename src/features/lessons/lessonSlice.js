import { createSlice } from "@reduxjs/toolkit";

const lessonSlice = createSlice({
    name: "lesson",
    initialState: {value: "test"},
    reducers: {
        updateLessonNumber: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateLessonNumber } = lessonSlice.actions

export default lessonSlice.reducer