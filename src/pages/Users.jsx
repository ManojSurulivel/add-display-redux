import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { deleteUser } from '../slices/userSlice';

const Users = () => {
    const users = useSelector((state) => state.usersInfo.users)

    const dispatch = useDispatch();
    console.log(users) ;

    const deleteUserInfo = (index) => {
     dispatch(deleteUser(index))
    }

    console.log(users);
  return (
    <div>
      <h1>Users Page</h1>
        {users.length > 0  ? (
        <ul>
          {users.map((user, index)=> {
                 return (
                        <div key={index}>
                        <h3>Name:<span>{user.name}</span></h3>
                        <h3>Age:<span>{user.age}</span></h3>
                        <h3>Email:<span>{user.email}</span></h3>
                        <h3>Contact:<span>{user.contact}</span></h3>
                        <button className="button" onClick={()=> deleteUserInfo(index)}>Delete</button>
                       </div>
                         )
           })}
        </ul>
        ) : ( <h1 style={{color:"red"}}>"No data submitted Here"</h1> )
        }
    </div>
  )
}

export default Users
