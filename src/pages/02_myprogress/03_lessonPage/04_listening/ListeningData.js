function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const audios = importAll(
    require.context("./02_audio", false, /\.mp3$/)
);

const rawQuestions = [
    //LESSON 1
    //first question
    [
        { question: "Як її звати?", answer: "Anna" },
        { question: "Звідки вона приїхала?", answer: "Spain" },
        { question: "Що її подобається робити?", answer: "read" },
        { question: "Скільки їй років?", answer: "25" },
        { question: "Поблизу чого вона живе?", answer: "sea" },
    ],
    //second question
    [
        { question: "Звідки він приїхав?", answer: "Canada" },
        { question: "Як його звати?", answer: "David" },
        { question: "У що йому подобається грати?", answer: "soccer" },
        { question: "З ким він живе?", answer: "family" },
        { question: "Що йому подобається дивитися?", answer: "movies" },
    ],

    //LESSON 2
    //first question
    [
        { question: "Ким вона працює (два слова)?", answer: "shop assistant" },
        { question: "З чим вона зустрічає клієнтів?", answer: "smile" },
        { question: "Що вона робить для них (дві дії)?", answer: "help answer" },
        { question: "Що в неї може бути після обіду?", answer: "break" },
        { question: "Що вона робить з дверима в кінці дня?", answer: "lock" },
    ],
    //second question
    [
        { question: "Яка в нього професія?", answer: "cleaner" },
        { question: "Що він робить в першу чергу (два слова)?", answer: "sweep mop" },
        { question: "Що він робить з вікнами?", answer: "clean" },
        { question: "Що треба покласти в туалеті, крім серветок?", answer: "soap" },
        { question: "Куди він їде в кінці дня?", answer: "home" },
    ],
    //LESSON 3
    //first question
    [
        { question: "На чому вона їздить вранці?", answer: "bike" },
        { question: "У що вона грає з друзями?", answer: "football" },
        { question: "Що вона малює у вільний час?", answer: "pictures" },
        { question: "Що слухає?", answer: "music" },
        { question: "Що вона дивиться з сім'єю?", answer: "movies" },
    ],
    //second question
    [
        { question: "Як мене звати?", answer: "Chris" },
        { question: "У що я граю з братом?", answer: "basketball" },
        { question: "Кого я вигулюю?", answer: "dog" },
        { question: "Які книги я люблю читати?", answer: "adventure" },
        { question: "Що я печу разом з мамою?", answer: "cookies" },
    ],

    //LESSON 4
    //first question
    [
        { question: "Куди ми їздили минулого літа?", answer: "beach" },
        { question: "Яка була погода (два слова)?", answer: "sunny warm" },
        { question: "Що ми їли щодна?", answer: "ice cream" },
        { question: "Близько біля чого був готель?", answer: "beach" },
        { question: "Скільки ми там пробули (два слова)?", answer: "one week" },
    ],
    //second question
    [
        { question: "Куди я люблю їздити (два слова)?", answer: "new places" },
        { question: "Де я був минулого року?", answer: "mountains" },
        { question: "Що ми робили щоранку?", answer: "hiking" },
        { question: "Яке було повітря (два слова)?", answer: "fresh and clean" },
        { question: "Яку тварину ми бачили?", answer: "deer" },
    ],

    //LESSON 5
    //first question
    [
        { question: "Яка моя улюблена страва?", answer: "pasta" },
        { question: "З чим я допомагаю мамі на вихідних?", answer: "dinner" },
        { question: "Що я нарізаю для неї?", answer: "vegetables" },
        { question: "Запах чого мені подобається?", answer: "food" },
        { question: "Чого більше я хочу вивчити?", answer: "recipes" },
    ],
    //second question
    [
        { question: "Який мій улюблений прийом їжі протягом дня?", answer: "breakfast" },
        { question: "Я їм яйця, тост і що ще?", answer: "fruit" },
        { question: "На обід у мене (два слова)", answer: "sandwich soup" },
        { question: "З ким я вечеряю?", answer: "family" },
        { question: "Що ми їмо у особливі дні?", answer: "dessert" },
    ],

    //LESSON 6
    //first question
    [
        { question: "Скільки у мене братів?", answer: "two" },
        { question: "Куди ми ходимо на вихідні?", answer: "park" },
        { question: "Хто живе поруч з нами?", answer: "grandmother" },
        { question: "У що ми граємо з друзями?", answer: "games" },
        { question: "У який день ми відвідуємо бабусю?", answer: "Sunday" },
    ],
    //second question
    [
        { question: "Як звати мою кращу подругу?", answer: "Sarah" },
        { question: "Як далеко ми живемо одна від одної?", answer: "near" },
        { question: "Ми любимо однакові (два слова)", answer: "music games" },
        { question: "Куди ми ходимо по вихідних?", answer: "mall" },
        { question: "Якими в житті є хороші друзі?", answer: "important" },
    ],

    //LESSON 7
    //first question
    [
        { question: "Скільки днів на тиждень я ходжу до школи?", answer: "five" },
        { question: "Який мій улюблений предмет?", answer: "English" },
        { question: "Що ще мені подобається (два слова)?", answer: "science art" },
        { question: "Що у нас відбувається о 12:30?", answer: "lunch" },
        { question: "Що я роблю вдома?", answer: "homework" },
    ],
    //second question
    [
        { question: "Що є дуже важливим?", answer: "education" },
        { question: "Що воно допомагає отримати (два слова)?", answer: "good jobs" },
        { question: "Який предмет мені дається важко?", answer: "Math" },
        { question: "Що ми використовуємо на деяких уроках?", answer: "computers" },
        { question: "Куди я хочу потрапити одного дня?", answer: "university" },
    ],

    //LESSON 8
    //first question
    [
        { question: "Ким працює мій батько?", answer: "doctor" },
        { question: "Де він працює?", answer: "hospital" },
        { question: "Хто моя мама?", answer: "teacher" },
        { question: "Де вона працює (два слова)?", answer: "primary school" },
        { question: "Ким я хочу бути, коли виросту?", answer: "factories" },
    ],
    //second question
    [
        { question: "Який в мене режим роботи?", answer: "part-time" },
        { question: "Коли я працюю?", answer: "weekends" },
        { question: "З ким мені подобається розмовляти?", answer: "customers" },
        { question: "Який у мене начальник (два слова)?", answer: "friendly fair" },
        { question: "Я хотів би працювати в туристичній компанії або де ще?", answer: "hotel" },
    ],

    //LESSON 9
    //first question
    [
        { question: "Що мені подобається робити з друзями?", answer: "shopping" },
        { question: "Що ми розглядаємо в торговому центрі (два слова)?", answer: "clothes shoes" },
        { question: "Як ще ми купляємо товари?", answer: "online" },
        { question: "Що мені не подобається робити з грошима?", answer: "waste" },
        { question: "Що я завжди перевіряю?", answer: "prices" },
    ],
    //second question
    [
        { question: "Що важливо в повсякденному житті?", answer: "money" },
        { question: "Що потрібно, щоб заробити гроші?", answer: "work" },
        { question: "Що я складаю в скарбничку (два слова)?", answer: "coins notes" },
        { question: "Яким треба бути з грошима?", answer: "careful" },
        { question: "Чого мене навчають батьки (два слова)?", answer: "spend save" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],


]

const questionsArray = rawQuestions.map((value, index) => (
    value.map((val, ind) => (
        {
            id: ind + 1,
            question: val.question,
            input: "",
            visibility: "hidden",
            answer: val.answer,
        }
    ))
))

export const ListeningData = images.map((image, index) => (
    {
        index,
        id: index + 1,
        lesson: Math.floor(index / 2) + 1,
        image,
        audio: audios[index],
        questions: questionsArray[index],
    }
))
