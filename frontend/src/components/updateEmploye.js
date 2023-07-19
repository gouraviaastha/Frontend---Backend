import "./add.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState,useEffect } from 'react'

function UpdateEmploye() {
    const {id} = useParams()
    const history = useNavigate()
    const [tabledata, setData] = useState({
        _id: id,
        name: '',
        contact: '',
        category: '',
        img: '',
        join: '',
    })

    useEffect(() => {
        axios.get('http://localhost:4000/get/'+ id)
            .then((res) => {
                setData({...tabledata, name: res.data[0].name, contact: res.data[0].contact , img: res.data[0].img, category: res.data[0].category,  join: res.data[0].join })
            })
            .catch((err) => console.log(err))
    },[])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:4000/update", tabledata)
            .then((response) => {
                alert("Date updated successfully", response.data)
                history('/')
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })      
    }
    
    return (
        <div className='contain'>
            <form onSubmit={handleSubmit}>
                <table className='head'>
                    <tbody>
                        <tr>
                            <td>Name </td>
                            <td><input type="text"
                                name='name'                                
                                value= {tabledata.name}
                                onChange={e=>setData({...tabledata,name:e.target.value})}
                                /></td>
                        </tr>
                        <tr>
                            <td>Contact No.</td>
                            <td><input type="text"

                                
                                name="contact"
                                size="10"
                                value={tabledata.contact}
                                onChange={e=>setData({...tabledata,contact:e.target.value})}
                                /></td>
                        </tr>
                        <tr>
                            <td>IMG</td>
                            <td><input type="text"

                                name="img"
                                value={tabledata.img}
                                onChange={e=>setData({...tabledata,img:e.target.value})}
                                 /></td>
                        </tr>
                        <tr>
                            <td>Category</td>

                            <td>
                                <h5 style={{color:"skyblue"}}>{tabledata.category}</h5>
                                <select name="category" value={tabledata.category} 
                                onChange={e=>setData({...tabledata,category:e.target.value})}> 
                                <h3>{tabledata.category}</h3>
                                    <option >Experience</option>
                                    <option >Fresher</option></select></td>
                        </tr>
                        <tr>
                            <td>date</td>

                            <td><input type="date" name="join"  onChange={e=>setData({...tabledata,join:e.target.value})} /></td>
                        </tr>
                        <tr>
                            <div  className='btn'> <button >Submit</button>   </div>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default UpdateEmploye
