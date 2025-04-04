const topics = [
    "topic 1",
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
        topic: topic
    }
))