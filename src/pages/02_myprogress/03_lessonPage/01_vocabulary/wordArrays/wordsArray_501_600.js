const wordsArray = [
  {
    "word": "broke",
    "word_context": "the glass",
    "translat": "розбив",
    "translat_context": "склянку"
  },
  {
    "word": "case",
    "word_context": "is closed",
    "translat": "справа",
    "translat_context": "закрита"
  },
  {
    "word": "middle",
    "word_context": "of day",
    "translat": "середина",
    "translat_context": "дня"
  },
  {
    "word": "kill",
    "word_context": "the noise",
    "translat": "усунути",
    "translat_context": "шум"
  },
  {
    "word": "son",
    "word_context": "and daughter",
    "translat": "син",
    "translat_context": "і донька"
  },
  {
    "word": "lake",
    "word_context": "view",
    "translat": "вид",
    "translat_context": "на озеро"
  },
  {
    "word": "moment",
    "word_context": "of truth",
    "translat": "момент",
    "translat_context": "істини"
  },
  {
    "word": "scale",
    "word_context": "weight",
    "translat": "вага",
    "translat_context": "на терезах"
  },
  {
    "word": "loud",
    "word_context": "sound",
    "translat": "гучний",
    "translat_context": "звук"
  },
  {
    "word": "spring",
    "word_context": "flowers",
    "translat": "весняні",
    "translat_context": "квіти"
  },
  {
    "word": "observe",
    "word_context": "the stars",
    "translat": "спостерігати",
    "translat_context": "за зірками"
  },
  {
    "word": "child",
    "word_context": "is crying",
    "translat": "дитина",
    "translat_context": "плаче"
  },
  {
    "word": "straight",
    "word_context": "line",
    "translat": "пряма",
    "translat_context": "лінія"
  },
  {
    "word": "consonant",
    "word_context": "sound",
    "translat": "приголосний",
    "translat_context": "звук"
  },
  {
    "word": "nation",
    "word_context": "grows",
    "translat": "нація",
    "translat_context": "зростає"
  },
  {
    "word": "dictionary",
    "word_context": "entry",
    "translat": "запис",
    "translat_context": "у словнику"
  },
  {
    "word": "milk",
    "word_context": "bottle",
    "translat": "пляшка",
    "translat_context": "молока"
  },
  {
    "word": "speed",
    "word_context": "limit",
    "translat": "обмеження",
    "translat_context": "швидкості"
  },
  {
    "word": "method",
    "word_context": "used",
    "translat": "метод",
    "translat_context": "застосовано"
  },
  {
    "word": "organ",
    "word_context": "donor",
    "translat": "донор",
    "translat_context": "органів"
  },
  {
    "word": "pay",
    "word_context": "the bill",
    "translat": "оплатити",
    "translat_context": "рахунок"
  },
  {
    "word": "age",
    "word_context": "group",
    "translat": "вікова",
    "translat_context": "група"
  },
  {
    "word": "section",
    "word_context": "of text",
    "translat": "розділ",
    "translat_context": "тексту"
  },
  {
    "word": "dress",
    "word_context": "code",
    "translat": "дрес",
    "translat_context": "код"
  },
  {
    "word": "cloud",
    "word_context": "cover",
    "translat": "хмарне",
    "translat_context": "покриття"
  },
  {
    "word": "surprise",
    "word_context": "party",
    "translat": "сюрпризна",
    "translat_context": "вечірка"
  },
  {
    "word": "quiet",
    "word_context": "room",
    "translat": "тиха",
    "translat_context": "кімната"
  },
  {
    "word": "stone",
    "word_context": "wall",
    "translat": "кам’яна",
    "translat_context": "стіна"
  },
  {
    "word": "tiny",
    "word_context": "insect",
    "translat": "маленька",
    "translat_context": "комаха"
  },
  {
    "word": "climb",
    "word_context": "the hill",
    "translat": "піднятися",
    "translat_context": "на пагорб"
  },
  {
    "word": "cool",
    "word_context": "breeze",
    "translat": "прохолодний",
    "translat_context": "вітерець"
  },
  {
    "word": "design",
    "word_context": "idea",
    "translat": "дизайн",
    "translat_context": "ідея"
  },
  {
    "word": "poor",
    "word_context": "decision",
    "translat": "погане",
    "translat_context": "рішення"
  },
  {
    "word": "lot",
    "word_context": "of fun",
    "translat": "багато",
    "translat_context": "веселощів"
  },
  {
    "word": "experiment",
    "word_context": "results",
    "translat": "результати",
    "translat_context": "експерименту"
  },
  {
    "word": "bottom",
    "word_context": "shelf",
    "translat": "нижня",
    "translat_context": "полиця"
  },
  {
    "word": "key",
    "word_context": "to door",
    "translat": "ключ",
    "translat_context": "до дверей"
  },
  {
    "word": "iron",
    "word_context": "fence",
    "translat": "залізна",
    "translat_context": "огорожа"
  },
  {
    "word": "single",
    "word_context": "word",
    "translat": "одне",
    "translat_context": "слово"
  },
  {
    "word": "stick",
    "word_context": "to plan",
    "translat": "дотримуйся",
    "translat_context": "плану"
  },
  {
    "word": "flat",
    "word_context": "roof",
    "translat": "плоский",
    "translat_context": "дах"
  },
  {
    "word": "skin",
    "word_context": "care",
    "translat": "догляд",
    "translat_context": "за шкірою"
  },
  {
    "word": "crease",
    "word_context": "line",
    "translat": "складка",
    "translat_context": "лінії"
  },
  {
    "word": "hole",
    "word_context": "in sock",
    "translat": "дірка",
    "translat_context": "в шкарпетці"
  },
  {
    "word": "trade",
    "word_context": "agreement",
    "translat": "торгова",
    "translat_context": "угода"
  },
  {
    "word": "melody",
    "word_context": "plays",
    "translat": "мелодія",
    "translat_context": "грає"
  },
  {
    "word": "trip",
    "word_context": "abroad",
    "translat": "подорож",
    "translat_context": "за кордон"
  },
  {
    "word": "office",
    "word_context": "job",
    "translat": "робота",
    "translat_context": "в офісі"
  },
  {
    "word": "receive",
    "word_context": "a gift",
    "translat": "отримати",
    "translat_context": "подарунок"
  },
  {
    "word": "row",
    "word_context": "of seats",
    "translat": "ряд",
    "translat_context": "сидінь"
  },
  {
    "word": "mouth",
    "word_context": "is open",
    "translat": "рот",
    "translat_context": "відкритий"
  },
  {
    "word": "exact",
    "word_context": "match",
    "translat": "точна",
    "translat_context": "відповідність"
  },
  {
    "word": "symbol",
    "word_context": "of love",
    "translat": "символ",
    "translat_context": "кохання"
  },
  {
    "word": "die",
    "word_context": "young",
    "translat": "померти",
    "translat_context": "молодим"
  },
  {
    "word": "least",
    "word_context": "expected",
    "translat": "найменше",
    "translat_context": "очікуване"
  },
  {
    "word": "trouble",
    "word_context": "maker",
    "translat": "порушник",
    "translat_context": "порядку"
  },
  {
    "word": "shout",
    "word_context": "loudly",
    "translat": "кричати",
    "translat_context": "гучно"
  },
  {
    "word": "except",
    "word_context": "Mondays",
    "translat": "крім",
    "translat_context": "понеділків"
  },
  {
    "word": "wrote",
    "word_context": "a book",
    "translat": "написав",
    "translat_context": "книгу"
  },
  {
    "word": "seed",
    "word_context": "planted",
    "translat": "насіння",
    "translat_context": "посіяне"
  },
  {
    "word": "tone",
    "word_context": "of voice",
    "translat": "тон",
    "translat_context": "голосу"
  },
  {
    "word": "join",
    "word_context": "a team",
    "translat": "приєднатися",
    "translat_context": "до команди"
  },
  {
    "word": "suggest",
    "word_context": "a plan",
    "translat": "запропонувати",
    "translat_context": "план"
  },
  {
    "word": "clean",
    "word_context": "room",
    "translat": "прибрати",
    "translat_context": "кімнату"
  },
  {
    "word": "break",
    "word_context": "the silence",
    "translat": "порушити",
    "translat_context": "мовчання"
  },
  {
    "word": "lady",
    "word_context": "in red",
    "translat": "пані",
    "translat_context": "в червоному"
  },
  {
    "word": "yard",
    "word_context": "work",
    "translat": "робота",
    "translat_context": "в дворі"
  },
  {
    "word": "rise",
    "word_context": "in prices",
    "translat": "зростання",
    "translat_context": "цін"
  },
  {
    "word": "bad",
    "word_context": "news",
    "translat": "погані",
    "translat_context": "новини"
  },
  {
    "word": "blow",
    "word_context": "the candle",
    "translat": "задути",
    "translat_context": "свічку"
  },
  {
    "word": "oil",
    "word_context": "spill",
    "translat": "розлив",
    "translat_context": "нафти"
  },
  {
    "word": "blood",
    "word_context": "donor",
    "translat": "донор",
    "translat_context": "крові"
  },
  {
    "word": "touch",
    "word_context": "screen",
    "translat": "сенсорний",
    "translat_context": "екран"
  },
  {
    "word": "grew",
    "word_context": "fast",
    "translat": "зростав",
    "translat_context": "швидко"
  },
  {
    "word": "cent",
    "word_context": "coin",
    "translat": "монета",
    "translat_context": "цент"
  },
  {
    "word": "mix",
    "word_context": "ingredients",
    "translat": "змішати",
    "translat_context": "інгредієнти"
  },
  {
    "word": "team",
    "word_context": "effort",
    "translat": "командна",
    "translat_context": "робота"
  },
  {
    "word": "wire",
    "word_context": "connection",
    "translat": "дротове",
    "translat_context": "з'єднання"
  },
  {
    "word": "cost",
    "word_context": "estimate",
    "translat": "оцінка",
    "translat_context": "вартості"
  },
  {
    "word": "lost",
    "word_context": "keys",
    "translat": "загублені",
    "translat_context": "ключі"
  },
  {
    "word": "brown",
    "word_context": "coat",
    "translat": "коричневе",
    "translat_context": "пальто"
  },
  {
    "word": "wear",
    "word_context": "shoes",
    "translat": "взуй",
    "translat_context": "взуття"
  },
  {
    "word": "garden",
    "word_context": "tools",
    "translat": "садові",
    "translat_context": "інструменти"
  },
  {
    "word": "equal",
    "word_context": "rights",
    "translat": "рівні",
    "translat_context": "права"
  },
  {
    "word": "sent",
    "word_context": "a letter",
    "translat": "надіслав",
    "translat_context": "лист"
  },
  {
    "word": "fell",
    "word_context": "down",
    "translat": "впав",
    "translat_context": "долу"
  },
  {
    "word": "fit",
    "word_context": "perfectly",
    "translat": "підходить",
    "translat_context": "ідеально"
  },
  {
    "word": "flow",
    "word_context": "of water",
    "translat": "потік",
    "translat_context": "води"
  },
  {
    "word": "fair",
    "word_context": "trade",
    "translat": "чесна",
    "translat_context": "торгівля"
  },
  {
    "word": "bank",
    "word_context": "account",
    "translat": "банківський",
    "translat_context": "рахунок"
  },
  {
    "word": "collect",
    "word_context": "stamps",
    "translat": "збирати",
    "translat_context": "марки"
  },
  {
    "word": "control",
    "word_context": "panel",
    "translat": "панель",
    "translat_context": "керування"
  },
  {
    "word": "decimal",
    "word_context": "point",
    "translat": "десяткова",
    "translat_context": "крапка"
  },
  {
    "word": "woman",
    "word_context": "speaks",
    "translat": "жінка",
    "translat_context": "говорить"
  },
  {
    "word": "captain",
    "word_context": "of ship",
    "translat": "капітан",
    "translat_context": "корабля"
  },
  {
    "word": "practice",
    "word_context": "daily",
    "translat": "практика",
    "translat_context": "щоденна"
  },
  {
    "word": "separate",
    "word_context": "rooms",
    "translat": "окремі",
    "translat_context": "кімнати"
  },
  {
    "word": "difficult",
    "word_context": "choice",
    "translat": "важкий",
    "translat_context": "вибір"
  },
  {
    "word": "doctor",
    "word_context": "arrived",
    "translat": "лікар",
    "translat_context": "прибув"
  },
  {
    "word": "please",
    "word_context": "sit",
    "translat": "будь ласка",
    "translat_context": "сідайте"
  }
];

export default wordsArray;