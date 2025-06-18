import Button from '../button/button'
import './card.css'
import {useState} from 'react'
function Card(props) {
  const [count, setCount] = useState(0)
    const {course, onAddItem , onRemoveItem} = props
    const handleIncrment = ()=>{
      setCount(prev => prev +1)
      onAddItem(course)
    }
    const handleDicrument = ()=>{
      setCount(prev => prev -1)
      onRemoveItem(course)
    }
  return (
      <>
        <div className='card'>
          <span className={`${count !== 0? 'card-badge': 'card-badge-hidden' }`}>{count}</span>
          <div className='card-image'>
            <img src={course.Image} alt={course.title} width={'100%'} height={'250px'}/>
          </div>
          <div className='card-body'>
            <h2 className='card-title'>{course.title}</h2>
            <div className='card-price'>
               {course.price.toLocaleString('en-US',
                 {style: 'currency',
                  currency: 'USD'})} 
            </div>
          </div>
          <div className='hr'></div>
          <div className='btn-card'>
            <Button  title ={'+'}  onClick = {handleIncrment} type = {'add'}/>
            {count !== 0 &&(
              <Button  title ={'-'} onClick ={ handleDicrument} type = {'remove'}/>

            )}
          </div>
        </div>
      </>
  )
}

export default Card