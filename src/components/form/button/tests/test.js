import { render, screen } from '@testing-library/react'

import Button from '..'

describe('<Button/>', () => {
  it('should render the button', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
