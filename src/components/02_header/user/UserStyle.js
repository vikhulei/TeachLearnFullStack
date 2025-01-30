import styled from "styled-components";
import { FaRegUser } from "react-icons/fa6";
import { sizes } from "../../01_config/Sizes";

const UserIcon = styled(FaRegUser)`
    font-size: 1.4rem;
    border: 3.5px solid black;
    border-radius: 5px;
    margin: 0 ${sizes.marginsides};
    cursor: pointer;
`

const UserWrapper = styled.div`
    position: absolute;
    width: 150px;
    right: ${sizes.marginsides};
    top: ${sizes.headerheight};
`
const UserItem = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-bottom: gray solid 1px;
    background-color: lightgray;
    cursor: pointer;
    user-select: none;
`

const YouAreLogged = styled.div`
    position: absolute;
    bottom: 0;
    right: ${sizes.marginsides};
    color: red;
    color: ${({logged}) => logged=="logged out" ? "red" : "green"};
    user-select: none;
`

export { UserIcon, UserWrapper, UserItem, YouAreLogged }