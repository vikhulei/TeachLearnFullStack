import { RoadmapContainer, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, Circle, Step, Start, Finish } from "./RoadmapStyle"

const arr = [1,2,3,4,5,6,7,8]

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
          
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
            <Step />
          </CurveLineRightOne>
        <CurveLineLeftOne />
        <CurveLineRightTwo />
        <CurveLineLeftTwo />
      </RoadmapContainer>
    );
  };
  
  export default Roadmap;