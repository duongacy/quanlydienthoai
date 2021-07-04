import { combineReducers, createStore } from 'redux'
import { gioHangReducer } from "./reducers/gioHangReducer";

const rootReducer = combineReducers({
    // Liet ke tat ca cac state o day
    gioHangState : gioHangReducer
})

export const store = createStore(rootReducer);