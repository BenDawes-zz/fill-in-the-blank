import { connect } from 'react-redux'
import { selectOption, deselectOptionByKey } from '../actions'
import MultipleChoice from '../components/MultipleChoice'

const mapStateToProps = (state, ownProps) => {
  return {
  	options: state.questions[state.currentQuestionKey].options,
    selection: state.selection,
    nextSelectionPointer: state.questions[state.currentQuestionKey].pointers.filter((p) => Object.keys(state.selection).indexOf(p) === -1)[0],
    disabled: Object.keys(state.selection).length >= state.questions[state.currentQuestionKey].pointers.length,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onOptionClick: (optionPointer, option, currentlySelected) => {
  		if(currentlySelected) {
        dispatch(deselectOptionByKey(option.key))
      } else {
        dispatch(selectOption(optionPointer, option))
      }
  	}
  }
}


const LiveMultipleChoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleChoice)

export default LiveMultipleChoice