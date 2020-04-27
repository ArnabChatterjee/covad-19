import React from 'react';
import '../App.css'

const TableData = props => {
  const data = (props.location);
  
 return( 
  <React.Fragment>
    {(data).map((e,i) => <p key={i} className={
      i%2 === 0 && props.day === currentTime()[0] && (e.hour == (currentTime()[1]).toString()) && e.occupancyPercent < 30? 'evenRow current-time':
      i%2 === 0 && props.day === currentTime()[0] && (e.hour == (currentTime()[1]).toString()) && e.occupancyPercent < 60? 'evenRow current-time':
      i%2 === 0 && props.day === currentTime()[0] && (e.hour == (currentTime()[1]).toString()) && e.occupancyPercent >= 60? 'evenRow current-time':
      i%2 === 0 && e.occupancyPercent < 30? 'evenRow low-risk-title': 
      i%2 === 0 && e.occupancyPercent < 60? 'evenRow med-risk-title': 
      i%2 === 0 && e.occupancyPercent >= 60? 'evenRow high-risk-title': 
      i%2 !== 0 && props.day === currentTime()[0] && (e.hour == (currentTime()[1]).toString()) && e.occupancyPercent < 30? ' current-time':
      i%2 !== 0 && props.day === currentTime()[0] && (e.hour == (currentTime()[1]).toString()) && e.occupancyPercent < 60? ' current-time':
      i%2 !== 0 && props.day === currentTime()[0] && (e.hour == (currentTime()[1]).toString()) && e.occupancyPercent >= 60? ' current-time':
      i%2 !== 0 && e.occupancyPercent < 30? ' low-risk-title': 
      i%2 !== 0 && e.occupancyPercent < 60? ' med-risk-title': 
      i%2 !== 0 && e.occupancyPercent >= 60? ' high-risk-title':
      null
      }>
        {e.occupancyPercent < 30? 'Low': e.occupancyPercent < 60? 'Medium': 'High'}
        </p>
      )}     
  </React.Fragment>
 )
}
// ?
const currentTime = ()=> {
  const days = ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const ct = new Date();
  return [days[ct.getDay()], ct.getHours()];
}

const weekDays = (day)=> {
  let tableDay = '';
  switch (day) {
    case 'Su':
      tableDay = 'Sunday'
      break;
      case 'Mo':
        tableDay = 'Monday'
      break;
      case 'Tu':
        tableDay = 'Tuesday'
      break;
      case 'We':
        tableDay = 'Wedensday'
      break;
      case 'Th':
        tableDay = 'Thursday'
      break;
      case 'Fr':
        tableDay = 'Friday'
      break;
      case 'Sa':
        tableDay = 'Saturday'
      break;
    default:
      tableDay = ''
      break;
  }
  return tableDay;
}

export default function DenseTable(props) {
  return (
    <div style={{overflowX:'auto'}}>
        <table>
          <thead>
            <tr className='table-header'>
              <th>Time/Hour</th>
              {props.location.popularTimesList.map((days, i) =>{
               return <th key={i}> {weekDays(days.weekDay)}</th>
               }
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                 {((props.location.popularTimesList[0]).occupancy).map((e, i) =><p key={i} className={i%2 === 0? 'evenRow':null}>{e.hour}</p>)}
              </td>
              {(props.location.popularTimesList).map((days, i) =><td key={i}><TableData location={days.occupancy} day={days.weekDay}/></td>)}
            </tr>
          </tbody>
        </table>
</div>
  )
}



           