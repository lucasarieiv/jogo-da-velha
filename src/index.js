import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings/colors.css';
import './styles/settings/spacing.css';
import './styles/settings/size.css';
import './styles/generic/reset.css';
import './styles/elements/base.css';

import App from './App';
import About from './About';

ReactDOM.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);