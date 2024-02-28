import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="bg-slate-800 py-4 shadow-md shadow-slate-500">
            <div className='main-container'>
                <div className="flex flex-col gap-3 sm:flex-row justify-between items-center">
                    <h1 className="text-cyan-400 sm:text-3xl text-2xl font-semibold">Color Changer</h1>
                    <div className="flex gap-4">
                        <NavLink className={"text-white sm:text-xl text-lg"} to={"/name"}>Name</NavLink>
                        <NavLink className={"text-white sm:text-xl text-lg"} to={"/rgb"}>RGB</NavLink>
                        <NavLink className={"text-white sm:text-xl text-lg"} to={"/hex"}>Hex</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header