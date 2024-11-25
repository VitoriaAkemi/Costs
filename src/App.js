import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
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
          <Route exact path='/company' element={<Contact/>} />
          <Route exact path='/contact' element={<Company/>} />
          <Route exact path='/new-project' element={<NewProject/>} />
          <Route exact path='/projects' element={<Projects/>} />
        </Routes>
      </Container>
        <Footer/>
    </Router>
  );
}

export default App;
