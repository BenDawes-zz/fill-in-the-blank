import React, { Component } from 'react';
import Progress from './Progress';
import ActionButton from '../containers/ActionButton';
import '../styles/AppHeader.less';

class AppHeader extends Component {
  render() {
    let { theme, title, progress } = this.props;
    return (
      <div className="app-header">
        <div className="left-floating vertically-centered header-theme">
          <img src='./img/logo.png' width="32" height="32"/>
        	<p>{"Thema: " + theme}</p>
        </div>
        <div className="header-title">
        	{title}
        </div>
        <div className="progress-actions">
          <Progress progress={progress} />
          <ActionButton/>
        </div>
      </div>
    );
  }
}

export default AppHeader;
