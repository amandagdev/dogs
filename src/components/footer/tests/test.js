import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '..'

describe('<Footer/>', () => {
  it('should render the footer', () => {
    const { container } = render(<Footer />)
    const footer = screen.getByText(/footer/i)
    expect(footer).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
