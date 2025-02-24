import { RoadmapContainer, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, Start } from "./RoadmapStyle"

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
        <CurveLineRightOne />
        <CurveLineLeftOne />
        <CurveLineRightTwo />
        <CurveLineLeftTwo />
      </RoadmapContainer>
    );
  };
  
  export default Roadmap;