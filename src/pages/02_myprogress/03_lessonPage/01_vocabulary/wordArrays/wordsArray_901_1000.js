const wordsArray = [
  {
    "word": "cheer",
    "word_context": "the team",
    "translat": "підбадьорити",
    "translat_context": "команду"
  },
  {
    "word": "deliver",
    "word_context": "a package",
    "translat": "доставити",
    "translat_context": "посилку"
  },
  {
    "word": "disagree",
    "word_context": "strongly",
    "translat": "різко",
    "translat_context": "не погоджуватися"
  },
  {
    "word": "discover",
    "word_context": "a secret",
    "translat": "відкрити",
    "translat_context": "таємницю"
  },
  {
    "word": "obey",
    "word_context": "the rules",
    "translat": "підкорятися",
    "translat_context": "правилам"
  },
  {
    "word": "prefer",
    "word_context": "tea",
    "translat": "надавати перевагу",
    "translat_context": "чаю"
  },
  {
    "word": "regret",
    "word_context": "a decision",
    "translat": "шкодувати",
    "translat_context": "про рішення"
  },
  {
    "word": "seek",
    "word_context": "help",
    "translat": "шукати",
    "translat_context": "допомогу"
  },
  {
    "word": "shiver",
    "word_context": "from cold",
    "translat": "труситися",
    "translat_context": "від холоду"
  },
  {
    "word": "strengthen",
    "word_context": "muscles",
    "translat": "зміцнювати",
    "translat_context": "м'язи"
  },
  {
    "word": "succeed",
    "word_context": "in life",
    "translat": "досягти успіху",
    "translat_context": "в житті"
  },
  {
    "word": "suffer",
    "word_context": "pain",
    "translat": "страждати",
    "translat_context": "від болю"
  },
  {
    "word": "sweep",
    "word_context": "the floor",
    "translat": "підмести",
    "translat_context": "підлогу"
  },
  {
    "word": "wander",
    "word_context": "aimlessly",
    "translat": "блукати",
    "translat_context": "безцільно"
  },
  {
    "word": "whisper",
    "word_context": "a secret",
    "translat": "шепотіти",
    "translat_context": "таємницю"
  },
  {
    "word": "shift",
    "word_context": "gears",
    "translat": "перемикати",
    "translat_context": "передачі"
  },
  {
    "word": "terrify",
    "word_context": "the kids",
    "translat": "лякати",
    "translat_context": "дітей"
  },
  {
    "word": "encourage",
    "word_context": "students",
    "translat": "підтримувати",
    "translat_context": "студентів"
  },
  {
    "word": "judge",
    "word_context": "fairly",
    "translat": "судити",
    "translat_context": "справедливо"
  },
  {
    "word": "manage",
    "word_context": "a team",
    "translat": "керувати",
    "translat_context": "командою"
  },
  {
    "word": "merge",
    "word_context": "files",
    "translat": "об'єднати",
    "translat_context": "файли"
  },
  {
    "word": "sigh",
    "word_context": "deeply",
    "translat": "зітхнути",
    "translat_context": "глибоко"
  },
  {
    "word": "breathe",
    "word_context": "slowly",
    "translat": "дихати",
    "translat_context": "повільно"
  },
  {
    "word": "avoid",
    "word_context": "conflict",
    "translat": "уникати",
    "translat_context": "конфлікту"
  },
  {
    "word": "commit",
    "word_context": "a crime",
    "translat": "скоєти",
    "translat_context": "злочин"
  },
  {
    "word": "complain",
    "word_context": "loudly",
    "translat": "скаржитися",
    "translat_context": "голосно"
  },
  {
    "word": "dig",
    "word_context": "a hole",
    "translat": "копати",
    "translat_context": "яму"
  },
  {
    "word": "fail",
    "word_context": "the test",
    "translat": "зазнати невдачі",
    "translat_context": "на іспиті"
  },
  {
    "word": "fix",
    "word_context": "the car",
    "translat": "полагодити",
    "translat_context": "авто"
  },
  {
    "word": "gain",
    "word_context": "experience",
    "translat": "отримати",
    "translat_context": "досвід"
  },
  {
    "word": "limit",
    "word_context": "access",
    "translat": "обмежити",
    "translat_context": "доступ"
  },
  {
    "word": "obtain",
    "word_context": "permission",
    "translat": "отримати",
    "translat_context": "дозвіл"
  },
  {
    "word": "permit",
    "word_context": "entry",
    "translat": "дозволити",
    "translat_context": "вхід"
  },
  {
    "word": "quit",
    "word_context": "smoking",
    "translat": "кинути",
    "translat_context": "палити"
  },
  {
    "word": "repair",
    "word_context": "damage",
    "translat": "відремонтувати",
    "translat_context": "пошкодження"
  },
  {
    "word": "skip",
    "word_context": "a step",
    "translat": "пропустити",
    "translat_context": "крок"
  },
  {
    "word": "spin",
    "word_context": "around",
    "translat": "крутитися",
    "translat_context": "навколо"
  },
  {
    "word": "split",
    "word_context": "the bill",
    "translat": "розділити",
    "translat_context": "рахунок"
  },
  {
    "word": "spoil",
    "word_context": "the dinner",
    "translat": "зіпсувати",
    "translat_context": "вечерю"
  },
  {
    "word": "stain",
    "word_context": "the shirt",
    "translat": "забруднити",
    "translat_context": "сорочку"
  },
  {
    "word": "stir",
    "word_context": "the soup",
    "translat": "перемішати",
    "translat_context": "суп"
  },
  {
    "word": "apply",
    "word_context": "for job",
    "translat": "подати заявку",
    "translat_context": "на роботу"
  },
  {
    "word": "calm",
    "word_context": "your mind",
    "translat": "заспокоїти",
    "translat_context": "розум"
  },
  {
    "word": "fold",
    "word_context": "the paper",
    "translat": "скласти",
    "translat_context": "папір"
  },
  {
    "word": "handle",
    "word_context": "pressure",
    "translat": "справлятися",
    "translat_context": "з тиском"
  },
  {
    "word": "install",
    "word_context": "software",
    "translat": "встановити",
    "translat_context": "програму"
  },
  {
    "word": "melt",
    "word_context": "the ice",
    "translat": "розтопити",
    "translat_context": "лід"
  },
  {
    "word": "rely",
    "word_context": "on luck",
    "translat": "покладатися",
    "translat_context": "на удачу"
  },
  {
    "word": "spill",
    "word_context": "the juice",
    "translat": "пролити",
    "translat_context": "сік"
  },
  {
    "word": "struggle",
    "word_context": "to breathe",
    "translat": "важко",
    "translat_context": "дихати"
  },
  {
    "word": "stumble",
    "word_context": "on stone",
    "translat": "спіткнутися",
    "translat_context": "об камінь"
  },
  {
    "word": "tackle",
    "word_context": "a problem",
    "translat": "вирішити",
    "translat_context": "проблему"
  },
  {
    "word": "tremble",
    "word_context": "with fear",
    "translat": "тремтіти",
    "translat_context": "від страху"
  },
  {
    "word": "tumble",
    "word_context": "down stairs",
    "translat": "перекинутися",
    "translat_context": "сходами вниз"
  },
  {
    "word": "yell",
    "word_context": "loudly",
    "translat": "кричати",
    "translat_context": "голосно"
  },
  {
    "word": "demand",
    "word_context": "answers",
    "translat": "вимагати",
    "translat_context": "відповідей"
  },
  {
    "word": "deny",
    "word_context": "the truth",
    "translat": "заперечувати",
    "translat_context": "правду"
  },
  {
    "word": "examine",
    "word_context": "the evidence",
    "translat": "оглянути",
    "translat_context": "докази"
  },
  {
    "word": "expand",
    "word_context": "the business",
    "translat": "розширити",
    "translat_context": "бізнес"
  },
  {
    "word": "hang",
    "word_context": "a picture",
    "translat": "повісити",
    "translat_context": "картину"
  },
  {
    "word": "intend",
    "word_context": "to stay",
    "translat": "мати намір",
    "translat_context": "залишитись"
  },
  {
    "word": "lend",
    "word_context": "money",
    "translat": "позичити",
    "translat_context": "гроші"
  },
  {
    "word": "link",
    "word_context": "accounts",
    "translat": "зв'язати",
    "translat_context": "акаунти"
  },
  {
    "word": "mend",
    "word_context": "a sock",
    "translat": "залатати",
    "translat_context": "шкарпетку"
  },
  {
    "word": "present",
    "word_context": "a project",
    "translat": "представити",
    "translat_context": "проект"
  },
  {
    "word": "prevent",
    "word_context": "injuries",
    "translat": "запобігти",
    "translat_context": "травмам"
  },
  {
    "word": "remind",
    "word_context": "me later",
    "translat": "нагадати",
    "translat_context": "пізніше"
  },
  {
    "word": "respond",
    "word_context": "quickly",
    "translat": "відповісти",
    "translat_context": "швидко"
  },
  {
    "word": "sink",
    "word_context": "in water",
    "translat": "тонути",
    "translat_context": "у воді"
  },
  {
    "word": "surround",
    "word_context": "the area",
    "translat": "оточити",
    "translat_context": "територію"
  },
  {
    "word": "swing",
    "word_context": "the bat",
    "translat": "махнути",
    "translat_context": "битою"
  },
  {
    "word": "destroy",
    "word_context": "evidence",
    "translat": "знищити",
    "translat_context": "докази"
  },
  {
    "word": "employ",
    "word_context": "staff",
    "translat": "найняти",
    "translat_context": "персонал"
  },
  {
    "word": "enjoy",
    "word_context": "the meal",
    "translat": "насолоджуватися",
    "translat_context": "їжею"
  },
  {
    "word": "jog",
    "word_context": "in park",
    "translat": "бігти підтюпцем",
    "translat_context": "у парку"
  },
  {
    "word": "mention",
    "word_context": "her name",
    "translat": "згадати",
    "translat_context": "її ім’я"
  },
  {
    "word": "swallow",
    "word_context": "a pill",
    "translat": "проковтнути",
    "translat_context": "таблетку"
  },
  {
    "word": "accept",
    "word_context": "an offer",
    "translat": "прийняти",
    "translat_context": "пропозицію"
  },
  {
    "word": "adapt",
    "word_context": "quickly",
    "translat": "адаптуватися",
    "translat_context": "швидко"
  },
  {
    "word": "escape",
    "word_context": "from prison",
    "translat": "втекти",
    "translat_context": "з в'язниці"
  },
  {
    "word": "tempt",
    "word_context": "fate",
    "translat": "спокушати",
    "translat_context": "долю"
  },
  {
    "word": "wipe",
    "word_context": "the table",
    "translat": "витерти",
    "translat_context": "стіл"
  },
  {
    "word": "admire",
    "word_context": "her work",
    "translat": "захоплюватися",
    "translat_context": "її роботою"
  },
  {
    "word": "comfort",
    "word_context": "a friend",
    "translat": "підтримати",
    "translat_context": "друга"
  },
  {
    "word": "dare",
    "word_context": "to try",
    "translat": "наважитися",
    "translat_context": "спробувати"
  },
  {
    "word": "earn",
    "word_context": "money",
    "translat": "заробити",
    "translat_context": "гроші"
  },
  {
    "word": "endure",
    "word_context": "pain",
    "translat": "терпіти",
    "translat_context": "біль"
  },
  {
    "word": "explore",
    "word_context": "the cave",
    "translat": "досліджувати",
    "translat_context": "печеру"
  },
  {
    "word": "guard",
    "word_context": "the gate",
    "translat": "охороняти",
    "translat_context": "ворота"
  },
  {
    "word": "harm",
    "word_context": "the environment",
    "translat": "шкодити",
    "translat_context": "довкіллю"
  },
  {
    "word": "ignore",
    "word_context": "the call",
    "translat": "ігнорувати",
    "translat_context": "виклик"
  },
  {
    "word": "inform",
    "word_context": "the team",
    "translat": "повідомити",
    "translat_context": "команду"
  },
  {
    "word": "injure",
    "word_context": "a leg",
    "translat": "пошкодити",
    "translat_context": "ногу"
  },
  {
    "word": "inspire",
    "word_context": "others",
    "translat": "надихати",
    "translat_context": "інших"
  },
  {
    "word": "marry",
    "word_context": "young",
    "translat": "одружитися",
    "translat_context": "молодим"
  },
  {
    "word": "perform",
    "word_context": "on stage",
    "translat": "виступати",
    "translat_context": "на сцені"
  },
  {
    "word": "restore",
    "word_context": "order",
    "translat": "відновити",
    "translat_context": "порядок"
  },
  {
    "word": "retire",
    "word_context": "early",
    "translat": "піти у відставку",
    "translat_context": "рано"
  },
  {
    "word": "reward",
    "word_context": "effort",
    "translat": "винагородити",
    "translat_context": "зусилля"
  },
  {
    "word": "scare",
    "word_context": "children",
    "translat": "налякати",
    "translat_context": "дітей"
  }
];

export default wordsArray;