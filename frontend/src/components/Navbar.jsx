import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/upload">Upload Resume</Link>
      <Link to="/jobs">Job Listings</Link>
      <Link to="/results">Results</Link>
    </nav>
  )
}

export default Navbar