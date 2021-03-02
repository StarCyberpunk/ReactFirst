const DialogsReducer=(state,action)=>{
    switch (action.type){
        case 'ADD-MESSAGE':
            let Message=
                { name: "Вася",message:action.TextMessage}
            state.OldMessage.push(Message);
            return state;
        case 'CHANGE-MESSAGE':
            state.NewMessage=action.NewMessage;
            return state;
        default:
            return state;
    }

}
export default DialogsReducer;