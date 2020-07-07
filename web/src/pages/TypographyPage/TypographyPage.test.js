import { render, cleanup } from '@redwoodjs/testing'

import TypographyPage from './TypographyPage'

describe('TypographyPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<TypographyPage />)
    }).not.toThrow()
  })
})
