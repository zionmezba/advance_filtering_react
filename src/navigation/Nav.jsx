import './Nav.css';
import { FiHeart } from 'react-icons/fi';
import { CiShoppingCart, CiUser } from 'react-icons/ci';

const Navigation = ({ query, handleInputChange }) => {
    return (
        <nav>
            <div className="nav-container">
                <input type="text" onChange={handleInputChange} className="search-input" placeholder='Enter your search' />
            </div>

            <div className='profile-container'>
                <a href="http://">
                    <FiHeart className='nav-icons' />
                </a>
                <a href="http://">
                    <CiShoppingCart className='nav-icons' />
                </a>
                <a href="http://">
                    <CiUser className='nav-icons' />
                </a>
            </div>
        </nav>
    )
}
export default Navigation;