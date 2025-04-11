function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const caption = [
    "Wait for another bus",
    "Do not touch",
    "Go another way",
    "Mind you step",
    "No pass through"
]

export const ReadingSignsData = images.map((image, index) => (
    {
        id: index+1,
        lesson: Math.floor(index / 5) + 1,
        image,
        caption: caption[index],
        visibility: "hidden",
    }
))
