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
        { question: "Як її звати?", answer: "Anna" },
        { question: "Звідки вона приїхала?", answer: "Spain" },
        { question: "Що її подобається робити?", answer: "read" },
        { question: "Скільки їй років?", answer: "25" },
        { question: "Поблизу чого вона живе?", answer: "sea" },
    ],
    //second question
    [
        { question: "Звідки він приїхав?", answer: "Canada" },
        { question: "Як його звати?", answer: "David" },
        { question: "У що йому подобається грати?", answer: "soccer" },
        { question: "З ким він живе?", answer: "family" },
        { question: "Що йому подобається дивитися?", answer: "movies" },
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
