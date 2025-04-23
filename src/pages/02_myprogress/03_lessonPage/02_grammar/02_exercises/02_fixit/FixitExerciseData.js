
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

    {beginning: "I", bold: "to be ", correct: "am", ending: "a student (зараз)"},
    {beginning: "You", bold: "to be ", correct: "were", ending: "a worker (в минулому)"},
    {beginning: "He", bold: "to be ", correct: "will be", ending: "in school (завтра)"},
    {beginning: "She", bold: "to be ", correct: "is", ending: "happy (сьогодні)"},
    {beginning: "We", bold: "to be ", correct: "were", ending: "at home (вчора)"},
    {beginning: "beginning text", bold: "word text2", correct: "translate text", ending: "ending text"},
    {beginning: "beginning text", bold: "word text3", correct: "translate text", ending: "ending text"},
    {beginning: "beginning text", bold: "word text3", correct: "translate text", ending: "ending text"},
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
