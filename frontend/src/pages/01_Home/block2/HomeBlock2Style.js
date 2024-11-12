import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    padding: 100px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const Group = styled.div`
    width: 300px;
    height: 700px;
    background-color: darkblue;
`
const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    left: -20px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export { Wrapper, Group, ImageWrapper, Image,  }