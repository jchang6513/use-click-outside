import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { IS_CLICKED, NON_CLICKED } from './constants';
import { MockUseClickOutsideComp } from './MockUseClickOutsideComp';

const outsideComp = () => screen.getByTestId('outside');

describe('use click outside', () => {
  it('init content', () => {
    render(<MockUseClickOutsideComp />);
    expect(outsideComp()).toHaveTextContent(NON_CLICKED);
  });

  it('outside clicked', () => {
    render(<MockUseClickOutsideComp />);
    fireEvent.click(outsideComp());
    expect(outsideComp()).toHaveTextContent(IS_CLICKED);
  });
});
