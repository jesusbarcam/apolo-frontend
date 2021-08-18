import React from 'react';
import PropTypes from 'prop-types';

import HeaderPanel from './components/header-panel/HeaderPanel.component';
import LeftPanel from './components/leftbar-panel/LeftPanel.component';
import MainPanel from './components/main-panel/MainPanel.component';
import FooterPanel from './components/footer-panel/FooterPanel.component';

import './display.styles.scss';

/**
 * @component
 * @param {string} mode
 * @description
 */
const Display = ({ mode }) => {
  return (
    <section className="display">
      <LeftPanel></LeftPanel>
      <HeaderPanel></HeaderPanel>
      <MainPanel></MainPanel>
      <FooterPanel></FooterPanel>
    </section>
  );
}; // DisplayComponent

Display.propTypes = {
  mode: PropTypes.string.isRequired,
}; // PropTypes

export default Display;
