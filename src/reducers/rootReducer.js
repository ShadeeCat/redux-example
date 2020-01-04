import { combineReducers } from "redux"
import numberReducer from "./numberReducer"
import { dateReducer } from "./dateReducer"

export default combineReducers({
	data: numberReducer,
	textData: numberReducer,
	dateData: dateReducer
})