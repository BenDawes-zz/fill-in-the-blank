import React, { Component } from 'react';
import '../styles/QuestionView.less';

class QuestionView extends Component {
  render() {
    let { selection, question } = this.props;
    let { image, image_mobile, text } = question;

    return (
      <div className="question">
        <div className="left-floating question-label">
          <img src='./img/icon_question.png' width="32" height="32"/>
          <p>Vragen</p>
        </div>
        <div className="question-image-container">
          <div className="question-image">
            <img className="desktop" src={image}/>
            <img className="mobile" src={image_mobile}/>
          </div>
          <div className="question-content">
            {text(selection)}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionView;
