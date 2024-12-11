import { useState } from "react"
import { Wrapper, Logo, NavWrapper, User, UserWrapper, UserItem, MenuWrapper, MenuItem, TWrapper, TNav  } from "./HeaderStyle"


const Header = () => {
  const [userMenu, setUserMenu] = useState(false)

  const showUserMenu = () => {
    setUserMenu(!userMenu)
  }

  const showUserItem = (e) => {
    setUserMenu(false)
    alert(e.target.id)
  }

  return (
    // <TWrapper>
    //   <TNav></TNav>
    //   </TWrapper>
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
      <User onClick={showUserMenu}/>
        { userMenu && <UserWrapper>
          <UserItem id="register" onClick={showUserItem}>Register</UserItem>
          <UserItem id="login" onClick={showUserItem}>Login</UserItem>
          <UserItem id="exit" onClick={showUserItem}>Exit</UserItem>
        </UserWrapper>
         }
      </NavWrapper>
    </Wrapper>
  )
}

export default Header