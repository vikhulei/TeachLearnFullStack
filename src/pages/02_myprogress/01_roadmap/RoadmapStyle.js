import styled from "styled-components";

const RoadmapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 40px;
  position: relative;
`;

const StepContainer = styled.div`
  position: relative;
  width: 120px;
  text-align: center;
  margin: 20px;
  transform: ${({ index }) => (index % 2 === 0 ? "translateY(20px)" : "translateY(-20px)")};

  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 4px;
    background: #3498db;
    top: 50%;
    left: -60px;
    transform: translateY(-50%);
  }

  &:first-child:before {
    display: none;
  }
`;

const StepIndicator = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: auto;
`;

const StepContent = styled.div`
  background: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 12px;
`

export { RoadmapContainer, StepContainer, StepIndicator, StepContent }