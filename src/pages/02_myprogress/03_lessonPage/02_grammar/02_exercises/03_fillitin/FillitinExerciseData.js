const sentences = [
    // LESSON 1
    { sentence: "M-A-K-E", translat: "" },
    { sentence: "W-O-R-K", translat: "" },
    { sentence: "G-O-O-D", translat: "" },
    { sentence: "U-S-E-D", translat: "" },
    { sentence: "O-N-L-Y", translat: "" },
    { sentence: "L-I-K-E", translat: "" },
    { sentence: "U-S-E-D", translat: "" },
    { sentence: "W-A-T-E-R", translat: "" },
    { sentence: "T-I-M-E", translat: "" },
    { sentence: "your name", translat: "" },

    // LESSON 2

    { sentence: "Як тебе звати?", translat: "What is your name?" },
    { sentence: "Ти не американець", translat: "You are not American" },
    { sentence: "Вони були в місті (city)?", translat: "Were they in city?" },
    { sentence: "Він з України?", translat: "Is he from Ukraine?" },
    { sentence: "Ці люди не дружні", translat: "These people are not friendly" },
    { sentence: "Твоя робота важка?", translat: "Is your work hard?" },
    { sentence: "Фільм нецікавий", translat: "Film is not interesting" },
    { sentence: "Це гарне місце (nice)?", translat: "Is this place nice?" },
    { sentence: "Сім'я важлива?", translat: "Is family important?" },
    { sentence: "Цей бізнес нелегкий", translat: "This business is not easy" },
    // LESSON 3
    { sentence: "Він завжди миє свої руки", translat: "He always washes his hands" },
    { sentence: "Вони допомагають своїм друзям", translat: "They help their friends" },
    { sentence: "Я ходжу в зал по понеділкам", translat: "I go to the gym on Mondays" },
    { sentence: "Вона працює в магазині", translat: "She works in the store" },
    { sentence: "Її син любить гратися", translat: "Her son loves to play" },
    { sentence: "Мій батько бігає вранці", translat: "My father runs in the mornings" },
    { sentence: "У цьому місці подають гарну каву", translat: "This place serves good coffee" },
    { sentence: "Мені потрібна інша ручка", translat: "I need another pen" },
    { sentence: "Ви мусите подумати про здоров'я", translat: "You must think about your health" },
    { sentence: "Ми їздимо на тому ж автобусі", translat: "We take the same bus" },
    // LESSON 4
    { sentence: "Ми зараз почнемо збори", translat: "We will start the meeting now" },
    { sentence: "Вона подвонить тобі на перерві", translat: "She will call you during the break" },
    { sentence: "Ти багато вивчиш у цьому курсі", translat: "You will learn a lot in this course" },
    { sentence: "Вони прибудуть біля 6 вечора", translat: "They will arrive around 6p.m." },
    { sentence: "Джон залишиться на роботі допізна", translat: "John will stay late at work" },
    { sentence: "Він сформує нову команду", translat: "He will form a new team" },
    { sentence: "Я приготую м'со на вечерю", translat: "I will cook meat for dinner" },
    { sentence: "Вона відвідає це місце знову", translat: "She will visit this place again" },
    { sentence: "Повітря буде відчуватися холоднішим", translat: "The air will feel cooler" },
    { sentence: "Ми проведемо день разом", translat: "Wt will spend the day together" },



]

export const FillitinExerciseData = sentences.map((value, index) => (
    {
        id: index + 1,
        lesson: Math.floor(index / 10) + 1,
        visibility: "hidden",
        input: "",
        sentence: {
            sentence: value.sentence,
            translat: value.translat,
        }
    }
))