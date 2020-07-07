import { render, cleanup } from '@redwoodjs/testing'

import DashboardPage from './DashboardPage'

describe('DashboardPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardPage />)
    }).not.toThrow()
  })
})
