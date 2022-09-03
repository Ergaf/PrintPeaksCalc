const defaultState = {
    cash: 0
}

const INC = "INC"
const DEC = "DEC"

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            return {...state, cash: state.cash + action.payload}
        case "GET":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

export const IncrementAction = () => ({type: INC})
export const DecrementAction = () => ({type: DEC})