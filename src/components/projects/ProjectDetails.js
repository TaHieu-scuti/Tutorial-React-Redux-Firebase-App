import React, { Component } from 'react'

export class ProjectDetails extends Component {
  render() {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nostrum cumque labore consectetur commodi officiis impedit magnam. Consequuntur nobis ea inventore doloribus et, accusamus totam hic quia odit magni ratione.</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by the Hieu</div>
            <div className='grey-text'> 6th July, 1.30 PM</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectDetails
