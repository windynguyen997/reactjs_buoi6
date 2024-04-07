import React, { useState } from 'react';

const Header = (props) => {
    const {add}=props
    const[text,setText]=useState('')
    const handle_add=(e)=>{
        add(text)
        setText('')
    }
    return (
        <div className='header'>
            <h3>My To Do List</h3>
            <input placeholder='Enter your todo...' value={text} onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key=='Enter' && text){
                    handle_add()
                }
            }}></input>
        </div>
    );
}

export default Header;
