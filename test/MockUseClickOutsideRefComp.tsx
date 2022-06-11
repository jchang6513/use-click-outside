import React, { useState } from 'react';
import { useClickOutsideRef } from '../src';
import { IS_CLICKED, NON_CLICKED } from './constants';

export const MockUseClickOutsideRefComp = () => {
  const [clicked, setClicked] = useState(false);
  const ref = useClickOutsideRef<HTMLDivElement>(() => setClicked(true));

  return (
    <div data-testid="outside">
      <p>{clicked ? IS_CLICKED : NON_CLICKED}</p>
      <div ref={ref} />
    </div>
  );
};
