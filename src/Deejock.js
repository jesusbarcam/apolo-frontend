import React from 'react';

import Display from './components/display/Display.component';
import './deejock.scss';

/**
 * @component
 * @description
 */
const Deejock = () => {
  return (
    <div className="deejock">
      <Display></Display>
    </div>
  );
};

export default Deejock;
