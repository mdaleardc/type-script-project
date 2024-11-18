import React, { useContext } from "react";
import { UserName } from "../Contexts/UserName"
import { UserAge } from "../Contexts/UserAge"
 

const ChildA = () => {
  
  const {firstName, lastName} = useContext(UserName);
  const {age, setAge} = useContext(UserAge);
  
  return (
    <>
    <div className='border-[2px] text-white border-[#fff] m-[4px] bg-[#a34] min-h-[130px]'>
    <h2 className='text-2xl text-[#00D4FF]'>Hello this is ChildA!</h2>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <button className='bg-gray-900 rounded' onClick={()=>setAge(age + 1)}>Change Age</button>
    </div>
    </>
    )
}


export default ChildA;