import { FrameWrapper } from "./ExercisesStyle"
import FixitExercise from "./02_fixit/FixitExercise"
import FillitinExercise from "./03_fillitin/FillitinExercise"
import ReplaceitExercise from "./01_replaceit/ReplaceitExercise"

const Exercises = () => {

  return (
    <FrameWrapper>
      <ReplaceitExercise />
      <FixitExercise />
      <FillitinExercise />
    </FrameWrapper>
  )
}

export default Exercises