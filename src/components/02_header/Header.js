import { useState } from "react";
import { Wrapper, LogoItem, Logo, NavWrapper, MenuWrapper, MenuItem, HambWrapper } from "./HeaderStyle"
import { GiHamburgerMenu } from "react-icons/gi";
import User from "./user/User"


const Header = () => {

  const [userMenu, setUserMenu] = useState(false)
  const [hambMenu, setHambMenu] = useState(false)

  const clickHambMenu = () => {
    setUserMenu(false)
    setHambMenu(!hambMenu)
  }

  return (
    <Wrapper>
      <LogoItem to="/"><Logo>TeachLearn.co.uk</Logo></LogoItem>
      <NavWrapper>
        <HambWrapper onClick={clickHambMenu}>
          <GiHamburgerMenu />
        </HambWrapper>
        <MenuWrapper hambMenu={hambMenu} onClick={clickHambMenu}>
          <MenuItem to="/">HOME</MenuItem>
          <MenuItem to="/myprogress">MY PROGRESS</MenuItem>
          <MenuItem to="/vocabulary">VOCABULARY</MenuItem>
          <MenuItem to="/reading">READING</MenuItem>
          <MenuItem to="/listening">LISTENING</MenuItem>
          <MenuItem to="/speaking">SPEAKING</MenuItem>
          <MenuItem to="/grammar">GRAMMAR</MenuItem>
          <MenuItem to="/contacts">CONTACTS</MenuItem>
        </MenuWrapper>
        <User 
        userMenu={userMenu}
        setUserMenu={setUserMenu}
        hambMenu={hambMenu}
        setHambMenu={setHambMenu}
        />
      </NavWrapper>
    </Wrapper>
  )
}

export default Header