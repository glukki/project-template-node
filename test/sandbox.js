/* global beforeEach, afterEach */
'use strict'

/**
 * Sandbox declaration
 */

import path from 'path'
import sinon from 'sinon'

// root hooks that are called before and after every test case
beforeEach(function () {
  this.import = importSource
  this.sinon = sinon.sandbox.create()
})
afterEach(function () {
  this.sinon.restore()
})

// global function to shortcut source files loading
function importSource (location) {
  if (typeof location !== 'string') {
    throw new Error(`Provide path relative to 'src/' directory`)
  }

  let module = require(path.join('../src/', location))
  // handle es6 and node modules
  return module.default || module
}
