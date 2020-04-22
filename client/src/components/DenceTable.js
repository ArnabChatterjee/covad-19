import React from 'react';
import '../App.css'

const TableData = props => {
  const data = (props.location.popularTimesHistogram)[props.day];
 return( 
  <React.Fragment>
    {data.map((e,i) =>  <p key={i} className={
      i%2 === 0 && currentTime()[0] === props.day && currentTime()[1] === e.hour && e.occupancyPercent < 30? 'evenRow current-time':
      i%2 === 0 && currentTime()[0] === props.day && currentTime()[1] === e.hour && e.occupancyPercent < 60? 'evenRow current-time':
      i%2 === 0 && currentTime()[0] === props.day && currentTime()[1] === e.hour && e.occupancyPercent >= 60? 'evenRow current-time':
      i%2 === 0 && e.occupancyPercent < 30? 'evenRow low-risk-title': 
      i%2 === 0 && e.occupancyPercent < 60? 'evenRow med-risk-title': 
      i%2 === 0 && e.occupancyPercent >= 60? 'evenRow high-risk-title': 
      i%2 !== 0 && currentTime()[0] === props.day && currentTime()[1] === e.hour && e.occupancyPercent < 30? ' current-time':
      i%2 !== 0 && currentTime()[0] === props.day && currentTime()[1] === e.hour && e.occupancyPercent < 60? ' current-time':
      i%2 !== 0 && currentTime()[0] === props.day && currentTime()[1] === e.hour && e.occupancyPercent >= 60? ' current-time':
      i%2 !== 0 && e.occupancyPercent < 30? ' low-risk-title': 
      i%2 !== 0 && e.occupancyPercent < 60? ' med-risk-title': 
      i%2 !== 0 && e.occupancyPercent >= 60? ' high-risk-title':
      null
      }>
        {e.occupancyPercent < 30? 'Low': e.occupancyPercent < 60? 'Medium': 'High'}
        </p>)}
  </React.Fragment>
 )
}
// ?
const currentTime = ()=> {
  const days = ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const ct = new Date();
  return [days[ct.getDay()], ct.getHours()];
}
export default function DenseTable(props) {
  return (
    <div style={{overflowX:'auto'}}>
        <table>
          <thead>
            <tr className='table-header'>
              <th>Time/Hour</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wedensday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {((props.location.popularTimesHistogram).Su).map((e, i) =><p key={i} className={i%2 === 0? 'evenRow':null}>{e.hour}</p>)}
              </td>
              {(Object.keys(props.location.popularTimesHistogram)).map((day, i) =><td key={i}><TableData location={props.location} day={day}/></td>)}
            </tr>
          </tbody>
        </table>
</div>
  )
}



           