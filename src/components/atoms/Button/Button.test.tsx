import React from 'react'
import {
  render,
  cleanup,
  fireEvent
} from '@testing-library/react'
import Button, { ButtonSize, ButtonVariation } from '.'

afterEach(cleanup)

type BaseProps = {
  variation: ButtonVariation,
  size: ButtonSize
}

const baseProps: BaseProps = {
  variation: ButtonVariation.Primary,
  size: ButtonSize.Medium
}

describe('Button component', () => {
  // DOM Node tests
  it('should render an button of primary button', () => {
    const { getByTestId } = render(<Button {...baseProps} data-testid="button">Test</Button>)
    const domNode = getByTestId('button') as HTMLButtonElement

    expect(domNode.nodeName).toBe('BUTTON')
  })

  it('should render a disabled Button', () => {
    const { getByTestId } = render(<Button {...baseProps} isDisabled data-testid="button">Test</Button>)
    const domNode = getByTestId('button') as HTMLButtonElement

    expect(domNode.disabled).toBeTruthy()
  })

  it('should handle have forwarded className to the button', () => {
    const { container } = render(<Button className="myClassname">Test</Button>)

    expect(container.querySelector('.myClassname')).toBeTruthy()
  })
})

describe('Events', () => {
  it('handles the `onClick` event', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button {...baseProps} onClick={onClick} data-testid="button">Test</Button>)
    const domNode = getByTestId('button') as HTMLButtonElement

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(domNode)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should not trigger anything when disabled', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button {...baseProps} onClick={onClick} isDisabled data-testid="button">Test</Button>)
    const domNode = getByTestId('button') as HTMLButtonElement

    fireEvent.click(domNode)
    expect(onClick).not.toHaveBeenCalled()
  })
})
