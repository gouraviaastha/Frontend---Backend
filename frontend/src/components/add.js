import React, { useState } from 'react'
import "./add.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




function Add() {
  const history = useNavigate()

  const [tabledata, setData] = useState({
    name: '',
    contact: '',
    category: '',
    img: '',
    join: '',

  })

  const handleChange = (e) => {
    setData({ ...tabledata, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/add", tabledata)
      .then((response)=> {
        alert("Date saved successfully", response.data)
        history('/')
        window.location.reload();
      }).catch((err) => {
        console.log(err)
      })
      setData({name: '',
      contact: '',
      category: '',
      img: '',
      join: '',})
  }


  return (
    <div className='contain'>
      <form onSubmit={handleSubmit}>
        <table className='head'>
          <tbody>
            <tr>
              <td>Name </td>
              <td><input type="text"
               placeholder="Enter name"
               name='name'
                value={tabledata.name} 
                onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Contact No.</td>
              <td><input type="text"
               placeholder="Enter number" 
               name="contact" 
               size="10" 
               value={tabledata.contact} 
               onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>IMG</td>
              <td><input type="text" 
              placeholder="Enter image-URL"
              name="img" 
              value={tabledata.img} 
              onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Category</td>
              
              <td>
            
                <select name="category" value={tabledata.category} onChange={handleChange} >
                <option >Experience</option>
                <option >Fresher</option></select></td>
            </tr> 
            <tr>
              <td>date</td>
              
              <td><input type="date"  name="join"  value={tabledata.join}    onChange={handleChange} /></td>
            </tr>
            <tr>
                <div className='btn'> <button >Submit</button>   </div>

            </tr>
        
          </tbody>
        </table>
      </form>
    </div>
  )
}




export default Add

