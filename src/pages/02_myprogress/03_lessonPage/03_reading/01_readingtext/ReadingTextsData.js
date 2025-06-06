function importAll(r) {
    return r.keys().map(r);
}

const text = [
    //TEXT 1

    '1. <b>What</b> are you doing?\n2. She <b>also</b> likes to paint.\n3. <b>People</b> are walking in the park.\n4. I don’t have much <b>time</b> today.\n5. He stayed home <b>because</b> he was sick.\n6. We can <b>make</b> a cake together.\n7. They <b>work</b> hard every day.\n8. This book is very <b>different</b> from the last one.\n9. I bought a <b>new</b> jacket yesterday.\n10. We drank cold <b>water</b> after the run.',
    //TEXT 2
    `I like <b>history</b>. People <b>often</b> talk about it. <b>Then</b>, people did not have maps. They <b>would</b> travel and try to find new places. They wanted to find gold and make <b>money</b>. The <b>world</b> was big to them. \n \nWe <b>know</b> many things now. <b>Well</b>, some things are still a mystery. Now, we have a <b>map</b> of the whole world. It is easy to <b>find</b> places today.`,
    //TEXT 3
    `A SIMPLE DAY\n \nA few birds sang. I think they were happy. The sky was free of clouds. It was warm too. After breakfast, I used my computer. It was the best part of the day. Life felt calm and slow. I smiled all morning. The day was quiet. It was a good day.`,
    //LESSON 4
    `1. The best part was over. \n2. She walked across the field. \n3. Help was not available right away. \n4. He sat down to wait. \n5. A local man passed by. \n6. They felt strange. \n7. In general, things were quiet. \n8. The process took time. \n9. The heat was rising fast. \n10 They had enough for now.`,

    //LESSON 5
    `<b>A QUIET MORNING</b>
She woke up early. Her job didn’t start for hours. At home, she liked to read with music playing. The food was simple but warm. She never skipped breakfast. It was really peaceful. She wasn\’t certain what the day would be like. But she hoped it would include something kind. To her, that was enough. She smiled and felt ready.`,

    //LESSON 6
    '<b>TWO IN LOVE</b> \nThey walked to the market together. A bird sang from a nearby tree. Sometimes, small things bring joy. He tried to create a simple life. She was his quiet guide. They would say little, but understand much. Change didn\’t scare them anymore. Their interest was in each day, not just the future. They stayed close, even in silence. And that was enough. ',
    //LESSON 7
    '<b>A DAY OF LEARNING</b> \n It is possible to learn something new every day. Gail visited the library to read about various topics. One card gave her access to all the books. Some ideas were difficult to understand. But she liked to consider different views. The beauty of nature always inspired her. In fact, she often wrote poems about it. She found a product that helped her study better. She met a small group of students every week. Together, they shared thoughts and helped each other grow.',
    //LESSON 8
    '<b>THE WAY FORWARD</b> \nToday, Kelly focused on her training. It made sense to practice every day. She stayed in school until late. The current lesson was difficult, but she kept trying. A small amount of progress felt big to her. Simply showing up was part of the work. National tests were coming soon. Until then, she would keep learning. Her training gave her purpose. And slowly, it all began to make sense.',
    //LESSON 9
    '<b>THE DIGITAL MOVE</b>\nThe web is a useful tool today. Many people develop new ideas online. Every page tells a story. The media industry grows fast. Activity on the internet never stops. One thing is clear: we must move forward. To use technology well is important. It helps us connect and learn. The digital world is always changing. We all take part in this new story.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',

]

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const rawQuestions = [
    //lesson 1
    [
        { question: "2 - Що їй подобається робити?", answer: "paint" },
        { question: "4 - Чого у мене немає сьогодні?", answer: "time" },
        { question: "5 - Де він залишився?", answer: "home" },
        { question: "6 - Що ми можемо зробити разом?", answer: "cake" },
        { question: "9 - Що нове я купив вчора?", answer: "jacket" },
    ],
    //lesson 2
    [
        { question: "Що мені подобається?", answer: "history" },
        { question: "Чого у людей не було колись?", answer: "maps" },
        { question: "Яким був світ для людей?", answer: "big" },
        { question: "Яка карта у людей є зараз (2 слова)?", answer: "whole world" },
        { question: "Як зараз людям знаходити різні місця?", answer: "easy" },
    ],
    //lesson 3
    [
        { question: "Що робили пташки?", answer: "sang" },
        { question: "Чого не було на небі?", answer: "clouds" },
        { question: "Після чого я працювала на комп'ютері?", answer: "breakfast" },
        { question: "Що я робила весь ранок?", answer: "smiled" },
        { question: "Яким був день?", answer: "quiet" },
    ],
    //lesson 4
    [
        { question: "2 - Через що вона йшла?", answer: "field" },
        { question: "4 - Для чого він сів?", answer: "wait" },
        { question: "6 - Як вони себе почували?", answer: "strange" },
        { question: "8 - Що забирало час?", answer: "process" },
        { question: "9 - Що швидко піднімалося?", answer: "heat" },
    ],
    //lesson 5
    [
        { question: "Коли вона прокинулася?", answer: "early" },
        { question: "Що їй подобалося робити вдома?", answer: "read" },
        { question: "Їжа була простою і якою ще?", answer: "warm" },
        { question: "Що вона ніколи не пропускала?", answer: "breakfast" },
        { question: "Якою вона почувалася (останнє речення)?", answer: "ready" },
    ],
    //lesson 6
    [
        { question: "Куди вони пішли разом?", answer: "market" },
        { question: "На чому сиділа пташка?", answer: "tree" },
        { question: "Яким гідом вона була для нього?", answer: "quiet" },
        { question: "Як вони розуміли один одного?", answer: "much" },
        { question: "Вони були близькими навіть у чому?", answer: "silence" },
    ],
    //lesson 7
    [
        { question: "Що відвідувала Гейл?", answer: "library" },
        { question: "Що давало їй доступ до всіх книг?", answer: "card" },
        { question: "Краса чого її надихала?", answer: "nature" },
        { question: "Що допомагало їй вчитися краще?", answer: "product" },
        { question: "Як часто вона зустрічалася зі студентами (два слова)?", answer: "every week" },
    ],
    //lesson 8
    [
        { question: "На чому зосередилася Келлі сьогодні?", answer: "training" },
        { question: "Що потрібно було робити кожного дня?", answer: "practice" },
        { question: "Яким був поточний урок?", answer: "difficult" },
        { question: "Коли мав відбутися національний екзамен?", answer: "soon" },
        { question: "Що їй давало навчання?", answer: "purpose" },
    ],
    //lesson 9
    [
        { question: "Де люди розробляють нові ідеї?", answer: "online" },
        { question: "Коли зупиняється активність в інтернеті?", answer: "never" },
        { question: "Куди потрібно рухатися?", answer: "forward" },
        { question: "Що допомагає нам робити використання технологій (два слова)?", answer: "connect learn" },
        { question: "Що постійно робить цифровий світ?", answer: "changing" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
    ],
    //lesson 10
    [
        { question: "Що має мати значення в будь-якій спільноті?", answer: "safety" },
        { question: "Від чого залежить якість життя (два слова)?", answer: "kind actions" },
        { question: "Як ми повинні працювати для розвитку?", answer: "together" },
        { question: "Якою є головна ціль?", answer: "clear" },
        { question: "Як повинні себе почувати всі люди (два слова)?", answer: "safe valued" },
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

export const ReadingTextData = images.map((image, index) => (
    {
        id: index + 1,
        lesson: index + 1,
        text: text[index],
        image,
        questions: questionsArray[index]
    }
))
