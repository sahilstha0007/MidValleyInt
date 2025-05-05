import React, { useContext, useState } from 'react'
import clsx from 'clsx'
import { NavLink, useNavigate } from 'react-router-dom'
import navbar from '../datas/navbar.js'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";


const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
   
    return (
        <div>

            <div className='  bg-gray-100  flex justify-between py-2 px-9 items-center border-b border-b-gray-200  text-sm rounded-b-[12px]'>
                <div className=' flex items-center'>
                    <img className=' w-48 cursor-pointer' src="/img/logo.svg" alt="logo" onClick={() => { scrollTo({ top:0, behavior: 'smooth'}), navigate("/") }} />
                </div>

                <ul className=' hidden md:flex lg:gap-14 gap-7 items-start font-medium pr-9'>
                    {navbar.map((navbar, index) => {
                        return (<>
                            <NavLink onClick={() => { scrollTo(0, 0) }}
                                key={index}
                                to={navbar.href}
                                className="">
                                <li className=' font-semibold text-gray-600 text-[16px] relative group cursor-pointer'>

                                    {navbar.name}
                                    <div className=' group-hover:bg-black absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-4/5 '></div>
                                    <hr className=' absolute border-none outline-none left-1/2 -bottom-1 transfrom -translate-x-1/2 bg-[#f1662a] h-0.5 w-4/5  hidden' />

                                </li>
                            </NavLink>


                        </>)

                    })}

                </ul>
                <div className=' lg:hidden flex  md:ml-2'>
                    
                        <HiOutlineBars3BottomLeft onClick={() => { setShowMenu((prev) => !prev) }} className=' md:hidden w-6 cursor-pointer text-3xl' src="/img/logo.svg"/>


                </div>



            </div>
            <div className={clsx("md:hidden flex flex-col items-center mb-5  text-[#4b4949] bg-gray-100 transition-all duration-500", showMenu ? "max-h-64 opacity-100 " : "max-h-0 overflow-hidden   ")}>
                <ul className={clsx(" cursor-pointer  flex flex-col gap-4 items-center p-7 overflow-hidden")}>
                    {navbar.map((item, index) => (
                        <li onClick={() => { scrollTo(0, 0); setShowMenu(false); navigate(`${item.href}`) }} key={index}>{item.name}</li>
                    ))}
                </ul>
                <div>
                    <div className=' flex items-center gap-2 group relative'>
                            <div className={clsx(" flex gap-2", showMenu ? " visible opacity-100 transition-all duration-1000" : " invisible opacity-0")}>
                                <img className=' w-8 rounded-full ' src="" alt="" />
                                <img className=' w-4' src="" />
                            </div>
                            
                        </div> 
                </div>


            </div>
        </div>
    )
}

export default Navbar