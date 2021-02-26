import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import Checkbox from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
  decorators: [withA11y]
}

export const Primary = () => (
  <>
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Default</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="label" />
        </form>
      ))}
    </div>

    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Default + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="label" isChecked={true} />
        </form>
      ))}
    </div>

    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Disabled</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="label" isDisabled={true} />
        </form>
      ))}
    </div>

    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Disabled + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="label" isDisabled={true} isChecked={true} />
        </form>
      ))}
    </div>

    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Error</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="label" hasError={true} />
        </form>
      ))}
    </div>

    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Error + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="label" hasError={true} isChecked={true} />
        </form>
      ))}
    </div>

    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Error + Disabled + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="label" hasError={true} isDisabled={true} isChecked={true} />
        </form>
      ))}
    </div>
  </>
)

