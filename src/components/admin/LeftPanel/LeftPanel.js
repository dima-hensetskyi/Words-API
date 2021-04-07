import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftPanel() {
  return (
    <div className="left-panel">
      <ul>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/new-post">NewPost</NavLink>
        </li>
        <li>
          <NavLink to="/docs">Documentation</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default LeftPanel;
