import * as React from 'react'

// Types
import type { IconProps } from '../../types'

function Reddit({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM15.209 8.40862C16.0096 8.40862 16.6666 9.06374 16.6666 9.88868C16.6666 10.4952 16.3083 11.0169 15.8065 11.2475C15.8304 11.3929 15.8424 11.5508 15.8424 11.6964C15.8424 13.9892 13.2259 15.8333 10.0001 15.8333C6.77424 15.8333 4.15772 13.977 4.15772 11.6964C4.15772 11.5386 4.16952 11.3929 4.19358 11.2475C3.69161 11.0169 3.33328 10.5074 3.33328 9.90089C3.33328 9.08793 3.97845 8.42083 4.79086 8.42083C5.18504 8.42083 5.54359 8.57845 5.80638 8.8333C6.82189 8.09316 8.21979 7.62009 9.77291 7.57147L10.5138 4.02905C10.5256 3.95624 10.5615 3.89563 10.6212 3.85922C10.6691 3.82282 10.7408 3.8106 10.8125 3.82282L13.2377 4.34451C13.4049 3.99264 13.7635 3.75 14.1697 3.75C14.7431 3.75 15.209 4.22308 15.209 4.80538C15.209 5.3879 14.7431 5.86098 14.1697 5.86098C13.608 5.86098 13.1542 5.4121 13.1301 4.85399L10.9557 4.38092L10.2867 7.55948C11.816 7.62009 13.19 8.09316 14.1935 8.82109C14.4563 8.56624 14.8149 8.40862 15.209 8.40862ZM7.69421 9.88868C7.12054 9.88868 6.65465 10.3618 6.65465 10.9441C6.65465 11.5264 7.12054 12.0116 7.69421 11.9997C8.26767 11.9997 8.73356 11.5264 8.73356 10.9441C8.73356 10.3618 8.26767 9.88868 7.69421 9.88868ZM10.0001 14.5231C10.3942 14.5231 11.7563 14.4745 12.4732 13.7466C12.5687 13.6373 12.5687 13.4675 12.4732 13.3583C12.3656 13.2493 12.1983 13.2493 12.0908 13.3583C11.6487 13.8194 10.6811 13.977 10.0001 13.977C9.31904 13.977 8.36321 13.8194 7.90912 13.3583C7.80156 13.2493 7.63431 13.2493 7.52674 13.3583C7.4194 13.4675 7.4194 13.6373 7.52674 13.7466C8.23182 14.4623 9.59385 14.5231 10.0001 14.5231ZM11.2425 10.9563C11.2425 11.5386 11.7084 12.0116 12.2819 12.0116C12.8555 12.0116 13.3214 11.5264 13.3214 10.9563C13.3214 10.374 12.8555 9.90089 12.2819 9.90089C11.7084 9.90089 11.2425 10.374 11.2425 10.9563Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Reddit)
