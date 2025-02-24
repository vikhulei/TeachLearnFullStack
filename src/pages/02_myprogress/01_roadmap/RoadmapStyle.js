import styled from "styled-components";

const RoadmapContainer = styled.div`
  position: relative;
  height: 500px;
  width: 870px;
  margin: 0 auto;
  // background-color: green;
`

const CurveLineRightOne = styled.div`
  position: absolute;
  width: 800px;
  height: 100px;
  transform: translateX(70px);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: solid darkgrey 15px; 
  border-left: none;
`

const CurveLineLeftOne = styled.div`
  position: absolute;
  width: 800px;
  height: 100px;
  top: 85px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: solid darkgrey 15px; 
  border-right: none;
`

const CurveLineRightTwo = styled.div`
  position: absolute;
  width: 800px;
  height: 100px;
  top: 170px;
  transform: translateX(70px);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: solid darkgrey 15px; 
  border-left: none;
`

const CurveLineLeftTwo = styled.div`
  position: absolute;
  width: 800px;
  height: 100px;
  top: 255px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: solid darkgrey 15px; 
  border-right: none;
`

const Start = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  top: -40px;
  left: 0;
  background-color: blue;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.5;
  font-weight: bold;
  color: white;
`

const Heading = styled.div

export { RoadmapContainer, CurveLineRightOne, CurveLineLeftOne, CurveLineRightTwo, CurveLineLeftTwo, Start }