export const FillitinExerciseData = [
    {id: 1, lesson: 1, sentence: "Я люблю Україну", translat: "I love Ukraine", visibility: "hidden", input: ""},
    {id: 2, lesson: 1, sentence: "Сьогодні гарна погода", translat: "The weather is great today", visibility: "hidden", input: ""},
    {id: 3, lesson: 1, sentence: "Ви дивилися цей фільм?", translat: "Have you watched that movie?", visibility: "hidden", input: ""},
    {id: 4, lesson: 1, sentence: "В понеділок вихідний", translat: "Monday is a holiday", visibility: "hidden", input: ""},
]

const sentences = [
    {id: 1, lesson: 1, sentence: "Я люблю Україну", translat: "I love Ukraine", visibility: "hidden", input: ""},
    {id: 2, lesson: 1, sentence: "Сьогодні гарна погода", translat: "The weather is great today", visibility: "hidden", input: ""},
    {id: 3, lesson: 1, sentence: "Ви дивилися цей фільм?", translat: "Have you watched that movie?", visibility: "hidden", input: ""},
    {id: 4, lesson: 1, sentence: "В понеділок вихідний", translat: "Monday is a holiday", visibility: "hidden", input: ""},
]

const FillitinExercise = sentences.map((value, index) => (
    {
        id: index+1,
        lesson: Math.floor(index/10) + 1,
        visibility: "hidden",
        input: "",
        sentence: {
            sentence: value.sentence,
            translat: value.translat,
        }
    }
))