

import axios from 'axios';
import React, { useState } from 'react';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);

        try {
            const response = await axios.post("http://localhost:5000/api/users", {
                username,
                email,
                age,
            });
            console.log("User registered", response.data);
            setUsername("");
            setEmail("");
            setAge(0);
        } catch (err) {
            console.error("Registration failed", err);
        }
    };

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="enter name" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />  
                <input 
                    type="text" 
                    placeholder="enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />  
                <input 
                    type="number" 
                    placeholder="enter age" 
                    value={age} 
                    onChange={(e) => setAge((e.target.value))} 
                />  
                <button type="submit">Submit</button>
            </form>  
        </div>
    );
};

export default Registration;