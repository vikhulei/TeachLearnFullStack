
const sentences = [
    // LESSON 1
    {beginning: "", bold: "do - [dou]?", correct: "ду [du:]", ending: ""},
    {beginning: "", bold: "some - [soum]?", correct: "сам [sʌm]", ending: ""},
    {beginning: "", bold: "people - ?", correct: "піпл [pi:pl]", ending: ""},
    {beginning: "", bold: "see - [si:]?", correct: "сі [si:]", ending: ""},
    {beginning: "", bold: "most - [most]?", correct: "моуст [moust]", ending: ""},
    {beginning: "", bold: "what - [whæt]?", correct: "увот [wot]", ending: ""},
    {beginning: "", bold: "through - ?", correct: "тсру [θru:]", ending: ""},
    {beginning: "", bold: "also - [ælsou]?", correct: "олсоу [olsou]", ending: ""},

    //LESSON 2

    {beginning: "I", bold: "to be (зараз)", correct: "am", ending: "a student "},
    {beginning: "You", bold: "to be (в минулому)", correct: "were", ending: "a worker"},
    {beginning: "He", bold: "to be (завтра)", correct: "will be", ending: "at school"},
    {beginning: "She", bold: "to be (зараз)", correct: "is", ending: "happy"},
    {beginning: "We", bold: "to be (вчора)", correct: "were", ending: "at home"},
    {beginning: "Students", bold: "to be not (зараз)", correct: "are not", ending: "in the class"},
    {beginning: "The boy", bold: "to be not (завтра)", correct: "will not be", ending: "at work"},
    {beginning: "We", bold: "to be (зараз)", correct: "are", ending: "friends"},
]

export const FixitExerciseData = sentences.map((value, index) => (
    {
        id: index+1,
        lesson: Math.floor(index/8) + 1,
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
