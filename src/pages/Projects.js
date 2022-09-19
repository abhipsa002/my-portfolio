import React from 'react'
import ProjectItem from '../components/ProjectItem'
import  "../styles/Projects.css" 
import  {ProjectList} from "../helpers/ProjectList"

function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
        {
          ProjectList.map((obj,id)=>{
            return <ProjectItem id={id} name={obj.name} image={obj.image} description={obj.description} link={obj.link}/>
          })
        }
      </div>
    </div>

    
  )
}

export default Projects