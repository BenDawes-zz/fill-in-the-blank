import React, { Component } from 'react';
import ActionButton from '../containers/ActionButton';
import '../styles/QuestionHeader.less';

class QuestionHeader extends Component {
  render() {
    let { headerText, headerLabel } = this.props;
    return (
      <div className="question-header">
        <div className="left-floating header-label">
          <img src='./img/icon_instructions.png' width="32" height="32"/>
          <p>{headerLabel}</p>
        </div>
        <div className="header-text">
        	{headerText}
        </div>
        <ActionButton/>
      </div>
    );
  }
}

export default QuestionHeader;
