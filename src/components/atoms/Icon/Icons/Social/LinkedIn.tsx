import * as React from 'react'

// Types
import type { IconProps } from '../../types'

function LinkedIn({
  color = 'var(--color3-500)',
  size = 20,
  className
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.6676 1H2.32891C1.59414 1 1 1.58008 1 2.29727V17.6992C1 18.4164 1.59414 19 2.32891 19H17.6676C18.4023 19 19 18.4164 19 17.7027V2.29727C19 1.58008 18.4023 1 17.6676 1ZM6.34023 16.3387H3.66836V7.74648H6.34023V16.3387ZM5.0043 6.57578C4.14648 6.57578 3.45391 5.8832 3.45391 5.02891C3.45391 4.17461 4.14648 3.48203 5.0043 3.48203C5.85859 3.48203 6.55117 4.17461 6.55117 5.02891C6.55117 5.87969 5.85859 6.57578 5.0043 6.57578ZM16.3387 16.3387H13.6703V12.1621C13.6703 11.1672 13.6527 9.88398 12.2816 9.88398C10.893 9.88398 10.682 10.9703 10.682 12.0918V16.3387H8.01719V7.74648H10.5766V8.9207H10.6117C10.9668 8.2457 11.8387 7.53203 13.1359 7.53203C15.8395 7.53203 16.3387 9.31094 16.3387 11.6242V16.3387Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(LinkedIn)
