import React, {useEffect, useState} from 'react' 
import axios from 'axios' 
const FetchRegistrations = () => { 
    const [res,setRes]=useState([]) 
    const [formData, setFormData]=useState({  
        name:'', role:'', email:'', password:''}) 
const fetchData= async ()=>{  
    const response = await axios.get('http://localhost:8080/retrieve', 
    {headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }});
       setRes(response.data);
       console.log(Response.data)   
};
    useEffect(()=>{  
     fetchData()  
    },  
    []) 

const updateData=async(id)=>{  
    console.log(id)  
    const res=await axios.put(`http://localhost:8080/users/${id}`, formData)  
    fetchData();  
    console.log(res.data)  
    }  
    const handleDelete=async (id)=>{
        await axios.delete(`http://localhost:8080/users/${id}`)
        .then(response=>{
            console.log(response.data)
        })
        fetchData()
    }
    const changeHandler=(e)=>{  
      setFormData({ ...formData, [e.target.name]: e.target.value});  
    }; 
    return (
        <div>
            <center>
                <h1>Registrations</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ROLE</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((item, index) => (
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.role}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='New Name'
                                        onChange={changeHandler}
                                    />
                                    <input
                                        type='text'
                                        name='role'
                                        placeholder='New Role'
                                        onChange={changeHandler}
                                    />
                                    <input
                                        type='text'
                                        name='email'
                                        placeholder='New Email'
                                        onChange={changeHandler}
                                    />
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='New Password'
                                        onChange={changeHandler}
                                    />
                                    <button onClick={() => updateData(item._id)}>Update</button>
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
 
} 
export default FetchRegistrations