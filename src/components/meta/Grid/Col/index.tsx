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
    ...(end ? { 'data-end': true } : {}),
  }

  const style = {
    ...(span ? { '--span': span } : {}),
    ...(start ? { '--start': start } : {}),
    ...(end ? { '--end': end } : {}),
  } as React.CSSProperties

  return (
    <div
      ref={ref}
      {...properties}
      className={`${className || ''}`}
      {...props}
      style={style}
    >
      {children}
    </div>
  )
})

Col.displayName = 'Col'

export default Col
export { Col }
