import React from 'react';
import c from './Right.module.css';
import {NavLink} from "react-router-dom";
const Right=()=>{
    return( <div className='Right'>

            <div  ><button className={c.But}><NavLink to="/content/center"  >1</NavLink></button></div>
            <div><button className={c.But}><NavLink to="/content/center2" >2</NavLink></button></div>
            <div ><button className={c.But}><NavLink to="/content/dialogs">Dialog</NavLink></button></div>
        </div>
    )
}
export default Right;