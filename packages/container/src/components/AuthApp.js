import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import queryClient from '../queryClient';

export default ({ onSignIn,queryClient }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        //to avoid infinite loop scenario
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
      queryClient,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
