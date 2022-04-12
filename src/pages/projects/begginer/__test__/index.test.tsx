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

  it('input not accept symbols', () => {
    const { debug } = render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    userEvent.type(input, '+-*/*&')
    expect(input).toHaveValue('')
  })
})

describe("apllication response when the form is submited", () => {
  it('input is cleaned when input is submited', () => {
    const { debug } = render(<Dec2Bin />)
    const input = screen.getByPlaceholderText("Type your number")
    const button = screen.getByText('Convert')
    userEvent.type(input, '123')
    userEvent.click(button)
    expect(input).toHaveValue('')
  })
})

describe("teste counter behavor", () => {
  it("counter starts in the document with 0/6", () => {
    const { debug } = render(<Dec2Bin />)
    const counter = screen.getByText("0/6")
    expect(counter).toBeInTheDocument()
  })
})