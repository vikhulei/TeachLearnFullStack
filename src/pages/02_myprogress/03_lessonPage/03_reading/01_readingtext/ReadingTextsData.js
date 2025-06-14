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
    "<b>TWO IN LOVE</b> \nThey walked to the market together. A bird sang from a nearby tree. Sometimes, small things bring joy. He tried to create a simple life. She was his quiet guide. They would say little, but understand much. Change didn’t scare them anymore. Their interest was in each day, not just the future. They stayed close, even in silence. And that was enough. ",
    //LESSON 7
    '<b>A DAY OF LEARNING</b> \n It is possible to learn something new every day. Gail visited the library to read about various topics. One card gave her access to all the books. Some ideas were difficult to understand. But she liked to consider different views. The beauty of nature always inspired her. In fact, she often wrote poems about it. She found a product that helped her study better. She met a small group of students every week. Together, they shared thoughts and helped each other grow.',
    //LESSON 8
    '<b>THE WAY FORWARD</b> \nToday, Kelly focused on her training. It made sense to practice every day. She stayed in school until late. The current lesson was difficult, but she kept trying. A small amount of progress felt big to her. Simply showing up was part of the work. National tests were coming soon. Until then, she would keep learning. Her training gave her purpose. And slowly, it all began to make sense.',
    //LESSON 9
    '<b>THE DIGITAL MOVE</b>\nThe web is a useful tool today. Many people develop new ideas online. Every page tells a story. The media industry grows fast. Activity on the internet never stops. One thing is clear: we must move forward. To use technology well is important. It helps us connect and learn. The digital world is always changing. We all take part in this new story.',
    //LESSON 10
    '<b>THE MAIN FOCUS</b> \nIn any community, safety must matter. Every individual plays a part. The quality of life depends on kind actions. Development happens when we work together. That is what helps everyone. Sometimes, everything feels hard to manage. But the main goal is clear: Create a place where everyone feels safe and valued.',
    //LESSON 11
    "<b>A DAY AT THE COAST</b>\nAccording to the weather report, it was going to be a sunny day. The family packed their things and quickly got ready. Following the path to the beach, they smiled at the beautiful view.\nThe sea was calm and bright. The children ran into the water, full of energy and action. They played games and built sandcastles the whole afternoon.\nIt was a perfect day at the coast.",
    //LESSON 12
    "<b>A MOUSE'S NEW HOME</b>\nThe mouse wanted to find a new place to live. It was already tired of the old hole in the wall. One day, it found a dry and quiet corner in the barn. It was easy to get in, and the farmer didn’t block the way, which seemed to allow the mouse to stay. The mouse made a small nest and felt happy. From then on, it had a safe home.",

    //LESSON 13
    "<b>CHANGING WEATHER</b>\nThe weather was colder than usual for this time of year. An old man who lived in the village noticed the low temperature and knew it was time to prepare. He checked his stock of firewood and food. There was not much left, so he decided to purchase more. \nAt the store, the supply of warm clothes was also low. Luckily, he found space in his home to keep everything he bought and stayed warm all season.",

    //LESSON 14
    "<b>THE LITTLE CHICKEN</b>\nA boy got a chicken as a present from his grandparents. He named it Sunny and took care of it every day.\nThe chicken lived in a small, clean coop and had healthy food and water. For every instance when Sunny clucked loudly, the boy would check if it needed something. The truth was, they quickly became best friends.",
    //LESSON 15
    "<b>GOOD NEWS</b>\nAnna got some exciting news. She had been accepted to the university she always dreamed of. Her goal was to become a doctor, and this was the first big step. She couldn't wait to tell her family.\nThe only problem was the cost of travel, so her parents helped her buy a small car. With their support, Anna was ready to begin her new journey.",
    //LESSON 16
    "<b>A SMART PLAN</b>\nLeo wanted to open a small shop in his town. First, he went to the bank to ask for a loan. He knew that the proper way to succeed was to plan carefully. \nWith a combination of hard work and smart choices, his business began to grow. The speed of success surprised even him. Soon, he was making a strong profit and feeling proud of what he had built.",

    //LESSON 17
    "<b>A TRIP TO THE CLINIC</b>\nTom woke up with pain in his eye. His mother said it was best to visit the clinic. The doctor checked him and gave him some medicine. She said it was a standard infection and nothing serious. \nTom was told to rest, take the drops, and not leave the house for a day. With fast treatment, he would reach full health very soon.",
    //LESSON 18
    "<b>SAVING ENERGY</b>\nMila learned at school how important it is to save electrical energy. She noticed that some expensive items at home used a lot of power. One day, something strange began to occur — the lights blinked when too many devices were on.\nMila helped her family reduce their usage. It was a small but significant change for their home and the planet.",
    //LESSON 19
    "<b>NEW PLACE, NEW HABITS</b>\nJulia was moving to a new apartment in the city. The location was perfect — close to her work and a nice park. She wanted to prepare everything before the weekend, so she packed her things early. \nJulia knew that starting fresh meant being ready to build good habits. With discipline and a plan, she felt confident about her new beginning.",
    //LESSON 20
    "<b>THE PAINTING</b>\nLena stood in front of the painting for a long time. Its colors and shape made her feel calm. She had to make a big choice about her future, and somehow, this painting helped. It reminded her to believe in herself. \nFinally, she made a decision and felt at peace.",
    //LESSON 21
    "<b>WINTER SHOPPING</b>\nSophie was out shopping on a cold morning. The streets were covered in ice, so she walked carefully. \nShe was currently looking for a special kind of egg for a recipe. The shop owner told her the final box had just been sold. \nDespite the condition of the weather and her long search, Sophie smiled and decided to try a different store.",
    //LESSON 22
    "<b>THE LITTLE BIRD</b>\nA young bird sat on a high branch, afraid to fly. Its mother watched with concern but did not stop it. She wanted to teach the bird how to be strong. \nFor a while, the bird stayed alone, thinking. Then, it finally opened its wings and took off into the sky, feeling free.",
    //LESSON 23
    "<b>SAFE ON THE ROAD</b>\nLiam was a careful driver who followed the rules. Despite the loud music in the car next to him, he stayed focused. He constantly reminded his best friend to wear a seatbelt. \nLiam believed that small habits could prevent accidents. Being safe was more important to him than speed.",
    //LESSON 24
    "<b>THE SCHOOL DISCUSSION</b>\nDuring their daily class, the students had a debate about rules at school. One student tried to exit the room early without asking. The teacher didn’t expect that and asked him to return immediately. \nShe explained that following rules doesn’t mean you fail, but helps you grow.",
    //LESSON 25
    "<b>THE RIGHT WORDS</b>\nTom used to worry when he had to speak in class. He wanted every answer to be correct, but that pressure made him nervous. \nHis teacher told him to slow down and speak slowly. Over time, his worry began to reduce. He learned that every voice is valuable, even if the answer isn’t perfect.",
    //LESSON 26
    "<b>SMART CHOICES</b>\nEmma primarily visited the local market to find fresh food. One shop was selling something she needed, but it was too expensive. She walked away with a slow step, thinking about her budget. \nA kind seller gave her advice about where to find better prices. Emma smiled and agreed — it’s important to buy only what you can afford.",
    //LESSON 27
    "<b>SAVING IS WISE</b>\nNoah had a strong opinion about spending money. He believed it was smart to build savings before making any big payment. \nHis skill with budgeting helped him remain calm, even during expensive months. He often shared tips with friends to help them do the same.",
    //LESSON 28
    "<b>THE NEW FRIEND</b>\nLila found a small animal near the forest. It was cold and hungry, and she couldn’t forget its sad eyes. She took it home and gave it food, even though she didn’t have much. A cheap blanket and a warm heart were enough. \nThe animal quickly became part of her life.",
    //LESSON 29
    "<b>THE CONTEST ENTRY</b>\nAnna took a photo of the sunset for a school contest. She gave it the title “Evening Light” and wrote a short reference about why the moment was special. \nTo enter, she had to register online and secure her spot before the deadline. She felt proud of her work.",
    //LESSON 30
    "<b>THE STORY IDEA</b>\nMark stood at the edge of the lake, feeling nearly ready to write again. After weeks of depression, his imagination began to return. \nHe wanted to create something meaningful. To obtain peace, he needed to believe in his words and take the first step.",
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
    //lesson 11
    [
        { question: "Якою днем мала бути погода?", answer: "sunny" },
        { question: "Куди пішла родина?", answer: "beach" },
        { question: "Як швидко родина приготувалась?", answer: "quickly" },
        { question: "Що було спокійним і яскравим?", answer: "sea" },
        { question: "Що будували діти?", answer: "sandcastles" }
    ],

    //lesson 12
    [
        { question: "Хто шукав нове місце для життя?", answer: "mouse" },
        { question: "Який куток знайшло мишеня?", answer: "dry" },
        { question: "Було важко чи легко потрапити всередину?", answer: "easy" },
        { question: "Де мишеня хотіло жити?", answer: "barn" },
        { question: "Яку домівку знайшло мишеня?", answer: "safe" },
    ],
    //lesson 13
    [
        { question: "Хто помітив, що погода холодна (два слова)?", answer: "old man" },
        { question: "Яка була температура?", answer: "low" },
        { question: "Чого було мало у нього вдома (два слова)?", answer: "firewood food" },
        { question: "Чого було мало у магазині?", answer: "clothes" },
        { question: "Що знайшов чоловік у своєму домі?", answer: "space" },
    ],
    //lesson 14
    [
        { question: "Що отримав хлопчик в подарунок?", answer: "chicken" },
        { question: "Від кого він його отримав?", answer: "grandparents" },
        { question: "Якою була їжа курчати?", answer: "healthy" },
        { question: "Що робило курча?", answer: "clucked" },
        { question: "Ким вони стали один для одного (два слова)?", answer: "best friends" }
    ],
    //lesson 15
    [
        { question: "Куди вступила Анна?", answer: "university" },
        { question: "Ким вона хотіла стати?", answer: "doctor" },
        { question: "Що вона не могла дочекатися сказати родині?", answer: "news" },
        { question: "Що допомогли купити батьки?", answer: "car" },
        { question: "Що було для неї проблемою (3 слова)?", answer: "cost of travel" }
    ],
    //lesson 16
    [
        { question: "Куди пішов Лео за позикою?", answer: "bank" },
        { question: "Що було запорукою успіху?", answer: "plan" },
        { question: "Що стало для нього несподіванкою (3 слова)?", answer: "speed of success" },
        { question: "Який прибуток він отримував?", answer: "strong" },
        { question: "Як він себе почував?", answer: "proud" }
    ],

    //lesson 17
    [
        { question: "Що у Тома боліло?", answer: "eye" },
        { question: "Що дав Томові лікар?", answer: "medicine" },
        { question: "Який тип інфекції в нього був?", answer: "standard" },
        { question: "Що сказали Тому робити вдома?", answer: "rest" },
        { question: "Що Том не повинен був робити протягом дня?", answer: "leave" }
    ],
    //lesson 18
    [
        { question: "Яку енергію важливо зберігати?", answer: "electrical" },
        { question: "Що використовували прилади?", answer: "power" },
        { question: "Які були ці прилади?", answer: "expensive" },
        { question: "Що відбувалося з індикаторами, коли було забагато включених пристроїв?", answer: "blinked" },
        { question: "Яку зміну допомогла зробити Міла у родині (2 слова)?", answer: "small significant" }
    ],
    //lesson 19
    [
        { question: "Куди переїжджала Юлія?", answer: "apartment" },
        { question: "Що було ідеальним у новому місці?", answer: "location" },
        { question: "Що Юлія хотіла зробити до вихідних?", answer: "prepare" },
        { question: "Яку якість потрібно розвивати Юлії для формування хороших звичок?", answer: "discipline" },
        { question: "Як себе відчувала Юлія наприкінці переїзду?", answer: "confident" },
    ],
    //lesson 20
    [
        { question: "На що дивилася Лена?", answer: "painting" },
        { question: "Що саме в картині заспокоїло її (2 слова)?", answer: "colors shape" },
        { question: "Що мала зробити Лена щодо свого майбутнього?", answer: "choice" },
        { question: "Про що нагадала їй картина (3 слова)?", answer: "believe in herself" },
        { question: "Що вона врешті-решт прийняла?", answer: "decision" }
    ],
    //lesson 21
    [
        { question: "Що робила Софі вранці?", answer: "shopping" },
        { question: "Що покривало вулицю?", answer: "ice" },
        { question: "Що вона шукала в магазині?", answer: "egg" },
        { question: "Хто сказав, що останню коробку вже продано?", answer: "owner" },
        { question: "Куди вирішила піти Софі далі (2 слова)?", answer: "different store" }
    ],
    //lesson 22
    [
        { question: "Про кого йдеться у тексті?", answer: "bird" },
        { question: "Де вона сиділа?", answer: "branch" },
        { question: "Хто за нею спостерігав?", answer: "mother" },
        { question: "З яким відчуттям вона це робила?", answer: "concern" },
        { question: "Що зрештою зробила героїня тексту?", answer: "fly" },
    ],
    //lesson 23
    [
        { question: "Хто був обережним на дорозі?", answer: "Liam" },
        { question: "Що було гучним в іншій машині?", answer: "music" },
        { question: "Що Ліам нагадував другові пристебувати?", answer: "seatbelt" },
        { question: "Чому можуть запобігти маленькі звички?", answer: "accidents" },
        { question: "Про що Ліам дбав більше, ніж про швидкість?", answer: "safety" }
    ],
    //lesson 24
    [
        { question: "Як часто у студенртів були уроки?", answer: "daily" },
        { question: "Яку тему обговорювали учні?", answer: "rules" },
        { question: "Хто намагався вийти з кімнати без дозволу?", answer: "student" },
        { question: "Що вчителька попросила його зробити?", answer: "return" },
        { question: "Що, за словами вчительки, допомагає нам зростати?", answer: "rules" }
    ],
    //lesson 25
    [
        { question: "Хто боявся говорити в класі?", answer: "Tom" },
        { question: "Якими він хотів, щоб були його відповіді?", answer: "correct" },
        { question: "Що йому порадила вчителька (два слова)?", answer: "slow down" },
        { question: "Що у нього почало зменшуватись з часом?", answer: "worry" },
        { question: "Якою є думка (голос) кожної людини?", answer: "valuable" }
    ],
    //lesson 26
    [
        { question: "Хто пішов на місцевий ринок?", answer: "Emma" },
        { question: "Яким для неї був товар в крамниці (2 слова)?", answer: "too expensive" },
        { question: "Про що думала Емма, ідучи від магазину?", answer: "budget" },
        { question: "Що дав їй добрий продавець?", answer: "advice" },
        { question: "Потрібно купувати лише те, що можеш ...", answer: "afford" }
    ],
    //lesson 27
    [
        { question: "Про що Ной мав тверду думку (два слова)?", answer: "spending money" },
        { question: "Що він хотів накопичити?", answer: "savings" },
        { question: "Що допомагало йому залишатися спокійним?", answer: "skill" },
        { question: "Яке рішення він приймав перед витратами?", answer: "payment" },
        { question: "Що він намагався робити під час дорогих місяців?", answer: "remain" }
    ],
    //lesson 28
    [
        { question: "Хто знайшов тваринку?", answer: "Lila" },
        { question: "БІля чого вона її знайшла?", answer: "forest" },
        { question: "Які очі були у тваринки?", answer: "sad" },
        { question: "Що вона дала тваринці?", answer: "food" },
        { question: "Яке серце було у Ліли?", answer: "warm" }
    ],
    //lesson 29
    [
        { question: "Хто зробив фото?", answer: "Anna" },
        { question: "Що було зображено на фото?", answer: "sunset" },
        { question: "Яка була назва фото (2 слова)?", answer: "Evening Light" },
        { question: "Де Анна зареєструвалася?", answer: "online" },
        { question: "Що їй потрібно було зарезервувати?", answer: "spot" }
    ],
    //lesson 30
    [
        { question: "Біля чого стояв Марк?", answer: "lake" },
        { question: "Що він майже був готовий робити?", answer: "write" },
        { question: "Що повернулося після депресії?", answer: "imagination" },
        { question: "Що хотів отримати Марк?", answer: "peace" },
        { question: "Що йому для цього було потрібно?", answer: "believe" }
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
