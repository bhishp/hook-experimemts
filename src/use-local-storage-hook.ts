import { useState } from 'react';

type SetFunc = (newState: string) => void;

const useLocalStorage = (initialState: string): [string, SetFunc] => {

  const [state, setState] = useState(initialState);
  const currentLocal = window.localStorage.getItem('AppState') || '';
  if (!currentLocal) {
    localStorage.setItem('AppState', initialState);
  }

  const setLocalState = (newState: string) => {
    setState(newState);
    localStorage.setItem(
      'AppState',
      newState
    );
  };


  return [
    currentLocal || state,
    setLocalState
  ];


  // so...

  // what do we do?
  // any time we set new state then we want to save it to localStorage
};

export default useLocalStorage;