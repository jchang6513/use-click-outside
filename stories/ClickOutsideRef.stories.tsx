import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { useClickOutsideRef } from '../src';
import ClickOutsideRefDoc from './ClickOutsideRef.mdx';

const meta: Meta = {
  title: 'Click Outside',
  parameters: {
    controls: { expanded: true },
    docs: {
      page: ClickOutsideRefDoc,
    },
  },
};

export default meta;

const Template = () => {
  const [outsideCount, setOutsideCount] = useState(0);
  const [insideCount, setInsideCount] = useState(0);

  const insideRef = useClickOutsideRef<HTMLDivElement>(() => {
    setOutsideCount(outsideCount + 1);
  });

  return (
    <div className="outside" style={{ padding: '10px' }}>
      <p>Click outside {outsideCount} times</p>
      <div
        ref={insideRef}
        className="inside"
        onClick={() => setInsideCount(insideCount + 1)}
        style={{ border: '1px solid black', padding: '10px' }}
      >
        <p>Click inside {insideCount} times</p>
      </div>
    </div>
  );
};

export const WithRef = Template.bind({});

WithRef.args = {};
