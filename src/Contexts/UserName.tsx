import { createContext } from "react";



const UserName = createContext<string>("");

const Hello = ({children}) => {
  
  
  let firstName = "Amotur";
  let lastName = "Rohim";
  
  
  return (
    <UserName.Provider value={{firstName, lastName}}>
    {children}
    </UserName.Provider>
    )
}




export { UserName, Hello };