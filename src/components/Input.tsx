import React, { useState } from 'react';
import './input.css';

function Input() {
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(value); // Print the value to the console
    };

    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <h2>Name of your city </h2>
            <div className='form_control'>
                <input type="text" className="form_input" onChange={(e) => setValue(e.target.value)}  placeholder='Enter your city'/>
                <button className="form_button" type="submit">Add</button>
            </div>
        </form>
        <p>{value}</p>
        </>
    );
}
        

export default Input;