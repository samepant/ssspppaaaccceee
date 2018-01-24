import React from 'react'
import './spaceOverlay.css'

export default class extends React.Component {
  render () {
    return (
      <div className='spaceOverlay'>
        <svg viewBox="0 0 2000 1432.86" width='100%' height='100%'>
          <defs>
            <filter id="inset-shadow">
              <feFlood floodColor="black"/>
              <feComposite operator="out" in2="SourceGraphic"/>
              <feGaussianBlur stdDeviation="30"/>
              <feComposite operator="atop" in2="SourceGraphic"/>

            </filter>
          </defs>
          <path filter='url(#inset-shadow)' className='spaceShape breathe' 
            d="M382.89,39.67C264.73,51.71-12.67,556.33,34,797.44s330,600,582.22,604.44,724.44-24.44,958.89-196.67S1968.44,1023,1978.44,804.11s-153.64-574.64-583.33-615.56C1003.81,151.3,906.22-13.67,382.89,39.67Z"
          />

          <path fill='transparent' id='PathForText' className='breathe'
            d="M382.89,39.67C264.73,51.71-12.67,556.33,34,797.44s330,600,582.22,604.44,724.44-24.44,958.89-196.67S1968.44,1023,1978.44,804.11s-153.64-574.64-583.33-615.56C1003.81,151.3,906.22-13.67,382.89,39.67Z"
          />
          <text width='500'>
            <textPath xlinkHref='#PathForText' className='titleText'>
              SSSPPPAAACCCEEE
            </textPath>
          </text>
        </svg>
      </div>
    )
  }
}