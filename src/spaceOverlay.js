import React from 'react'
import './spaceOverlay.css'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil('2018-03-29T14:29:54-04:00')
  }
  componentDidMount() {
      setInterval(() => this.getTimeUntil('2018-03-29T14:29:54-04:00'), 1000)
  }  
  leading0(num) {
      return num < 10 ? '0' + num : num
  }
  getTimeUntil(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date())
      if(time < 0) {
           this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      
      } else {
           const seconds = Math.floor((time/1000)%60)
           const minutes = Math.floor((time/1000/60)%60)
           const hours = Math.floor((time/(1000*60*60))%24)
           const days = Math.floor(time/(1000*60*60*24))
           this.setState({ days, hours, minutes, seconds })
      }
  }
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
            <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
              <image xlinkHref="/plastic.jpg" x="0" y="0" width="100%" height="100%" />
            </pattern>
          </defs>
          <path filter='url(#inset-shadow)' fill='url(#img1)' className='spaceShape breathe' 
            d="M35,732c-5.94,69,23.44,600.6,357.37,609s1189.89,39.4,1295.1-9.55,234.43-330.59,234.43-514.47S1858,218.07,1475.42,94.54c-316.52-102.2-982.06-116.2-1215,96.15C95.1,341.44,45.31,612.59,35,732"
          />

          <path fill='transparent' id='PathFortitle'
            d="M35,732c-5.94,69,23.44,600.6,357.37,609s1189.89,39.4,1295.1-9.55,234.43-330.59,234.43-514.47S1858,218.07,1475.42,94.54c-316.52-102.2-982.06-116.2-1215,96.15C95.1,341.44,45.31,612.59,35,732"
          />
          <path fill='transparent' id='PathForsecond' 
            d="M242,722.88c-4.64,53.84,18.3,468.8,278.95,475.33s928.78,30.76,1010.9-7.46,183-258,183-401.57-49.89-467.44-348.52-563.86c-247.06-79.77-766.55-90.7-948.36,75.05C288.88,418,250,629.68,242,722.88"
          />
          <path fill='transparent' id='PathForthird'
            d="M420.15,715c-3.52,40.81,13.87,355.34,211.43,360.29s704,23.31,766.24-5.65,138.7-195.59,138.7-304.38S1498.7,411,1272.36,337.9c-187.26-60.47-581-68.75-718.83,56.89C455.7,484,426.24,644.4,420.15,715"
          />
          <path fill='transparent' id='PathForfourth'
            d="M623.49,706.09c-2.24,25.94,8.82,225.85,134.39,229s447.45,14.82,487-3.59S1333,807.18,1333,738s-24-225.2-167.9-271.65c-119-38.43-369.3-43.69-456.88,36.16-62.18,56.69-80.9,158.65-84.77,203.55"
          />
          <path fill='transparent' id='PathForcountdown'
            d="M620.21,706.24c-2.26,26.18,8.9,227.94,135.63,231.11s451.58,15,491.51-3.62,89-125.46,89-195.25-24.26-227.28-169.45-274.16c-120.12-38.79-372.71-44.1-461.1,36.49C643,558,624.12,660.92,620.21,706.24"
          />

          <text>
            <textPath xlinkHref='#PathFortitle' className='titleText'>
              SSSPPPAAACCCEEE
            </textPath>
            <textPath xlinkHref='#PathForsecond' className='secondText'>
              AN UNCONFERENCE IN A BUBBLE AT CRANBROOK
            </textPath>
            <textPath xlinkHref='#PathForthird' className='thirdText' >
              MARCH 29, 30, 31, 2018
            </textPath>
            <textPath xlinkHref='#PathForcountdown' className='countdown' >
              {this.leading0(this.state.days)}days {this.leading0(this.state.hours)}hours {this.leading0(this.state.minutes)}min {this.leading0(this.state.seconds)}sec
            </textPath>
          </text>
        </svg>
        
      </div>
    )
  }
}