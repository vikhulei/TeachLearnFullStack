function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./01_images", false, /\.jpg$/)
);

const caption = [
    //LESSON 1
    "Wait for another bus",
    "Do not touch",
    "Go another way",
    "Mind you step",
    "No pass through",
    //LESSON 2
    "",
    "",
    "",
    "",
    "",
    //LESSON 3
    "",
    "",
    "",
    "",
    "",
    //LESSON 4
    "",
    "",
    "",
    "",
    "",
    //LESSON 5
    "",
    "",
    "",
    "",
    "",
    //LESSON 6
    "",
    "",
    "",
    "",
    "",
    //LESSON 7
    "",
    "",
    "",
    "",
    "",
    //LESSON 8
    "",
    "",
    "",
    "",
    "",
    //LESSON 9
    "",
    "",
    "",
    "",
    "",
    //LESSON 10
    "",
    "",
    "",
    "",
    "",
    //LESSON 11
    "",
    "",
    "",
    "",
    "",
    //LESSON 12
    "",
    "",
    "",
    "",
    "",
    //LESSON 13
    "",
    "",
    "",
    "",
    "",
    //LESSON 14
    "",
    "",
    "",
    "",
    "",
    //LESSON 15
    "",
    "",
    "",
    "",
    "",
    //LESSON 16
    "",
    "",
    "",
    "",
    "",
    //LESSON 17
    "",
    "",
    "",
    "",
    "",
    //LESSON 18
    "",
    "",
    "",
    "",
    "",
    //LESSON 19
    "",
    "",
    "",
    "",
    "",
    //LESSON 20
    "",
    "",
    "",
    "",
    "",
    //LESSON 21
    "",
    "",
    "",
    "",
    "",
    //LESSON 22
    "",
    "",
    "",
    "",
    "",
    //LESSON 23
    "",
    "",
    "",
    "",
    "",
    //LESSON 24
    "",
    "",
    "",
    "",
    "",
    //LESSON 25
    "",
    "",
    "",
    "",
    "",
    //LESSON 26
    "",
    "",
    "",
    "",
    "",
    //LESSON 27
    "",
    "",
    "",
    "",
    "",
    //LESSON 28
    "",
    "",
    "",
    "",
    "",
    //LESSON 29
    "",
    "",
    "",
    "",
    "",
    //LESSON 30
    "",
    "",
    "",
    "",
    "",

]

export const ReadingSignsData = images.map((image, index) => (
    {
        id: index + 1,
        lesson: Math.floor(index / 5) + 1,
        image,
        caption: caption[index],
        visibility: "hidden",
    }
))
