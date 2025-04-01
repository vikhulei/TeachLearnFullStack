function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./images", false, /\.jpg$/)
);

const questions = [

    [
        {id: 1, question: "What is the boy’s1 name?",
        input: "", visibility: "hidden", answer: "Boy1"},
        {id: 2, question: "What is the boy’s2 name?",
        input: "", visibility: "hidden", answer: "Boy2"},
        {id: 3, question: "What is the boy’s3 name?",
        input: "", visibility: "hidden", answer: "Boy3"},
        {id: 4, question: "What is the boy’s4 name?",
        input: "", visibility: "hidden", answer: "Boy4"},
        {id: 5, question: "What is the boy’s5 name?",
        input: "", visibility: "hidden", answer: "Boy5"},
    ],
    [
        {id: 1, question: "What is the girl’s1 name?",
        input: "", visibility: "hidden", answer: "BGirl1"},
        {id: 2, question: "What is the girl’s2 name?",
        input: "", visibility: "hidden", answer: "BGirl2"},
        {id: 3, question: "What is the girl’s3 name?",
        input: "", visibility: "hidden", answer: "BGirl3"},
        {id: 4, question: "What is the girl’s4 name?",
        input: "", visibility: "hidden", answer: "BGirl4"},
        {id: 5, question: "What is the girl’s5 name?",
        input: "", visibility: "hidden", answer: "BGirl5"},
    ],
    [
        {id: 1, question: "What is the man’s1 name?",
        input: "", visibility: "hidden", answer: "Human1"},
        {id: 2, question: "What is the man’s2 name?",
        input: "", visibility: "hidden", answer: "Human2"},
        {id: 3, question: "What is the man’s3 name?",
        input: "", visibility: "hidden", answer: "Human3"},
        {id: 4, question: "Which  symbol was on the map?",
        input: "", visibility: "hidden", answer: "Human4"},
        {id: 5, question: "What is the man’s5 name?",
        input: "", visibility: "hidden", answer: "Human5"},
    ],

]

export const ListeningData = images.map((image, index) => (
    {
        index,
        id: index+1,
        lesson: Math.floor(index / 2) + 1,
        image,
        questions: questions[index],
    }
))
