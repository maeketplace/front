import type { SVGProps } from 'react'
import * as React from 'react'
function SvgLock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="lock">
        <path
          id="Icon"
          d="M5.83333 9.16699V5.83366C5.83333 4.72859 6.27232 3.66878 7.05372 2.88738C7.83512 2.10598 8.89493 1.66699 10 1.66699C11.1051 1.66699 12.1649 2.10598 12.9463 2.88738C13.7277 3.66878 14.1667 4.72859 14.1667 5.83366V9.16699M4.16667 9.16699H15.8333C16.7538 9.16699 17.5 9.91318 17.5 10.8337V16.667C17.5 17.5875 16.7538 18.3337 15.8333 18.3337H4.16667C3.24619 18.3337 2.5 17.5875 2.5 16.667V10.8337C2.5 9.91318 3.24619 9.16699 4.16667 9.16699Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default SvgLock
