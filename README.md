# eslint-plugin-force-void

ESLint rule to force returning void 0.

# Installation

After having installed [ESLint](https://www.github.com/eslint/eslint), install the rule:

```bash
$ npm install eslint-plugin-force-void --save-dev
```

# Configuration

Add `force-void` to your `.eslintrc`:

```json
{
  "plugins": [
    "force-void"
  ],
  "rules": {
    "force-void/force-void": 2
  }
}
```

## Fail

```javascript
function sample() {
  console.log(1);
  return;
}
```

## Pass

```javascript
function sample() {
  console.log(1);
  return void 0;
}
```
