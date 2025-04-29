function importAll(r) {
    return r.keys().map(r);
}

const text = [
    //TEXT 1
    
    '1. <b>What</b> are you doing?\n2. She <b>also</b> likes to paint.\n3. <b>People</b> are walking in the park.\n4. I don’t have much <b>time</b> today.\n5. He stayed home <b>because</b> he was sick.\n6. We can <b>make</b> a cake together.\n7. They <b>work</b> hard every day.\n8. This book is very <b>different</b> from the last one.\n9. I bought a <b>new</b> jacket yesterday.\n10. We drank cold <b>water</b> after the run.',
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
        { question: "2 - Що їй подобається робити?", answer: "paint" },
        { question: "4 - Чого у мене немає сьогодні?", answer: "time" },
        { question: "5 - Де він залишився?", answer: "home" },
        { question: "6 - Що ми можемо зробити разом?", answer: "cake" },
        { question: "9 - Що нове я купив вчора?", answer: "jacket" },
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
