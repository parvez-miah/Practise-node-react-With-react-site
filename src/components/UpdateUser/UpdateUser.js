import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const UpdateUser = () => {

    const { id } = useParams()

    const [user, setUser] = useState({})

    const url = `http://localhost:5000/users/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const handleNAmeChange = e => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, email: user.email }
        setUser(updateUser);
    }

    const handleEmailChange = e => {
        const emailChange = e.target.value;
        const updateUser = { name: user.name, email: emailChange }
        setUser(updateUser);
    }

    const handleFormChange = e => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => {

                if (data) {
                    alert('This user is deleted Successfully')
                    setUser({})
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Update User : {user.name}</h2>
            <form onSubmit={handleFormChange}>
                <input onChange={handleNAmeChange} type="text" value={user.name || ''} />
                <input onChange={handleEmailChange} type="email" value={user.email || ''} name="" id="" />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;