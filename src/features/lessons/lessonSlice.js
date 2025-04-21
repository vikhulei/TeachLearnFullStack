import { createSlice } from "@reduxjs/toolkit";

const lessonSlice = createSlice({
    name: "lesson",
    initialState: {
        lessonsRange: 1,
        currentLesson: 1
    },
    reducers: {
        updateLessonsRange: (state, action) => {
            state.lessonsRange = action.payload
        },
        updateCurrentLesson: (state, action) => {
            state.currentLesson = action.payload
        }
    }
})

export const { updateLessonsRange, updateCurrentLesson } = lessonSlice.actions

export default lessonSlice.reducer