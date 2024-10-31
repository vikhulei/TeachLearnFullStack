import { Wrapper, Logo, NavWrapper, User, MenuWrapper, MenuItem  } from "./HeaderStyle"


const Header = () => {
  return (
    <Wrapper>
      <MenuItem to="/"><Logo>TeachLearn.co.uk</Logo></MenuItem>
      <NavWrapper>
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
      <User onClick={() => console.log("user clicked")}/>
      </NavWrapper>
    </Wrapper>
  )
}

export default Header