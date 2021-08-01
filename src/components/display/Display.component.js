import React from 'react';

import HeaderPanel from './components/header-panel/HeaderPanel.component';
import LeftPanel from './components/leftbar-panel/LeftPanel.component';
import MainPanel from './components/main-panel/MainPanel.component';

import './display.styles.scss';

/**
 * @component
 * @description
 */
const Display = () => {
  return (
    <div className="display">
      <LeftPanel></LeftPanel>
      <HeaderPanel></HeaderPanel>
      <MainPanel></MainPanel>
    </div>
  );
}; // DisplayComponent

export default Display;
