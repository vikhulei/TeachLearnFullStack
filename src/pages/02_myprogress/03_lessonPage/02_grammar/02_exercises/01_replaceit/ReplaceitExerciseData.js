const sentences = [
    //lesson 1
    {beginning: "", word: "Я", translat: "I", ending: "love Ukraine"},
    {beginning: "", word: "Вони", translat: "They", ending: "love Kyiv"},
    {beginning: "Today", word: "він", translat: "he", ending: "loves USA"},
    {beginning: "", word: "Я", translat: "I", ending: "love Ukraine"},
    {beginning: "", word: "Вони", translat: "They", ending: "love Kyiv"},
    {beginning: "Today", word: "він", translat: "he", ending: "loves USA"},
    {beginning: "", word: "Я", translat: "I", ending: "love Ukraine"},
    {beginning: "", word: "Вони", translat: "They", ending: "love Kyiv"},
    {beginning: "Today", word: "він", translat: "he", ending: "loves USA"},
    {beginning: "Today", word: "він", translat: "he", ending: "loves USA"},

    //lesson 2
]


export const ReplaceitExerciseData = sentences.map((value, index) => (
    {
        id: index+1,
        lesson: Math.floor(index/10) + 1,
        display_word: "block",
        display_translat: "none",
        sentence: {
            beginning: value.beginning,
            word: value.word,
            translat: value.translat,
            ending: value.ending
        }
    }
))

// export const ReplaceitExerciseData = [
//     {id: 1, lesson: 1, beginning: "", word: "Я", translat: "I", display_word: "block", display_translat: "none", ending: "love Ukraine"},
//     {id: 2, lesson: 1, beginning: "", word: "Вони", translat: "They", display_word: "block", display_translat: "none", ending: "love Kyiv"},
//     {id: 3, lesson: 1, beginning: "Today", word: "він", translat: "he", display_word: "block", display_translat: "none", ending: "loves USA"},
//     {id: 4, lesson: 1, beginning: "", word: "Я", translat: "I", display_word: "block", display_translat: "none", ending: "love Ukraine"},
//     {id: 5, lesson: 1, beginning: "", word: "Вони", translat: "They", display_word: "block", display_translat: "none", ending: "love Kyiv"},
//     {id: 6, lesson: 1, beginning: "Today", word: "він", translat: "he", display_word: "block", display_translat: "none", ending: "loves USA"},
//     {id: 7, lesson: 1, beginning: "", word: "Я", translat: "I", display_word: "block", display_translat: "none", ending: "love Ukraine"},
//     {id: 8, lesson: 1, beginning: "", word: "Вони", translat: "They", display_word: "block", display_translat: "none", ending: "love Kyiv"},
//     {id: 9, lesson: 1, beginning: "Today", word: "він", translat: "he", display_word: "block", display_translat: "none", ending: "loves USA"},
//     {id: 10, lesson: 1, beginning: "Today", word: "він", translat: "he", display_word: "block", display_translat: "none", ending: "loves USA"},
//     {id: 11, lesson: 2, beginning: "", word: "Вона", translat: "she", display_word: "block", display_translat: "none", ending: "loves England"},
//     {id: 12, lesson: 2, beginning: "Of course", word: "ми", translat: "we", display_word: "block", display_translat: "none", ending: "love London"},
    
// ]