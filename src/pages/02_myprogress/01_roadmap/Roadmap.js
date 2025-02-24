import { RoadmapContainer, StepContainer, StepIndicator, StepContent } from "./RoadmapStyle"

const Roadmap = () => {
    const steps = Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      title: `Step ${i + 1}`,
      description: `Description for step ${i + 1}`,
    }));
  
    return (
      <RoadmapContainer>
        {steps.map((step, index) => (
          <StepContainer key={step.id} index={index}>
            <StepIndicator>{step.id}</StepIndicator>
            <StepContent>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </StepContent>
          </StepContainer>
        ))}
      </RoadmapContainer>
    );
  };
  
  export default Roadmap;