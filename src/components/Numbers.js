import React from "react"
import { connect } from "react-redux"

import { ADD_TEXT } from '../actions/types'

class Numbers extends React.Component {
	inputRef = React.createRef()

	onSubmit = event => {
		event.preventDefault();
		console.log(this.props)
		this.props.addText(this.inputRef.current.value)
	}
	render() {
		return <div>
			<ul>
			{
				this.props.numbers.map(num =>
					<li key={ num }>{ num }</li>
				)
			}
			</ul>
			<div>
				{
					this.props.strings.map(txt => <p>{txt}</p>)
				}
					<p>{this.props.dates.toString()}</p>
			</div>
			<form onSubmit={this.onSubmit}>
				<input type="text" ref={this.inputRef} />
			</form>
		</div>
	}
}

const mapStateToProps = state => ({
	numbers: state.data.numbers,
	strings: state.textData.text,
	dates: state.dateData.date
})
const mapDispatchToProps = dispatch => {
  return {
    addText: newText => dispatch({ type: ADD_TEXT, payload: newText }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Numbers);