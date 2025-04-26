function importAll(r) {
    return r.keys().map(r);
}

const text = [
    //TEXT 1
    'Many <b>people</b> need water every day to live. \n \n<b>Some</b> places don’t have enough, so they must find new ways to get it. \n \nThere are different tools that people can use to clean water. \n \nMost of these tools are good, but some are only used in big cities. \n \nOther tools are also made for small towns. \n \nAll of this work is about helping people stay healthy. \n \nEven kids can learn what to do to get water. \n \nIt took a long time, but things are just starting to improve. \n \nPeople like to see progress, because it gives them hope.',
    //TEXT 2
    'TEXT 2 Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! ',
    //TEXT 3
    'TEXT 3 Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else!',
    //LESSON 1
    'TEXT 1 Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else!',
    //LESSON 2
    'TEXT 2 Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! ',
]

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const rawQuestions = [
    [
        { question: "Who needs water?", answer: "many people" },
        { question: "What do they need to find?", answer: "new ways" },
        { question: "Why people need to use tools?", answer: "to clean water" },
        { question: "Are most of these tools good?", answer: "yes" },
        { question: "What does progress give people?", answer: "hope" },
    ],
    [
        { question: "What is the girl’s1 name?", answer: "BGirl1" },
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

export const ReadingTextData = images.map((image, index) => (
    {
        id: index + 1,
        lesson: index + 1,
        text: text[index],
        image,
        questions: questionsArray[index]
    }
))
