const wordsArray = [
  {
    "word": "study",
    "word_context": "hard work",
    "translat": "навчання",
    "translat_context": "важка праця"
  },
  {
    "word": "learn",
    "word_context": "new skills",
    "translat": "вивчати",
    "translat_context": "нові навички"
  },
  {
    "word": "plant",
    "word_context": "a seed",
    "translat": "посадити",
    "translat_context": "насіння"
  },
  {
    "word": "cover",
    "word_context": "the table",
    "translat": "накрити",
    "translat_context": "стіл"
  },
  {
    "word": "food",
    "word_context": "is ready",
    "translat": "їжа",
    "translat_context": "готова"
  },
  {
    "word": "sun",
    "word_context": "is shining",
    "translat": "сонце",
    "translat_context": "світить"
  },
  {
    "word": "between",
    "word_context": "two options",
    "translat": "між",
    "translat_context": "двома варіантами"
  },
  {
    "word": "state",
    "word_context": "of mind",
    "translat": "стан",
    "translat_context": "розуму"
  },
  {
    "word": "keep",
    "word_context": "a secret",
    "translat": "зберігати",
    "translat_context": "таємницю"
  },
  {
    "word": "eye",
    "word_context": "contact",
    "translat": "очний",
    "translat_context": "контакт"
  },
  {
    "word": "last",
    "word_context": "chance",
    "translat": "останній",
    "translat_context": "шанс"
  },
  {
    "word": "thought",
    "word_context": "process",
    "translat": "думка",
    "translat_context": "процес"
  },
  {
    "word": "city",
    "word_context": "life",
    "translat": "міське",
    "translat_context": "життя"
  },
  {
    "word": "tree",
    "word_context": "is tall",
    "translat": "дерево",
    "translat_context": "високе"
  },
  {
    "word": "cross",
    "word_context": "the street",
    "translat": "переходити",
    "translat_context": "вулицю"
  },
  {
    "word": "farm",
    "word_context": "animals",
    "translat": "ферма",
    "translat_context": "тварини"
  },
  {
    "word": "hard",
    "word_context": "task",
    "translat": "важке",
    "translat_context": "завдання"
  },
  {
    "word": "start",
    "word_context": "again",
    "translat": "почати",
    "translat_context": "знову"
  },
  {
    "word": "story",
    "word_context": "telling",
    "translat": "історія",
    "translat_context": "оповідання"
  },
  {
    "word": "saw",
    "word_context": "a bird",
    "translat": "побачив",
    "translat_context": "пташку"
  },
  {
    "word": "far",
    "word_context": "away",
    "translat": "далеко",
    "translat_context": "відсюди"
  },
  {
    "word": "sea",
    "word_context": "waves",
    "translat": "море",
    "translat_context": "хвилі"
  },
  {
    "word": "draw",
    "word_context": "a picture",
    "translat": "намалювати",
    "translat_context": "малюнок"
  },
  {
    "word": "left",
    "word_context": "turn",
    "translat": "лівий",
    "translat_context": "поворот"
  },
  {
    "word": "late",
    "word_context": "arrival",
    "translat": "пізнє",
    "translat_context": "прибуття"
  },
  {
    "word": "run",
    "word_context": "fast",
    "translat": "бігти",
    "translat_context": "швидко"
  },
  {
    "word": "press",
    "word_context": "the button",
    "translat": "натисни",
    "translat_context": "кнопку"
  },
  {
    "word": "close",
    "word_context": "the door",
    "translat": "закрий",
    "translat_context": "двері"
  },
  {
    "word": "night",
    "word_context": "sky",
    "translat": "нічне",
    "translat_context": "небо"
  },
  {
    "word": "real",
    "word_context": "problem",
    "translat": "реальна",
    "translat_context": "проблема"
  },
  {
    "word": "life",
    "word_context": "lessons",
    "translat": "життєві",
    "translat_context": "уроки"
  },
  {
    "word": "north",
    "word_context": "wind",
    "translat": "північний",
    "translat_context": "вітер"
  },
  {
    "word": "open",
    "word_context": "the window",
    "translat": "відкрити",
    "translat_context": "вікно"
  },
  {
    "word": "seem",
    "word_context": "strange",
    "translat": "здається",
    "translat_context": "дивним"
  },
  {
    "word": "together",
    "word_context": "again",
    "translat": "разом",
    "translat_context": "знову"
  },
  {
    "word": "white",
    "word_context": "shirt",
    "translat": "біла",
    "translat_context": "сорочка"
  },
  {
    "word": "children",
    "word_context": "are playing",
    "translat": "діти",
    "translat_context": "граються"
  },
  {
    "word": "begin",
    "word_context": "now",
    "translat": "почати",
    "translat_context": "зараз"
  },
  {
    "word": "got",
    "word_context": "the job",
    "translat": "отримав",
    "translat_context": "роботу"
  },
  {
    "word": "walk",
    "word_context": "slowly",
    "translat": "йти",
    "translat_context": "повільно"
  },
  {
    "word": "example",
    "word_context": "given",
    "translat": "приклад",
    "translat_context": "наведений"
  },
  {
    "word": "ease",
    "word_context": "of use",
    "translat": "простота",
    "translat_context": "використання"
  },
  {
    "word": "paper",
    "word_context": "sheet",
    "translat": "аркуш",
    "translat_context": "паперу"
  },
  {
    "word": "group",
    "word_context": "of friends",
    "translat": "група",
    "translat_context": "друзів"
  },
  {
    "word": "always",
    "word_context": "on time",
    "translat": "завжди",
    "translat_context": "вчасно"
  },
  {
    "word": "music",
    "word_context": "is loud",
    "translat": "музика",
    "translat_context": "гучна"
  },
  {
    "word": "mark",
    "word_context": "the spot",
    "translat": "мітка",
    "translat_context": "місце"
  },
  {
    "word": "letter",
    "word_context": "from mom",
    "translat": "лист",
    "translat_context": "від мами"
  },
  {
    "word": "mile",
    "word_context": "ahead",
    "translat": "миля",
    "translat_context": "вперед"
  },
  {
    "word": "river",
    "word_context": "bank",
    "translat": "ріка",
    "translat_context": "берег"
  },
  {
    "word": "car",
    "word_context": "ride",
    "translat": "машина",
    "translat_context": "їзда"
  },
  {
    "word": "feet",
    "word_context": "are tired",
    "translat": "ноги",
    "translat_context": "втомлені"
  },
  {
    "word": "care",
    "word_context": "deeply",
    "translat": "піклуватися",
    "translat_context": "глибоко"
  },
  {
    "word": "book",
    "word_context": "to read",
    "translat": "книга",
    "translat_context": "для читання"
  },
  {
    "word": "carry",
    "word_context": "a bag",
    "translat": "нести",
    "translat_context": "сумку"
  },
  {
    "word": "took",
    "word_context": "a photo",
    "translat": "зробив",
    "translat_context": "фото"
  },
  {
    "word": "science",
    "word_context": "class",
    "translat": "наука",
    "translat_context": "урок"
  },
  {
    "word": "eat",
    "word_context": "dinner",
    "translat": "їсти",
    "translat_context": "вечерю"
  },
  {
    "word": "room",
    "word_context": "is clean",
    "translat": "кімната",
    "translat_context": "чиста"
  },
  {
    "word": "friend",
    "word_context": "forever",
    "translat": "друг",
    "translat_context": "назавжди"
  },
  {
    "word": "began",
    "word_context": "to rain",
    "translat": "почався",
    "translat_context": "дощ"
  },
  {
    "word": "idea",
    "word_context": "was great",
    "translat": "ідея",
    "translat_context": "була чудовою"
  },
  {
    "word": "fish",
    "word_context": "swimming",
    "translat": "риба",
    "translat_context": "плаває"
  },
  {
    "word": "mountain",
    "word_context": "climb",
    "translat": "гора",
    "translat_context": "сходження"
  },
  {
    "word": "stop",
    "word_context": "here",
    "translat": "зупинись",
    "translat_context": "тут"
  },
  {
    "word": "base",
    "word_context": "camp",
    "translat": "базовий",
    "translat_context": "табір"
  },
  {
    "word": "hear",
    "word_context": "the noise",
    "translat": "чути",
    "translat_context": "шум"
  },
  {
    "word": "horse",
    "word_context": "rider",
    "translat": "кінь",
    "translat_context": "вершник"
  },
  {
    "word": "cut",
    "word_context": "the paper",
    "translat": "різати",
    "translat_context": "папір"
  },
  {
    "word": "sure",
    "word_context": "thing",
    "translat": "точна",
    "translat_context": "річ"
  },
  {
    "word": "watch",
    "word_context": "TV",
    "translat": "дивитись",
    "translat_context": "телевізор"
  },
  {
    "word": "color",
    "word_context": "blue sky",
    "translat": "колір",
    "translat_context": "синє небо"
  },
  {
    "word": "face",
    "word_context": "to face",
    "translat": "обличчя",
    "translat_context": "в обличчя"
  },
  {
    "word": "wood",
    "word_context": "floor",
    "translat": "дерев’яна",
    "translat_context": "підлога"
  },
  {
    "word": "main",
    "word_context": "road",
    "translat": "головна",
    "translat_context": "дорога"
  },
  {
    "word": "enough",
    "word_context": "space",
    "translat": "достатньо",
    "translat_context": "місця"
  },
  {
    "word": "plain",
    "word_context": "truth",
    "translat": "проста",
    "translat_context": "правда"
  },
  {
    "word": "girl",
    "word_context": "next door",
    "translat": "дівчина",
    "translat_context": "поруч"
  },
  {
    "word": "usual",
    "word_context": "routine",
    "translat": "звичайна",
    "translat_context": "рутина"
  },
  {
    "word": "young",
    "word_context": "child",
    "translat": "молода",
    "translat_context": "дитина"
  },
  {
    "word": "ready",
    "word_context": "to go",
    "translat": "готовий",
    "translat_context": "йти"
  },
  {
    "word": "above",
    "word_context": "the clouds",
    "translat": "над",
    "translat_context": "хмарами"
  },
  {
    "word": "ever",
    "word_context": "since then",
    "translat": "відтоді",
    "translat_context": ""
  },
  {
    "word": "red",
    "word_context": "apple",
    "translat": "червоне",
    "translat_context": "яблуко"
  },
  {
    "word": "list",
    "word_context": "of items",
    "translat": "список",
    "translat_context": "речей"
  },
  {
    "word": "feel",
    "word_context": "happy",
    "translat": "відчувати",
    "translat_context": "радість"
  },
  {
    "word": "talk",
    "word_context": "later",
    "translat": "поговоримо",
    "translat_context": "пізніше"
  },
  {
    "word": "bird",
    "word_context": "song",
    "translat": "пташка",
    "translat_context": "співає"
  },
  {
    "word": "soon",
    "word_context": "enough",
    "translat": "скоро",
    "translat_context": "достатньо"
  },
  {
    "word": "body",
    "word_context": "language",
    "translat": "тіла",
    "translat_context": "мова"
  },
  {
    "word": "dog",
    "word_context": "is barking",
    "translat": "собака",
    "translat_context": "гавкає"
  },
  {
    "word": "family",
    "word_context": "dinner",
    "translat": "сімейна",
    "translat_context": "вечеря"
  },
  {
    "word": "direct",
    "word_context": "route",
    "translat": "прямий",
    "translat_context": "маршрут"
  },
  {
    "word": "pose",
    "word_context": "a threat",
    "translat": "становити",
    "translat_context": "загрозу"
  },
  {
    "word": "leave",
    "word_context": "now",
    "translat": "залишити",
    "translat_context": "зараз"
  },
  {
    "word": "song",
    "word_context": "is beautiful",
    "translat": "пісня",
    "translat_context": "красива"
  },
  {
    "word": "measure",
    "word_context": "distance",
    "translat": "вимірювати",
    "translat_context": "відстань"
  },
  {
    "word": "door",
    "word_context": "is open",
    "translat": "двері",
    "translat_context": "відкриті"
  },
  {
    "word": "product",
    "word_context": "launch",
    "translat": "продукт",
    "translat_context": "запуск"
  },
  {
    "word": "black",
    "word_context": "coffee",
    "translat": "чорна",
    "translat_context": "кава"
  }
];

export default wordsArray;