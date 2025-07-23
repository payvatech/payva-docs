import * as React from 'react'

const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={34} height={30} viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M32 27.75L29.75 25.5M32 9.75H2M32 12.75V7.05C32 5.36985 32 4.52976 31.673 3.88803C31.3854 3.32355 30.9265 2.86461 30.362 2.57698C29.7203 2.25 28.8801 2.25 27.2 2.25H6.8C5.11985 2.25 4.27976 2.25 3.63803 2.57698C3.07355 2.86459 2.61459 3.32354 2.32698 3.88803C2 4.52976 2 5.36985 2 7.05V18.45C2 20.1302 2 20.9703 2.32698 21.612C2.61459 22.1765 3.07354 22.6354 3.63803 22.923C4.27976 23.25 5.11985 23.25 6.8 23.25H14.75M31.25 21.75C31.25 24.6495 28.8995 27 26 27C23.1005 27 20.75 24.6495 20.75 21.75C20.75 18.8505 23.1005 16.5 26 16.5C28.8995 16.5 31.25 18.8505 31.25 21.75Z"
      className="stroke-payva-purple-950 dark:stroke-payva-purple-100"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SVGComponent
