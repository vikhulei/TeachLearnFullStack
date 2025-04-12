function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.png$/)
);

const titles = [
    "Lessons 1 - 6",
    "Lessons 7 - 12",
    "Lessons 13 - 18",
    "Lessons 19 - 24",
    "Lessons 25 - 30"
]

export const CardsData = images.map((image, index) => (
    {
        title: titles[index],
        image
    }
))