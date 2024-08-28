import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  const Submit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/createUser',{name, email, age})
    .then(result => { 
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-4">
        <form onSubmit={Submit}>
          <h2 className="mb-4">Add User</h2>
          <div className="mb-3">
            <label htmlFor="nama" className="form-label">Nama</label>
            <input type="text" id="nama" placeholder='Masukan Nama' className='form-control'
              onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" id="email" placeholder='Masukan Email' className='form-control'
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="umur" className="form-label">Umur</label>
            <input type="number" id="umur" placeholder='Masukan Umur' className='form-control'
            onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
