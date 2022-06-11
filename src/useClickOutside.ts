import { MutableRefObject, useEffect } from 'react';

export const useClickOutside = <R extends MutableRefObject<any>>(
  ref: R,
  callback: EventListener
) => {
  useEffect(() => {
    const handleClick: EventListener = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [callback, ref]);
};
