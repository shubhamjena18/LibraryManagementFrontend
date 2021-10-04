import './App.css';
import {Button, Container,Row,Col} from 'reactstrap'
import {ToastContainer,toast} from 'react-toastify'
import { BrowserRouter as Router,Route } from 'react-router-dom';
//import {Row,Col} from 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourses from './Components/AddCourses';
import Header from './Components/Header';
import Menus from './Components/Menus';
function App() {
  
  return (
    <div>
      <Router>
      <ToastContainer/>
       <Container>
         <Header/>
         <Row>
           <Col md={4}>
              <Menus/>
           </Col>   
           <Col md={8}>
             <Route path="/" component={Home} exact />
             <Route path="/add-course" component={AddCourses} exact />
             <Route path="/view-courses" component={AllCourses} exact />
           </Col>
         </Row>
       </Container>
      </Router>
    </div>
  );
}

export default App;

// {/* <Home/> 
//       <Course course={{title:"Django",description:"this is just testing"}}/>
//       <Course course={{title:"Java",description:"this is Java Course"}}/>
//       <AllCourses/> 
//       <AddCourses /> */}