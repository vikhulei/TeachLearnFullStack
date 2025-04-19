function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const audios = importAll(
    require.context("./02_audio", false, /\.mp3$/)
);

const rawQuestions = [
    //LESSON 1
    //first question
    [
        { question: "quest1", answer: "answer11" },
        { question: "quest12", answer: "answer12" },
        { question: "quest13", answer: "answer13" },
        { question: "quest14", answer: "answer14" },
        { question: "quest15", answer: "answer15" },
    ],
    //second question
    [
        { question: "quest21", answer: "answer21" },
        { question: "quest22", answer: "answer22" },
        { question: "quest23", answer: "answer23" },
        { question: "quest24", answer: "answer24" },
        { question: "quest25", answer: "answer25" },
    ],

    //LESSON 2
    //first question
    [
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
    ],
    //second question
    [
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
        { question: "", answer: "" },
    ],

    [
        { question: "Quest #1", answer: "Я" },
        { question: "beginning text", answer: "word text2" },
        { question: "beginning text", answer: "word text3" },
        { question: "beginning text", answer: "word text4" },
        { question: "beginning text", answer: "word text5" },
    ],
    [
        { question: "Quest #2", answer: "BGirl1" },
        { question: "What is the girl’s2 name?", answer: "BGirl2" },
        { question: "What is the girl’s3 name?", answer: "BGirl3" },
        { question: "What is the girl’s4 name?", answer: "BGirl4" },
        { question: "What is the girl’s5 name?", answer: "BGirl5" },
    ],
    [
        { question: "What is the man’s1 name?", answer: "Human1" },
        { question: "What is the man’s2 name?", answer: "Human2" },
        { question: "What is the man’s3 name?", answer: "Human3" },
        { question: "Which  symbol was on the map?", answer: "Human4" },
        { question: "What is the man’s5 name?", answer: "Human5" },
    ],
]

const questionsArray = rawQuestions.map((value, index) => (
    value.map((val, ind) => (
        {
            id: ind + 1,
            question: val.question,
            input: "",
            visibility: "hidden",
            answer: val.answer,
        }
    ))
))

export const ListeningData = images.map((image, index) => (
    {
        index,
        id: index + 1,
        lesson: Math.floor(index / 2) + 1,
        image,
        audio: audios[index],
        questions: questionsArray[index],
    }
))
