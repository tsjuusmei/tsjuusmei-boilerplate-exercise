import React from 'react'
import {
  render,
  cleanup,
  fireEvent
} from '@testing-library/react'
import Input, { InputSize } from '.'

afterEach(cleanup)

type BaseProps = {
  name: string
  placeholder: string,
  size: InputSize
}

const baseProps: BaseProps = {
  name: 'username',
  placeholder: 'Placeholder text',
  size: InputSize.Medium
}

describe('Input component', () => {
  // DOM Node tests
  it('should render an input of type text by default', () => {
    const { getByTestId } = render(<Input {...baseProps} data-testid="input" />)
    const domNode = getByTestId('input') as HTMLInputElement

    expect(domNode.nodeName).toBe('INPUT')
    expect(domNode.type).toBe('text')
  })

  it('should render an input with a custom type', () => {
    const { getByTestId } = render(<Input {...baseProps} type="email" data-testid="input" />)
    const domNode = getByTestId('input') as HTMLInputElement

    expect(domNode.type).toBe('email')
  })

  it('should render a disabled input', () => {
    const { getByTestId } = render(<Input {...baseProps} isDisabled data-testid="input" />)
    const domNode = getByTestId('input') as HTMLInputElement

    expect(domNode.disabled).toBeTruthy()
  })
})

describe('Events', () => {
  it('handles the `onChange` event', () => {
    const onChange = jest.fn()
    const { container } = render(<Input {...baseProps} onChange={onChange} />)
    const input = container.querySelector('input')

    expect(onChange).not.toHaveBeenCalled()
    fireEvent.change(input, { target: { value: 'Awesome value' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('handles the `onFocus` event', () => {
    const onFocus = jest.fn()
    const { container } = render(<Input {...baseProps} onFocus={onFocus} />)
    const input = container.querySelector('input')

    expect(onFocus).not.toHaveBeenCalled()
    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalledTimes(1)
  })

  it('handles the `onBlur` event', () => {
    const onBlur = jest.fn()
    const { container } = render(<Input {...baseProps} onBlur={onBlur} />)
    const input = container.querySelector('input')

    expect(onBlur).not.toHaveBeenCalled()
    fireEvent.blur(input)
    expect(onBlur).toHaveBeenCalledTimes(1)
  })
})
