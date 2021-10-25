import config from './jest.config'

const newConfig = { ...config }
Object.assign(newConfig, {
  testMatch: ['**/*.test.ts']
})

export default newConfig
