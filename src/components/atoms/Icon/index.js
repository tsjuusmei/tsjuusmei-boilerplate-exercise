import React from 'react'
import PropTypes from 'prop-types'

// Icons
import Slice from './Icons/Slice'
import Team from './Icons/Team'
import Onboarding from './Icons/Onboarding'
import Seed from './Icons/Seed'
import Helpdesk from './Icons/Helpdesk'
import Chevron from './Icons/Chevron'
import FullStar from './Icons/FullStar'
import HalfStar from './Icons/HalfStar'

const Icon = ({
  name,
  ...props
}) => (
  <>
    {{
      slice: <Slice {...props} />,
      team: <Team {...props} />,
      onboarding: <Onboarding {...props} />,
      seed: <Seed {...props} />,
      helpdesk: <Helpdesk {...props} />,
      chevron: <Chevron {...props} />,
      'full-star': <FullStar {...props} />,
      'half-star': <HalfStar {...props} />
    }[name]}
  </>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Icon
