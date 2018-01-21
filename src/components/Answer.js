import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestion } from '../actions';
import '../styles/Answer.less'

class Answer extends Component {
  render() {
    let { response, onNextClick, currentQuestionKey, maxQuestionKey } = this.props;
    let { responseType, responseText } = response;
    return (
      <div className={"response-container " + responseType}>
        <div className="response-text">
          <div className="response-icon">
            {response.responseType ?
              <img src="../img/icon_correct.png"/> :
              <img src="../img/icon_incorrect.png"/>}
          </div>
        	{responseText}
        </div>
        <div className="response-actions">
          <button onClick={(e) => onNextClick(currentQuestionKey,maxQuestionKey)}><p>Volgende vraag</p></button>
        </div>
      </div>
    );
  }
}
export default Answer;
