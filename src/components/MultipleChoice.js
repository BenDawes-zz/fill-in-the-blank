import React, { Component } from 'react';
import '../styles/MultipleChoice.less';

class SingleChoice extends Component {
  render() {
    let { disabled, nextSelectionPointer, option, onOptionClick, selected } = this.props;

    return (
      <div className={"option " + (selected ? 'selected' : 'unselected') + (disabled ? ' disabled' : ' active')}
              onClick={(e) => { if(!disabled || selected) { onOptionClick(nextSelectionPointer, option, selected) }}}>
              <p>{option.text}</p>
      </div>
    )
  }
}

class MultipleChoice extends Component {
  render() {

    let { options, selection, onOptionClick, ...rest } = this.props;
    options = options || []

    let buttons = options.map((o) =>
      <SingleChoice {...this.props} key={o.key} option={o} selected={Object.values(selection).indexOf(o) >= 0}/>);

    return (
      <div className="multiple-choice">
        <div className="left-floating mutliple-choice-label">
          <img src='./img/icon_answer.png' width="32" height="32"/>
          <p>Antwoorden</p>
        </div>
        <div className="choices">
          {buttons}
        </div>
      </div>
    );
  }
}

export default MultipleChoice;
