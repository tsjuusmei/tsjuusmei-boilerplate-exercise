import React from 'react'

function HalfStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="#19D681"
        fillRule="evenodd"
        d="M24.036 6c-.39.22-.715.582-.89 1.084l-3.296 9.484a2 2 0 01-1.849 1.343l-10.038.204c-1.896.039-2.679 2.448-1.168 3.594l8.001 6.066a2 2 0 01.707 2.173l-2.908 9.61c-.55 1.815 1.5 3.304 3.057 2.22l8.241-5.734c.047-.032.094-.063.143-.09V6z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default React.memo(HalfStar)
