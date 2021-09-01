export default (state,action)=>{
    switch(action.type){
        case "ADD_PERSONAL_INFO":
            return{
                ...state,
                personalData:action.payload
            }
        case "ADD_COURSE_INFO":
            return{
                ...state,
                semisterData:[...state.semisterData,action.payload]
            }
        default:
            return state;
    }
}