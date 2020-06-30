import { addParameters } from '@storybook/react'
import { configureActions, action } from '@storybook/addon-actions'
import '../mockNextRouter'

// Styling
import './storybook.scss'

// Addon Viewports
const newViewports = {
  iPhone678: {
    name: 'iPhone 6/7/8 (375x667)',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  iPhone678Plus: {
    name: 'iPhone 6/7/8 plus (414x736)',
    styles: {
      width: '414px',
      height: '736px'
    }
  },
  iPhoneXXs11: {
    name: 'iPhone X/Xs/11 (414x736)',
    styles: {
      width: '414px',
      height: '736px'
    }
  },
  iPad: {
    name: 'iPad (768x1024)',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  desktopHd: {
    name: 'Desktop HD (1440x900)',
    styles: {
      width: '1440px',
      height: '900px'
    }
  },
}

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
})

addParameters({
  viewport: {
    viewports: {
      ...newViewports
    }
  },
  backgrounds: [
    { name: 'Dark', value: '#000' },
    { name: 'Light', value: '#fff', default: true },
  ]
})
