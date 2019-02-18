import {useState, useRef, useEffect, RefObject} from 'react';

const useTrackVisibility = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
  const trackedEl = useRef<T>(null);
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      const { current } = trackedEl;
      if (!current) {
        return;
      }
      const refRect = current.getBoundingClientRect();
      const inView =
        refRect.top <= window.innerHeight &&
        refRect.left <= window.innerWidth;
      setVisibility(!inView);
    };
  });

  return [
    trackedEl,
    isVisible
  ];
};

export default useTrackVisibility;