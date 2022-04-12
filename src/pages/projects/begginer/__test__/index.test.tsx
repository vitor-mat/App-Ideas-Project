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

  it('should show numbers that user type on input', () => {
    const { debug } = render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    userEvent.type(input, '123456')
    expect(input).toHaveValue('123456')
  })

  it('input accept only six characters', () => {
    const { debug } = render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    userEvent.type(input, '123456789')
    expect(input).toHaveValue('123456')
  })

  it('input not accept letters', () => {
    const { debug } = render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    userEvent.type(input, 'abc')
    expect(input).toHaveValue('')
  })

})