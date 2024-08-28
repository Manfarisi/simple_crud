import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
    .then(res => {
      console.log(res);
      window.location.reload();
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
      <div className="w-75 bg-white rounded p-4 shadow-lg">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">User List</h2>
          <Link to='/create' className='comic-buttonA'>
            <AiOutlinePlus className='me-1' /> Add User
          </Link>
        </div>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th className="text-center">Action</th> {/* Pusatkan teks di kolom "Action" */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td className="text-center"> {/* Pusatkan elemen di kolom "Action" */}
                  <div className="d-flex justify-content-center gap-2"> {/* justify-content-center untuk pusat */}
                    <Link to={`/update/${user._id}`} className='comic-buttonU'>
                      <AiOutlineEdit className='me-1' /> Update
                    </Link>
                    <button className='comic-button' onClick={() => handleDelete(user._id)}>
                      <AiOutlineDelete className='me-1' /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
