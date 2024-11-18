import React, { useState, createContext } from "react";
import Home from "./Components/Home";

const UserName = createContext<string>("");

const fruitName = createContext<string>("");

const App = () => {
  
  const [fruit, setFruit] = useState("Apple")
  
  let firstName = "Amotur";
  let lastName = "Rohim";
  
  return (
    <>
    <UserName.Provider value={{firstName, lastName}}>
    <fruitName.Provider value={{fruit, setFruit}}>
    <div className="bg-[#cfc] border-[4px] border-[#f23] w-[300px] mx-auto mt-[15%] mb-[40px] text-center">
    <h1 className='text-red-600 font-bold text-4xl pb-[1rem]'>Hello this is App!</h1>
    <Home/>
    </div>
    </fruitName.Provider>
    </UserName.Provider>
    </>
  )
}

export default App;

export { UserName, fruitName };
