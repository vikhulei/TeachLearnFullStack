import { FrameContent, FrameHeading, Text } from "./ContentStyle"
import { ContentData } from "./ContentData"

const Content = () => {
  return (
    <FrameContent>
        <FrameHeading>List of Topics</FrameHeading>
        {ContentData.map((value, index) => (
            <Text key={index}>
                {index+1}. {value}
            </Text>
        ))}
    </FrameContent>
  )
}

export default Content