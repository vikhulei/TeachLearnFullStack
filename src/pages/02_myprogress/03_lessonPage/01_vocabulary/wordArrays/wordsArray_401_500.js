const wordsArray = [
  {
    "word": "brother",
    "word_context": "and sister",
    "translat": "брат",
    "translat_context": "і сестра"
  },
  {
    "word": "egg",
    "word_context": "is boiled",
    "translat": "яйце",
    "translat_context": "зварене"
  },
  {
    "word": "ride",
    "word_context": "a bike",
    "translat": "їхати",
    "translat_context": "на велосипеді"
  },
  {
    "word": "cell",
    "word_context": "division",
    "translat": "клітина",
    "translat_context": "ділиться"
  },
  {
    "word": "believe",
    "word_context": "in yourself",
    "translat": "вірити",
    "translat_context": "в себе"
  },
  {
    "word": "fraction",
    "word_context": "of pie",
    "translat": "частинка",
    "translat_context": "пирога"
  },
  {
    "word": "forest",
    "word_context": "path",
    "translat": "лісовий",
    "translat_context": "шлях"
  },
  {
    "word": "sit",
    "word_context": "down",
    "translat": "сісти",
    "translat_context": "долу"
  },
  {
    "word": "race",
    "word_context": "began",
    "translat": "гонка",
    "translat_context": "почалась"
  },
  {
    "word": "window",
    "word_context": "is open",
    "translat": "вікно",
    "translat_context": "відкрите"
  },
  {
    "word": "store",
    "word_context": "clerk",
    "translat": "магазин",
    "translat_context": "продавець"
  },
  {
    "word": "summer",
    "word_context": "vacation",
    "translat": "літня",
    "translat_context": "відпустка"
  },
  {
    "word": "train",
    "word_context": "arrived",
    "translat": "поїзд",
    "translat_context": "прибув"
  },
  {
    "word": "sleep",
    "word_context": "tight",
    "translat": "спати",
    "translat_context": "міцно"
  },
  {
    "word": "prove",
    "word_context": "your point",
    "translat": "довести",
    "translat_context": "точку зору"
  },
  {
    "word": "lone",
    "word_context": "wolf",
    "translat": "самотній",
    "translat_context": "вовк"
  },
  {
    "word": "leg",
    "word_context": "pain",
    "translat": "нога",
    "translat_context": "болить"
  },
  {
    "word": "exercise",
    "word_context": "daily",
    "translat": "вправи",
    "translat_context": "щоденні"
  },
  {
    "word": "wall",
    "word_context": "is high",
    "translat": "стіна",
    "translat_context": "висока"
  },
  {
    "word": "catch",
    "word_context": "the ball",
    "translat": "спіймай",
    "translat_context": "м’яч"
  },
  {
    "word": "mount",
    "word_context": "the bike",
    "translat": "сісти",
    "translat_context": "на велосипед"
  },
  {
    "word": "wish",
    "word_context": "granted",
    "translat": "бажання",
    "translat_context": "виконано"
  },
  {
    "word": "sky",
    "word_context": "is blue",
    "translat": "небо",
    "translat_context": "синє"
  },
  {
    "word": "board",
    "word_context": "game",
    "translat": "настільна",
    "translat_context": "гра"
  },
  {
    "word": "joy",
    "word_context": "and laughter",
    "translat": "радість",
    "translat_context": "і сміх"
  },
  {
    "word": "winter",
    "word_context": "coat",
    "translat": "зимове",
    "translat_context": "пальто"
  },
  {
    "word": "sat",
    "word_context": "quietly",
    "translat": "сидів",
    "translat_context": "тихо"
  },
  {
    "word": "written",
    "word_context": "by hand",
    "translat": "написано",
    "translat_context": "від руки"
  },
  {
    "word": "wild",
    "word_context": "animal",
    "translat": "дика",
    "translat_context": "тварина"
  },
  {
    "word": "instrument",
    "word_context": "plays well",
    "translat": "інструмент",
    "translat_context": "добре звучить"
  },
  {
    "word": "kept",
    "word_context": "a secret",
    "translat": "зберіг",
    "translat_context": "таємницю"
  },
  {
    "word": "glass",
    "word_context": "of water",
    "translat": "склянка",
    "translat_context": "води"
  },
  {
    "word": "grass",
    "word_context": "is green",
    "translat": "трава",
    "translat_context": "зелена"
  },
  {
    "word": "cow",
    "word_context": "in field",
    "translat": "корова",
    "translat_context": "на полі"
  },
  {
    "word": "job",
    "word_context": "interview",
    "translat": "співбесіда",
    "translat_context": "на роботу"
  },
  {
    "word": "edge",
    "word_context": "of cliff",
    "translat": "край",
    "translat_context": "обриву"
  },
  {
    "word": "sign",
    "word_context": "of peace",
    "translat": "знак",
    "translat_context": "миру"
  },
  {
    "word": "visit",
    "word_context": "the doctor",
    "translat": "відвідати",
    "translat_context": "лікаря"
  },
  {
    "word": "past",
    "word_context": "events",
    "translat": "минулі",
    "translat_context": "події"
  },
  {
    "word": "soft",
    "word_context": "pillow",
    "translat": "м’яка",
    "translat_context": "подушка"
  },
  {
    "word": "fun",
    "word_context": "activity",
    "translat": "весела",
    "translat_context": "активність"
  },
  {
    "word": "gas",
    "word_context": "station",
    "translat": "заправна",
    "translat_context": "станція"
  },
  {
    "word": "weather",
    "word_context": "forecast",
    "translat": "прогноз",
    "translat_context": "погоди"
  },
  {
    "word": "month",
    "word_context": "of July",
    "translat": "місяць",
    "translat_context": "липень"
  },
  {
    "word": "bear",
    "word_context": "is sleeping",
    "translat": "ведмідь",
    "translat_context": "спить"
  },
  {
    "word": "finish",
    "word_context": "line",
    "translat": "фінішна",
    "translat_context": "лінія"
  },
  {
    "word": "happy",
    "word_context": "ending",
    "translat": "щасливий",
    "translat_context": "кінець"
  },
  {
    "word": "hope",
    "word_context": "remains",
    "translat": "надія",
    "translat_context": "залишається"
  },
  {
    "word": "flower",
    "word_context": "blooms",
    "translat": "квітка",
    "translat_context": "цвіте"
  },
  {
    "word": "clothe",
    "word_context": "the baby",
    "translat": "одягати",
    "translat_context": "дитину"
  },
  {
    "word": "strange",
    "word_context": "noise",
    "translat": "дивний",
    "translat_context": "звук"
  },
  {
    "word": "gone",
    "word_context": "missing",
    "translat": "зник",
    "translat_context": "безвісти"
  },
  {
    "word": "jump",
    "word_context": "high",
    "translat": "стрибай",
    "translat_context": "високо"
  },
  {
    "word": "baby",
    "word_context": "is crying",
    "translat": "немовля",
    "translat_context": "плаче"
  },
  {
    "word": "village",
    "word_context": "life",
    "translat": "сільське",
    "translat_context": "життя"
  },
  {
    "word": "meet",
    "word_context": "friends",
    "translat": "зустріти",
    "translat_context": "друзів"
  },
  {
    "word": "root",
    "word_context": "system",
    "translat": "коренева",
    "translat_context": "система"
  },
  {
    "word": "buy",
    "word_context": "groceries",
    "translat": "купити",
    "translat_context": "продукти"
  },
  {
    "word": "raise",
    "word_context": "a hand",
    "translat": "підняти",
    "translat_context": "руку"
  },
  {
    "word": "solve",
    "word_context": "the puzzle",
    "translat": "вирішити",
    "translat_context": "головоломку"
  },
  {
    "word": "metal",
    "word_context": "box",
    "translat": "металева",
    "translat_context": "коробка"
  },
  {
    "word": "whether",
    "word_context": "or not",
    "translat": "чи",
    "translat_context": "ні"
  },
  {
    "word": "push",
    "word_context": "the button",
    "translat": "натисни",
    "translat_context": "кнопку"
  },
  {
    "word": "paragraph",
    "word_context": "long one",
    "translat": "абзац",
    "translat_context": "довгий"
  },
  {
    "word": "held",
    "word_context": "tight",
    "translat": "тримав",
    "translat_context": "міцно"
  },
  {
    "word": "hair",
    "word_context": "is short",
    "translat": "волосся",
    "translat_context": "коротке"
  },
  {
    "word": "describe",
    "word_context": "the object",
    "translat": "опиши",
    "translat_context": "предмет"
  },
  {
    "word": "cook",
    "word_context": "dinner",
    "translat": "готувати",
    "translat_context": "вечерю"
  },
  {
    "word": "floor",
    "word_context": "is clean",
    "translat": "підлога",
    "translat_context": "чиста"
  },
  {
    "word": "result",
    "word_context": "was great",
    "translat": "результат",
    "translat_context": "чудовий"
  },
  {
    "word": "burn",
    "word_context": "wood",
    "translat": "спалити",
    "translat_context": "деревину"
  },
  {
    "word": "hill",
    "word_context": "top",
    "translat": "верхівка",
    "translat_context": "пагорба"
  },
  {
    "word": "safe",
    "word_context": "place",
    "translat": "безпечне",
    "translat_context": "місце"
  },
  {
    "word": "cat",
    "word_context": "is sleeping",
    "translat": "кіт",
    "translat_context": "спить"
  },
  {
    "word": "century",
    "word_context": "ago",
    "translat": "століття",
    "translat_context": "тому"
  },
  {
    "word": "consider",
    "word_context": "this idea",
    "translat": "розглянь",
    "translat_context": "цю ідею"
  },
  {
    "word": "type",
    "word_context": "your name",
    "translat": "введи",
    "translat_context": "своє ім’я"
  },
  {
    "word": "law",
    "word_context": "school",
    "translat": "юридична",
    "translat_context": "школа"
  },
  {
    "word": "bit",
    "word_context": "of sugar",
    "translat": "трохи",
    "translat_context": "цукру"
  },
  {
    "word": "coast",
    "word_context": "view",
    "translat": "узбережжя",
    "translat_context": "вид"
  },
  {
    "word": "copy",
    "word_context": "the file",
    "translat": "копіювати",
    "translat_context": "файл"
  },
  {
    "word": "phrase",
    "word_context": "book",
    "translat": "фраза",
    "translat_context": "в книжці"
  },
  {
    "word": "silent",
    "word_context": "mode",
    "translat": "тихий",
    "translat_context": "режим"
  },
  {
    "word": "tall",
    "word_context": "building",
    "translat": "висока",
    "translat_context": "будівля"
  },
  {
    "word": "sand",
    "word_context": "castle",
    "translat": "пісочний",
    "translat_context": "замок"
  },
  {
    "word": "soil",
    "word_context": "is dry",
    "translat": "ґрунт",
    "translat_context": "сухий"
  },
  {
    "word": "roll",
    "word_context": "the dice",
    "translat": "кидай",
    "translat_context": "кубики"
  },
  {
    "word": "temperature",
    "word_context": "is high",
    "translat": "температура",
    "translat_context": "висока"
  },
  {
    "word": "finger",
    "word_context": "point",
    "translat": "палець",
    "translat_context": "вказує"
  },
  {
    "word": "industry",
    "word_context": "growth",
    "translat": "індустрія",
    "translat_context": "зростає"
  },
  {
    "word": "value",
    "word_context": "of time",
    "translat": "цінність",
    "translat_context": "часу"
  },
  {
    "word": "fight",
    "word_context": "begins",
    "translat": "бійка",
    "translat_context": "починається"
  },
  {
    "word": "lie",
    "word_context": "down",
    "translat": "лягти",
    "translat_context": "долу"
  },
  {
    "word": "beat",
    "word_context": "the drum",
    "translat": "бий",
    "translat_context": "барабан"
  },
  {
    "word": "excite",
    "word_context": "the crowd",
    "translat": "захопити",
    "translat_context": "натовп"
  },
  {
    "word": "natural",
    "word_context": "light",
    "translat": "природне",
    "translat_context": "світло"
  },
  {
    "word": "view",
    "word_context": "from above",
    "translat": "вид",
    "translat_context": "згори"
  },
  {
    "word": "sense",
    "word_context": "of smell",
    "translat": "відчуття",
    "translat_context": "запаху"
  },
  {
    "word": "ear",
    "word_context": "pain",
    "translat": "вухо",
    "translat_context": "болить"
  },
  {
    "word": "else",
    "word_context": "matters",
    "translat": "щось",
    "translat_context": "інше важливе"
  }
];

export default wordsArray;