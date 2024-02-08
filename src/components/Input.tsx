import React from 'react';
import './input.css';

function Input() {
    return (
        <form className="form">
            <h2>Name of your city </h2>
            <div className='form_control'>
                <input type="text" className="form_input" />
                <button className="form_button">Add</button>
            </div>
        </form>
    )
}

export default Input;