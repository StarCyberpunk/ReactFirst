
import siba from "./siba.png"
import Center2Reducer from "./Center2Reducer";
import DialogsReducer from "./DialogsReducer";
import CenterReducer from "./CenterReducer";

let Store= {
    _CallSubcriber(state) {
        console.log(state)
    },

    _State: {
        DataCenter: [
            {
                Zagol: 'Piper',
                Text: 'Piper-собака спасатель,наша работа ',
                img: 'https://avatanplus.com/files/resources/original/57e89652e2a3c157648b33f0.png'
            },
            {
                Zagol: 'Odzi',
                Text: 'Just simple home dog',
                img: siba
            }
        ],
        DataPost: {
            Posts: [
                {name: 'Nick', text: 'Lol its u?'},
                {name: 'Jane', text: 'What the Fuck,bro?'}],
            NewPost: ""
        },
        DataName: [
            {
                id: 1,
                name: "Вася",
                img: 'data:image/jpeg;base64,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',
                DateReg: "25.02.2007"
            },
            {
                id: 2,
                name: "Валя",
                img: 'https://image.freepik.com/free-photo/charming-smiling-girl-in-yellow-eyeglasses-winking-and-showing-a-thumb-up_8353-6796.jpg',
                DateReg: "15.03.2017"

            }
        ],
        DataNameFriends: [
            {id: 1, name: "Вася"}, {id: 2, name: "Валя"}, {id: 3, name: "Dick"}
        ],
        DataMessage1: {
            OldMessage:
                [{message: "Ты где,шкура?", name: "Вася"}, {message: "Бухаю", name: "Валя"}],
            NewMessage: ""
        }
    },
    Subscribe(Observer){
        this._CallSubcriber=Observer;
    },
   /* AddMessage(TextMessage){
        let Message=
            { name: "Вася",message:TextMessage}
        this._State.DataMessage1.OldMessage.push(Message);
        this._CallSubcriber(this._State);
    },
    ChangeMessage(NewMessage){
        this._State.DataMessage1.NewMessage=NewMessage;
        this._CallSubcriber(this._State);
    },
    AddPost(TextMessage){
        let Message=
            { name: "Вася",text:TextMessage}
       this._State.DataPost.Posts.push(Message);
        this._CallSubcriber(this._State);
    },
    ChangeNewPost(TextMessage){
        this._State.DataPost.NewPost=TextMessage;
        this._CallSubcriber(this._State);
    },*/
    GetState(){
        return this._State;
    },
    dispatch(action){
        /*if(action.type==='ADD-MESSAGE'){
            let Message=
                { name: "Вася",message:action.TextMessage}
            this._State.DataMessage1.OldMessage.push(Message);
            this._CallSubcriber(this._State);
        }
        else if(action.type==='CHANGE-MESSAGE'){
            this._State.DataMessage1.NewMessage=action.NewMessage;
            this._CallSubcriber(this._State);
        }
        else if(action.type==='ADD-POST'){
            let Message=
                { name: "Вася",text:action.TextMessage}
            this._State.DataPost.Posts.push(Message);
            this._CallSubcriber(this._State);
        }
        else if(action.type==='CHANGE-NEW-POST'){
            this._State.DataPost.NewPost=action.TextMessage;
            this._CallSubcriber(this._State);
        }
*/
        this._State.DataCenter=CenterReducer(this._State.DataCenter,action);
        this._State.DataPost=Center2Reducer(this._State.DataPost,action);
        this._State.DataMessage1=DialogsReducer(this._State.DataMessage1,action)
        this._CallSubcriber(this._State);

    }
}



export default Store;
window.Store=Store;