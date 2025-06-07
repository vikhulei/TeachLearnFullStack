
const sentences = [
    // LESSON 1
    { beginning: "", bold: "do - [dou]?", correct: "ду [du:]", ending: "" },
    { beginning: "", bold: "some - [soum]?", correct: "сам [sʌm]", ending: "" },
    { beginning: "", bold: "people - ?", correct: "піпл [pi:pl]", ending: "" },
    { beginning: "", bold: "see - [si:]?", correct: "сі [si:]", ending: "" },
    { beginning: "", bold: "most - [most]?", correct: "моуст [moust]", ending: "" },
    { beginning: "", bold: "what - [whæt]?", correct: "увот [wot]", ending: "" },
    { beginning: "", bold: "through - ?", correct: "тсру [θru:]", ending: "" },
    { beginning: "", bold: "also - [ælsou]?", correct: "олсоу [olsou]", ending: "" },

    //LESSON 2

    { beginning: "I", bold: "to be (зараз)", correct: "am", ending: "a student " },
    { beginning: "You", bold: "to be (в минулому)", correct: "were", ending: "a worker" },
    { beginning: "He", bold: "to be (завтра)", correct: "will be", ending: "at school" },
    { beginning: "She", bold: "to be (зараз)", correct: "is", ending: "happy" },
    { beginning: "We", bold: "to be (вчора)", correct: "were", ending: "at home" },
    { beginning: "Students", bold: "to be not (зараз)", correct: "are not", ending: "in the class" },
    { beginning: "The boy", bold: "to be not (завтра)", correct: "will not be", ending: "at work" },
    { beginning: "We", bold: "to be (зараз)", correct: "are", ending: "friends" },

    //LESSON 3
    { beginning: "I", bold: "find", correct: "find", ending: "this book interesting" },
    { beginning: "She", bold: "eat", correct: "eats", ending: "too much sugar" },
    { beginning: "It", bold: "take", correct: "takes", ending: "a lot of time" },
    { beginning: "I", bold: "want", correct: "want", ending: "a new phone" },
    { beginning: "This message", bold: "sound", correct: "sounds", ending: "very important" },
    { beginning: "My family", bold: "live", correct: "lives", ending: "in the city" },
    { beginning: "He", bold: "give", correct: "gives", ending: "a good example" },
    { beginning: "I", bold: "listen", correct: "listen", ending: "to the music" },
    //LESSON 4
    { beginning: "You", bold: "make", correct: "will make", ending: "the right decision" },
    { beginning: "She", bold: "support", correct: "will support", ending: "you" },
    { beginning: "They", bold: "install", correct: "will install", ending: "a new system" },
    { beginning: "We", bold: "talk", correct: "will talk", ending: "after the meeting" },
    { beginning: "He", bold: "buy", correct: "will buy", ending: "a new computer" },
    { beginning: "I", bold: "do", correct: "will do", ending: "my best to help you" },
    { beginning: "Your life", bold: "change", correct: "will change", ending: "for the better" },
    { beginning: "Since you are here, we", bold: "start", correct: "will start", ending: "the new project" },
    // LESSON 5
    { beginning: "They", bold: "end", correct: "ended", ending: "the meeting" },
    { beginning: "She", bold: "follow", correct: "followed", ending: "the new method" },
    { beginning: "He never", bold: "imagine", correct: "imagined", ending: "such a result" },
    { beginning: "We", bold: "use", correct: "used", ending: "less water last week" },
    { beginning: "The children", bold: "play", correct: "played", ending: "in the yard all day" },
    { beginning: "She", bold: "be", correct: "was", ending: "able to the finish the project" },
    { beginning: "They", bold: "clime", correct: "climed", ending: "the hilltop" },
    { beginning: "He", bold: "point", correct: "pointed", ending: "at the map" },

    // LESSON 6
    { beginning: "She", bold: "bring", correct: "brought", ending: "her book" },
    { beginning: "He", bold: "choose", correct: "chose", ending: "the red shirt" },
    { beginning: "They", bold: "come", correct: "came", ending: "to the concert late" },
    { beginning: "I", bold: "drink", correct: "drank", ending: "a glass of water" },
    { beginning: "We", bold: "drive", correct: "drove", ending: "to the city" },
    { beginning: "The bird", bold: "fly", correct: "flew", ending: "over the trees" },
    { beginning: "He", bold: "forget", correct: "forgot", ending: "to do his homework" },
    { beginning: "She", bold: "give", correct: "gave", ending: "me a nice gift" },

    // LESSON 7
    { beginning: "The girl", bold: "get (past)", correct: "did not get", ending: "the job" },
    { beginning: "They", bold: "play (future)", correct: "will not play", ending: "at the party" },
    { beginning: "He", bold: "meet (present)", correct: "do not meet", ending: "every day" },
    { beginning: "I", bold: "understand (past)", correct: "did not understand", ending: "the question" },
    { beginning: "We", bold: "stop (future)", correct: "will not stop", ending: "there" },
    { beginning: "She", bold: "bring", correct: "does not bring", ending: "the books to school" },
    { beginning: "I", bold: "read (past)", correct: "did not read", ending: "the message carefully" },
    { beginning: "He", bold: "arrive (future)", correct: "will not arrive", ending: "for the meeting" },

    // LESSON 8
    { beginning: "They", bold: "stay", correct: "were staying", ending: "at home all weekend" },
    { beginning: "He", bold: "feel", correct: "was feeling", ending: "bad about his decision" },
    { beginning: "I", bold: "eat", correct: "was eating", ending: "the cake when they arrived" },
    { beginning: "We", bold: "discuss", correct: "were discussing", ending: "the theory in the class" },
    { beginning: "She", bold: "prepare", correct: "was preparing", ending: "dinner for her friends" },
    { beginning: "The students", bold: "study", correct: "were studying", ending: "law all evening" },
    { beginning: "She", bold: "cook", correct: "was cooking", ending: "food when I called" },
    { beginning: "The boys", bold: "put", correct: "were putting", ending: "the books on the shelf" },

    // LESSON 9
    { beginning: "The bird", bold: "sing (past)", correct: "was not singing", ending: "in the morning" },
    { beginning: "The guide", bold: "explain (present)", correct: "is not explaining", ending: "it clearly" },
    { beginning: "They", bold: "provide (future)", correct: "will not be providing", ending: "enough information" },
    { beginning: "She", bold: "change (past)", correct: "was not changing", ending: "her opinion" },
    { beginning: "He", bold: "show (future)", correct: "will not be showing", ending: "interest in this topic" },
    { beginning: "We", bold: "study (present)", correct: "are not studying", ending: "literature at this lesson" },
    { beginning: "I", bold: "visit (past)", correct: "was not visiting", ending: "them last month" },
    { beginning: "They", bold: "solve (future)", correct: "will not be solving", ending: "the problem correctly" },

    // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 11
  { "beginning": "The chefs", "bold": "cook (present)", "correct": "are cooking", "ending": "dinner right now" },
  { "beginning": "The scientists", "bold": "determine (past)", "correct": "were determining", "ending": "the cause of the issue yesterday" },
  { "beginning": "People", "bold": "discuss (future)", "correct": "will be discussing", "ending": "the future during the meeting" },
  { "beginning": "The engineers", "bold": "visit (present)", "correct": "are visiting", "ending": "the construction site today" },
  { "beginning": "The team", "bold": "look (past)", "correct": "were looking", "ending": "for an alternative to the broken part" },
  { "beginning": "They", "bold": "meet (future)", "correct": "will be meeting", "ending": "the demand by next month" },
  { "beginning": "The girl", "bold": "wonder (present)", "correct": "is wondering", "ending": "if she ever tells the truth" },
  { "beginning": "The athletes", "bold": "exercise (future)", "correct": "will be exercising", "ending": "early tomorrow morning" },

        // LESSON 12
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

        // LESSON 10
    { beginning: "She", bold: "find", correct: "has not found", ending: "her card" },
    { beginning: "They", bold: "face", correct: "have not faced", ending: "any difficulties so far" },
    { beginning: "We", bold: "include", correct: "have not included", ending: "Sarah in the list" },
    { beginning: "He", bold: "make", correct: "has not made", ending: "a list of items to buy" },
    { beginning: "I", bold: "change", correct: "have not changed", ending: "my mind about the trip" },
    { beginning: "She", bold: "mention", correct: "has not mentioned", ending: "any reason" },
    { beginning: "You", bold: "see", correct: "have not seen", ending: "the real problem yet" },
    { beginning: "I", bold: "try", correct: "have not tried", ending: "various solutions yet" },

]

export const FixitExerciseData = sentences.map((value, index) => (
    {
        id: index + 1,
        lesson: Math.floor(index / 8) + 1,
        visibility: "hidden",
        input: "",
        sentence: {
            beginning: value.beginning,
            bold: value.bold,
            correct: value.correct,
            ending: value.ending
        }
    }
))
