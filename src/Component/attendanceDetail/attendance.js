import React from 'react'
import './attendanceDetail.css'

class Attendace extends React.Component{
    render(){
        return(
            <div >
                 <h3 class="display-4">Attendace Detail</h3>
               
               <div className="tbl">
               <table class="table">
  <thead class="thead-dark">
  <h3 class="display-6">Today</h3>

    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Name</th>
      <th scope="col">Class</th>
      <th scope="col">Time Entrance</th>
      <th scope="col">Time Quit</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>BsCS</td>
      <td>5 August 2020 at 01:00pm</td>
      <td>5 August 2020 at 05:00pm</td>

      {/* <td>5 August 2020 at 05:00pm</td> */}

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>BsCS</td>
      <td>5 August 2020 at 01:00pm</td>
      <td>5 August 2020 at 05:00pm</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>BsCS</td>
      <td>5 August 2020 at 01:00pm</td>
      <td>5 August 2020 at 05:00pm</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <h3 class="display-6">Previous Days</h3>

  <thead class="thead-light">
    <tr>
    <th scope="col">#</th>
      <th scope="col">Student Name</th>
      <th scope="col">Class</th>
      <th scope="col">Time Entrance</th>
      <th scope="col">Time Quit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>BsCS</td>
      <td>5 August 2020 at 01:00pm</td>
      <td>5 August 2020 at 05:00pm</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>BsCS</td>
      <td>5 August 2020 at 01:00pm</td>
      <td>5 August 2020 at 05:00pm</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>BsCS</td>
      <td>5 August 2020 at 01:00pm</td>
      <td>5 August 2020 at 05:00pm</td>
    </tr>
  </tbody>
</table>
               </div>
            </div>
        )
    }
}

export default Attendace