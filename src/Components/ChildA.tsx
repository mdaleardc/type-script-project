import React, { useContext } from "react";

import { UserName, fruitName } from "../App"

const ChildA = () => {
  
  const {firstName, lastName} = useContext(UserName);
  const {fruit, setFruit} = useContext(fruitName);
  
  return (
    <>
    <div className='border-[2px] text-white border-[#fff] m-[4px] bg-[#a34] h-[200px]'>
    <h2 className='text-2xl text-[#00D4FF]'>Hello this is ChildA!</h2>
    <p>My name is {firstName} {lastName}</p>
    <p>My favorite fruit is {fruit}</p>
    <button className='border-[3px] rounded-md' onClick={()=>setFruit("Mango")}>Change Fruite</button>
    </div>
    </>
    )
}


export default ChildA;