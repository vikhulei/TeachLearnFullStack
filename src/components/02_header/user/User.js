import { useState } from "react"
import { UserIcon, UserWrapper, UserItem, YouAreLogged } from "./UserStyle"

const User = ({ userMenu, setUserMenu, setHambMenu }) => {
    const [logged, setLogged] = useState("logged out")

    const showUserMenu = () => {
        setHambMenu(false)
        setUserMenu(!userMenu)
      }
    
      const showUserItem = (e) => {
        setUserMenu(false)
        setLogged(e.target.id)
      }
    

  return (
    <div>
        <UserIcon onClick={showUserMenu}/>
        { userMenu && <UserWrapper>
          <UserItem id="now registered" onClick={showUserItem}>Register</UserItem>
          <UserItem id="logged in" onClick={showUserItem}>Login</UserItem>
          <UserItem id="logged out" onClick={showUserItem}>Exit</UserItem>
        </UserWrapper>
         }
      <YouAreLogged logged={logged}>You are {logged}</YouAreLogged>
    </div>
  )
}

export default User