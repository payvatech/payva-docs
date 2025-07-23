import * as React from 'react'

const DocApprovedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const width = props.width ?? 24
  const height = props.height ?? 28
  return (
    <svg width={width} height={height} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.4807 14.625V7.5C21.4807 5.3998 21.4807 4.3497 21.072 3.54754C20.7125 2.84193 20.1388 2.26825 19.4332 1.90873C18.631 1.5 17.581 1.5 15.4807 1.5H7.48071C5.38051 1.5 4.33041 1.5 3.52825 1.90873C2.82264 2.26825 2.24896 2.84193 1.88944 3.54754C1.48071 4.3497 1.48071 5.3998 1.48071 7.5V20.5C1.48071 22.6003 1.48071 23.6502 1.88944 24.4525C2.24896 25.1581 2.82264 25.7318 3.52825 26.0913C4.33041 26.5 5.38051 26.5 7.48071 26.5H11.4807M13.9807 12.75H6.48071M8.98071 17.75H6.48071M16.4807 7.75H6.48071M14.6057 22.75L17.1057 25.25L22.7307 19.625"
        className="stroke-payva-purple-950 dark:stroke-payva-purple-100"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default DocApprovedIcon
