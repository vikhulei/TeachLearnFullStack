import { Wrapper, Logo, NavWrapper, MenuWrapper, MenuItem } from "./HeaderStyle"
import Hamburger from "./hamburger/Hamburger"
import User from "./user/User"


const Header = () => {

  return (
        <Wrapper>
      <MenuItem to="/"><Logo>TeachLearn.co.uk</Logo></MenuItem>
      <NavWrapper>
      <Hamburger />
        <MenuWrapper>
          <MenuItem to="/">HOME</MenuItem>
          <MenuItem to="/myprogress">MY PROGRESS</MenuItem>
          <MenuItem to="/vocabulary">VOCABULARY</MenuItem>
          <MenuItem to="/reading">READING</MenuItem>
          <MenuItem to="/listening">LISTENING</MenuItem>
          <MenuItem to="/speaking">SPEAKING</MenuItem>
          <MenuItem to="/grammar">GRAMMAR</MenuItem>
          <MenuItem to="/contacts">CONTACTS</MenuItem>
        </MenuWrapper>
        <User />
      </NavWrapper>
    </Wrapper>
  )
}

export default Header