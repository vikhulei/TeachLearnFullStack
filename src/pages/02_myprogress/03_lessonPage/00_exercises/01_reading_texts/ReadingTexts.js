function importAll(r) {
    return r.keys().map(r);
}

const text = [
    'Liam and Emma love to explore the world. One day, they found an old map in their grandfather\’s attic. “We need to find out where this leads!” Emma said excitedly. The information on the map was faded, but it showed a big red "X" in the middle of a forest. "How much treasure do you think is buried there?" Liam asked. \n \n "Let\'s take the map and go on an adventure!" Emma said. The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else! The two of them packed their bags and set off. They didn\'t know what they would find, but they knew one thing for sure—they want an adventure over anything else!',
    "text 2",
    "text 3",
]

const images = importAll(
    require.context("./", false, /\.jpg$/)
);

const description = [
    "desc image 1",
    "desc image 2",
    "desc image 3",
]

export const ReadingText = images.map((image, index) => (
    {
        id: index+1,
        lesson: index+1,
        text: text[index],
        image,
        description: description[index]
    }
))
