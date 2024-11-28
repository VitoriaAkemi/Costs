import styles from './Projects.module.css'
import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import Container from '../layout/Cointainer'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'

function Projects () {

    const location = useLocation()
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect (() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/jason'
                },
            })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
        }, 300)
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}> 
                <h1>Meus Projetos</h1>
                <LinkButton to='new-project' text='Criar Projeto'/>
            </div>
            {message && 
                <Message type='success' msg={message}/>
            }
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name} 
                            budget={project.budget}
                            category={project.category}
                            key={project.id}

                        />
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && 
                <p>Não há projetos cadastrados!</p>}
            </Container>
        </div>
    )
}

export default Projects