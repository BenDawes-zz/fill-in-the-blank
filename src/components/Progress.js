import React, { Component } from 'react';
import '../styles/Progress.less';

class Progress extends Component {
  render() {
    let { progress } = this.props;
    let { correctQuestionKeys, incorrectQuestionKeys } = progress;
    return (
      <div className="progress-container">
        <div className="correct progress-category">
          <img src="../img/icon_correct.png"/>
          {correctQuestionKeys.length}
        </div>
        <div className="incorrect progress-category">
          <img src="../img/icon_incorrect.png"/>
          {incorrectQuestionKeys.length}
        </div>
      </div>
    );
  }
}

export default Progress;
