import React, { useRef, useState } from 'react';
import { useClickOutside } from '../src';
import { IS_CLICKED, NON_CLICKED } from './constants';

export const MockUseClickOutsideComp = () => {
  const [clicked, setClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setClicked(true));

  return (
    <div data-testid="outside">
      <p>{clicked ? IS_CLICKED : NON_CLICKED}</p>
      <div ref={ref} />
    </div>
  );
};
