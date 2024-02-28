import React, { useState } from 'react'

const Hex = () => {
  const [color, setColor] = useState("#ffff00")
  const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

  const getRandom = () => {
    return Math.floor(Math.random()*symbols.length)
  }
  const clickHandler = () => {
    let randomColor = "#"
    for (let i = 0; i < 6; i++) {
      randomColor += symbols[getRandom()]
    }
    setColor(randomColor)
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

export default Hex