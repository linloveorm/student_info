import { render, cleanup } from '@redwoodjs/testing'

import AccountPage from './AccountPage'

describe('AccountPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AccountPage />)
    }).not.toThrow()
  })
})
