function importAll(r) {
    return r.keys().map(r);
}

const text = [
    'Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else!',
    'Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else!',
    'Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else!',
]

const images = importAll(
    require.context("./", false, /\.jpg$/)
);

const questions = [

    [
        {question: "What is the boy’s1 name?",
        input: "", visibility: "hidden", answer: "Boy1"},
        {question: "What is the boy’s2 name?",
        input: "", visibility: "hidden", answer: "Boy2"},
        {question: "What is the boy’s3 name?",
        input: "", visibility: "hidden", answer: "Boy3"},
        {question: "What is the boy’s4 name?",
        input: "", visibility: "hidden", answer: "Boy4"},
        {question: "What is the boy’s5 name?",
        input: "", visibility: "hidden", answer: "Boy5"},
    ],
    [
        {question: "What is the girl’s1 name?",
        input: "", visibility: "hidden", answer: "BGirl1"},
        {question: "What is the girl’s2 name?",
        input: "", visibility: "hidden", answer: "BGirl2"},
        {question: "What is the girl’s3 name?",
        input: "", visibility: "hidden", answer: "BGirl3"},
        {question: "What is the girl’s4 name?",
        input: "", visibility: "hidden", answer: "BGirl4"},
        {question: "What is the girl’s5 name?",
        input: "", visibility: "hidden", answer: "BGirl5"},
    ],
    [
        {question: "What is the man’s1 name?",
        input: "", visibility: "hidden", answer: "Human1"},
        {question: "What is the man’s2 name?",
        input: "", visibility: "hidden", answer: "Human2"},
        {question: "What is the man’s3 name?",
        input: "", visibility: "hidden", answer: "Human3"},
        {question: "What is the man’s4 name?",
        input: "", visibility: "hidden", answer: "Human4"},
        {question: "What is the man’s5 name?",
        input: "", visibility: "hidden", answer: "Human5"},
    ],

]

export const ReadingText = images.map((image, index) => (
    {
        id: index+1,
        lesson: index+1,
        text: text[index],
        image,
        questions: questions[index]
    }
))
