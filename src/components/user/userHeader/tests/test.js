import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { UserStorage } from '../../../../Context'

import UserHeader from '..'

describe('<UserHeader />', () => {
  it('should render the userHeader', () => {
    const { container } = render(
      <BrowserRouter>
        <UserStorage>
          <UserHeader />
        </UserStorage>
      </BrowserRouter>
    )
    const userHeader = screen.getByTestId(/titulo/i)
    expect(userHeader).toBeInTheDocument()
  })
})
