import { FrameWrapper } from "./ExercisesStyle"
import Fixit from "./02_fixit/Fixit"
import Fillitin from "./03_fillitin/Fillitin"
import ReplaceitExercise from "./01_replaceit/ReplaceitExercise"

const Exercises = () => {

  return (
    <FrameWrapper>
      <ReplaceitExercise />
      <Fixit />
      <Fillitin />
    </FrameWrapper>
  )
}

export default Exercises