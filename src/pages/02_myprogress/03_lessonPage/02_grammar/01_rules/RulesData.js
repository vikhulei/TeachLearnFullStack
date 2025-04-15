function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const titles = [
    "Alphabet",
    "Reading rules",
    "To be"

]

export const RulesData = images.map((image, index) => (
    {
        id: index+1,
        lesson: Math.floor(index / 3) + 1,
        image,
        title: titles[index]
    }
))