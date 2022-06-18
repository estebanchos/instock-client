import './Header.scss';
import headerLogo from '../../assets/logo/instock-logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <img src={headerLogo} alt='logo' />
                </Link>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-container'>
                        <NavLink className='header__nav-item' activeClassName='header__nav-item--active' exact to={'/'}>Warehouses</NavLink>
                    </li>
                    <li className='header__nav-container'>
                        <NavLink className='header__nav-item' activeClassName='header__nav-item--active' to={'/inventories'}>Inventory</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;