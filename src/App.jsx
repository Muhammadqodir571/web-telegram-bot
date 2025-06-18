import './App.css'
import {getData} from './constants/db'
import Card from './companents/card/card'
import Cart from './companents/cart/cart'
import { useEffect, useState } from 'react'


const courses = getData()
const telegram = window.Telegram.WebApp
function App() {

  const [cartItems, setCartItems] = useState([])
  useEffect(() =>{
    telegram.ready()
  })

  const onAddItem = (item)=>{
    const existItems = cartItems.find(c => c.id == item.id )
  
    if(existItems){
      const newData = cartItems.map(c => c.id == item.id ?{...existItems, quantity: existItems.quantity +1 }
        :c)
        setCartItems(newData)
    }
    else{
      const  newData = [...cartItems,{...item, quantity:1}]
      setCartItems(newData)
    }
 }
  const onRemoveItem = (item)=>{
    const existItems = cartItems.find(c => c.id == item.id) 
   
    

    if(existItems.quantity ===1){
      const newData = cartItems.filter(c => c.id !== existItems.id)
     
      
      setCartItems(newData)
    }else{
      const newData = cartItems.map(c => c.id == item.id ? {...existItems, quantity: existItems.quantity -1}:c)
      
      
      setCartItems(newData)
    }
  }
  const checkOut = ()=>{
    telegram.MainButton.text = "sotib olish:)"
    telegram.MainButton.show()
  }



  return (
    <>
    <h1 className='heading'>Boshlang'ich Darslar</h1>
    <Cart cartItems ={cartItems} checkOut= {checkOut}/>
    <div className='card-container'>
      {courses.map((course =>(
        <Card key={course.id} onAddItem={onAddItem} onRemoveItem = {onRemoveItem} course={course}/>
      )))}


    </div>
    
    </>
  )
}

export default App
