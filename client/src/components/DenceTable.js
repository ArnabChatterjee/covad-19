import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, location) {
  return { name, calories, fat, carbs, protein };
}

// hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
const rows = [
  createData(),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable(props) {
  const classes = useStyles();
//   const b1 = props.location.popularTimesHistogram.Su.map(time => (
//     "vv"
//   ))
 

  return (
    <TableContainer component={Paper}>
        { console.location('props')}
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sunday</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


{/* <div className="week-div">
                <div className="day" >

                  <h4>Sunday</h4>
                  <div>
            {location.popularTimesHistogram.Su.map(time => (
              <p>hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
            ))}
                  </div>
                </div>

                <div className="day" >
                  <h4></h4>
                  <div>
            {location.popularTimesHistogram.Mo.map(time => (
              <p>hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
            ))}
                  </div>
                </div>

                <div className="day" >
                  <h4></h4>
                  <div>
            {location.popularTimesHistogram.Tu.map(time => (
              <p>hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
            ))}
                  </div>
                </div>

                <div className="day" >
                  <h4></h4>
                  <div>
            {location.popularTimesHistogram.We.map(time => (
              <p>hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
            ))}
                  </div>
                </div>

                <div className="day" >
                  <h4></h4>
                  <div>
            {location.popularTimesHistogram.Th.map(time => (
              <p>hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
            ))}
                  </div>
                </div>

                <div className="day" >
                  <h4>Friday</h4>
                  <div>
            {location.popularTimesHistogram.Fr.map(time => (
              <p>hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
            ))}
                  </div>
                </div>

                <div className="day" >
                  <h4></h4>
                  <div>
            {location.popularTimesHistogram.Sa.map(time => (
              <p>hour: {time.hour}, occupency: {time.occupancyPercent}%</p>
            ))}
                  </div>
                </div> */}

                {/* <div className="mon"></div>
                <div className="tues"></div>
                <div className="wed"></div>
                <div className="thurs"></div>
                <div className="fri"></div>
                <div className="sat"></div>
              </div> */}
