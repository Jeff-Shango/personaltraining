import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [info, setInfo] = useState({
        Name: "",
        Event: "",
        Type: "",
        notes: "",
        time: "",
        date: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:7500/add", info)
            navigate("/sessions")
        }catch (err){
            console.log(err)
        }
    }

    console.log(info)

  return (
    <div className='form'>
        <h1>Add New Event</h1>
        <input type="text" placeholder='Name' onChange={handleChange} name='Name' />
        <input type="text" placeholder='Event' onChange={handleChange} name='Event' />
        <input type="text" placeholder='Type' onChange={handleChange} name='Type' />
        <input type="text" placeholder='notes' onChange={handleChange} name='notes' />
        <input type="text" placeholder='time' onChange={handleChange} name='time' />
        <input type="text" placeholder='date' onChange={handleChange} name='date' />
        <button className='formButton' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add