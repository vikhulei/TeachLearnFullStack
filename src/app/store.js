import { configureStore } from "@reduxjs/toolkit";
import lessonReducer from "../features/lessons/lessonSlice"

const store = configureStore({
    reducer: {
        lessons: lessonReducer
     }
})

export default store