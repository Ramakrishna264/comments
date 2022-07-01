import React from 'react'
import { useState } from 'react';

function Comment(props) {
    const [show, setShow] = useState(false);
    const [text, setValue] = useState({});
    const addChildReply = () => {
        setShow(true);
    }
    const handlecomment = (e) => {
        const value = e?.target.value;
        setValue(value);  
    }
    const clickOnReply = () => {
        setShow(false);
        props?.handleSubmit(text,props?.parentLevel, props?.level);
    }
    return (
        <div>
        <div>{props.text}<button onClick={() => props?.onDelete(props?.parentLevel)}>delete</button><button onClick={() => addChildReply()}>Reply</button>
        {
            show &&
            <div><input type={text} onChange={handlecomment} /> <button onClick={clickOnReply}> Reply </button></div>
        }
        </div>
        </div>
    )
}

export default Comment