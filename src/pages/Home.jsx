import React, { useState,useRef } from 'react'
import {useDispatch} from 'react-redux'
import { setUsers } from '../slices/userSlice';

const Home = () => {
    const dispatch = useDispatch()
    const inputRef = useRef();

    const [formInput,setFormInput] = useState({
        name:"",
        age:"",
        email: "",
        contact:"",
    })

    const handleChange = (e) => {

      const {name, value} = e.target;
    setFormInput((currInput)=>{
        return{
            ...currInput,
            [name]: value
        };
    });


};

const addUser = (event) => {
  event.preventDefault();
  dispatch(setUsers(formInput));
}

  return (
    <div className='div-form'>
<form>
     <h1>Redux-Todo</h1>
    <label className='form-label' htmlFor="name">Name:</label>
    <input className='form-input' name= "name" type="text" ref={inputRef} value={formInput.name} onChange={handleChange} placeholder='Enter your name...'/><br />

    <label className='form-label'  htmlFor="age">age:</label>
    <input className='form-input' name='age' type="number" ref={inputRef}  value={formInput.age} onChange={handleChange}  placeholder='Enter your age...'/><br />

    <label  className='form-label'  htmlFor="email">Email:</label>
    <input className='form-input' name='email' type="email"  ref={inputRef} value={formInput.email} onChange={handleChange}  placeholder='Enter your Email...'/><br />

    <label className='form-label'  htmlFor="Contact">Contact:</label>
    <input className='form-input' name='contact' type="number"  ref={inputRef}  value={formInput.contact} onChange={handleChange} placeholder='Enter your Contact Number...'/><br />

    <button type='submit' onClick={addUser} className="button">Submit</button>
</form>    
</div>
  )
}

export default Home



9677078950