const sentences = [
    //lesson 1
    {beginning: "", word: "date", translat: "[deit]", ending: ""},
    {beginning: "", word: "man", translat: "[mæn]", ending: ""},
    {beginning: "", word: "home", translat: "[houm]", ending: ""},
    {beginning: "", word: "shop", translat: "[ʃop]", ending: ""},
    {beginning: "", word: "he", translat: "[hі:]", ending: ""},
    {beginning: "", word: "pencil", translat: "[pensl]", ending: ""},
    {beginning: "", word: "student", translat: "[stjudənt]", ending: ""},
    {beginning: "", word: "cup", translat: "[kʌp]", ending: ""},
    {beginning: "", word: "time", translat: "[taim]", ending: ""},
    {beginning: "", word: "cry", translat: "[krai]", ending: ""},

    //lesson 2

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
