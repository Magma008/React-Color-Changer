import React, { useState } from 'react'

const RGB = () => {
  const [color, setColor] = useState("rgb(128, 128, 128)")
  const firstNum = () => {
    return Math.floor(Math.random()*256)
  }
  
  const secondNum = () => {
    return Math.floor(Math.random()*256)
  }

  const thirdNum = () => {
    return Math.floor(Math.random()*256)
  }

  const clickHandler = () => {
    setColor(`rgb(${firstNum()}, ${secondNum()}, ${thirdNum()})`)
  }

  return (
    <div style={{ background: `${color}` }} className='min-h-[89.5vh] flex flex-col justify-center'>
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-4">

          <div className="px-4 py-3 rounded-md bg-slate-800">
            <h2 className="text-2xl md:text-3xl text-white">Background Color:<br className='sm:hidden' /><span style={{ color: `${color}` }} className="ml-3">{color}</span></h2>
          </div>

          <button onClick={() => clickHandler()} className='border transition-all duration-300 hover:bg-slate-900 hover:text-cyan-400 rounded-sm px-5 py-1 border-black/80'>Generate</button>
        </div>
      </div>
    </div>
  )
}

export default RGB