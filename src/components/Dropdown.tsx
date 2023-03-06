import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import list from '../list.json'

export default function Dropdown() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=' relative flex flex-col items-center w-[350px] h-[350px rounded-md]'>
            <button onClick={() => setIsOpen((prev) => !prev)} className=' bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent duration-300'>
                 Dropdown
                 {!isOpen ? (
                    <AiOutlineCaretDown className='h-8' />
                 ) : ( <AiOutlineCaretUp className='h-8' />)
                 }
                 </button>

                 { isOpen && (
                    <div className=' bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full'>
                        {list.map((item, i) => (
                            <div className=' flex w-full justify-between cursor-pointer rounded-r-lg border-l-transparent p-4'>
                                <h2>{item.city}</h2>
                                <h2>{item.icon}</h2>
                            </div>
                        ))}
                    </div>
                 )}
        </div>
    )
}
