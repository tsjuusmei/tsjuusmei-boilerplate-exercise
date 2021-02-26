import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import Checkbox from '.'

const sizes = {
  lg: 'Large',
  md: 'Medium',
  sm: 'Small'
}

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
  decorators: [withA11y]
}

export const Primary = () => (
  <>
    {/* Default */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Default</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" />
        </form>
      ))}
    </div>

    {/* Default + Checked */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Default + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" isChecked={true} />
        </form>
      ))}
    </div>

    {/* Disabled */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Disabled</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" isDisabled={true} />
        </form>
      ))}
    </div>

    {/* Disabled + Checked */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Disabled + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" isDisabled={true} isChecked={true} />
        </form>
      ))}
    </div>

    {/* Error */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Error</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" hasError={true} />
        </form>
      ))}
    </div>

    {/* Error + Checked */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Error + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" hasError={true} isChecked={true} />
        </form>
      ))}
    </div>

    {/* Error + Disabled */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Error + Disabled</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" hasError={true} isDisabled={true} />
        </form>
      ))}
    </div>

    {/* Error + Disabled + Checked */}
    <div className="component-preview" style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
      <h3 style={{ marginBottom: '4px' }}>Error + Disabled + Checked</h3>
      {Object.entries(sizes).map(([key], idx) => (
        <form style={{ margin: '0 0 20px' }}>
          <Checkbox key={idx} size={key as Sizes} label="Label" hasError={true} isDisabled={true} isChecked={true} />
        </form>
      ))}
    </div>
  </>
)

