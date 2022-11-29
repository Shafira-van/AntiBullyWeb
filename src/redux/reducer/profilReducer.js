// import React from 'react'
import {SUCCESS_GET_PROFIL, SUCCESS_GET_PROFIL_ID, SUCCESS_ADD_PROFIL,SUCCESS_UPDATE_JADWAL,  SUCCESS_UPDATE_PROFIL} from "../action/profilAction"

const initialState = {
  profilId:[],
  profil: [],
  err: null
};

const profilReducer = (state = initialState, action) => {
  switch (action.type) {

    case SUCCESS_GET_PROFIL:
      return {
        ...state,
        profil: action.payload
      }
    case SUCCESS_GET_PROFIL_ID:    
      // let getId = state.profil.filter((data) => data.id == action.payload.id)
      return {
        // ...state
        ...state,
        profil: action.payload
        // profil : getId,
      } 
    case SUCCESS_ADD_PROFIL:
      // const add = state.profil.filter((data) => data.id != action.payload.id)
      return {
        // ...state, 
        // add: add.push(action.payload),
        // profil:add
        profil: [state, action.payload]
      }
    
    case SUCCESS_UPDATE_PROFIL:
       const jj = state.profil.filter((data) => data.id != action.payload.id)
        return {
          ...state,
          jj: jj.push(action.payload),
          profil : jj
      }
    case SUCCESS_UPDATE_JADWAL:
       const jd = state.profil.filter((data) => data.id != action.payload.id)
        return {
          ...state,
          jd: jd.push(action.payload),
          profil : jd
      }
    
    default:
      return state
  }
}

export default profilReducer