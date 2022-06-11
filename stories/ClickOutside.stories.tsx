import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { useClickOutside } from '../src';
import ClickOutsideDoc from './ClickOutside.mdx';

const meta: Meta = {
  title: 'Click Outside',
  parameters: {
    controls: { expanded: true },
    docs: {
      page: ClickOutsideDoc,
    },
  },
};

export default meta;

const Template = () => {
  const insideRef = useRef<HTMLDivElement>(null);
  const [outsideCount, setOutsideCount] = useState(0);
  const [insideCount, setInsideCount] = useState(0);

  useClickOutside(insideRef, () => {
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

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
