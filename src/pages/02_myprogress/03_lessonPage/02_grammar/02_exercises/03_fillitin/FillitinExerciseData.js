const sentences = [
    //lesson 1 Вимова. Правила читання
    { sentence: "W-O-R-K", translat: "" },
    { sentence: "G-O-O-D", translat: "" },
    { sentence: "U-S-E-D", translat: "" },
    { sentence: "O-N-L-Y", translat: "" },
    { sentence: "L-I-K-E", translat: "" },
    { sentence: "W-A-T-E-R", translat: "" },
    { sentence: "T-I-M-E", translat: "" },
    { sentence: "your name", translat: "" },

    //lesson 2 Pronouns. To Be
    { sentence: "Як тебе звати?", translat: "What is your name?" },
    { sentence: "Ти не американець", translat: "You are not American" },
    { sentence: "Вони були в місті (city)?", translat: "Were they in city?" },
    { sentence: "Він з України?", translat: "Is he from Ukraine?" },
    { sentence: "Ці люди не дружні", translat: "These people are not friendly" },
    { sentence: "Твоя робота важка?", translat: "Is your work hard?" },
    { sentence: "Фільм нецікавий", translat: "Film is not interesting" },
    { sentence: "Сім'я важлива?", translat: "Is family important?" },

    //lesson 3 Теперішній простий час
    { sentence: "Він завжди миє свої руки", translat: "He always washes his hands" },
    { sentence: "Вони допомагають своїм друзям", translat: "They help their friends" },
    { sentence: "Я ходжу в зал по понеділкам", translat: "I go to the gym on Mondays" },
    { sentence: "Вона працює в магазині", translat: "She works in the store" },
    { sentence: "Її син любить гратися", translat: "Her son loves to play" },
    { sentence: "Мій батько бігає вранці", translat: "My father runs in the mornings" },
    { sentence: "У цьому місці подають гарну каву", translat: "This place serves good coffee" },
    { sentence: "Мені потрібна інша ручка", translat: "I need another pen" },
    //{ sentence: "Ви мусите подумати про здоров'я", translat: "You must think about your health" },
    //{ sentence: "Ми їздимо на тому ж автобусі", translat: "We take the same bus" },

    //lesson 4 Майбутній простий час
    { sentence: "Ми зараз почнемо збори", translat: "We will start the meeting now" },
    { sentence: "Вона подвонить тобі на перерві", translat: "She will call you during the break" },
    { sentence: "Ти багато вивчиш у цьому курсі", translat: "You will learn a lot in this course" },
    { sentence: "Вони прибудуть біля 6 вечора", translat: "They will arrive around 6p.m." },
    { sentence: "Джон залишиться на роботі допізна", translat: "John will stay late at work" },
    { sentence: "Він сформує нову команду", translat: "He will form a new team" },
    { sentence: "Я приготую м'со на вечерю", translat: "I will cook meat for dinner" },
    { sentence: "Вона відвідає це місце знову", translat: "She will visit this place again" },
    //{ sentence: "Повітря буде відчуватися холоднішим", translat: "The air will feel cooler" },
    //{ sentence: "Ми проведемо день разом", translat: "Wt will spend the day together" },

    //lesson 5 Минулий простий час
    { sentence: "Вона говорила меньше перед зустріччю", translat: "She talked less during the meeting" },
    { sentence: "Вони грали у футбол в парку", translat: "They played football in the park" },
    { sentence: "Він закінчив проект вчасно", translat: "He finished the project on time" },
    { sentence: "Ми зібрали інформацію минулого тижня", translat: "We collected information last week" },
    { sentence: "Я надрукував листа", translat: "I typed the letter" },
    { sentence: "Вона вимкнула світло", translat: "She turned off the lights" },
    { sentence: "Він скучив за дружиною дуже сильно", translat: "He missed her wife very much" },
    { sentence: "Вони підготували звіт", translat: "They prepared the report" },

    //lesson 6 Прості часи: підсумок
    { sentence: "Ти поставиш будильник?", translat: "Will you set the alarm?" },
    { sentence: "Чи співали пташки вранці?", translat: "Did the birds sing in the morning?" },
    { sentence: "Вона працює гідом?", translat: "Does she work as a guide?" },
    { sentence: "Чи допоможе вчитель студентам?", translat: "Will the teacher help the students?" },
    { sentence: "Чи змініються сезони кожні 4 місяці?", translat: "Do seasons change every 4 months?" },
    { sentence: "Чи цікавить музика багатьох людей?", translat: "Does music interest many people?" },
    { sentence: "Чи вивчав він літературу в університеті?", translat: "Did he study literature at university?" },
    { sentence: "Ви ходите пішки на роботу?", translat: "Do you walk to work?" },

    //lesson 7 Неправильні дієслова
    { sentence: "Я зустрів свого друга в кафе", translat: "I met my friend at the café" },
    { sentence: "Вона прочитала 3 книги", translat: "She read 3 books" },
    { sentence: "Він поклав ключі на стіл", translat: "He put his keys on the table" },
    { sentence: "Вони пробігли 5 миль вранці", translat: "They ran 5 miles in the morning" },
    { sentence: "Вона продала свій старий велосипед", translat: "She sold her old bicycle" },
    { sentence: "Я відправив емейл вчора ввечері", translat: "I sent the email last night" },
    { sentence: "Діти співали пісню в школі", translat: "The children sang a song at the school " },
    { sentence: "Він зняв фото заходу сонця", translat: "He took a photo of the sunset" },

    //lesson 8 Теперішній тривалий час

    // lesson 9 Майбутній тривалий
    { sentence: "Вона слухатиме концерт", translat: "She will be listening to the concert" },
    { sentence: "Ми будемо говорити про це завтра", translat: "We will be talking about it tomorrow" },
    { sentence: "Вони перевірятимуть розмір", translat: "They will be checking the size" },
    { sentence: "Я переїжджатиму наступного місяця", translat: "I will be moving next month" },
    { sentence: "Він будуватиме великий будинок", translat: "He will be building a big house" },
    { sentence: "Ми робитимемо все можливе", translat: "We will be doing everything possible" },
    { sentence: "Вони дивитимуться телевізор", translat: "They will be watching TV" },
    { sentence: "Ви вивчатимете це наступного тижня", translat: "You will be learning it next week" },
    //{ sentence: "Вчитель пояснюватиме нову тему", translat: "The teacher will be explaining the new topic" },
    //{ sentence: "Пані будуть пити вино", translat: "The ladies will be drinking wine" },

    // lesson 10 Минулий тривалий

    //lesson 11  Тривалі часи: підсумок
    { sentence: "Чи працює вона допізна цими днями?", translat: "Is she working late these days?" },
    { sentence: "Вони відмічали свято сьогодні?", translat: "Were they celebrating a holday today?" },
    { sentence: "Чи зменьшуватиме компанія відходи?", translat: "Will company be reducing the waste?" },
    { sentence: "Він покращує рівень англійської?", translat: "Is he improving his level of English?" },
    { sentence: "Ви розміщували замовлення?", translat: "Were you placing the order?" },
    { sentence: "Чи практикуватимуться студенти?", translat: "Will the students be practicing?" },
    { sentence: "Чи проводять вчені дослідження?", translat: "Are the scientists conducting research?" },
    { sentence: "Чи було спекотно людям вчора?", translat: "Were people feeling hot yesterday?" },
    //{ sentence: "Вона користується смсками?", translat: "Is she using text messages?" },
    //{ sentence: "Чи робитимуть вони 3 проекти?", translat: "Will they be doing 3 projects?" },


    //lesson 12 Теперішній доконаний час
    { sentence: "Чи впала темперетура?", translat: "Has the temperature dropped?" },
    { sentence: "Вони об'єдналися з іншою командою?", translat: "Have they united with another team?" },
    { sentence: "Ви чули це слово раніше?", translat: "Have you heard this word before?" },
    { sentence: "Вона додала ваги?", translat: "Has she gained weight?" },
    { sentence: "Чи використовував він силу?", translat: "Has he used force?" },
    { sentence: "Ти загубив ключ від моєї комірки?", translat: "Have you lost the key to my locker?" },
    { sentence: "Чи бачили ми світло?", translat: "Have we seen the light?" },
    { sentence: "Вони проігнорували всі попередження?", translat: "Have they ignored all warnings?" },
    //{ sentence: "Чи зробив я багато за сьогодні?", translat: "Have I done a lot today?" },
    //{ sentence: "Вона закінчила навчання (тренінг)?", translat: "Has she completed the training?" },

    // LESSON 11
    // { sentence: "Я вже поїв", translat: "I have already eaten" },
    // { sentence: "Вона ще не приїхала", translat: "She hasn't arrived yet" },
    // { sentence: "Ти коли-небудь був у Франції?", translat: "Have you ever been to France?" },
    // { sentence: "Ми щойно завершили проєкт", translat: "We have just finished the project" },
    // { sentence: "Він не бачив цього фільму", translat: "He hasn't seen this movie" },
    // { sentence: "Вони вже прибули?", translat: "Have they arrived yet?" },
    // { sentence: "Я знайшов свої ключі", translat: "I have found my keys" },
    // { sentence: "Ми не чули новин", translat: "We haven't heard the news" },

    //lesson 13 Теперішній доконаний тривалий час   
    //lesson 14 Порівняння всіх часів 

    //lesson 15 Прийменники місця
    { sentence: "Книга лежить на столі", translat: "The book is on the table" },
    { sentence: "Собака спав під ліжком", translat: "The dog slept under the bed" },
    { sentence: "Діти грають у парку", translat: "The children play in the park" },
    { sentence: "Ми стояли біля магазину", translat: "We stood near the shop" },
    { sentence: "Кішка сидить перед телевізором", translat: "The cat sits in front of the TV" },
    { sentence: "Вони жили біля міста", translat: "They lived near the city" },
    { sentence: "Моя сумка лежить позаду тебе", translat: "My bag is behind you" },
    { sentence: "Він поклав документи в ящик", translat: "He put the documents in the drawer" },

    //lesson 16 Час і дата
    { sentence: "Зараз п’ять хвилин по восьмій", translat: "It is five past eight" },
    { sentence: "Зараз чверть по третій", translat: "It is quarter past three" },
    { sentence: "Зараз двадцять п’ять по сьомій", translat: "It is twenty-five past seven" },
    { sentence: "Зараз пів на одинадцяту", translat: "It is half past ten" },
    { sentence: "Зараз без двадцяти восьма", translat: "It is twenty to eight" },
    { sentence: "Зараз без чверті десята", translat: "It is quarter to ten" },
    { sentence: "Зараз без п’яти шоста", translat: "It is five to six" },
    { sentence: "Зустріч починається о другій", translat: "The meeting starts at two o’clock" },

    //lesson 17 Артиклі. Конструкція There is/There are
    { sentence: "У кімнаті є стіл", translat: "There is a table in the room" },
    { sentence: "На полиці є книга", translat: "There is a book on the shelf" },
    { sentence: "У саду є квіти", translat: "There are flowers in the garden" },
    { sentence: "У коробці є іграшки", translat: "There are toys in the box" },
    { sentence: "На столі є чашка", translat: "There is a cup on the table" },
    { sentence: "У класі є багато учнів", translat: "There are many students in the classroom" },
    { sentence: "У холодильнику є молоко", translat: "There is milk in the fridge" },
    { sentence: "На стіні є картини", translat: "There are paintings on the wall" },

    //lesson 18 Однина і множина. Ступені порівняння. Порядкові й кількісні числівники
    { sentence: "У мене є три олівці", translat: "I have three pencils" },
    { sentence: "Він живе на дванадцятому поверсі", translat: "He lives on the twelfth floor" },
    { sentence: "У класі двадцять учнів", translat: "There are twenty students in the class" },
    { sentence: "Це мій перший день у школі", translat: "This is my first day at school" },
    { sentence: "Ми бачили сім машин", translat: "We saw seven cars" },
    { sentence: "Вона виграла друге місце", translat: "She won second place" },
    { sentence: "У нього чотирнадцять книг", translat: "He has fourteen books" },
    { sentence: "Вони приїхали десятою машиною", translat: "They arrived in the tenth car" },

    //lesson 19 Активний і пасивний стан
    { sentence: "Лист був написаний учителем", translat: "The letter was written by the teacher" },
    { sentence: "Хліб печеться щодня", translat: "Bread is baked every day" },
    { sentence: "Ця кімната була прибрана", translat: "This room was cleaned" },
    { sentence: "Новий міст будується", translat: "A new bridge is built" },
    { sentence: "Завдання було виконане вчасно", translat: "The task was completed on time" },
    { sentence: "Фільм знімається в Києві", translat: "The movie is filmed in Kyiv" },
    { sentence: "Книга була перекладена на українську", translat: "The book was translated into Ukrainian" },
    { sentence: "Стіл зроблений з дерева", translat: "The table is made of wood" },

    //lesson 20 Модальні дієслова, конструкції Would і Used to
    { sentence: "Я можу допомогти тобі з домашнім завданням", translat: "I can help you with your homework" },
    { sentence: "Ти мусиш носити шолом під час їзди на велосипеді", translat: "You must wear a helmet when cycling" },
    { sentence: "Вона може співати дуже добре", translat: "She can sing very well" },
    { sentence: "Ми повинні прийти вчасно", translat: "We should arrive on time" },
    { sentence: "Він може бути в офісі зараз", translat: "He may be in the office now" },
    { sentence: "Ти можеш залишити повідомлення після сигналу", translat: "You may leave a message after the beep" },
    { sentence: "Я мав би (мусив би) подзвонити їй раніше", translat: "I should have called her earlier" },
    { sentence: "Вони можуть піти з нами", translat: "They can come with us" },

    //lesson 21 Наказові речення
    { sentence: "Закрий двері", translat: "Close the door" },
    { sentence: "Сідай", translat: "Sit down" },
    { sentence: "Не говори", translat: "Don't speak" },
    { sentence: "Почекай хвилину", translat: "Wait a minute" },
    { sentence: "Послухай мене", translat: "Listen to me" },
    { sentence: "Візьми ручку", translat: "Take the pen" },
    { sentence: "Відкрий вікно", translat: "Open the window" },
    { sentence: "Будь уважним", translat: "Be careful" },

    // lesson 22 Підрядні речення
    // lesson 23 Непряма мова    

    // LESSON 19
    // { sentence: "Я бачу собаку (якогось)", translat: "I see a dog" },
    // { sentence: "Собака біля дерева великий", translat: "The dog near the tree is big" },
    // { sentence: "Вона купила книгу (якусь)", translat: "She bought a book" },
    // { sentence: "Книга на столі цікава (саме ця)", translat: "The book on the table is interesting" },
    // { sentence: "Він хоче з’їсти яблуко (неважливо, яке)", translat: "He wants to eat an apple" },
    // { sentence: "Яблуко в моїй руці стигле (саме це)", translat: "The apple in my hand is ripe" },
    // { sentence: "Вони побудували будинок (невідомо який)", translat: "They built a house" },
    // { sentence: "Будинок біля озера новий (саме цей)", translat: "The house near the lake is new" },

    //lesson 24 Прості часи: повторення
    { sentence: "Ти бачив цей фільм?", translat: "Did you see this movie?" },
    { sentence: "Чи вона ходить до школи щодня?", translat: "Does she go to school every day?" },
    { sentence: "Ти завтра підеш на роботу?", translat: "Will you go to work tomorrow?" },
    { sentence: "Вони грали у футбол вчора?", translat: "Did they play football yesterday?" },
    { sentence: "Чи він зараз читає книгу?", translat: "Is he reading a book now?" },
    { sentence: "Ти будеш вдома ввечері?", translat: "Will you be at home in the evening?" },
    { sentence: "Чи вона допомогла тобі з цим?", translat: "Did she help you with this?" },
    { sentence: "Ви часто їздите на автобусі?", translat: "Do you often take the bus?" },

    //lesson 24 Прості часи: повторення
    { sentence: "Він приїхав учора", translat: "He arrived yesterday" },
    { sentence: "Я завтра зателефоную тобі", translat: "I will call you tomorrow" },
    { sentence: "Ми зустрілися біля школи", translat: "We met near the school" },
    { sentence: "Вона напише листа пізніше", translat: "She will write a letter later" },
    { sentence: "Вони грали у футбол у парку", translat: "They played football in the park" },
    { sentence: "Ми поїдемо на море влітку", translat: "We will go to the sea in summer" },
    { sentence: "Я зробив домашнє завдання", translat: "I did my homework" },
    { sentence: "Він купить новий телефон наступного тижня", translat: "He will buy a new phone next week" },

    //lesson 25 Тривалі часи: повторення
    { sentence: "Я читав газету", translat: "I was reading newspaper" },
    { sentence: "Я буду працювати", translat: "I will be working" },
    { sentence: "Вони грали на вулиці", translat: "They were playing outside" },
    { sentence: "Ми будемо чекати", translat: "We will be waiting" },
    { sentence: "Вона писала листа", translat: "She was writing the letter" },
    { sentence: "Вони будуть вечеряти", translat: "They will be having dinner" },
    { sentence: "Діти спали", translat: "The children were sleeping" },
    { sentence: "Він буде летіти завтра", translat: "He will be flying tomorrow" },

    //lesson 26 Теперішній доконаний і Теперішній доконаний тривалий: повторення
    { sentence: "Я вже поїв", translat: "I have already eaten" },
    { sentence: "Вона написала листа", translat: "She has written a letter" },
    { sentence: "Ми щойно приїхали", translat: "We have just arrived" },
    { sentence: "Вони закінчили роботу", translat: "They have finished the work" },
    { sentence: "Він прочитав цю книгу", translat: "He has read this book" },
    { sentence: "Ти був у Лондоні", translat: "You have been to London" },
    { sentence: "Я загубив ключі", translat: "I have lost the keys" },
    { sentence: "Ми бачили цей фільм", translat: "We have seen this movie" },

    //lesson 26 Теперішній доконаний і Теперішній доконаний тривалий: повторення
    { sentence: "Я ще не закінчив роботу", translat: "I haven’t finished the work yet" },
    { sentence: "Вона вже прочитала цю книгу?", translat: "Has she read this book yet?" },
    { sentence: "Вони не бачили цей фільм", translat: "They haven’t seen this movie" },
    { sentence: "Ти коли-небудь був у Парижі?", translat: "Have you ever been to Paris?" },
    { sentence: "Ми не отримали листа", translat: "We haven’t received the letter" },
    { sentence: "Він уже поїв?", translat: "Has he eaten already?" },
    { sentence: "Ти не зробив домашнє завдання", translat: "You haven’t done your homework" },
    { sentence: "Вони вже приїхали?", translat: "Have they arrived yet?" },

    //lesson 27 Повторення всіх часів - перевірити
    { sentence: "Я взяв ключі", translat: "I have taken the keys" },
    { sentence: "Вона бачила цей фільм", translat: "She has seen this movie" },
    { sentence: "Вони прийшли рано", translat: "They have come early" },
    { sentence: "Ми знайшли помилку", translat: "We have found a mistake" },
    { sentence: "Він дав мені подарунок", translat: "He has given me a gift" },
    { sentence: "Вона розповіла цікаву історію", translat: "She has told an interesting story" },
    { sentence: "Він став успішним", translat: "He has become successful" },
    { sentence: "Вони показали новий проект", translat: "They have shown a new project" },

    // LESSON 26
    // { sentence: "Зараз без п’яти п’ять", translat: "It’s five to five now" },
    // { sentence: "Пора йти, бо вже без чверті шоста", translat: "It’s time to go because it’s quarter to six" },
    // { sentence: "Зустріч почнеться без двадцяти сім", translat: "The meeting will start at twenty to seven" },
    // { sentence: "О пів на восьму я прийду", translat: "I will come at half past seven" },
    // { sentence: "Зараз двадцять п’ять хвилин на шосту", translat: "It’s twenty-five past five now" },
    // { sentence: "Урок починається о чверті на дев’яту", translat: "The lesson starts at quarter past eight" },
    // { sentence: "Поїзд відправляється о десятій десять", translat: "The train leaves at ten past ten" },
    // { sentence: "Матч почнеться о п’ятій", translat: "The match will start at five o’clock" },

    // LESSON 27
    // { sentence: "Кіт сидить перед будинком", translat: "The cat is sitting in front of the house" },
    // { sentence: "Він стоїть за деревом", translat: "He is standing behind the tree" },
    // { sentence: "Ми сиділи поруч з друзями", translat: "We sat next to our friends" },
    // { sentence: "Книга лежить на столі", translat: "The book is on the table" },
    // { sentence: "Собака спить під диваном", translat: "The dog is sleeping under the sofa" },
    // { sentence: "Вона стоїть між двома будинками", translat: "She is standing between two houses" },
    // { sentence: "Пташки літають серед дерев", translat: "The birds are flying among the trees" },
    // { sentence: "Ключі знаходяться в сумці", translat: "The keys are in the bag" },

    // LESSON 28
    // { sentence: "Цей будинок більший за той", translat: "This house is bigger than that one" },
    // { sentence: "Це найвищий будинок у місті", translat: "This is the tallest building in the city" },
    // { sentence: "Вона швидша за брата", translat: "She is faster than her brother" },
    // { sentence: "Він найрозумніший учень у класі", translat: "He is the smartest student in the class" },
    // { sentence: "Ця книга цікавіша за ту", translat: "This book is more interesting than that one" },
    // { sentence: "Це найцікавіша книга, яку я читав", translat: "This is the most interesting book I have read" },
    // { sentence: "Моя машина новіша за твою", translat: "My car is newer than yours" },
    // { sentence: "Це найновіша модель телефону", translat: "This is the newest phone model" },

    // LESSON 29
    // { sentence: "Лист пишеться зараз", translat: "The letter is being written now" },
    // { sentence: "Фільм був знятий минулого року", translat: "The film was made last year" },
    // { sentence: "Завдання буде виконане завтра", translat: "The task will be done tomorrow" },
    // { sentence: "Документ зараз перевіряється", translat: "The document is being checked now" },
    // { sentence: "Вікна були відкриті вчора", translat: "The windows were opened yesterday" },
    // { sentence: "Проект буде завершено скоро", translat: "The project will be completed soon" },
    // { sentence: "Обід готується на кухні", translat: "The lunch is prepared in the kitchen" },
    // { sentence: "Будинок побудований десять років тому", translat: "The house was built ten years ago" },

    //lesson 28 Рідковживані часи
    { sentence: "Він поїв до того", translat: "He had eaten before that" },
    { sentence: "Я закінчу роботу до 2-ї ранку", translat: "I will have finished the work by 2am" },
    { sentence: "Вона прочитала книгу до 8-ї вечора", translat: "She had read the book by 8pm" },
    { sentence: "Ми завершимо проект", translat: "We will have completed the project" },
    { sentence: "Вони пішли раніше", translat: "They had left earlier" },
    { sentence: "Ти отримаєш лист", translat: "You will have received the letter" },
    { sentence: "Я закрив двері до того часу", translat: "I had closed the door by that time" },
    { sentence: "Вона поїде до 6 ранку", translat: "She will have left by 6am" },

        //lesson 29 8 rules
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-1", word: "8 rules", translat: "8 rules", ending: "" },
    
    //lesson 30 8 rules
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
    { beginning: "8 rules-2", word: "8 rules", translat: "8 rules", ending: "" },
]

