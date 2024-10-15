import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setFruit } from '../slices/fruitsSlice'

const Contact = () => {
  const [treeFruit,setTreeFruit] = useState("");
  const dispatch = useDispatch();

  const addFruit = () => {
      dispatch(setFruit(treeFruit))
  }
 

  return (
    <div>
        <input className='form-input'
               type="text" 
               value={treeFruit} 
               placeholder='enter your fruit' 
               onChange={(e)=> setTreeFruit(e.target.value)}/>
        <button onClick={addFruit} className="button">Add Fruit</button>    
    </div>
  )
}

export default Contact
