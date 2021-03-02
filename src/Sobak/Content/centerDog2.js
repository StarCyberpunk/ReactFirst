import React from 'react';
import classes from './center.module.css';
import {NavLink} from "react-router-dom";
//main
const Conte2 = (props) => {
    debugger;
    return (<div className={classes.Center}>
            <div className={classes.Zagol}>{props.DataCenter[1].Zagol}</div>
            <div className={classes.Text}>

                <div className={classes.Txt}>{props.DataCenter[1].Text}</div>
                <div className={classes.BN}>
                    <button ><NavLink to="/Content/Center">Back</NavLink></button>
                    <button ><NavLink to="/Content/centerDog3">Next</NavLink></button></div>
            </div>
            <div className={classes.Dogimg}><img height='430'
                                                 src={props.DataCenter[1].img}/>
            </div>
        </div>
    )
}
export default Conte2;