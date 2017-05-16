// Events
import React from 'react';
import * as style from './style';


const Project = (props) => (
  <div id='project' style={style.wrapper}>
    <div>
      {props.projectName}
    </div>
    <div>
      {props.ownerName}
    </div>
    <div>
      {props.projectType}
    </div>
    <div>
      {props.technologies}
    </div>
  </div>
);

export default Event;
