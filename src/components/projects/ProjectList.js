import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    return (
      <div className="project-list section">
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className='card-title'>Project title</span>
            <p>Posted by the Hieu</p>
            <p className='grey-text'> 6th July, 1.30 PM</p>
          </div>
        </div>

        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className='card-title'>Project title</span>
            <p>Posted by the Hieu</p>
            <p className='grey-text'> 6th July, 1.30 PM</p>
          </div>
        </div>

        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className='card-title'>Project title</span>
            <p>Posted by the Hieu</p>
            <p className='grey-text'> 6th July, 1.30 PM</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectList;