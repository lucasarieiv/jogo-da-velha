import React from 'react';

const Input = ({ id = "", value = "", content = "", type = "" }) => (
    <>
        <input className="input" id={id} type={type} value={value} defaultValue="0"/>
    </>
)

export default Input;