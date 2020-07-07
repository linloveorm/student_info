import { render, cleanup } from '@redwoodjs/testing'

import InfoPage from './InfoPage'

describe('InfoPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<InfoPage />)
    }).not.toThrow()
  })
})
