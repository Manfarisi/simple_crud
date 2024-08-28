import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';


function UpdateUser() {
  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  }, [])
  
  const Update = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:3001/updateUser/${id}`,{name, email, age})
    .then(result => { 
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
      <div className="w-50 bg-light rounded p-4 shadow-lg">
        <form onSubmit={Update}>
          <h2 className="mb-4">Update User</h2>
          <div className="mb-3">
            <label htmlFor="nama" className="form-label">Nama</label>
            <input type="text" id="nama" placeholder='Update Nama' className='form-control'
            value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" placeholder='Update Email' className='form-control'
            value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="umur" className="form-label">Umur</label>
            <input type="number" id="umur" placeholder='Update Umur' className='form-control'
            value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-warning">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
