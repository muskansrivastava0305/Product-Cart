import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css'
import Recentorder from './component/Recentorder'
import { addToCart } from './cartSlice';



function ProductOrder() {
const cart = useSelector(state => state.cart)
const dispatch = useDispatch()
  const Orderdata = [
    {

      id:1,
      image: "shoes.png",
      name: "Shoes",
      prize: "Rs. 700",
      cart: "Add Cart"

    },

    {

      id:2,
      image: "Book-set.png",
      name: "Books",
      prize: "Rs. 345",
      cart: "Add Cart"

    },

    {
      id:3,
      image: "spex.png",
      name: "Spex",
      prize: "Rs. 475",
      cart: "Add Cart"

    },
    {
      id:4,
      image: "study-table.png",
      name: "Study Table",
      prize: "Rs. 350",
      cart: "Add Cart"

    }
  ];

  const handleAddToCart = (product) => {
     dispatch(addToCart(product))
  };

  return (
    <div className=' '>
      
       <div className=' bg-sky-600 text-white text-4xl font-semibold h-20 '>
        <h1 className=' p-5'>Product</h1>
        </div>
      
       <div  className=' flex flex-row w-full'>

      <div className=' flex flex-col gap-5 m-5 border border-gray-200 shadow-lg  w-full justify-between p-2'>
        {Orderdata?.map((item,index) => (
          <Recentorder 
          key={ index}
          image={item.image}
          name={item.name}
          prize={item.prize}
          cart={item.cart} 
          onClick={() => handleAddToCart(item)}/>
        ))}
        {/* <div className=' flex  hover:bg-slate-300 cursor-pointer w-full'>
        <div className=' w-36 '>
          <img src=' shoes.png'/>
        </div>
        <div className=' felx flex-col p-3 '>
          <h1 className=' font-semibold text-xl '>Shoes</h1>
          <p>Rs. 700</p>
        </div>
        </div>
        <div className=' bg-red-600 text-white button rounded-lg h-8 w-20 text-center  hover:bg-red-400 hover:text-black'>
         <button>Add Cart</button>
        </div> */}
      </div>
      

      <div className='flex flex-col w-full m-5  '>
        <div className=' border border-gray-200 shadow-lg text-red-900 font-bold text-2xl'>
          <h1 className=' text-center m-5'>Add to cart</h1>
        </div>
          <div >
          <ul >
          {cart?.map((product, index) => (
            <Recentorder
           // <li className=' flex flex-row justify-between border border-gray-200 shadow-lg m-2 h-32' key={index}>
              key={index} 
              image={product.image}
              name={product.name}
              prize={product.prize}
              />
             // </li> 
            
              
          ))}
        </ul>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default ProductOrder
