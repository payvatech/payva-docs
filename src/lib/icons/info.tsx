import * as React from 'react'

export const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const color = props.color || null
  const width = props.width || 10
  const height = props.height || 10
  return (
    <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17 23V17M17 11H17.015M32 17C32 25.2842 25.2842 32 17 32C8.71572 32 2 25.2842 2 17C2 8.71572 8.71572 2 17 2C25.2842 2 32 8.71572 32 17Z"
        className={`${color === 'light' && 'stroke-payva-purple-100'} ${color === 'dark' && 'stroke-payva-purple-950'} ${color === null && 'stroke-payva-purple-950 dark:stroke-payva-purple-100'}`}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
