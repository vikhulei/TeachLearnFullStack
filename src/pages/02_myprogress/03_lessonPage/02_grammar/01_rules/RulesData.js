function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const lessons = [
    {lesson: 1, title: "Alphabet"},
    {lesson: 1, title: "Reading rules"},
    {lesson: 2, title: "To be"}

]

export const RulesData = images.map((image, index) => (
    {
        id: index+1,
        image,
        title: lessons[index].title,
        lesson: lessons[index].lesson,
        // lesson: Math.floor(index / 3) + 1
    }
))