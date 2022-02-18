import { Link } from 'react-router-dom';
import './navbar.css';


export const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to="/next"><button type="button" class="btn btn-primary">React Bootstrap Table Next</button></Link>
        <Link to="/table"><button type="button" class="btn btn-success">Table con Live Search</button></Link>
    </div>
  )
}
