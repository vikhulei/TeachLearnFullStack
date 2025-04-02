import { useState } from "react"
import { Wrapper, HeadingSection, FrameWrapper, Frame, Image, SentenceWrapper, Question, ListeningInput, Correct } from "./ListeningStyle"
import { ListeningData } from "./ListeningData"
import { colors } from "../../../../components/01_config/Colors"


const Listening = () => {
  const [listeningData, setListeningData] = useState(
    ListeningData.filter(value => value.lesson === 1)
  )

  const clickQuestion = (e) => {
    e.preventDefault();
    const indexData =  Number(e.target.getAttribute("data-inData"))
    const indexQuestion = Number(e.target.getAttribute("data-inQuestion"))
    setListeningData(prevListeningData => prevListeningData.map((value, index) => (
      index === indexData ? {...value, questions: value.questions.map((val, ind) => 
        ind === indexQuestion ? {...val, visibility: val.visibility === "visible" ? "hidden" : "visible"} : val
      )} : value
    )))
  }
  

  const fillInput = (e) => {
    e.preventDefault();
    const indexData =  e.target.getAttribute("data-indata")
    const indexQuestion = e.target.getAttribute("data-inquestion")
    let newListeningData = [...listeningData]
    newListeningData[indexData].questions[indexQuestion].input = e.currentTarget.value
    setListeningData(newListeningData)
}

  return (
    <Wrapper>
      <HeadingSection>
        Listening
      </HeadingSection>
      <FrameWrapper>
        {listeningData.map((valueData, indexData) => (
          <Frame key={indexData}>
            <Image src={valueData.image} />
            {valueData.questions.map((valueQuestion, indexQuestion) => (
              <SentenceWrapper key={indexQuestion}>
                <Question
                  id={indexQuestion}
                  data-indata={indexData}
                  data-inquestion={indexQuestion}
                  onClick={clickQuestion}
                >
                  {valueQuestion.question}
                </Question>
                &nbsp;
                <ListeningInput
                  style={{ color: valueQuestion.input === valueQuestion.answer ? `${colors.greenWord}` : "" }}
                  value={valueQuestion.input}
                  id={indexQuestion}
                  data-indata={indexData}
                  data-inquestion={indexQuestion}
                  onInput={fillInput}
                />
                <Correct style={{ visibility: valueQuestion.visibility }}>{valueQuestion.answer}</Correct>
              </SentenceWrapper>
            ))}
          </Frame>
        ))}
      </FrameWrapper>
    </Wrapper>
  )
}

export default Listening




// import React, { useState } from "react";

// const ReadingComponent = () => {
//   const [readingText, setReadingText] = useState(
//     images.map((image, index) => ({
//       id: index + 1,
//       lesson: index + 1,
//       text: text[index],
//       image,
//       questions: questions[index]
//     }))
//   );

//   // Function to update the visibility of a specific question
//   const updateVisibility = (lessonIndex, questionIndex) => {
//     setReadingText((prevReadingText) =>
//       prevReadingText.map((lesson, i) =>
//         i === lessonIndex
//           ? {
//               ...lesson,
//               questions: lesson.questions.map((q, j) =>
//                 j === questionIndex ? { ...q, visibility: "visible" } : q
//               ),
//             }
//           : lesson
//       )
//     );
//   };

//   return (
//     <div>
//       {readingText.map((lesson, lessonIndex) => (
//         <div key={lesson.id}>
//           <h2>Lesson {lesson.lesson}</h2>
//           <img src={lesson.image} alt={`Lesson ${lesson.lesson}`} width="200" />
//           {lesson.questions.map((q, questionIndex) => (
//             <div key={questionIndex}>
//               <p>{q.question}</p>
//               <input type="text" value={q.input} readOnly />
//               <button onClick={() => updateVisibility(lessonIndex, questionIndex)}>
//                 Show Answer
//               </button>
//               <span style={{ visibility: q.visibility }}>{q.answer}</span>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReadingComponent;



