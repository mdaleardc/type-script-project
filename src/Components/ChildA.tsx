import React from "react";

import { UserName } from "../App"

const ChildA = () => {
  
  
  return (
    
    <UserName.Consumer>
    {
    (firstName)=> {
      return (
    <div className='border-[2px] text-white border-[#fff] m-[4px] bg-[#a34] h-[100px]'>
    <h2 className='text-2xl text-[#00D4FF]'>Hello this is ChildA!</h2>
    <p>My name is {firstName}</p>  
    </div>
      )
    }}
    </UserName.Consumer>
    )
}


export default ChildA;