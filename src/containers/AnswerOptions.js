import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitAnswer, skipQuestion } from '../actions';
import '../styles/AnswerOptions.less';

class AnswerOptions extends Component {
  render() {
    let { completedAnswers, question, selection, onSubmitClick, onSkipClick, currentQuestionKey} = this.props;
    return (
      <div className="answer-options-container">
        <div className="answer-option skip-question">
          <button onClick={(e) => onSkipClick(currentQuestionKey)}><p>Overslaan</p></button>
        </div>
        <div className="answer-option submit-answer">
          <button disabled={!completedAnswers} onClick={(e) => onSubmitClick(question,selection,currentQuestionKey)}><p>Antwoord indienen</p></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    completedAnswers: Object.keys(state.selection).length === state.questions[state.currentQuestionKey].pointers.length,
    selection: state.selection,
    question: state.questions[state.currentQuestionKey],
    currentQuestionKey: state.currentQuestionKey
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSkipClick: (currentQuestionKey) => dispatch(skipQuestion(currentQuestionKey)),
    onSubmitClick: (question,selection,currentQuestionKey) => dispatch(submitAnswer(question,selection,currentQuestionKey))
  }
}

AnswerOptions = connect(mapStateToProps,mapDispatchToProps)(AnswerOptions)

export default AnswerOptions