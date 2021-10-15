import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { useAuth } from '../../../hooks/useAuth';


const SamplePage = ({ classNamees }) => {
  // Global value
  const { appState } = useContext(GlobalContext);
  const auth = useAuth();

  return (
    <React.Fragment>
      <p>Toggled: {JSON.stringify(appState.isToggled)}</p>
      <p>Dark Mode: {JSON.stringify(appState.isDarkMode)}</p>
      <p>User Info: {JSON.stringify(auth)} </p>
    </React.Fragment>

  );
};

export default SamplePage