import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { UserStorage } from '../../../Context'
import Header from '..'

describe('<Header/>', () => {
  it('should render the header', () => {
    const { container } = render(
      <BrowserRouter>
        <UserStorage>
          <Header />
        </UserStorage>
      </BrowserRouter>
    )
    const header = screen.getByText(/Login/i)
    expect(header).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
