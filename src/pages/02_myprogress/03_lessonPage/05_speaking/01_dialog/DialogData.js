const rawDialogs = [
    //LESSON 1
[
    {question: "What is the boy’s1 name?", q_translate: "Як звати хлопця №1", answer: "Boy1", a_translate: "Хлопець 1"},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    ],
    
    //LESSON 2
    [
    {question: "What is the boy’s2 name?", q_translate: "Як звати хлопця №2", answer: "Boy2", a_translate: "Хлопець 2"},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    {question: "", q_translate: "", answer: "", a_translate: ""},
    ],
    
    
]

const dialogs = rawDialogs.map((value, index) => (
    value.map((val, ind) => (
        {
            id: ind+1,
            question: val.question,
            q_translate: val.q_translate,
            q_visibility: "hidden",
            answer: val.answer,
            a_translate: val.a_translate,
            a_visibility: "hidden"
        }
    ))
))

export const DialogData = dialogs.map((dialog, index) => (
    {
        id: index+1,
        lesson: index+1,
        dialog,
    }
))






// const dialogsOld = [
//     [
//         {id: 1, question: "What is the boy’s1 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Boy1", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 2, question: "What is the boy’s2 name?",
//         q_translate: "Як звати хлопця №2?", q_visibility: "hidden", answer: "Boy2", a_translate: "Хлопець 2", a_visibility: "hidden"},
//         {id: 3, question: "What is the boy’s3 name?",
//         q_translate: "Як звати хлопця №3?", q_visibility: "hidden", answer: "Boy3", a_translate: "Хлопець 3", a_visibility: "hidden"},
//         {id: 4, question: "What is the boy’s4 name?",
//         q_translate: "Як звати хлопця №4?", q_visibility: "hidden", answer: "Boy4", a_translate: "Хлопець 4", a_visibility: "hidden"},
//         {id: 5, question: "What is the boy’s5 name?",
//         q_translate: "Як звати хлопця №5?", q_visibility: "hidden", answer: "Boy5", a_translate: "Хлопець 5", a_visibility: "hidden"},
//         {id: 6, question: "What is the boy’s6 name?",
//         q_translate: "Як звати хлопця №6?", q_visibility: "hidden", answer: "Boy6", a_translate: "Хлопець 6", a_visibility: "hidden"},
//         {id: 7, question: "What is the boy’s7 name?",
//         q_translate: "Як звати хлопця №7?", q_visibility: "hidden", answer: "Boy7", a_translate: "Хлопець 7", a_visibility: "hidden"},
//         {id: 8, question: "What is the boy’s8 name?",
//         q_translate: "Як звати хлопця №8?", q_visibility: "hidden", answer: "Boy8", a_translate: "Хлопець 8", a_visibility: "hidden"},
//     ],
//     [
//         {id: 1, question: "What is the girl’s1 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl1", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 2, question: "What is the girl’s2 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl2", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 3, question: "What is the girl’s3 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl3", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 4, question: "What is the girl’s4 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl4", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 5, question: "What is the girl’s5 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl5", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 6, question: "What is the girl’s6 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl6", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 7, question: "What is the girl’s7 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl7", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 8, question: "What is the girl’s8 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "BGirl8", a_translate: "Хлопець 1", a_visibility: "hidden"},
//     ],
//     [
//         {id: 1, question: "What is the man’s1 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human1", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 2, question: "What is the man’s2 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human2", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 3, question: "What is the man’s3 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human3", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 4, question: "Which  symbol was on the map?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human4", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 5, question: "What is the man’s5 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human5", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 6, question: "What is the man’s6 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human6", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 7, question: "What is the man’s7 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human7", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 8, question: "What is the man’s8 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human8", a_translate: "Хлопець 1", a_visibility: "hidden"},
//     ],
//     [
//         {id: 1, question: "What is the man’s1 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human1", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 2, question: "What is the man’s2 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human2", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 3, question: "What is the man’s3 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human3", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 4, question: "Which  symbol was on the map?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human4", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 5, question: "What is the man’s5 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human5", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 6, question: "What is the man’s6 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human6", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 7, question: "What is the man’s7 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human7", a_translate: "Хлопець 1", a_visibility: "hidden"},
//         {id: 8, question: "What is the man’s8 name?",
//         q_translate: "Як звати хлопця №1?", q_visibility: "hidden", answer: "Human8", a_translate: "Хлопець 1", a_visibility: "hidden"},
//     ],

// ]