import React, {createContext , useReducer} from "react"
import AppReducer from './AppReducer';

const initialState = {
    personalData:{},
    semisterData:{}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    function addPersonaInfo(data){
        console.log(data,"data")
        dispatch({
            type:"ADD_PERSONAL_INFO",
            payload : data
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload :transaction
        })
    }
    return(
        <GlobalContext.Provider value={{
            personalData:state.personalData,
            semisterData:state.semisterData,
            addPersonaInfo,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}