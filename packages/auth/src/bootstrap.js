import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';
// import {queryClient} from 'container/src/queryClient';
import { QueryClientProvider } from 'react-query';
// import queryClient from '../../container/src/queryClient';
//mount fn to startup the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn,queryClient }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(
  <QueryClientProvider client={queryClient}>
  <App history={history} onSignIn={onSignIn} />,
  </QueryClientProvider>,
   el
   );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

//develpment mode and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

//running thru container
export { mount };
