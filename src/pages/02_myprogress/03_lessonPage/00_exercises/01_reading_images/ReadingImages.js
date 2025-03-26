import home from "./image3.jpg"

// export const Images = Array.from({ length: 3 }, (_, i) => require(`./00_exercises/01_reading_images/image${i + 1}.jpg`));

import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"


const images = importAll(
    require.context("./", false, /\.jpg$/)
);

const description = [
    "teacher",
    "student",
    "home"
]

function importAll(r) {
    return r.keys().map(r);
}

export const ReadingImages = images.map((image, index) => (
    {
        id: index+1,
        image,
        description: description[index]
    }
))

// export const ReadingImages = [
//     { id: 1, lesson: 1, image: image1, description: "cup" },
//     { id: 2, lesson: 1, image: image2, description: "plate" },
//     { id: 3, lesson: 1, image: image3, description: "table" },
// ]
