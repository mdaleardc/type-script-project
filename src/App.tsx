import Home from "./Components/Home";
import { Hello } from "./Contexts/UserName"
import { AgeYear } from "./Contexts/UserAge"


const App = () => {
  
  
  return (
    <>
    <AgeYear>
    <Hello>
    <div className="bg-[#cfc] border-[4px] border-[#f23] w-[300px] mx-auto mt-[15%] mb-[40px] text-center">
    <h1 className='text-red-600 font-bold text-4xl pb-[1rem]'>Hello this is App!</h1>
    <Home/>
    </div>
    </Hello>
    </AgeYear>
    </>
  )
}

export default App;
