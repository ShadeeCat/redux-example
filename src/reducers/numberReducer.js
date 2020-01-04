import { ADD_TEXT } from "../actions/types"

const myState = {
	numbers: [1,3,5],
	text: ["first", "second", "third"]
}

export default (state = myState, action) => {
	if (action.type === ADD_TEXT) {
		return {
			...state,
			text: [...state.text, action.payload]
		}
	}
	else { return state }
}
