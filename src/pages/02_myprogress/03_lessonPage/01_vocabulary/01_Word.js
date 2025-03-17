import { WordCard, EngWord, UkrWord } from "./01_WordStyle"

const Word = ({ key, value }) => {
    return (
        <WordCard key={key}>
            <EngWord>
                {value}
            </EngWord>
            <UkrWord>

            </UkrWord>
        </WordCard>
    )
}

export default Word