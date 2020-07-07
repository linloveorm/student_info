import { render, cleanup } from '@redwoodjs/testing'

import FinancePage from './FinancePage'

describe('FinancePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FinancePage />)
    }).not.toThrow()
  })
})
