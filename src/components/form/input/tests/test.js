import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import Input from '..'
import userEvent from '@testing-library/user-event'

describe('<Input>', () => {
  it('should render the input', () => {
    const { container } = render(<Input />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('must simulate an onChange', async () => {
    const onInput = jest.fn()

    render(<Input label="name" id="name" labelFor="name" onChange={onInput} />)

    const input = screen.getByRole('textbox')
    const text = 'this is a teste'
    userEvent.type(input, text)
    expect(onInput).toHaveBeenCalledTimes(text.length)
  })
})
