function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const audios = importAll(
    require.context("./02_audio", false, /\.mp3$/)
);

const rawQuestions = [
    //LESSON 1
    //first question
    [
        { question: "Як її звати?", answer: "Anna" },
        { question: "Звідки вона приїхала?", answer: "Spain" },
        { question: "Що її подобається робити?", answer: "read" },
        { question: "Скільки їй років?", answer: "25" },
        { question: "Поблизу чого вона живе?", answer: "sea" },
    ],
    //second question
    [
        { question: "Звідки він приїхав?", answer: "Canada" },
        { question: "Як його звати?", answer: "David" },
        { question: "У що йому подобається грати?", answer: "soccer" },
        { question: "З ким він живе?", answer: "family" },
        { question: "Що йому подобається дивитися?", answer: "movies" },
    ],

    //LESSON 2
    //first question
    [
        { question: "Ким вона працює (два слова)?", answer: "shop assistant" },
        { question: "З чим вона зустрічає клієнтів?", answer: "smile" },
        { question: "Що вона робить для них (дві дії)?", answer: "help answer" },
        { question: "Що в неї може бути після обіду?", answer: "break" },
        { question: "Що вона робить з дверима в кінці дня?", answer: "lock" },
    ],
    //second question
    [
        { question: "Яка в нього професія?", answer: "cleaner" },
        { question: "Що він робить в першу чергу (два слова)?", answer: "sweep mop" },
        { question: "Що він робить з вікнами?", answer: "clean" },
        { question: "Що треба покласти в туалеті, крім серветок?", answer: "soap" },
        { question: "Куди він їде в кінці дня?", answer: "home" },
    ],
    //LESSON 3
    //first question
    [
        { question: "На чому вона їздить вранці?", answer: "bike" },
        { question: "У що вона грає з друзями?", answer: "football" },
        { question: "Що вона малює у вільний час?", answer: "pictures" },
        { question: "Що слухає?", answer: "music" },
        { question: "Що вона дивиться з сім'єю?", answer: "movies" },
    ],
    //second question
    [
        { question: "Як мене звати?", answer: "Chris" },
        { question: "У що я граю з братом?", answer: "basketball" },
        { question: "Кого я вигулюю?", answer: "dog" },
        { question: "Які книги я люблю читати?", answer: "adventure" },
        { question: "Що я печу разом з мамою?", answer: "cookies" },
    ],

    //LESSON 4
    //first question
    [
        { question: "Куди ми їздили минулого літа?", answer: "beach" },
        { question: "Яка була погода (два слова)?", answer: "sunny warm" },
        { question: "Що ми їли щодна?", answer: "ice cream" },
        { question: "Близько біля чого був готель?", answer: "beach" },
        { question: "Скільки ми там пробули (два слова)?", answer: "one week" },
    ],
    //second question
    [
        { question: "Куди я люблю їздити (два слова)?", answer: "new places" },
        { question: "Де я був минулого року?", answer: "mountains" },
        { question: "Що ми робили щоранку?", answer: "hiking" },
        { question: "Яке було повітря (два слова)?", answer: "fresh and clean" },
        { question: "Яку тварину ми бачили?", answer: "deer" },
    ],

    //LESSON 5
    //first question
    [
        { question: "Яка моя улюблена страва?", answer: "pasta" },
        { question: "З чим я допомагаю мамі на вихідних?", answer: "dinner" },
        { question: "Що я нарізаю для неї?", answer: "vegetables" },
        { question: "Запах чого мені подобається?", answer: "food" },
        { question: "Чого більше я хочу вивчити?", answer: "recipes" },
    ],
    //second question
    [
        { question: "Який мій улюблений прийом їжі протягом дня?", answer: "breakfast" },
        { question: "Я їм яйця, тост і що ще?", answer: "fruit" },
        { question: "На обід у мене (два слова)", answer: "sandwich soup" },
        { question: "З ким я вечеряю?", answer: "family" },
        { question: "Що ми їмо у особливі дні?", answer: "dessert" },
    ],

    //LESSON 6
    //first question
    [
        { question: "Скільки у мене братів?", answer: "two" },
        { question: "Куди ми ходимо на вихідні?", answer: "park" },
        { question: "Хто живе поруч з нами?", answer: "grandmother" },
        { question: "У що ми граємо з друзями?", answer: "games" },
        { question: "У який день ми відвідуємо бабусю?", answer: "Sunday" },
    ],
    //second question
    [
        { question: "Як звати мою кращу подругу?", answer: "Sarah" },
        { question: "Як далеко ми живемо одна від одної?", answer: "near" },
        { question: "Ми любимо однакові (два слова)", answer: "music games" },
        { question: "Куди ми ходимо по вихідних?", answer: "mall" },
        { question: "Якими в житті є хороші друзі?", answer: "important" },
    ],

    //LESSON 7
    //first question
    [
        { question: "Скільки днів на тиждень я ходжу до школи?", answer: "five" },
        { question: "Який мій улюблений предмет?", answer: "English" },
        { question: "Що ще мені подобається (два слова)?", answer: "science art" },
        { question: "Що у нас відбувається о 12:30?", answer: "lunch" },
        { question: "Що я роблю вдома?", answer: "homework" },
    ],
    //second question
    [
        { question: "Що є дуже важливим?", answer: "education" },
        { question: "Що воно допомагає отримати (два слова)?", answer: "good jobs" },
        { question: "Який предмет мені дається важко?", answer: "Math" },
        { question: "Що ми використовуємо на деяких уроках?", answer: "computers" },
        { question: "Куди я хочу потрапити одного дня?", answer: "university" },
    ],

    //LESSON 8
    //first question
    [
        { question: "Ким працює мій батько?", answer: "doctor" },
        { question: "Де він працює?", answer: "hospital" },
        { question: "Хто моя мама?", answer: "teacher" },
        { question: "Де вона працює (два слова)?", answer: "primary school" },
        { question: "Ким я хочу бути, коли виросту?", answer: "factories" },
    ],
    //second question
    [
        { question: "Який в мене режим роботи?", answer: "part-time" },
        { question: "Коли я працюю?", answer: "weekends" },
        { question: "З ким мені подобається розмовляти?", answer: "customers" },
        { question: "Який у мене начальник (два слова)?", answer: "friendly fair" },
        { question: "Я хотів би працювати в туристичній компанії або де ще?", answer: "hotel" },
    ],

    //LESSON 9
    //first question
    [
        { question: "Що мені подобається робити з друзями?", answer: "shopping" },
        { question: "Що ми розглядаємо в торговому центрі (два слова)?", answer: "clothes shoes" },
        { question: "Як ще ми купляємо товари?", answer: "online" },
        { question: "Що мені не подобається робити з грошима?", answer: "waste" },
        { question: "Що я завжди перевіряю?", answer: "prices" },
    ],
    //second question
    [
        { question: "Що важливо в повсякденному житті?", answer: "money" },
        { question: "Що потрібно, щоб заробити гроші?", answer: "work" },
        { question: "Що я складаю в скарбничку (два слова)?", answer: "coins notes" },
        { question: "Яким треба бути з грошима?", answer: "careful" },
        { question: "Чого мене навчають батьки (два слова)?", answer: "spend save" },
    ],

    //LESSON 10
    //first question
    [
        { question: "Чим я користуюсь щодня?", answer: "phone" },
        { question: "Які дві дії я роблю з його допомогою?", answer: "chat watch" },
        { question: "За допомогою чого я ділюся фотографіями (два слова)?", answer: "social media" },
        { question: "Що мені кажуть робити батьки?", answer: "breaks" },
        { question: "Яким роблять життя технології?", answer: "easier" },
    ],
    //second question
    [
        { question: "Для чого люди використовують соціальні мережі (два слова)?", answer: "talk share" },
        { question: "На кого я підписаний, крім друзів (два слова)?", answer: "favourite stars" },
        { question: "Куди я йду, коли я не в онлайн?", answer: "outside" },
        { question: "Що може бути шкідливим, якщо його забагато (два слова)?", answer: "screen time" },
        { question: "На які ще сторінки я підписаний (два слова)?", answer: "travel food" },
    ],

// LESSON 11
// first story
[
    { question: "Який жанр є улюбленим фільмом Сари?", answer: "comedy" },
    { question: "У які дні тижня Сара зазвичай дивиться фільми?", answer: "weekend" },
    { question: "Які ще фільми, окрім комедій, подобаються Сарі?", answer: "action" },
    { question: "Що допомагають зробити фільми Сарі (2 слова)?", answer: "think relax" },
    { question: "З ким Сара ділиться своїми думками про фільми?", answer: "friends" },
],
// second story
[
    { question: "Що Том дивиться щовечора?", answer: "TV" },
    { question: "Якого персонажа грає його улюблена акторка?", answer: "detective" },
    { question: "Які шоу змушують Тома усміхатися?", answer: "funny" },
    { question: "Де Том пише короткі рецензії?", answer: "online" },
    { question: "Про що телебачення допомагає забути Тому?", answer: "stress" },
],

 // LESSON 12
// first story
[
    { question: "Хто є улюбленою співачкою Лени?", answer: "taylor" },
    { question: "Коли Лена була на концерті (2 слова)?", answer: "last year" },
    { question: "Які два жанри музики їй подобаються?", answer: "pop rock" },
    { question: "Де Лена співає вдома?", answer: "shower" },
    { question: "Що робила Лена разом з друзями на концерті?", answer: "danced" },
],
// second story
[
    { question: "На якому інструменті грає Джейк?", answer: "guitar" },
    { question: "Які два жанри музики слухає Джейк?", answer: "jazz blues" },
    { question: "Коли Джейк займається музикою?", answer: "weekend" },
    { question: "Де Джейк хоче грати одного дня?", answer: "stage" },
    { question: "З ким Джейк грає у гурті?", answer: "friends" },
],

// LESSON 13
// first story
[
    { question: "Який вид спорту грає Мія після школи?", answer: "soccer" },
    { question: "Скільки разів на тиждень тренується Мія?", answer: "four" },
    { question: "Що допомагає Мії залишатися у формі та щасливою?", answer: "soccer" },
    { question: "Що говорить про Мію її тренер (2 слова)?", answer: "great player" },
    { question: "Хто ще грає з Мією?", answer: "friends" },
],
// second story
[
    { question: "Куди ходить Бен, щоб займатись спортом?", answer: "gym" },
    { question: "Який улюблений спорт Бена?", answer: "basketball" },
    { question: "З ким Бен грає на вихідних?", answer: "brother" },
    { question: "На чому катається Бен у парку?", answer: "bike" },
    { question: "Що допомагає Бену розслабитися?", answer: "exercise" },
],

// LESSON 14
// first story
[
    { question: "Де Емма читає новини?", answer: "online" },
    { question: "Коли вона перевіряє новини?", answer: "morning" },
    { question: "З ким Емма обговорює новини за сніданком?", answer: "dad" },
    { question: "Про що ще читає Емма, окрім світових подій (2 слова)?", answer: "her town" },
    { question: "Як почувається Емма після читання новин?", answer: "informed" },
],
// second story
[
    { question: "Де Ноа дивиться новини?", answer: "TV" },
    { question: "Які дві теми новин йому подобаються?", answer: "science weather" },
    { question: "Хто просить учнів слідкувати за новинами?", answer: "teacher" },
    { question: "З ким Ноа ділиться новинами?", answer: "friends" },
    { question: "Якими роблять новини людей?", answer: "aware" },
],

// LESSON 15
// first story
[
    { question: "Ким хоче стати Лілі?", answer: "doctor" },
    { question: "Ким працює мама Лілі?", answer: "nurse" },
    { question: "Де Лілі хоче працювати у майбутньому?", answer: "hospital" },
    { question: "Що Лілі читає про медицину?", answer: "books" },
    { question: "Які шоу дивиться Лілі по телевізору?", answer: "health" },
],
// second story
[
    { question: "Ким мріє стати Ітан?", answer: "pilot" },
    { question: "Що Ітан будує вдома?", answer: "planes" },
    { question: "Які два предмети він вивчає щодня?", answer: "math science" },
    { question: "Кого Ітан хоче повезти у політ одного дня?", answer: "parents" },
    { question: "Що для Ітана є його майбутнім?", answer: "sky" },
],

// LESSON 16
// first story
[
    { question: "З якої країни родом Айко?", answer: "Japan" },
    { question: "У чому Айко святкує Новий рік?", answer: "kimono" },
    { question: "З якої країни родом Марія?", answer: "Mexico" },
    { question: "Для кого Марія робить вівтар?", answer: "grandparents" },
    { question: "Що Айко та Марія обговорюють разом?", answer: "culture" },
],
// second story
[
    { question: "З якої країни переїхав Омар?", answer: "Egypt" },
    { question: "У якій країні Омар святкував День подяки?", answer: "Canada" },
    { question: "Що їв Омар на День подяки?", answer: "turkey" },
    { question: "Про яке свято розповідав Омар сусідам?", answer: "Ramadan" },
    { question: "Що створило для Омара атмосферу гостинності (2 слова)?", answer: "sharing customs" },
],

// LESSON 17
// first story
[
    { question: "Яку пору року любить Елла?", answer: "spring" },
    { question: "Куди вона ходить пішки щодня?", answer: "school" },
    { question: "Що Елла п'є у теплу погоду?", answer: "lemonade" },
    { question: "Що вона допомагає мамі саджати?", answer: "flowers" },
    { question: "Що часто буває весною, але Еллі це подобається?", answer: "rain" },
],
// second story
[
    { question: "Яку пору року найбільше любить Ліам?", answer: "winter" },
    { question: "З ким Ліам грається у снігу?", answer: "dog" },
    { question: "Що він п’є вночі?", answer: "cocoa" },
    { question: "Що іноді закривається через сніг?", answer: "school" },
    { question: "Як почувається Ліам взимку?", answer: "cozy" },
],

// LESSON 18
// first story
[
    { question: "Коли Ніна прокидається щодня?", answer: "early" },
    { question: "Що вона п’є щоранку?", answer: "water" },
    { question: "Куди вона пише статті?", answer: "journal" },
    { question: "Що вона робить перед фізичними вправами?", answer: "stretches" },
    { question: "Що, за словами Ніни, має значення?", answer: "habits" },
],
// second story
[
    { question: "Що почав робити Даніель після вечері?", answer: "walking" },
    { question: "Що він перестав забагато їсти?", answer: "sugar" },
    { question: "Що він слухає, щоб заспокоїтись?", answer: "music" },
    { question: "З ким він розмовляє, коли йому сумно?", answer: "sister" },
    { question: "Як Даніель почувається зараз?", answer: "better" },
],

// LESSON 19
// first story
[
    { question: "Де загубилась Софі?", answer: "zoo" },
    { question: "Хто допоміг їй знайти батьків?", answer: "woman" },
    { question: "Біля якого вольєра вона чекала?", answer: "monkey" },
    { question: "Скільки років було Софі тоді?", answer: "six" },
    { question: "Що вона зараз думає про цю історію?", answer: "funny" },
],
// second story
[
    { question: "Що зламав Джейк?", answer: "arm" },
    { question: "Із чого він впав?", answer: "bike" },
    { question: "Якого кольору був його гіпс?", answer: "blue" },
    { question: "Що зробили його однокласники з гіпсом?", answer: "signed" },
    { question: "Як Джейк їздить зараз?", answer: "carefully" },
],

// LESSON 20
// first story
[
    { question: "Куди мріє поїхати Лілі?", answer: "Paris" },
    { question: "Що вона хоче побачити (2 слова)?", answer: "Eiffel Tower" },
    { question: "Що вона хоче їсти щоранку?", answer: "croissants" },
    { question: "Біля чого вона мріє гуляти?", answer: "river" },
    { question: "Яку мову вона хоче знати краще?", answer: "French" },
],
// second story
[
    { question: "Яку тварину хотів би мати Макс?", answer: "dragon" },
    { question: "Якого кольору був би його дракон?", answer: "red" },
    { question: "Над чим вони б літали?", answer: "mountains" },
    { question: "Що їв би дракон Макса?", answer: "spicyc food" },
    { question: "Ким є дракони для Макса?", answer: "favorite dream" },
],

// LESSON 21
// first story
[
{ question: "Що любить робити Емілі?", answer: "reading" },
{ question: "Який її улюблений жанр?", answer: "fantasy" },
{ question: "Ким вона хоче стати?", answer: "writer" },
{ question: "Де вона читає на вихідних?", answer: "library" },
{ question: "Що обговорюють її друзі?", answer: "stories" },
],
// second story
[
{ question: "Які книжки читає Лукас?", answer: "comic" },
{ question: "Яким є його улюблений герой (2 слова)?", answer: "strong kind" },
{ question: "Під час чого він читає у школі?", answer: "lunch" },
{ question: "Що інколи він робить під час читання?", answer: "laughs" },
{ question: "Хто ще читає комікси з ним?", answer: "sister" },
],

// LESSON 22
// first story
[
{ question: "Як звати собаку Меї?", answer: "Toby" },
{ question: "Якого він кольору?", answer: "white" },
{ question: "Коли вона його годує?", answer: "morning" },
{ question: "Як часто вона його вигулює (2 слова)?", answer: "every day" },
{ question: "Де він спить вночі?", answer: "bed" },
],
// second story
[
{ question: "Кого побачив Ітан у лісі?", answer: "deer" },
{ question: "З ким гуляв Ітан?", answer: "Dad" },
{ question: "Біля чого стояла тварина?", answer: "tree" },
{ question: "Що зробив Ітан з твариною?", answer: "photo" },
{ question: "Чим наповнена природа?", answer: "surprises" },
],

// LESSON 23
// first story
[
{ question: "Куди Олівія ходить щовихідних?", answer: "park" },
{ question: "Що вона прибирає?", answer: "trash" },
{ question: "Що вона вимикає вдома?", answer: "lights" },
{ question: "Що вона робить вдома для збереження довкілля?", answer: "recycles" },
{ question: "Кого вона просить допомагати?.", answer: "friends" },
],
// second story
[
{ question: "Про що дізнався Ной у школі (2 слова)?", answer: "climate change" },
{ question: "Що він використовує замість автобуса?", answer: "bike" },
{ question: "З чого зроблена його пляшка?", answer: "metal" },
{ question: "З ким він саджає квіти?", answer: "mom" },
{ question: "Про що він говорить сім'ї?", answer: "nature" },
],

// LESSON 24
// first story
[
{ question: "Де живе Лена (2 слова)?", answer: "small town" },
{ question: "Що знаходиться біля її будинку?", answer: "bakery" },
{ question: "Куди вона ходить на вихідних?", answer: "park" },
{ question: "Яке почуття викликає її містечко (2 слова)?", answer: "warm friendly" },
{ question: "Що їй подобається в ньому (2 слова)?", answer: "calm safety" },
],
// second story
[
{ question: "У якому місці виріс Зак (2 слова)?", answer: "big city" },
{ question: "Що він чув щодня?", answer: "horns" },
{ question: "Куди він ходив з друзями у вихідні?", answer: "museum" },
{ question: "Що він любив у місті вночі?", answer: "lights" },
{ question: "Яке слово описує його ставлення до міста?", answer: "special" },
],

// LESSON 25
// first story
[
{ question: "Які дві мови знає Ава?", answer: "English Spanish" },
{ question: "Хто навчив її іспанської?", answer: "Mom" },
{ question: "З ким вона розмовляє в школі?", answer: "friends" },
{ question: "Яку мову вона хоче вивчити?", answer: "French" },
{ question: "Що вона думає про мови?", answer: "fun" },
],
// second story
[
{ question: "Куди переїхав Лео (2 слова)?", answer: "new country" },
{ question: "Що він використовував для спілкування крім жестів?", answer: "pictures" },
{ question: "Хто йому допомагав?", answer: "teacher" },
{ question: "Що він відчуває тепер?", answer: "proud" },
{ question: "Що він продовжує робити (2 слова)?", answer: "trying learning" },
],

// LESSON 26
// first story
[
{ question: "Що любить Софі?", answer: "fashion" },
{ question: "Яку сукню вона любить?", answer: "pink" },
{ question: "Що вона носить разом із сукнею?", answer: "sunglasses" },
{ question: "Що завжди пасує до її сумки?", answer: "shoes" },
{ question: "Що допомагає їй виразити себе?", answer: "fashion" },
],
// second story
[
{ question: "Який стиль одягу подобається Ліаму?", answer: "simple" },
{ question: "Який його улюблений колір?", answer: "blue" },
{ question: "Що для нього найважливіше в одязі?", answer: "comfort" },
{ question: "Що він часто носить на голові?", answer: "hat" },
{ question: "Як друзі описують його стиль?", answer: "chill" },
],

// LESSON 27
// first story
[
{ question: "Яке свято любить Емма?", answer: "birthday" },
{ question: "Що вона отримує на святі?", answer: "gifts" },
{ question: "Хто приходить на її свято?", answer: "friends" },
{ question: "Що вона одягає для розваги?", answer: "crown" },
{ question: "Яке слово описує день народження для неї?", answer: "celebration" },
],
// second story
[
{ question: "Хто готує солодощі для Раджа?", answer: "Mom" },
{ question: "Що він одягає на свято (2 слова)?", answer: "new clothes" },
{ question: "Що освітлює небо?", answer: "fireworks" },
{ question: "Як він почувається по відношенню до своєї культури?", answer: "close" },
{ question: "Який це для нього час (2 слова)?", answer: "bright happy" },
],

// LESSON 28
// first story
[
{ question: "Що любить робити Олівія?", answer: "paint" },
{ question: "Які її улюблені кольори (2 слова)?", answer: "green yellow" },
{ question: "Чим вона іноді малює, крім пензля?", answer: "fingers" },
{ question: "Що висить на її стінах?", answer: "art" },
{ question: "Ким вона мріє стати?", answer: "artist" },
],
// second story
[
{ question: "Що будує Ітан?", answer: "things" },
{ question: "Що він одного разу побудував?", answer: "bridge" },
{ question: "Що він малює в блокноті?", answer: "designs" },
{ question: "Звідки він бере ідеї?", answer: "nature" },
{ question: "Що він хоче проєктувати в майбутньому?", answer: "buildings" },
],

// LESSON 29
// first story
[
{ question: "Чим добирається до школи Анна?", answer: "bus" },
{ question: "Де вона чекає вранці?", answer: "stop" },
{ question: "Що вона читає під час очікування?", answer: "book" },
{ question: "З ким вона їде (2 слова)?", answer: "best friend" },
{ question: "Що вона думає про подорож автобусом?", answer: "easy" },
],
// second story
[
{ question: "На чому їздить Омар до парку?", answer: "bike" },
{ question: "Що він носить для безпеки?", answer: "helmet" },
{ question: "Між чим пролягає його маршрут?", answer: "trees" },
{ question: "Що він робить після відпочинку (3 слова)?", answer: "rides back home" },
{ question: "Яке слово описує його почуття?", answer: "free" },
],

// LESSON 30
// first story
[
{ question: "Що боялася робити Лілі?", answer: "swim" },
{ question: "Хто записав її на уроки?", answer: "Mom" },
{ question: "Який був її тренер?", answer: "kind" },
{ question: "Що зробили люди, коли вона пропливла?", answer: "clapped" },
{ question: "Що вона відчула після цього?", answer: "proud" },
],
// second story
[
{ question: "Що було важко Бену?", answer: "reading" },
{ question: "Хто йому допомагав?", answer: "teacher" },
{ question: "Скільки сторінок він читав спочатку?", answer: "one" },
{ question: "Хто ним пишається?", answer: "parents" },
{ question: "Як він називає те, що навчився читати (2 слова)?", answer: "big win" },
]


]

const questionsArray = rawQuestions.map((value, index) => (
    value.map((val, ind) => (
        {
            id: ind + 1,
            question: val.question,
            input: "",
            visibility: "hidden",
            answer: val.answer,
        }
    ))
))

export const ListeningData = images.map((image, index) => (
    {
        index,
        id: index + 1,
        lesson: Math.floor(index / 2) + 1,
        image,
        audio: audios[index],
        questions: questionsArray[index],
    }
))
