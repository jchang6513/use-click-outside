import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { IS_CLICKED, NON_CLICKED } from './constants';
import { MockUseClickOutsideRefComp } from './MockUseClickOutsideRefComp';

const outsideComp = () => screen.getByTestId('outside');

describe('use click outside ref', () => {
  it('init content', () => {
    render(<MockUseClickOutsideRefComp />);
    expect(outsideComp()).toHaveTextContent(NON_CLICKED);
  });

  it('outside clicked', () => {
    render(<MockUseClickOutsideRefComp />);
    fireEvent.click(outsideComp());
    expect(outsideComp()).toHaveTextContent(IS_CLICKED);
  });
});
