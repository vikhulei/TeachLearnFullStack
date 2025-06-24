const wordsArray = [
  {
    "word": "protect",
    "word_context": "the environment",
    "translat": "захищати",
    "translat_context": "довкілля"
  },
  {
    "word": "noon",
    "word_context": "sunlight",
    "translat": "полудневе",
    "translat_context": "сонце"
  },
  {
    "word": "locate",
    "word_context": "the key",
    "translat": "знайти",
    "translat_context": "ключ"
  },
  {
    "word": "ring",
    "word_context": "of gold",
    "translat": "перстень",
    "translat_context": "золота"
  },
  {
    "word": "character",
    "word_context": "trait",
    "translat": "риса",
    "translat_context": "характеру"
  },
  {
    "word": "insect",
    "word_context": "bite",
    "translat": "укус",
    "translat_context": "комахи"
  },
  {
    "word": "caught",
    "word_context": "a fish",
    "translat": "зловив",
    "translat_context": "рибу"
  },
  {
    "word": "period",
    "word_context": "of time",
    "translat": "період",
    "translat_context": "часу"
  },
  {
    "word": "indicate",
    "word_context": "a problem",
    "translat": "вказувати",
    "translat_context": "на проблему"
  },
  {
    "word": "radio",
    "word_context": "station",
    "translat": "радіо",
    "translat_context": "станція"
  },
  {
    "word": "spoke",
    "word_context": "clearly",
    "translat": "говорив",
    "translat_context": "чітко"
  },
  {
    "word": "atom",
    "word_context": "structure",
    "translat": "структура",
    "translat_context": "атому"
  },
  {
    "word": "human",
    "word_context": "rights",
    "translat": "права",
    "translat_context": "людини"
  },
  {
    "word": "history",
    "word_context": "lesson",
    "translat": "урок",
    "translat_context": "історії"
  },
  {
    "word": "effect",
    "word_context": "was strong",
    "translat": "ефект",
    "translat_context": "був сильним"
  },
  {
    "word": "electric",
    "word_context": "charge",
    "translat": "електричний",
    "translat_context": "заряд"
  },
  {
    "word": "expect",
    "word_context": "a call",
    "translat": "чекати",
    "translat_context": "дзвінка"
  },
  {
    "word": "crop",
    "word_context": "failure",
    "translat": "врожай",
    "translat_context": "не вдався"
  },
  {
    "word": "modern",
    "word_context": "design",
    "translat": "сучасний",
    "translat_context": "дизайн"
  },
  {
    "word": "element",
    "word_context": "of surprise",
    "translat": "елемент",
    "translat_context": "сюрпризу"
  },
  {
    "word": "hit",
    "word_context": "the target",
    "translat": "влучити",
    "translat_context": "в ціль"
  },
  {
    "word": "student",
    "word_context": "group",
    "translat": "група",
    "translat_context": "студентів"
  },
  {
    "word": "corner",
    "word_context": "shop",
    "translat": "магазин",
    "translat_context": "на розі"
  },
  {
    "word": "party",
    "word_context": "invitation",
    "translat": "запрошення",
    "translat_context": "на вечірку"
  },
  {
    "word": "supply",
    "word_context": "chain",
    "translat": "ланцюг",
    "translat_context": "постачання"
  },
  {
    "word": "bone",
    "word_context": "is broken",
    "translat": "кістка",
    "translat_context": "зламана"
  },
  {
    "word": "rail",
    "word_context": "track",
    "translat": "залізнична",
    "translat_context": "колія"
  },
  {
    "word": "imagine",
    "word_context": "a world",
    "translat": "уявити",
    "translat_context": "світ"
  },
  {
    "word": "provide",
    "word_context": "help",
    "translat": "надавати",
    "translat_context": "допомогу"
  },
  {
    "word": "agree",
    "word_context": "completely",
    "translat": "погоджуватися",
    "translat_context": "повністю"
  },
  {
    "word": "capital",
    "word_context": "city",
    "translat": "столиця",
    "translat_context": "міста"
  },
  {
    "word": "chair",
    "word_context": "is empty",
    "translat": "стілець",
    "translat_context": "порожній"
  },
  {
    "word": "danger",
    "word_context": "zone",
    "translat": "небезпечна",
    "translat_context": "зона"
  },
  {
    "word": "fruit",
    "word_context": "basket",
    "translat": "кошик",
    "translat_context": "фруктів"
  },
  {
    "word": "rich",
    "word_context": "flavor",
    "translat": "насичений",
    "translat_context": "смак"
  },
  {
    "word": "thick",
    "word_context": "walls",
    "translat": "товсті",
    "translat_context": "стіни"
  },
  {
    "word": "soldier",
    "word_context": "salutes",
    "translat": "солдат",
    "translat_context": "віддає честь"
  },
  {
    "word": "process",
    "word_context": "data",
    "translat": "обробка",
    "translat_context": "даних"
  },
  {
    "word": "operate",
    "word_context": "the machine",
    "translat": "керувати",
    "translat_context": "машиною"
  },
  {
    "word": "guess",
    "word_context": "again",
    "translat": "здогадайся",
    "translat_context": "знову"
  },
  {
    "word": "necessary",
    "word_context": "documents",
    "translat": "необхідні",
    "translat_context": "документи"
  },
  {
    "word": "sharp",
    "word_context": "knife",
    "translat": "гострий",
    "translat_context": "ніж"
  },
  {
    "word": "wing",
    "word_context": "of bird",
    "translat": "крило",
    "translat_context": "птаха"
  },
  {
    "word": "create",
    "word_context": "art",
    "translat": "створити",
    "translat_context": "мистецтво"
  },
  {
    "word": "neighbor",
    "word_context": "next door",
    "translat": "сусід",
    "translat_context": "поруч"
  },
  {
    "word": "wash",
    "word_context": "your hands",
    "translat": "мий",
    "translat_context": "руки"
  },
  {
    "word": "bat",
    "word_context": "cave",
    "translat": "кажан",
    "translat_context": "у печері"
  },
  {
    "word": "crowd",
    "word_context": "cheers",
    "translat": "натовп",
    "translat_context": "аплодує"
  },
  {
    "word": "corn",
    "word_context": "field",
    "translat": "поле",
    "translat_context": "кукурудзи"
  },
  {
    "word": "compare",
    "word_context": "prices",
    "translat": "порівнювати",
    "translat_context": "ціни"
  },
  {
    "word": "poem",
    "word_context": "was short",
    "translat": "вірш",
    "translat_context": "був короткий"
  },
  {
    "word": "string",
    "word_context": "attached",
    "translat": "нитка",
    "translat_context": "прикріплена"
  },
  {
    "word": "bell",
    "word_context": "rings",
    "translat": "дзвінок",
    "translat_context": "дзвонить"
  },
  {
    "word": "depend",
    "word_context": "on luck",
    "translat": "залежати",
    "translat_context": "від удачі"
  },
  {
    "word": "meat",
    "word_context": "is cooked",
    "translat": "м'ясо",
    "translat_context": "приготоване"
  },
  {
    "word": "rub",
    "word_context": "gently",
    "translat": "терти",
    "translat_context": "ніжно"
  },
  {
    "word": "tube",
    "word_context": "station",
    "translat": "метро",
    "translat_context": "станція"
  },
  {
    "word": "famous",
    "word_context": "actor",
    "translat": "відомий",
    "translat_context": "актор"
  },
  {
    "word": "dollar",
    "word_context": "bill",
    "translat": "купюра",
    "translat_context": "долара"
  },
  {
    "word": "stream",
    "word_context": "flows",
    "translat": "потік",
    "translat_context": "тече"
  },
  {
    "word": "fear",
    "word_context": "of dark",
    "translat": "страх",
    "translat_context": "темряви"
  },
  {
    "word": "sight",
    "word_context": "was clear",
    "translat": "зір",
    "translat_context": "був чіткий"
  },
  {
    "word": "thin",
    "word_context": "ice",
    "translat": "тонкий",
    "translat_context": "лід"
  },
  {
    "word": "triangle",
    "word_context": "shape",
    "translat": "форма",
    "translat_context": "трикутника"
  },
  {
    "word": "planet",
    "word_context": "Earth",
    "translat": "планета",
    "translat_context": "Земля"
  },
  {
    "word": "hurry",
    "word_context": "up",
    "translat": "поспішай",
    "translat_context": ""
  },
  {
    "word": "chief",
    "word_context": "officer",
    "translat": "головний",
    "translat_context": "офіцер"
  },
  {
    "word": "colony",
    "word_context": "of ants",
    "translat": "колонія",
    "translat_context": "мурах"
  },
  {
    "word": "clock",
    "word_context": "is ticking",
    "translat": "годинник",
    "translat_context": "тикає"
  },
  {
    "word": "mine",
    "word_context": "shaft",
    "translat": "шахта",
    "translat_context": "копальні"
  },
  {
    "word": "tie",
    "word_context": "your shoes",
    "translat": "зав’яжи",
    "translat_context": "взуття"
  },
  {
    "word": "enter",
    "word_context": "the room",
    "translat": "увійти",
    "translat_context": "в кімнату"
  },
  {
    "word": "major",
    "word_context": "change",
    "translat": "велика",
    "translat_context": "зміна"
  },
  {
    "word": "fresh",
    "word_context": "bread",
    "translat": "свіжий",
    "translat_context": "хліб"
  },
  {
    "word": "search",
    "word_context": "engine",
    "translat": "пошукова",
    "translat_context": "система"
  },
  {
    "word": "send",
    "word_context": "a message",
    "translat": "надіслати",
    "translat_context": "повідомлення"
  },
  {
    "word": "yellow",
    "word_context": "color",
    "translat": "жовтий",
    "translat_context": "колір"
  },
  {
    "word": "gun",
    "word_context": "shot",
    "translat": "постріл",
    "translat_context": "з рушниці"
  },
  {
    "word": "allow",
    "word_context": "access",
    "translat": "дозволити",
    "translat_context": "доступ"
  },
  {
    "word": "print",
    "word_context": "a document",
    "translat": "друкувати",
    "translat_context": "документ"
  },
  {
    "word": "dead",
    "word_context": "battery",
    "translat": "мертва",
    "translat_context": "батарея"
  },
  {
    "word": "spot",
    "word_context": "the error",
    "translat": "помітити",
    "translat_context": "помилку"
  },
  {
    "word": "desert",
    "word_context": "heat",
    "translat": "пустельна",
    "translat_context": "спека"
  },
  {
    "word": "suit",
    "word_context": "and tie",
    "translat": "костюм",
    "translat_context": "і краватка"
  },
  {
    "word": "current",
    "word_context": "situation",
    "translat": "поточна",
    "translat_context": "ситуація"
  },
  {
    "word": "lift",
    "word_context": "the box",
    "translat": "підняти",
    "translat_context": "коробку"
  },
  {
    "word": "rose",
    "word_context": "is red",
    "translat": "троянда",
    "translat_context": "червона"
  },
  {
    "word": "continue",
    "word_context": "working",
    "translat": "продовжуй",
    "translat_context": "працювати"
  },
  {
    "word": "block",
    "word_context": "of flats",
    "translat": "багатоквартирний",
    "translat_context": "будинок"
  },
  {
    "word": "chart",
    "word_context": "shows",
    "translat": "діаграма",
    "translat_context": "показує"
  },
  {
    "word": "hat",
    "word_context": "is new",
    "translat": "капелюх",
    "translat_context": "новий"
  },
  {
    "word": "sell",
    "word_context": "products",
    "translat": "продавати",
    "translat_context": "товари"
  },
  {
    "word": "success",
    "word_context": "comes",
    "translat": "успіх",
    "translat_context": "настає"
  },
  {
    "word": "company",
    "word_context": "meeting",
    "translat": "зустріч",
    "translat_context": "у компанії"
  },
  {
    "word": "subtract",
    "word_context": "numbers",
    "translat": "віднімати",
    "translat_context": "числа"
  },
  {
    "word": "event",
    "word_context": "today",
    "translat": "подія",
    "translat_context": "сьогодні"
  },
  {
    "word": "particular",
    "word_context": "case",
    "translat": "конкретний",
    "translat_context": "випадок"
  },
  {
    "word": "deal",
    "word_context": "agreed",
    "translat": "угода",
    "translat_context": "досягнута"
  },
  {
    "word": "swim",
    "word_context": "well",
    "translat": "плавати",
    "translat_context": "добре"
  },
  {
    "word": "term",
    "word_context": "ends",
    "translat": "семестр",
    "translat_context": "завершується"
  }
];

export default wordsArray;