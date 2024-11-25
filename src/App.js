import {BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import style from './components/layout/Container.module.css'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Cointainer'

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Contato</Link>
        <Link to="/contact">Empresa</Link>
        <Link to="/new-project">Novo Projeto</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/company' element={<Contact/>} />
          <Route exact path='/contact' element={<Company/>} />
          <Route exact path='/new-project' element={<NewProject/>} />
        </Routes>
      </Container>
        <p>Footer</p>
    </Router>
  );
}

export default App;
