Testing

### About testing
Test directory structure should reflect source directory structure.  
Test file should have name `NAME_OF_THE_TESTED_UNIT.spec.js`.   
"In every unit test, there should be one unit under test." ([src](http://sinonjs.org/docs/))  
Test functions isolated. If function makes call of another function from our source code — [stub](http://sinonjs.org/docs/#stubs) that.


### About instruments
To write tests we use [`mocha`](https://mochajs.org) as a test runner.  
Tests should be made using [BDD](https://mochajs.org/#bdd) interface.

Assertions should be made using [`should.js`](https://github.com/shouldjs/should.js) ([docs](http://shouldjs.github.io)).

Spies, stubs and mocks should be made with [`sinon.js`](http://sinonjs.org), that is available in tests by `this.sinon`.  
Test case that need access to `this.sinon` has to be declared with `function(){}`, rather than by `()=>{}`.

To import files under `src/` directory you can use `this.import()` with a relative path (available in `beforeEach()` and `it()`).
