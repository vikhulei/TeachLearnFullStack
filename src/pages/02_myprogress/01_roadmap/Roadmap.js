import { RoadmapContainer, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, CurveLineLast, Step, Start, Finish } from "./RoadmapStyle"

const arr1 = [1,2,3,4,5,6,7,8]
const arr2 = [16,15,14,13,12,11,10,9]
const arr3 = [17,18,19,20,21,22,23,24]
const arr4 = [32,31,30,29,28,27,26,25]
const arr5 = [33,34,35,36,37,38,39,40]

const Roadmap = () => {
    const steps = Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      title: `Step ${i + 1}`,
      description: `Description for step ${i + 1}`,
    }));

    return (
      <RoadmapContainer>
        <Start>
          Start
        </Start>
        <Finish>
          Finish
        </Finish>
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
      </RoadmapContainer>
    );
  };

  export default Roadmap;