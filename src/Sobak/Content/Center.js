import React from 'react';
import classes from './center.module.css';
import {NavLink} from "react-router-dom";
//main
const Content1 = (props) => {

    return (<div className={classes.Center}>
            <div className={classes.Zagol}>{props.DataCenter[0].Zagol}</div>
            <div className={classes.Text}>

                <div className={classes.Txt}>{props.DataCenter[0].Text}</div>
                <div className={classes.BN}>
                   <button >Back </button>
                    <button ><NavLink to="/Content/centerDog2">Next</NavLink></button></div>
            </div>
            <div className={classes.Dogimg}><img height='430'
                                                 src={props.DataCenter[0].img}/>
            </div>
        </div>
    )
}
export default Content1;
