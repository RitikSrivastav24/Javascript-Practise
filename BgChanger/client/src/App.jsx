import { useEffect } from "react";
import { useState } from "react"

function App() {
  const defaultColor="blue"
  const [color, setColor] = useState(()=>{
    return localStorage.getItem("bgColor" || defaultColor)
  });
  const colors=["red", "green", "olive", "pink", "yellow"]
  useEffect(()=>{
   localStorage.setItem("bgColor", color)
  },[color])
  const handleReset=()=>{
    localStorage.removeItem("bgColor",color);
    setColor(defaultColor)
  }
  // useEffect(()=>{
  //   const getColor=localStorage.getItem("bgColor")
  //   if(getColor){
  //     setColor(getColor)
  //   }
  // },[])
  return (
    <>
      <div className="w-full flex flex-wrap duration-200 h-screen"
        style={{ backgroundColor: color }}>
          <div className="fixed flex flex-wrap w-full justify-center mt-10 px-2 ">
            <div className="flex flex-wrap justify-center gap-3 shadow-3xl bg-white w-90 rounded">
              {colors.map((c)=>(
                <button
                key={c}
                className="rounded px-3 py-3 text-white shadow-3xl"
                style={{backgroundColor:c}}
                onClick={()=>{setColor(c)}}
                >
                  {c}
                </button>
              ))}

              <button className="rounded px-3 py-3 text-white shadow-3xl bg-black"
              onClick={handleReset}>Reset</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
