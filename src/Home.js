import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>React Router</h1>
      <img className="react-logo" src="react-router.jpg" alt="react-router logo" />
      <div className="home-links">
        <Link to="/browserrouter">Browswer Router</Link>
        <Link to="/link">Link and NavLink</Link>
        <div>Switch and Route</div>
      </div>
      <div>Resources</div>
      <p>https://reacttraining.com/react-router/web/guides/quick-start</p>
    </div>
  );
}

export default Home;