const instructions = [
  "1 Вимова. Правила читання",
  "2 Займенники. Дієслово To Be",
  "3 Огляд всіх часів. Теперішній простий час",
  "4 Майбутній простий час",
  "5 Минулий простий час",
  "6 Прості часи: підсумок",
  "7 Неправильні дієслова",
  "8 Теперішній тривалий час",
  "9 Майбутній тривалий час",
  "10 Минулий тривалий час",
  "11 Тривалі часи: підсумок",
  "12 Теперішній доконаний час",
  "13 Теперішній доконаний тривалий час",
  "14 Порівняння всіх часів",
  "15 Прийменники місця",
  "16 Час і дата",
  "17 Артиклі. Конструкція There is/There are",
  "18 Однина і множина. Ступені порівняння. Порядкові й кількісні числівники",
  "19 Активний і пасивний стан",
  "20 Модальні дієслова, конструкції Would і Used to",
  "21 Наказові речення",
  "22 ідрядні речення",
  "23 Непряма мова",
  "24 Прості часи: повторення. Неправильні дієслова - частина 2",
  "25 Тривалі часи: повторення",
  "26 Теперішній доконаний і Теперішній доконаний тривалий: повторення",
  "27 Повторення всіх часів",
  "28 Рідковживані часи",
  "29 8 основних правил граматики (частина 1)",
  "30 8 основних правил граматики (частина 2)"
];


export const FillitinExerciseData = sentences.map((value, index) => (
    {
        id: index + 1,
        lesson: Math.floor(index / 8) + 1,
        visibility: "hidden",
        input: "",
        instruction: instructions[Math.floor(index / 8)],
        sentence: {
            sentence: value.sentence,
            translat: value.translat,
        }
    }
))