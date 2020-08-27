import React from 'react'
import Sidebar from './Component/Sidebar/sidebar'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Signup from './Component/newStudentForm/newStudentForm'
import Attendace from './Component/attendanceDetail/attendance'
class App extends React.Component{

  render(){
return(<div>

<Sidebar/>
<Router>
        {/* <Sidebar /> */}

        <Route path="/" component={Sidebar} />
        <Route path="/NewStudentForm" component={Signup} />
       
        <Route path="/Attendace" component={Attendace}/>

      </Router>

</div>)

  }
}

export default App