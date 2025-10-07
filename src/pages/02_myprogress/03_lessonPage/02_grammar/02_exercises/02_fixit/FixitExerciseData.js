//lesson 8 Теперішній тривалий час
// lesson 9 Майбутній тривалий
//lesson 13 Теперішній доконаний тривалий час 
// Підрядні речення 22
// Непряма мова lesson 23
// 8 основних правил граматики (частина 1) lesson 29
// 8 основних правил граматики (частина 2) lesson 30




const sentences = [
  //lesson 1 Вимова. Правила читання
  { beginning: "", bold: "do - [dou]?", correct: "ду [du:]", ending: "" },
  { beginning: "", bold: "some - [soum]?", correct: "сам [sʌm]", ending: "" },
  { beginning: "", bold: "people - ?", correct: "піпл [pi:pl]", ending: "" },
  { beginning: "", bold: "see - [si:]?", correct: "сі [si:]", ending: "" },
  { beginning: "", bold: "most - [most]?", correct: "моуст [moust]", ending: "" },
  { beginning: "", bold: "what - [whæt]?", correct: "увот [wot]", ending: "" },
  { beginning: "", bold: "through - ?", correct: "тсру [θru:]", ending: "" },
  { beginning: "", bold: "also - [ælsou]?", correct: "олсоу [olsou]", ending: "" },
  //lesson 2 Pronouns. To Be
  { beginning: "I", bold: "to be (зараз)", correct: "am", ending: "a student " },
  { beginning: "You", bold: "to be (в минулому)", correct: "were", ending: "a worker" },
  { beginning: "He", bold: "to be (завтра)", correct: "will be", ending: "at school" },
  { beginning: "She", bold: "to be (зараз)", correct: "is", ending: "happy" },
  { beginning: "We", bold: "to be (вчора)", correct: "were", ending: "at home" },
  { beginning: "Students", bold: "to be not (зараз)", correct: "are not", ending: "in the class" },
  { beginning: "The boy", bold: "to be not (завтра)", correct: "will not be", ending: "at work" },
  { beginning: "We", bold: "to be (зараз)", correct: "are", ending: "friends" },
  //lesson 3 Теперішній простий час
  { beginning: "I", bold: "find", correct: "find", ending: "this book interesting" },
  { beginning: "She", bold: "eat", correct: "eats", ending: "too much sugar" },
  { beginning: "It", bold: "take", correct: "takes", ending: "a lot of time" },
  { beginning: "I", bold: "want", correct: "want", ending: "a new phone" },
  { beginning: "This message", bold: "sound", correct: "sounds", ending: "very important" },
  { beginning: "My family", bold: "live", correct: "lives", ending: "in the city" },
  { beginning: "He", bold: "give", correct: "gives", ending: "a good example" },
  { beginning: "I", bold: "listen", correct: "listen", ending: "to the music" },
  //lesson 4 Майбутній простий час
  { beginning: "You", bold: "make", correct: "will make", ending: "the right decision" },
  { beginning: "She", bold: "support", correct: "will support", ending: "you" },
  { beginning: "They", bold: "install", correct: "will install", ending: "a new system" },
  { beginning: "We", bold: "talk", correct: "will talk", ending: "after the meeting" },
  { beginning: "He", bold: "buy", correct: "will buy", ending: "a new computer" },
  { beginning: "I", bold: "do", correct: "will do", ending: "my best to help you" },
  { beginning: "Your life", bold: "change", correct: "will change", ending: "for the better" },
  { beginning: "Since you are here, we", bold: "start", correct: "will start", ending: "the new project" },
  //lesson 5 Минулий простий час
  { beginning: "They", bold: "end", correct: "ended", ending: "the meeting" },
  { beginning: "She", bold: "follow", correct: "followed", ending: "the new method" },
  { beginning: "He never", bold: "imagine", correct: "imagined", ending: "such a result" },
  { beginning: "We", bold: "use", correct: "used", ending: "less water last week" },
  { beginning: "The children", bold: "play", correct: "played", ending: "in the yard all day" },
  { beginning: "She", bold: "be", correct: "was", ending: "able to the finish the project" },
  { beginning: "They", bold: "clime", correct: "climed", ending: "the hilltop" },
  { beginning: "He", bold: "point", correct: "pointed", ending: "at the map" },

  //lesson 6 Неправильні дієслова
  { beginning: "She", bold: "bring", correct: "brought", ending: "her book" },
  { beginning: "He", bold: "choose", correct: "chose", ending: "the red shirt" },
  { beginning: "They", bold: "come", correct: "came", ending: "to the concert late" },
  { beginning: "I", bold: "drink", correct: "drank", ending: "a glass of water" },
  { beginning: "We", bold: "drive", correct: "drove", ending: "to the city" },
  { beginning: "The bird", bold: "fly", correct: "flew", ending: "over the trees" },
  { beginning: "He", bold: "forget", correct: "forgot", ending: "to do his homework" },
  { beginning: "She", bold: "give", correct: "gave", ending: "me a nice gift" },

  //lesson 7 Прості часи: підсумок
  { beginning: "The girl", bold: "get (past)", correct: "did not get", ending: "the job" },
  { beginning: "They", bold: "play (future)", correct: "will not play", ending: "at the party" },
  { beginning: "He", bold: "meet (present)", correct: "do not meet", ending: "every day" },
  { beginning: "I", bold: "understand (past)", correct: "did not understand", ending: "the question" },
  { beginning: "We", bold: "stop (future)", correct: "will not stop", ending: "there" },
  { beginning: "She", bold: "bring", correct: "does not bring", ending: "the books to school" },
  { beginning: "I", bold: "read (past)", correct: "did not read", ending: "the message carefully" },
  { beginning: "He", bold: "arrive (future)", correct: "will not arrive", ending: "for the meeting" },

  //lesson 8 Теперішній тривалий час
  { beginning: "They", bold: "are staying", correct: "are staying", ending: "at home all weekend" },
  { beginning: "He", bold: "is feeling", correct: "is feeling", ending: "bad about his decision" },
  { beginning: "I", bold: "am eating", correct: "am eating", ending: "the cake right now" },
  { beginning: "We", bold: "are discussing", correct: "are discussing", ending: "the theory in the class" },
  { beginning: "She", bold: "is preparing", correct: "is preparing", ending: "dinner for her friends" },
  { beginning: "The students", bold: "are studying", correct: "are studying", ending: "law this evening" },
  { beginning: "She", bold: "is cooking", correct: "is cooking", ending: "food right now" },
  { beginning: "The boys", bold: "are putting", correct: "are putting", ending: "the books on the shelf" },

  // lesson 9 Майбутній тривалий

  { beginning: "They", bold: "will be staying", correct: "will be staying", ending: "at home all weekend" },
  { beginning: "He", bold: "will be feeling", correct: "will be feeling", ending: "bad about his decision" },
  { beginning: "I", bold: "will be eating", correct: "will be eating", ending: "the cake when they arrive" },
  { beginning: "We", bold: "will be discussing", correct: "will be discussing", ending: "the theory in the class" },
  { beginning: "She", bold: "will be preparing", correct: "will be preparing", ending: "dinner for her friends" },
  { beginning: "The students", bold: "will be studying", correct: "will be studying", ending: "law this evening" },
  { beginning: "She", bold: "will be cooking", correct: "will be cooking", ending: "food when I call" },
  { beginning: "The boys", bold: "will be putting", correct: "will be putting", ending: "the books on the shelf" },

  // lesson 10 Минулий тривалий
  { beginning: "They", bold: "stay", correct: "were staying", ending: "at home all weekend" },
  { beginning: "He", bold: "feel", correct: "was feeling", ending: "bad about his decision" },
  { beginning: "I", bold: "eat", correct: "was eating", ending: "the cake when they arrived" },
  { beginning: "We", bold: "discuss", correct: "were discussing", ending: "the theory in the class" },
  { beginning: "She", bold: "prepare", correct: "was preparing", ending: "dinner for her friends" },
  { beginning: "The students", bold: "study", correct: "were studying", ending: "law all evening" },
  { beginning: "She", bold: "cook", correct: "was cooking", ending: "food when I called" },
  { beginning: "The boys", bold: "put", correct: "were putting", ending: "the books on the shelf" },

  //lesson 11  Тривалі часи: підсумок
  { beginning: "The bird", bold: "sing (past)", correct: "was not singing", ending: "in the morning" },
  { beginning: "The guide", bold: "explain (present)", correct: "is not explaining", ending: "it clearly" },
  { beginning: "They", bold: "provide (future)", correct: "will not be providing", ending: "enough information" },
  { beginning: "She", bold: "change (past)", correct: "was not changing", ending: "her opinion" },
  { beginning: "He", bold: "show (future)", correct: "will not be showing", ending: "interest in this topic" },
  { beginning: "We", bold: "study (present)", correct: "are not studying", ending: "literature at this lesson" },
  { beginning: "I", bold: "visit (past)", correct: "was not visiting", ending: "them last month" },
  { beginning: "They", bold: "solve (future)", correct: "will not be solving", ending: "the problem correctly" },

  //lesson 12 Теперішній доконаний час
  { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
  { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
  { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
  { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
  { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
  { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
  { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
  { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

  //lesson 13 Теперішній доконаний тривалий час 

  { beginning: "She", bold: "search", correct: "has been searching", ending: "for her card since morning" },
  { beginning: "They", bold: "face", correct: "have been facing", ending: "difficulties since yesterday" },
  { beginning: "We", bold: "include", correct: "have been including", ending: "Sarah in the list for an hour" },
  { beginning: "He", bold: "make", correct: "has been making", ending: "a list of items to buy since noon" },
  { beginning: "I", bold: "change", correct: "have been changing", ending: "my mind about the trip all day" },
  { beginning: "She", bold: "mention", correct: "has been mentioning", ending: "reasons since this morning" },
  { beginning: "You", bold: "see", correct: "have been seeing", ending: "the real problem since early today" },
  { beginning: "I", bold: "try", correct: "have been trying", ending: "various solutions since morning" },

  //lesson 14 Порівняння всіх часів 
  { "beginning": "The chefs", "bold": "cook (present)", "correct": "are cooking", "ending": "dinner right now" },
  { "beginning": "The scientists", "bold": "determine (past)", "correct": "were determining", "ending": "the cause of the issue yesterday" },
  { "beginning": "People", "bold": "discuss (future)", "correct": "will be discussing", "ending": "the future during the meeting" },
  { "beginning": "The engineers", "bold": "visit (present)", "correct": "are visiting", "ending": "the construction site today" },
  { "beginning": "The team", "bold": "look (past)", "correct": "were looking", "ending": "for an alternative to the broken part" },
  { "beginning": "They", "bold": "meet (future)", "correct": "will be meeting", "ending": "the demand by next month" },
  { "beginning": "The girl", "bold": "wonder (present)", "correct": "is wondering", "ending": "if she ever tells the truth" },
  { "beginning": "The athletes", "bold": "exercise (future)", "correct": "will be exercising", "ending": "early tomorrow morning" },

  //lesson 15 Прийменники місця
  { beginning: "The books are", bold: "під", correct: "under", ending: "the bed" },
  { beginning: "The picture is", bold: "за", correct: "behind", ending: "the door" },
  { beginning: "The shoes are", bold: "перед", correct: "in front of", ending: "the closet" },
  { beginning: "The keys are", bold: "між", correct: "between", ending: "the sofa and the chair" },
  { beginning: "The clock is", bold: "над", correct: "above", ending: "the fireplace" },
  { beginning: "The garden is", bold: "поруч із", correct: "near", ending: "the house" },
  { beginning: "The ball is", bold: "всередині", correct: "inside", ending: "the box" },
  { beginning: "The car is", bold: "позаду", correct: "behind", ending: "the building" },

  //lesson 16 Час і дата
  { beginning: "Her birthday is", bold: "in", correct: "in", ending: "July" },
  { beginning: "The meeting is", bold: "in", correct: "at", ending: "3 o’clock" },
  { beginning: "The festival happens", bold: "in", correct: "in", ending: "2025" },
  { beginning: "The event is", bold: "in", correct: "on", ending: "Monday" },
  { beginning: "The train leaves", bold: "in", correct: "at", ending: "7 o’clock" },
  { beginning: "We travel", bold: "in", correct: "in", ending: "December" },
  { beginning: "The appointment is", bold: "in", correct: "on", ending: "Friday" },
  { beginning: "The anniversary is", bold: "in", correct: "in", ending: "1999" },

  //lesson 17 Артиклі. Конструкція There is/There are
  { beginning: "", bold: "There is (є)", correct: "There is", ending: "a book on the table" },
  { beginning: "", bold: "There is (будуть)", correct: "There will be", ending: "three cats in the garden" },
  { beginning: "", bold: "There is (була)", correct: "There was", ending: "a problem we need to solve" },
  { beginning: "", bold: "There is (були)", correct: "There were", ending: "many people at the party" },
  { beginning: "", bold: "There is (є)", correct: "There is", ending: "a restaurant nearby" },
  { beginning: "", bold: "There is (були)", correct: "There were", ending: "two cars in the parking lot" },
  { beginning: "", bold: "There is (буде)", correct: "There will be", ending: "a message for you" },
  { beginning: "", bold: "There is (є)", correct: "There are", ending: "several options to choose from" },

  //lesson 18 Однина і множина. Ступені порівняння. Порядкові й кількісні числівники
  { beginning: "She asked", bold: "question", correct: "questions", ending: "about the assignment" },
  { beginning: "He applied to", bold: "university", correct: "universities", ending: "across the country" },
  { beginning: "They collected", bold: "rock", correct: "rocks", ending: "from the riverbank" },
  { beginning: "She shared", bold: "story", correct: "stories", ending: "from her childhood" },
  { beginning: "I read", bold: "article", correct: "articles", ending: "on climate change" },
  { beginning: "We saw three", bold: "собак", correct: "dogs", ending: "on the street" },
  { beginning: "He saw", bold: "gallery", correct: "galleries", ending: "full of beautiful paintings" },
  { beginning: "They enjoyed", bold: "party", correct: "parties", ending: "every weekend during summer" },

  //lesson 19 Активний і пасивний стан
  { beginning: "The report", bold: "prepare (present)", correct: "is prepared", ending: "by the assistant every morning" },
  { beginning: "The packages", bold: "deliver (future)", correct: "will be delivered", ending: "by the courier" },
  { beginning: "The bridge", bold: "build (past)", correct: "was built", ending: "in just six months" },
  { beginning: "The documents", bold: "print (present)", correct: "are printed", ending: "in the office" },
  { beginning: "The movie", bold: "direct (past)", correct: "was directed", ending: "by a famous filmmaker" },
  { beginning: "The windows", bold: "clean (present)", correct: "are cleaned", ending: "every weekend" },
  { beginning: "The book", bold: "write (future)", correct: "will be written", ending: "in 2030" },
  { beginning: "The invitations", bold: "send (past)", correct: "were sent", ending: "yesterday" },

  //lesson 20 Модальні дієслова, конструкції Would і Used to
  { beginning: "You", bold: "may (можеш)", correct: "can", ending: "borrow my pen" },
  { beginning: "He", bold: "should (мусиш)", correct: "must", ending: "finish his homework" },
  { beginning: "They", bold: "can (можуть)", correct: "may", ending: "leave early today" },
  { beginning: "She", bold: "may (могла б)", correct: "could", ending: "help us with the project" },
  { beginning: "We", bold: "must (повинні)", correct: "should", ending: "eat more vegetables" },
  { beginning: "I", bold: "want (хотів би)", correct: "would like", ending: "some tea" },
  { beginning: "You", bold: "must (повинен був)", correct: "should have", ending: "called me earlier" },
  { beginning: "They", bold: "should (мають)", correct: "have to", ending: "wear uniforms at school" },

  //lesson 21 Наказові речення
  { beginning: "", bold: "Іди", correct: "Go", ending: "to your room" },
  { beginning: "", bold: "Слухай", correct: "Listen", ending: "to the teacher" },
  { beginning: "", bold: "Відкрий", correct: "Open", ending: "the window" },
  { beginning: "", bold: "Закрий", correct: "Close", ending: "the door gently" },
  { beginning: "", bold: "Пиши", correct: "Write", ending: "your name here" },
  { beginning: "", bold: "Чекай", correct: "Wait", ending: "for me outside" },
  { beginning: "", bold: "Читайте", correct: "Read", ending: "this paragraph carefully" },
  { beginning: "", bold: "Скажи", correct: "Tell", ending: "me the truth" },

  // lesson 22 Підрядні речення    
  { beginning: "The child", bold: "який", correct: "who", ending: "is playing outside is my nephew" },
  { beginning: "The picture", bold: "яка", correct: "which", ending: "hangs on the wall is beautiful" },
  { beginning: "The shoes", bold: "які", correct: "that", ending: "you bought are very comfortable" },
  { beginning: "The city", bold: "яке", correct: "which", ending: "we visited last year is amazing" },
  { beginning: "The man", bold: "який", correct: "who", ending: "helped us was very kind" },
  { beginning: "The cake", bold: "який", correct: "which", ending: "she baked smells delicious" },
  { beginning: "The student", bold: "який", correct: "who", ending: "answered first got a prize" },
  { beginning: "The river", bold: "яка", correct: "which", ending: "flows through the city is wide" },

    // lesson 23 Непряма мова

    // LESSON 19
    // { beginning: "I saw", bold: "(конкретну)", correct: "the", ending: "book on the desk" },
    // { beginning: "He opened", bold: "(найближче)", correct: "the", ending: "window to let fresh air in" },
    // { beginning: "She bought", bold: "(невідомо яке)", correct: "a", ending: "new dress yesterday" },
    // { beginning: "We saw", bold: "(якусь)", correct: "a", ending: "bird in the garden" },
    // { beginning: "They visited", bold: "(той)", correct: "the", ending: "museum downtown" },
    // { beginning: "She adopted", bold: "(не знаємо яке)", correct: "a", ending: "puppy from the shelter" },
    // { beginning: "I found", bold: "(ті, які загубив)", correct: "the", ending: "keys under the couch" },
    // { beginning: "He ate", bold: "(якийсь)", correct: "a", ending: "sandwich for lunch" },

    // LESSON 20
    // { beginning: "Do you want tea", bold: "(або)", correct: "or", ending: "coffee?" },
    // { beginning: "She bought apples", bold: "(і)", correct: "and", ending: "oranges at the market." },
    // { beginning: "He is smart", bold: "(але)", correct: "but", ending: "sometimes careless." },
    // { beginning: "It's cold", bold: "(але все ж)", correct: "yet", ending: "he went swimming." },
    // { beginning: "He was tired", bold: "(тому)", correct: "so", ending: "he went to bed early." },
    // { beginning: "We can go hiking", bold: "(або)", correct: "or", ending: "stay home and rest." },
    // { beginning: "They danced", bold: "(і)", correct: "and", ending: "sang all night." },
    // { beginning: "She studied hard", bold: "(тому)", correct: "so", ending: "she passed the test." },

    //lesson 24 Прості часи: повторення
    { beginning: "She", bold: "visit (future)", correct: "will visit", ending: "her grandmother tomorrow" },
  { beginning: "They", bold: "arrive (past)", correct: "arrived", ending: "late last night" },
  { beginning: "I", bold: "call (future)", correct: "will call", ending: "you when I get home" },
  { beginning: "He", bold: "finish (past)", correct: "finished", ending: "his homework before dinner" },
  { beginning: "We", bold: "leave (future)", correct: "will leave", ending: "early in the morning" },
  { beginning: "She", bold: "buy (past)", correct: "bought", ending: "a new dress yesterday" },
  { beginning: "They", bold: "travel (future)", correct: "will travel", ending: "to Spain next summer" },
  { beginning: "I", bold: "see (past)", correct: "saw", ending: "that movie last weekend" },

  //lesson 25 Тривалі часи: повторення
  { beginning: "She", bold: "cook (future)", correct: "will be cooking", ending: "dinner at 7 p.m." },
  { beginning: "They", bold: "watch (past)", correct: "were watching", ending: "a movie when I called" },
  { beginning: "He", bold: "read (present)", correct: "is reading", ending: "an interesting book now" },
  { beginning: "We", bold: "travel (future)", correct: "will be traveling", ending: "to Italy next week" },
  { beginning: "He", bold: "work (past)", correct: "was working", ending: "on his project all night" },
  { beginning: "She", bold: "study (present)", correct: "is studying", ending: "for the math test" },
  { beginning: "They", bold: "move (future)", correct: "will be moving", ending: "to a new apartment soon" },
  { beginning: "You", bold: "sleep (past)", correct: "were sleeping", ending: "when I got home" },

  //lesson 26 Теперішній доконаний і Теперішній доконаний тривалий: повторення - доробити
  { beginning: "She", bold: "visit", correct: "has visited", ending: "Paris several times" },
  { beginning: "They", bold: "finish", correct: "have finished", ending: "their homework already" },
  { beginning: "He", bold: "break", correct: "has broken", ending: "his phone again" },
  { beginning: "We", bold: "see", correct: "have seen", ending: "that movie before" },
  { beginning: "I", bold: "eat", correct: "have eaten", ending: "too much today" },
  { beginning: "You", bold: "win", correct: "have won", ending: "the competition!" },
  { beginning: "She", bold: "write", correct: "has written", ending: "a great story" },
  { beginning: "They", bold: "travel", correct: "have traveled", ending: "to many countries" },

  //lesson 27 Повторення всіх часів - перевірити
  { beginning: "He", bold: "run", correct: "is not running", ending: "in the park today" },
  { beginning: "", bold: "play", correct: "Are they playing", ending: "football now?" },
  { beginning: "She", bold: "study", correct: "is not studying", ending: "for the test tonight" },
  { beginning: "", bold: "cook", correct: "Was he cooking", ending: "dinner when you arrived?" },
  { beginning: "We", bold: "watch", correct: "are not watching", ending: "TV right now" },
  { beginning: "", bold: "talk", correct: "Were they talking", ending: "about the meeting?" },
  { beginning: "I", bold: "work", correct: "am not working", ending: "this weekend" },
  { beginning: "", bold: "drive", correct: "Will she be driving", ending: "to the party later?" },

  // LESSON 25
  // { beginning: "I", bold: "have", correct: "had", ending: "a great time at the party" },
  // { beginning: "She", bold: "do", correct: "did", ending: "all her homework yesterday" },
  // { beginning: "He", bold: "say", correct: "said", ending: "hello to everyone" },
  // { beginning: "They", bold: "go", correct: "went", ending: "to the beach last weekend" },
  // { beginning: "We", bold: "get", correct: "got", ending: "new phones last month" },
  // { beginning: "He", bold: "make", correct: "made", ending: "a cake for her birthday" },
  // { beginning: "I", bold: "know", correct: "knew", ending: "the answer to the question" },
  // { beginning: "She", bold: "think", correct: "thought", ending: "about the offer carefully" },

  // LESSON 26
  // { beginning: "The meeting starts", bold: "on", correct: "at", ending: "3 o'clock." },
  // { beginning: "She was born", bold: "at", correct: "on", ending: "Monday." },
  // { beginning: "We always go skiing", bold: "in", correct: "in", ending: "January." },
  // { beginning: "I saw him", bold: "in", correct: "on", ending: "Friday afternoon." },
  // { beginning: "They moved here", bold: "on", correct: "in", ending: "2015." },
  // { beginning: "The concert is", bold: "in", correct: "at", ending: "7 o'clock sharp." },
  // { beginning: "She graduated", bold: "at", correct: "in", ending: "2020." },
  // { beginning: "The party is", bold: "at", correct: "on", ending: "Saturday night." },

  // LESSON 27
  // { beginning: "The car is parked", bold: "behind (перед)", correct: "in front of", ending: "the house." },
  // { beginning: "The keys are", bold: "next to (позаду)", correct: "behind", ending: "the sofa." },
  // { beginning: "She sat", bold: "under (поруч з)", correct: "next to", ending: "her friend in class." },
  // { beginning: "The book is", bold: "under (на)", correct: "on", ending: "the table." },
  // { beginning: "The cat is", bold: "on (під)", correct: "under", ending: "the bed." },
  // { beginning: "The school is", bold: "next to (між)", correct: "between", ending: "the library and the park." },
  // { beginning: "The shoes are", bold: "on (під)", correct: "under", ending: "the chair." },
  // { beginning: "The lamp is", bold: "under (на)", correct: "on", ending: "the desk." },

  // LESSON 28
  // { beginning: "The", bold: "sheeps", correct: "sheep", ending: "are grazing in the field." },
  // { beginning: "We saw three", bold: "deers", correct: "deer", ending: "in the forest." },
  // { beginning: "He caught five", bold: "fishes", correct: "fish", ending: "this morning." },
  // { beginning: "Several", bold: "aircrafts", correct: "aircraft", ending: "were parked at the airport." },
  // { beginning: "The river is full of", bold: "salmons", correct: "salmon", ending: "during this season." },
  // { beginning: "This tool has many", bold: "meanses", correct: "means", ending: "of use." },
  // { beginning: "The desert is home to many", bold: "cactuses", correct: "cactus", ending: "of different shapes." },
  // { beginning: "Her", bold: "foots", correct: "feet", ending: "were tired after walking all day." },

  // LESSON 29
  // { beginning: "The documents", bold: "send (past)", correct: "were sent", ending: "yesterday." },
  // { beginning: "The letter", bold: "write (present)", correct: "is written", ending: "by the manager." },
  // { beginning: "The project", bold: "complete (future)", correct: "will be completed", ending: "by next week." },
  // { beginning: "The package", bold: "deliver (past)", correct: "was delivered", ending: "this morning." },
  // { beginning: "The invitations", bold: "print (present)", correct: "are printed", ending: "every Friday." },
  // { beginning: "The results", bold: "announce (future)", correct: "will be announced", ending: "tomorrow." },
  // { beginning: "The car", bold: "wash (past)", correct: "was washed", ending: "by Tom." },
  // { beginning: "The bills", bold: "pay (present)", correct: "are paid", ending: "at the end of each month." },

  //lesson 28 Рідковживані часи
  { beginning: "She", bold: "finish (past)", correct: "had finished", ending: "her work before dinner." },
  { beginning: "They", bold: "leave (future)", correct: "will have left", ending: "by the time we arrive." },
  { beginning: "I", bold: "read (past)", correct: "had read", ending: "the book before the test." },
  { beginning: "We", bold: "build (future)", correct: "will have built", ending: "the house by next year." },
  { beginning: "He", bold: "eat (past)", correct: "had eaten", ending: "before the guests came." },
  { beginning: "The team", bold: "win (future)", correct: "will have won", ending: "five games by then." },
  { beginning: "She", bold: "leave (past)", correct: "had left", ending: "when I called her." },
  { beginning: "They", bold: "complete (future)", correct: "will have completed", ending: "the project by Friday." },
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
  "Побудуйте ЗАПЕРЕЧНІ речення у тривалому часі, згідно вказівок в дужках",
  "Змініть дієслово на ЗАПЕРЕЧНУ форму теперішнього доконаного часу",
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


export const FixitExerciseData = sentences.map((value, index) => (
  {
    id: index + 1,
    lesson: Math.floor(index / 8) + 1,
    visibility: "hidden",
    input: "",
    instruction: instructions[Math.floor(index / 8)],
    sentence: {
      beginning: value.beginning,
      bold: value.bold,
      correct: value.correct,
      ending: value.ending
    }
  }
))
