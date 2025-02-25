import styled from "styled-components";

const RoadmapContainer = styled.div`
  position: relative;
  height: 500px;
  width: 870px;
  margin: 0 auto;
  display: grid;
  // background-color: green;
`

const CurveLine = styled.div`
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
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: blue;
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
  top: -40px;
  left: 0;
`

const Finish = styled(Circle)`
  position: absolute;
  bottom: -40px;
  right: 0;
`

const CirclesWrapper = styled.div`
  display: grid;


`



export { RoadmapContainer, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, Start }