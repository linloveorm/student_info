import { render, cleanup } from '@redwoodjs/testing'

import IconPage from './IconPage'

describe('IconPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<IconPage />)
    }).not.toThrow()
  })
})
