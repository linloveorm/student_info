import { render, cleanup } from '@redwoodjs/testing'

import LoginPage from './LoginPage'

describe('LoginPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LoginPage />)
    }).not.toThrow()
  })
})
