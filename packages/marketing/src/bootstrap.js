import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//mount fn to startup the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//develpment mode and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

//running thru container
export { mount };
