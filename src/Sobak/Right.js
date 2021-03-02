import React from 'react';
import c from './Right.module.css';
import {NavLink} from "react-router-dom";
const Right=()=>{
    return( <div className='Right'>
            <div className={c.Up}>
            <div  ><button className={c.But}><NavLink to="/content/center"  >1</NavLink></button></div>
            <div><button className={c.But}><NavLink to="/content/center2" >2</NavLink></button></div>
            <div ><button className={c.But}><NavLink to="/content/dialogs">Dialog</NavLink></button></div>

            </div>
            <div className={c.Down}>
                <div  ><button className={c.But}>Facebook</button></div>
                <div><button className={c.But}>Twiter</button></div>
                <div ><button className={c.But}>VK</button></div>
            </div>
        </div>
    )
}
export default Right;