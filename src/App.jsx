import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css'
import Recentorder from './component/Recentorder'
import { addToCart , incrementQuant, decrementQuant } from './cartSlice';



function ProductOrder() {
const cart = useSelector(state => state.cart)
const dispatch = useDispatch()
  const Orderdata = [
    {

      id:1,
      image: "shoes.png",
      name: "Shoes",
      prize: "Rs. 700",
    },

    {

      id:2,
      image: "Book-set.png",
      name: "Books",
      prize: "Rs. 345",
    },

    {
      id:3,
      image: "spex.png",
      name: "Spex",
      prize: "Rs. 475",
    },
    {
      id:4,
      image: "study-table.png",
      name: "Study Table",
      prize: "Rs. 350",
    }
  ];

  // const handleAddToCart = (product) => {
  //    dispatch(addToCart(product))
  // };

  const handleAddToCart = (product) => {
      dispatch(addToCart({ ...product, quantity: 1 }));
 
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
          id={item.id}
          onClick={() => handleAddToCart(item)}/>
        ))}
        
      </div>
      

      <div className='flex flex-col w-full m-5  '>
        <div className=' border border-gray-200 shadow-lg text-red-900 font-bold text-2xl hover:cursor-pointer bg-blue-200 '>
          <h1 className=' text-center m-5'>Add to cart</h1>
        </div>
          <div >
          <ul >
          {cart?.map((product, index) => (
            <li key={index} >
            <Recentorder
              key={product.id} 
              image={product.image}
              name={product.name}
              prize={product.prize}
              id={product.id}
              />    
          
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default ProductOrder
