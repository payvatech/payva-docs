import * as React from 'react'

const CCApprovedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const width = props.width ?? 34
  const height = props.height ?? 26
  return (
    <svg width={width} height={height} viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23 21.25L26 24.25L32 18.25M32 9.25H2M32 12.25V6.55C32 4.86985 32 4.02976 31.673 3.38803C31.3854 2.82355 30.9265 2.36461 30.362 2.07698C29.7203 1.75 28.8801 1.75 27.2 1.75H6.8C5.11985 1.75 4.27976 1.75 3.63803 2.07698C3.07355 2.36459 2.61459 2.82354 2.32698 3.38803C2 4.02976 2 4.86985 2 6.55V17.95C2 19.6302 2 20.4703 2.32698 21.112C2.61459 21.6765 3.07354 22.1354 3.63803 22.423C4.27976 22.75 5.11985 22.75 6.8 22.75H17"
        className="stroke-payva-purple-950 dark:stroke-payva-purple-100"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default CCApprovedIcon
