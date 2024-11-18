import React, { useContext } from "react";

import ChildA from "./ChildA";
import { UserAge } from "../Contexts/UserAge"

const Home = () => {
  
  const {age} = useContext(UserAge);
  
  
  return (
    <div className='bg-[#756] border-[3px] border-[#0cd] m-[4px]'>
    <h1 className='text-[#3f7] text-3xl font-semibold pb-[1rem]'>Hello this is Home!</h1>
    <p>Year: {age}</p>
    <ChildA />
    </div>
    )
}

export default Home;