import * as React from 'react'
import {
  addDecorator,
  configure,
  addParameters
} from '@storybook/react'

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

addParameters({
  viewport: {
    viewports: {
      ...newViewports
    }
  },
  backgrounds: [
    { name: 'Dark', value: '#000', default: true },
    { name: 'Light', value: '#fff' },
  ],
  grid: { cellSize: 8 }
})

const req = require.context("../src/components", true, /\.stories\.ts(x)?$/)

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename))
}

configure(loadStories, module)
