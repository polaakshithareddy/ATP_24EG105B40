import { Children, createContext,useState } from "react"
//create conetxt provider object
export const counterContextObj=createContext();

function ContextProvider({children}) {
    //state
  const [counter,setCounter] = useState(10);
   const [counter1,setCounter1] = useState(10);
  //function to change state
  const changeCounter=()=>{
    setCounter(counter+1);
  }
  const changeCounter1=()=>{
    setCounter1(counter1+1);
  }
  return (
    <counterContextObj.Provider value={{counter,changeCounter,counter1,changeCounter1}}>
      
        {children}
        </counterContextObj.Provider>
   
  )
}

export default ContextProvider