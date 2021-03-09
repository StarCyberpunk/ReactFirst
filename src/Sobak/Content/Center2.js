import React from 'react';
import classes from './center2.module.css';
import Post from "./Post";
import {AddPostCre, ChangePostCre} from "../../Redux/Center2Reducer";
/*import {AddPost, ChangeNewPost} from "../../Redux/State";*/
// Forum
const Profile=(props)=>{
    return( <div className={classes.Profile}>
            <img src={props.img} height='200'/>
            <div className={classes.Profile} >{props.name}</div>
            <div className={classes.UserInfo}>Зарегестрирован:{props.info}</div>
        </div>
    )
}
const Content2=(props)=>{
    let SendText=React.createRef();
    let Send=()=>{
        let text=SendText.current.value;
        props.dispatch(AddPostCre(text));
        props.dispatch(ChangePostCre(""));
    }
    let ChangePost=()=>{
        let text=SendText.current.value;
        props.dispatch(ChangePostCre(text));

    }
    debugger
    let Comme=props.DataPost.Posts.map(n=>
        <Post name={n.name} text={n.text} />)
    return(<div className={classes.Center}>
            <Profile name={props.DataName[1].name} info={props.DataName[1].DateReg} img={props.DataName[1].img}/>
            <div className={classes.Text}>
                <div className={classes.Txt}>
                    <div>Friends</div>
                    <tr >
                        <td>
                            <img src="vk.com"/>
                            <div>{props.DataNameFriends[0].name}</div>
                        </td>
                        <td><img src="vk.com"/>
                            <div>{props.DataNameFriends[1].name}</div></td>
                        <td><img src="vk.com"/>
                            <div>{props.DataNameFriends[2].name}</div></td>
                    </tr>
                </div>
                <div className={classes.BN}>Back Next</div>
            </div>
            <div className= {classes.Forum}>
                <div className={classes.Zagol}>Tema</div>
                <div className={classes.Comments}>
                    <div >Comments</div>
                    {Comme}
                </div>
                <div className={classes.UComments}>
                    <textarea ref={SendText} onChange={ChangePost} value={props.DataPost.NewPost}/>
                    <button onClick={Send}>Send</button>

                </div>

            </div>
        </div>
    )
}
export default Content2;