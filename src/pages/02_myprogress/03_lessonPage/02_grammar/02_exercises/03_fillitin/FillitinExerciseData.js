const sentences = [
    // LESSON 1
    {sentence: "M-A-K-E", translat: ""},
    {sentence: "W-O-R-K", translat: ""},
    {sentence: "G-O-O-D", translat: ""},
    {sentence: "U-S-E-D", translat: ""},
    {sentence: "O-N-L-Y", translat: ""},
    {sentence: "L-I-K-E", translat: ""},
    {sentence: "U-S-E-D", translat: ""},
    {sentence: "W-A-T-E-R", translat: ""},
    {sentence: "T-I-M-E", translat: ""},
    {sentence: "your name", translat: ""},

    // LESSON 2

    {sentence: "M-A-K-E", translat: ""},
    {sentence: "W-O-R-K", translat: ""},
    {sentence: "G-O-O-D", translat: ""},
    {sentence: "U-S-E-D", translat: ""},
    {sentence: "O-N-L-Y", translat: ""},
    {sentence: "L-I-K-E", translat: ""},
    {sentence: "U-S-E-D", translat: ""},
    {sentence: "W-A-T-E-R", translat: ""},
    {sentence: "T-I-M-E", translat: ""},
    {sentence: "your name", translat: ""},

]

export const FillitinExerciseData = sentences.map((value, index) => (
    {
        id: index+1,
        lesson: Math.floor(index/10) + 1,
        visibility: "hidden",
        input: "",
        sentence: {
            sentence: value.sentence,
            translat: value.translat,
        }
    }
))