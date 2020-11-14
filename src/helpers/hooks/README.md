# Chicle Hooks

## useKeyUp()

React hook that returns a function when the specified targetKey is pressed.

### Usage

```jsx
import { useKeyUp } from '@/hooks/useKeyUp'

const doSomething = () => {
  console.log('do something')
}

const Example = () => {
  useKeyPress({ targetKey: "Escape", doSomething() })
  // ...
}
```

### Arguments
- `KeyboardEvent["key"]`: Which event should trigger the callback?
- `handler: () => void`: Callback function that is executed whenever the targetKey is triggered
