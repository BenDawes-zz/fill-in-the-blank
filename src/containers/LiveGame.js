import { connect } from 'react-redux'
import { setProgress, nextQuestion } from '../actions'
import Game from '../components/Game'

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions[state.currentQuestionKey],
    selection: state.selection,
    headerText: state.questions[state.currentQuestionKey].headerText,
    headerLabel: state.questions[state.currentQuestionKey].headerLabel,
    response: state.response,
    currentQuestionKey: state.currentQuestionKey,
    maxQuestionKey: state.questions.length-1
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNextClick: (currentQuestionKey, maxQuestionKey) => {
      if(currentQuestionKey < maxQuestionKey) {
        dispatch(nextQuestion())
      } else {
        alert("This ends the demo!")
      }
    }
  }
}

const LiveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default LiveGame