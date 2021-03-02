import React from 'react';
import c from './../Dialogs.module.css';


const MessageU=(props)=>{
    return(
        <div className={c.MessageU}>{props.name +':'+ props.message}</div>
    )

}
export default MessageU;