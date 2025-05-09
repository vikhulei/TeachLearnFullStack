const sentences = [
    // LESSON 1
    {sentence: "M-A-K-E", translat: ""},
    {sentence: "W-O-R-K", translat: ""},
    {sentence: "G-O-O-D", translat: ""},
    {sentence: "U-S-E-D", translat: ""},
    {sentence: "O-N-L-Y", translat: ""},
    {sentence: "L-I-K-E", translat: ""},
    {sentence: "U-S-E-D", translat: ""},
    {sentence: "W-A-T-E-R", translat: ""},
    {sentence: "T-I-M-E", translat: ""},
    {sentence: "your name", translat: ""},

    // LESSON 2

    {sentence: "Як тебе звати?", translat: "What is your name?"},
    {sentence: "Ти не американець", translat: "You are not American"},
    {sentence: "Вони були в місті?", translat: "Were they in the city?"},
    {sentence: "Він з України?", translat: "Is he from Ukraine"},
    {sentence: "Ці люди не дуже дружні", translat: "These people are not very friendly"},
    {sentence: "Твоя робота важка?", translat: "Is your work hard?"},
    {sentence: "Фільм нецікавий", translat: "Film is not interesting"},
    {sentence: "Те місце гарне?", translat: "Is that place nice?"},
    {sentence: "Сім'я важлива?", translat: "Is family important?"},
    {sentence: "Цей бізнес нелегкий", translat: "This business is not easy"},

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