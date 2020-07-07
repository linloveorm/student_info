import { render, cleanup } from '@redwoodjs/testing'

import CallbackPage from './CallbackPage'

describe('CallbackPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CallbackPage />)
    }).not.toThrow()
  })
})
