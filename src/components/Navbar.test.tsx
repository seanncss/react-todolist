import React from 'react'
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('should render text correctly', () => {
    const { getByText } = render(<Navbar />)
    expect(getByText('Basic To Do List')).toBeInTheDocument()
  })
});