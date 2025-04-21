import { TwoThousandActualWords } from "./TwoThousandActualWords"

export const TwoThousand = TwoThousandActualWords.map((value, index) => ({
    id: index + 1,
    word: value.word,
    translat: value.translat,
    display_translat: "none",
    display_word: "block",
    tobeChecked: false,
    correctTutor: false,
    correctStudent: false,
    input: "",
}))
