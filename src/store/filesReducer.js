const defaultState = {
    files: [],
}

const ADD_FILE = "ADD_FILE"
const PICK_FILE = "PICK_FILE"
const REMOVE_FILE = "REMOVE_FILE"
const MODIFY_ONE_FILE = "MODIFY_ONE_FILE"

export const filesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_FILE:
            return {...state, files: [...state.files, action.payload]}
        case PICK_FILE:
            return {...state, files: [...state.files.map((file) => {
                if(action.payload === file.id){
                    file.pick = "#adadad"
                    return file
                }
                else {
                    file.pick = "#ffffff"
                    return file
                }
                })]}
        case REMOVE_FILE:
            return {...state, files: [...state.files.filter(file => file.id !== action.payload)]}
        case MODIFY_ONE_FILE:
            return {...state, files: [...state.files.map((file) => {
                    if(file.id === action.payload.id){
                    return action.payload
                }
                else {
                    return file
                }
                })]}
        default:
            return state
    }
}

export const addFileAction = (payload) => ({type: ADD_FILE, payload})
export const pickFileAction = (payload) => ({type: PICK_FILE, payload})
export const removeFileAction = (payload) => ({type: REMOVE_FILE, payload})
export const modifyOneFileAction = (payload) => ({type: MODIFY_ONE_FILE, payload})