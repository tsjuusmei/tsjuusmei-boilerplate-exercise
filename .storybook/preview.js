// Styling
import './storybook.scss'

// Addon Viewports
const customViewports = {
  iPhone11Pro: {
    name: 'iPhone 11 Pro (375x812)',
    styles: {
      width: '375px',
      height: '812px'
    }
  },
  iPhone11: {
    name: 'iPhone 11(414x736)',
    styles: {
      width: '414px',
      height: '736px'
    }
  },
  iPadMini: {
    name: 'iPad Mini (768x1024)',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  desktopHd: {
    name: 'Desktop HD (1440x1080)',
    styles: {
      width: '1440px',
      height: '1080px'
    }
  }
}

export const parameters = {
  viewport: { viewports: customViewports },
  backgrounds: {
    values: [
      { name: 'Dark', value: '#000' },
      { name: 'Light', value: '#fff', default: true },
    ]
  }
}
