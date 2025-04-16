const sentences = [
    {sentence: "Я люблю Україну", translat: "I love Ukraine"},
    {sentence: "Сьогодні гарна погода", translat: "The weather is great today"},
    {sentence: "Ви дивилися цей фільм?", translat: "Have you watched that movie?"},
    {sentence: "В понеділок вихідний", translat: "Monday is a holiday"},
]

export const FillitinExerciseData = sentences.map((value, index) => (
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