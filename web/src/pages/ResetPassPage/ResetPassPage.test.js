import { render, cleanup } from '@redwoodjs/testing'

import ResetPassPage from './ResetPassPage'

describe('ResetPassPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ResetPassPage />)
    }).not.toThrow()
  })
})
