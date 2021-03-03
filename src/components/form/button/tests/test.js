import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from '..'
import userEvent from '@testing-library/user-event'

describe('<Button/>', () => {
  it('should render the button', () => {
    const { container } = render(<Button>Click!</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
