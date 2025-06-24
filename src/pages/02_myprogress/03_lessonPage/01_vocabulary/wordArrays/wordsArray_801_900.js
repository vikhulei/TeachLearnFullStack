const wordsArray = [
  {
    "word": "original",
    "word_context": "idea",
    "translat": "оригінальна",
    "translat_context": "ідея"
  },
  {
    "word": "share",
    "word_context": "your thoughts",
    "translat": "поділись",
    "translat_context": "думками"
  },
  {
    "word": "station",
    "word_context": "platform",
    "translat": "станція",
    "translat_context": "платформа"
  },
  {
    "word": "dad",
    "word_context": "and mom",
    "translat": "тато",
    "translat_context": "і мама"
  },
  {
    "word": "bread",
    "word_context": "is fresh",
    "translat": "хліб",
    "translat_context": "свіжий"
  },
  {
    "word": "charge",
    "word_context": "your phone",
    "translat": "заряди",
    "translat_context": "телефон"
  },
  {
    "word": "proper",
    "word_context": "behavior",
    "translat": "належна",
    "translat_context": "поведінка"
  },
  {
    "word": "bar",
    "word_context": "of chocolate",
    "translat": "плитка",
    "translat_context": "шоколаду"
  },
  {
    "word": "offer",
    "word_context": "help",
    "translat": "запропонувати",
    "translat_context": "допомогу"
  },
  {
    "word": "segment",
    "word_context": "of orange",
    "translat": "часточка",
    "translat_context": "апельсина"
  },
  {
    "word": "slave",
    "word_context": "labor",
    "translat": "рабська",
    "translat_context": "праця"
  },
  {
    "word": "duck",
    "word_context": "pond",
    "translat": "качка",
    "translat_context": "на ставку"
  },
  {
    "word": "instant",
    "word_context": "reaction",
    "translat": "миттєва",
    "translat_context": "реакція"
  },
  {
    "word": "market",
    "word_context": "day",
    "translat": "ринковий",
    "translat_context": "день"
  },
  {
    "word": "degree",
    "word_context": "certificate",
    "translat": "диплом",
    "translat_context": "ступеня"
  },
  {
    "word": "populate",
    "word_context": "area",
    "translat": "заселяти",
    "translat_context": "територію"
  },
  {
    "word": "chick",
    "word_context": "hatching",
    "translat": "курча",
    "translat_context": "вилуплюється"
  },
  {
    "word": "dear",
    "word_context": "friend",
    "translat": "дорогий",
    "translat_context": "друг"
  },
  {
    "word": "enemy",
    "word_context": "forces",
    "translat": "ворожі",
    "translat_context": "сили"
  },
  {
    "word": "reply",
    "word_context": "quickly",
    "translat": "відповісти",
    "translat_context": "швидко"
  },
  {
    "word": "drink",
    "word_context": "water",
    "translat": "пити",
    "translat_context": "воду"
  },
  {
    "word": "occur",
    "word_context": "naturally",
    "translat": "виникати",
    "translat_context": "природно"
  },
  {
    "word": "support",
    "word_context": "each other",
    "translat": "підтримка",
    "translat_context": "один одного"
  },
  {
    "word": "speech",
    "word_context": "was moving",
    "translat": "промова",
    "translat_context": "була зворушлива"
  },
  {
    "word": "nature",
    "word_context": "walk",
    "translat": "прогулянка",
    "translat_context": "природою"
  },
  {
    "word": "range",
    "word_context": "of choices",
    "translat": "вибір",
    "translat_context": "варіантів"
  },
  {
    "word": "steam",
    "word_context": "engine",
    "translat": "паровий",
    "translat_context": "двигун"
  },
  {
    "word": "motion",
    "word_context": "sensors",
    "translat": "датчики",
    "translat_context": "руху"
  },
  {
    "word": "path",
    "word_context": "is narrow",
    "translat": "стежка",
    "translat_context": "вузька"
  },
  {
    "word": "liquid",
    "word_context": "form",
    "translat": "рідка",
    "translat_context": "форма"
  },
  {
    "word": "log",
    "word_context": "file",
    "translat": "журнал",
    "translat_context": "записів"
  },
  {
    "word": "meant",
    "word_context": "to be",
    "translat": "призначено",
    "translat_context": "бути"
  },
  {
    "word": "quotient",
    "word_context": "value",
    "translat": "значення",
    "translat_context": "частки"
  },
  {
    "word": "teeth",
    "word_context": "brushing",
    "translat": "чистити",
    "translat_context": "зуби"
  },
  {
    "word": "shell",
    "word_context": "on beach",
    "translat": "черепашка",
    "translat_context": "на пляжі"
  },
  {
    "word": "neck",
    "word_context": "pain",
    "translat": "біль",
    "translat_context": "у шиї"
  },
  {
    "word": "smile",
    "word_context": "bright",
    "translat": "усмішка",
    "translat_context": "яскрава"
  },
  {
    "word": "bright",
    "word_context": "light",
    "translat": "яскраве",
    "translat_context": "світло"
  },
  {
    "word": "quickly",
    "word_context": "run",
    "translat": "швидко",
    "translat_context": "бігти"
  },
  {
    "word": "gift",
    "word_context": "box",
    "translat": "подарункова",
    "translat_context": "коробка"
  },
  {
    "word": "choose",
    "word_context": "a name",
    "translat": "вибрати",
    "translat_context": "ім’я"
  },
  {
    "word": "knowledge",
    "word_context": "is power",
    "translat": "знання",
    "translat_context": "це сила"
  },
  {
    "word": "easy",
    "word_context": "task",
    "translat": "легке",
    "translat_context": "завдання"
  },
  {
    "word": "laugh",
    "word_context": "out loud",
    "translat": "сміятися",
    "translat_context": "вголос"
  },
  {
    "word": "truth",
    "word_context": "revealed",
    "translat": "правда",
    "translat_context": "розкрита"
  },
  {
    "word": "goal",
    "word_context": "scored",
    "translat": "забитий",
    "translat_context": "гол"
  },
  {
    "word": "health",
    "word_context": "benefits",
    "translat": "переваги",
    "translat_context": "для здоров'я"
  },
  {
    "word": "peace",
    "word_context": "talks",
    "translat": "мирні",
    "translat_context": "переговори"
  },
  {
    "word": "pride",
    "word_context": "and joy",
    "translat": "гордість",
    "translat_context": "і радість"
  },
  {
    "word": "risk",
    "word_context": "factor",
    "translat": "фактор",
    "translat_context": "ризику"
  },
  {
    "word": "scene",
    "word_context": "opens",
    "translat": "сцена",
    "translat_context": "починається"
  },
  {
    "word": "spark",
    "word_context": "fly",
    "translat": "іскра",
    "translat_context": "летить"
  },
  {
    "word": "spirit",
    "word_context": "of hope",
    "translat": "дух",
    "translat_context": "надії"
  },
  {
    "word": "style",
    "word_context": "choice",
    "translat": "вибір",
    "translat_context": "стилю"
  },
  {
    "word": "task",
    "word_context": "complete",
    "translat": "виконати",
    "translat_context": "завдання"
  },
  {
    "word": "youth",
    "word_context": "program",
    "translat": "програма",
    "translat_context": "для молоді"
  },
  {
    "word": "zone",
    "word_context": "entry",
    "translat": "вхід",
    "translat_context": "у зону"
  },
  {
    "word": "disappear",
    "word_context": "suddenly",
    "translat": "зникнути",
    "translat_context": "раптово"
  },
  {
    "word": "display",
    "word_context": "screen",
    "translat": "екран",
    "translat_context": "показу"
  },
  {
    "word": "float",
    "word_context": "in air",
    "translat": "плавати",
    "translat_context": "в повітрі"
  },
  {
    "word": "grab",
    "word_context": "a snack",
    "translat": "вхопити",
    "translat_context": "перекус"
  },
  {
    "word": "heal",
    "word_context": "the wound",
    "translat": "залікувати",
    "translat_context": "рану"
  },
  {
    "word": "lean",
    "word_context": "on me",
    "translat": "опертися",
    "translat_context": "на мене"
  },
  {
    "word": "leap",
    "word_context": "forward",
    "translat": "стрибок",
    "translat_context": "вперед"
  },
  {
    "word": "relax",
    "word_context": "now",
    "translat": "розслабся",
    "translat_context": "зараз"
  },
  {
    "word": "reveal",
    "word_context": "the truth",
    "translat": "розкрити",
    "translat_context": "правду"
  },
  {
    "word": "scream",
    "word_context": "loudly",
    "translat": "кричати",
    "translat_context": "голосно"
  },
  {
    "word": "snap",
    "word_context": "the twig",
    "translat": "зламати",
    "translat_context": "гілку"
  },
  {
    "word": "soar",
    "word_context": "high",
    "translat": "летіти",
    "translat_context": "високо"
  },
  {
    "word": "stab",
    "word_context": "the air",
    "translat": "вдарити",
    "translat_context": "у повітря"
  },
  {
    "word": "steal",
    "word_context": "the gem",
    "translat": "вкрасти",
    "translat_context": "коштовність"
  },
  {
    "word": "sway",
    "word_context": "gently",
    "translat": "хитатися",
    "translat_context": "ніжно"
  },
  {
    "word": "tap",
    "word_context": "the screen",
    "translat": "натисни",
    "translat_context": "на екран"
  },
  {
    "word": "trap",
    "word_context": "the mouse",
    "translat": "спіймати",
    "translat_context": "мишку"
  },
  {
    "word": "unwrap",
    "word_context": "the gift",
    "translat": "розгорни",
    "translat_context": "подарунок"
  },
  {
    "word": "announce",
    "word_context": "news",
    "translat": "оголосити",
    "translat_context": "новини"
  },
  {
    "word": "attract",
    "word_context": "attention",
    "translat": "привернути",
    "translat_context": "увагу"
  },
  {
    "word": "balance",
    "word_context": "beam",
    "translat": "балансувальна",
    "translat_context": "балка"
  },
  {
    "word": "convince",
    "word_context": "me",
    "translat": "переконати",
    "translat_context": "мене"
  },
  {
    "word": "detect",
    "word_context": "movement",
    "translat": "виявити",
    "translat_context": "рух"
  },
  {
    "word": "glance",
    "word_context": "quickly",
    "translat": "поглянути",
    "translat_context": "швидко"
  },
  {
    "word": "introduce",
    "word_context": "yourself",
    "translat": "представити",
    "translat_context": "себе"
  },
  {
    "word": "kick",
    "word_context": "the ball",
    "translat": "вдарити",
    "translat_context": "м’яч"
  },
  {
    "word": "knock",
    "word_context": "on door",
    "translat": "постукати",
    "translat_context": "у двері"
  },
  {
    "word": "lock",
    "word_context": "the door",
    "translat": "замкнути",
    "translat_context": "двері"
  },
  {
    "word": "pack",
    "word_context": "your bag",
    "translat": "спакувати",
    "translat_context": "сумку"
  },
  {
    "word": "pinch",
    "word_context": "of salt",
    "translat": "дрібка",
    "translat_context": "солі"
  },
  {
    "word": "predict",
    "word_context": "results",
    "translat": "передбачити",
    "translat_context": "результати"
  },
  {
    "word": "punch",
    "word_context": "hard",
    "translat": "вдарити",
    "translat_context": "сильно"
  },
  {
    "word": "react",
    "word_context": "calmly",
    "translat": "реагувати",
    "translat_context": "спокійно"
  },
  {
    "word": "reflect",
    "word_context": "light",
    "translat": "відбивати",
    "translat_context": "світло"
  },
  {
    "word": "replace",
    "word_context": "the part",
    "translat": "замінити",
    "translat_context": "деталь"
  },
  {
    "word": "scratch",
    "word_context": "the itch",
    "translat": "почухати",
    "translat_context": "свербіж"
  },
  {
    "word": "shock",
    "word_context": "expression",
    "translat": "шокове",
    "translat_context": "вираження"
  },
  {
    "word": "stitch",
    "word_context": "the tear",
    "translat": "зашити",
    "translat_context": "дірку"
  },
  {
    "word": "suspect",
    "word_context": "a crime",
    "translat": "підозрювати",
    "translat_context": "злочин"
  },
  {
    "word": "trace",
    "word_context": "a line",
    "translat": "обвести",
    "translat_context": "лінію"
  },
  {
    "word": "fade",
    "word_context": "away",
    "translat": "зникати",
    "translat_context": "поступово"
  },
  {
    "word": "persuade",
    "word_context": "him",
    "translat": "переконати",
    "translat_context": "його"
  },
  {
    "word": "slide",
    "word_context": "down",
    "translat": "сповзти",
    "translat_context": "вниз"
  }
];

export default wordsArray;