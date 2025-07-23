import * as React from 'react'

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const width = props.width || 20
  const height = props.height || 20
  return (
    <svg width={width} height={height} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M25.4 18.125L17.4286 11M10.5714 11L2.60004 18.125M2 5.0625L11.7979 11.8496C12.5913 12.3992 12.988 12.674 13.4195 12.7804C13.8007 12.8744 14.1993 12.8744 14.5805 12.7804C15.012 12.674 15.4087 12.3992 16.2021 11.8496L26 5.0625M7.76 20.5H20.24C22.2562 20.5 23.2643 20.5 24.0344 20.1117C24.7117 19.7702 25.2625 19.2252 25.6076 18.5548C26 17.7928 26 16.7952 26 14.8V7.2C26 5.20481 26 4.20722 25.6076 3.44516C25.2625 2.77483 24.7117 2.22984 24.0344 1.88829C23.2643 1.5 22.2562 1.5 20.24 1.5H7.76C5.74381 1.5 4.73572 1.5 3.96563 1.88829C3.28825 2.22984 2.73752 2.77483 2.39238 3.44516C2 4.20722 2 5.20481 2 7.2V14.8C2 16.7952 2 17.7928 2.39238 18.5548C2.73752 19.2252 3.28825 19.7702 3.96563 20.1117C4.73572 20.5 5.74381 20.5 7.76 20.5Z"
        className="stroke-payva-purple-950 dark:stroke-payva-purple-100"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default EmailIcon
