import { useState } from "react"
import { Wrapper, Logo, NavWrapper, User, UserWrapper, UserItem, MenuWrapper, MenuItem, TWrapper, TNav, YouAreLogged  } from "./HeaderStyle"


const Header = () => {
  const [userMenu, setUserMenu] = useState(false)
  const [logged, setLogged] = useState("logged out")

  const showUserMenu = () => {
    setUserMenu(!userMenu)
  }

  const showUserItem = (e) => {
    setUserMenu(false)
    setLogged(e.target.id)
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
          <UserItem id="now registered" onClick={showUserItem}>Register</UserItem>
          <UserItem id="logged in" onClick={showUserItem}>Login</UserItem>
          <UserItem id="logged out" onClick={showUserItem}>Exit</UserItem>
        </UserWrapper>
         }
      </NavWrapper>
      <YouAreLogged logged={logged}>You are {logged}</YouAreLogged>
    </Wrapper>
  )
}

export default Header