import { FrameWrapper } from "./ExercisesStyle"
import FixitExercise from "./02_fixit/FixitExercise"
import Fillitin from "./03_fillitin/Fillitin"
import ReplaceitExercise from "./01_replaceit/ReplaceitExercise"

const Exercises = () => {

  return (
    <FrameWrapper>
      <ReplaceitExercise />
      <FixitExercise />
      <Fillitin />
    </FrameWrapper>
  )
}

export default Exercises