# karma-yate-preprocessor

[![Build Status](https://travis-ci.org/maksimr/karma-yate-preprocessor.png?branch=master)](https://travis-ci.org/maksimr/karma-yate-preprocessor)

> Preprocessor to build yate template through [yate](https://github.com/pasaran/yate) on the fly.

## Installation

The easiest way is to keep `karma-yate-preprocessor` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-yate-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-yate-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...

```js
// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: ['yate'],
        preprocessors: {
            '**/*.yate': ['yate']
        }
    });
};
```

## Example

```js
describe('yate', function() {
    it('should compile yate template', function() {
        expect(yr.run('main', {})).to.be.eql('Hello World!');
    });

    it('should compile yate template with mode', function() {
        expect(yr.run('main', {}, "test")).to.be.eql('Hello World From Mode!');
    });
});
```

## Playground

http://maksimr.github.io/yate/
