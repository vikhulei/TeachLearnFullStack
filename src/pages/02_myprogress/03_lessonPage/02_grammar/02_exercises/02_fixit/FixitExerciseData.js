
const sentences = [
    // LESSON 1
    { beginning: "", bold: "do - [dou]?", correct: "ду [du:]", ending: "" },
    { beginning: "", bold: "some - [soum]?", correct: "сам [sʌm]", ending: "" },
    { beginning: "", bold: "people - ?", correct: "піпл [pi:pl]", ending: "" },
    { beginning: "", bold: "see - [si:]?", correct: "сі [si:]", ending: "" },
    { beginning: "", bold: "most - [most]?", correct: "моуст [moust]", ending: "" },
    { beginning: "", bold: "what - [whæt]?", correct: "увот [wot]", ending: "" },
    { beginning: "", bold: "through - ?", correct: "тсру [θru:]", ending: "" },
    { beginning: "", bold: "also - [ælsou]?", correct: "олсоу [olsou]", ending: "" },

    //LESSON 2

    { beginning: "I", bold: "to be (зараз)", correct: "am", ending: "a student " },
    { beginning: "You", bold: "to be (в минулому)", correct: "were", ending: "a worker" },
    { beginning: "He", bold: "to be (завтра)", correct: "will be", ending: "at school" },
    { beginning: "She", bold: "to be (зараз)", correct: "is", ending: "happy" },
    { beginning: "We", bold: "to be (вчора)", correct: "were", ending: "at home" },
    { beginning: "Students", bold: "to be not (зараз)", correct: "are not", ending: "in the class" },
    { beginning: "The boy", bold: "to be not (завтра)", correct: "will not be", ending: "at work" },
    { beginning: "We", bold: "to be (зараз)", correct: "are", ending: "friends" },

    //LESSON 3
    { beginning: "I", bold: "find", correct: "find", ending: "this book interesting" },
    { beginning: "She", bold: "eat", correct: "eats", ending: "too much sugar" },
    { beginning: "It", bold: "take", correct: "takes", ending: "a lot of time" },
    { beginning: "I", bold: "want", correct: "want", ending: "a new phone" },
    { beginning: "This message", bold: "sound", correct: "sounds", ending: "very important" },
    { beginning: "My family", bold: "live", correct: "lives", ending: "in the city" },
    { beginning: "He", bold: "give", correct: "gives", ending: "a good example" },
    { beginning: "I", bold: "listen", correct: "listen", ending: "to the music" },
    //LESSON 4
    { beginning: "You", bold: "make", correct: "will make", ending: "the right decision" },
    { beginning: "She", bold: "support", correct: "will support", ending: "you" },
    { beginning: "They", bold: "install", correct: "will install", ending: "a new system" },
    { beginning: "We", bold: "talk", correct: "will talk", ending: "after the meeting" },
    { beginning: "He", bold: "buy", correct: "will buy", ending: "a new computer" },
    { beginning: "I", bold: "do", correct: "will do", ending: "my best to help you" },
    { beginning: "Your life", bold: "change", correct: "will change", ending: "for the better" },
    { beginning: "Since you are here, we", bold: "start", correct: "will start", ending: "the new project" },


]

export const FixitExerciseData = sentences.map((value, index) => (
    {
        id: index + 1,
        lesson: Math.floor(index / 8) + 1,
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
