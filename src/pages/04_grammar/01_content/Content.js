import { FrameContent, Text } from "./ContentStyle"
import { ContentData } from "./ContentData"

const Content = () => {
  return (
    <FrameContent>
        {ContentData.map((value, index) => (
            <Text key={index}>
                {value}
            </Text>
        ))}
    </FrameContent>
  )
}

export default Content