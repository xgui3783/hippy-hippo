# hippy-hippo

Generate `{adjective} {animal}`.

[Try on codepen](https://codepen.io/xgui3783/pen/vYJgXWR)

## Installation and import

### Node

```sh
npm i -s hippy-hippo
```

```js
// in node script files
const { HippyHippo } = require('hippy-hippo/dist/hippy-hippo-umd')
```

### ESM

```js
// In script[module]
import { HippyHippo } from 'https://unpkg.com/hippy-hippo/hippy-hippo-esm.js'
```

### Other browser

```html
<!-- in html -->
<script src="https://unpkg.com/hippy-hippo/dist/hippy-hippo-umd.js"></script>
```

```js
// in js
const { HippyHippo } = window.HippyHippo
```

## Usage

### Basic usage

```js
const anon1 = HippyHippo.getNickName() // some {adjective} {animal}
const anon2 = HippyHippo.getNickName() // another {adjective} {animal}

anon1 !== anon2 // *likely* the case
```

### Use a seed

```js 
const randomNumber = HippyHippo.getRandomId()

const anon1 = HippyHippo.getNickName(randomNumber) // some {adjective} {animal}
const anon2 = HippyHippo.getNickName(randomNumber) // same {adjective} {animal}

anon1 === anon2 // always the case
```

### Use custom library

```js
const sulkyAnimal = HippyHippo.getNickName(null, ['sulky']) // sulky {animal}
const adjAnimal = HippyHippo.getNickName(null, null, ['hedgehog', 'Snake']) // {adjective} hedgehog|Snack
```

## License

MIT
