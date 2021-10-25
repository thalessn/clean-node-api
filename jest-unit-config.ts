import config from './jest.config'

const newConfig = { ...config }
Object.assign(newConfig, {
  testMatch: ['**/*.spec.ts']
})

export default newConfig
