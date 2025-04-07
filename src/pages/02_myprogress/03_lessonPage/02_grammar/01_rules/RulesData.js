function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context("./images", false, /\.jpg$/)
);

export const RulesData = images.map((image, index) => (
    {
        id: index+1,
        lesson: Math.floor(index / 2) + 1,
        image
    }
))