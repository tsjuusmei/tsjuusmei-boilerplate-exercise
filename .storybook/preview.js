// Styling
import './storybook.scss'

// Addon Viewports
const customViewports = {
  mobileSm: {
    name: 'Mobile Sm (320x568)',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  mobileMd: {
    name: 'Mobile Md (375x667)',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  mobileLg: {
    name: 'Mobile Lg (414x812)',
    styles: {
      width: '414px',
      height: '812px'
    }
  },
  tabletMd: {
    name: 'Tablet Md (768x1024)',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  desktopXs: {
    name: 'Desktop Xs (1024x768)',
    styles: {
      width: '1024px',
      height: '768px'
    }
  },
  desktopSm: {
    name: 'Desktop Sm (1280x1024)',
    styles: {
      width: '1280px',
      height: '1024px'
    }
  },
  desktopMd: {
    name: 'Desktop Md (1440x1080)',
    styles: {
      width: '1440px',
      height: '1080px'
    }
  },
  desktopLg: {
    name: 'Desktop Lg (1920x1200)',
    styles: {
      width: '1920px',
      height: '1200px'
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
