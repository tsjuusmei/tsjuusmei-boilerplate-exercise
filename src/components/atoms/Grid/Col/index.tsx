import React from 'react'

// Styling
import './col.module.scss'

type Props = {
  span: number,
  start?: number,
  end?: number,
  children: React.ReactNode,
  className?: string
}

const Col = React.forwardRef<HTMLDivElement, Props>((
  {
    span = 12,
    start,
    end,
    children,
    className,
    ...props
  },
  ref
) => {
  const properties = {
    'data-col': true,
    ...(span ? { 'data-span': span } : {}),
    ...(start ? { 'data-start': start } : {}),
    ...(end ? { 'data-end': end } : {}),
  }

  return (
    <div
      ref={ref}
      {...properties}
      className={`${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
})

Col.displayName = 'Col'

export default Col
export { Col }
