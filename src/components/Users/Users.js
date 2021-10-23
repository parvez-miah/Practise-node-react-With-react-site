import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    //DELETE an user

    const handleDelete = id => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('User is Deleted Succsessfully');
                    const remain = users.filter(user => user._id !== id)
                    setUser(remain);
                }
            })
    }



    return (
        <div>
            <h2>Users Found {users.length}</h2>
            <ul>
                {users.map(user => <li
                    key={user._id}
                ><b>Name:</b> {user.name} ::: <b>email:</b>  {user.email} <button onClick={() => handleDelete(user._id)}>X</button> <Link to={`/users/update/${user._id}`}><button>Update</button></Link></li>)}
            </ul>
        </div>
    );
};

export default Users;