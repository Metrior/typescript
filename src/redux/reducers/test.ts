import {ActionType} from "../actions/types"
import {Action} from "../actions"

const initialState = 0

const reducer = (state:number=initialState, action:Action) => {
    switch (action.type) {
        case ActionType.ADD_ARTICLE:
            break
        default:
            return state
    }
}

export default reducer
