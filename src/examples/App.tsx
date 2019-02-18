import React from 'react';
import useLocalStorageState from '../use-local-storage-hook';
import useLogger from "../use-logger-hook";

import './App.css';
import logo from './logo.svg';
import useTrackVisibility from "../use-track-visibility-hook";

const App: React.FunctionComponent = () => {
  const [imgEl, isVisible] = useTrackVisibility<HTMLImageElement>();
  const [state, setState] = useLocalStorageState('');

  useLogger(isVisible);

  return (
    <div>
      { isVisible &&
        <div className="hideBox">
          <p>Some input where state is in local storage: <input type="text" value={state} onChange={(ev) => setState(ev.target.value)} /></p>
          <p>Hide me by scrolling</p>
        </div>
      }
      <div className="box" />
      <img ref={imgEl} src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default App;
