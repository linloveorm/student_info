import { render, cleanup } from '@redwoodjs/testing'

import SettingPage from './SettingPage'

describe('SettingPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SettingPage />)
    }).not.toThrow()
  })
})
