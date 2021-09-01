export default (state,action)=>{
    switch(action.type){
        case "ADD_PERSONAL_INFO":
            return{
                ...state,
                personalData:action.payload
            }
        default:
            return state;
    }
}