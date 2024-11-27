import styles from './Projects.module.css'
import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import Container from '../layout/Cointainer'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import { useEffect, useState } from 'react'

function Projects () {

    const location = useLocation()
    const [projects, setProjects] = useState([])

    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect (() => {
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
        })
        .catch(err => console.log(err))
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
            </Container>
        </div>
    )
}

export default Projects