/* eslint-env jest */

const helperFunctions = require('../lib/helper-functions')

describe('componentNameToMacroName', () => {
  test('transfoms a single word component name', () => {
    var macroName = helperFunctions.componentNameToMacroName('button')

    expect(macroName).toBe('govukButton')
  })

  test('transfoms a multi-word component name', () => {
    var macroName = helperFunctions.componentNameToMacroName('character-count')

    expect(macroName).toBe('govukCharacterCount')
  })
})

describe('componentNameToJavaScriptModuleName', () => {
  test('transfoms a single word component name', () => {
    var macroName = helperFunctions.componentNameToJavaScriptModuleName('button')

    expect(macroName).toBe('GOVUKFrontend.Button')
  })

  test('transfoms a multi-word component name', () => {
    var macroName = helperFunctions.componentNameToJavaScriptModuleName('character-count')

    expect(macroName).toBe('GOVUKFrontend.CharacterCount')
  })
})
