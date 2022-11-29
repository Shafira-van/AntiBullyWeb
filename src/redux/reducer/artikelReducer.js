// import React from 'react'
import { SUCCESS_GET_ARTIKEL, SUCCESS_ADD_ARTIKEL} from "../action/artikelAction"

const initialState = {
  article: [],
  err: null
};

const artikelReducer = (state = initialState, action) => {
  switch (action.type) {

    case SUCCESS_GET_ARTIKEL:
      console.log(action.payload)
      return {
        ...state,
        article : action.payload
        
      }
    
    case SUCCESS_ADD_ARTIKEL:
      return {
        article: [...state.article, action.payload]
      }
    default:
      return state 
  }
}

export default artikelReducer