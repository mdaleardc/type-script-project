import { createContext, useState } from "react";



const UserAge = createContext<number>();

const AgeYear = ({children}) => {
  const [age, setAge] = useState(3);
  
  return (
    <UserAge.Provider value={{age, setAge}}>
    {children}
    </UserAge.Provider>
    )
}

export { UserAge, AgeYear };
