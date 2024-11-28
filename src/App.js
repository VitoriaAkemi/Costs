import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'
import Projects from './components/pages/Projects'
import Container from './components/layout/Cointainer'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/company' element={<Contact/>} />
          <Route path='/contact' element={<Company/>} />
          <Route path='/new-project' element={<NewProject/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:id' element={<Project/>} />
        </Routes>
      </Container>
        <Footer/>
    </Router>
  );
}

export default App;
