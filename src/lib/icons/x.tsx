import * as React from 'react'

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={10} height={10} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18 2L2 18M2 2L18 18"
      className="stroke-payva-purple-950 dark:stroke-payva-purple-100"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
