import { useRef } from 'react';
import { useClickOutside } from './useClickOutside';

export const useClickOutsideRef = <R extends HTMLElement>(
  callback: EventListener
) => {
  const ref = useRef<R>(null);
  useClickOutside(ref, callback);

  return ref;
};
