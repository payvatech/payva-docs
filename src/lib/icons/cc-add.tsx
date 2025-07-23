import * as React from 'react'

const CCAddIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const color = props.color || null
  const width = props.width || 23
  const height = props.height || 18
  return (
    <svg width={width} height={height} viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.759 17V11M15.759 14H21.759M21.759 6H1.75903M21.759 8V4.2C21.759 3.0799 21.759 2.51984 21.541 2.09202C21.3493 1.7157 21.0433 1.40974 20.667 1.21799C20.2392 1 19.6791 1 18.559 1H4.95903C3.83893 1 3.27887 1 2.85105 1.21799C2.47473 1.40973 2.16876 1.71569 1.97702 2.09202C1.75903 2.51984 1.75903 3.0799 1.75903 4.2V11.8C1.75903 12.9201 1.75903 13.4802 1.97702 13.908C2.16876 14.2843 2.47472 14.5903 2.85105 14.782C3.27887 15 3.83893 15 4.95903 15H11.759"
        className={`${color === 'light' && 'stroke-payva-purple-100'} ${color === 'dark' && 'stroke-payva-purple-950'} ${color === null && 'stroke-payva-purple-950 dark:stroke-payva-purple-100'}`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default CCAddIcon
