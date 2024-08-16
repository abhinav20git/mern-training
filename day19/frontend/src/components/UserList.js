import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        const fetchUsers =async () =>{
            try{
                const response = await axios.get("http://localhost:5000/api/users");
                setUsers(response.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchUsers();
    },[])


  return (
    <ul>
        {users.map((user) =>(
            <>
                <h3 key={user._id}>{user.username}</h3>
                <li>{user.email}</li>
                <li>{user.age}</li>
            </>
        ))}
    </ul>
  )
}

export default UserList