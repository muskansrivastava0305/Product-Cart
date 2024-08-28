import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { incrementQuant , decrementQuant } from '../cartSlice';



const Recentorder = ({id, image, name, prize, onClick }) => {
    const cart = useSelector((state)=> state.cart)
    const product = cart?.find((item)=> item.id === id)
    console.log(cart)
    const dispatch = useDispatch()

    const handleIncrementQuant = (id) => {
        dispatch(incrementQuant(id));
      };
    
      const handleDecrementQuant = (id) => {
        dispatch(decrementQuant(id));
      };

    return (

        <div className=' flex flex-row justify-between border border-gray-200 shadow-lg m-2 h-32'>
            <div className=' flex gap-8 hover:bg-slate-300 cursor-pointer w-full p-5'>
                <div className=' w-24 '><img src={image} className=' h-24' /></div>
                <div className=' felx flex-col p-3 '>
                    <h1 className=' font-semibold text-xl '>{name}</h1>
                    <p>{prize}</p>
                </div>
            </div>
            {
                product ? (
                    <div className="flex flex-row justify-between w-52 border border-gray-700 h-10 m-3  button rounded-lg text-center">
                    <button className=' bg-green-800 text-white font-bold text-2xl w-9 hover:bg-green-400 hover:text-black  button rounded-s-lg'  onClick={() => handleDecrementQuant(id)}>-</button>
                    <input name='quantity' type='text' value={product.quantity}  className=' w-14 text-center text-xl bg-slate-200'/>
                        <button className="bg-red-800 text-white w-9 text-center hover:bg-red-400 hover:text-black button rounded-e-lg font-bold text-2xl "
                          onClick={() =>  handleIncrementQuant(id)}>+</button>
                  </div>
                ) : (
                     <div className='bg-gray-600 text-white button rounded-lg h-8 w-52 text-center  hover:bg-red-400 hover:text-black m-3'>
                <button onClick={onClick} className=' '>Add to cart</button>
            </div> 
                )
            }     
        </div>
    )
}

export default Recentorder