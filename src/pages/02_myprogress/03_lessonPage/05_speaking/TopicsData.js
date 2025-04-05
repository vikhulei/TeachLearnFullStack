const topics = [
    "Introductions & Personal Information",
    "topic 2",
    "topic 3",
    "topic 4",
    "topic 5",
]

export const TopicData = topics.map((topic, index) => (
    {
        index,
        id: index+1,
        lesson: index+1,
        topic
    }
))