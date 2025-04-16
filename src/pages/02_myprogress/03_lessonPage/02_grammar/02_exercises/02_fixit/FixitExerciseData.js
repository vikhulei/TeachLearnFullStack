// export const FixitExerciseData = [
//     {id: 1, lesson: 1, beginning: "I", bold: "to be ", correct: "am", visibility: "hidden", ending: "a student (зараз)", input: ""},
//     {id: 2, lesson: 1, beginning: "You", bold: "to be ", correct: "were", visibility: "hidden", ending: "a worker (в минулому)", input: ""},
//     {id: 3, lesson: 1, beginning: "He", bold: "to be ", correct: "will be", visibility: "hidden", ending: "in school (завтра)", input: ""},
//     {id: 4, lesson: 2, beginning: "She", bold: "to be ", correct: "is", visibility: "hidden", ending: "happy (сьогодні)", input: ""},
//     {id: 5, lesson: 2, beginning: "We", bold: "to be ", correct: "were", visibility: "hidden", ending: "at home (вчора)", input: ""},
// ]

export const sentences = [
    {beginning: "I", bold: "to be ", correct: "am", ending: "a student (зараз)"},
    {beginning: "You", bold: "to be ", correct: "were", ending: "a worker (в минулому)"},
    {beginning: "He", bold: "to be ", correct: "will be", ending: "in school (завтра)"},
    {beginning: "She", bold: "to be ", correct: "is", ending: "happy (сьогодні)"},
    {beginning: "We", bold: "to be ", correct: "were", ending: "at home (вчора)"},
    {beginning: "beginning text", bold: "word text2", correct: "translate text", ending: "ending text"},
    {beginning: "beginning text", bold: "word text3", correct: "translate text", ending: "ending text"},

]

export const FixitExerciseData = sentences.map((value, index) => (
    {
        id: index+1,
        lesson: Math.floor(index/10) + 1,
        visibility: "hidden",
        input: "",
        sentence: {
            beginning: value.beginning,
            bold: value.bold,
            correct: value.correct,
            ending: value.ending
        }
    }
))
