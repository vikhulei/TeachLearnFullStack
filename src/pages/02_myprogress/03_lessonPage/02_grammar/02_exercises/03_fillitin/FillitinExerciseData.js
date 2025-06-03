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
    { sentence: "Це місце гарне (nice)?", translat: "Is this place nice?" },
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

    // LESSON 5
    { sentence: "Вона говорила меньше перед зустріччю", translat: "She talked less during the meeting" },
    { sentence: "Вони грали у футбол в парку", translat: "They played football in the park" },
    { sentence: "Він закінчив проект вчасно", translat: "He finished the project on time" },
    { sentence: "Ми зібрали інформацію минулого тижня", translat: "We collected information last week" },
    { sentence: "Я надрукував листа", translat: "I typed the letter" },
    { sentence: "Вона вимкнула світло", translat: "She turned off the lights" },
    { sentence: "Він скучив за дружиною дуже сильно", translat: "He missed her wife very much" },
    { sentence: "Вони підготували звіт", translat: "They prepared the report" },
    { sentence: "Я дивився, як він йде геть", translat: "I watched him going away" },
    { sentence: "Ми приготували їжу для всієї сім'ї", translat: "We cooked food for the whole family" },

    // LESSON 6
    { sentence: "Я зустрів свого друга в кафе", translat: "I met my friend at the café" },
    { sentence: "Вона прочитала 3 книги", translat: "She read 3 books" },
    { sentence: "Він поклав ключі на стіл", translat: "He put his keys on the table" },
    { sentence: "Вони пробігли 5 миль вранці", translat: "They ran 5 miles in the morning" },
    { sentence: "Вона продала свій старий велосипед", translat: "She sold her old bicycle" },
    { sentence: "Я відправив емейл вчора ввечері", translat: "I sent the email last night" },
    { sentence: "Діти співали пісню в школі", translat: "The children sang a song at the school " },
    { sentence: "Він зняв фото заходу сонця", translat: "He took a photo of the sunset" },
    { sentence: "Я прокинувся рано сьогодні", translat: "I woke up early today" },
    { sentence: "Вона написала листа бабусі", translat: "She wrote a letter to her grandmother" },

    // LESSON 7
    { sentence: "Ти поставиш будильник?", translat: "Will you set the alarm?" },
    { sentence: "Чи співали пташки вранці?", translat: "Did the birds sing in the morning?" },
    { sentence: "Вона працює гідом?", translat: "Does she work as a guide?" },
    { sentence: "Чи допоможе вчитель студентам?", translat: "Will the teacher help the students?" },
    { sentence: "Чи змініються сезони кожні 4 місяці?", translat: "Do seasons change every 4 months?" },
    { sentence: "Чи цікавить музика багатьох людей?", translat: "Does music interest many people?" },
    { sentence: "Чи вивчав він літературу в університеті?", translat: "Did he study literature at university?" },
    { sentence: "Ви ходите пішки на роботу?", translat: "Do you walk to work?" },
    { sentence: "Ми вирішимо проблему разом?", translat: "Will we solve the problem together?" },
    { sentence: "Чи вітаються вони кожного дня?", translat: "Do they say hello every day?" },

    // LESSON 8
    { sentence: "Вона слухатиме концерт", translat: "She will be listening to the concert" },
    { sentence: "Ми будемо говорити про це завтра", translat: "We will be talking about it tomorrow" },
    { sentence: "Вони перевірятимуть розмір", translat: "They will be checking the size" },
    { sentence: "Я переїжджатиму наступного місяця", translat: "I will be moving next month" },
    { sentence: "Він будуватиме великий будинок", translat: "He will be building a big house" },
    { sentence: "Ми робитимемо все можливе", translat: "We will be doing everything possible" },
    { sentence: "Вони дивитимуться телевізор", translat: "They will be watching TV" },
    { sentence: "Ви вивчатимете це наступного тижня", translat: "You will be learning it next week" },
    { sentence: "Вчитель пояснюватиме нову тему", translat: "The teacher will be explaining the new topic" },
    { sentence: "Пані будуть пити вино", translat: "The ladies will be drinking wine" },


    // LESSON 9
    { sentence: "Чи працює вона допізна цими днями?", translat: "Is she working late these days?" },
    { sentence: "Вони відмічали свято сьогодні?", translat: "Were they celebrating a holday today?" },
    { sentence: "Чи зменьшуватиме компанія відходи?", translat: "Will company be reducing the waste?" },
    { sentence: "Він покращує рівень англійської?", translat: "Is he improving his level of English?" },
    { sentence: "Ви розміщували замовлення?", translat: "Were you placing the order?" },
    { sentence: "Чи практикуватимуться студенти?", translat: "Will the students be practicing?" },
    { sentence: "Чи проводять вчені дослідження?", translat: "Are the scientists conducting research?" },
    { sentence: "Чи було спекотно людям вчора?", translat: "Were people feeling hot yesterday?" },
    { sentence: "Вона користується смсками?", translat: "Is she using text messages?" },
    { sentence: "Чи робитимуть вони 3 проекти?", translat: "Will they be doing 3 projects?" },


    // LESSON 10
    { sentence: "Чи впала темперетура?", translat: "Has the temperature dropped?" },
    { sentence: "Вони об'єдналися з іншою командою?", translat: "Have they united with another team?" },
    { sentence: "Ви чули це слово раніше?", translat: "Have you heard this word before?" },
    { sentence: "Вона додала ваги?", translat: "Has she gained weight?" },
    { sentence: "Чи використовував він силу?", translat: "Has he used force?" },
    { sentence: "Ти загубив ключ від моєї комірки?", translat: "Have you lost the key to my locker?" },
    { sentence: "Чи бачили ми світло?", translat: "Have we seen the light?" },
    { sentence: "Вони проігнорували всі попередження?", translat: "Have they ignored all warnings?" },
    { sentence: "Чи зробив я багато за сьогодні?", translat: "Have I done a lot today?" },
    { sentence: "Вона закінчила навчання (тренінг)?", translat: "Has she completed the training?" },

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