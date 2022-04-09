import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import Dec2Bin from '../dec2bin';

describe("user interaction with input", () => {
  it('should show dec2bin input', () => {
    render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    expect(input).toBeInTheDocument()
  })

  it("shold show numbers that user type on input", () => {
    render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    fireEvent.change(input, {
      target: {
        value: '123456'
      }
    })
    expect(input.value).toBe('123456')
  })

})