import React from 'react'

const Recentorder = ({ image, name, prize, cart, onClick }) => {
    return (

        <div className=' flex flex-row justify-between border border-gray-200 shadow-lg m-2 h-32'>
            <div className=' flex gap-8 hover:bg-slate-300 cursor-pointer w-full p-5'>
                <div className=' w-24 '><img src={image} className=' h-24' /></div>
                <div className=' felx flex-col p-3 '>
                    <h1 className=' font-semibold text-xl '>{name}</h1>
                    <p>{prize}</p>
                </div>
            </div>
            <div className=' bg-red-600 text-white button rounded-lg h-8 w-20 text-center  hover:bg-red-400 hover:text-black m-3'>
                <button onClick={onClick}>{cart}</button>
            </div>
        </div>
    )
}

export default Recentorder