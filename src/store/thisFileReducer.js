const defaultState = {
    file: {
        type: 0
    }
}

const MOVE_FILE = "MOVE_FILE"
const REMOVE_FILE_IF_TRUE = "REMOVE_FILE_IF_TRUE"

export const ThisFileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MOVE_FILE:
            return {...state, file: action.payload}
        case REMOVE_FILE_IF_TRUE:
            return {...state, file: {type: 0}}
        default:
            return state
    }
}

export const moveFileAction = (payload) => ({type: MOVE_FILE, payload})
export const removeFileIfTrueAction = () => ({type: REMOVE_FILE_IF_TRUE})