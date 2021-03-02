const Center2Reducer=(state,action)=>{

    switch (action.type){
        case 'ADD-POST':
            let Message=
                { name: "Вася",text:action.TextMessage}
            state.Posts.push(Message);
            return state;
        case 'CHANGE-NEW-POST':
            state.NewPost=action.TextMessage;
            return state;
        default:
            return state;
    }}
export default Center2Reducer;