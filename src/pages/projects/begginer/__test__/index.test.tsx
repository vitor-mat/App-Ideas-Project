import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Dec2Bin from '../dec2bin';


describe("user interaction with input", () => {
  it('should show dec2bin input', () => {
    render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    expect(input).toBeInTheDocument()
  })

  it('when user type the input value change', () => {
    const { debug } = render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    userEvent.type(input, '123456')
    debug()
    expect(input).toHaveValue('123456')
  })

})