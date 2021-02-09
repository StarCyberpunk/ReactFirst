import React from 'react';
import classes from './post.module.css';

const Post=(props)=>{
    return(<div className={classes.Post} >

            <div className={classes.User}>{props.name}
                <img className={classes.Photo} src='https://vk.com'/>
            </div>
            <div className={classes.Content}>
                {props.text}
            </div>
            <button>Like</button>
        </div>
    )
}
export default Post;