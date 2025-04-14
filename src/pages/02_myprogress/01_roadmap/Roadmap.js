import { RoadmapContainer, CurveLineWrapper, LineStart, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, CurveLineRightThree, Step, Start, Finish, LineFinish } from "./RoadmapStyle"

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [10, 9, 8, 7, 6]
const arr3 = [11, 12, 13, 14, 15]
const arr4 = [20, 19, 18, 17, 16]
const arr5 = [21, 22, 23, 24, 25]
const arr6 = [30, 29, 28, 27, 26]

const Roadmap = () => {

  return (
    <RoadmapContainer>
      <CurveLineWrapper>
        <Start>
          Start
        </Start>
        <LineStart></LineStart>
        <CurveLineRightOne>
          {arr1.map((value, index) => (
            <Step key={index}>{value}</Step>
          ))}
        </CurveLineRightOne>
        <CurveLineLeftOne>
          {arr2.map((value, index) => (
            <Step key={index}>{value}</Step>
          ))}
        </CurveLineLeftOne>
        <CurveLineRightTwo>
          {arr3.map((value, index) => (
            <Step key={index}>{value}</Step>
          ))}
        </CurveLineRightTwo>
        <CurveLineLeftTwo>
          {arr4.map((value, index) => (
            <Step key={index}>{value}</Step>
          ))}
        </CurveLineLeftTwo>
        <CurveLineRightThree>
          {arr5.map((value, index) => (
            <Step key={index}>{value}</Step>
          ))}
        </CurveLineRightThree>
        <LineFinish>
          {arr6.map((value, index) => (
            <Step key={index}>{value}</Step>
          ))}
        </LineFinish>
        <Finish>
          Finish
        </Finish>
      </CurveLineWrapper>
    </RoadmapContainer>
  );
};

export default Roadmap;