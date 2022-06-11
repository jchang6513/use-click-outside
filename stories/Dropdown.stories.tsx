import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { useClickOutside } from '../src';

const meta: Meta = {
  title: 'Dropdown',
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = () => {
  const [collapsed, setCollpased] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setCollpased(false));

  return (
    <div
      ref={dropdownRef}
      style={{
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
      }}
    >
      <span
        onClick={() => setCollpased(!collapsed)}
        style={{ cursor: 'pointer' }}
      >
        Toggle
      </span>
      {collapsed && (
        <div className="dropdown" style={{ paddingTop: '10px' }}>
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
        </div>
      )}
    </div>
  );
};

export const Dropdown = Template.bind({});

Dropdown.args = {};
