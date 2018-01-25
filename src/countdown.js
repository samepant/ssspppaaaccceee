import React, { Component } from 'react';
import './App.css';
export default class extends Component {
     constructor(props) {
     super(props);
     this.state = {
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0,
          };
     }
     componentWillMount() {
          this.getTimeUntil(this.props.deadline);
     }
     componentDidMount() {
          setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
     }  
     leading0(num) {
          return num < 10 ? '0' + num : num;
     }
     getTimeUntil(deadline) {
          const time = Date.parse(deadline) - Date.parse(new Date());
          if(time < 0) {
               this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          
          } else {
               const seconds = Math.floor((time/1000)%60);
               const minutes = Math.floor((time/1000/60)%60);
               const hours = Math.floor((time/(1000*60*60))%24);
               const days = Math.floor(time/(1000*60*60*24));
               this.setState({ days, hours, minutes, seconds });
          }
     }
     render() {
          return(
               <svg className='countdown' viewBox='0 0 500 500'>
                    <path fill='transparent' id='pathForClock' 
                         d="M86.36,250A163.64,163.64,0,1,1,250,413.66,163.58,163.58,0,0,1,86.36,250Z"/>
                    <text width='500'>
                      <textPath xlinkHref='#pathForClock' className='clockText'>
                         {this.leading0(this.state.days)}days {this.leading0(this.state.hours)}hours {this.leading0(this.state.minutes)}min {this.leading0(this.state.seconds)}sec
                      </textPath>
                    </text>
               </svg>
               
          );
     }
}