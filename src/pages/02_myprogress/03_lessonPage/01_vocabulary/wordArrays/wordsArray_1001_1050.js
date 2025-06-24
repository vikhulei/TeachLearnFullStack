const wordsArray = [
  {
    "word": "sort",
    "word_context": "by size",
    "translat": "сортувати",
    "translat_context": "за розміром"
  },
  {
    "word": "warn",
    "word_context": "about danger",
    "translat": "попередити",
    "translat_context": "про небезпеку"
  },
  {
    "word": "worry",
    "word_context": "too much",
    "translat": "турбуватися",
    "translat_context": "занадто сильно"
  },
  {
    "word": "alert",
    "word_context": "the guards",
    "translat": "сповістити",
    "translat_context": "охорону"
  },
  {
    "word": "advise",
    "word_context": "carefully",
    "translat": "радити",
    "translat_context": "обережно"
  },
  {
    "word": "assist",
    "word_context": "the patient",
    "translat": "допомогти",
    "translat_context": "пацієнту"
  },
  {
    "word": "confuse",
    "word_context": "the facts",
    "translat": "плутати",
    "translat_context": "факти"
  },
  {
    "word": "express",
    "word_context": "your feelings",
    "translat": "висловити",
    "translat_context": "почуття"
  },
  {
    "word": "impress",
    "word_context": "the judge",
    "translat": "вразити",
    "translat_context": "суддю"
  },
  {
    "word": "kiss",
    "word_context": "goodbye",
    "translat": "поцілувати",
    "translat_context": "на прощання"
  },
  {
    "word": "pause",
    "word_context": "the video",
    "translat": "призупинити",
    "translat_context": "відео"
  },
  {
    "word": "praise",
    "word_context": "the effort",
    "translat": "похвалити",
    "translat_context": "зусилля"
  },
  {
    "word": "promise",
    "word_context": "to help",
    "translat": "пообіцяти",
    "translat_context": "допомогти"
  },
  {
    "word": "publish",
    "word_context": "a book",
    "translat": "опублікувати",
    "translat_context": "книгу"
  },
  {
    "word": "punish",
    "word_context": "the child",
    "translat": "покарати",
    "translat_context": "дитину"
  },
  {
    "word": "refuse",
    "word_context": "the offer",
    "translat": "відмовитися",
    "translat_context": "від пропозиції"
  },
  {
    "word": "release",
    "word_context": "the bird",
    "translat": "відпустити",
    "translat_context": "пташку"
  },
  {
    "word": "resist",
    "word_context": "temptation",
    "translat": "протистояти",
    "translat_context": "спокусі"
  },
  {
    "word": "rush",
    "word_context": "to work",
    "translat": "поспішати",
    "translat_context": "на роботу"
  },
  {
    "word": "smash",
    "word_context": "the glass",
    "translat": "розбити",
    "translat_context": "скло"
  },
  {
    "word": "tease",
    "word_context": "the cat",
    "translat": "дражнити",
    "translat_context": "кота"
  },
  {
    "word": "toss",
    "word_context": "a coin",
    "translat": "підкинути",
    "translat_context": "монету"
  },
  {
    "word": "trust",
    "word_context": "your instincts",
    "translat": "довіряти",
    "translat_context": "інстинктам"
  },
  {
    "word": "twist",
    "word_context": "an ankle",
    "translat": "вивихнути",
    "translat_context": "щиколотку"
  },
  {
    "word": "celebrate",
    "word_context": "a birthday",
    "translat": "святкувати",
    "translat_context": "день народження"
  },
  {
    "word": "compete",
    "word_context": "in race",
    "translat": "змагатися",
    "translat_context": "в гонці"
  },
  {
    "word": "concentrate",
    "word_context": "hard",
    "translat": "зосередитися",
    "translat_context": "ретельно"
  },
  {
    "word": "educate",
    "word_context": "children",
    "translat": "навчати",
    "translat_context": "дітей"
  },
  {
    "word": "invite",
    "word_context": "friends",
    "translat": "запросити",
    "translat_context": "друзів"
  },
  {
    "word": "taste",
    "word_context": "the soup",
    "translat": "спробувати",
    "translat_context": "суп"
  },
  {
    "word": "argue",
    "word_context": "a point",
    "translat": "сперечатися",
    "translat_context": "з приводу"
  },
  {
    "word": "focus",
    "word_context": "attention",
    "translat": "зосередити",
    "translat_context": "увагу"
  },
  {
    "word": "hug",
    "word_context": "tightly",
    "translat": "обіймати",
    "translat_context": "міцно"
  },
  {
    "word": "murmur",
    "word_context": "softly",
    "translat": "шепотіти",
    "translat_context": "ніжно"
  },
  {
    "word": "pour",
    "word_context": "some tea",
    "translat": "налити",
    "translat_context": "чаю"
  },
  {
    "word": "pursue",
    "word_context": "a goal",
    "translat": "переслідувати",
    "translat_context": "мету"
  },
  {
    "word": "rescue",
    "word_context": "the dog",
    "translat": "врятувати",
    "translat_context": "собаку"
  },
  {
    "word": "shrug",
    "word_context": "your shoulders",
    "translat": "знизати",
    "translat_context": "плечима"
  },
  {
    "word": "deserve",
    "word_context": "respect",
    "translat": "заслуговувати",
    "translat_context": "на повагу"
  },
  {
    "word": "dive",
    "word_context": "into water",
    "translat": "пірнути",
    "translat_context": "у воду"
  },
  {
    "word": "forgive",
    "word_context": "mistakes",
    "translat": "пробачити",
    "translat_context": "помилки"
  },
  {
    "word": "save",
    "word_context": "a life",
    "translat": "врятувати",
    "translat_context": "життя"
  },
  {
    "word": "survive",
    "word_context": "a crash",
    "translat": "вижити",
    "translat_context": "в аварії"
  },
  {
    "word": "active",
    "word_context": "lifestyle",
    "translat": "активний",
    "translat_context": "спосіб життя"
  },
  {
    "word": "crawl",
    "word_context": "slowly",
    "translat": "повзти",
    "translat_context": "повільно"
  },
  {
    "word": "yawn",
    "word_context": "loudly",
    "translat": "позіхати",
    "translat_context": "голосно"
  },
  {
    "word": "amaze",
    "word_context": "the crowd",
    "translat": "вразити",
    "translat_context": "натовп"
  },
  {
    "word": "freeze",
    "word_context": "the moment",
    "translat": "заморозити",
    "translat_context": "момент"
  },
  {
    "word": "realize",
    "word_context": "the truth",
    "translat": "усвідомити",
    "translat_context": "правду"
  },
  {
    "word": "squeeze",
    "word_context": "the lemon",
    "translat": "вичавити",
    "translat_context": "лимон"
  }
];

export default wordsArray;