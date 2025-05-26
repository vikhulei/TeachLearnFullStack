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
    //LESSON 3
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

    //LESSON 4
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

    //LESSON 5
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

    //LESSON 6
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

    //LESSON 7
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

    //LESSON 8
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

    //LESSON 9
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

    //LESSON 10
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
