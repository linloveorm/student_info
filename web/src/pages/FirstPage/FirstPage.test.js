import { render, cleanup } from '@redwoodjs/testing'

import FirstPage from './FirstPage'

describe('FirstPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FirstPage />)
    }).not.toThrow()
  })
})
