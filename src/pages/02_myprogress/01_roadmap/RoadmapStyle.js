import styled from "styled-components";
import { colors } from "../../../components/01_config/Colors";

const RoadmapContainer = styled.div`
  position: relative;
  height: 440px;
  width: 870px;
  margin: 0 auto;
  // background-color: green;
`

const CurveLine = styled.div`
  position: absolute;
  margin-top: 24px;
  width: 800px;
  height: 100px;
  border: solid darkgrey 15px; 
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
`

const CurveLineRightOne = styled(CurveLine)`
  transform: translateX(70px);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
`

const CurveLineLeftOne = styled(CurveLine)`
  top: 85px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
`

const CurveLineRightTwo = styled(CurveLineRightOne)`
  top: 170px;
`

const CurveLineLeftTwo = styled(CurveLineLeftOne)`
  top: 255px;
`

const CurveLineLast = styled(CurveLineRightOne)`
  top: 340px;
  height: 50px;
  border-bottom: none;

`


const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: ${colors.mainDark};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
`

const Start = styled(Circle)`
  position: absolute;
  top: 0px;
  left: 22px;
`

const Finish = styled(Circle)`
  position: absolute;
  bottom: 0px;
  right: -20px;
`

const Step = styled(Circle)`
  margin-top: -38px;
`



export { RoadmapContainer, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, CurveLineLast, Circle, Step, Start, Finish }