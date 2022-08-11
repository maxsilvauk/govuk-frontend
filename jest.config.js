const config = {
  projects: [
    {
      displayName: 'Snapshot tests',
      testMatch: ['./**/template.test.js'],
      snapshotSerializers: [
        'jest-serializer-html'
      ],
      setupFilesAfterEnv: [
        './config/jest-setup.js'
      ]
    },
    {
      displayName: 'JavaScript behaviour tests',
      testMatch: ['./**/*.test.js', '!./**/template.test.js'],
      preset: 'jest-puppeteer'
    },
    {
      displayName: 'JavaScript unit tests',
      testMatch: ['./**/*.unit.test.js']
    }
  ]
}

module.exports = config
