import React, { createContext } from "react";
import Home from "./Components/Home";

const UserName = createContext<string>("");

const App = () => {
  
  let firstName = "Mohammed";
  
  return (
    <>
    <UserName.Provider value={firstName}>
    <div className="bg-[#cfc] border-[4px] border-[#f23] w-[300px] mx-auto mt-[15%] mb-[40px] text-center">
    <h1 className='text-red-600 font-bold text-4xl pb-[1rem]'>Hello this is App!</h1>
    <Home/>
    </div>
    </UserName.Provider>
    </>
  )
}

export default App;

export { UserName };
