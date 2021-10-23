import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleForm = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User is Added Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={handleForm}>
                <input ref={nameRef} type="text" placeholder="name" />
                <input ref={emailRef} type="email" name="email" id="" placeholder="email" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddUser;