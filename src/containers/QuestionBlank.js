import { connect } from 'react-redux';
import '../styles/QuestionBlank.less';
import React, { Component } from 'react';
import { deselectOptionByPointer } from '../actions';

class QuestionBlank extends Component {
  render() {
    let { pointer, selection, onContentClick } = this.props;
    let content = selection[pointer] && selection[pointer].text;
    return (
      <span className={"blank " + (content ? "complete" : "incomplete")}onClick={(e) => {content && onContentClick(pointer)}}>
        {content}
      </span>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selection: state.selection,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onContentClick: (pointer) => {
      dispatch(deselectOptionByPointer(pointer))
    }
  }
}
QuestionBlank = connect(mapStateToProps,mapDispatchToProps)(QuestionBlank)

export default QuestionBlank