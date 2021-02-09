import React from 'react';
import classes from './center2.module.css';
import Post from "./Post";
// Forum
const Profile=(props)=>{
    return( <div className={classes.Profile}>
            <img src={props.img} height='200'/>
            <div className={classes.Profile} >{props.name}</div>
            <div className={classes.UserInfo}>Зарегестрирован:{props.info}</div>
        </div>
    )
}
const Content2=()=>{
    return(<div className={classes.Center}>
            <Profile name="Валя" info="25.02.2007" img="https://image.freepik.com/free-photo/charming-smiling-girl-in-yellow-eyeglasses-winking-and-showing-a-thumb-up_8353-6796.jpg"/>
            <div className={classes.Text}>
                <div className={classes.Txt}></div>
                <div className={classes.BN}>Back Next</div>
            </div>
            <div className= {classes.Forum}>
                <div className={classes.Zagol}>Tema</div>
                <div className={classes.Comments}>
                    <div >Comments</div>
                    <Post name='Nick' text='HIOA' />
                    <Post name='Jane' text='WAWAP'/>
                </div>
                <div className={classes.UComments}>
                    <textarea ></textarea>
                    <button>Send</button>

                </div>

            </div>
        </div>
    )
}
export default Content2;