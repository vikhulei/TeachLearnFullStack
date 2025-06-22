import { TwoThousandActualWords } from "./TwoThousandActualWords"

export const TwoThousand = TwoThousandActualWords.map((value, index) => ({
    id: index + 1,
    word: value.word,
    word_context: value.word_context,
    translat: value.translat,
    translat_context: value.translat_context,
    display_translat: "none",
    display_word: "block",
    tobeChecked: false,
    correctTutor: false,
    correctStudent: false,
    input: "",
}))
