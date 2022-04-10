import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import Dec2Bin, { testFunction } from '../dec2bin';


describe("user interaction with input", () => {
  it('should show dec2bin input', () => {
    render(<Dec2Bin />)
    const input = screen.getByPlaceholderText('Type your number')
    expect(input).toBeInTheDocument()
  })


})