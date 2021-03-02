import React from 'react';
import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const People=(props)=>{
    /*People*/

    return(
                <div className={c.People }>
                    <NavLink to={"/content/dialogs/" + props.id }>{props.name}</NavLink>
                </div>
        )
}
export default People;