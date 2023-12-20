import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
// import { QueryClientProvider } from 'react-query';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { QueryClientProvider } from 'react-query';
import queryClient from '../../container/src/queryClient';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history, onSignIn }) => {
  console.log('Identity of queryClient in auth/App.js:', queryClient);

  return (
    <QueryClientProvider client={queryClient}>
    <div className="hehe">
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
          <UserList /> 
        </Router>
      </StylesProvider>
    </div>
    </QueryClientProvider>
  );
};

export default App;
