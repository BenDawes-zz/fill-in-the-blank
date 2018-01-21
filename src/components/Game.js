import React, { Component } from 'react';
import QuestionHeader from './QuestionHeader';
import QuestionView from './QuestionView';
import LiveMultipleChoice from '../containers/LiveMultipleChoice';
import AnswerOptions from '../containers/AnswerOptions';
import Answer from './Answer'
import '../styles/Game.less';

class Game extends Component {
  render() {
    let { question, selection, onOptionClick, onNextClick, response, answerOptions, headerText, headerLabel } = this.props;
    let showingAnswer = false;
    let answer;
    if('responseType' in response) {
      showingAnswer = true;
      answer = <Answer {...this.props} onNextClick={onNextClick}/>;
      headerText = response.headerText;
      headerLabel = response.headerLabel;
    }
    return (
      <div className="game">
        <QuestionHeader headerLabel={headerLabel} headerText={headerText}/>
        <QuestionView question={question} selection={selection}/>
        {showingAnswer ?
          answer
          :
          <div className="multiple-choice-container">
            <LiveMultipleChoice/>
            <AnswerOptions options={answerOptions}/>
          </div>
        }
      </div>
    );
  }
}

export default Game;
