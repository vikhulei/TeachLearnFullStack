function importAll(r) {
    return r.keys().map(r);
}

const text = [
    //TEXT 1
    'TEXT 1 Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else!',
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
        {id: 1, question: "question #1", answer: "Я", input: "", visibility: "hidden"},
        {id: 2, question: "beginning text", answer: "word text2", input: "", visibility: "hidden"},
        {id: 3, question: "beginning text", answer: "word text3", input: "", visibility: "hidden"},
        {id: 4, question: "beginning text", answer: "word text4", input: "", visibility: "hidden"},
        {id: 5, question: "beginning text", answer: "word text5", input: "", visibility: "hidden"},
        
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

const finalQuestions = rawQuestions.map((value, index) => (
        value.map((val, ind) => (
            {
                id: ind+1,
                question: val.question,
                input: "",
                visibility: "hidden",
                answer: val.answer,
            }
        ))
))

const questions = [

    [
        {id: 1, question: "question #1", answer: "Я", input: "", visibility: "hidden"},
        {id: 2, question: "beginning text", answer: "word text2", input: "", visibility: "hidden"},
        {id: 3, question: "beginning text", answer: "word text3", input: "", visibility: "hidden"},
        {id: 4, question: "beginning text", answer: "word text4", input: "", visibility: "hidden"},
        {id: 5, question: "beginning text", answer: "word text5", input: "", visibility: "hidden"},
        
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


export const ReadingTextData = images.map((image, index) => (
    {
        id: index+1,
        lesson: index+1,
        text: text[index],
        image,
        // questions: questions[index],
        questions: finalQuestions[index]
    }
))
