import { Wrapper, Logo, NavWrapper, User, MenuWrapper, MenuItem  } from "./HeaderStyle"


const Header = () => {
  return (
    <Wrapper>
      <Logo>TeachLearn.co.uk</Logo>
      <NavWrapper>
        <MenuWrapper>
          <MenuItem href="#">HOME</MenuItem>
          <MenuItem href="#">MY PROGRESS</MenuItem>
          <MenuItem href="#">VOCABULARY</MenuItem>
          <MenuItem href="#">READING</MenuItem>
          <MenuItem href="#">LISTENING</MenuItem>
          <MenuItem href="#">SPEAKING</MenuItem>
          <MenuItem href="#">GRAMMAR</MenuItem>
          <MenuItem href="#">CONTACTS</MenuItem>
        </MenuWrapper>
      <User/>
      </NavWrapper>
    </Wrapper>
  )
}

export default Header