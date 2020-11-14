# Hooks

## useKeyUp()

React hook that returns a function when the specified targetKey is pressed.

### Usage

```jsx
import useKeyUp from '@/hooks/useKeyUp'

const doSomething = () => {
  console.log('do something')
}

const Example = () => {
  useKeyUp("Escape", () => doSomething())
  // ...
}
```

### Arguments
- `KeyboardEvent["key"]`: Which event should trigger the callback?
- `handler: () => void`: Callback function that is executed whenever the targetKey is triggered

## useOutsideClick()

Trigger a callback whenever we click outside a given target.

### Example

```jsx
import useOutsideClick from '@/hooks/useOutsideClick'

const doSomething = () => {
  console.log('do something')
}

const Example = () => {
  const targetRef = React.createRef()
  useOutsideClick(targetRef, doSomething)

  return (
    <div>
      <div ref={targetRef}>target</div>
      <div>outside</div>
    </div>
  )
}
```

### Arguments

- `targetRef: React.ref`: Reference to a DOM node in which any events clicked outside of that particular node will trigger a callback.
- `handler: () => void`: Callback function that is executed when clicking outside.
