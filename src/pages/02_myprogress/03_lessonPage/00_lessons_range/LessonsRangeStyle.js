import styled from "styled-components";
import { colors } from "../../../../components/01_config/Colors";

const Wrapper = styled.div`
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: ${colors.mainDark};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
  @media(max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
  &:active {
    transform: translate(1px, 1px);
  }
`

export { Wrapper, Circle }