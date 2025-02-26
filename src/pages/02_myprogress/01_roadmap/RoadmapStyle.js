import styled from "styled-components";
import { colors } from "../../../components/01_config/Colors";

const RoadmapContainer = styled.div`
  position: relative;
  height: 390px;
  width: 870px;
  margin: 0 auto;
  display: grid;
  // background-color: green;
`

const CurveLine = styled.div`
  margin-top: 18px;
  position: absolute;
  width: 800px;
  height: 100px;
  border: solid darkgrey 15px; 
`

const CurveLineRightOne = styled(CurveLine)`
  transform: translateX(70px);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
  display: flex;
  justify-content: space-between;
  padding: 0 35px;
  
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

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${colors.mainDark};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.5;
  font-weight: bold;
  color: white;
`

const Start = styled(Circle)`
  position: absolute;
  top: 0px;
  left: 22px;
`

const Finish = styled(Circle)`
  position: absolute;
  bottom: 0px;
  right: 22px;
`

const CirclesWrapper = styled.div`
  display: grid;
`

const Step = styled(Circle)`
  margin-top: -32px;
`



export { RoadmapContainer, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, Circle, Step, Start, Finish }