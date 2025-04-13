import { RoadmapContainer, CurveLineWrapper, LineZero, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, CurveLineLast, Step, Start, Finish } from "./RoadmapStyle"

const arr1 = [1,2,3,4,5,6]
const arr2 = [12,11,10,9,8,7]
const arr3 = [13,14,15,16,17,18]
const arr4 = [24,23,22,21,20,19]
const arr5 = [25,26,27,28,29,30]

const Roadmap = () => {
    // const steps = Array.from({ length: 40 }, (_, i) => ({
    //   id: i + 1,
    //   title: `Step ${i + 1}`,
    //   description: `Description for step ${i + 1}`,
    // }));

    return (
      <RoadmapContainer>
        <CurveLineWrapper>
        <Start>
          Start
        </Start>
        <Finish>
          Finish
        </Finish>
        <LineZero></LineZero>
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
        <CurveLineLast>
        {arr5.map((value, index) => (
            <Step key={index}>{value}</Step>
          ))}
        </CurveLineLast>
        </CurveLineWrapper>
      </RoadmapContainer>
    );
  };

  export default Roadmap;